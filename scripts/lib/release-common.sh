# shellcheck shell=bash
# Shared guards for the local release scripts (deploy-cloudflare.sh,
# publish-gh-pages.sh). Owner decision 2026-11-05: no GitHub Actions; the
# operator builds locally and deploys from their own machine. Source this file;
# it does not run anything on its own.

die() { printf 'error: %s\n' "$*" >&2; exit 1; }
log() { printf '==> %s\n' "$*"; }

# The old workflows only ran for a push to main, from a fresh checkout. Refuse
# anything else: a dirty tree, untracked files, or a HEAD that is not exactly
# origin/main after a fetch. Sets RELEASE_SHA.
require_clean_main() {
  local repo=$1 branch=${2:-main} dirty head remote
  git -C "$repo" fetch --quiet origin "$branch" || die "git fetch origin $branch failed"
  dirty=$(git -C "$repo" status --porcelain --untracked-files=normal)
  if [[ -n $dirty ]]; then
    printf '%s\n' "$dirty" >&2
    die "working tree is not clean; commit, stash or remove the files above first"
  fi
  head=$(git -C "$repo" rev-parse HEAD)
  remote=$(git -C "$repo" rev-parse "refs/remotes/origin/$branch")
  [[ $head == "$remote" ]] || die "HEAD $head is not origin/$branch $remote; deploy only the pushed $branch"
  # shellcheck disable=SC2034 # read by the sourcing script
  RELEASE_SHA=$head
}

# Exact Node version from .node-version, as actions/setup-node read it.
require_node_version() {
  local repo=$1 want have
  want=$(tr -d '[:space:]' < "$repo/.node-version")
  have=$(node --version 2>/dev/null | sed 's/^v//') || true
  [[ $have == "$want" ]] || die "Node $want required (.node-version), found ${have:-none}; run 'nvm use' or equivalent"
}

# Build from a clean detached worktree at RELEASE_SHA, like actions/checkout,
# so ignored local files never reach a deploy. Sets RELEASE_TMP and SRC.
make_source_worktree() {
  local repo=$1 sha=$2 name=$3
  RELEASE_REPO=$repo
  RELEASE_TMP=$(mktemp -d "${TMPDIR:-/tmp}/$name.XXXXXX")
  chmod 700 "$RELEASE_TMP"
  SRC=$RELEASE_TMP/src
  git -C "$repo" worktree add --quiet --detach "$SRC" "$sha"
}

cleanup_source_worktree() {
  if [[ -n ${SRC:-} && -d $SRC ]]; then
    git -C "$RELEASE_REPO" worktree remove --force "$SRC" 2>/dev/null || true
  fi
  if [[ -n ${RELEASE_TMP:-} ]]; then rm -rf "$RELEASE_TMP"; fi
  if [[ -n ${RELEASE_REPO:-} ]]; then git -C "$RELEASE_REPO" worktree prune 2>/dev/null || true; fi
}

# One release of a kind at a time (the workflows used concurrency groups).
# flock is optional: on systems without it (macOS) the lock is skipped.
take_release_lock() {
  local repo=$1 name=$2 gitdir
  command -v flock >/dev/null 2>&1 || { log "flock not found; skipping the $name lock"; return 0; }
  gitdir=$(git -C "$repo" rev-parse --path-format=absolute --git-common-dir)
  exec 9>"$gitdir/$name.lock"
  flock -n 9 || die "another $name run holds $gitdir/$name.lock"
}

# Publish a built directory to the gh-pages branch without force: the new
# commit's parent is the current origin/gh-pages, or it is a root (orphan)
# commit when gh-pages does not exist yet. The push is a plain fast-forward;
# if someone else moved gh-pages meanwhile it is rejected and nothing changes.
# Usage: publish_gh_pages <repo> <dir> <source-sha> <push: 1|0>
publish_gh_pages() {
  local repo=$1 out=$2 sha=$3 push=$4 branch=gh-pages
  local gitdir index parent="" tree commit status=0
  gitdir=$(git -C "$repo" rev-parse --absolute-git-dir)
  git -C "$repo" ls-remote --exit-code --heads origin "$branch" >/dev/null || status=$?
  if [[ $status -eq 0 ]]; then
    git -C "$repo" fetch --quiet origin "+refs/heads/$branch:refs/remotes/origin/$branch"
    parent=$(git -C "$repo" rev-parse "refs/remotes/origin/$branch")
    log "gh-pages exists at $parent; committing on top of it"
  elif [[ $status -eq 2 ]]; then
    log "gh-pages does not exist yet; creating it as an orphan branch"
  else
    die "could not list origin/$branch (git ls-remote exit $status)"
  fi
  index=$(mktemp "${TMPDIR:-/tmp}/gh-pages-index.XXXXXX")
  rm -f "$index"
  GIT_DIR=$gitdir GIT_WORK_TREE=$out GIT_INDEX_FILE=$index git -C "$out" add --all --force -- .
  tree=$(GIT_DIR=$gitdir GIT_INDEX_FILE=$index git write-tree)
  rm -f "$index"
  if [[ -n $parent && $tree == "$(git -C "$repo" rev-parse "$parent^{tree}")" ]]; then
    log "gh-pages already has this exact tree; nothing to publish"
    return 0
  fi
  if [[ -n $parent ]]; then
    commit=$(git -C "$repo" commit-tree "$tree" -p "$parent" -m "Publish $sha from main")
  else
    commit=$(git -C "$repo" commit-tree "$tree" -m "Publish $sha from main")
  fi
  if [[ $push == 1 ]]; then
    git -C "$repo" push origin "$commit:refs/heads/$branch"
    log "pushed $commit to origin/$branch"
  else
    log "dry run: built gh-pages commit $commit (tree $tree, $(git -C "$repo" ls-tree -r "$tree" | wc -l | tr -d ' ') files); not pushed"
  fi
}
