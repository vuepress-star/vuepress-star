"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[755],{68028:(n,l,e)=>{e.r(l),e.d(l,{data:()=>s});const s=JSON.parse('{"key":"v-2417378e","path":"/zh/vuepress-next/reference/default-theme/frontmatter.html","title":"Frontmatter","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"所有页面","slug":"所有页面","link":"#所有页面","children":[{"level":3,"title":"externalLinkIcon","slug":"externallinkicon","link":"#externallinkicon","children":[]},{"level":3,"title":"navbar","slug":"navbar","link":"#navbar","children":[]},{"level":3,"title":"pageClass","slug":"pageclass","link":"#pageclass","children":[]}]},{"level":2,"title":"首页","slug":"首页","link":"#首页","children":[{"level":3,"title":"home","slug":"home","link":"#home","children":[]},{"level":3,"title":"heroImage","slug":"heroimage","link":"#heroimage","children":[]},{"level":3,"title":"heroImageDark","slug":"heroimagedark","link":"#heroimagedark","children":[]},{"level":3,"title":"heroAlt","slug":"heroalt","link":"#heroalt","children":[]},{"level":3,"title":"heroText","slug":"herotext","link":"#herotext","children":[]},{"level":3,"title":"tagline","slug":"tagline","link":"#tagline","children":[]},{"level":3,"title":"actions","slug":"actions","link":"#actions","children":[]},{"level":3,"title":"features","slug":"features","link":"#features","children":[]},{"level":3,"title":"footer","slug":"footer","link":"#footer","children":[]},{"level":3,"title":"footerHtml","slug":"footerhtml","link":"#footerhtml","children":[]}]},{"level":2,"title":"普通页面","slug":"普通页面","link":"#普通页面","children":[{"level":3,"title":"editLink","slug":"editlink","link":"#editlink","children":[]},{"level":3,"title":"editLinkPattern","slug":"editlinkpattern","link":"#editlinkpattern","children":[]},{"level":3,"title":"lastUpdated","slug":"lastupdated","link":"#lastupdated","children":[]},{"level":3,"title":"contributors","slug":"contributors","link":"#contributors","children":[]},{"level":3,"title":"sidebar","slug":"sidebar","link":"#sidebar","children":[]},{"level":3,"title":"sidebarDepth","slug":"sidebardepth","link":"#sidebardepth","children":[]},{"level":3,"title":"prev","slug":"prev","link":"#prev","children":[]},{"level":3,"title":"next","slug":"next","link":"#next","children":[]}]}],"git":{"createdTime":1635758933000,"updatedTime":1639839959000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":1},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"zh/vuepress-next/reference/default-theme/frontmatter.md","content":"# Frontmatter\\n\\n<NpmBadge package=\\"@vuepress/theme-default\\" />\\n\\n## 所有页面\\n\\n本章节中的 Frontmatter 会在所有类型的页面中生效。\\n\\n### externalLinkIcon\\n\\n- 类型： `boolean`\\n\\n- 详情：\\n\\n  由[@vuepress/plugin-external-link-icon](../plugin/external-link-icon.md#externallinkicon) 提供。\\n\\n- 参考：\\n  - [默认主题 > 配置 > themePlugins.externalLinkIcon](#themeplugins-externallinkicon)\\n\\n### navbar\\n\\n- 类型： `boolean`\\n\\n- 详情：\\n\\n  是否在当前页面展示导航栏。\\n\\n  如果你在主题配置中禁用了导航栏，那么该 Frontmatter 将不会生效。\\n\\n- 参考：\\n  - [默认主题 > 配置 > navbar](./config.md#navbar)\\n\\n### pageClass\\n\\n- 类型： `string`\\n\\n- 详情：\\n\\n  为当前页面添加额外的类名。\\n\\n- 示例：\\n\\n```md\\n---\\npageClass: custom-page-class\\n---\\n```\\n\\n然后你可以在 `.vuepress/styles/index.scss` 文件中为这个页面添加自定义样式：\\n\\n```scss\\n.theme-container.custom-page-class {\\n  /* 页面样式 */\\n}\\n```\\n\\n- 参考：\\n  - [默认主题 > 样式 > Style 文件](./styles.md#style-文件)\\n\\n## 首页\\n\\n本章节中的 Frontmatter 只会在首页中生效。\\n\\n### home\\n\\n- 类型： `boolean`\\n\\n- 详情：\\n\\n  设定该页面是首页还是普通页面。\\n\\n  如果你不设置该 Frontmatter 或将其设为 `false` ，则该页面会是一个 [普通页面](#普通页面)\\n\\n- 示例：\\n\\n  ```md\\n  ---\\n  home: true\\n  ---\\n  ```\\n\\n### heroImage\\n\\n- 类型： `string`\\n\\n- 详情：\\n\\n  首页图片的 URL 。\\n\\n- 示例：\\n\\n  ```md\\n  ---\\n  # Public 文件路径\\n  heroImage: /images/hero.png\\n  # URL\\n  heroImage: https://vuejs.org/images/logo.png\\n  ---\\n  ```\\n\\n- 参考：\\n  - [指南 > 静态资源 > Public 文件](../../guide/assets.md#public-文件)\\n\\n### heroImageDark\\n\\n- 类型： `string`\\n\\n- 详情：\\n\\n  在夜间模式中使用的首页图片的 URL 。\\n\\n  如果你想在夜间模式中使用不同的首页图片，就可以使用该配置项。\\n\\n- 参考：\\n  - [默认主题 > Frontmatter > heroImage](#heroimage)\\n  - [默认主题 > 配置 > darkMode](./config.md#darkmode)\\n\\n### heroAlt\\n\\n- 类型： `string`\\n\\n- 详情：\\n\\n  首页图片的 `alt` 属性。\\n\\n  如果不设置，则默认使用 [heroText](#heroText) 。\\n\\n### heroText\\n\\n- 类型： `string | null`\\n\\n- 详情：\\n\\n  首页的大标题。\\n\\n  如果不设置，则默认使用站点 [title](../config.md#title) 。\\n\\n  设置为 `null` 来禁用首页大标题。\\n\\n### tagline\\n\\n- 类型： `string | null`\\n\\n- 详情：\\n\\n  首页的标语。\\n\\n  如果不设置，则默认使用站点 [description](../config.md#description) 。\\n\\n  设置为 `null` 来禁用首页标语。\\n\\n### actions\\n\\n- 类型：\\n\\n```ts\\nArray<{\\n  text: string\\n  link: string\\n  type?: \'primary\' | \'secondary\'\\n}>\\n```\\n\\n- 详情：\\n\\n  配置首页按钮。\\n\\n- 示例：\\n\\n```md\\n---\\nactions:\\n  - text: 快速上手\\n    link: /zh/guide/getting-started.html\\n    type: primary\\n  - text: 项目简介\\n    link: /guide/\\n    type: secondary\\n---\\n```\\n\\n### features\\n\\n- 类型：\\n\\n```ts\\nArray<{\\n  title: string\\n  details: string\\n}>\\n```\\n\\n- 详情：\\n\\n  配置首页特性列表。\\n\\n- 示例：\\n\\n```md\\n---\\nfeatures:\\n  - title: 简洁至上\\n    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\\n  - title: Vue 驱动\\n    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。\\n  - title: 高性能\\n    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。\\n---\\n```\\n\\n### footer\\n\\n- 类型： `string`\\n\\n- 详情：\\n\\n  首页的页脚。\\n\\n### footerHtml\\n\\n- 类型： `boolean`\\n\\n- 详情：\\n\\n  是否允许页脚中使用 HTML 。\\n\\n  如果设置为 `true` ，那么 [footer](#footer) 会被作为 HTML 代码处理。\\n\\n## 普通页面\\n\\n本章节中的 Frontmatter 只会在普通页面中生效。\\n\\n### editLink\\n\\n- 类型： `boolean`\\n\\n- 详情：\\n\\n  是否在本页面中启用 _编辑此页_ 链接。\\n\\n- 参考：\\n  - [默认主题 > 配置 > editLink](./config.md#editlink)\\n\\n### editLinkPattern\\n\\n- 类型： `string`\\n\\n- 详情：\\n\\n  本页面中 _编辑此页_ 链接的 Pattern 。\\n\\n- 参考：\\n  - [默认主题 > 配置 > editLinkPattern](./config.md#editlinkpattern)\\n\\n### lastUpdated\\n\\n- 类型： `boolean`\\n\\n- 详情：\\n\\n  是否在本页面中启用 _最近更新时间戳_ 。\\n\\n- 参考：\\n  - [默认主题 > 配置 > lastUpdated](./config.md#lastupdated)\\n\\n### contributors\\n\\n- 类型： `boolean`\\n\\n- 详情：\\n\\n  是否在本页面中启用 _贡献者列表_ 。\\n\\n- 参考：\\n  - [默认主题 > 配置 > contributors](./config.md#contributors)\\n\\n### sidebar\\n\\n- 类型： `false | \'auto\' | SidebarConfigArray | SidebarConfigObject`\\n\\n- 详情：\\n\\n  配置本页面的侧边栏。\\n\\n- 参考：\\n  - [默认主题 > 配置 > sidebar](./config.md#sidebar)\\n\\n### sidebarDepth\\n\\n- 类型： `number`\\n\\n- 详情：\\n\\n  配置本页面的侧边栏深度。\\n\\n- 参考：\\n  - [默认主题 > 配置 > sidebarDepth](./config.md#sidebardepth)\\n\\n### prev\\n\\n- 类型： `NavLink | string`\\n\\n- 详情：\\n\\n  上一个页面的链接。\\n\\n  如果你不设置该 Frontmatter ，该链接会自动根据侧边栏配置进行推断。\\n\\n  为了手动配置上一页面的链接，你可以将其设置为一个 `NavLink` 对象或者一个字符串：\\n\\n  - `NavLink` 对象应该有一个 `text` 字段和一个 `link` 字段。\\n  - 字符串应为目标页面文件的路径。它将会被转换为 `NavLink` 对象，将页面标题作为 `text` ，将页面路由路径作为 `link` 。\\n\\n- 示例：\\n\\n```md\\n---\\n# NavLink\\nprev:\\n  text: Get Started\\n  link: /guide/getting-started.html\\n\\n# NavLink - 外部 URL\\nprev:\\n  text: GitHub\\n  link: https://github.com\\n\\n# 字符串 - 页面文件路径\\nprev: /guide/getting-started.md\\n\\n# 字符串 - 页面文件相对路径\\nprev: ../../guide/getting-started.md\\n---\\n```\\n\\n### next\\n\\n- 类型： `NavLink | string`\\n\\n- 详情：\\n\\n  下一个页面的链接。\\n\\n  如果你不设置该 Frontmatter ，该链接会自动根据侧边栏配置进行推断。\\n\\n  类型和 [prev](#prev) Frontmatter 相同。\\n","author":[{"name":"Starzkg","email":"1600337300@qq.com"},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":1147,"words":1147,"readingTime":3.82}')},73509:(n,l,e)=>{e.r(l),e.d(l,{default:()=>Vn});var s=e(1863);const a=(0,s._)("h1",{id:"frontmatter",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),(0,s.Uk)(" Frontmatter")],-1),i=(0,s._)("h2",{id:"所有页面",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#所有页面","aria-hidden":"true"},"#"),(0,s.Uk)(" 所有页面")],-1),t=(0,s._)("p",null,"本章节中的 Frontmatter 会在所有类型的页面中生效。",-1),r=(0,s._)("h3",{id:"externallinkicon",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#externallinkicon","aria-hidden":"true"},"#"),(0,s.Uk)(" externalLinkIcon")],-1),o=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"boolean")])],-1),p=(0,s._)("p",null,"详情：",-1),d=(0,s._)("li",null,[(0,s._)("p",null,"参考："),(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",{href:"#themeplugins-externallinkicon"},"默认主题 > 配置 > themePlugins.externalLinkIcon")])])],-1),c=(0,s._)("h3",{id:"navbar",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#navbar","aria-hidden":"true"},"#"),(0,s.Uk)(" navbar")],-1),u=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"boolean")])],-1),h=(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,"是否在当前页面展示导航栏。"),(0,s._)("p",null,"如果你在主题配置中禁用了导航栏，那么该 Frontmatter 将不会生效。")],-1),m=(0,s._)("p",null,"参考：",-1),D=(0,s._)("h3",{id:"pageclass",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#pageclass","aria-hidden":"true"},"#"),(0,s.Uk)(" pageClass")],-1),v=(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"string")])]),(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,"为当前页面添加额外的类名。")]),(0,s._)("li",null,[(0,s._)("p",null,"示例：")])],-1),_={class:"code-enhance"},g=(0,s.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">pageClass</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">custom-page-class</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),k=(0,s._)("p",null,[(0,s.Uk)("然后你可以在 "),(0,s._)("code",null,".vuepress/styles/index.scss"),(0,s.Uk)(" 文件中为这个页面添加自定义样式：")],-1),b={class:"code-enhance"},y=(0,s.uE)('<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">.theme-container.custom-page-class</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* 页面样式 */</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),f=(0,s._)("h2",{id:"首页",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#首页","aria-hidden":"true"},"#"),(0,s.Uk)(" 首页")],-1),x=(0,s._)("p",null,"本章节中的 Frontmatter 只会在首页中生效。",-1),C=(0,s._)("h3",{id:"home",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#home","aria-hidden":"true"},"#"),(0,s.Uk)(" home")],-1),E=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"boolean")])],-1),U=(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,"设定该页面是首页还是普通页面。"),(0,s._)("p",null,[(0,s.Uk)("如果你不设置该 Frontmatter 或将其设为 "),(0,s._)("code",null,"false"),(0,s.Uk)(" ，则该页面会是一个 "),(0,s._)("a",{href:"#%E6%99%AE%E9%80%9A%E9%A1%B5%E9%9D%A2"},"普通页面")])],-1),L=(0,s._)("p",null,"示例：",-1),w={class:"code-enhance"},A=(0,s.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">home</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),F=(0,s._)("h3",{id:"heroimage",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#heroimage","aria-hidden":"true"},"#"),(0,s.Uk)(" heroImage")],-1),z=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"string")])],-1),W=(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,"首页图片的 URL 。")],-1),N=(0,s._)("p",null,"示例：",-1),P={class:"code-enhance"},I=(0,s.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#6A9955;"># Public 文件路径</span></span>\n<span class="line"><span style="color:#569CD6;">heroImage</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/images/hero.png</span></span>\n<span class="line"><span style="color:#6A9955;"># URL</span></span>\n<span class="line"><span style="color:#569CD6;">heroImage</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://vuejs.org/images/logo.png</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),T=(0,s._)("p",null,"参考：",-1),B=(0,s._)("h3",{id:"heroimagedark",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#heroimagedark","aria-hidden":"true"},"#"),(0,s.Uk)(" heroImageDark")],-1),S=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"string")])],-1),M=(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,"在夜间模式中使用的首页图片的 URL 。"),(0,s._)("p",null,"如果你想在夜间模式中使用不同的首页图片，就可以使用该配置项。")],-1),H=(0,s._)("p",null,"参考：",-1),R=(0,s._)("li",null,[(0,s._)("a",{href:"#heroimage"},"默认主题 > Frontmatter > heroImage")],-1),V=(0,s.uE)('<h3 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>首页图片的 <code>alt</code> 属性。</p><p>如果不设置，则默认使用 <a href="#heroText">heroText</a> 。</p></li></ul><h3 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h3>',3),j=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"string | null")])],-1),q=(0,s._)("p",null,"详情：",-1),G=(0,s._)("p",null,"首页的大标题。",-1),O=(0,s._)("p",null,[(0,s.Uk)("设置为 "),(0,s._)("code",null,"null"),(0,s.Uk)(" 来禁用首页大标题。")],-1),J=(0,s._)("h3",{id:"tagline",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#tagline","aria-hidden":"true"},"#"),(0,s.Uk)(" tagline")],-1),Z=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"string | null")])],-1),K=(0,s._)("p",null,"详情：",-1),Q=(0,s._)("p",null,"首页的标语。",-1),X=(0,s._)("p",null,[(0,s.Uk)("设置为 "),(0,s._)("code",null,"null"),(0,s.Uk)(" 来禁用首页标语。")],-1),Y=(0,s._)("h3",{id:"actions",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#actions","aria-hidden":"true"},"#"),(0,s.Uk)(" actions")],-1),$=(0,s._)("ul",null,[(0,s._)("li",null,"类型：")],-1),nn={class:"code-enhance"},ln=(0,s.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#DCDCAA;">Array</span><span style="color:#D4D4D4;">&lt;{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">type</span><span style="color:#D4D4D4;">?: </span><span style="color:#CE9178;">&#39;primary&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;secondary&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),en=(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,"配置首页按钮。")]),(0,s._)("li",null,[(0,s._)("p",null,"示例：")])],-1),sn={class:"code-enhance"},an=(0,s.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">actions</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">快速上手</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/zh/guide/getting-started.html</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">primary</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">项目简介</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">secondary</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),tn=(0,s._)("h3",{id:"features",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),(0,s.Uk)(" features")],-1),rn=(0,s._)("ul",null,[(0,s._)("li",null,"类型：")],-1),on={class:"code-enhance"},pn=(0,s.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#DCDCAA;">Array</span><span style="color:#D4D4D4;">&lt;{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),dn=(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,"配置首页特性列表。")]),(0,s._)("li",null,[(0,s._)("p",null,"示例：")])],-1),cn={class:"code-enhance"},un=(0,s.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">features</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">简洁至上</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Vue 驱动</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">高性能</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),hn=(0,s.uE)('<h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>首页的页脚。</p></li></ul><h3 id="footerhtml" tabindex="-1"><a class="header-anchor" href="#footerhtml" aria-hidden="true">#</a> footerHtml</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>是否允许页脚中使用 HTML 。</p><p>如果设置为 <code>true</code> ，那么 <a href="#footer">footer</a> 会被作为 HTML 代码处理。</p></li></ul><h2 id="普通页面" tabindex="-1"><a class="header-anchor" href="#普通页面" aria-hidden="true">#</a> 普通页面</h2><p>本章节中的 Frontmatter 只会在普通页面中生效。</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3>',7),mn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"boolean")])],-1),Dn=(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,[(0,s.Uk)("是否在本页面中启用 "),(0,s._)("em",null,"编辑此页"),(0,s.Uk)(" 链接。")])],-1),vn=(0,s._)("p",null,"参考：",-1),_n=(0,s._)("h3",{id:"editlinkpattern",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#editlinkpattern","aria-hidden":"true"},"#"),(0,s.Uk)(" editLinkPattern")],-1),gn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"string")])],-1),kn=(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,[(0,s.Uk)("本页面中 "),(0,s._)("em",null,"编辑此页"),(0,s.Uk)(" 链接的 Pattern 。")])],-1),bn=(0,s._)("p",null,"参考：",-1),yn=(0,s._)("h3",{id:"lastupdated",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#lastupdated","aria-hidden":"true"},"#"),(0,s.Uk)(" lastUpdated")],-1),fn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"boolean")])],-1),xn=(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,[(0,s.Uk)("是否在本页面中启用 "),(0,s._)("em",null,"最近更新时间戳"),(0,s.Uk)(" 。")])],-1),Cn=(0,s._)("p",null,"参考：",-1),En=(0,s._)("h3",{id:"contributors",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#"),(0,s.Uk)(" contributors")],-1),Un=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"boolean")])],-1),Ln=(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,[(0,s.Uk)("是否在本页面中启用 "),(0,s._)("em",null,"贡献者列表"),(0,s.Uk)(" 。")])],-1),wn=(0,s._)("p",null,"参考：",-1),An=(0,s._)("h3",{id:"sidebar",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),(0,s.Uk)(" sidebar")],-1),Fn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"false | 'auto' | SidebarConfigArray | SidebarConfigObject")])],-1),zn=(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,"配置本页面的侧边栏。")],-1),Wn=(0,s._)("p",null,"参考：",-1),Nn=(0,s._)("h3",{id:"sidebardepth",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#sidebardepth","aria-hidden":"true"},"#"),(0,s.Uk)(" sidebarDepth")],-1),Pn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("类型： "),(0,s._)("code",null,"number")])],-1),In=(0,s._)("li",null,[(0,s._)("p",null,"详情："),(0,s._)("p",null,"配置本页面的侧边栏深度。")],-1),Tn=(0,s._)("p",null,"参考：",-1),Bn=(0,s.uE)('<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev</h3><ul><li><p>类型： <code>NavLink | string</code></p></li><li><p>详情：</p><p>上一个页面的链接。</p><p>如果你不设置该 Frontmatter ，该链接会自动根据侧边栏配置进行推断。</p><p>为了手动配置上一页面的链接，你可以将其设置为一个 <code>NavLink</code> 对象或者一个字符串：</p><ul><li><code>NavLink</code> 对象应该有一个 <code>text</code> 字段和一个 <code>link</code> 字段。</li><li>字符串应为目标页面文件的路径。它将会被转换为 <code>NavLink</code> 对象，将页面标题作为 <code>text</code> ，将页面路由路径作为 <code>link</code> 。</li></ul></li><li><p>示例：</p></li></ul>',2),Sn={class:"code-enhance"},Mn=(0,s.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#6A9955;"># NavLink</span></span>\n<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Get Started</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.html</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># NavLink - 外部 URL</span></span>\n<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">GitHub</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://github.com</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 字符串 - 页面文件路径</span></span>\n<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.md</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 字符串 - 页面文件相对路径</span></span>\n<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">../../guide/getting-started.md</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),Hn=(0,s.uE)('<h3 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next</h3><ul><li><p>类型： <code>NavLink | string</code></p></li><li><p>详情：</p><p>下一个页面的链接。</p><p>如果你不设置该 Frontmatter ，该链接会自动根据侧边栏配置进行推断。</p><p>类型和 <a href="#prev">prev</a> Frontmatter 相同。</p></li></ul>',2),Rn={},Vn=(0,e(94598).Z)(Rn,[["render",function(n,l){const e=(0,s.up)("NpmBadge"),Rn=(0,s.up)("RouterLink"),Vn=(0,s.up)("CodeCopyButton");return(0,s.wg)(),(0,s.iD)("div",null,[a,(0,s.Wm)(e,{package:"@vuepress/theme-default"}),i,t,r,(0,s._)("ul",null,[o,(0,s._)("li",null,[p,(0,s._)("p",null,[(0,s.Uk)("由"),(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/plugin/external-link-icon.html#externallinkicon"},{default:(0,s.w5)((()=>[(0,s.Uk)("@vuepress/plugin-external-link-icon")])),_:1}),(0,s.Uk)(" 提供。")])]),d]),c,(0,s._)("ul",null,[u,h,(0,s._)("li",null,[m,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/default-theme/config.html#navbar"},{default:(0,s.w5)((()=>[(0,s.Uk)("默认主题 > 配置 > navbar")])),_:1})])])])]),D,v,(0,s._)("div",_,[g,(0,s.Wm)(Vn)]),k,(0,s._)("div",b,[y,(0,s.Wm)(Vn)]),(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Uk)("参考： "),(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/default-theme/styles.html#style-%E6%96%87%E4%BB%B6"},{default:(0,s.w5)((()=>[(0,s.Uk)("默认主题 > 样式 > Style 文件")])),_:1})])])])]),f,x,C,(0,s._)("ul",null,[E,U,(0,s._)("li",null,[L,(0,s._)("div",w,[A,(0,s.Wm)(Vn)])])]),F,(0,s._)("ul",null,[z,W,(0,s._)("li",null,[N,(0,s._)("div",P,[I,(0,s.Wm)(Vn)])]),(0,s._)("li",null,[T,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(Rn,{to:"/zh/vuepress-next/guide/assets.html#public-%E6%96%87%E4%BB%B6"},{default:(0,s.w5)((()=>[(0,s.Uk)("指南 > 静态资源 > Public 文件")])),_:1})])])])]),B,(0,s._)("ul",null,[S,M,(0,s._)("li",null,[H,(0,s._)("ul",null,[R,(0,s._)("li",null,[(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/default-theme/config.html#darkmode"},{default:(0,s.w5)((()=>[(0,s.Uk)("默认主题 > 配置 > darkMode")])),_:1})])])])]),V,(0,s._)("ul",null,[j,(0,s._)("li",null,[q,G,(0,s._)("p",null,[(0,s.Uk)("如果不设置，则默认使用站点 "),(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/config.html#title"},{default:(0,s.w5)((()=>[(0,s.Uk)("title")])),_:1}),(0,s.Uk)(" 。")]),O])]),J,(0,s._)("ul",null,[Z,(0,s._)("li",null,[K,Q,(0,s._)("p",null,[(0,s.Uk)("如果不设置，则默认使用站点 "),(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/config.html#description"},{default:(0,s.w5)((()=>[(0,s.Uk)("description")])),_:1}),(0,s.Uk)(" 。")]),X])]),Y,$,(0,s._)("div",nn,[ln,(0,s.Wm)(Vn)]),en,(0,s._)("div",sn,[an,(0,s.Wm)(Vn)]),tn,rn,(0,s._)("div",on,[pn,(0,s.Wm)(Vn)]),dn,(0,s._)("div",cn,[un,(0,s.Wm)(Vn)]),hn,(0,s._)("ul",null,[mn,Dn,(0,s._)("li",null,[vn,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/default-theme/config.html#editlink"},{default:(0,s.w5)((()=>[(0,s.Uk)("默认主题 > 配置 > editLink")])),_:1})])])])]),_n,(0,s._)("ul",null,[gn,kn,(0,s._)("li",null,[bn,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/default-theme/config.html#editlinkpattern"},{default:(0,s.w5)((()=>[(0,s.Uk)("默认主题 > 配置 > editLinkPattern")])),_:1})])])])]),yn,(0,s._)("ul",null,[fn,xn,(0,s._)("li",null,[Cn,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/default-theme/config.html#lastupdated"},{default:(0,s.w5)((()=>[(0,s.Uk)("默认主题 > 配置 > lastUpdated")])),_:1})])])])]),En,(0,s._)("ul",null,[Un,Ln,(0,s._)("li",null,[wn,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/default-theme/config.html#contributors"},{default:(0,s.w5)((()=>[(0,s.Uk)("默认主题 > 配置 > contributors")])),_:1})])])])]),An,(0,s._)("ul",null,[Fn,zn,(0,s._)("li",null,[Wn,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/default-theme/config.html#sidebar"},{default:(0,s.w5)((()=>[(0,s.Uk)("默认主题 > 配置 > sidebar")])),_:1})])])])]),Nn,(0,s._)("ul",null,[Pn,In,(0,s._)("li",null,[Tn,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(Rn,{to:"/zh/vuepress-next/reference/default-theme/config.html#sidebardepth"},{default:(0,s.w5)((()=>[(0,s.Uk)("默认主题 > 配置 > sidebarDepth")])),_:1})])])])]),Bn,(0,s._)("div",Sn,[Mn,(0,s.Wm)(Vn)]),Hn])}]])}}]);