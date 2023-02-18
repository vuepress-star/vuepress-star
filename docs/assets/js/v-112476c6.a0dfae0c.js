"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4590],{49675:(e,n,l)=>{l.r(n),l.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-112476c6","path":"/zh/vuepress-next/reference/plugin/active-header-links.html","title":"active-header-links","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"headerLinkSelector","slug":"headerlinkselector","link":"#headerlinkselector","children":[]},{"level":3,"title":"headerAnchorSelector","slug":"headeranchorselector","link":"#headeranchorselector","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]},{"level":3,"title":"offset","slug":"offset","link":"#offset","children":[]}]}],"git":{"createdTime":1635758933000,"updatedTime":1635758933000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"zh/vuepress-next/reference/plugin/active-header-links.md","content":"# active-header-links\\n\\n<NpmBadge package=\\"@vuepress/plugin-active-header-links\\" />\\n\\n该插件会监听页面滚动事件。当页面滚动至某个 _标题锚点_ 后，如果存在对应的 _标题链接_ ，那么该插件会将路由 Hash 更改为该 _标题锚点_ 。\\n\\n该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。\\n\\n## 安装\\n\\n```bash\\nnpm i -D @vuepress/plugin-active-header-links@next\\n```\\n\\n## 配置项\\n\\n### headerLinkSelector\\n\\n- 类型： `string`\\n\\n- 默认值： `\'a.sidebar-item\'`\\n\\n- 详情：\\n\\n  _标题链接_ 的选择器。\\n\\n  如果一个 _标题锚点_ 没有对应的 _标题链接_ ，那么及时滚动到这个 _标题锚点_ ，该插件也不会更改路由 Hash 。\\n\\n### headerAnchorSelector\\n\\n- 类型： `string`\\n\\n- 默认值： `\'.header-anchor\'`\\n\\n- 详情：\\n\\n  _标题锚点_ 的选择器。\\n\\n  你通常不需要设置该选项，除非你通过 [markdown.anchor](../config.md#markdown-anchor) 修改了 [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor#readme) 的 `permalinkClass` 选项。\\n\\n- 参考：\\n  - [指南 > Markdown > 语法扩展 > 标题锚点](../../guide/markdown.md#标题锚点)\\n\\n### delay\\n\\n- 类型： `number`\\n\\n- 默认值： `200`\\n\\n- 详情：\\n\\n  滚动事件监听器的 Debounce 延迟。\\n\\n### offset\\n\\n- 类型： `number`\\n\\n- 默认值： `5`\\n\\n- 详情：\\n\\n  即便直接点击 _标题锚点_ 的链接， `scrollTop` 也可能不会完全等于 _标题锚点_ 的 `offsetTop` ，所以我们添加一个 Offset 偏移量来避免这个误差。\\n","author":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":354,"words":354,"readingTime":1.18}')},43629:(e,n,l)=>{l.r(n),l.d(n,{default:()=>b});var a=l(1863);const r=(0,a._)("h1",{id:"active-header-links",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#active-header-links","aria-hidden":"true"},"#"),(0,a.Uk)(" active-header-links")],-1),i=(0,a._)("p",null,[(0,a.Uk)("该插件会监听页面滚动事件。当页面滚动至某个 "),(0,a._)("em",null,"标题锚点"),(0,a.Uk)(" 后，如果存在对应的 "),(0,a._)("em",null,"标题链接"),(0,a.Uk)(" ，那么该插件会将路由 Hash 更改为该 "),(0,a._)("em",null,"标题锚点"),(0,a.Uk)(" 。")],-1),d=(0,a._)("p",null,"该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。",-1),t=(0,a._)("h2",{id:"安装",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),(0,a.Uk)(" 安装")],-1),s={class:"code-enhance"},h=(0,a.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-active-header-links@next</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),c=(0,a.uE)('<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="headerlinkselector" tabindex="-1"><a class="header-anchor" href="#headerlinkselector" aria-hidden="true">#</a> headerLinkSelector</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;a.sidebar-item&#39;</code></p></li><li><p>详情：</p><p><em>标题链接</em> 的选择器。</p><p>如果一个 <em>标题锚点</em> 没有对应的 <em>标题链接</em> ，那么及时滚动到这个 <em>标题锚点</em> ，该插件也不会更改路由 Hash 。</p></li></ul><h3 id="headeranchorselector" tabindex="-1"><a class="header-anchor" href="#headeranchorselector" aria-hidden="true">#</a> headerAnchorSelector</h3>',4),o=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("类型： "),(0,a._)("code",null,"string")])],-1),u=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("默认值： "),(0,a._)("code",null,"'.header-anchor'")])],-1),p=(0,a._)("p",null,"详情：",-1),m=(0,a._)("p",null,[(0,a._)("em",null,"标题锚点"),(0,a.Uk)(" 的选择器。")],-1),k={href:"https://github.com/valeriangalliat/markdown-it-anchor#readme",target:"_blank",rel:"noopener noreferrer"},_=(0,a._)("code",null,"permalinkClass",-1),g=(0,a._)("p",null,"参考：",-1),f=(0,a.uE)('<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>200</code></p></li><li><p>详情：</p><p>滚动事件监听器的 Debounce 延迟。</p></li></ul><h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset" aria-hidden="true">#</a> offset</h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>5</code></p></li><li><p>详情：</p><p>即便直接点击 <em>标题锚点</em> 的链接， <code>scrollTop</code> 也可能不会完全等于 <em>标题锚点</em> 的 <code>offsetTop</code> ，所以我们添加一个 Offset 偏移量来避免这个误差。</p></li></ul>',4),v={},b=(0,l(94598).Z)(v,[["render",function(e,n){const l=(0,a.up)("NpmBadge"),v=(0,a.up)("CodeCopyButton"),b=(0,a.up)("RouterLink"),w=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[r,(0,a.Wm)(l,{package:"@vuepress/plugin-active-header-links"}),i,d,t,(0,a._)("div",s,[h,(0,a.Wm)(v)]),c,(0,a._)("ul",null,[o,u,(0,a._)("li",null,[p,m,(0,a._)("p",null,[(0,a.Uk)("你通常不需要设置该选项，除非你通过 "),(0,a.Wm)(b,{to:"/zh/vuepress-next/reference/config.html#markdown-anchor"},{default:(0,a.w5)((()=>[(0,a.Uk)("markdown.anchor")])),_:1}),(0,a.Uk)(" 修改了 "),(0,a._)("a",k,[(0,a.Uk)("markdown-it-anchor"),(0,a.Wm)(w)]),(0,a.Uk)(" 的 "),_,(0,a.Uk)(" 选项。")])]),(0,a._)("li",null,[g,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(b,{to:"/zh/vuepress-next/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9"},{default:(0,a.w5)((()=>[(0,a.Uk)("指南 > Markdown > 语法扩展 > 标题锚点")])),_:1})])])])]),f])}]])}}]);