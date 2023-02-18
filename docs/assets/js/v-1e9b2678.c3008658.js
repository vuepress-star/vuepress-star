"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1098],{7593:(e,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-1e9b2678","path":"/vuepress-next/reference/frontmatter.html","title":"Frontmatter","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"date","slug":"date","link":"#date","children":[]},{"level":2,"title":"description","slug":"description","link":"#description","children":[]},{"level":2,"title":"head","slug":"head","link":"#head","children":[]},{"level":2,"title":"lang","slug":"lang","link":"#lang","children":[]},{"level":2,"title":"layout","slug":"layout","link":"#layout","children":[]},{"level":2,"title":"permalink","slug":"permalink","link":"#permalink","children":[]},{"level":2,"title":"permalinkPattern","slug":"permalinkpattern","link":"#permalinkpattern","children":[]},{"level":2,"title":"routeMeta","slug":"routemeta","link":"#routemeta","children":[]},{"level":2,"title":"title","slug":"title","link":"#title","children":[]}],"git":{"createdTime":1635758933000,"updatedTime":1639839959000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":1},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"vuepress-next/reference/frontmatter.md","content":"# Frontmatter\\n\\n<NpmBadge package=\\"@vuepress/client\\" />\\n<NpmBadge package=\\"@vuepress/markdown\\" />\\n\\n## date\\n\\n- Type: `string`\\n\\n- Details:\\n\\n  Created date for the page.\\n\\n  You should specify the date in the form of `yyyy-MM-dd`, or follow the [YAML Timestamp Type](https://yaml.org/type/timestamp.html).\\n\\n- Also see:\\n  - [Node API > Page Properties > date](./node-api.md#date)\\n\\n## description\\n\\n- Type: `string`\\n\\n- Details:\\n\\n  Description for the page.\\n\\n  This will override the `description` option in your site config.\\n\\n- Also see:\\n  - [Config > description](./config.md#description)\\n\\n## head\\n\\n- Type: `HeadConfig[]`\\n\\n- Details:\\n\\n  Extra tags in `<head>` tag for the page.\\n\\n- Example:\\n\\n```md\\n---\\nhead:\\n  - - meta\\n    - name: foo\\n      content: bar\\n  - - link\\n    - rel: canonical\\n      href: foobar\\n---\\n```\\n\\n  Rendered as:\\n\\n```html\\n<head>\\n  <meta name=\\"foo\\" content=\\"bar\\" />\\n  <link rel=\\"canonical\\" href=\\"foobar\\" />\\n</head>\\n```\\n\\n- Also see:\\n  - [Config > head](./config.md#head)\\n\\n## lang\\n\\n- Type: `string`\\n\\n- Details:\\n\\n  Language for the page.\\n\\n  This will override the `lang` option in your site config.\\n\\n- Also see:\\n  - [Config > lang](./config.md#lang)\\n  - [Node API > Page Properties > lang](./node-api.md#lang)\\n\\n## layout\\n\\n- Type: `string`\\n\\n- Details:\\n\\n  Layout for the page.\\n\\n  Layouts are provided by theme. If you don\'t specify this frontmatter, the default layout will be used. You should refer to the theme\'s own documentation to find what layouts it provides.\\n\\n  If the theme layouts cannot meet your needs, you can use a custom layout component.\\n\\n- Example:\\n\\nRegister a layout component in `.vuepress/clientAppEnhance.ts` file:\\n\\n```ts\\nimport { defineClientAppEnhance } from \'@vuepress/client\'\\nimport CustomLayout from \'./CustomLayout.vue\'\\n\\nexport default defineClientAppEnhance(({ app }) => {\\n  app.component(\'CustomLayout\', CustomLayout)\\n})\\n```\\n\\nSet custom layout in frontmatter:\\n\\n```md\\n---\\nlayout: CustomLayout\\n---\\n```\\n\\n## permalink\\n\\n- Type: `string`\\n\\n- Details:\\n\\n  Permalink for the page.\\n\\n  This will override the default route path that determined by the file path of the page.\\n\\n- Also see:\\n  - [Frontmatter > permalinkPattern](#permalinkpattern)\\n  - [Guide > Page > Routing](../guide/page.md#routing)\\n  - [Node API > Page Properties > permalink](./node-api.md#permalink)\\n\\n## permalinkPattern\\n\\n- Type: `string`\\n\\n- Details:\\n\\n  Pattern to generate permalink for the page.\\n\\n  This won\'t take effect if the `permalink` frontmatter has been set.\\n\\n- Usage:\\n\\n  |  Pattern  |         Description         |\\n  |-----------|-----------------------------|\\n  | `:year`   | Year part of created date   |\\n  | `:month`  | Month part of created date  |\\n  | `:day`    | Day part of created date    |\\n  | `:slug`   | Slug of page filename       |\\n  | `:raw`    | Raw route path              |\\n\\n  The `:year`, `:month` and `:day` patterns are resolved according to the following priority:\\n\\n  - The `date` frontmatter.\\n  - The filename that matches the date pattern `yyyy-MM-dd-foobar.md` or `yyyy-MM-foobar.md`.\\n  - The dirname that matches the date pattern `yyyy/MM/dd/foobar.md` or `yyyy/MM/foobar.md`.\\n  - Fallback to `0000-00-00`.\\n\\n- Example 1:\\n\\n  The page filename is `foo-bar.md`.\\n\\n  The page frontmatter is:\\n\\n```md\\n---\\ndate: 2021-01-03\\npermalinkPattern: :year/:month/:day/:slug.html\\n---\\n```\\n\\n  Then the permalink of the page would be `2021/01/03/foo-bar.html`.\\n\\n- Example 2:\\n\\n  The page filename is `2021-01-03-bar-baz.md`.\\n\\n  The page frontmatter is:\\n\\n```md\\n---\\npermalinkPattern: :year/:month/:day/:slug.html\\n---\\n```\\n\\n  Then the permalink of the page would be `2021/01/03/bar-baz.html`.\\n\\n- Also see:\\n  - [Frontmatter > date](#date)\\n  - [Frontmatter > permalink](#permalink)\\n  - [Node API > Page Properties > permalink](./node-api.md#permalink)\\n\\n## routeMeta\\n\\n- Type: `Record<string, unknown>`\\n\\n- Details:\\n\\n  Custom data to be attached to the page route.\\n\\n- Also see:\\n  - [Node API > Page Properties > routeMeta](./node-api.md#routeMeta)\\n\\n## title\\n\\n- Type: `string`\\n\\n- Details:\\n\\n  Title for the page.\\n\\n  If you don\'t specify `title` in frontmatter, content of the first level-one header (i.e. `# title`) will be used as the title.\\n\\n- Also see:\\n  - [Node API > Page Properties > title](./node-api.md#title)\\n","author":[{"name":"Starzkg","email":"1600337300@qq.com"},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":562,"words":562,"readingTime":1.87}')},11494:(e,n,a)=>{a.r(n),a.d(n,{default:()=>ae});var l=a(1863);const t=(0,l._)("h1",{id:"frontmatter",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),(0,l.Uk)(" Frontmatter")],-1),s=(0,l._)("h2",{id:"date",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#date","aria-hidden":"true"},"#"),(0,l.Uk)(" date")],-1),o=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Type: "),(0,l._)("code",null,"string")])],-1),r=(0,l._)("p",null,"Details:",-1),i=(0,l._)("p",null,"Created date for the page.",-1),p=(0,l._)("code",null,"yyyy-MM-dd",-1),d={href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},c=(0,l._)("p",null,"Also see:",-1),u=(0,l._)("h2",{id:"description",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),(0,l.Uk)(" description")],-1),m=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Type: "),(0,l._)("code",null,"string")])],-1),h=(0,l._)("li",null,[(0,l._)("p",null,"Details:"),(0,l._)("p",null,"Description for the page."),(0,l._)("p",null,[(0,l.Uk)("This will override the "),(0,l._)("code",null,"description"),(0,l.Uk)(" option in your site config.")])],-1),y=(0,l._)("p",null,"Also see:",-1),D=(0,l.uE)('<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h2><ul><li><p>Type: <code>HeadConfig[]</code></p></li><li><p>Details:</p><p>Extra tags in <code>&lt;head&gt;</code> tag for the page.</p></li><li><p>Example:</p></li></ul>',2),f={class:"code-enhance"},g=(0,l.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">head</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - - </span><span style="color:#CE9178;">meta</span></span>\n<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">foo</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">bar</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - - </span><span style="color:#CE9178;">link</span></span>\n<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#569CD6;">rel</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">canonical</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">href</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">foobar</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),k=(0,l._)("p",null,"Rendered as:",-1),v={class:"code-enhance"},_=(0,l.uE)('<div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">meta</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;foo&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;bar&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#808080;">/&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">rel</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;canonical&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;foobar&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#808080;">/&gt;</span></span>\n<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),b=(0,l._)("h2",{id:"lang",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#lang","aria-hidden":"true"},"#"),(0,l.Uk)(" lang")],-1),C=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Type: "),(0,l._)("code",null,"string")])],-1),E=(0,l._)("li",null,[(0,l._)("p",null,"Details:"),(0,l._)("p",null,"Language for the page."),(0,l._)("p",null,[(0,l.Uk)("This will override the "),(0,l._)("code",null,"lang"),(0,l.Uk)(" option in your site config.")])],-1),T=(0,l._)("p",null,"Also see:",-1),P=(0,l.uE)('<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Layout for the page.</p><p>Layouts are provided by theme. If you don’t specify this frontmatter, the default layout will be used. You should refer to the theme’s own documentation to find what layouts it provides.</p><p>If the theme layouts cannot meet your needs, you can use a custom layout component.</p></li><li><p>Example:</p></li></ul><p>Register a layout component in <code>.vuepress/clientAppEnhance.ts</code> file:</p>',3),w={class:"code-enhance"},U=(0,l.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientAppEnhance</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>\n<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">CustomLayout</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./CustomLayout.vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientAppEnhance</span><span style="color:#D4D4D4;">(({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;"> }) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">component</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;CustomLayout&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">CustomLayout</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),x=(0,l._)("p",null,"Set custom layout in frontmatter:",-1),A={class:"code-enhance"},M=(0,l.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">layout</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">CustomLayout</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),F=(0,l._)("h2",{id:"permalink",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#permalink","aria-hidden":"true"},"#"),(0,l.Uk)(" permalink")],-1),L=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Type: "),(0,l._)("code",null,"string")])],-1),I=(0,l._)("li",null,[(0,l._)("p",null,"Details:"),(0,l._)("p",null,"Permalink for the page."),(0,l._)("p",null,"This will override the default route path that determined by the file path of the page.")],-1),W=(0,l._)("p",null,"Also see:",-1),N=(0,l._)("li",null,[(0,l._)("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1),q=(0,l.uE)('<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a> permalinkPattern</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Pattern to generate permalink for the page.</p><p>This won’t take effect if the <code>permalink</code> frontmatter has been set.</p></li><li><p>Usage:</p><table><thead><tr><th>Pattern</th><th>Description</th></tr></thead><tbody><tr><td><code>:year</code></td><td>Year part of created date</td></tr><tr><td><code>:month</code></td><td>Month part of created date</td></tr><tr><td><code>:day</code></td><td>Day part of created date</td></tr><tr><td><code>:slug</code></td><td>Slug of page filename</td></tr><tr><td><code>:raw</code></td><td>Raw route path</td></tr></tbody></table><p>The <code>:year</code>, <code>:month</code> and <code>:day</code> patterns are resolved according to the following priority:</p><ul><li>The <code>date</code> frontmatter.</li><li>The filename that matches the date pattern <code>yyyy-MM-dd-foobar.md</code> or <code>yyyy-MM-foobar.md</code>.</li><li>The dirname that matches the date pattern <code>yyyy/MM/dd/foobar.md</code> or <code>yyyy/MM/foobar.md</code>.</li><li>Fallback to <code>0000-00-00</code>.</li></ul></li><li><p>Example 1:</p><p>The page filename is <code>foo-bar.md</code>.</p><p>The page frontmatter is:</p></li></ul>',2),R={class:"code-enhance"},z=(0,l.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">date</span><span style="color:#D4D4D4;">: 2021-01-03</span></span>\n<span class="line"><span style="color:#569CD6;">permalinkPattern</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">:year/:month/:day/:slug.html</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),S=(0,l._)("p",null,[(0,l.Uk)("Then the permalink of the page would be "),(0,l._)("code",null,"2021/01/03/foo-bar.html"),(0,l.Uk)(".")],-1),Y=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("p",null,"Example 2:"),(0,l._)("p",null,[(0,l.Uk)("The page filename is "),(0,l._)("code",null,"2021-01-03-bar-baz.md"),(0,l.Uk)(".")]),(0,l._)("p",null,"The page frontmatter is:")])],-1),B={class:"code-enhance"},G=(0,l.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">permalinkPattern</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">:year/:month/:day/:slug.html</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),H=(0,l._)("p",null,[(0,l.Uk)("Then the permalink of the page would be "),(0,l._)("code",null,"2021/01/03/bar-baz.html"),(0,l.Uk)(".")],-1),J=(0,l._)("li",null,[(0,l._)("a",{href:"#date"},"Frontmatter > date")],-1),O=(0,l._)("li",null,[(0,l._)("a",{href:"#permalink"},"Frontmatter > permalink")],-1),Z=(0,l._)("h2",{id:"routemeta",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#routemeta","aria-hidden":"true"},"#"),(0,l.Uk)(" routeMeta")],-1),j=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Type: "),(0,l._)("code",null,"Record<string, unknown>")])],-1),K=(0,l._)("li",null,[(0,l._)("p",null,"Details:"),(0,l._)("p",null,"Custom data to be attached to the page route.")],-1),Q=(0,l._)("p",null,"Also see:",-1),V=(0,l._)("h2",{id:"title",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#title","aria-hidden":"true"},"#"),(0,l.Uk)(" title")],-1),X=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Type: "),(0,l._)("code",null,"string")])],-1),$=(0,l._)("li",null,[(0,l._)("p",null,"Details:"),(0,l._)("p",null,"Title for the page."),(0,l._)("p",null,[(0,l.Uk)("If you don’t specify "),(0,l._)("code",null,"title"),(0,l.Uk)(" in frontmatter, content of the first level-one header (i.e. "),(0,l._)("code",null,"# title"),(0,l.Uk)(") will be used as the title.")])],-1),ee=(0,l._)("p",null,"Also see:",-1),ne={},ae=(0,a(94598).Z)(ne,[["render",function(e,n){const a=(0,l.up)("NpmBadge"),ne=(0,l.up)("ExternalLinkIcon"),ae=(0,l.up)("RouterLink"),le=(0,l.up)("CodeCopyButton");return(0,l.wg)(),(0,l.iD)("div",null,[t,(0,l.Wm)(a,{package:"@vuepress/client"}),(0,l.Wm)(a,{package:"@vuepress/markdown"}),s,(0,l._)("ul",null,[o,(0,l._)("li",null,[r,i,(0,l._)("p",null,[(0,l.Uk)("You should specify the date in the form of "),p,(0,l.Uk)(", or follow the "),(0,l._)("a",d,[(0,l.Uk)("YAML Timestamp Type"),(0,l.Wm)(ne)]),(0,l.Uk)(".")])]),(0,l._)("li",null,[c,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(ae,{to:"/vuepress-next/reference/node-api.html#date"},{default:(0,l.w5)((()=>[(0,l.Uk)("Node API > Page Properties > date")])),_:1})])])])]),u,(0,l._)("ul",null,[m,h,(0,l._)("li",null,[y,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(ae,{to:"/vuepress-next/reference/config.html#description"},{default:(0,l.w5)((()=>[(0,l.Uk)("Config > description")])),_:1})])])])]),D,(0,l._)("div",f,[g,(0,l.Wm)(le)]),k,(0,l._)("div",v,[_,(0,l.Wm)(le)]),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Also see: "),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(ae,{to:"/vuepress-next/reference/config.html#head"},{default:(0,l.w5)((()=>[(0,l.Uk)("Config > head")])),_:1})])])])]),b,(0,l._)("ul",null,[C,E,(0,l._)("li",null,[T,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(ae,{to:"/vuepress-next/reference/config.html#lang"},{default:(0,l.w5)((()=>[(0,l.Uk)("Config > lang")])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(ae,{to:"/vuepress-next/reference/node-api.html#lang"},{default:(0,l.w5)((()=>[(0,l.Uk)("Node API > Page Properties > lang")])),_:1})])])])]),P,(0,l._)("div",w,[U,(0,l.Wm)(le)]),x,(0,l._)("div",A,[M,(0,l.Wm)(le)]),F,(0,l._)("ul",null,[L,I,(0,l._)("li",null,[W,(0,l._)("ul",null,[N,(0,l._)("li",null,[(0,l.Wm)(ae,{to:"/vuepress-next/guide/page.html#routing"},{default:(0,l.w5)((()=>[(0,l.Uk)("Guide > Page > Routing")])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(ae,{to:"/vuepress-next/reference/node-api.html#permalink"},{default:(0,l.w5)((()=>[(0,l.Uk)("Node API > Page Properties > permalink")])),_:1})])])])]),q,(0,l._)("div",R,[z,(0,l.Wm)(le)]),S,Y,(0,l._)("div",B,[G,(0,l.Wm)(le)]),H,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Also see: "),(0,l._)("ul",null,[J,O,(0,l._)("li",null,[(0,l.Wm)(ae,{to:"/vuepress-next/reference/node-api.html#permalink"},{default:(0,l.w5)((()=>[(0,l.Uk)("Node API > Page Properties > permalink")])),_:1})])])])]),Z,(0,l._)("ul",null,[j,K,(0,l._)("li",null,[Q,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(ae,{to:"/vuepress-next/reference/node-api.html#routeMeta"},{default:(0,l.w5)((()=>[(0,l.Uk)("Node API > Page Properties > routeMeta")])),_:1})])])])]),V,(0,l._)("ul",null,[X,$,(0,l._)("li",null,[ee,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(ae,{to:"/vuepress-next/reference/node-api.html#title"},{default:(0,l.w5)((()=>[(0,l.Uk)("Node API > Page Properties > title")])),_:1})])])])])])}]])}}]);