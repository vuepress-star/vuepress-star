"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9610],{99340:(e,n,t)=>{t.r(n),t.d(n,{data:()=>o});const o=JSON.parse('{"key":"v-14ba7a9a","path":"/zh/guide/feature/pwa.html","title":"PWA","lang":"zh-CN","frontmatter":{"title":"PWA","icon":"setting","category":"feature","tags":["feature","pwa"]},"excerpt":"<p>默认情况下，该主题将通过内置 <a href=\\"https://vuepress-theme-star.github.io/pwa/zh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code v-pre>@mr-hope/vuepress-plugin-pwa</code><ExternalLinkIcon/></a> 启用渐进式 Web\\n应用程序支持<sup class=\\"footnote-ref\\"><a href=\\"#fn1\\" id=\\"fnref1\\">[1]</a></sup>。</p>\\n<p>如果你不需要此功能或想使用其他 pwa 插件，则可以将 <code v-pre>themeConfig.pwa</code> 设置为 <code v-pre>false</code> 来禁用该插件。</p>\\n<hr class=\\"footnotes-sep\\">\\n<section class=\\"footnotes\\">\\n<ol class=\\"footnotes-list\\">\\n<li id=\\"fn1\\" class=\\"footnote-item\\"><p><strong>PWA 介绍</strong></p>\\n<p>PWA 全称 Progressive Web app，即渐进式网络应用程序，标准由 W3C 规定。</p>\\n<p>它允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。 <a href=\\"#fnref1\\" class=\\"footnote-backref\\">↩︎</a></p>\\n</li>\\n</ol>\\n</section>\\n","headers":[{"level":2,"title":"内容缓存和更新","slug":"内容缓存和更新","link":"#内容缓存和更新","children":[{"level":3,"title":"默认缓存","slug":"默认缓存","link":"#默认缓存","children":[]},{"level":3,"title":"缓存控制","slug":"缓存控制","link":"#缓存控制","children":[]},{"level":3,"title":"更新弹窗","slug":"更新弹窗","link":"#更新弹窗","children":[]}]},{"level":2,"title":"清单文件生成","slug":"清单文件生成","link":"#清单文件生成","children":[{"level":3,"title":"自动生成","slug":"自动生成","link":"#自动生成","children":[]},{"level":3,"title":"手动配置","slug":"手动配置","link":"#手动配置","children":[]}]},{"level":2,"title":"其他选项","slug":"其他选项","link":"#其他选项","children":[]},{"level":2,"title":"相关阅读","slug":"相关阅读","link":"#相关阅读","children":[]}],"git":{"createdTime":1638099974000,"updatedTime":1639901643000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":2}]},"copyright":"","filePathRelative":"zh/guide/feature/pwa.md","content":"---\\ntitle: PWA\\nicon: setting\\ncategory: feature\\ntags:\\n  - feature\\n  - pwa\\n---\\n\\n默认情况下，该主题将通过内置 [`@mr-hope/vuepress-plugin-pwa`](https://vuepress-theme-star.github.io/pwa/zh/) 启用渐进式 Web\\n应用程序支持[^pwa-intro]。\\n\\n如果你不需要此功能或想使用其他 pwa 插件，则可以将 `themeConfig.pwa` 设置为 `false` 来禁用该插件。\\n\\n[^pwa-intro]: **PWA 介绍**\\n\\n    PWA 全称 Progressive Web app，即渐进式网络应用程序，标准由 W3C 规定。\\n\\n    它允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。\\n\\n\x3c!-- more --\x3e\\n\\n## 内容缓存和更新\\n\\nService Worker [^service-worker] (简称 SW) 主要用于获取并托管网站内容。\\n\\n[^service-worker]: **Service Worker 简要介绍**\\n\\n    1. Service Worker 会在注册过程中获取注册在其中的所有文件并缓存它们。\\n\\n    1. 注册成功后，Service Worker 激活，并开始代理并控制你的全部请求。\\n\\n    1. 每当你想要通过浏览器发起访问请求后，Service Worker 将会查看其是否存在与自身缓存列表中，若存在则直接返回缓存好的结果，否则调用自身的 fetch 方法进行获取。你可以通过自定义 fetch 方法，来完全控制网页内资源获取请求的结果，比如在离线时提供一个 fallback 的网页。\\n\\n    1. 每次用户重新打开网站时，Service Worker 会向自身注册时的地址发出校验命令，如果检测到新版本的 Service Woker，则会更新自身，并开始缓存注册在新 Service Worker 中的资源列表。成功获取内容更新后，Service Worker 将会触发 `update` 事件。可以通过此事件提示用户，比如将在右下角显示一个弹出窗口，提示用户新内容可用并允许用户触发更新。\\n\\nPWA 插件会自动通过 `workbox-build` 注册 Service Woker。\\n\\n为了更好地控制 Service Worker 可以预缓存的内容，插件提供了下列设置。\\n\\n如果你是一个高级用户，你也可以直接设置 `themeConfig.pwa.generateSwConfig` 来将选项传递给 `workbox-build`。\\n\\n### 默认缓存\\n\\n默认情况下插件会预缓存所有与网站相关的文件: `**/*.{html,js,css,svg}`\\n\\n同时插件还会缓存字体文件: `**/*.{woff,woff2,eot,ttf,otf}`。\\n\\n### 缓存控制\\n\\n基于可安装性[^installable]的要求，插件提供了缓存控制的相关选项。\\n\\n[^installable]: **可安装性**\\n\\n    想要让网站可以注册为 PWA，网站需要自行成功注册有效的 Service Worker，同时添加合法的 manifest 清单文件并在网站中声明它。\\n\\n    各平台或浏览器对 Service Worker 缓存的大小有要求，当 Service Worker 缓存的文件体积过大后，该网站将会被标记为不可安装。对于 Safari 这个阈值是 50 MB，少数浏览器会设置更少或更多的值 (30MB, 70MB, 80MB)，最大的 Chrome 也将阈值标识在 100 MB。\\n\\n    另外，清单文件应至少包含 `name`(或 `short_name`) `icons` `start_url`。\\n\\n    从 Chrome 93 起 Service Woker 必须含有有效的控制离线请求的 fetch 事件\\n\\n#### 图片缓存\\n\\n你可以通过设置 `themeConfig.pwa.cachePic` 选项为 `true` 来缓存站点图片。\\n\\n如果您的站点体积不大，且配图大多为关键性说明，希望可以在离线模式下显示，建议将此项设置为 `true`。\\n\\n::: info 图片识别\\n\\n我们通过文件后缀名识别图片，任何以 `.png`, `.jpg`, `.jpeg` , `.gif`, `.bmp`, `.webp` 结尾的文件都会视为图片。\\n\\n:::\\n\\n#### HTML 缓存\\n\\n当你网站体积过大时，你可以通过设置 `themeConfig.pwa.cacheHTML` 为 `false` 来仅缓存除主页和 404 错误页。\\n\\n::: tip 为什么可以移除\\n\\n虽然说 VuePress 为所有的页面通过 SSR[^ssr] 生成了 HTML 文件，但是这些文件主要用于 SEO[^seo]，并能够让你在后端不做 SPA[^spa] 配置的情况下能够直接访问任何链接。\\n\\n[^ssr]: **SSR**: **S**erver **S**ide **R**endering，服务端渲染\\n[^seo]: **SEO**: **S**earch **E**ngine **O**ptimization，搜索引擎增强，\\n\\n    详见 [SEO 介绍](https://mrhope.site/code/website/html/definition/seo/)\\n\\n[^spa]: **SPA**: **S**ingle **P**age **A**pplication, 单页应用\\n\\n    大多只有主页，并使用 history mode 处理路由，而不是真的在页面之间导航。\\n\\nVuePress 本质上是一个 SPA。这意味着你只需要缓存主页并从主页进入即可正常访问所有页面。\\n\\n当你站点页面数量或内容很多，包含 HTML 文件后体积过大时，你可以考虑将此项设置为 `false`，这样可以缩减大约 40% 的体积。缺点是用户在离线环境下只能通过主页进入再自行导航到对应页面。直接访问某个链接会出现网页错误的提示。\\n\\n:::\\n\\n#### 大小控制\\n\\n为了防止在预缓存列表中包含大文件，任何大于 2MB 的文件或大于 1MB 的图片都将被删除。\\n\\n你可以通过 `themeConfig.pwa.maxSize` 选项自定义缓存的最大文件大小 (单位 KB)，或通过 `themeConfig.pwa.maxPicSize` 来更改图片的大小限制 (单位: KB)。\\n\\n### 更新弹窗\\n\\n成功下载新内容后，我们将提供更新弹出窗口。\\n\\n::: tip 自定义弹窗\\n\\n如果你对默认的弹窗不满意，你可以自行编写组件更换。你需要全局注册自己的弹窗组件，并将组件的名称传递给 `themeConfig.pwa.popupComponent` 选项。\\n\\n:::\\n\\n## 清单文件生成\\n\\n为了保证 PWA 的可安装性，网站需要生成清单文件，并通过 `link` 声明有效的 manifest 清单文件地址[^manifest]。\\n\\n[^manifest]: **清单文件**\\n\\n    清单文件使用 JSON 格式，负责声明 PWA 各项信息，如名称、描述、图标、快捷动作等。\\n\\n    为了使你的站点能够被注册为 PWA，你需要满足 manifest 基本的规范，才能使浏览器认为该网站为一个可安装的 PWA 并允许用户安装它。\\n\\n    ::: info\\n\\n    Manifest 的标准与规范，请详见 [W3C Manifest](https://w3c.github.io/manifest/)\\n\\n    :::\\n\\n插件会在输出目录自动为你生成 Manifest 文件 `manifest.webmanifest`，同时还会添加清单地址声明到每一个 HTML 的 `<head>` 中。\\n\\n如果你在 `.vuepress/public` 中已有一个 `manifest.webmanifest` 或 `manifest.json`，该插件将读取它并合并到最终 manifest 中。\\n\\n### 自动生成\\n\\n插件会尽可能的通过 VuePress 插件接口的信息，为 manifest 的大部分设置项设置 fallback，这意味着即使你无需设置 manifest 的大多数内容。\\n\\n如果未设置下列选项，它们会按照顺序依次尝试回退到以下预设值。\\n\\n| 选项 | 默认值 | | --------------------------- |\\n------------------------------------------------------------------------------------------------------ | --- | ---------\\n| | name | `siteConfig.title` \\\\|\\\\| `themeConfig.title` \\\\|\\\\| `\'Site\'`                                              | |\\nshort_name | `siteConfig.title` \\\\|\\\\| `themeConfig.title` \\\\|\\\\| `\'Site\'`                                              | |\\ndescription | `siteConfig.description` \\\\|\\\\| `themeConfig.description` \\\\|\\\\| `\'A site built with vuepress-theme-star\'` | |\\nlang | `siteConfig.locales[\'/\'].lang` \\\\|\\\\| `themeConfig.locales[\'/\'].lang` \\\\|\\\\| `\\"en-US\\"`                     | \\\\\\\\\\n| `\\"en-US\\"` | | start_url | `context.base`\\n| | scope | `context.base`                                                                                         | |\\ndisplay | `\\"standalone\\"`                                                                                         | |\\ntheme_color | `\\"#46bd87\\"`                                                                                            | |\\nbackground_color | `\'#ffffff\'`\\n| | orientation | `\'portrait-primary\'`\\n| | prefer_related_applications | `false`\\n|\\n\\n完整的配置项详见 [Manifest 类型定义文件](https://github.com/vuepress-theme-star/vuepress-theme-star/blob/v1/packages/pwa/src/types/manifest.d.ts)\\n\\n### 手动配置\\n\\n你可以在 `themeConfig.pwa.manifest` 选项中手动指定 manifest 的各项内容。\\n\\n::: tip 优先级\\n\\n`themeConfig.pwa.manifest` 选项的设置具有最高的优先级，之后是 `public` 文件夹下可能存在的 manifest 文件。\\n\\n:::\\n\\n**你至少应该通过 `manifest.icons` 或 PWA 插件中的其他选项设置一个有效的图标。** 因为这是我们没法默认生成的。\\n\\n::: warning\\n\\n可安装性[^installable]规范要求 manifest 中至少声明一个有效的图标。\\n\\n所以如果你不配置 `themeConfig.pwa.manifest.icons`，访问者只能享受到 Service Worker 缓存带来的离线可访问性，而并不能作为 PWA 进行安装。\\n\\n另外插件并不会处理 manifest 中的任何内容，而是原样输出它们。这意味着如果打算你部署到某个子目录，你则应自行添加 `base` 到 manifest 中的相应 URL。\\n\\n:::\\n\\n## 其他选项\\n\\n插件还提供了其他 PWA 相关选项，比如微软磁贴图标与颜色设置，苹果图标等。\\n\\n你可以酌情根据需要设置它们。详细的选项请见 [PWA 插件配置](https://vuepress-theme-star.github.io/pwa/zh/config/)。\\n\\n## 相关阅读\\n\\n更多内容，请详见:\\n\\n- [PWA 插件文档](https://vuepress-theme-star.github.io/pwa/zh/)\\n- [Google PWA](https://web.dev/progressive-web-apps/)\\n- [MDN PWA](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)\\n- [W3C Manifest 规范](https://w3c.github.io/manifest/)\\n","icon":"setting","author":[{"name":"Starzkg","email":"1600337300@qq.com"}],"top":false,"length":2044,"words":2044,"readingTime":6.81}')},11819:(e,n,t)=>{t.r(n),t.d(n,{default:()=>q});var o=t(1863);const r={href:"https://vuepress-theme-star.github.io/pwa/zh/",target:"_blank",rel:"noopener noreferrer"},a=(0,o._)("code",null,"@mr-hope/vuepress-plugin-pwa",-1),i=(0,o._)("sup",{class:"footnote-ref"},[(0,o._)("a",{href:"#fn1",id:"fnref1"},"[1]")],-1),s=(0,o.uE)('<p>如果你不需要此功能或想使用其他 pwa 插件，则可以将 <code>themeConfig.pwa</code> 设置为 <code>false</code> 来禁用该插件。</p><h2 id="内容缓存和更新" tabindex="-1"><a class="header-anchor" href="#内容缓存和更新" aria-hidden="true">#</a> 内容缓存和更新</h2><p>Service Worker <sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup> (简称 SW) 主要用于获取并托管网站内容。</p><p>PWA 插件会自动通过 <code>workbox-build</code> 注册 Service Woker。</p><p>为了更好地控制 Service Worker 可以预缓存的内容，插件提供了下列设置。</p><p>如果你是一个高级用户，你也可以直接设置 <code>themeConfig.pwa.generateSwConfig</code> 来将选项传递给 <code>workbox-build</code>。</p><h3 id="默认缓存" tabindex="-1"><a class="header-anchor" href="#默认缓存" aria-hidden="true">#</a> 默认缓存</h3><p>默认情况下插件会预缓存所有与网站相关的文件: <code>**/*.{html,js,css,svg}</code></p><p>同时插件还会缓存字体文件: <code>**/*.{woff,woff2,eot,ttf,otf}</code>。</p><h3 id="缓存控制" tabindex="-1"><a class="header-anchor" href="#缓存控制" aria-hidden="true">#</a> 缓存控制</h3><p>基于可安装性<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup>的要求，插件提供了缓存控制的相关选项。</p><h4 id="图片缓存" tabindex="-1"><a class="header-anchor" href="#图片缓存" aria-hidden="true">#</a> 图片缓存</h4><p>你可以通过设置 <code>themeConfig.pwa.cachePic</code> 选项为 <code>true</code> 来缓存站点图片。</p><p>如果您的站点体积不大，且配图大多为关键性说明，希望可以在离线模式下显示，建议将此项设置为 <code>true</code>。</p><div class="custom-container info"><p class="custom-container-title">图片识别</p><p>我们通过文件后缀名识别图片，任何以 <code>.png</code>, <code>.jpg</code>, <code>.jpeg</code> , <code>.gif</code>, <code>.bmp</code>, <code>.webp</code> 结尾的文件都会视为图片。</p></div><h4 id="html-缓存" tabindex="-1"><a class="header-anchor" href="#html-缓存" aria-hidden="true">#</a> HTML 缓存</h4><p>当你网站体积过大时，你可以通过设置 <code>themeConfig.pwa.cacheHTML</code> 为 <code>false</code> 来仅缓存除主页和 404 错误页。</p><div class="custom-container tip"><p class="custom-container-title">为什么可以移除</p><p>虽然说 VuePress 为所有的页面通过 SSR<sup class="footnote-ref"><a href="#fn4" id="fnref4">[4]</a></sup> 生成了 HTML 文件，但是这些文件主要用于 SEO<sup class="footnote-ref"><a href="#fn5" id="fnref5">[5]</a></sup>，并能够让你在后端不做 SPA<sup class="footnote-ref"><a href="#fn6" id="fnref6">[6]</a></sup> 配置的情况下能够直接访问任何链接。</p><p>VuePress 本质上是一个 SPA。这意味着你只需要缓存主页并从主页进入即可正常访问所有页面。</p><p>当你站点页面数量或内容很多，包含 HTML 文件后体积过大时，你可以考虑将此项设置为 <code>false</code>，这样可以缩减大约 40% 的体积。缺点是用户在离线环境下只能通过主页进入再自行导航到对应页面。直接访问某个链接会出现网页错误的提示。</p></div><h4 id="大小控制" tabindex="-1"><a class="header-anchor" href="#大小控制" aria-hidden="true">#</a> 大小控制</h4><p>为了防止在预缓存列表中包含大文件，任何大于 2MB 的文件或大于 1MB 的图片都将被删除。</p><p>你可以通过 <code>themeConfig.pwa.maxSize</code> 选项自定义缓存的最大文件大小 (单位 KB)，或通过 <code>themeConfig.pwa.maxPicSize</code> 来更改图片的大小限制 (单位: KB)。</p><h3 id="更新弹窗" tabindex="-1"><a class="header-anchor" href="#更新弹窗" aria-hidden="true">#</a> 更新弹窗</h3><p>成功下载新内容后，我们将提供更新弹出窗口。</p><div class="custom-container tip"><p class="custom-container-title">自定义弹窗</p><p>如果你对默认的弹窗不满意，你可以自行编写组件更换。你需要全局注册自己的弹窗组件，并将组件的名称传递给 <code>themeConfig.pwa.popupComponent</code> 选项。</p></div><h2 id="清单文件生成" tabindex="-1"><a class="header-anchor" href="#清单文件生成" aria-hidden="true">#</a> 清单文件生成</h2><p>为了保证 PWA 的可安装性，网站需要生成清单文件，并通过 <code>link</code> 声明有效的 manifest 清单文件地址<sup class="footnote-ref"><a href="#fn7" id="fnref7">[7]</a></sup>。</p><p>插件会在输出目录自动为你生成 Manifest 文件 <code>manifest.webmanifest</code>，同时还会添加清单地址声明到每一个 HTML 的 <code>&lt;head&gt;</code> 中。</p><p>如果你在 <code>.vuepress/public</code> 中已有一个 <code>manifest.webmanifest</code> 或 <code>manifest.json</code>，该插件将读取它并合并到最终 manifest 中。</p><h3 id="自动生成" tabindex="-1"><a class="header-anchor" href="#自动生成" aria-hidden="true">#</a> 自动生成</h3><p>插件会尽可能的通过 VuePress 插件接口的信息，为 manifest 的大部分设置项设置 fallback，这意味着即使你无需设置 manifest 的大多数内容。</p><p>如果未设置下列选项，它们会按照顺序依次尝试回退到以下预设值。</p><p>| 选项 | 默认值 | | --------------------------- | ------------------------------------------------------------------------------------------------------ | — | --------- | | name | <code>siteConfig.title</code> || <code>themeConfig.title</code> || <code>&#39;Site&#39;</code> | | short_name | <code>siteConfig.title</code> || <code>themeConfig.title</code> || <code>&#39;Site&#39;</code> | | description | <code>siteConfig.description</code> || <code>themeConfig.description</code> || <code>&#39;A site built with vuepress-theme-star&#39;</code> | | lang | <code>siteConfig.locales[&#39;/&#39;].lang</code> || <code>themeConfig.locales[&#39;/&#39;].lang</code> || <code>&quot;en-US&quot;</code> | \\ | <code>&quot;en-US&quot;</code> | | start_url | <code>context.base</code> | | scope | <code>context.base</code> | | display | <code>&quot;standalone&quot;</code> | | theme_color | <code>&quot;#46bd87&quot;</code> | | background_color | <code>&#39;#ffffff&#39;</code> | | orientation | <code>&#39;portrait-primary&#39;</code> | | prefer_related_applications | <code>false</code> |</p>',32),c={href:"https://github.com/vuepress-theme-star/vuepress-theme-star/blob/v1/packages/pwa/src/types/manifest.d.ts",target:"_blank",rel:"noopener noreferrer"},l=(0,o.uE)('<h3 id="手动配置" tabindex="-1"><a class="header-anchor" href="#手动配置" aria-hidden="true">#</a> 手动配置</h3><p>你可以在 <code>themeConfig.pwa.manifest</code> 选项中手动指定 manifest 的各项内容。</p><div class="custom-container tip"><p class="custom-container-title">优先级</p><p><code>themeConfig.pwa.manifest</code> 选项的设置具有最高的优先级，之后是 <code>public</code> 文件夹下可能存在的 manifest 文件。</p></div><p><strong>你至少应该通过 <code>manifest.icons</code> 或 PWA 插件中的其他选项设置一个有效的图标。</strong> 因为这是我们没法默认生成的。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>可安装性<sup class="footnote-ref"><a href="#fn3" id="fnref3:1">[3:1]</a></sup>规范要求 manifest 中至少声明一个有效的图标。</p><p>所以如果你不配置 <code>themeConfig.pwa.manifest.icons</code>，访问者只能享受到 Service Worker 缓存带来的离线可访问性，而并不能作为 PWA 进行安装。</p><p>另外插件并不会处理 manifest 中的任何内容，而是原样输出它们。这意味着如果打算你部署到某个子目录，你则应自行添加 <code>base</code> 到 manifest 中的相应 URL。</p></div><h2 id="其他选项" tabindex="-1"><a class="header-anchor" href="#其他选项" aria-hidden="true">#</a> 其他选项</h2><p>插件还提供了其他 PWA 相关选项，比如微软磁贴图标与颜色设置，苹果图标等。</p>',7),p={href:"https://vuepress-theme-star.github.io/pwa/zh/config/",target:"_blank",rel:"noopener noreferrer"},f=(0,o._)("h2",{id:"相关阅读",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#相关阅读","aria-hidden":"true"},"#"),(0,o.Uk)(" 相关阅读")],-1),d=(0,o._)("p",null,"更多内容，请详见:",-1),h={href:"https://vuepress-theme-star.github.io/pwa/zh/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://web.dev/progressive-web-apps/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},g={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},k=(0,o._)("hr",{class:"footnotes-sep"},null,-1),b={class:"footnotes"},v={class:"footnotes-list"},W=(0,o.uE)('<li id="fn1" class="footnote-item"><p><strong>PWA 介绍</strong></p><p>PWA 全称 Progressive Web app，即渐进式网络应用程序，标准由 W3C 规定。</p><p>它允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li><li id="fn2" class="footnote-item"><p><strong>Service Worker 简要介绍</strong></p><ol><li><p>Service Worker 会在注册过程中获取注册在其中的所有文件并缓存它们。</p></li><li><p>注册成功后，Service Worker 激活，并开始代理并控制你的全部请求。</p></li><li><p>每当你想要通过浏览器发起访问请求后，Service Worker 将会查看其是否存在与自身缓存列表中，若存在则直接返回缓存好的结果，否则调用自身的 fetch 方法进行获取。你可以通过自定义 fetch 方法，来完全控制网页内资源获取请求的结果，比如在离线时提供一个 fallback 的网页。</p></li><li><p>每次用户重新打开网站时，Service Worker 会向自身注册时的地址发出校验命令，如果检测到新版本的 Service Woker，则会更新自身，并开始缓存注册在新 Service Worker 中的资源列表。成功获取内容更新后，Service Worker 将会触发 <code>update</code> 事件。可以通过此事件提示用户，比如将在右下角显示一个弹出窗口，提示用户新内容可用并允许用户触发更新。</p></li></ol><a href="#fnref2" class="footnote-backref">↩︎</a></li><li id="fn3" class="footnote-item"><p><strong>可安装性</strong></p><p>想要让网站可以注册为 PWA，网站需要自行成功注册有效的 Service Worker，同时添加合法的 manifest 清单文件并在网站中声明它。</p><p>各平台或浏览器对 Service Worker 缓存的大小有要求，当 Service Worker 缓存的文件体积过大后，该网站将会被标记为不可安装。对于 Safari 这个阈值是 50 MB，少数浏览器会设置更少或更多的值 (30MB, 70MB, 80MB)，最大的 Chrome 也将阈值标识在 100 MB。</p><p>另外，清单文件应至少包含 <code>name</code>(或 <code>short_name</code>) <code>icons</code> <code>start_url</code>。</p><p>从 Chrome 93 起 Service Woker 必须含有有效的控制离线请求的 fetch 事件 <a href="#fnref3" class="footnote-backref">↩︎</a> <a href="#fnref3:1" class="footnote-backref">↩︎</a></p></li><li id="fn4" class="footnote-item"><p><strong>SSR</strong>: <strong>S</strong>erver <strong>S</strong>ide <strong>R</strong>endering，服务端渲染 <a href="#fnref4" class="footnote-backref">↩︎</a></p></li>',4),S={id:"fn5",class:"footnote-item"},_=(0,o._)("p",null,[(0,o._)("strong",null,"SEO"),(0,o.Uk)(": "),(0,o._)("strong",null,"S"),(0,o.Uk)("earch "),(0,o._)("strong",null,"E"),(0,o.Uk)("ngine "),(0,o._)("strong",null,"O"),(0,o.Uk)("ptimization，搜索引擎增强，")],-1),w={href:"https://mrhope.site/code/website/html/definition/seo/",target:"_blank",rel:"noopener noreferrer"},P=(0,o._)("a",{href:"#fnref5",class:"footnote-backref"},"↩︎",-1),C=(0,o._)("li",{id:"fn6",class:"footnote-item"},[(0,o._)("p",null,[(0,o._)("strong",null,"SPA"),(0,o.Uk)(": "),(0,o._)("strong",null,"S"),(0,o.Uk)("ingle "),(0,o._)("strong",null,"P"),(0,o.Uk)("age "),(0,o._)("strong",null,"A"),(0,o.Uk)("pplication, 单页应用")]),(0,o._)("p",null,[(0,o.Uk)("大多只有主页，并使用 history mode 处理路由，而不是真的在页面之间导航。 "),(0,o._)("a",{href:"#fnref6",class:"footnote-backref"},"↩︎")])],-1),A={id:"fn7",class:"footnote-item"},M=(0,o._)("p",null,[(0,o._)("strong",null,"清单文件")],-1),U=(0,o._)("p",null,"清单文件使用 JSON 格式，负责声明 PWA 各项信息，如名称、描述、图标、快捷动作等。",-1),x=(0,o._)("p",null,"为了使你的站点能够被注册为 PWA，你需要满足 manifest 基本的规范，才能使浏览器认为该网站为一个可安装的 PWA 并允许用户安装它。",-1),z={class:"custom-container info"},B=(0,o._)("p",{class:"custom-container-title"},"INFO",-1),L={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},E=(0,o._)("a",{href:"#fnref7",class:"footnote-backref"},"↩︎",-1),T={},q=(0,t(94598).Z)(T,[["render",function(e,n){const t=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("p",null,[(0,o.Uk)("默认情况下，该主题将通过内置 "),(0,o._)("a",r,[a,(0,o.Wm)(t)]),(0,o.Uk)(" 启用渐进式 Web 应用程序支持"),i,(0,o.Uk)("。")]),s,(0,o._)("p",null,[(0,o.Uk)("完整的配置项详见 "),(0,o._)("a",c,[(0,o.Uk)("Manifest 类型定义文件"),(0,o.Wm)(t)])]),l,(0,o._)("p",null,[(0,o.Uk)("你可以酌情根据需要设置它们。详细的选项请见 "),(0,o._)("a",p,[(0,o.Uk)("PWA 插件配置"),(0,o.Wm)(t)]),(0,o.Uk)("。")]),f,d,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",h,[(0,o.Uk)("PWA 插件文档"),(0,o.Wm)(t)])]),(0,o._)("li",null,[(0,o._)("a",m,[(0,o.Uk)("Google PWA"),(0,o.Wm)(t)])]),(0,o._)("li",null,[(0,o._)("a",u,[(0,o.Uk)("MDN PWA"),(0,o.Wm)(t)])]),(0,o._)("li",null,[(0,o._)("a",g,[(0,o.Uk)("W3C Manifest 规范"),(0,o.Wm)(t)])])]),k,(0,o._)("section",b,[(0,o._)("ol",v,[W,(0,o._)("li",S,[_,(0,o._)("p",null,[(0,o.Uk)("详见 "),(0,o._)("a",w,[(0,o.Uk)("SEO 介绍"),(0,o.Wm)(t)]),(0,o.Uk)(),P])]),C,(0,o._)("li",A,[M,U,x,(0,o._)("div",z,[B,(0,o._)("p",null,[(0,o.Uk)("Manifest 的标准与规范，请详见 "),(0,o._)("a",L,[(0,o.Uk)("W3C Manifest"),(0,o.Wm)(t)])])]),E])])])])}]])}}]);