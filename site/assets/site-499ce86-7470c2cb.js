const $ = (selector) => document.querySelector(selector);
const BUILD_VERSION = "499ce86-7470c2cb";
const MORE_IP_SLUGS = /* @__PURE__ */ new Set(["qingshuiting", "youyuan-jingmeng", "subangyuan", "xiaotaoyuan", "ganglao-baozailu", "shuangxi-shaola", "mutangwan", "tongxianghui", "tongli-market"]);
const FEATURED_IP_SLUGS = /* @__PURE__ */ new Set(["iptrust", "tableai", "opcglobal", "sidera"]);
const i18n = {
  cn: {
    "hub.name": "\u5C81\u77E5\u793E",
    "hub.description": "\u5C81\u77E5\u793E IPTrust \u662F\u4E00\u4E2A\u9762\u5411\u4EBA\u548C Agent \u7684 IP \u54C1\u724C\u4FE1\u4EFB\u4E2D\u67A2\u3002",
    "nav.manifest": "\u6E05\u5355",
    "nav.admin": "\u7BA1\u7406",
    "nav.directory": "\u76EE\u5F55",
    "nav.about": "\u5173\u4E8E",
    "nav.agent": "\u6211\u662F Agent",
    "nav.partner": "\u6211\u662F\u5408\u4F19\u4EBA",
    "nav.collab": "\u6211\u60F3\u5408\u4F5C",
    "home.lead": "\u9AD8\u697C\u5BBE\u5BA2\u4F3C\u66FE\u8BC6\uFF0C\u65E5\u5149\u5E95\u4E0B\u65E0\u65B0\u4E8B\u3002",
    "home.openJson": "\u6253\u5F00 JSON \u7D22\u5F15",
    "home.adminEdit": "\u7BA1\u7406\u7F16\u8F91",
    "home.systems": "IP \u7CFB\u7EDF",
    "home.sectionTitle": "IP",
    "home.searchPlaceholder": "\u641C\u7D22 IP / Asset Key",
    "home.noResults": "\u6CA1\u6709\u5339\u914D\u7684 IP\u3002",
    "home.directoryLabel": "\u5168\u90E8 IP",
    "home.directoryTitle": "IP \u76EE\u5F55",
    "home.systemLabel": "\u54C1\u724C\u7CFB\u7EDF",
    "home.libraryLabel": "\u53C2\u8003\u8D44\u6599",
    "about.title": "\u5173\u4E8E\u5C81\u77E5\u793E\u3002",
    "about.lead": "\u54C1\u724C\u6807\u51C6\u3001\u8D44\u4EA7\u4E0E\u51FA\u5904\uFF0C\u4F9B\u4EBA\u548C Agent \u6E05\u6670\u8C03\u7528\u3002",
    "about.directoryBody": "\u6D4F\u89C8\u3001\u641C\u7D22\u4E0E\u7B5B\u9009\u5168\u90E8 IP\u3002",
    "about.systemBody": "\u67B6\u6784\u3001\u5185\u6838\u3001\u8868\u8FBE\u3001\u8D44\u4EA7\u4E0E\u6CBB\u7406\u3002",
    "about.libraryBody": "\u6709\u51FA\u5904\u7684\u54C1\u724C\u3001\u6848\u4F8B\u3001\u62A5\u544A\u4E0E\u6570\u636E\u3002",
    "about.fontsBody": "\u5F00\u6E90\u53EF\u5546\u7528\u5B57\u4F53\u4E0E\u6388\u6743\u539F\u6587\u3002",
    "about.accessLabel": "\u8BBF\u95EE",
    "about.accessTitle": "\u7BA1\u7406\u4E0E\u5408\u4F5C\u3002",
    "library.label": "\u77E5\u540D\u54C1\u724C\u8D44\u4EA7",
    "library.title": "\u6743\u5A01\u54C1\u724C\u3001\u6848\u4F8B\u4E0E\u6570\u636E\u3002",
    "library.organizations": "\u7EC4\u7EC7",
    "library.centralEnterprises": "\u4E2D\u592E\u4F01\u4E1A",
    "library.modules": "\u5173\u8054\u6A21\u5757",
    "status.documented": "\u5DF2\u5EFA\u6863",
    "status.placeholder": "\u5F85\u5EFA\u6863",
    "meta.guides": "\u89C4\u8303",
    "copy.reference": "\u590D\u5236",
    "copy.done": "\u5DF2\u590D\u5236",
    "copy.copying": "\u6B63\u5728\u590D\u5236\u2026",
    "copy.selected": "\u5DF2\u9009\u4E2D\uFF0C\u8BF7\u6309 \u2318C / Ctrl+C \u590D\u5236",
    "copy.fail": "\u590D\u5236\u5931\u8D25",
    "copy.referenceDone": "\u5DF2\u590D\u5236 IP Agent Reference",
    "copy.minimalDone": "\u5DF2\u590D\u5236\u6781\u7B80\u54C1\u724C\u4FE1\u606F",
    "copy.assetUrl": "\u590D\u5236\u8D44\u4EA7\u5730\u5740",
    "copy.assetDone": "\u5DF2\u590D\u5236\u8D44\u4EA7\u5730\u5740",
    "brand.download": "\u4E0B\u8F7D",
    "copy.colorDone": "\u5DF2\u590D\u5236\u8272\u503C",
    "copy.pantoneDone": "\u5DF2\u590D\u5236 Pantone \u8FD1\u4F3C\u503C",
    "brand.openJson": "\u6253\u5F00 JSON",
    "brand.copyAgentPack": "\u590D\u5236 Agent Pack",
    "brand.copyMinimal": "\u6781\u7B80\u590D\u5236",
    "brand.source": "\u6E90\u6587\u4EF6",
    "brand.colors": "\u54C1\u724C\u989C\u8272",
    "brand.website": "\u5B98\u7F51",
    "brand.mainLanguage": "\u4E3B\u8BED\u8A00",
    "brand.business": "\u4E1A\u52A1",
    "brand.intro": "\u7B80\u4ECB",
    "brand.notes": "\u5907\u6CE8",
    "brand.tracks": "\u8D5B\u9053",
    "brand.audiences": "\u4EBA\u7FA4",
    "brand.tags": "\u6807\u7B7E",
    "brand.blank": "\u672A\u586B\u5199",
    "brand.editable": "\u53EF\u7F16\u8F91\u6E90\u6587\u4EF6",
    "brand.tokens": "Token \u6587\u4EF6",
    "brand.noneGuide": "\u6682\u65E0\u89C4\u8303\u6587\u4EF6",
    "brand.noneTokens": "\u6682\u65E0 token \u6587\u4EF6",
    "brand.assetHub": "IP \u8D44\u4EA7\u8C03\u7528",
    "brand.assetKey": "IP ID",
    "brand.brandJson": "\u54C1\u724C JSON",
    "brand.imageAssets": "\u56FE\u7247\u8D44\u4EA7",
    "brand.historyApi": "\u5386\u53F2\u7248\u672C",
    "brand.agentUse": "Agent \u8C03\u7528",
    "brand.ipSystem": "IP System",
    "brand.ipSystemBody": "\u628A\u54C1\u724C IP \u7CFB\u7EDF v2 \u5957\u7528\u5230\u5F53\u524D IP\u3002",
    "brand.openIpSystem": "\u6253\u5F00\u6846\u67B6",
    "brand.copyIpSystem": "\u590D\u5236 Apply Brief",
    "brand.ipSystemCopied": "\u5DF2\u590D\u5236 IP System Apply Brief",
    "brand.guideline": "\u54C1\u724C\u89C4\u8303",
    "brand.more": "\u8D44\u6599",
    "brand.moodBoard": "Mood Board",
    "brand.visualAssets": "\u89C6\u89C9\u8D44\u4EA7",
    "brand.documentLogo": "\u6587\u6863\u7EA7\u5C0F Logo",
    "brand.transparent": "\u900F\u660E\u80CC\u666F",
    "brand.adobeAssets": "Adobe \u6E90\u6587\u4EF6",
    "brand.preview": "\u9884\u89C8",
    "brand.original": "\u539F\u59CB\u6587\u4EF6",
    "brand.exportPng": "PNG \u5BFC\u51FA",
    "brand.exportJpg": "JPG \u5BFC\u51FA",
    "brand.keywords": "\u5173\u952E\u8BCD",
    "brand.editProfile": "\u7F16\u8F91\u8D44\u6599",
    "brand.edit": "\u7F16\u8F91",
    "brand.name": "IP \u540D\u79F0",
    "brand.nativeName": "\u5BF9\u7167\u540D\u79F0",
    "brand.description": "\u63CF\u8FF0",
    "brand.saveProfile": "\u4FDD\u5B58",
    "brand.cancelEdit": "\u53D6\u6D88",
    "brand.apiFirst": "\u8FDE\u63A5 API \u540E\u7F16\u8F91\u3002",
    "brand.editReady": "\u5DF2\u8FDE\u63A5\uFF0C\u53EF\u7F16\u8F91\u3002",
    "brand.editing": "\u7F16\u8F91\u4E2D\u3002",
    "brand.saving": "\u4FDD\u5B58\u4E2D...",
    "brand.savedProfile": "\u5DF2\u4FDD\u5B58\uFF0C\u7B49\u5F85\u90E8\u7F72\u3002",
    "brand.saveFailed": "\u4FDD\u5B58\u5931\u8D25\u3002",
    "portal.agentTitle": "\u8C03\u7528\u54C1\u724C\u6807\u51C6\u3002",
    "portal.agentBody": "\u901A\u8FC7 MCP \u6216 JSON \u83B7\u53D6\u4E3B\u540D\u79F0\u3001\u54C1\u724C\u8272\u3001Logo\u3001\u7D20\u6750\u4E0E\u51FA\u5904\u3002",
    "portal.agentAction": "\u590D\u5236 Agent Pack",
    "portal.agentCopied": "Agent Pack \u5DF2\u590D\u5236",
    "portal.copyMcp": "\u590D\u5236 MCP \u914D\u7F6E",
    "portal.mcpCopied": "MCP \u914D\u7F6E\u5DF2\u590D\u5236",
    "portal.openAgentGuide": "Agent \u6307\u5357",
    "portal.agentChecking": "\u68C0\u67E5 MCP",
    "portal.agentOnline": "MCP \u5728\u7EBF",
    "portal.agentOffline": "REST \u53EF\u7528",
    "portal.partnerTitle": "\u6211\u662F\u5408\u4F19\u4EBA",
    "portal.partnerBody": "Key first.",
    "portal.partnerAction": "Key first",
    "portal.partnerStatus": "\u8BF7\u8054\u7CFB\u83B7\u53D6\u7BA1\u7406 API\u3002",
    "portal.partnerPointApi": "API \u53EF\u6309\u5355\u4E2A\u6216\u591A\u4E2A IP \u6388\u6743\u3002",
    "portal.partnerPointLogin": "\u540E\u53F0\u901A\u8FC7 API Key + Google Authenticator \u767B\u5F55\u3002",
    "portal.collabTitle": "\u6211\u60F3\u5408\u4F5C",
    "portal.collabBody": "hi@tableai.ai",
    "portal.collabAction": "Email",
    "portal.collabStatus": "\u6B63\u5728\u6253\u5F00\u90AE\u7BB1\u3002",
    "portal.openIps": "\u67E5\u770B IP",
    "portal.admin": "\u7BA1\u7406\u5165\u53E3",
    "portal.github": "\u53D1\u8D77\u5408\u4F5C",
    "portal.explore": "\u5148\u770B IP",
    "portal.searchApi": "\u641C\u7D22 API",
    "portal.agentNav": "Agent",
    "portal.partnerNav": "\u5408\u4F19\u4EBA",
    "portal.collabNav": "\u5408\u4F5C",
    "evolution.label": "IP\u8FDB\u5316\u8BBA",
    "evolution.title": "\u8BA9\u54C1\u724C\u6210\u4E3A\u53EF\u7BA1\u7406\u7684\u7CFB\u7EDF\u3002",
    "evolution.pageTitle": "\u8BA9\u54C1\u724C\u6301\u7EED\u8FDB\u5316\u3002",
    "evolution.pageLead": "\u67B6\u6784\u3001\u5185\u6838\u3001\u8868\u8FBE\u3001\u8D44\u4EA7\u4E0E\u6CBB\u7406\uFF0C\u6784\u6210\u53EF\u7BA1\u7406\u3001\u53EF\u8C03\u7528\u3001\u53EF\u6301\u7EED\u66F4\u65B0\u7684\u95ED\u73AF\u3002",
    "evolution.architecture": "\u67B6\u6784",
    "evolution.core": "\u5185\u6838",
    "evolution.expression": "\u8868\u8FBE",
    "evolution.assets": "\u8D44\u4EA7",
    "evolution.governance": "\u6CBB\u7406",
    "evolution.architectureBody": "\u5148\u5224\u65AD\u54C1\u724C\u5173\u7CFB\u4E0E\u547D\u540D\u5C42\u7EA7\u3002",
    "evolution.coreBody": "\u660E\u786E\u4F7F\u547D\u3001\u53D7\u4F17\u3001\u5B9A\u4F4D\u4E0E\u4E3B\u5F20\u3002",
    "evolution.expressionBody": "\u7EDF\u4E00\u8BED\u8A00\u3001\u89C6\u89C9\u3001\u58F0\u97F3\u4E0E\u884C\u4E3A\u3002",
    "evolution.assetsBody": "\u628A\u7CFB\u7EDF\u8F6C\u5316\u4E3A\u4EBA\u548C Agent \u53EF\u8C03\u7528\u7684\u8D44\u4EA7\u3002",
    "evolution.governanceBody": "\u8BB0\u5F55\u7248\u672C\u3001\u8861\u91CF\u504F\u5DEE\u5E76\u6301\u7EED\u56DE\u4FEE\u3002",
    "evolution.readFramework": "\u67E5\u770B\u5B8C\u6574\u6B63\u6587",
    "evolution.frameworkTitle": "\u5B8C\u6574\u7CFB\u7EDF",
    "evolution.applyToIp": "\u9009\u62E9\u4E00\u4E2A IP",
    "evolution.exploreMap": "\u63A2\u7D22\u7CFB\u7EDF\u56FE\u8C31",
    "evolution.mapLabel": "\u4EA4\u4E92\u56FE\u8C31",
    "evolution.mapTitle": "\u770B\u89C1\u7CFB\u7EDF\uFF0C\u8FDB\u5165\u7EC6\u8282\u3002",
    "evolution.mapLead": "\u6CBF\u4E3B\u8DEF\u5F84\u7406\u89E3\u65B9\u6CD5\u8BBA\uFF1B\u9009\u62E9\u4EFB\u4E00\u8282\u70B9\uFF0C\u8BFB\u53D6\u5BF9\u5E94\u7AE0\u8282\u7684\u5168\u90E8\u5185\u5BB9\u3002",
    "evolution.mapModules": "\u6A21\u5757",
    "evolution.mapSearch": "\u641C\u7D22\u56FE\u8C31",
    "evolution.mapSearchPlaceholder": "\u4F7F\u547D\u3001\u5B9A\u4F4D\u3001\u8D44\u4EA7\u3001\u6CBB\u7406\u2026",
    "evolution.mapReset": "\u5168\u90E8",
    "evolution.mapSource": "\u5B8C\u6574\u6B63\u6587 \u2193",
    "evolution.loop": "\u8BC6\u522B\u54C1\u724C\uFF0C\u5EFA\u7ACB\u7CFB\u7EDF\uFF0C\u751F\u6210\u8D44\u4EA7\uFF0C\u56DE\u6536\u53CD\u9988\uFF0C\u518D\u6B21\u8FDB\u5316\u3002",
    "fonts.label": "\u5B57\u4F53\u53C2\u8003",
    "fonts.title": "\u5F00\u6E90\u53EF\u5546\u7528\u5B57\u4F53\u3002",
    "fonts.lead": "\u5B98\u65B9\u6765\u6E90\u3001\u660E\u786E\u8BB8\u53EF\u8BC1\u4E0E\u771F\u5B9E\u7F51\u9875\u6837\u5F20\uFF0C\u4F9B\u54C1\u724C\u8868\u8FBE\u548C Agent \u8C03\u7528\u53C2\u8003\u3002",
    "fonts.chinese": "\u4E2D\u6587",
    "fonts.size": "\u5B57\u53F7",
    "fonts.weight": "\u5B57\u91CD",
    "fonts.source": "\u5B98\u65B9\u51FA\u5904",
    "fonts.license": "\u8BB8\u53EF\u8BC1",
    "fonts.commercial": "\u53EF\u5546\u7528",
    "fonts.downloadPackage": "\u4E0B\u8F7D\u5B57\u4F53\u5305",
    "fonts.referenceDocs": "\u53C2\u8003\u6587\u6863",
    "fonts.copyCss": "\u590D\u5236 CSS",
    "fonts.cssCopied": "\u5DF2\u590D\u5236\u5B57\u4F53 CSS",
    "fonts.ready": "\u6EDA\u52A8\u5230\u6B64\u5904\u52A0\u8F7D\u771F\u5B9E\u5B57\u4F53",
    "fonts.loading": "\u6B63\u5728\u52A0\u8F7D\u771F\u5B9E\u5B57\u4F53\u2026",
    "fonts.loaded": "\u771F\u5B9E\u5B57\u4F53\u5DF2\u52A0\u8F7D",
    "fonts.fallback": "\u5B57\u4F53\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u4F7F\u7528\u7CFB\u7EDF\u5B57\u4F53",
    "fonts.licenseNote": "\u6388\u6743\u8BF4\u660E",
    "fonts.openApi": "\u6253\u5F00\u5B57\u4F53 JSON",
    "fonts.curated": "\u4E2A\u5DF2\u6838\u9A8C\u5B57\u4F53\u5BB6\u65CF",
    "fonts.directoryTitle": "\u5F00\u6E90\u53EF\u5546\u7528\u5B57\u4F53\u3002",
    "fonts.families": "\u5B57\u4F53\u5BB6\u65CF",
    "fonts.selfHosted": "\u81EA\u6258\u7BA1",
    "fonts.officialIndexed": "\u5B98\u65B9\u7D22\u5F15",
    "fonts.officialDirectory": "\u5B98\u65B9\u5B8C\u6574\u76EE\u5F55",
    "fonts.officialDirectoryLead": "\u9010\u6B3E\u5339\u914D Google Fonts \u5B98\u65B9\u5143\u6570\u636E\u4E0E\u6E90\u7801\u4ED3\u5E93\u8BB8\u53EF\u8BC1\uFF1B\u6309\u9700\u8F7D\u5165\uFF0C\u4E0D\u62D6\u6162\u9996\u5C4F\u3002",
    "fonts.openDirectoryApi": "\u6253\u5F00\u76EE\u5F55 API",
    "fonts.directoryReady": "\u6EDA\u52A8\u5230\u6B64\u5904\u8F7D\u5165\u5B98\u65B9\u76EE\u5F55\u3002",
    "fonts.directoryLoading": "\u6B63\u5728\u8F7D\u5165\u5B98\u65B9\u76EE\u5F55\u2026",
    "fonts.directoryFailed": "\u5B98\u65B9\u76EE\u5F55\u8F7D\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    "fonts.loadMore": "\u8F7D\u5165\u66F4\u591A",
    "fonts.selfHostedBadge": "\u672C\u7AD9\u6837\u5F20",
    "fonts.googleNote": "Google Fonts \u6536\u5F55\u5B57\u4F53\u5747\u4EE5\u5F00\u6E90\u8BB8\u53EF\u8BC1\u53D1\u5E03\uFF0C\u53EF\u7528\u4E8E\u5546\u4E1A\u9879\u76EE\uFF1B\u5177\u4F53\u4F7F\u7528\u3001\u4FEE\u6539\u4E0E\u518D\u5206\u53D1\u4ECD\u5E94\u9075\u5B88\u6BCF\u6B3E\u5B57\u4F53\u7684\u8BB8\u53EF\u8BC1\u3002",
    "fonts.googleOfficial": "Google \u5B98\u65B9\u8BF4\u660E \u2197",
    "fonts.searchLabel": "\u641C\u7D22\u5B57\u4F53",
    "fonts.all": "\u5168\u90E8",
    "fonts.popular": "\u70ED\u95E8",
    "fonts.categories": "\u5206\u7C7B",
    "fonts.sans": "\u65E0\u886C\u7EBF",
    "fonts.serif": "\u886C\u7EBF",
    "fonts.display": "\u5C55\u793A",
    "fonts.handwriting": "\u4E66\u5199",
    "fonts.mono": "\u7B49\u5BBD",
    "fonts.empty": "\u6CA1\u6709\u5339\u914D\u5B57\u4F53\u3002",
    "fonts.moreSources": "\u66F4\u591A\u5B98\u65B9\u5B57\u4F53\u6765\u6E90",
    "fonts.findMore": "\u53BB\u54EA\u91CC\u627E\u66F4\u591A\u5B57\u4F53\u3002",
    "fonts.licenseTypes": "\u8BB8\u53EF\u8BC1\u5546\u7528\u7C7B\u578B",
    "fonts.readLicense": "\u5148\u770B\u7C7B\u578B\uFF0C\u518D\u770B\u539F\u6587\u3002",
    "fonts.originalLicense": "\u8BB8\u53EF\u8BC1\u539F\u6587",
    "fonts.licenseDisclaimer": "\u8FD9\u91CC\u662F\u9009\u578B\u6458\u8981\uFF0C\u4E0D\u66FF\u4EE3\u8BB8\u53EF\u8BC1\u539F\u6587\u3002\u6B63\u5F0F\u53D1\u5E03\u524D\u4ECD\u9700\u6838\u5BF9\u5177\u4F53\u5B57\u4F53\u7248\u672C\u53CA\u5176\u968F\u9644\u8BB8\u53EF\u8BC1\u3002",
    "api.title": "System API",
    "api.key": "System API Key",
    "api.connect": "Connect",
    "api.connected": "Connected",
    "api.connecting": "Connecting...",
    "api.notConfigured": "Cloudflare secrets \u672A\u914D\u7F6E\u3002",
    "api.badKey": "API Key \u4E0D\u5BF9\u3002",
    "api.badTotp": "\u9A8C\u8BC1\u7801\u4E0D\u5BF9\u3002",
    "api.failed": "\u8FDE\u63A5\u5931\u8D25\u3002",
    "api.scopesGranted": "Access: ",
    "api.allAccess": "\u5168\u90E8 IP",
    "api.openAdmin": "Admin",
    "api.resources": "Resources",
    "api.loadingResources": "\u8BFB\u53D6\u8D44\u6E90\u4E2D...",
    "api.reconnectForResources": "\u8BF7\u91CD\u65B0\u8F93\u5165 System API Key \u540E\u8BFB\u53D6\u8D44\u6E90\u3002",
    "api.copyCurl": "Copy cURL",
    "api.copiedCurl": "\u5DF2\u590D\u5236 cURL \u6A21\u677F\u3002",
    "history.title": "\u5386\u53F2\u7248\u672C",
    "history.empty": "\u6682\u65E0\u7248\u672C\u8BB0\u5F55",
    "search.global": "\u5168\u5C40\u641C\u7D22",
    "admin.unlockTitle": "AI \u539F\u751F\u7BA1\u7406",
    "admin.unlockBody": "\u901A\u8FC7 AI \u539F\u751F\u7684\u65B9\u5F0F\uFF0C\u4E00\u7AD9\u5F0F\u7BA1\u7406\u4F60\u7684\u54C1\u724C\u548C IP\u3002",
    "admin.keyLabel": "Key",
    "admin.totpLabel": "Google Authenticator",
    "admin.scopeLabel": "IP \u6743\u9650\u8303\u56F4",
    "admin.unlockButton": "\u7EE7\u7EED",
    "admin.sync": "\u540C\u6B65",
    "admin.editTitle": "\u7F16\u8F91\u6E90\u6587\u4EF6",
    "admin.githubToken": "Token",
    "admin.branch": "\u5206\u652F",
    "admin.brand": "IP",
    "admin.file": "\u6587\u4EF6",
    "admin.loadFile": "\u8F7D\u5165",
    "admin.saveFile": "\u4FDD\u5B58",
    "admin.commitMessage": "\u63D0\u4EA4\u4FE1\u606F",
    "admin.tokenPlaceholder": "GitHub token",
    "admin.editorPlaceholder": "\u8F7D\u5165\u6587\u4EF6..."
  },
  en: {
    "hub.name": "IPTrust",
    "hub.description": "IPTrust is an IP trust hub for people and agents.",
    "nav.manifest": "Manifest",
    "nav.admin": "Admin",
    "nav.directory": "Directory",
    "nav.about": "About",
    "nav.agent": "I am an Agent",
    "nav.partner": "I am a Partner",
    "nav.collab": "Work with Us",
    "home.lead": "Old guests in high halls; nothing new under the sun.",
    "home.openJson": "Open JSON index",
    "home.adminEdit": "Admin edit",
    "home.systems": "IP systems",
    "home.sectionTitle": "IP",
    "home.searchPlaceholder": "Search IP / Asset Key",
    "home.noResults": "No matching IP.",
    "home.directoryLabel": "All IP",
    "home.directoryTitle": "IP Directory",
    "home.systemLabel": "Brand system",
    "home.libraryLabel": "Reference",
    "about.title": "About IPTrust.",
    "about.lead": "Brand standards, assets, and provenance, clearly callable by people and agents.",
    "about.directoryBody": "Browse, search, and filter every IP.",
    "about.systemBody": "Architecture, core, expression, assets, and governance.",
    "about.libraryBody": "Sourced brands, cases, reports, and data.",
    "about.fontsBody": "Open-source commercial-use fonts and original licenses.",
    "about.accessLabel": "Access",
    "about.accessTitle": "Manage and collaborate.",
    "library.label": "KNOWN BRAND ASSETS",
    "library.title": "Authoritative brands, cases, and data.",
    "library.organizations": "Organizations",
    "library.centralEnterprises": "Central enterprises",
    "library.modules": "Linked modules",
    "status.documented": "Documented",
    "status.placeholder": "Pending",
    "meta.guides": "guides",
    "copy.reference": "Copy",
    "copy.done": "Copied",
    "copy.copying": "Copying\u2026",
    "copy.selected": "Selected. Press Cmd/Ctrl+C to copy.",
    "copy.fail": "Failed",
    "copy.referenceDone": "IP Agent Reference copied",
    "copy.minimalDone": "Minimal brand info copied",
    "copy.assetUrl": "Copy asset URL",
    "copy.assetDone": "Asset URL copied",
    "brand.download": "Download",
    "copy.colorDone": "Color copied",
    "copy.pantoneDone": "Pantone approximation copied",
    "brand.openJson": "Open JSON",
    "brand.copyAgentPack": "Copy Agent Pack",
    "brand.copyMinimal": "Quick copy",
    "brand.source": "Source",
    "brand.colors": "Brand colors",
    "brand.website": "Website",
    "brand.mainLanguage": "Main language",
    "brand.business": "Business",
    "brand.intro": "Intro",
    "brand.notes": "Notes",
    "brand.tracks": "Tracks",
    "brand.audiences": "Audiences",
    "brand.tags": "Tags",
    "brand.blank": "Blank",
    "brand.editable": "Editable source",
    "brand.tokens": "Token files",
    "brand.noneGuide": "No guideline files yet",
    "brand.noneTokens": "No token files yet",
    "brand.assetHub": "IP Asset Calls",
    "brand.assetKey": "IP ID",
    "brand.brandJson": "Brand JSON",
    "brand.imageAssets": "Image assets",
    "brand.historyApi": "History",
    "brand.agentUse": "Agent call",
    "brand.ipSystem": "IP System",
    "brand.ipSystemBody": "Apply Brand IP System v2 to this IP.",
    "brand.openIpSystem": "Open framework",
    "brand.copyIpSystem": "Copy apply brief",
    "brand.ipSystemCopied": "IP System apply brief copied",
    "brand.guideline": "Brand guideline",
    "brand.more": "Details",
    "brand.moodBoard": "Mood Board",
    "brand.visualAssets": "Visual assets",
    "brand.documentLogo": "Document logo",
    "brand.transparent": "Transparent background",
    "brand.adobeAssets": "Adobe sources",
    "brand.preview": "Preview",
    "brand.original": "Original",
    "brand.exportPng": "PNG export",
    "brand.exportJpg": "JPG export",
    "brand.keywords": "Keywords",
    "brand.editProfile": "Edit profile",
    "brand.edit": "Edit",
    "brand.name": "IP name",
    "brand.nativeName": "Alternate name",
    "brand.description": "Description",
    "brand.saveProfile": "Save",
    "brand.cancelEdit": "Cancel",
    "brand.apiFirst": "Connect API to edit.",
    "brand.editReady": "Connected. Ready.",
    "brand.editing": "Editing.",
    "brand.saving": "Saving...",
    "brand.savedProfile": "Saved. Deploying.",
    "brand.saveFailed": "Save failed.",
    "portal.agentTitle": "Call the brand standard.",
    "portal.agentBody": "Use MCP or JSON for the primary name, exact colors, logo, assets, and provenance.",
    "portal.agentAction": "Copy Agent Pack",
    "portal.agentCopied": "Agent Pack copied",
    "portal.copyMcp": "Copy MCP config",
    "portal.mcpCopied": "MCP config copied",
    "portal.openAgentGuide": "Agent guide",
    "portal.agentChecking": "Checking MCP",
    "portal.agentOnline": "MCP online",
    "portal.agentOffline": "REST available",
    "portal.partnerTitle": "I am a Partner",
    "portal.partnerBody": "Key first.",
    "portal.partnerAction": "Key first",
    "portal.partnerStatus": "Contact us for the management API.",
    "portal.partnerPointApi": "API access can be scoped to one or multiple IPs.",
    "portal.partnerPointLogin": "Admin login uses API Key + Google Authenticator.",
    "portal.collabTitle": "Work with Us",
    "portal.collabBody": "hi@tableai.ai",
    "portal.collabAction": "Email",
    "portal.collabStatus": "Opening email.",
    "portal.openIps": "View IPs",
    "portal.admin": "Admin entry",
    "portal.github": "Start on GitHub",
    "portal.explore": "Explore first",
    "portal.searchApi": "Search API",
    "portal.agentNav": "Agent",
    "portal.partnerNav": "Partner",
    "portal.collabNav": "Collab",
    "evolution.label": "IP Evolution",
    "evolution.title": "Turn a brand into a managed system.",
    "evolution.pageTitle": "Build a brand that keeps evolving.",
    "evolution.pageLead": "Architecture, core, expression, assets, and governance form a managed, callable, continuously updated loop.",
    "evolution.architecture": "Architecture",
    "evolution.core": "Core",
    "evolution.expression": "Expression",
    "evolution.assets": "Assets",
    "evolution.governance": "Governance",
    "evolution.architectureBody": "Define brand relationships and naming hierarchy.",
    "evolution.coreBody": "Clarify mission, audience, positioning, and proposition.",
    "evolution.expressionBody": "Align language, visual, sound, and behavior.",
    "evolution.assetsBody": "Create assets that people and agents can call.",
    "evolution.governanceBody": "Track versions, measure gaps, and keep improving.",
    "evolution.readFramework": "Read the full framework",
    "evolution.frameworkTitle": "System contents",
    "evolution.applyToIp": "Choose an IP",
    "evolution.exploreMap": "Explore the system map",
    "evolution.mapLabel": "INTERACTIVE MAP",
    "evolution.mapTitle": "See the system. Enter the detail.",
    "evolution.mapLead": "Follow the main path, then select any node to read its complete source section.",
    "evolution.mapModules": "modules",
    "evolution.mapSearch": "Search the map",
    "evolution.mapSearchPlaceholder": "mission, positioning, assets, governance\u2026",
    "evolution.mapReset": "All",
    "evolution.mapSource": "Full source \u2193",
    "evolution.loop": "Identify the brand. Build the system. Create assets. Learn from feedback. Evolve again.",
    "fonts.label": "TYPE REFERENCE",
    "fonts.title": "Open-source commercial-use fonts.",
    "fonts.lead": "Official provenance, explicit licenses and live web specimens for brand work and Agent use.",
    "fonts.chinese": "Chinese",
    "fonts.size": "Size",
    "fonts.weight": "Weight",
    "fonts.source": "Official source",
    "fonts.license": "License",
    "fonts.commercial": "Commercial use",
    "fonts.downloadPackage": "Download package",
    "fonts.referenceDocs": "Reference",
    "fonts.copyCss": "Copy CSS",
    "fonts.cssCopied": "Font CSS copied",
    "fonts.ready": "Scroll here to load the live font",
    "fonts.loading": "Loading live font\u2026",
    "fonts.loaded": "Live font loaded",
    "fonts.fallback": "Font failed to load; using the system fallback",
    "fonts.licenseNote": "License note",
    "fonts.openApi": "Open font JSON",
    "fonts.curated": "verified font families",
    "fonts.directoryTitle": "Open fonts for commercial use.",
    "fonts.families": "font families",
    "fonts.selfHosted": "self-hosted",
    "fonts.officialIndexed": "official index",
    "fonts.officialDirectory": "Complete official directory",
    "fonts.officialDirectoryLead": "Each family is matched to official Google Fonts metadata and its repository license; the index loads on demand to protect first-load performance.",
    "fonts.openDirectoryApi": "Open directory API",
    "fonts.directoryReady": "Scroll here to load the official directory.",
    "fonts.directoryLoading": "Loading the official directory\u2026",
    "fonts.directoryFailed": "The official directory failed to load. Try again.",
    "fonts.loadMore": "Load more",
    "fonts.selfHostedBadge": "Live specimen",
    "fonts.googleNote": "Google Fonts families are released under open-source licenses and may be used commercially. Use, modification and redistribution still follow each family's license.",
    "fonts.googleOfficial": "Google's official guidance \u2197",
    "fonts.searchLabel": "Search fonts",
    "fonts.all": "All",
    "fonts.popular": "Popular",
    "fonts.categories": "Categories",
    "fonts.sans": "Sans serif",
    "fonts.serif": "Serif",
    "fonts.display": "Display",
    "fonts.handwriting": "Handwriting",
    "fonts.mono": "Monospace",
    "fonts.empty": "No matching fonts.",
    "fonts.moreSources": "More official font sources",
    "fonts.findMore": "Where to find more fonts.",
    "fonts.licenseTypes": "Commercial license types",
    "fonts.readLicense": "Read the type, then the source.",
    "fonts.originalLicense": "Original license",
    "fonts.licenseDisclaimer": "This is a selection summary, not a substitute for the license text. Verify the exact font version and bundled license before release.",
    "api.title": "System API",
    "api.key": "System API Key",
    "api.connect": "Connect",
    "api.connected": "Connected",
    "api.connecting": "Connecting...",
    "api.notConfigured": "Cloudflare secrets are not configured.",
    "api.badKey": "Wrong API Key.",
    "api.badTotp": "Wrong code.",
    "api.failed": "Connection failed.",
    "api.scopesGranted": "Access: ",
    "api.allAccess": "All IP",
    "api.openAdmin": "Admin",
    "api.resources": "Resources",
    "api.loadingResources": "Loading resources...",
    "api.reconnectForResources": "Reconnect with the System API Key to read resources.",
    "api.copyCurl": "Copy cURL",
    "api.copiedCurl": "cURL template copied.",
    "history.title": "Version history",
    "history.empty": "No version records yet",
    "search.global": "Global search",
    "admin.unlockTitle": "AI-native management",
    "admin.unlockBody": "Manage your brands and IPs in one AI-native workspace.",
    "admin.keyLabel": "Key",
    "admin.totpLabel": "Google Authenticator",
    "admin.scopeLabel": "IP scope",
    "admin.unlockButton": "Continue",
    "admin.sync": "Sync",
    "admin.editTitle": "Edit source",
    "admin.githubToken": "Token",
    "admin.branch": "Branch",
    "admin.brand": "IP",
    "admin.file": "File",
    "admin.loadFile": "Load",
    "admin.saveFile": "Save",
    "admin.commitMessage": "Message",
    "admin.tokenPlaceholder": "GitHub token",
    "admin.editorPlaceholder": "Load file..."
  }
};
const localeMeta = {
  cn: { label: "CN", htmlLang: "zh-CN", contentLang: "zh", dateLocale: "zh-CN" },
  en: { label: "EN", htmlLang: "en", contentLang: "en", dateLocale: "en-US" }
};
function normalizeLocale(value) {
  if (value === "zh" || value === "cn" || value === "CN") return "cn";
  if (value === "en" || value === "EN") return "en";
  return "cn";
}
let currentLocale = normalizeLocale(localStorage.getItem("iptrust-locale") || localStorage.getItem("iptrust-lang"));
const publishedDirectory = document.getElementById("directorySnapshot") ? JSON.parse(document.getElementById("directorySnapshot").textContent) : null;
let cachedBrands = document.getElementById("brandListSnapshot") ? JSON.parse(document.getElementById("brandListSnapshot").textContent) : null;
let lastDirectoryData = null;
let cachedSearch = null;
let cachedVersions = null;
let currentQuery = "";
let cachedPortalSkillText = "";
let fontCatalogCache = null;
let googleFontDirectoryCache = null;
let fontSpecimenObserver = null;
function contentLang(locale = currentLocale) {
  return localeMeta[locale]?.contentLang || "zh";
}
function t(key) {
  return i18n[currentLocale]?.[key] || i18n.cn[key] || key;
}
function renderLanguageToggle() {
  const toggle = $("#langToggle");
  if (!toggle) return;
  toggle.setAttribute("aria-label", `Language: ${localeMeta[currentLocale].label}`);
  toggle.innerHTML = `
    <span class="${currentLocale === "cn" ? "is-active" : ""}">CN</span>
    <span class="lang-divider">/</span>
    <span class="${currentLocale === "en" ? "is-active" : ""}">EN</span>
  `;
}
function applyI18n() {
  document.documentElement.lang = localeMeta[currentLocale].htmlLang;
  document.documentElement.dataset.locale = currentLocale;
  if (document.body.classList.contains("hub-home")) {
    document.title = t("hub.name");
  } else if (document.body.classList.contains("about-page")) {
    document.title = `${t("nav.about")} \xB7 ${t("hub.name")}`;
  } else if (document.querySelector(".admin")) {
    document.title = `Admin \xB7 ${t("hub.name")}`;
  }
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  renderLanguageToggle();
  const search = $("#brandSearch");
  if (search) search.placeholder = t("home.searchPlaceholder");
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
  applyFontLibraryLocale();
  setupAgentGateway();
}
function setupLanguageToggle() {
  const toggle = $("#langToggle");
  if (!toggle) return;
  toggle.addEventListener("click", async () => {
    currentLocale = currentLocale === "cn" ? "en" : "cn";
    localStorage.setItem("iptrust-locale", currentLocale);
    localStorage.setItem("iptrust-lang", contentLang(currentLocale));
    applyI18n();
    if (publishedDirectory) await renderDirectory(structuredClone(lastDirectoryData || publishedDirectory), true);
    await renderHeroIndex();
    await renderIndex();
    await renderBrand();
  });
}
function setupSearch() {
  const search = $("#brandSearch");
  if (!search || search.dataset.ready) return;
  search.dataset.ready = "true";
  search.placeholder = t("home.searchPlaceholder");
  search.addEventListener("input", async () => {
    currentQuery = search.value.trim().toLowerCase();
    if ($("#brandGrid")) {
      await renderIndex();
    } else {
      await renderGlobalResults(currentQuery);
    }
  });
  search.addEventListener("focus", async () => {
    currentQuery = search.value.trim().toLowerCase();
    if (currentQuery) await renderGlobalResults(currentQuery);
  });
  search.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    search.value = "";
    currentQuery = "";
    $("#globalResults")?.classList.remove("is-open");
  });
  document.addEventListener("click", (event) => {
    if ((event.target instanceof Element ? event.target : null)?.closest(".topbar-search")) return;
    $("#globalResults")?.classList.remove("is-open");
  });
}
async function loadJson(path) {
  const url = path.startsWith("api/") ? new URL("../" + path, import.meta.url) : new URL(path, location.href);
  url.searchParams.set("v", BUILD_VERSION);
  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), attempt ? 9e3 : 6500);
    try {
      const res = await fetch(url, { cache: attempt ? "reload" : "force-cache", signal: controller.signal });
      if (!res.ok) throw new Error(`Could not load ${path}: ${res.status}`);
      return await res.json();
    } catch (error) {
      lastError = error;
      if (!attempt) await new Promise((resolve) => setTimeout(resolve, 240));
    } finally {
      clearTimeout(timeout);
    }
  }
  throw lastError || new Error(`Could not load ${path}`);
}
async function loadSearch() {
  cachedSearch ??= await loadJson("api/search.json");
  return cachedSearch;
}
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}
function mediaPreviewUrl(value, size = "640") {
  try {
    const url = new URL(value, location.href);
    if (url.hostname === "media.apuch.art" && url.pathname.startsWith("/public/")) {
      url.searchParams.set("size", String(size));
    }
    return url.href;
  } catch {
    return String(value || "");
  }
}
function responsiveImageAttributes(value, widths = [320, 640, 1280], sizes = "100vw") {
  const normalized = [...new Set(widths.map(String))];
  const fallback = normalized[Math.min(1, normalized.length - 1)] || "640";
  const src = mediaPreviewUrl(value, fallback);
  const srcset = normalized.map((width) => mediaPreviewUrl(value, width) + " " + width + "w").join(", ");
  return 'src="' + escapeHtml(src) + '" srcset="' + escapeHtml(srcset) + '" sizes="' + escapeHtml(sizes) + '"';
}
function imageDimensionAttributes(asset = {}) {
  let width = Number(asset.width || 0);
  let height = Number(asset.height || 0);
  if ((!width || !height) && asset.dimensions) {
    const match = String(asset.dimensions).match(/(\d+)\s*[x×]\s*(\d+)/i);
    if (match) {
      width = Number(match[1]);
      height = Number(match[2]);
    }
  }
  return width > 0 && height > 0 ? 'width="' + width + '" height="' + height + '"' : "";
}
function copyIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M5 15V7a2 2 0 0 1 2-2h8"></path></svg>`;
}
function githubIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"></path></svg>`;
}
function downloadIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m-4-4 4 4 4-4M5 20h14"></path></svg>`;
}
function themeStyle(theme = {}) {
  const isDark = theme.mode === "dark";
  const buttonText = theme.buttonText || (isDark ? theme.surface || "#14100A" : "#ffffff");
  const vars = {
    "--brand-primary": theme.primary,
    "--brand-accent": theme.accent,
    "--brand-secondary": theme.secondary,
    "--brand-surface": theme.surface,
    "--brand-paper": theme.paper,
    "--brand-ink": theme.ink,
    "--brand-muted": theme.muted,
    "--brand-line": theme.line,
    "--brand-button-text": buttonText
  };
  return Object.entries(vars).filter(([, value]) => value).map(([key, value]) => `${key}:${value}`).join(";");
}
function themeClass(theme = {}) {
  return theme.mode === "dark" ? "theme-dark" : "theme-light";
}
function swatches(theme = {}, labeled = false) {
  const colors = [
    ["Primary", theme.primary],
    ["Accent", theme.accent],
    ["Secondary", theme.secondary],
    ["Surface", theme.surface],
    ["Ink", theme.ink]
  ].filter(([, value]) => value);
  return `<div class="swatches">${colors.map(([label, value]) => `
    <span class="swatch-pair">
    <span class="swatch" title="${escapeHtml(label)} ${escapeHtml(value)}" style="background:${escapeHtml(value)}"></span>
    ${labeled ? `<span class="swatch-label">${escapeHtml(label)} ${escapeHtml(value)}</span>` : ""}
    </span>
  `).join("")}</div>`;
}
function palette(theme = {}) {
  return [
    ["Primary", theme.primary],
    ["Accent", theme.accent],
    ["Secondary", theme.secondary]
  ].filter(([, value]) => value);
}
function hexToRgb(hex = "") {
  const clean = hex.replace("#", "").trim();
  if (!/^[0-9a-f]{6}$/i.test(clean)) return null;
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16)
  };
}
function rgbValue(hex) {
  const rgb = hexToRgb(hex);
  return rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : hex;
}
function pantoneApprox(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return `PANTONE approx ${hex}`;
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const delta = max - min;
  let hue = 0;
  if (delta) {
    if (max === rgb.r) hue = (rgb.g - rgb.b) / delta % 6;
    if (max === rgb.g) hue = (rgb.b - rgb.r) / delta + 2;
    if (max === rgb.b) hue = (rgb.r - rgb.g) / delta + 4;
    hue = Math.round(hue * 60);
    if (hue < 0) hue += 360;
  }
  if (max < 46) return "PANTONE Black 6 C";
  if (delta < 18) return "PANTONE Cool Gray 7 C";
  if (hue < 20 || hue >= 345) return "PANTONE 7621 C";
  if (hue < 48) return "PANTONE 7578 C";
  if (hue < 74) return "PANTONE 872 C";
  if (hue < 155) return "PANTONE 5535 C";
  if (hue < 190) return "PANTONE 3272 C";
  if (hue < 245) return "PANTONE 296 C";
  if (hue < 292) return "PANTONE 7673 C";
  return "PANTONE 7645 C";
}
function colorDots(theme = {}) {
  return `<span class="hero-index-colors">${palette(theme).map(([label, value]) => `
    <button class="color-dot" type="button" data-copy-rgb="${escapeHtml(rgbValue(value))}" data-copy-pantone="${escapeHtml(pantoneApprox(value))}" data-color-tooltip="${escapeHtml(label)} \xB7 ${escapeHtml(rgbValue(value))} \xB7 Tab ${escapeHtml(pantoneApprox(value))}" aria-label="Copy ${escapeHtml(label)} ${escapeHtml(rgbValue(value))}" title="${escapeHtml(label)} ${escapeHtml(rgbValue(value))}" style="--dot:${escapeHtml(value)}"></button>
  `).join("")}</span>`;
}
function miniPalette(theme = {}) {
  return `<span class="mini-palette" aria-hidden="true">${palette(theme).map(([, value]) => `
    <span class="mini-swatch" style="--dot:${escapeHtml(value)}"></span>
  `).join("")}</span>`;
}
function brandInitial(brand = {}) {
  if (brand.slug === "fengzhi") return "\u754C";
  if (brand.slug === "sidera") return "\u4F8D";
  if (brand.slug === "kaoyu-shenhua") return "\u706B";
  if (brand.slug === "vanahom") return "V";
  if (brand.slug === "kind") return "K";
  if (brand.slug === "tableai") return "AI";
  return String(brand.name || brand.slug || "IP").slice(0, 2);
}
function cardClass(brand = {}) {
  return `ip-card ${themeClass(brand.theme)}`;
}
function cardHeroImage(brand = {}, localized = {}) {
  if (!brand.heroImage) return "";
  return `<img ${responsiveImageAttributes(brand.heroImage, [320, 640, 1280], "(max-width: 760px) 100vw, 33vw")} alt="${escapeHtml(localized.name || brand.name || "")}" loading="lazy" decoding="async">`;
}
function statusLabel(status) {
  return status === "documented" ? t("status.documented") : t("status.placeholder");
}
function localizedBrand(brand = {}) {
  const lang = contentLang();
  const display = brand.display?.[lang] || {};
  const hasIntro = Object.prototype.hasOwnProperty.call(brand.intro ?? {}, lang);
  const hasBusiness = Object.prototype.hasOwnProperty.call(brand.profile?.business ?? brand.business ?? {}, lang);
  const hasNotes = Object.prototype.hasOwnProperty.call(brand.profile?.notes ?? brand.notes ?? {}, lang);
  return {
    name: display.name || brand.name || brand.slug,
    secondaryName: display.secondaryName || brand.nativeName || "",
    intro: hasIntro ? brand.intro?.[lang] ?? "" : brand.primaryExcerpt || brand.description || "",
    business: hasBusiness ? (brand.profile?.business ?? brand.business)?.[lang] ?? "" : "",
    notes: hasNotes ? (brand.profile?.notes ?? brand.notes)?.[lang] ?? "" : ""
  };
}
function localizedClassification(brand = {}, lang = contentLang()) {
  const source = brand.profile?.classification || brand.classification || {};
  const fallbackLang = lang === "zh" ? "en" : "zh";
  const get = (field) => {
    const primary = source[field]?.[lang];
    const fallback = source[field]?.[fallbackLang];
    return Array.isArray(primary) && primary.length ? primary : Array.isArray(fallback) ? fallback : [];
  };
  return {
    tracks: get("tracks"),
    audiences: get("audiences"),
    tags: get("tags")
  };
}
function listText(values = []) {
  return values.filter(Boolean).join(" \xB7 ");
}
function alternateBrandName(brand = {}, main = "") {
  const mainLanguage = brand.display?.default?.language || brand.mainLanguage || contentLang();
  const alternateLang = mainLanguage === "zh" || mainLanguage === "cn" ? "en" : "zh";
  const alternate = brand.display?.[alternateLang]?.name || (alternateLang === "zh" ? brand.nativeName : brand.name) || "";
  return {
    language: alternateLang,
    name: alternate && alternate !== main ? alternate : ""
  };
}
function mainBrand(brand = {}) {
  const display = brand.display?.default || {};
  const lang = display.language || brand.mainLanguage || contentLang();
  const fallback = localizedBrand(brand);
  const name = display.name || brand.mainName || brand.display?.[lang]?.name || fallback.name || brand.slug;
  const alternate = alternateBrandName(brand, name);
  const classification = localizedClassification(brand, lang);
  return {
    name,
    secondaryName: alternate.name || (/[㐀-鿿]/.test(name) ? "English name pending" : "\u4E2D\u6587\u540D\u5F85\u8865\u5145"),
    secondaryLanguage: alternate.language,
    intro: brand.intro?.[lang] || fallback.intro || brand.description || "",
    business: brand.profile?.business?.[lang] || brand.business?.[lang] || "",
    notes: brand.profile?.notes?.[lang] || brand.notes?.[lang] || "",
    classification,
    language: lang
  };
}
function fieldValue(value) {
  return value || t("brand.blank");
}
function languageLabel(value) {
  if (value === "zh" || value === "cn") return "CN";
  if (value === "en") return "EN";
  return value || "";
}
function skillBaseText(skill = "") {
  const skillUrl = new URL("skills/iptrust-live-update/SKILL.md", document.baseURI).href;
  return [
    "IPTrust Skill \u2726",
    "Hub: " + new URL("/", location.origin).href,
    "Agent Entry: " + new URL("agent.json", location.origin + "/").href,
    "Manifest: " + new URL("api/manifest.json", location.href).href,
    "Search API: " + new URL("api/search.json", location.href).href,
    "MCP: " + new URL("mcp", location.href).href,
    `Skill: ${skillUrl}`,
    "",
    skill || "Use the IPTrust manifest and brand APIs to read each IP's latest name, colors, intro, business, language, and guideline files."
  ].join("\n");
}
async function portalSkillText() {
  const skillUrl = new URL("skills/iptrust-live-update/SKILL.md", document.baseURI);
  skillUrl.searchParams.set("v", BUILD_VERSION);
  let skill = "";
  try {
    const res = await fetch(skillUrl);
    if (res.ok) skill = await res.text();
  } catch (error) {
    console.warn("Could not load IPTrust Skill for copy.", error);
  }
  return skillBaseText(skill);
}
function referenceText(brand = {}) {
  const localized = mainBrand(brand);
  const ipPageUrl = new URL(brand.url || `brand.html?brand=${brand.slug}`, location.href).href;
  const apiUrl = new URL(brand.apiUrl || `api/brands/${brand.slug}.json`, location.href).href;
  const historyUrl = new URL(brand.historyUrl || `api/history/${brand.slug}.json`, location.href).href;
  const schemaUrl = new URL("api/schema.json", location.href).href;
  const skillUrl = new URL("skills/iptrust-live-update/SKILL.md", document.baseURI).href;
  const mcpSource = new URL("mcp", location.origin + "/").href;
  const assetApiUrl = new URL(`api/v2/assets?ownerType=owned-ip&ownerId=${encodeURIComponent(brand.slug)}`, location.href).href;
  const preferredLogo = preferredBrandImage(brand.images || []);
  const logoPath = preferredLogo?.sitePath || brand.logoUrl || brand.heroImage || "";
  const logoUrl = logoPath ? new URL(logoPath, location.href).href : "TBD";
  const publicAssetUrls = (brand.images || []).map((image) => image.sitePath).filter(Boolean).map((path) => new URL(path, location.href).href);
  const colors = palette(brand.theme).map(([label, value]) => `${label}: ${value} / ${rgbValue(value)}`).join("\n");
  return [
    "IPTrust Agent Reference",
    "",
    "[IP Identity]",
    `Name: ${localized.name}`,
    localized.secondaryName ? `Other name: ${localized.secondaryName}` : "",
    `IP ID / Asset Key: ${brand.assetKey || brand.slug}`,
    `Main language: ${languageLabel(brand.mainLanguage || localized.language)}`,
    "",
    "[Links]",
    `IP page: ${ipPageUrl}`,
    `Logo URL: ${logoUrl}`,
    `Design system: ${brand.designSystemUrl || "TBD"}`,
    `Official website: ${brand.officialWebsite || "TBD"}`,
    `Brand API: ${apiUrl}`,
    `Assets API: ${assetApiUrl}`,
    `History API: ${historyUrl}`,
    `Field schema: ${schemaUrl}`,
    `IPTrust Skill: ${skillUrl}`,
    `MCP endpoint: ${mcpSource}`,
    publicAssetUrls.length ? `Public assets:
${publicAssetUrls.map((url) => "- " + url).join("\n")}` : "",
    "",
    "[Core]",
    `Intro: ${localized.intro || "TBD"}`,
    `Business: ${localized.business || "TBD"}`,
    `Tracks: ${listText(localized.classification.tracks) || "TBD"}`,
    `Audiences: ${listText(localized.classification.audiences) || "TBD"}`,
    `Tags: ${listText(localized.classification.tags) || "TBD"}`,
    "",
    "[Palette]",
    colors || "TBD",
    "",
    "[Agent Skill Usage]",
    "1. Load the IPTrust Skill first.",
    "2. Prefer MCP tools for live brand standards.",
    "3. Fall back to the Brand API JSON when MCP is unavailable.",
    "4. Keep the main IP name in the main language; show other-language name as a labeled alternate.",
    "",
    "[MCP Calls]",
    `list_brands({})`,
    `get_brand({ "assetKey": "${brand.assetKey || brand.slug}" })`,
    `get_guideline({ "assetKey": "${brand.assetKey || brand.slug}" })`,
    `list_tokens({ "assetKey": "${brand.assetKey || brand.slug}" })`,
    `validate_color({ "assetKey": "${brand.assetKey || brand.slug}", "hex": "${brand.theme?.primary || "#000000"}" })`
  ].join("\n");
}
function minimalReferenceText(brand = {}) {
  const transparentLogo = (brand.images || []).find((image) => image.documentLogo) || (brand.images || []).find((image) => image.backgroundTransparent && image.format === "PNG");
  return [
    `\u4E2D\u6587\u540D: ${brand.display?.zh?.name || "\u6682\u65E0"}`,
    `English: ${brand.display?.en?.name || "TBD"}`,
    `\u4E3B\u8272: ${brand.theme?.primary || "TBD"}`,
    `\u8F85\u52A9\u8272: ${brand.theme?.accent || brand.theme?.secondary || "TBD"}`,
    `\u900F\u660E PNG: ${transparentLogo?.sitePath || "\u6682\u65E0"}`,
    `\u8BBE\u8BA1\u7CFB\u7EDF: ${brand.designSystemUrl || "\u6682\u65E0"}`
  ].join("\n");
}
function ipSystemApplyText(brand = {}) {
  const localized = mainBrand(brand);
  const brandUrl = new URL(brand.url || `brand.html?brand=${brand.slug}`, location.href).href;
  const brandApi = new URL(brand.apiUrl || `api/brands/${brand.slug}.json`, location.href).href;
  const framework = new URL("ip_sys.md", location.href).href;
  return [
    "Apply Brand IP System v2",
    "",
    `IP: ${localized.name}`,
    `IP ID: ${brand.assetKey || brand.slug}`,
    `Main language: ${languageLabel(brand.mainLanguage || localized.language)}`,
    `Tracks: ${listText(localized.classification.tracks) || "TBD"}`,
    `Audiences: ${listText(localized.classification.audiences) || "TBD"}`,
    `Tags: ${listText(localized.classification.tags) || "TBD"}`,
    "",
    `Framework: ${framework}`,
    `Brand page: ${brandUrl}`,
    `Brand API: ${brandApi}`,
    "",
    "Instruction:",
    "Use Brand IP System v2 as the universal operating framework. Apply it to this IP's latest API fields, then produce: 0) brand architecture judgment, 1) IP core, 2) expression system, 3) asset ladder, 4) governance and measurement loop. Keep all recommendations aligned with the IP's main language, tracks, audiences, tags, colors, intro, business, and notes."
  ].join("\n");
}
function copyWithTextarea(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-999px";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  return ok;
}
function showManualCopy(text) {
  document.querySelector(".copy-manual")?.remove();
  const panel = document.createElement("div");
  panel.className = "copy-manual";
  panel.innerHTML = `<textarea readonly></textarea><button type="button" aria-label="Close">\xD7</button>`;
  const textarea = panel.querySelector("textarea");
  textarea.value = text;
  panel.querySelector("button").addEventListener("click", () => panel.remove());
  document.body.appendChild(panel);
  textarea.focus();
  textarea.select();
}
function toastStack() {
  let stack = document.querySelector(".toast-stack");
  if (stack) return stack;
  stack = document.createElement("div");
  stack.className = "toast-stack";
  stack.setAttribute("aria-live", "polite");
  stack.setAttribute("aria-atomic", "true");
  document.body.appendChild(stack);
  return stack;
}
function showToast(message) {
  const stack = toastStack();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  stack.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("is-leaving");
    toast.addEventListener("animationend", () => toast.remove(), { once: true });
  }, 1800);
}
function feedbackMessage(result, copiedKey) {
  return result === "selected" ? t("copy.selected") : t(copiedKey);
}
async function writeClipboardText(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await Promise.race([
        navigator.clipboard.writeText(text),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Clipboard timeout.")), 900))
      ]);
      return "copied";
    }
  } catch (error) {
    console.warn("Clipboard API unavailable, trying legacy copy.", error);
  }
  try {
    if (copyWithTextarea(text)) return "copied";
  } catch (error) {
    console.warn("Legacy copy unavailable, falling back to manual selection.", error);
  }
  showManualCopy(text);
  return "selected";
}
function fontCatalogData() {
  if (fontCatalogCache) return fontCatalogCache;
  const node = $("#fontCatalogData");
  if (!node) return null;
  try {
    fontCatalogCache = JSON.parse(node.textContent || "{}");
  } catch (error) {
    console.warn("Font catalog could not be parsed.", error);
    fontCatalogCache = { fonts: [] };
  }
  return fontCatalogCache;
}
function applyFontLibraryLocale() {
  document.querySelectorAll("[data-font-zh][data-font-en]").forEach((node) => {
    node.textContent = currentLocale === "en" ? node.dataset.fontEn : node.dataset.fontZh;
  });
  document.querySelectorAll("[data-font-load-state]").forEach((node) => {
    node.textContent = t(node.dataset.fontState || "fonts.ready");
  });
}
function setFontLoadState(article, key) {
  const state = article.querySelector("[data-font-load-state]");
  if (!state) return;
  state.dataset.fontState = key;
  state.textContent = t(key);
}
async function loadFontSpecimen(article) {
  if (article.dataset.fontLoaded || article.hidden) return;
  const catalog = fontCatalogData();
  const font = catalog?.fonts?.find((item) => item.id === article.dataset.fontId);
  if (!font) {
    article.classList.add("is-fallback");
    setFontLoadState(article, "fonts.fallback");
    return;
  }
  article.dataset.fontLoaded = "loading";
  setFontLoadState(article, "fonts.loading");
  const alias = `IPTrustDemo-${font.id}`;
  const style = document.createElement("style");
  style.dataset.fontFace = font.id;
  style.textContent = font.assets.map((asset) => `@font-face{font-family:"${alias}";src:url("${String(asset.mediaUrl).replaceAll('"', "%22")}") format("woff2");font-style:${asset.style || "normal"};font-weight:${asset.weight};font-display:swap;}`).join("\\n");
  document.head.appendChild(style);
  article.style.setProperty("--demo-font", `"${alias}", ${font.cssStack}`);
  try {
    if (document.fonts?.load) {
      const weight = $("[data-font-weight]")?.value || "400";
      await Promise.race([
        document.fonts.load(
          `${weight} 32px "${alias}"`,
          String((font.group === "en" ? catalog.specimens?.en : catalog.specimens?.zh) || font.sample).slice(0, 80)
        ),
        new Promise((_, reject) => setTimeout(() => reject(new Error("font_timeout")), 7e3))
      ]);
    }
    article.dataset.fontLoaded = "true";
    article.classList.add("is-loaded");
    setFontLoadState(article, "fonts.loaded");
  } catch (error) {
    article.dataset.fontLoaded = "fallback";
    article.classList.add("is-fallback");
    setFontLoadState(article, "fonts.fallback");
    console.warn(`Font specimen failed: ${font.id}`, error);
  }
}
function setupFontLibrary() {
  const root = $("#open-source-type");
  if (!root || root.dataset.ready) return;
  root.dataset.ready = "true";
  const catalog = fontCatalogData();
  const specimens = [...root.querySelectorAll(".font-specimen")];
  const filterButtons = [...document.querySelectorAll("[data-font-filter]")];
  const size = document.querySelector("[data-font-size]");
  const sizeOutput = document.querySelector("[data-font-size-output]");
  const weight = document.querySelector("[data-font-weight]");
  const directorySearch = document.querySelector("[data-font-search]");
  const categoryButtons = [...document.querySelectorAll(".font-category-list button[data-font-category]")];
  const resultCount = document.querySelector("[data-font-result-count]");
  const empty = document.querySelector("[data-font-empty]");
  const initialParams = new URLSearchParams(location.search);
  let activeGroup = initialParams.get("group") || "all";
  let activeCategory = initialParams.get("category") || "all";
  let directoryQuery = initialParams.get("q") || "";
  const referenceSection = $("#official-font-directory");
  const referenceList = referenceSection?.querySelector("[data-google-font-results]");
  const referenceStatus = referenceSection?.querySelector("[data-google-font-status]");
  const referenceMore = referenceSection?.querySelector("[data-google-font-more]");
  const hostedByFamily = new Map((catalog?.fonts || []).map((font) => [String(font.family || font.name).toLowerCase(), font.id]));
  let referenceLimit = 80;
  let referenceLoading = null;
  const renderOfficialDirectory = () => {
    if (!googleFontDirectoryCache || !referenceList || !referenceStatus) return;
    const normalizedQuery = directoryQuery.trim().toLowerCase();
    const filtered = googleFontDirectoryCache.families.filter((font) => {
      const groupMatch = activeGroup === "all" || (activeGroup === "popular" ? Number(font.popularity) <= 100 : font.groups.includes(activeGroup));
      const categoryMatch = activeCategory === "all" || font.category === activeCategory;
      const queryMatch = !normalizedQuery || [font.family, font.displayName, font.category, font.designers.join(" "), font.subsets.join(" ")].join(" ").toLowerCase().includes(normalizedQuery);
      return groupMatch && categoryMatch && queryMatch;
    });
    const visible = filtered.slice(0, referenceLimit);
    referenceStatus.textContent = `${filtered.length.toLocaleString()} / ${googleFontDirectoryCache.stats.verifiedFamilies.toLocaleString()} Google Fonts`;
    referenceList.innerHTML = visible.map((font) => {
      const hostedId = hostedByFamily.get(font.family.toLowerCase());
      return `
        <a class="font-reference-row" href="${escapeHtml(font.source.projectUrl)}" target="_blank" rel="noreferrer">
          <strong>${escapeHtml(font.family)}${hostedId ? `<span class="font-reference-badge" data-i18n="fonts.selfHostedBadge">${escapeHtml(t("fonts.selfHostedBadge"))}</span>` : ""}</strong>
          <span>${escapeHtml(font.category)} \xB7 ${font.styles} styles</span>
          <span>${escapeHtml(font.subsets.slice(0, 5).join(" \xB7 "))}</span>
          <span class="font-reference-license">${escapeHtml(font.license.spdx)} \u2197</span>
        </a>
      `;
    }).join("");
    if (referenceMore) referenceMore.hidden = visible.length >= filtered.length;
  };
  const activateOfficialDirectory = async () => {
    if (googleFontDirectoryCache) {
      renderOfficialDirectory();
      return;
    }
    if (referenceLoading) return referenceLoading;
    if (referenceStatus) referenceStatus.textContent = t("fonts.directoryLoading");
    referenceLoading = loadJson("api/google-fonts.json").then((data) => {
      googleFontDirectoryCache = data;
      renderOfficialDirectory();
    }).catch((error) => {
      console.warn("Google Fonts directory failed to load.", error);
      if (referenceStatus) referenceStatus.textContent = t("fonts.directoryFailed");
    }).finally(() => {
      referenceLoading = null;
    });
    return referenceLoading;
  };
  const applyFilter = () => {
    root.dataset.activeFontGroup = activeGroup;
    filterButtons.forEach((button) => button.setAttribute("aria-selected", String(button.dataset.fontFilter === activeGroup)));
    categoryButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.fontCategory === activeCategory)));
    const normalizedQuery = directoryQuery.trim().toLowerCase();
    let visible = 0;
    specimens.forEach((article) => {
      const groupMatch = activeGroup === "all" || (activeGroup === "popular" ? Number(article.dataset.fontPopularity) > 0 && Number(article.dataset.fontPopularity) <= 100 : article.dataset.fontGroup === activeGroup);
      const categoryMatch = activeCategory === "all" || article.dataset.fontCategory === activeCategory;
      const queryMatch = !normalizedQuery || (article.dataset.fontSearchText || "").includes(normalizedQuery);
      article.hidden = !(groupMatch && categoryMatch && queryMatch);
      if (!article.hidden) visible += 1;
      if (!article.hidden && !fontSpecimenObserver) loadFontSpecimen(article);
    });
    if (resultCount) resultCount.textContent = String(visible);
    if (empty) empty.hidden = visible !== 0;
    if (document.body.classList.contains("font-directory-page")) {
      const url = new URL(location.href);
      directoryQuery ? url.searchParams.set("q", directoryQuery) : url.searchParams.delete("q");
      activeGroup !== "all" ? url.searchParams.set("group", activeGroup) : url.searchParams.delete("group");
      activeCategory !== "all" ? url.searchParams.set("category", activeCategory) : url.searchParams.delete("category");
      history.replaceState(null, "", url);
    }
    if (googleFontDirectoryCache) renderOfficialDirectory();
    else if (directoryQuery) activateOfficialDirectory();
  };
  filterButtons.forEach((button) => button.addEventListener("click", () => {
    activeGroup = button.dataset.fontFilter;
    applyFilter();
  }));
  categoryButtons.forEach((button) => button.addEventListener("click", () => {
    activeCategory = button.dataset.fontCategory;
    applyFilter();
  }));
  if (directorySearch) {
    directorySearch.value = directoryQuery;
    directorySearch.addEventListener("input", () => {
      directoryQuery = directorySearch.value;
      applyFilter();
    });
  }
  referenceMore?.addEventListener("click", () => {
    referenceLimit += 80;
    renderOfficialDirectory();
  });
  size?.addEventListener("input", () => {
    root.style.setProperty("--font-demo-size", `${size.value}px`);
    if (sizeOutput) sizeOutput.textContent = size.value;
  });
  weight?.addEventListener("change", () => root.style.setProperty("--font-demo-weight", weight.value));
  root.addEventListener("click", async (event) => {
    const button = (event.target instanceof Element ? event.target : null)?.closest("[data-copy-font]");
    if (!button) return;
    const font = catalog?.fonts?.find((item) => item.id === button.dataset.copyFont);
    if (!font) return;
    const result = await writeClipboardText(`font-family: ${font.cssStack};
font-weight: ${weight?.value || "400"};`);
    const message = result === "selected" ? t("copy.selected") : t("fonts.cssCopied");
    showToast(message);
    const previous = button.textContent;
    button.textContent = message;
    setTimeout(() => {
      button.textContent = previous;
    }, 1600);
  });
  if ("IntersectionObserver" in window) {
    const networkNavigator = navigator;
    const network = networkNavigator.connection || networkNavigator.mozConnection || networkNavigator.webkitConnection;
    const conservativeLoading = network?.saveData || /(^|-)2g$/.test(network?.effectiveType || "");
    fontSpecimenObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target instanceof HTMLElement) loadFontSpecimen(entry.target);
        fontSpecimenObserver.unobserve(entry.target);
      });
    }, { rootMargin: conservativeLoading ? "0px" : "160px 0px" });
    specimens.forEach((article) => fontSpecimenObserver.observe(article));
    if (referenceSection) {
      const directoryObserver = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        activateOfficialDirectory();
        directoryObserver.disconnect();
      }, { rootMargin: "360px 0px" });
      directoryObserver.observe(referenceSection);
    }
  } else if (referenceSection) {
    activateOfficialDirectory();
  }
  applyFilter();
  applyFontLibraryLocale();
}
async function copyReference(brand, button, minimal = false) {
  const previous = button.textContent;
  if (!button.dataset.iconOnly) button.textContent = t("copy.copying");
  button.classList.add("copying");
  button.setAttribute("aria-busy", "true");
  const result = await writeClipboardText(minimal ? minimalReferenceText(brand) : referenceText(brand));
  const message = feedbackMessage(result, minimal ? "copy.minimalDone" : "copy.referenceDone");
  if (!button.dataset.iconOnly) button.textContent = message;
  button.classList.remove("copying");
  button.dataset.feedback = message;
  button.classList.add("copied");
  button.removeAttribute("aria-busy");
  showToast(message);
  setTimeout(() => {
    if (!button.dataset.iconOnly) button.textContent = previous || t("copy.reference");
    button.classList.remove("copied");
    delete button.dataset.feedback;
  }, 1200);
}
function mcpConfigText() {
  return JSON.stringify({
    mcpServers: {
      iptrust: {
        type: "http",
        url: new URL("mcp", location.origin + "/").href
      }
    }
  }, null, 2);
}
function setupAgentGateway() {
  const copyButton = document.querySelector("[data-copy-mcp-config]");
  if (copyButton && !copyButton.dataset.ready) {
    copyButton.dataset.ready = "true";
    copyButton.addEventListener("click", async () => {
      const result = await writeClipboardText(mcpConfigText());
      const message = result === "selected" ? t("copy.selected") : t("portal.mcpCopied");
      copyButton.classList.add("copied");
      showToast(message);
      const statusNode = document.querySelector('[data-portal-status="agent"]');
      if (statusNode) statusNode.textContent = message;
      setTimeout(() => copyButton.classList.remove("copied"), 1e3);
    });
  }
  const health = document.querySelector("[data-agent-health]");
  if (!health) return;
  const label = health.querySelector("span");
  if (health.dataset.state === "online" && label) label.textContent = t("portal.agentOnline");
  if (health.dataset.state === "fallback" && label) label.textContent = t("portal.agentOffline");
  if (health.dataset.ready) return;
  health.dataset.ready = "true";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3600);
  fetch(new URL("mcp", location.origin + "/"), {
    headers: { Accept: "application/json" },
    cache: "no-store",
    signal: controller.signal
  }).then((response) => {
    if (!response.ok) throw new Error("MCP unavailable");
    health.dataset.state = "online";
    health.classList.add("is-online");
    if (label) label.textContent = t("portal.agentOnline");
  }).catch(() => {
    health.dataset.state = "fallback";
    if (label) label.textContent = t("portal.agentOffline");
  }).finally(() => clearTimeout(timeout));
}
function setupPortalActions() {
  cachedPortalSkillText = skillBaseText();
  portalSkillText().then((text) => cachedPortalSkillText = text).catch(console.error);
  document.querySelectorAll("[data-portal-action]").forEach((button) => {
    if (button.dataset.ready) return;
    button.dataset.ready = "true";
    button.addEventListener("click", async () => {
      const action = button.dataset.portalAction;
      const href = button.dataset.portalHref;
      const statusNode = document.querySelector(`[data-portal-status="${action}"]`);
      const openTarget = () => {
        if (!href) return;
        window.setTimeout(() => {
          location.href = href;
        }, 620);
      };
      try {
        if (action === "agent") {
          const text = cachedPortalSkillText || skillBaseText();
          const result = await writeClipboardText(text);
          const message = result === "selected" ? t("copy.selected") : t("portal.agentCopied");
          button.classList.add("copied");
          if (statusNode) statusNode.textContent = message;
          showToast(message);
          setTimeout(() => button.classList.remove("copied"), 1e3);
          openTarget();
          return;
        }
        if (action === "partner") {
          if (statusNode) statusNode.textContent = t("portal.partnerStatus");
          button.classList.add("copied");
          showToast(t("portal.partnerStatus"));
          setTimeout(() => button.classList.remove("copied"), 1e3);
          openTarget();
          return;
        }
        if (action === "collab") {
          if (statusNode) statusNode.textContent = t("portal.collabStatus");
          button.classList.add("copied");
          showToast(t("portal.collabStatus"));
          setTimeout(() => button.classList.remove("copied"), 1e3);
          openTarget();
        }
      } catch (error) {
        if (statusNode) statusNode.textContent = t("copy.fail");
        console.error(error);
      }
    });
  });
}
function apiStatus(message, isError = false) {
  const node = $("#apiConnectStatus");
  if (!node) return;
  node.textContent = message;
  node.style.color = isError ? "#b12137" : "#0E8C7B";
}
function apiErrorMessage(error) {
  if (error === "admin_auth_not_configured") return t("api.notConfigured");
  if (error === "bad_api_key") return t("api.badKey");
  if (error === "bad_totp") return t("api.badTotp");
  return error || t("api.failed");
}
function apiCurlTemplate() {
  return [
    `curl -X POST "${new URL("api/v2/auth/exchange", location.href).href}"`,
    `  -H "Content-Type: application/json"`,
    `  -d '{"apiKey":"<SYSTEM_API_KEY>","totp":"<TOTP>"}'`
  ].join("\n");
}
const API_CSRF_SESSION = "iptrust_csrf";
let apiConnection = null;
function renderApiConnected(scopes = ["*"], ipScopes = ["*"]) {
  apiConnection = { scopes, ipScopes };
  $("#apiConnectButton")?.classList.add("api-connected");
  $("#apiConnectPanel")?.classList.add("is-connected");
  $("#apiConnectForm")?.classList.add("hidden");
  $("#apiConnectedOps")?.classList.remove("hidden");
  const scopeText = $("#apiScopeText");
  if (scopeText) {
    scopeText.textContent = scopes.includes("system:*") || ipScopes.includes("*") ? t("api.allAccess") : `${t("api.scopesGranted")}${ipScopes.join(", ")}`;
  }
  apiStatus(t("api.connected"));
  window.dispatchEvent(new CustomEvent("iptrust:api-connected", { detail: { scopes } }));
}
async function loadProtectedResources() {
  const summary = $("#apiResourceSummary");
  if (!summary) return;
  if (!apiConnection) {
    summary.classList.remove("hidden");
    summary.textContent = t("api.reconnectForResources");
    return;
  }
  summary.classList.remove("hidden");
  summary.textContent = t("api.loadingResources");
  try {
    const res = await fetch("api/v2/assets?limit=20", { credentials: "include" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.hint || data.error || t("api.failed"));
    summary.textContent = JSON.stringify({
      assets: data.total,
      items: data.items?.map((item) => ({ id: item.id, ip: item.ownerId, access: item.access, status: item.status })) || []
    }, null, 2);
  } catch (error) {
    summary.textContent = error.message || t("api.failed");
  }
}
function setupApiConnect() {
  const button = $("#apiConnectButton");
  const panel = $("#apiConnectPanel");
  const close = $("#apiConnectClose");
  const submit = $("#apiConnectSubmit");
  const form = $("#apiConnectForm");
  const ops = $("#apiConnectedOps");
  if (!button || !panel || button.dataset.ready) return;
  button.dataset.ready = "true";
  fetch("api/v2/auth/session", { credentials: "include" }).then(async (res) => {
    if (!res.ok) return;
    const data = await res.json();
    renderApiConnected(data.actor?.scopes || [], data.actor?.ipScopes || []);
  }).catch(() => {
  });
  button.addEventListener("click", async () => {
    panel.classList.toggle("hidden");
    if (!panel.classList.contains("hidden") && !button.classList.contains("api-connected")) {
      $("#apiAdminKey")?.focus();
    }
  });
  close?.addEventListener("click", () => panel.classList.add("hidden"));
  document.querySelectorAll("[data-api-copy]").forEach((copyButton) => {
    copyButton.addEventListener("click", async () => {
      const result = await writeClipboardText(apiCurlTemplate());
      const message = result === "selected" ? t("copy.selected") : t("api.copiedCurl");
      apiStatus(message);
      showToast(message);
    });
  });
  $("#apiResourcesButton")?.addEventListener("click", loadProtectedResources);
  const connectApi = async () => {
    const adminKey = $("#apiAdminKey")?.value || "";
    const totp = $("#apiTotpCode")?.value || "";
    apiStatus(t("api.connecting"));
    try {
      const res = await fetch("api/v2/auth/exchange", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ apiKey: adminKey, totp })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.error === "bad_totp") $("#apiTotpField")?.classList.remove("hidden");
        throw new Error(apiErrorMessage(data.error));
      }
      const scopes = data.scopes || [];
      const ipScopes = data.ipScopes || [];
      sessionStorage.setItem(API_CSRF_SESSION, data.csrfToken || "");
      $("#apiAdminKey").value = "";
      if ($("#apiTotpCode")) $("#apiTotpCode").value = "";
      renderApiConnected(scopes, ipScopes);
      showToast(t("api.connected"));
    } catch (error) {
      apiConnection = null;
      sessionStorage.removeItem(API_CSRF_SESSION);
      button.classList.remove("api-connected");
      panel.classList.remove("is-connected");
      form?.classList.remove("hidden");
      ops?.classList.add("hidden");
      apiStatus(error.message || t("api.failed"), true);
      showToast(error.message || t("api.failed"));
    }
  };
  submit?.addEventListener("click", () => connectApi());
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    void connectApi();
  });
}
function apiKeyForWrite() {
  return sessionStorage.getItem(API_CSRF_SESSION) || "";
}
function apiScopesForWrite() {
  return apiConnection?.ipScopes || [];
}
function canManageBrand(slug) {
  const scopes = apiScopesForWrite();
  const permissions = apiConnection?.scopes || [];
  const canWrite = permissions.includes("system:*") || permissions.includes("brands:*") || permissions.includes("brands:write");
  return Boolean(apiKeyForWrite()) && canWrite && (scopes.includes("*") || scopes.includes(slug));
}
function setProfileStatus(message, isError = false) {
  const node = $("#profileEditStatus");
  if (!node) return;
  node.textContent = message;
  node.style.color = isError ? "#b12137" : "#0e8c7b";
}
function setProfileEditorAccess(slug) {
  const editor = $("#profileEditor");
  const button = $("#profileEditButton");
  if (!editor || !button) return;
  const unlocked = canManageBrand(slug);
  editor.dataset.locked = unlocked ? "false" : "true";
  button.disabled = !unlocked;
  if (!unlocked) setProfileStatus(t("brand.apiFirst"), false);
  else setProfileStatus(t("brand.editReady"), false);
}
function fieldPatchValue(form, name) {
  const node = form.querySelector(`[data-profile-field="${name}"]`);
  return node ? node.value : "";
}
function fieldListValue(form, name) {
  return fieldPatchValue(form, name).split(/[,\n·]+/).map((item) => item.trim()).filter(Boolean);
}
function profilePatchFromForm(form) {
  const keywords = fieldPatchValue(form, "theme.keywords").split(/[,\n·]+/).map((item) => item.trim()).filter(Boolean);
  return {
    name: fieldPatchValue(form, "name"),
    nativeName: fieldPatchValue(form, "nativeName"),
    description: fieldPatchValue(form, "description"),
    officialWebsite: fieldPatchValue(form, "officialWebsite"),
    mainLanguage: fieldPatchValue(form, "mainLanguage"),
    intro: {
      zh: fieldPatchValue(form, "intro.zh"),
      en: fieldPatchValue(form, "intro.en")
    },
    business: {
      zh: fieldPatchValue(form, "business.zh"),
      en: fieldPatchValue(form, "business.en")
    },
    notes: {
      zh: fieldPatchValue(form, "notes.zh"),
      en: fieldPatchValue(form, "notes.en")
    },
    classification: {
      tracks: {
        zh: fieldListValue(form, "classification.tracks.zh"),
        en: fieldListValue(form, "classification.tracks.en")
      },
      audiences: {
        zh: fieldListValue(form, "classification.audiences.zh"),
        en: fieldListValue(form, "classification.audiences.en")
      },
      tags: {
        zh: fieldListValue(form, "classification.tags.zh"),
        en: fieldListValue(form, "classification.tags.en")
      }
    },
    theme: {
      primary: fieldPatchValue(form, "theme.primary"),
      accent: fieldPatchValue(form, "theme.accent"),
      secondary: fieldPatchValue(form, "theme.secondary"),
      keywords
    }
  };
}
function profileEditor(brand = {}) {
  const profile = brand.profile || {};
  const intro = brand.intro || profile.intro || {};
  const business = brand.business || profile.business || {};
  const notes = brand.notes || profile.notes || {};
  const classification = brand.classification || profile.classification || {};
  const theme = brand.theme || {};
  return `
    <section class="profile-editor" id="profileEditor" data-brand="${escapeHtml(brand.slug)}" data-locked="true">
      <div class="profile-editor-head">
        <div>
          <p class="eyebrow">API</p>
          <h2>${escapeHtml(t("brand.editProfile"))}</h2>
        </div>
        <button class="button ghost" type="button" id="profileEditButton">${escapeHtml(t("brand.edit"))}</button>
      </div>
      <form class="profile-edit-form hidden" id="profileEditForm">
        <div class="profile-form-grid">
          <label><span>${escapeHtml(t("brand.name"))}</span><input data-profile-field="name" value="${escapeHtml(brand.name || "")}"></label>
          <label><span>${escapeHtml(t("brand.nativeName"))}</span><input data-profile-field="nativeName" value="${escapeHtml(brand.nativeName || "")}"></label>
          <label><span>${escapeHtml(t("brand.website"))}</span><input data-profile-field="officialWebsite" value="${escapeHtml(brand.officialWebsite || "")}"></label>
          <label><span>${escapeHtml(t("brand.mainLanguage"))}</span><select data-profile-field="mainLanguage">
            <option value="zh" ${(brand.mainLanguage || profile.mainLanguage) === "zh" ? "selected" : ""}>CN</option>
            <option value="en" ${(brand.mainLanguage || profile.mainLanguage) === "en" ? "selected" : ""}>EN</option>
          </select></label>
          <label class="span-2"><span>${escapeHtml(t("brand.description"))}</span><textarea data-profile-field="description" rows="2">${escapeHtml(brand.description || "")}</textarea></label>
          <label><span>${escapeHtml(t("brand.intro"))} \xB7 CN</span><textarea data-profile-field="intro.zh" rows="4">${escapeHtml(intro.zh || "")}</textarea></label>
          <label><span>${escapeHtml(t("brand.intro"))} \xB7 EN</span><textarea data-profile-field="intro.en" rows="4">${escapeHtml(intro.en || "")}</textarea></label>
          <label><span>${escapeHtml(t("brand.business"))} \xB7 CN</span><textarea data-profile-field="business.zh" rows="3">${escapeHtml(business.zh || "")}</textarea></label>
          <label><span>${escapeHtml(t("brand.business"))} \xB7 EN</span><textarea data-profile-field="business.en" rows="3">${escapeHtml(business.en || "")}</textarea></label>
          <label><span>${escapeHtml(t("brand.notes"))} \xB7 CN</span><textarea data-profile-field="notes.zh" rows="3">${escapeHtml(notes.zh || "")}</textarea></label>
          <label><span>${escapeHtml(t("brand.notes"))} \xB7 EN</span><textarea data-profile-field="notes.en" rows="3">${escapeHtml(notes.en || "")}</textarea></label>
          <label><span>${escapeHtml(t("brand.tracks"))} \xB7 CN</span><textarea data-profile-field="classification.tracks.zh" rows="2">${escapeHtml((classification.tracks?.zh || []).join(" \xB7 "))}</textarea></label>
          <label><span>${escapeHtml(t("brand.tracks"))} \xB7 EN</span><textarea data-profile-field="classification.tracks.en" rows="2">${escapeHtml((classification.tracks?.en || []).join(" \xB7 "))}</textarea></label>
          <label><span>${escapeHtml(t("brand.audiences"))} \xB7 CN</span><textarea data-profile-field="classification.audiences.zh" rows="2">${escapeHtml((classification.audiences?.zh || []).join(" \xB7 "))}</textarea></label>
          <label><span>${escapeHtml(t("brand.audiences"))} \xB7 EN</span><textarea data-profile-field="classification.audiences.en" rows="2">${escapeHtml((classification.audiences?.en || []).join(" \xB7 "))}</textarea></label>
          <label><span>${escapeHtml(t("brand.tags"))} \xB7 CN</span><textarea data-profile-field="classification.tags.zh" rows="2">${escapeHtml((classification.tags?.zh || []).join(" \xB7 "))}</textarea></label>
          <label><span>${escapeHtml(t("brand.tags"))} \xB7 EN</span><textarea data-profile-field="classification.tags.en" rows="2">${escapeHtml((classification.tags?.en || []).join(" \xB7 "))}</textarea></label>
          <label><span>Primary</span><input data-profile-field="theme.primary" value="${escapeHtml(theme.primary || "")}"></label>
          <label><span>Accent</span><input data-profile-field="theme.accent" value="${escapeHtml(theme.accent || "")}"></label>
          <label><span>Secondary</span><input data-profile-field="theme.secondary" value="${escapeHtml(theme.secondary || "")}"></label>
          <label class="span-2"><span>${escapeHtml(t("brand.keywords"))}</span><textarea data-profile-field="theme.keywords" rows="2">${escapeHtml((theme.keywords || []).join(" \xB7 "))}</textarea></label>
        </div>
        <div class="actions">
          <button class="button" type="submit" id="profileSaveButton">${escapeHtml(t("brand.saveProfile"))}</button>
          <button class="button ghost" type="button" id="profileCancelButton">${escapeHtml(t("brand.cancelEdit"))}</button>
        </div>
      </form>
      <p class="notice" id="profileEditStatus" aria-live="polite"></p>
    </section>
  `;
}
function setupProfileEditor(brand = {}) {
  const editor = $("#profileEditor");
  const form = $("#profileEditForm");
  const editButton = $("#profileEditButton");
  const cancelButton = $("#profileCancelButton");
  if (!editor || !form || !editButton || editor.dataset.ready) return;
  editor.dataset.ready = "true";
  setProfileEditorAccess(brand.slug);
  window.addEventListener("iptrust:api-connected", () => setProfileEditorAccess(brand.slug));
  editButton.addEventListener("click", () => {
    if (!canManageBrand(brand.slug)) {
      setProfileStatus(t("brand.apiFirst"), true);
      $("#apiConnectPanel")?.classList.remove("hidden");
      $("#apiAdminKey")?.focus();
      return;
    }
    form.classList.remove("hidden");
    setProfileStatus(t("brand.editing"));
  });
  cancelButton?.addEventListener("click", () => {
    form.classList.add("hidden");
    setProfileStatus(t("brand.editReady"));
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const key = apiKeyForWrite();
    if (!key) {
      setProfileStatus(t("brand.apiFirst"), true);
      return;
    }
    setProfileStatus(t("brand.saving"));
    try {
      const current = await fetch(`api/v2/brands/${encodeURIComponent(brand.slug)}`, { credentials: "include" });
      if (!current.ok) throw new Error(t("brand.saveFailed"));
      const etag = current.headers.get("etag");
      const res = await fetch(`api/v2/brands/${encodeURIComponent(brand.slug)}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": key,
          "If-Match": etag || "",
          "Idempotency-Key": crypto.randomUUID()
        },
        credentials: "include",
        body: JSON.stringify({
          patch: profilePatchFromForm(form)
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.hint || data.error || t("brand.saveFailed"));
      form.classList.add("hidden");
      setProfileStatus(t("brand.savedProfile"));
      showToast(t("brand.savedProfile"));
    } catch (error) {
      setProfileStatus(error.message || t("brand.saveFailed"), true);
      showToast(error.message || t("brand.saveFailed"));
    }
  });
}
function setupCopyButtons(brands) {
  const bySlug = new Map(brands.map((brand) => [brand.slug, brand]));
  document.querySelectorAll("[data-copy-brand]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      try {
        const brand = bySlug.get(button.dataset.copyBrand);
        if (!brand) throw new Error(`Unknown brand ${button.dataset.copyBrand}`);
        await copyReference(brand, button, button.hasAttribute("data-copy-minimal"));
      } catch (error) {
        button.textContent = t("copy.fail");
        console.error(error);
      }
    });
  });
  document.querySelectorAll("[data-copy-rgb]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const result = await writeClipboardText(button.dataset.copyRgb);
      showToast(feedbackMessage(result, "copy.colorDone"));
      button.classList.add("copied");
      button.title = result === "selected" ? t("copy.selected") : t("copy.done");
      setTimeout(() => button.classList.remove("copied"), 900);
    });
    button.addEventListener("keydown", async (event) => {
      if (event.key !== "Tab") return;
      event.preventDefault();
      event.stopPropagation();
      const result = await writeClipboardText(button.dataset.copyPantone);
      showToast(feedbackMessage(result, "copy.pantoneDone"));
      button.classList.add("copied");
      button.title = result === "selected" ? t("copy.selected") : t("copy.done");
      setTimeout(() => button.classList.remove("copied"), 900);
    });
  });
}
function setupAssetCopyButtons() {
  document.querySelectorAll("[data-copy-asset-url]").forEach((button) => {
    if (button.dataset.ready) return;
    button.dataset.ready = "true";
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      button.classList.add("copying");
      button.setAttribute("aria-busy", "true");
      button.title = t("copy.copying");
      const assetUrl = new URL(button.dataset.copyAssetUrl, location.href).href;
      const result = await writeClipboardText(assetUrl);
      button.classList.remove("copying");
      button.removeAttribute("aria-busy");
      showToast(feedbackMessage(result, "copy.assetDone"));
      button.classList.add("copied");
      button.title = result === "selected" ? t("copy.selected") : t("copy.done");
      setTimeout(() => button.classList.remove("copied"), 900);
    });
  });
}
function normalizeSearchText(value = "") {
  return String(value).toLowerCase();
}
function assetScore(image = {}) {
  const text = [image.path, image.sitePath, image.title].filter(Boolean).join(" ").toLowerCase();
  let score = 0;
  if (image.documentLogo) score += 140;
  if (image.backgroundTransparent) score += 70;
  if (text.includes("logo")) score += 60;
  if (text.includes("a2a")) score += 35;
  if (text.includes("transparent") || text.includes("clear")) score += 42;
  if (text.includes("wide") || text.includes("wordmark")) score += 25;
  if (text.includes("color") || text.includes("red")) score += 32;
  if (text.includes("black")) score += 10;
  if (text.includes("white")) score -= 18;
  if (String(image.sitePath || "").toLowerCase().endsWith(".png")) score += 10;
  if (String(image.sitePath || "").toLowerCase().endsWith(".jpg")) score -= 4;
  if (text.includes("brand-hero")) score -= 90;
  return score;
}
function preferredBrandImage(images = []) {
  if (!images.length) return null;
  const candidates = [...images].sort((a, b) => assetScore(b) - assetScore(a));
  return assetScore(candidates[0]) > 0 ? candidates[0] : images[0];
}
function assetDownloadUrl(asset = {}) {
  const url = new URL(asset.sitePath, location.href);
  url.searchParams.set("download", String(asset.path || url.pathname).split("/").pop() || "asset");
  return url.href;
}
function assetActions(asset = {}) {
  if (!asset.sitePath) return "";
  return `
    <div class="asset-actions">
      <button class="asset-copy-button icon-copy" type="button" data-icon-only="true" data-copy-asset-url="${escapeHtml(asset.sitePath)}" aria-label="${escapeHtml(t("copy.assetUrl"))}">${copyIcon()}</button>
      <a class="asset-download-button" href="${escapeHtml(assetDownloadUrl(asset))}" data-download-asset download aria-label="${escapeHtml(t("brand.download"))}" title="${escapeHtml(t("brand.download"))}">${downloadIcon()}</a>
    </div>
  `;
}
function brandAssetStrip(images = []) {
  if (!images.length) return "";
  return `
    <section class="brand-assets" aria-label="Brand visual assets">
      <p class="eyebrow">${escapeHtml(t("brand.visualAssets"))}</p>
      <div class="brand-asset-strip">
        ${images.map((image) => `
          <div class="brand-asset" title="${escapeHtml(image.title || image.path || "")}">
            <a class="brand-asset-link ${image.colorway ? `asset-colorway-${escapeHtml(image.colorway)}` : ""}" href="${escapeHtml(image.sitePath)}">
              <img ${responsiveImageAttributes(image.sitePath, [320, 640, 1280], "(max-width: 760px) 54vw, 240px")} alt="${escapeHtml(image.title || "")}" loading="lazy" decoding="async">
            </a>
            ${assetActions(image)}
            <div class="brand-asset-info">
              <span class="brand-asset-name">${escapeHtml(image.title || image.path || "Asset")}</span>
              <span class="brand-asset-meta">
                ${image.format ? `<span>${escapeHtml(image.format)}</span>` : ""}
                ${image.size ? `<span>${escapeHtml(image.size)}</span>` : ""}
                ${image.dimensions ? `<span class="brand-asset-dimensions">${escapeHtml(image.dimensions.replace(" x ", " \xD7 "))}</span>` : ""}
                ${image.documentLogo ? `<span>${escapeHtml(t("brand.documentLogo"))}</span>` : ""}
                ${image.backgroundTransparent ? `<span>${escapeHtml(t("brand.transparent"))}</span>` : ""}
              </span>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}
function adobeAssetPanel(adobeAssets = []) {
  if (!adobeAssets.length) return "";
  return `
    <section class="adobe-assets" aria-label="Adobe source assets">
      <div class="adobe-assets-head">
        <p class="eyebrow">${escapeHtml(t("brand.adobeAssets"))}</p>
        <span class="asset-key">AI / EPS / PS / PDF / PSD</span>
      </div>
      ${adobeAssets.map((asset) => `
        <article class="adobe-source-file">
          <div class="adobe-source-preview">
            ${asset.preview?.sitePath ? `<img ${responsiveImageAttributes(asset.preview.sitePath, [320, 640, 1280], "(max-width: 760px) 100vw, 42vw")} alt="${escapeHtml(asset.title || "Adobe asset")}" loading="lazy" decoding="async">` : ""}
            ${assetActions(asset.preview)}
          </div>
          <div class="adobe-source-body">
            <p class="eyebrow">${escapeHtml(asset.source?.format || "ADOBE")}</p>
            <h3>${escapeHtml(asset.title || asset.id || "Adobe asset")}</h3>
            <p class="adobe-source-meta">${escapeHtml([asset.source?.format, asset.source?.size, asset.pipeline].filter(Boolean).join(" \xB7 "))}</p>
            <div class="adobe-downloads">
              ${asset.source?.sitePath ? `<a href="${escapeHtml(asset.source.sitePath)}" download>${escapeHtml(t("brand.original"))}</a>` : ""}
              ${asset.preview?.sitePath ? `<a href="${escapeHtml(asset.preview.sitePath)}" target="_blank">${escapeHtml(t("brand.preview"))}</a>` : ""}
              ${(asset.exports || []).flatMap((page) => [
    page.png?.sitePath ? `<a href="${escapeHtml(page.png.sitePath)}" download>p${page.page} \xB7 ${escapeHtml(t("brand.exportPng"))}</a>` : "",
    page.jpg?.sitePath ? `<a href="${escapeHtml(page.jpg.sitePath)}" download>p${page.page} \xB7 ${escapeHtml(t("brand.exportJpg"))}</a>` : ""
  ]).filter(Boolean).join("")}
            </div>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}
function endpointCard(label, href, code) {
  return `
    <a class="endpoint-card" href="${escapeHtml(href)}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(code)}</strong>
      <code>${escapeHtml(href)}</code>
    </a>
  `;
}
function brandAssetHub(brand = {}) {
  const key = brand.assetKey || brand.slug;
  const endpoints = brand.assetKit?.endpoints || {};
  return `
    <section class="asset-hub" aria-label="IP asset calls">
      <div class="asset-hub-head">
        <div>
          <p class="eyebrow">${escapeHtml(t("brand.assetHub"))}</p>
          <h2>${escapeHtml(t("brand.assetHub"))}</h2>
        </div>
        <div class="asset-key">${escapeHtml(t("brand.assetKey"))}: <code>${escapeHtml(key)}</code></div>
      </div>
      <div class="endpoint-grid">
        ${endpointCard(t("brand.brandJson"), endpoints.brand || brand.apiUrl, `get_brand`)}
        ${endpointCard(t("brand.imageAssets"), endpoints.images || brand.apiUrl, `images[]`)}
        ${endpoints.adobe ? endpointCard(t("brand.adobeAssets"), endpoints.adobe, `adobeAssets[]`) : ""}
        ${endpointCard(t("brand.historyApi"), endpoints.history || brand.historyUrl, `versions[]`)}
        ${endpointCard(t("brand.ipSystem"), "ip-evolution", `apply_ip_system`)}
        ${endpointCard(t("brand.agentUse"), brand.apiUrl, `get_brand({ "assetKey": "${key}" })`)}
      </div>
    </section>
  `;
}
function ipSystemPanel(brand = {}) {
  return `
    <section class="ip-system-panel" aria-label="IP System">
      <div class="ip-system-head">
        <div>
          <p class="eyebrow">${escapeHtml(t("brand.ipSystem"))}</p>
          <h2>${escapeHtml(t("brand.ipSystem"))}</h2>
        </div>
        <div class="actions">
          <a class="button ghost" href="ip-evolution">${escapeHtml(t("brand.openIpSystem"))}</a>
          <button class="button" type="button" data-apply-ip-system="${escapeHtml(brand.slug)}">${escapeHtml(t("brand.copyIpSystem"))}</button>
        </div>
      </div>
      <p>${escapeHtml(t("brand.ipSystemBody"))}</p>
    </section>
  `;
}
function setupIpSystemPanel(brand = {}) {
  document.querySelectorAll("[data-apply-ip-system]").forEach((button) => {
    if (button.dataset.ready) return;
    button.dataset.ready = "true";
    button.addEventListener("click", async () => {
      const result = await writeClipboardText(ipSystemApplyText(brand));
      const message = result === "selected" ? t("copy.selected") : t("brand.ipSystemCopied");
      showToast(message);
      button.classList.add("copied");
      setTimeout(() => button.classList.remove("copied"), 1e3);
    });
  });
}
function moodColorStyle(value = "") {
  const hex = String(value).trim();
  let ink = "var(--brand-ink, var(--ink))";
  if (/^#[0-9a-f]{6}$/i.test(hex)) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    ink = luminance < 0.52 ? "#fff" : "#111";
  }
  return `--mood-color:${escapeHtml(value)};--mood-ink:${ink}`;
}
function moodBoard(brand = {}) {
  const colors = palette(brand.theme).slice(0, 7);
  const keywords = brand.moodboard?.keywords?.length ? brand.moodboard.keywords : brand.theme?.keywords || [];
  return `
    <section class="mood-board" aria-label="Mood board">
      <div class="mood-head">
        <div>
          <p class="eyebrow">${escapeHtml(t("brand.moodBoard"))}</p>
          <h2>${escapeHtml(t("brand.moodBoard"))}</h2>
        </div>
        <div class="asset-key">${escapeHtml(t("brand.assetKey"))}: <code>${escapeHtml(brand.assetKey || brand.slug)}</code></div>
      </div>
      <div class="mood-grid">
        <div>
          <div class="mood-colors">
            ${colors.map(([label, value]) => `
              <div class="mood-color" style="${moodColorStyle(value)}">
                <strong>${escapeHtml(label)}</strong>
                <code>${escapeHtml(value)}</code>
              </div>
            `).join("")}
          </div>
          <div class="mood-keywords" aria-label="${escapeHtml(t("brand.keywords"))}">
            ${keywords.map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join("")}
          </div>
        </div>
        <div>
          ${brandAssetStrip(brand.images || []) || `<p class="muted">${escapeHtml(t("brand.blank"))}</p>`}
        </div>
      </div>
    </section>
  `;
}
function compactBrandFacts(brand = {}, display = {}, localized = {}) {
  const facts = [
    brand.officialWebsite ? [t("brand.website"), `<a href="${escapeHtml(brand.officialWebsite)}">${escapeHtml(brand.officialWebsite)}</a>`] : null,
    localized.business ? [t("brand.business"), escapeHtml(localized.business)] : null,
    display.classification?.tracks?.length ? [t("brand.tracks"), escapeHtml(listText(display.classification.tracks))] : null,
    display.classification?.audiences?.length ? [t("brand.audiences"), escapeHtml(listText(display.classification.audiences))] : null,
    localized.notes ? [t("brand.notes"), escapeHtml(localized.notes)] : null
  ].filter(Boolean);
  if (!facts.length) return "";
  return `<section class="brand-facts">${facts.map(([label, value]) => `<div><strong>${escapeHtml(label)}</strong><p>${value}</p></div>`).join("")}</section>`;
}
function brandAdvancedDetails(brand = {}, display = {}, localized = {}) {
  const guideHtml = brand.guides?.map((guide) => `
    <details class="brand-guide">
      <summary>${escapeHtml(guide.title || t("brand.guideline"))}</summary>
      <div class="rendered-document brand-guide-document">${guide.html || "<p>" + escapeHtml(guide.excerpt || "") + "</p>"}</div>
    </details>
  `).join("") || "";
  return `
    <section id="brand-guidelines" class="brand-section" aria-labelledby="guidelines-title">
      <h2 id="guidelines-title">${currentLocale === "en" ? "Design guidelines" : "\u8BBE\u8BA1\u89C4\u8303"}</h2>
      <p class="muted">${currentLocale === "en" ? "Explore the published guides before creating with this brand." : "\u4ECE\u5DF2\u53D1\u5E03\u7684\u54C1\u724C\u89C4\u8303\u5F00\u59CB\uFF0C\u4FDD\u6301\u6BCF\u4E00\u6B21\u521B\u4F5C\u7684\u4E00\u81F4\u6027\u3002"}</p>
      ${guideHtml || `<p class="muted">${currentLocale === "en" ? "No guide is published here yet. Use the GitHub link above to explore this IP\u2019s design system." : "\u672C\u7AD9\u6682\u672A\u6536\u5F55\u89C4\u8303\uFF0C\u53EF\u901A\u8FC7\u9875\u9996 GitHub \u5165\u53E3\u67E5\u770B\u8BE5 IP \u7684\u8BBE\u8BA1\u7CFB\u7EDF\u3002"}</p>`}
    </section>
    <details class="brand-advanced" id="brand-information">
      <summary><span>${currentLocale === "en" ? "Brand information & tools" : "\u54C1\u724C\u8D44\u6599\u4E0E\u5DE5\u5177"}</span></summary>
      <div class="brand-advanced-body">
        ${compactBrandFacts(brand, display, localized)}
        ${profileEditor(brand)}
        <section class="brand-architecture" id="brandArchitecture" aria-live="polite"></section>
        ${ipSystemPanel(brand)}
        ${brandAssetHub(brand)}
      </div>
    </details>
  `;
}
async function renderGlobalResults(query) {
  const panel = $("#globalResults");
  if (!panel) return;
  const q = normalizeSearchText(query).trim();
  if (!q) {
    panel.classList.remove("is-open");
    panel.innerHTML = "";
    return;
  }
  const search = await loadSearch();
  const results = search.filter((item) => [item.title, item.subtitle, item.text, item.slug, item.type].join(" ").toLowerCase().includes(q)).slice(0, 9);
  if (!results.length) {
    panel.classList.add("is-open");
    panel.innerHTML = `<div class="global-result"><span>${escapeHtml(t("home.noResults"))}</span></div>`;
    return;
  }
  panel.classList.add("is-open");
  panel.innerHTML = results.map((item) => `
    <a class="global-result" href="${escapeHtml(item.url)}">
      <small>${escapeHtml(item.type)} \xB7 IP ID ${escapeHtml(item.slug)}</small>
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.subtitle || item.text || "")}</span>
    </a>
  `).join("");
}
let repositoryStatusPromise = null;
let repositoryStatusFetchedAt = 0;
let repositoryRefreshMode = "snapshot";
const readinessLabels = {
  profile: ["Profile", "\u7B80\u4ECB"],
  business: ["Business description", "\u4E1A\u52A1\u8BF4\u660E"],
  guide: ["Primary guide", "\u4E3B\u6307\u5357"],
  tokens: ["Design tokens", "\u8BBE\u8BA1\u4EE4\u724C"],
  palette: ["Color palette", "\u8272\u677F"],
  logo: ["Public logo", "\u516C\u5F00\u6807\u5FD7"],
  sources: ["Source notes", "\u6765\u6E90\u8BB0\u5F55"],
  classification: ["Classification", "\u5206\u7C7B"],
  repository: ["Accessible active repository", "\u53EF\u8BBF\u95EE\u7684\u6D3B\u8DC3\u4ED3\u5E93"],
  repositoryName: ["Two-digit repo suffix", "\u4ED3\u5E93\u4E24\u4F4D\u6570\u5B57\u540E\u7F00"]
};
async function loadRankedBrands() {
  cachedBrands ??= await loadJson("api/brands.json");
  if (!repositoryStatusPromise || Date.now() - repositoryStatusFetchedAt > 6e4) {
    repositoryStatusFetchedAt = Date.now();
    repositoryStatusPromise = loadJson("api/v2/repository-status").catch(() => loadJson("api/repository-status.json")).catch(() => null);
  }
  const status = await repositoryStatusPromise;
  repositoryRefreshMode = status?.mode || "snapshot";
  cachedBrands = cachedBrands.map((brand) => {
    const repository = status?.items?.[brand.slug] || brand.repository;
    const checks = { ...brand.completeness?.checks, repository: Boolean(repository?.accessible && !repository.archived && repository.commit), repositoryName: Boolean(repository?.suffixValid) };
    const score = Object.values(checks).filter(Boolean).length * 10;
    return { ...brand, designSystemUrl: repository?.url || brand.designSystemUrl, repository, lastUpdatedAt: repository?.lastUpdatedAt || null, completeness: { ...brand.completeness, status: score === 100 ? "inventory-complete" : score >= 70 ? "developing" : "foundation", checks, score, missing: Object.keys(checks).filter((key) => !checks[key]) } };
  }).sort((a, b) => (Date.parse(b.lastUpdatedAt) || 0) - (Date.parse(a.lastUpdatedAt) || 0) || a.slug.localeCompare(b.slug));
  return cachedBrands;
}
function ipHealth(brand, details = false) {
  if (!brand.completeness) return details ? `<p class="ip-health">${currentLocale === "en" ? "Reference IP \xB7 inventory not scored" : "\u53C2\u8003 IP \xB7 \u4E0D\u8BA1\u8D44\u6599\u5B8C\u6574\u5EA6\u5206\u6570"}</p>` : "";
  const en = currentLocale === "en";
  const repo = brand.repository;
  const rank = cachedBrands?.findIndex((item) => item.slug === brand.slug) + 1;
  const date = brand.lastUpdatedAt ? new Date(brand.lastUpdatedAt).toLocaleString(localeMeta[currentLocale].dateLocale) : en ? "Unknown" : "\u672A\u77E5";
  const missing = brand.completeness.missing.map((key) => readinessLabels[key]?.[en ? 0 : 1] || key);
  const day = brand.lastUpdatedAt ? new Date(brand.lastUpdatedAt).toLocaleDateString(localeMeta[currentLocale].dateLocale) : date;
  const title = `${en ? "Missing" : "\u7F3A\u5C11"}: ${missing.join(" \xB7 ") || (en ? "None" : "\u65E0")}`;
  const compact = `<small class="ip-health" title="${escapeHtml(title)}"><span>#${rank || "\u2014"}</span><time${brand.lastUpdatedAt ? ` datetime="${escapeHtml(brand.lastUpdatedAt)}"` : ""} title="${escapeHtml(date)}">${en ? "Updated" : "\u66F4\u65B0"} ${escapeHtml(day)}</time><span class="ip-readiness">${en ? "Readiness" : "\u5C31\u7EEA\u5EA6"} ${brand.completeness.score}% <meter min="0" max="100" value="${brand.completeness.score}" aria-label="${en ? "Inventory readiness" : "\u8D44\u6599\u5C31\u7EEA\u5EA6"}">${brand.completeness.score}%</meter></span></small>`;
  if (!details) return compact;
  return `<div class="ip-health-panel"><details><summary>${compact}</summary><div class="ip-health-more"><span class="repo-audit">${escapeHtml(repo?.name || "\u2014")} \xB7 ${repo?.suffixValid ? en ? "Suffix OK" : "\u540E\u7F00\u5408\u89C4" : en ? "Needs 01 / 02 suffix" : "\u7F3A\u5C11 01 / 02 \u540E\u7F00"}${repo?.stale || repo?.error ? en ? " \xB7 Cached; refresh unavailable" : " \xB7 \u7F13\u5B58\uFF1B\u5237\u65B0\u4E0D\u53EF\u7528" : ""}</span><ul>${Object.entries(brand.completeness.checks).map(([key, ok]) => `<li>${ok ? "\u2713" : "\u25CB"} ${escapeHtml(readinessLabels[key]?.[en ? 0 : 1] || key)}</li>`).join("")}</ul><p>${en ? "Last updated" : "\u6700\u540E\u66F4\u65B0"}: ${escapeHtml(date)}</p><p>${en ? "Checked" : "\u68C0\u67E5\u65F6\u95F4"}: ${escapeHtml(repo?.checkedAt || "\u2014")}</p><p>${en ? "10 inventory checks, 10 points each. Content presence only; legal ownership and design quality are not reviewed." : "10 \u9879\u8D44\u6599\u68C0\u67E5\uFF0C\u6BCF\u9879 10 \u5206\u3002\u53EA\u8BC4\u4F30\u8D44\u6599\u662F\u5426\u9F50\u5907\uFF1B\u672A\u5BA1\u67E5\u6CD5\u5F8B\u6743\u5C5E\u6216\u8BBE\u8BA1\u8D28\u91CF\u3002"}</p></div></details></div>`;
}
async function renderHeroIndex(refresh = false) {
  const index = $("#heroIndex");
  if (!index) return;
  if (refresh) await loadRankedBrands();
  if (!cachedBrands) return;
  const previousScrollTop = index.scrollTop;
  const moreOpen = Boolean(index.querySelector(".more-ips[open]"));
  const row = (brand, idx) => {
    const localized = mainBrand(brand);
    return `
      <div class="hero-index-row${FEATURED_IP_SLUGS.has(brand.slug) ? " is-featured" : ""}" data-brand="${escapeHtml(brand.slug)}" style="${themeStyle(brand.theme)};--row-index:${idx}">
        <a class="hero-index-link" href="${brand.url}">
          <span class="hero-index-title">${escapeHtml(localized.name)}${localized.secondaryName ? ` <span class="hero-index-secondary">\xB7 ${escapeHtml(localized.secondaryName)}</span>` : ""}</span>${ipHealth(brand)}
        </a>
        ${colorDots(brand.theme)}
        <a class="icon-copy hero-index-github" href="${escapeHtml(brand.designSystemUrl || brand.source.github)}" target="_blank" rel="noreferrer" title="Design system / \u8BBE\u8BA1\u7CFB\u7EDF" aria-label="Design system: ${escapeHtml(localized.name)}">${githubIcon()}</a>
        <button class="icon-copy" type="button" data-icon-only="true" data-copy-brand="${escapeHtml(brand.slug)}" aria-label="${escapeHtml(t("copy.reference"))} ${escapeHtml(localized.name)}">${copyIcon()}</button>
      </div>
    `;
  };
  index.innerHTML = cachedBrands.filter((brand) => !MORE_IP_SLUGS.has(brand.slug)).map(row).join("") + `<details class="more-ips" ${moreOpen ? "open" : ""}><summary>${currentLocale === "en" ? "More IPs" : "\u66F4\u591A IP"} \xB7 ${MORE_IP_SLUGS.size}</summary><div class="more-ip-items">${cachedBrands.filter((brand) => MORE_IP_SLUGS.has(brand.slug)).map(row).join("")}</div></details>`;
  index.scrollTop = previousScrollTop;
  setupCopyButtons(cachedBrands);
}
async function renderVersions() {
  const list = $("#versionList");
  if (!list) return;
  cachedVersions ??= await loadJson("api/versions.json");
  if (!cachedVersions.length) {
    list.innerHTML = `<p class="muted">${escapeHtml(t("history.empty"))}</p>`;
    return;
  }
  list.innerHTML = cachedVersions.slice(0, 6).map((version) => `
    <a class="version-item" href="${escapeHtml(version.url)}">
      <strong>${escapeHtml(version.shortHash)}</strong>
      <span>${escapeHtml(version.message)}</span>
      <time>${escapeHtml(new Date(version.date).toLocaleDateString(localeMeta[currentLocale].dateLocale))}</time>
    </a>
  `).join("");
}
async function renderIndex() {
  const grid = $("#brandGrid");
  if (!grid) return;
  await loadRankedBrands();
  const brands = cachedBrands;
  const filtered = currentQuery ? brands.filter((brand) => {
    const localized = mainBrand(brand);
    return [
      brand.slug,
      brand.name,
      brand.nativeName,
      brand.mainName,
      brand.mainLanguage,
      brand.officialWebsite,
      brand.profile?.business?.zh,
      brand.profile?.business?.en,
      brand.profile?.notes?.zh,
      brand.profile?.notes?.en,
      brand.profile?.classification?.tracks?.zh?.join(" "),
      brand.profile?.classification?.tracks?.en?.join(" "),
      brand.profile?.classification?.audiences?.zh?.join(" "),
      brand.profile?.classification?.audiences?.en?.join(" "),
      brand.profile?.classification?.tags?.zh?.join(" "),
      brand.profile?.classification?.tags?.en?.join(" "),
      localized.name,
      localized.secondaryName,
      localized.intro,
      localized.business,
      localized.notes,
      brand.theme?.keywords?.join(" ")
    ].join(" ").toLowerCase().includes(currentQuery);
  }) : brands;
  const count = $("#brandCount");
  if (count) count.textContent = currentQuery ? `${filtered.length}/${brands.length} IP` : `${brands.length} IP`;
  await renderGlobalResults(currentQuery);
  if (!filtered.length) {
    grid.innerHTML = `<p class="empty-state">${escapeHtml(t("home.noResults"))}</p>`;
    return;
  }
  grid.innerHTML = filtered.map((brand) => {
    const localized = mainBrand(brand);
    return `
    <article class="${cardClass(brand)}${FEATURED_IP_SLUGS.has(brand.slug) ? " is-featured" : ""}" data-brand="${escapeHtml(brand.slug)}" style="${themeStyle(brand.theme)}">
      <a class="ip-card-link" href="${brand.url}" aria-label="${escapeHtml(localized.name)}">
        <div class="card-body">
          <div class="card-art">
            ${cardHeroImage(brand, localized)}
            <span class="art-code">${escapeHtml(brand.assetKey || brand.slug)}</span>
          </div>
          <p class="eyebrow">${escapeHtml(statusLabel(brand.status))}</p>
          <h2>${escapeHtml(localized.name)}</h2>
          ${miniPalette(brand.theme)}
          <p class="muted alt-name">${escapeHtml(localized.secondaryName || "")}</p>
          <p class="card-intro">${escapeHtml(localized.intro || "")}</p>
          <div class="card-profile">
            <span>${escapeHtml(t("brand.mainLanguage"))}: ${escapeHtml(languageLabel(brand.mainLanguage || localized.language))}</span>
            <span>${escapeHtml(t("brand.tracks"))}: ${escapeHtml(listText(localized.classification.tracks))}</span>
            <span>${escapeHtml(t("brand.audiences"))}: ${escapeHtml(listText(localized.classification.audiences))}</span>
            <span>${escapeHtml(t("brand.business"))}: ${escapeHtml(localized.business || "")}</span>
          </div>
          ${ipHealth(brand)}
          <div class="meta">
            <span class="pill">${brand.guideCount} ${t("meta.guides")}</span>
            <span class="pill">API</span>
          </div>
        </div>
      </a>
      <button class="copy-reference icon-copy" type="button" data-icon-only="true" data-copy-brand="${escapeHtml(brand.slug)}" aria-label="${escapeHtml(t("copy.reference"))} ${escapeHtml(localized.name)}">${copyIcon()}</button>
    </article>
  `;
  }).join("");
  setupCopyButtons(filtered);
}
async function renderBrand() {
  const page = $("#brandPage");
  if (!page) return;
  const slug = new URLSearchParams(location.search).get("brand") || "tableai";
  const brand = await loadJson(`api/brands/${slug}.json`);
  const display = mainBrand(brand);
  const localized = localizedBrand(brand);
  document.title = `${display.name} \xB7 Brand Guidelines`;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute("content", localized.intro || brand.description || "IPTrust brand guideline and assets.");
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", new URL(`brand?brand=${encodeURIComponent(brand.publicSlug || brand.slug)}`, location.origin + "/").href);
  const hero = brand.adobeAssets?.[0]?.hero?.sitePath ? brand.adobeAssets[0].hero : preferredBrandImage(brand.images || []);
  page.innerHTML = `
    <div class="brand-shell brand-detail ${themeClass(brand.theme)}" style="${themeStyle(brand.theme)}">
      <nav class="brand-breadcrumb" aria-label="${currentLocale === "en" ? "Breadcrumb" : "\u5F53\u524D\u4F4D\u7F6E"}"><a href="directory">\u2190 ${currentLocale === "en" ? "All IPs" : "\u5168\u90E8 IP"}</a><span>/</span><span>${escapeHtml(display.name)}</span></nav>
      <section class="brand-hero">
        <div>
          <p class="eyebrow">${escapeHtml(statusLabel(brand.status))}</p>
          <h1>${escapeHtml(display.name)}</h1>
          <p class="muted alt-name">${escapeHtml(display.secondaryName || "")}</p>
          <p>${escapeHtml(localized.intro)}</p>
          <div class="actions">
            ${brand.designSystemUrl || brand.source?.github ? `<a class="button brand-github" href="${escapeHtml(brand.designSystemUrl || brand.source.github)}" target="_blank" rel="noopener noreferrer">${githubIcon()} GitHub \xB7 ${currentLocale === "en" ? "Design system" : "\u8BBE\u8BA1\u7CFB\u7EDF"} \u2197</a>` : ""}
            <button class="button ghost" type="button" data-copy-brand="${escapeHtml(brand.slug)}" data-copy-minimal>${escapeHtml(t("brand.copyMinimal"))}</button>
            ${brand.officialWebsite ? `<a class="button ghost" href="${escapeHtml(brand.officialWebsite)}">${escapeHtml(t("brand.website"))}</a>` : ""}
          </div>
          <div class="brand-palette">${swatches(brand.theme, true)}</div>
        </div>
        ${hero ? `
          <div class="brand-visual">
            <img ${responsiveImageAttributes(hero.sitePath, [640, 1280, 2400], "(max-width: 900px) 100vw, 52vw")} ${imageDimensionAttributes(hero)} alt="${escapeHtml(hero.title || display.name)}" loading="eager" fetchpriority="high" decoding="async">
            ${assetActions(hero)}
            <div class="brand-visual-meta">
              <strong>${escapeHtml(hero.title || display.name)}</strong>
              <span>${escapeHtml([hero.format, hero.size].filter(Boolean).join(" \xB7 "))}</span>
              ${hero.dimensions ? `<span>${escapeHtml(hero.dimensions.replace(" x ", " \xD7 "))}</span>` : ""}
              ${hero.documentLogo ? `<span>${escapeHtml(t("brand.documentLogo"))}</span>` : ""}
              ${hero.backgroundTransparent ? `<span>${escapeHtml(t("brand.transparent"))}</span>` : ""}
            </div>
          </div>
        ` : ""}
      </section>
      <nav class="brand-sections" aria-label="${currentLocale === "en" ? "On this page" : "\u672C\u9875\u5BFC\u822A"}">
        <a href="#brand-assets">${currentLocale === "en" ? "Visual assets" : "\u89C6\u89C9\u7D20\u6750"}<span>${(brand.images || []).length}</span></a>
        <a href="#brand-guidelines">${currentLocale === "en" ? "Guidelines" : "\u8BBE\u8BA1\u89C4\u8303"}<span>${(brand.guides || []).length}</span></a>
        <a href="#brand-information">${currentLocale === "en" ? "Information & tools" : "\u8D44\u6599\u4E0E\u5DE5\u5177"}</a>
      </nav>
      <section id="brand-assets" class="brand-section" aria-labelledby="assets-title">
        <h2 id="assets-title">${currentLocale === "en" ? "Visual assets" : "\u89C6\u89C9\u7D20\u6750"}</h2>
        <p class="muted">${currentLocale === "en" ? "Preview, copy or download the original brand assets." : "\u9884\u89C8\u3001\u590D\u5236\u6216\u4E0B\u8F7D\u54C1\u724C\u539F\u59CB\u7D20\u6750\u3002"}</p>
        ${brandAssetStrip((brand.images || []).slice(0, 6)) || `<p class="muted">${escapeHtml(t("brand.blank"))}</p>`}
        ${brand.images?.length > 6 ? `<details class="brand-more-assets"><summary>${currentLocale === "en" ? "More assets" : "\u66F4\u591A\u7D20\u6750"} \xB7 ${brand.images.length - 6}</summary>${brandAssetStrip(brand.images.slice(6))}</details>` : ""}
        ${adobeAssetPanel(brand.adobeAssets || [])}
      </section>
      ${brandAdvancedDetails(brand, display, localized)}
    </div>
  `;
  page.setAttribute("aria-busy", "false");
  setupCopyButtons([brand]);
  setupAssetCopyButtons();
  page.querySelector('a[href="#brand-information"]')?.addEventListener("click", () => {
    page.querySelector("#brand-information").open = true;
  });
  const advanced = page.querySelector(".brand-advanced");
  advanced?.addEventListener("toggle", () => {
    if (!advanced.open || advanced.dataset.ready) return;
    advanced.dataset.ready = "true";
    setupProfileEditor(brand);
    setupIpSystemPanel(brand);
    renderBrandArchitecture(brand.slug).catch(console.error);
  });
}
function renderBrandFailure(error) {
  console.error(error);
  const page = $("#brandPage");
  if (!page) return;
  page.setAttribute("aria-busy", "false");
  page.innerHTML = `
    <section class="brand-load-error" role="alert">
      <p>IPTrust \xB7 Connection</p>
      <h1>\u8F7D\u5165\u4E2D\u65AD\u3002</h1>
      <p>Brand data could not be loaded.</p>
      <button class="button" type="button" id="brandReload">\u91CD\u65B0\u8F7D\u5165 \xB7 Retry</button>
    </section>
  `;
  $("#brandReload")?.addEventListener("click", () => location.reload());
}
function primaryIpName(ip = {}) {
  return ip.mainLanguage === "en" ? ip.names?.en || ip.names?.zh || ip.slug : ip.names?.zh || ip.names?.en || ip.slug;
}
function secondaryIpName(ip = {}) {
  const primary = primaryIpName(ip);
  return [ip.names?.zh, ip.names?.en].find((name) => name && name !== primary) || (/[㐀-鿿]/.test(primary) ? "English name pending" : "\u4E2D\u6587\u540D\u5F85\u8865\u5145");
}
async function loadIpSystem() {
  try {
    const [ips, taxonomy, applications, relationships] = await Promise.all([loadJson("api/v2/ips"), loadJson("api/v2/taxonomy"), loadJson("api/v2/applications"), loadJson("api/v2/ip-relations")]);
    return { ips: ips.items || [], taxonomy, applications: applications.items || [], relationships: relationships.items || [] };
  } catch {
    if (publishedDirectory) return structuredClone(publishedDirectory);
    const [snapshot, taxonomy] = await Promise.all([loadJson("api/ips.json"), loadJson("api/taxonomy.json")]);
    return { ips: snapshot.items || [], taxonomy, applications: snapshot.applications || [], relationships: snapshot.relationships || [] };
  }
}
function taxonomyLabel(term = {}) {
  return term.labels?.[currentLocale === "en" ? "en" : "zh"] || term[currentLocale === "en" ? "en" : "zh"] || term.id || "";
}
function selectOptions(items, active, empty) {
  return `<option value="">${escapeHtml(empty)}</option>${items.map((item) => `<option value="${escapeHtml(item.id)}" ${active === item.id ? "selected" : ""}>${escapeHtml(taxonomyLabel(item))}</option>`).join("")}`;
}
async function renderDirectory(initialData = null, snapshotMode = false) {
  const page = $("#directoryPage");
  if (!page) return;
  const data = initialData || await loadIpSystem();
  const rankedBrands = snapshotMode ? cachedBrands || data.ips.filter((ip) => ip.recordClass === "owned").map((ip) => ({ ...ip, display: { zh: { name: ip.names.zh }, en: { name: ip.names.en } } })) : await loadRankedBrands();
  cachedBrands ??= rankedBrands;
  const brandBySlug = new Map(rankedBrands.map((brand) => [brand.slug, brand]));
  const listedSlugs = new Set(data.ips.map((ip) => ip.slug));
  for (const brand of rankedBrands) {
    if (!listedSlugs.has(brand.slug)) data.ips.push({ ...brand, names: { zh: brand.display?.zh?.name, en: brand.display?.en?.name } });
  }
  data.ips = data.ips.map((ip) => ({ ...ip, names: brandBySlug.has(ip.slug) && !(ip.version > 1) ? { zh: brandBySlug.get(ip.slug).display.zh.name, en: brandBySlug.get(ip.slug).display.en.name } : ip.names, designSystemUrl: brandBySlug.get(ip.slug)?.designSystemUrl || ip.designSystemUrl, repository: brandBySlug.get(ip.slug)?.repository, completeness: brandBySlug.get(ip.slug)?.completeness, lastUpdatedAt: brandBySlug.get(ip.slug)?.lastUpdatedAt })).sort((a, b) => (Date.parse(b.lastUpdatedAt) || 0) - (Date.parse(a.lastUpdatedAt) || 0) || a.slug.localeCompare(b.slug));
  lastDirectoryData = data;
  const params = new URLSearchParams(location.search);
  const industry = params.get("industry") || "";
  const ipType = params.get("type") || "";
  const parent = params.get("parent") || "";
  const architectureRole = params.get("architectureRole") || "";
  const query = (params.get("q") || "").trim().toLowerCase();
  const parents = new Map((data.relationships || []).filter((item) => item.type === "brand_parent" && item.primary).map((item) => [item.child, item.parent]));
  const filtered = data.ips.filter((ip) => (!industry || ip.primaryIndustry === industry || ip.industries?.includes(industry)) && (!ipType || ip.ipType === ipType) && (!architectureRole || ip.architectureRoles?.includes(architectureRole)) && (!parent || parents.get(ip.slug) === parent) && (!query || [ip.slug, ip.names?.zh, ip.names?.en].join(" ").toLowerCase().includes(query)));
  const parentIps = data.ips.filter((ip) => ip.architectureRoles?.includes("parent") || (data.relationships || []).some((relation) => relation.parent === ip.slug));
  if (!snapshotMode && page.querySelector(".directory-list") && (document.activeElement?.closest("#directoryFilters") || page.querySelector(".ip-health-panel details[open], .more-ips[open]"))) return;
  const visibleIps = filtered.filter((ip) => !MORE_IP_SLUGS.has(ip.slug));
  const moreIps = filtered.filter((ip) => MORE_IP_SLUGS.has(ip.slug));
  const moreIpsOpen = Boolean(page.querySelector(".more-ips[open]") || query || industry || ipType || parent || architectureRole);
  const renderIpEntry = (ip) => {
    const parentIp = data.ips.find((candidate) => candidate.slug === parents.get(ip.slug));
    const href = ip.recordClass === "owned" ? ip.url || `brand.html?brand=${ip.slug}` : `ip?ip=${ip.slug}`;
    return `<div class="directory-entry${FEATURED_IP_SLUGS.has(ip.slug) ? " is-featured" : ""}"><a class="directory-row" href="${escapeHtml(href)}"><span class="directory-name"><strong>${escapeHtml(primaryIpName(ip))}</strong>${secondaryIpName(ip) ? `<small>${escapeHtml(secondaryIpName(ip))}</small>` : ""}</span><span>${escapeHtml(taxonomyLabel((data.taxonomy.industries || []).find((item) => item.id === ip.primaryIndustry)))}</span><span>${escapeHtml(taxonomyLabel((data.taxonomy.ipTypes || []).find((item) => item.id === ip.ipType)))}</span><span>${parentIp ? `\u21B3 ${escapeHtml(primaryIpName(parentIp))}` : ""}</span><b>\u2197</b></a>${ip.designSystemUrl ? `<a class="directory-design-system" href="${escapeHtml(ip.designSystemUrl)}" target="_blank" rel="noreferrer">${currentLocale === "en" ? "Design system" : "\u8BBE\u8BA1\u7CFB\u7EDF"} \u2197</a>` : ""}${ipHealth(ip, true)}</div>`;
  };
  page.innerHTML = `
    <header class="directory-hero"><p class="eyebrow">IPTrust Directory</p><h1>${currentLocale === "en" ? "IP, clearly structured." : "IP\uFF0C\u4E00\u76EE\u4E86\u7136\u3002"}</h1><p>${data.ips.length} IP \xB7 ${data.applications.length} ${currentLocale === "en" ? "applications" : "\u9879\u76EE\u5E94\u7528"}</p></header>
    <p class="muted">${currentLocale === "en" ? "Newest repository commit first \xB7 refresh every 60 seconds" : "\u6309\u4ED3\u5E93\u6700\u65B0\u63D0\u4EA4\u6392\u5E8F \xB7 \u6BCF 60 \u79D2\u5237\u65B0"} \xB7 ${repositoryRefreshMode === "live" ? currentLocale === "en" ? "Live" : "\u5B9E\u65F6" : currentLocale === "en" ? "Cached snapshot" : "\u7F13\u5B58\u5FEB\u7167"}</p>
    <form class="directory-filters" id="directoryFilters">
      <input type="search" aria-label="Search IP / \u641C\u7D22 IP" name="q" value="${escapeHtml(params.get("q") || "")}" placeholder="${currentLocale === "en" ? "Search IP" : "\u641C\u7D22 IP"}">
      <select name="industry" aria-label="Industry / \u884C\u4E1A">${selectOptions(data.taxonomy.industries || [], industry, currentLocale === "en" ? "All industries" : "\u5168\u90E8\u884C\u4E1A")}</select>
      <button type="submit">${currentLocale === "en" ? "Apply" : "\u7B5B\u9009"}</button>
      <details class="directory-more-filters" ${ipType || parent || architectureRole ? "open" : ""}><summary>${currentLocale === "en" ? "More filters" : "\u66F4\u591A\u7B5B\u9009"}${[ipType, parent, architectureRole].filter(Boolean).length ? " \xB7 " + [ipType, parent, architectureRole].filter(Boolean).length : ""}</summary><div class="directory-advanced-filters">
      <select name="type" aria-label="IP type / IP \u7C7B\u578B">${selectOptions(data.taxonomy.ipTypes || [], ipType, currentLocale === "en" ? "All IP types" : "\u5168\u90E8\u7C7B\u578B")}</select>
      <select name="architectureRole" aria-label="Architecture / \u67B6\u6784"><option value="">${currentLocale === "en" ? "All architecture roles" : "\u5168\u90E8\u67B6\u6784"}</option><option value="parent" ${architectureRole === "parent" ? "selected" : ""}>${currentLocale === "en" ? "Parent IP" : "\u6BCD IP"}</option><option value="child" ${architectureRole === "child" ? "selected" : ""}>${currentLocale === "en" ? "Child IP" : "\u5B50 IP"}</option><option value="standalone" ${architectureRole === "standalone" ? "selected" : ""}>${currentLocale === "en" ? "Standalone" : "\u72EC\u7ACB IP"}</option></select>
      <select name="parent" aria-label="Parent IP / \u6BCD IP"><option value="">${currentLocale === "en" ? "All parent IPs" : "\u5168\u90E8\u6BCD IP"}</option>${parentIps.map((ip) => `<option value="${ip.slug}" ${parent === ip.slug ? "selected" : ""}>${escapeHtml(primaryIpName(ip))}</option>`).join("")}</select>
      </div></details>
    </form>
    <section class="directory-list">${visibleIps.map(renderIpEntry).join("") || (!moreIps.length ? `<p class="empty-state">${escapeHtml(t("home.noResults"))}</p>` : "")}</section>
    ${moreIps.length ? `<details class="more-ips directory-more-ips" ${moreIpsOpen ? "open" : ""}><summary>${currentLocale === "en" ? "More IPs" : "\u66F4\u591A IP"} \xB7 ${moreIps.length}</summary><div class="directory-list">${moreIps.map(renderIpEntry).join("")}</div></details>` : ""}
    <section class="application-directory"><header><p class="eyebrow">Applications</p><h2>${currentLocale === "en" ? "Project applications" : "\u9879\u76EE\u5E94\u7528"}</h2></header>${data.applications.map((app) => `<a href="application?application=${escapeHtml(app.slug)}"><strong>${escapeHtml(app.mainLanguage === "en" ? app.names?.en || app.names?.zh : app.names?.zh || app.names?.en)}</strong><span>${escapeHtml(app.applicationType)}</span><b>\u2197</b></a>`).join("")}</section>
  `;
}
async function fallbackGraph(slug) {
  const data = await loadIpSystem();
  const ip = data.ips.find((item) => item.slug === slug);
  if (!ip) return null;
  const findNames = (candidate) => data.ips.find((item) => item.slug === candidate)?.names || {};
  return {
    ip,
    parents: data.relationships.filter((item) => item.child === slug).map((item) => ({ ...item, parentNames: findNames(item.parent), childNames: findNames(item.child) })),
    children: data.relationships.filter((item) => item.parent === slug).map((item) => ({ ...item, parentNames: findNames(item.parent), childNames: findNames(item.child) })),
    applications: data.applications.filter((app) => app.links?.some((link) => link.ip === slug))
  };
}
async function loadGraph(slug) {
  try {
    return await loadJson(`api/v2/ips/${encodeURIComponent(slug)}/graph`);
  } catch {
    return fallbackGraph(slug);
  }
}
async function renderIpRecord() {
  const page = $("#ipRecordPage");
  if (!page) return;
  const slug = new URLSearchParams(location.search).get("ip") || "";
  const graph = await loadGraph(slug);
  if (!graph) {
    page.innerHTML = `<p class="empty-state">IP not found.</p>`;
    return;
  }
  const ip = graph.ip;
  page.innerHTML = `<article class="record-detail"><p class="eyebrow">${escapeHtml(ip.recordClass)} \xB7 ${escapeHtml(ip.ipType)}</p><h1>${escapeHtml(primaryIpName(ip))}</h1><p class="record-secondary">${escapeHtml(secondaryIpName(ip))}</p><div class="record-facts"><span>${escapeHtml(ip.primaryIndustry)}</span><span>${escapeHtml(ip.lifecycleStatus)}</span><span>${escapeHtml(ip.guidelineMode)}</span></div>${ip.designSystemUrl ? `<a class="button" href="${escapeHtml(ip.designSystemUrl)}" target="_blank" rel="noreferrer">${currentLocale === "en" ? "Design system" : "\u8BBE\u8BA1\u7CFB\u7EDF"} \u2197</a>` : ""}${ip.sourceUrl ? `<a class="button" href="${escapeHtml(ip.sourceUrl)}" rel="noreferrer">Official source \u2197</a>` : ""}</article>${graph.parents?.length ? `<section class="lineage-block"><p class="eyebrow">Parent IP</p>${graph.parents.map((relation) => `<a href="ip?ip=${relation.parent}">${escapeHtml(relation.parentNames?.zh || relation.parentNames?.en || relation.parent)}</a>`).join("")}</section>` : ""}${graph.children?.length ? `<section class="lineage-block"><p class="eyebrow">Child IP</p>${graph.children.map((relation) => `<a href="ip?ip=${relation.child}">${escapeHtml(relation.childNames?.zh || relation.childNames?.en || relation.child)}</a>`).join("")}</section>` : ""}${graph.applications?.length ? `<section class="lineage-block"><p class="eyebrow">Applications</p>${graph.applications.map((app) => `<a href="application?application=${app.slug}">${escapeHtml(primaryIpName(app))}</a>`).join("")}</section>` : ""}`;
}
async function renderApplicationPage() {
  const page = $("#applicationPage");
  if (!page) return;
  const slug = new URLSearchParams(location.search).get("application") || "";
  const ipSystemData = await loadIpSystem();
  let app;
  try {
    app = await loadJson(`api/v2/applications/${encodeURIComponent(slug)}`);
  } catch {
    app = ipSystemData.applications.find((item) => item.slug === slug);
  }
  if (!app) {
    page.innerHTML = `<p class="empty-state">Application not found.</p>`;
    return;
  }
  const title = app.mainLanguage === "en" ? app.names?.en || app.names?.zh : app.names?.zh || app.names?.en;
  const primary = app.links?.find((link) => link.role === "primary")?.ip || "";
  const primaryRecord = ipSystemData.ips.find((item) => item.slug === primary);
  page.innerHTML = `<article class="record-detail"><p class="eyebrow">${escapeHtml(app.applicationType)} \xB7 Application</p><h1>${escapeHtml(title)}</h1><p class="record-secondary">${escapeHtml(app.description?.[currentLocale === "en" ? "en" : "zh"] || app.description?.zh || app.description?.en || "")}</p><div class="record-facts"><a href="ip?ip=${escapeHtml(primary)}">Primary IP \xB7 ${escapeHtml(primaryRecord ? primaryIpName(primaryRecord) : primary)}</a><span>${escapeHtml(app.guidelineMode)} guidelines</span><span>${escapeHtml([app.location?.province, app.location?.city].filter(Boolean).join(" \xB7 "))}</span></div></article>`;
  const [assetData, historyData] = await Promise.all([
    loadJson("api/v2/assets?ownerType=ip-application&ownerId=" + encodeURIComponent(slug)).catch(() => ({ items: [] })),
    loadJson("api/v2/applications/" + encodeURIComponent(slug) + "/history").catch(() => ({ items: [] }))
  ]);
  const details = document.createElement("section");
  details.className = "application-details";
  const linked = (app.links || []).filter((link) => link.role !== "primary");
  const business = app.business?.[currentLocale === "en" ? "en" : "zh"] || app.business?.zh || app.business?.en || "";
  details.innerHTML = '<div><p class="eyebrow">Guideline inheritance</p><h2>' + escapeHtml(app.guidelineMode === "inherit" ? "\u7EE7\u627F\u4E3B IP \u89C4\u8303" : app.guidelineMode) + "</h2><p>" + escapeHtml(Object.keys(app.overrides || {}).length ? "\u542B\u5C40\u90E8\u8986\u76D6" : "\u65E0\u5C40\u90E8\u8986\u76D6") + '</p></div><div><p class="eyebrow">Linked IP</p>' + (linked.map((link) => '<a href="ip?ip=' + escapeHtml(link.ip) + '">' + escapeHtml(link.role + " \xB7 " + link.ip) + "</a>").join("") || '<p class="muted">None</p>') + '</div><div><p class="eyebrow">Business</p><p>' + escapeHtml(business || t("brand.blank")) + '</p></div><div><p class="eyebrow">Assets</p><p>' + escapeHtml(String(assetData.items?.length || 0)) + ' files</p></div><div><p class="eyebrow">History</p><p>' + escapeHtml(String(historyData.items?.length || 0)) + " revisions</p></div>";
  page.append(details);
}
async function renderBrandArchitecture(slug) {
  const node = $("#brandArchitecture");
  if (!node) return;
  const graph = await loadGraph(slug);
  if (!graph || !graph.parents?.length && !graph.children?.length && !graph.applications?.length) {
    node.remove();
    return;
  }
  node.innerHTML = `<header><p class="eyebrow">Architecture</p><h2>${currentLocale === "en" ? "Brand lineage" : "\u54C1\u724C\u8C31\u7CFB"}</h2></header><div class="lineage-grid">${graph.parents.map((relation) => `<a href="ip?ip=${relation.parent}"><small>Parent IP</small><strong>${escapeHtml(relation.parentNames?.zh || relation.parentNames?.en || relation.parent)}</strong></a>`).join("")}${graph.children.map((relation) => `<a href="ip?ip=${relation.child}"><small>Child IP</small><strong>${escapeHtml(relation.childNames?.zh || relation.childNames?.en || relation.child)}</strong></a>`).join("")}${graph.applications.map((app) => `<a href="application?application=${app.slug}"><small>Application</small><strong>${escapeHtml(app.names?.zh || app.names?.en || app.slug)}</strong></a>`).join("")}</div>`;
}
function setupEvolutionMap() {
  const root = document.querySelector("[data-evolution-map]");
  const documentNode = document.querySelector(".ip-system-document");
  if (!root || !documentNode || root.dataset.ready) return;
  root.dataset.ready = "true";
  let parentId = "";
  const sections = [...documentNode.querySelectorAll("h2, h3")].map((heading, index) => {
    const depth = Number(heading.tagName.slice(1));
    if (depth === 2) parentId = heading.id;
    const nodes = [heading];
    for (let node = heading.nextElementSibling; node; node = node.nextElementSibling) {
      const nextDepth = /^H[23]$/.test(node.tagName) ? Number(node.tagName.slice(1)) : 9;
      if (nextDepth <= depth) break;
      nodes.push(node);
    }
    return { id: heading.id, label: heading.textContent.trim(), depth, parentId: depth === 3 ? parentId : "", index, nodes, text: nodes.map((node) => node.textContent).join(" ").toLowerCase() };
  });
  if (!sections.length) return;
  const nodesRoot = $("#evolutionMapNodes");
  const detail = $("#evolutionMapDetail");
  const detailIndex = root.querySelector("[data-map-detail-index]");
  const detailSource = root.querySelector("[data-map-detail-source]");
  const count = root.querySelector("[data-map-count]");
  const status = $("#evolutionMapStatus");
  const search = $("#evolutionMapSearch");
  const reset = $("#evolutionMapReset");
  const canvas = $("#evolutionMapCanvas");
  const svg = $("#evolutionMapLinks");
  const buttons = /* @__PURE__ */ new Map();
  let activeId = "";
  const splitLabel = (section) => {
    const parts = section.label.split("\xB7").map((part) => part.trim());
    return parts.length > 1 ? [parts.shift(), parts.join(" \xB7 ")] : [String(section.index + 1).padStart(2, "0"), section.label];
  };
  const makeButton = (section, className) => {
    const button = document.createElement("button");
    const [kicker, label] = splitLabel(section);
    button.type = "button";
    button.className = className;
    button.dataset.mapTarget = section.id;
    button.dataset.depth = String(section.depth);
    button.title = section.label;
    button.innerHTML = "<small></small><strong></strong>";
    button.querySelector("small").textContent = kicker;
    button.querySelector("strong").textContent = label;
    buttons.set(section.id, button);
    return button;
  };
  for (const section of sections.filter((item) => item.depth === 2)) {
    const group = document.createElement("article");
    group.className = "evolution-map-group";
    group.dataset.mapGroup = section.id;
    group.append(makeButton(section, "evolution-map-node evolution-map-node-main"));
    const children = sections.filter((item) => item.parentId === section.id);
    if (children.length) {
      const childRoot = document.createElement("div");
      childRoot.className = "evolution-map-children";
      children.forEach((child) => childRoot.append(makeButton(child, "evolution-map-node evolution-map-node-child")));
      group.append(childRoot);
    }
    nodesRoot.append(group);
  }
  count.textContent = String(sections.length);
  const drawLinks = () => {
    const box = canvas.getBoundingClientRect();
    const main = sections.filter((item) => item.depth === 2).map((item) => buttons.get(item.id));
    svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
    svg.replaceChildren();
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML = '<marker id="evolution-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 8 4 0 8Z"/></marker>';
    svg.append(defs);
    main.slice(0, -1).forEach((from, index) => {
      const to = main[index + 1];
      const a = from.getBoundingClientRect();
      const b = to.getBoundingClientRect();
      const sameRow = Math.abs(a.top - b.top) < 36;
      const x1 = (sameRow ? a.right : a.left + a.width / 2) - box.left;
      const y1 = (sameRow ? a.top + a.height / 2 : a.bottom) - box.top;
      const x2 = (sameRow ? b.left : b.left + b.width / 2) - box.left;
      const y2 = (sameRow ? b.top + b.height / 2 : b.top) - box.top;
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const bend = sameRow ? Math.max(20, (x2 - x1) / 2) : Math.max(24, (y2 - y1) / 2);
      path.setAttribute("d", sameRow ? `M${x1} ${y1} C${x1 + bend} ${y1} ${x2 - bend} ${y2} ${x2} ${y2}` : `M${x1} ${y1} C${x1} ${y1 + bend} ${x2} ${y2 - bend} ${x2} ${y2}`);
      path.setAttribute("marker-end", "url(#evolution-arrow)");
      path.classList.toggle("is-active", from.dataset.mapTarget === activeId || to.dataset.mapTarget === activeId);
      svg.append(path);
    });
  };
  const showSection = (id, updateUrl = true) => {
    const section = sections.find((item) => item.id === id) || sections[0];
    activeId = section.id;
    buttons.forEach((button, key) => {
      const active = key === activeId;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    detail.replaceChildren(...section.nodes.map((node) => {
      const clone = node.cloneNode(true);
      clone.removeAttribute("id");
      clone.querySelectorAll("[id]").forEach((child) => child.removeAttribute("id"));
      return clone;
    }));
    detailIndex.textContent = String(section.index + 1).padStart(2, "0");
    detailSource.href = `#${section.id}`;
    if (updateUrl) history.replaceState(null, "", `${location.pathname}${location.search}#${section.id}`);
    requestAnimationFrame(drawLinks);
  };
  const filter = () => {
    const query = search.value.trim().toLowerCase();
    const matches = new Set(sections.filter((section) => !query || section.text.includes(query)).map((section) => section.id));
    root.querySelectorAll("[data-map-group]").forEach((group) => {
      const groupMatches = matches.has(group.dataset.mapGroup) || [...group.querySelectorAll("[data-map-target]")].some((button) => matches.has(button.dataset.mapTarget));
      group.classList.toggle("is-dimmed", Boolean(query) && !groupMatches);
    });
    buttons.forEach((button, id) => button.classList.toggle("is-match", Boolean(query) && matches.has(id)));
    status.textContent = query ? `${matches.size} / ${sections.length}` : `${sections.length}`;
    return matches;
  };
  nodesRoot.addEventListener("click", (event) => {
    const button = (event.target instanceof Element ? event.target : null)?.closest("[data-map-target]");
    if (button) showSection(button.dataset.mapTarget);
  });
  search.addEventListener("input", filter);
  search.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const first = [...filter()][0];
    if (first) showSection(first);
  });
  reset.addEventListener("click", () => {
    search.value = "";
    filter();
    showSection(sections[0].id);
    search.focus();
  });
  if ("ResizeObserver" in window) new ResizeObserver(() => requestAnimationFrame(drawLinks)).observe(canvas);
  else addEventListener("resize", () => requestAnimationFrame(drawLinks));
  const initial = sections.some((section) => `#${section.id}` === location.hash) ? location.hash.slice(1) : sections[0].id;
  filter();
  showSection(initial, false);
  root.classList.add("is-ready");
}
function setupWebVitals() {
  if (!("PerformanceObserver" in window) || Math.random() > 0.1) return;
  const metrics = { ttfb: 0, lcp: 0, cls: 0, inp: 0, transferSize: 0 };
  const navigation = performance.getEntriesByType("navigation")[0];
  if (navigation) {
    metrics.ttfb = Math.max(0, navigation.responseStart - navigation.requestStart);
    metrics.transferSize = navigation.transferSize || 0;
  }
  const observe = (type, callback, options = {}) => {
    if (!PerformanceObserver.supportedEntryTypes?.includes(type)) return;
    try {
      const observer = new PerformanceObserver((list) => list.getEntries().forEach(callback));
      observer.observe({ type, buffered: true, ...options });
    } catch {
    }
  };
  observe("largest-contentful-paint", (entry) => {
    metrics.lcp = Math.max(metrics.lcp, entry.startTime || 0);
  });
  observe("layout-shift", (entry) => {
    if (!entry.hadRecentInput) metrics.cls += entry.value || 0;
  });
  observe("event", (entry) => {
    metrics.inp = Math.max(metrics.inp, entry.duration || 0);
  }, { durationThreshold: 40 });
  let reported = false;
  const report = () => {
    if (reported) return;
    reported = true;
    const serverTiming = navigation?.serverTiming || [];
    const cache = serverTiming.find((item) => item.name === "edge-cache")?.description || "unknown";
    const body = JSON.stringify({ ...metrics, path: location.pathname, locale: document.documentElement.lang || "und", cache, imageFormat: "negotiated" });
    navigator.sendBeacon(new URL("/api/v2/metrics/web-vitals", location.origin), new Blob([body], { type: "application/json" }));
  };
  addEventListener("pagehide", report, { once: true });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") report();
  }, { once: true });
}
applyI18n();
setupLanguageToggle();
setupSearch();
setupPortalActions();
setupAgentGateway();
setupApiConnect();
setupFontLibrary();
setupEvolutionMap();
renderHeroIndex().catch(console.error);
renderHeroIndex(true).catch(console.error);
renderIndex().catch(console.error);
renderBrand().catch(renderBrandFailure);
if (publishedDirectory) renderDirectory(structuredClone(publishedDirectory), true).catch(console.error);
renderDirectory().catch(console.error);
setInterval(() => {
  if (document.hidden || !$("#directoryPage, #heroIndex, #brandGrid") || document.activeElement?.closest("#directoryFilters") || $(".ip-health-panel details[open], .more-ips[open]")) return;
  repositoryStatusFetchedAt = 0;
  Promise.all([renderHeroIndex(true), renderIndex(), renderDirectory()]).catch(console.error);
}, 6e4);
renderIpRecord().catch(console.error);
renderApplicationPage().catch(console.error);
setupWebVitals();
