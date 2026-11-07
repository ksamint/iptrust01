export type LocalizedText = Partial<Record<string, string>>;
export interface Theme {
    keywords?: string[];
    mode?: string;
    buttonText?: string;
    primary?: string;
    accent?: string;
    secondary?: string;
    surface?: string;
    paper?: string;
    ink?: string;
    muted?: string;
    line?: string;
}
export interface Asset {
    format?: string;
    colorway?: string;
    size?: string;
    width?: number | string;
    height?: number | string;
    dimensions?: string;
    path?: string;
    sitePath?: string;
    title?: string;
    documentLogo?: boolean;
    backgroundTransparent?: boolean;
}
export interface Repository {
    accessible?: boolean;
    archived?: boolean;
    commit?: string;
    suffixValid?: boolean;
    url?: string;
    lastUpdatedAt?: string;
    name?: string;
    stale?: boolean;
    error?: string;
    checkedAt?: string;
}
export interface Completeness {
    status?: string;
    checks: Record<string, boolean>;
    score: number;
    missing: string[];
}
export interface Classification {
    tracks?: Record<string, string[]>;
    audiences?: Record<string, string[]>;
    tags?: Record<string, string[]>;
}
export interface TaxonomyTerm {
    id?: string;
    labels?: LocalizedText;
    zh?: string;
    en?: string;
}
export interface Taxonomy {
    industries?: TaxonomyTerm[];
    ipTypes?: TaxonomyTerm[];
    applicationTypes?: TaxonomyTerm[];
}
export interface Brand {
    slug?: string;
    publicSlug?: string;
    source?: {
        github?: string;
    };
    sourceUrl?: string;
    status?: string;
    guideCount?: number;
    adobeAssets?: AdobeAsset[];
    name?: string;
    nativeName?: string;
    names?: LocalizedText;
    mainName?: string;
    mainLanguage?: string;
    assetKey?: string;
    url?: string;
    apiUrl?: string;
    historyUrl?: string;
    designSystemUrl?: string;
    officialWebsite?: string;
    theme?: Theme;
    heroImage?: string;
    logoUrl?: string;
    images?: Asset[];
    description?: string;
    primaryExcerpt?: string;
    intro?: LocalizedText;
    business?: LocalizedText;
    notes?: LocalizedText;
    classification?: Classification;
    display?: Record<string, {
        name?: string;
        secondaryName?: string;
        language?: string;
    }>;
    profile?: {
        intro?: LocalizedText;
        mainLanguage?: string;
        business?: LocalizedText;
        notes?: LocalizedText;
        classification?: Classification;
    };
    repository?: Repository;
    completeness?: Completeness;
    lastUpdatedAt?: string;
    assetKit?: {
        endpoints?: Record<string, string>;
    };
    moodboard?: {
        colors?: string[];
        keywords?: string[];
    };
    guides?: {
        sitePath?: string;
        title?: string;
        html?: string;
        excerpt?: string;
    }[];
    recordClass?: string;
    version?: number;
    primaryIndustry?: string;
    industries?: string[];
    ipType?: string;
    architectureRoles?: string[];
    applicationType?: string;
    lifecycleStatus?: string;
    guidelineMode?: string;
    parentCapable?: boolean;
    payload?: Brand;
}
export interface IpRelation {
    id?: string;
    type?: string;
    primary?: boolean;
    child?: string;
    parent?: string;
}
export interface ApplicationLink {
    ip: string;
    role: string;
}
export interface DirectoryData {
    ips: Brand[];
    taxonomy: Taxonomy;
    applications: Application[];
    relationships: IpRelation[];
}
export interface RepositoryStatus {
    mode?: string;
    items?: Record<string, Repository>;
}
export interface LibraryItem {
    id?: string;
    name?: string;
    logoStatus?: string;
    logoQuality?: string;
    logoUrl?: string;
    rank?: number;
    description?: string;
    industry?: string;
    country?: string;
    year?: number;
    title?: LocalizedText;
    summary?: LocalizedText;
    slug?: string;
    type?: string;
    access?: string;
    sourcePublisher?: string;
    publishedAt?: string;
    headquarters?: string;
    verificationStatus?: string;
    logoProvider?: string;
    officialWebsite?: string;
    logoProvenanceUrl?: string;
    sourceUrl?: string;
    fileUrl?: string;
    sourceId?: string;
}
export interface AdobeAsset {
    id?: string;
    title?: string;
    source?: Asset;
    preview?: Asset;
    hero?: Asset;
    pipeline?: string;
    exports?: {
        page: number;
        png?: Asset;
        jpg?: Asset;
    }[];
}
export interface Application extends Omit<Brand, "description"> {
    description?: LocalizedText;
    links?: ApplicationLink[];
    location?: {
        country?: string;
        province?: string;
        city?: string;
    };
    overrides?: Record<string, unknown>;
}
export interface Graph {
    ip: Brand;
    parents: (IpRelation & {
        parentNames?: LocalizedText;
    })[];
    children: (IpRelation & {
        childNames?: LocalizedText;
    })[];
    applications: Application[];
}
export interface FontCatalog {
    fonts: {
        id: string;
        family?: string;
        name?: string;
        cssStack: string;
        group: string;
        sample?: string;
        assets: {
            mediaUrl: string;
            style?: string;
            weight: string | number;
        }[];
    }[];
    specimens?: LocalizedText;
}
export interface GoogleFontDirectory {
    families: {
        popularity: number;
        groups: string[];
        category: string;
        family: string;
        displayName: string;
        designers: string[];
        subsets: string[];
        source: {
            projectUrl: string;
        };
        styles: number;
        license: {
            spdx: string;
        };
    }[];
    stats: {
        verifiedFamilies: number;
    };
}
export interface SearchResult {
    title?: string;
    subtitle?: string;
    text?: string;
    slug?: string;
    type?: string;
    url?: string;
}
export interface Version {
    url: string;
    shortHash: string;
    message: string;
    date: string;
}
export interface PageList<T> {
    items: T[];
    total?: number;
    storage?: string;
}
