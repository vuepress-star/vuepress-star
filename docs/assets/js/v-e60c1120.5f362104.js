"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3120],{97466:(e,n,t)=>{t.r(n),t.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-e60c1120","path":"/zh/guide/feature/seo.html","title":"SEO","lang":"zh-CN","frontmatter":{"title":"SEO","icon":"config","category":"feature","tags":["feature","seo"]},"excerpt":"","headers":[{"level":2,"title":"开箱即用","slug":"开箱即用","link":"#开箱即用","children":[]},{"level":2,"title":"自由定制","slug":"自由定制","link":"#自由定制","children":[]},{"level":2,"title":"自定义生成过程","slug":"自定义生成过程","link":"#自定义生成过程","children":[]},{"level":2,"title":"RDFa 1.1","slug":"rdfa-1-1","link":"#rdfa-1-1","children":[]}],"git":{"createdTime":1638099974000,"updatedTime":1639901643000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":2}]},"copyright":"","filePathRelative":"zh/guide/feature/seo.md","content":"---\\ntitle: SEO\\nicon: config\\ncategory: feature\\ntags:\\n  - feature\\n  - seo\\n---\\n\\n`vuepress-theme-star` 通过内置 [`@mr-hope/vuepress-plugin-seo`](https://vuepress-theme-star.github.io/seo/zh/) 为提供 SEO 增强功能。\\n\\n为了使插件能够更好的工作，可能需要查看一下 [页面信息配置](../../config/page.md#页面信息配置) 并合理的配置它们。\\n\\n如果不需要这个插件，请设置 `themeConfig.seo` 为 `false`。\\n\\n::: info SEO 介绍\\n\\n搜索引擎优化 (**S**earch **E**ngine **O**ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。 所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。\\n\\n:::\\n\\n## 开箱即用\\n\\n插件会向网页的 `<head>` 注入一些 `<meta>` 标签，使的网页对搜索引擎和社交媒体更加友好。\\n\\n默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动为生成 `<meta>` 标签。诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。\\n\\n以下是会被默认注入到 `<head>` 中的 `<meta>` 标签及其值:\\n\\n|         属性名称         |                                        值                                        |\\n| :----------------------: | :------------------------------------------------------------------------------: |\\n|         `og:url`         |                         `themeConfig.hostname` + `path`                          |\\n|      `og:site_name`      |                                  `$site.title`                                   |\\n|        `og:title`        |                                   `page.title`                                   |\\n|     `og:description`     |                          `page.frontmatter.description`                          |\\n|        `og:type`         |                                   `\'article\'`                                    |\\n|        `og:image`        |                `themeConfig.hostname` + `page.frontmatter.image`                 |\\n|    `og:updated_time`     |                              `page.updateTimeStamp`                              |\\n|       `og:locale`        |                              `page._computed.$lang`                              |\\n|  `og:locale:alternate`   |                      `$themeConfig.locales` 包含的其他语言                       |\\n|      `twitter:card`      |                             `\'summary_large_image\'`                              |\\n|   `twitter:image:alt`    |                                  `$site.title`                                   |\\n|     `article:author`     |               `page.frontmatter.author` \\\\|\\\\| `themeConfig.author`                |\\n|      `article:tag`       |               `page.frontmatter.tags` \\\\|\\\\| `page.frontmatter.tag`                |\\n| `article:published_time` | `page.frontmatter.time` \\\\|\\\\| `page.frontmatter.date` \\\\|\\\\| `page.createTimeStamp` |\\n| `article:modified_time`  |                              `page.updateTimeStamp`                              |\\n\\n## 自由定制\\n\\n你可以在页面的 frontmatter 中配置 `meta` 选项，自主定制特定页面用于 SEO 的 `<meta>` 标签内容。\\n\\n如:\\n\\n```md\\n---\\nmeta:\\n  - name: keywords\\n    content: SEO plugin\\n---\\n```\\n\\n会自动注入 `<meta name=\\"keywords\\" content=\\"SEO plugin\\" />`。\\n\\n## 自定义生成过程\\n\\n你可以向 `themeConfig.seo.seo` 传入一个函数来注入新的 `<meta>` 标签或覆盖默认生成内容。你需要按照 `<property>: <content>` 的格式来返回一个对象。\\n\\n比如你返回了 `{ \'og:url\': \'google.com\', \'og:image\': \'google.com/logo.jpg\' }`，则插件会注入以下内容到 `<head>` 中:\\n\\n```html\\n<meta property=\\"og:url\\" content=\\"google.com\\" />\\n<meta property=\\"og:image\\" content=\\"google.com/logo.jpg\\" />\\n```\\n\\n当你需要注入的 `<meta>` 没有使用 `property` 和 `content`，或者你想要移除已有的 meta，你可以向 `themeConfig.seo.customMeta` 传入一个自定义生成函数，完全定制 `<meta>` 标签。\\n\\n`customMeta` 的结构为 `(meta: Meta[], info: PageSeoInfo) => void`\\n\\n`PageSeoInfo` 的结构如下:\\n\\n```ts\\ninterface PageSeoInfo {\\n  /** 当前页面对象 */\\n  page: Page;\\n  /** Vuepress 配置  */\\n  site: SiteConfig;\\n  /** 主题配置 */\\n  themeConfig: ThemeConfig | Record<string, never>;\\n  /** 站点支持的语言 */\\n  locale: string[];\\n  /** 当前页面路径 */\\n  path: string;\\n}\\n```\\n\\n`Meta` 的类型为 `Record<\\"content\\" | \\"name\\" | \\"charset\\" | \\"http-equiv\\", string>`，对象的键会渲染为 `<meta>` 标签的属性，值会渲染为对应属性的值。\\n\\n比如:\\n\\n```js\\n(meta: Meta, info: PageSeoInfo) => {\\n  const index = meta.findIndex((item) => item.property === \\"og:type\\");\\n\\n  if (index !== -1) meta.splice(index, 1);\\n\\n  meta.push({ a: \\"1\\", b: \\"2\\" });\\n};\\n```\\n\\n会向当前页面的 `<head>` 注入 `<meta a=\\"1\\" b=\\"2\\" />`，并移除任何已存在的 `<meta property=\\"og:type\\" />`。\\n\\n## RDFa 1.1\\n\\n主题通过遵循 [RDFa 1.1](https://www.w3.org/TR/rdfa-primer/)，为网站的大部分结构添加了富媒体结构支持。\\n\\n::: tip\\n\\n你可以使用 [Google 富媒体结构测试工具](https://search.google.com/test/rich-results?url=https%3A%2F%2Fvuepress-theme-star.github.io%2Fzh%2Fguide%2Ffeature%2Fseo%2F&user_agent=1)\\n测试本站点。\\n\\n:::\\n","icon":"config","author":[{"name":"Starzkg","email":"1600337300@qq.com"}],"top":false,"length":973,"words":973,"readingTime":3.24}')},46777:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var s=t(1863);const a=(0,s._)("code",null,"vuepress-theme-star",-1),o={href:"https://vuepress-theme-star.github.io/seo/zh/",target:"_blank",rel:"noopener noreferrer"},l=(0,s._)("code",null,"@mr-hope/vuepress-plugin-seo",-1),p=(0,s.uE)('<p>如果不需要这个插件，请设置 <code>themeConfig.seo</code> 为 <code>false</code>。</p><div class="custom-container info"><p class="custom-container-title">SEO 介绍</p><p>搜索引擎优化 (<strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。 所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。</p></div><h2 id="开箱即用" tabindex="-1"><a class="header-anchor" href="#开箱即用" aria-hidden="true">#</a> 开箱即用</h2><p>插件会向网页的 <code>&lt;head&gt;</code> 注入一些 <code>&lt;meta&gt;</code> 标签，使的网页对搜索引擎和社交媒体更加友好。</p><p>默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动为生成 <code>&lt;meta&gt;</code> 标签。诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。</p><p>以下是会被默认注入到 <code>&lt;head&gt;</code> 中的 <code>&lt;meta&gt;</code> 标签及其值:</p><table><thead><tr><th style="text-align:center;">属性名称</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>og:url</code></td><td style="text-align:center;"><code>themeConfig.hostname</code> + <code>path</code></td></tr><tr><td style="text-align:center;"><code>og:site_name</code></td><td style="text-align:center;"><code>$site.title</code></td></tr><tr><td style="text-align:center;"><code>og:title</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>og:description</code></td><td style="text-align:center;"><code>page.frontmatter.description</code></td></tr><tr><td style="text-align:center;"><code>og:type</code></td><td style="text-align:center;"><code>&#39;article&#39;</code></td></tr><tr><td style="text-align:center;"><code>og:image</code></td><td style="text-align:center;"><code>themeConfig.hostname</code> + <code>page.frontmatter.image</code></td></tr><tr><td style="text-align:center;"><code>og:updated_time</code></td><td style="text-align:center;"><code>page.updateTimeStamp</code></td></tr><tr><td style="text-align:center;"><code>og:locale</code></td><td style="text-align:center;"><code>page._computed.$lang</code></td></tr><tr><td style="text-align:center;"><code>og:locale:alternate</code></td><td style="text-align:center;"><code>$themeConfig.locales</code> 包含的其他语言</td></tr><tr><td style="text-align:center;"><code>twitter:card</code></td><td style="text-align:center;"><code>&#39;summary_large_image&#39;</code></td></tr><tr><td style="text-align:center;"><code>twitter:image:alt</code></td><td style="text-align:center;"><code>$site.title</code></td></tr><tr><td style="text-align:center;"><code>article:author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>themeConfig.author</code></td></tr><tr><td style="text-align:center;"><code>article:tag</code></td><td style="text-align:center;"><code>page.frontmatter.tags</code> || <code>page.frontmatter.tag</code></td></tr><tr><td style="text-align:center;"><code>article:published_time</code></td><td style="text-align:center;"><code>page.frontmatter.time</code> || <code>page.frontmatter.date</code> || <code>page.createTimeStamp</code></td></tr><tr><td style="text-align:center;"><code>article:modified_time</code></td><td style="text-align:center;"><code>page.updateTimeStamp</code></td></tr></tbody></table><h2 id="自由定制" tabindex="-1"><a class="header-anchor" href="#自由定制" aria-hidden="true">#</a> 自由定制</h2><p>你可以在页面的 frontmatter 中配置 <code>meta</code> 选项，自主定制特定页面用于 SEO 的 <code>&lt;meta&gt;</code> 标签内容。</p><p>如:</p>',10),c={class:"code-enhance"},r=(0,s.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">meta</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">keywords</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">SEO plugin</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),i=(0,s.uE)('<p>会自动注入 <code>&lt;meta name=&quot;keywords&quot; content=&quot;SEO plugin&quot; /&gt;</code>。</p><h2 id="自定义生成过程" tabindex="-1"><a class="header-anchor" href="#自定义生成过程" aria-hidden="true">#</a> 自定义生成过程</h2><p>你可以向 <code>themeConfig.seo.seo</code> 传入一个函数来注入新的 <code>&lt;meta&gt;</code> 标签或覆盖默认生成内容。你需要按照 <code>&lt;property&gt;: &lt;content&gt;</code> 的格式来返回一个对象。</p><p>比如你返回了 <code>{ &#39;og:url&#39;: &#39;google.com&#39;, &#39;og:image&#39;: &#39;google.com/logo.jpg&#39; }</code>，则插件会注入以下内容到 <code>&lt;head&gt;</code> 中:</p>',4),d={class:"code-enhance"},D=(0,s.uE)('<div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">meta</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">property</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;og:url&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;google.com&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#808080;">/&gt;</span></span>\n<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">meta</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">property</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;og:image&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;google.com/logo.jpg&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#808080;">/&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',1),g=(0,s.uE)("<p>当你需要注入的 <code>&lt;meta&gt;</code> 没有使用 <code>property</code> 和 <code>content</code>，或者你想要移除已有的 meta，你可以向 <code>themeConfig.seo.customMeta</code> 传入一个自定义生成函数，完全定制 <code>&lt;meta&gt;</code> 标签。</p><p><code>customMeta</code> 的结构为 <code>(meta: Meta[], info: PageSeoInfo) =&gt; void</code></p><p><code>PageSeoInfo</code> 的结构如下:</p>",3),m={class:"code-enhance"},y=(0,s.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">PageSeoInfo</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/** 当前页面对象 */</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/** Vuepress 配置  */</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">site</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">SiteConfig</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/** 主题配置 */</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">themeConfig</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">ThemeConfig</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">never</span><span style="color:#D4D4D4;">&gt;;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/** 站点支持的语言 */</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">locale</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">[];</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/** 当前页面路径 */</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),u=(0,s._)("p",null,[(0,s._)("code",null,"Meta"),(0,s.Uk)(" 的类型为 "),(0,s._)("code",null,'Record<"content" | "name" | "charset" | "http-equiv", string>'),(0,s.Uk)("，对象的键会渲染为 "),(0,s._)("code",null,"<meta>"),(0,s.Uk)(" 标签的属性，值会渲染为对应属性的值。")],-1),h=(0,s._)("p",null,"比如:",-1),C={class:"code-enhance"},f=(0,s.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Meta</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">info</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">PageSeoInfo</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">index</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">findIndex</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">property</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&quot;og:type&quot;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;"> !== -</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">) </span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">splice</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">a:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;1&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">b:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;2&quot;</span><span style="color:#D4D4D4;"> });</span></span>\n<span class="line"><span style="color:#D4D4D4;">};</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),v=(0,s._)("p",null,[(0,s.Uk)("会向当前页面的 "),(0,s._)("code",null,"<head>"),(0,s.Uk)(" 注入 "),(0,s._)("code",null,'<meta a="1" b="2" />'),(0,s.Uk)("，并移除任何已存在的 "),(0,s._)("code",null,'<meta property="og:type" />'),(0,s.Uk)("。")],-1),E=(0,s._)("h2",{id:"rdfa-1-1",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#rdfa-1-1","aria-hidden":"true"},"#"),(0,s.Uk)(" RDFa 1.1")],-1),b={href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"},x={class:"custom-container tip"},k=(0,s._)("p",{class:"custom-container-title"},"TIP",-1),_={href:"https://search.google.com/test/rich-results?url=https%3A%2F%2Fvuepress-theme-star.github.io%2Fzh%2Fguide%2Ffeature%2Fseo%2F&user_agent=1",target:"_blank",rel:"noopener noreferrer"},F={},S=(0,t(94598).Z)(F,[["render",function(e,n){const t=(0,s.up)("ExternalLinkIcon"),F=(0,s.up)("RouterLink"),S=(0,s.up)("CodeCopyButton");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("p",null,[a,(0,s.Uk)(" 通过内置 "),(0,s._)("a",o,[l,(0,s.Wm)(t)]),(0,s.Uk)(" 为提供 SEO 增强功能。")]),(0,s._)("p",null,[(0,s.Uk)("为了使插件能够更好的工作，可能需要查看一下 "),(0,s.Wm)(F,{to:"/zh/config/page.html#%E9%A1%B5%E9%9D%A2%E4%BF%A1%E6%81%AF%E9%85%8D%E7%BD%AE"},{default:(0,s.w5)((()=>[(0,s.Uk)("页面信息配置")])),_:1}),(0,s.Uk)(" 并合理的配置它们。")]),p,(0,s._)("div",c,[r,(0,s.Wm)(S)]),i,(0,s._)("div",d,[D,(0,s.Wm)(S)]),g,(0,s._)("div",m,[y,(0,s.Wm)(S)]),u,h,(0,s._)("div",C,[f,(0,s.Wm)(S)]),v,E,(0,s._)("p",null,[(0,s.Uk)("主题通过遵循 "),(0,s._)("a",b,[(0,s.Uk)("RDFa 1.1"),(0,s.Wm)(t)]),(0,s.Uk)("，为网站的大部分结构添加了富媒体结构支持。")]),(0,s._)("div",x,[k,(0,s._)("p",null,[(0,s.Uk)("你可以使用 "),(0,s._)("a",_,[(0,s.Uk)("Google 富媒体结构测试工具"),(0,s.Wm)(t)]),(0,s.Uk)("测试本站点。")])])])}]])}}]);