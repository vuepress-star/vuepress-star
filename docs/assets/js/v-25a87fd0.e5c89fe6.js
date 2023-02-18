"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2367],{81644:(e,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-25a87fd0","path":"/vuepress-next/reference/client-api.html","title":"Client API","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"Composition API","slug":"composition-api","link":"#composition-api","children":[{"level":3,"title":"useSiteData","slug":"usesitedata","link":"#usesitedata","children":[]},{"level":3,"title":"useSiteLocaleData","slug":"usesitelocaledata","link":"#usesitelocaledata","children":[]},{"level":3,"title":"useRouteLocale","slug":"useroutelocale","link":"#useroutelocale","children":[]},{"level":3,"title":"usePageData","slug":"usepagedata","link":"#usepagedata","children":[]},{"level":3,"title":"usePageFrontmatter","slug":"usepagefrontmatter","link":"#usepagefrontmatter","children":[]},{"level":3,"title":"usePageHead","slug":"usepagehead","link":"#usepagehead","children":[]},{"level":3,"title":"usePageHeadTitle","slug":"usepageheadtitle","link":"#usepageheadtitle","children":[]},{"level":3,"title":"usePageLang","slug":"usepagelang","link":"#usepagelang","children":[]}]},{"level":2,"title":"Utils","slug":"utils","link":"#utils","children":[{"level":3,"title":"defineClientAppEnhance","slug":"defineclientappenhance","link":"#defineclientappenhance","children":[]},{"level":3,"title":"defineClientAppSetup","slug":"defineclientappsetup","link":"#defineclientappsetup","children":[]},{"level":3,"title":"withBase","slug":"withbase","link":"#withbase","children":[]}]},{"level":2,"title":"Constants","slug":"constants","link":"#constants","children":[{"level":3,"title":"__VUEPRESS_VERSION__","slug":"vuepress-version","link":"#vuepress-version","children":[]},{"level":3,"title":"__VUEPRESS_DEV__","slug":"vuepress-dev","link":"#vuepress-dev","children":[]},{"level":3,"title":"__VUEPRESS_SSR__","slug":"vuepress-ssr","link":"#vuepress-ssr","children":[]}]}],"git":{"createdTime":1635758933000,"updatedTime":1639839959000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":1},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"vuepress-next/reference/client-api.md","content":"# Client API\\n\\n<NpmBadge package=\\"@vuepress/client\\" />\\n\\nClient API is provided by [@vuepress/client](https://www.npmjs.com/package/@vuepress/client) package, which is used for developing client files.\\n\\n## Composition API\\n\\n### useSiteData\\n\\n- Details:\\n\\n  Returns the site data ref object.\\n\\n### useSiteLocaleData\\n\\n- Details:\\n\\n  Returns the site data ref object of current locale.\\n\\n  The properties of current locale have been merged into the root-level properties.\\n\\n### useRouteLocale\\n\\n- Details:\\n\\n  Returns the locale path ref object of current route.\\n\\n  The value is one of the keys of the [locales](./config.md#locales) config.\\n\\n### usePageData\\n\\n- Details:\\n\\n  Returns the page data ref object of current page.\\n\\n- Also see:\\n  - [Node API > Page Properties > data](./node-api.md#data)\\n  - [Plugin API > extendsPage](./plugin-api.md#extendspage)\\n\\n### usePageFrontmatter\\n\\n- Details:\\n\\n  Returns the frontmatter ref object of current page.\\n\\n  The value is the `frontmatter` property of the page data.\\n\\n### usePageHead\\n\\n- Details:\\n\\n  Returns the head config ref object of current page.\\n\\n  The value is obtained by merging and deduplicating [head](./frontmatter.md#head) frontmatter and [head](./config.md#head) config.\\n\\n### usePageHeadTitle\\n\\n- Details:\\n\\n  Returns the head title ref object of current page.\\n\\n  The value is obtained by joining the page title and site title.\\n\\n### usePageLang\\n\\n- Details:\\n\\n  Returns the language ref object of current page.\\n\\n  The value is the `lang` property of the page data.\\n\\n## Utils\\n\\n### defineClientAppEnhance\\n\\n- Details:\\n\\n  Helper for creating [clientAppEnhanceFiles](./plugin-api.md#clientappenhancefiles).\\n\\n- Example:\\n\\nCreate `clientAppEnhance.ts` file:\\n\\n```ts\\nimport { defineClientAppEnhance } from \'@vuepress/client\'\\n\\nexport default defineClientAppEnhance(({ app, router, siteData }) => {\\n  // ...\\n})\\n```\\n\\n- Also see:\\n  - [Cookbook > Usage of Client App Enhance](../advanced/cookbook/usage-of-client-app-enhance.md)\\n\\n### defineClientAppSetup\\n\\n- Details:\\n\\n  Helper for creating [clientAppSetupFiles](./plugin-api.md#clientappsetupfiles).\\n\\n- Example:\\n\\nCreate `clientAppSetup.ts` file:\\n\\n```ts\\nimport { defineClientAppSetup } from \'@vuepress/client\'\\n\\nexport default defineClientAppSetup(() => {\\n  // ...\\n})\\n```\\n\\n### withBase\\n\\n- Details:\\n\\n  Prefix URL with site [base](./config.md#base).\\n\\n- Also see:\\n  - [Guide > Assets > Base Helper](../guide/assets.md#base-helper)\\n\\n## Constants\\n\\nThere are some constants that available in the client side code.\\n\\nTo shim the types of these constants in client side code, add `@vuepress/client/types` to your `tsconfig.json`:\\n\\n```json\\n{\\n  \\"compilerOptions\\": {\\n    \\"types\\": [\\"@vuepress/client/types\\"]\\n  }\\n}\\n```\\n\\n### `__VUEPRESS_VERSION__`\\n\\n- Type: `string`\\n\\n- Details:\\n\\n  Version of VuePress core package.\\n\\n### `__VUEPRESS_DEV__`\\n\\n- Type: `boolean`\\n\\n- Details:\\n\\n  An environment flag indicating whether it is currently running in `dev` mode.\\n\\n### `__VUEPRESS_SSR__`\\n\\n- Type: `boolean`\\n\\n- Details:\\n\\n  An environment flag indicating whether it is currently running in server-side-rendering (SSR) build.\\n","author":[{"name":"Starzkg","email":"1600337300@qq.com"},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":379,"words":379,"readingTime":1.26}')},6603:(e,n,a)=>{a.r(n),a.d(n,{default:()=>H});var l=a(1863);const s=(0,l._)("h1",{id:"client-api",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#client-api","aria-hidden":"true"},"#"),(0,l.Uk)(" Client API")],-1),t={href:"https://www.npmjs.com/package/@vuepress/client",target:"_blank",rel:"noopener noreferrer"},i=(0,l.uE)('<h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><h3 id="usesitedata" tabindex="-1"><a class="header-anchor" href="#usesitedata" aria-hidden="true">#</a> useSiteData</h3><ul><li><p>Details:</p><p>Returns the site data ref object.</p></li></ul><h3 id="usesitelocaledata" tabindex="-1"><a class="header-anchor" href="#usesitelocaledata" aria-hidden="true">#</a> useSiteLocaleData</h3><ul><li><p>Details:</p><p>Returns the site data ref object of current locale.</p><p>The properties of current locale have been merged into the root-level properties.</p></li></ul><h3 id="useroutelocale" tabindex="-1"><a class="header-anchor" href="#useroutelocale" aria-hidden="true">#</a> useRouteLocale</h3>',6),p=(0,l._)("p",null,"Details:",-1),r=(0,l._)("p",null,"Returns the locale path ref object of current route.",-1),o=(0,l._)("h3",{id:"usepagedata",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#usepagedata","aria-hidden":"true"},"#"),(0,l.Uk)(" usePageData")],-1),c=(0,l._)("li",null,[(0,l._)("p",null,"Details:"),(0,l._)("p",null,"Returns the page data ref object of current page.")],-1),u=(0,l._)("p",null,"Also see:",-1),d=(0,l._)("h3",{id:"usepagefrontmatter",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#usepagefrontmatter","aria-hidden":"true"},"#"),(0,l.Uk)(" usePageFrontmatter")],-1),h=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("p",null,"Details:"),(0,l._)("p",null,"Returns the frontmatter ref object of current page."),(0,l._)("p",null,[(0,l.Uk)("The value is the "),(0,l._)("code",null,"frontmatter"),(0,l.Uk)(" property of the page data.")])])],-1),g=(0,l._)("h3",{id:"usepagehead",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#usepagehead","aria-hidden":"true"},"#"),(0,l.Uk)(" usePageHead")],-1),f=(0,l._)("p",null,"Details:",-1),D=(0,l._)("p",null,"Returns the head config ref object of current page.",-1),v=(0,l.uE)('<h3 id="usepageheadtitle" tabindex="-1"><a class="header-anchor" href="#usepageheadtitle" aria-hidden="true">#</a> usePageHeadTitle</h3><ul><li><p>Details:</p><p>Returns the head title ref object of current page.</p><p>The value is obtained by joining the page title and site title.</p></li></ul><h3 id="usepagelang" tabindex="-1"><a class="header-anchor" href="#usepagelang" aria-hidden="true">#</a> usePageLang</h3><ul><li><p>Details:</p><p>Returns the language ref object of current page.</p><p>The value is the <code>lang</code> property of the page data.</p></li></ul><h2 id="utils" tabindex="-1"><a class="header-anchor" href="#utils" aria-hidden="true">#</a> Utils</h2><h3 id="defineclientappenhance" tabindex="-1"><a class="header-anchor" href="#defineclientappenhance" aria-hidden="true">#</a> defineClientAppEnhance</h3>',6),m=(0,l._)("p",null,"Details:",-1),_=(0,l._)("li",null,[(0,l._)("p",null,"Example:")],-1),b=(0,l._)("p",null,[(0,l.Uk)("Create "),(0,l._)("code",null,"clientAppEnhance.ts"),(0,l.Uk)(" file:")],-1),y={class:"code-enhance"},k=(0,l.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientAppEnhance</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientAppEnhance</span><span style="color:#D4D4D4;">(({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),C=(0,l._)("h3",{id:"defineclientappsetup",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#defineclientappsetup","aria-hidden":"true"},"#"),(0,l.Uk)(" defineClientAppSetup")],-1),E=(0,l._)("p",null,"Details:",-1),U=(0,l._)("li",null,[(0,l._)("p",null,"Example:")],-1),A=(0,l._)("p",null,[(0,l.Uk)("Create "),(0,l._)("code",null,"clientAppSetup.ts"),(0,l.Uk)(" file:")],-1),S={class:"code-enhance"},x=(0,l.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientAppSetup</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientAppSetup</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),P=(0,l._)("h3",{id:"withbase",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#withbase","aria-hidden":"true"},"#"),(0,l.Uk)(" withBase")],-1),R=(0,l._)("p",null,"Details:",-1),w=(0,l._)("p",null,"Also see:",-1),T=(0,l._)("h2",{id:"constants",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#constants","aria-hidden":"true"},"#"),(0,l.Uk)(" Constants")],-1),j=(0,l._)("p",null,"There are some constants that available in the client side code.",-1),V=(0,l._)("p",null,[(0,l.Uk)("To shim the types of these constants in client side code, add "),(0,l._)("code",null,"@vuepress/client/types"),(0,l.Uk)(" to your "),(0,l._)("code",null,"tsconfig.json"),(0,l.Uk)(":")],-1),I={class:"code-enhance"},W=(0,l.uE)('<div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;compilerOptions&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;types&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;@vuepress/client/types&quot;</span><span style="color:#D4D4D4;">]</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),F=(0,l.uE)('<h3 id="vuepress-version" tabindex="-1"><a class="header-anchor" href="#vuepress-version" aria-hidden="true">#</a> <code>__VUEPRESS_VERSION__</code></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Version of VuePress core package.</p></li></ul><h3 id="vuepress-dev" tabindex="-1"><a class="header-anchor" href="#vuepress-dev" aria-hidden="true">#</a> <code>__VUEPRESS_DEV__</code></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>An environment flag indicating whether it is currently running in <code>dev</code> mode.</p></li></ul><h3 id="vuepress-ssr" tabindex="-1"><a class="header-anchor" href="#vuepress-ssr" aria-hidden="true">#</a> <code>__VUEPRESS_SSR__</code></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>An environment flag indicating whether it is currently running in server-side-rendering (SSR) build.</p></li></ul>',6),L={},H=(0,a(94598).Z)(L,[["render",function(e,n){const a=(0,l.up)("NpmBadge"),L=(0,l.up)("ExternalLinkIcon"),H=(0,l.up)("RouterLink"),q=(0,l.up)("CodeCopyButton");return(0,l.wg)(),(0,l.iD)("div",null,[s,(0,l.Wm)(a,{package:"@vuepress/client"}),(0,l._)("p",null,[(0,l.Uk)("Client API is provided by "),(0,l._)("a",t,[(0,l.Uk)("@vuepress/client"),(0,l.Wm)(L)]),(0,l.Uk)(" package, which is used for developing client files.")]),i,(0,l._)("ul",null,[(0,l._)("li",null,[p,r,(0,l._)("p",null,[(0,l.Uk)("The value is one of the keys of the "),(0,l.Wm)(H,{to:"/vuepress-next/reference/config.html#locales"},{default:(0,l.w5)((()=>[(0,l.Uk)("locales")])),_:1}),(0,l.Uk)(" config.")])])]),o,(0,l._)("ul",null,[c,(0,l._)("li",null,[u,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(H,{to:"/vuepress-next/reference/node-api.html#data"},{default:(0,l.w5)((()=>[(0,l.Uk)("Node API > Page Properties > data")])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(H,{to:"/vuepress-next/reference/plugin-api.html#extendspage"},{default:(0,l.w5)((()=>[(0,l.Uk)("Plugin API > extendsPage")])),_:1})])])])]),d,h,g,(0,l._)("ul",null,[(0,l._)("li",null,[f,D,(0,l._)("p",null,[(0,l.Uk)("The value is obtained by merging and deduplicating "),(0,l.Wm)(H,{to:"/vuepress-next/reference/frontmatter.html#head"},{default:(0,l.w5)((()=>[(0,l.Uk)("head")])),_:1}),(0,l.Uk)(" frontmatter and "),(0,l.Wm)(H,{to:"/vuepress-next/reference/config.html#head"},{default:(0,l.w5)((()=>[(0,l.Uk)("head")])),_:1}),(0,l.Uk)(" config.")])])]),v,(0,l._)("ul",null,[(0,l._)("li",null,[m,(0,l._)("p",null,[(0,l.Uk)("Helper for creating "),(0,l.Wm)(H,{to:"/vuepress-next/reference/plugin-api.html#clientappenhancefiles"},{default:(0,l.w5)((()=>[(0,l.Uk)("clientAppEnhanceFiles")])),_:1}),(0,l.Uk)(".")])]),_]),b,(0,l._)("div",y,[k,(0,l.Wm)(q)]),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Also see: "),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(H,{to:"/vuepress-next/advanced/cookbook/usage-of-client-app-enhance.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("Cookbook > Usage of Client App Enhance")])),_:1})])])])]),C,(0,l._)("ul",null,[(0,l._)("li",null,[E,(0,l._)("p",null,[(0,l.Uk)("Helper for creating "),(0,l.Wm)(H,{to:"/vuepress-next/reference/plugin-api.html#clientappsetupfiles"},{default:(0,l.w5)((()=>[(0,l.Uk)("clientAppSetupFiles")])),_:1}),(0,l.Uk)(".")])]),U]),A,(0,l._)("div",S,[x,(0,l.Wm)(q)]),P,(0,l._)("ul",null,[(0,l._)("li",null,[R,(0,l._)("p",null,[(0,l.Uk)("Prefix URL with site "),(0,l.Wm)(H,{to:"/vuepress-next/reference/config.html#base"},{default:(0,l.w5)((()=>[(0,l.Uk)("base")])),_:1}),(0,l.Uk)(".")])]),(0,l._)("li",null,[w,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(H,{to:"/vuepress-next/guide/assets.html#base-helper"},{default:(0,l.w5)((()=>[(0,l.Uk)("Guide > Assets > Base Helper")])),_:1})])])])]),T,j,V,(0,l._)("div",I,[W,(0,l.Wm)(q)]),F])}]])}}]);