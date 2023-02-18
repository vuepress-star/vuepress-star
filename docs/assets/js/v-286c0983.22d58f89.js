"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1090],{58575:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-286c0983","path":"/zh/vuepress-next/reference/plugin/pwa.html","title":"pwa","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"Web App Manifests","slug":"web-app-manifests","link":"#web-app-manifests","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"serviceWorkerFilename","slug":"serviceworkerfilename","link":"#serviceworkerfilename","children":[]}]},{"level":2,"title":"Composition API","slug":"composition-api","link":"#composition-api","children":[{"level":3,"title":"usePwaEvent","slug":"usepwaevent","link":"#usepwaevent","children":[]},{"level":3,"title":"useSkipWaiting","slug":"useskipwaiting","link":"#useskipwaiting","children":[]}]}],"git":{"createdTime":1635758933000,"updatedTime":1635758933000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"zh/vuepress-next/reference/plugin/pwa.md","content":"# pwa\\n\\n<NpmBadge package=\\"@vuepress/plugin-pwa\\" />\\n\\n使你的 VuePress 站点成为一个 [渐进式 Web 应用 (PWA)](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps).\\n\\n该插件使用 [workbox-build](https://developers.google.com/web/tools/workbox/modules/workbox-build) 来生成 Service Worker 文件，并通过 [register-service-worker](https://github.com/yyx990803/register-service-worker) 来注册 Service Worker 。\\n\\n## 安装\\n\\n```bash\\nnpm i -D @vuepress/plugin-pwa@next\\n```\\n\\n## Web App Manifests\\n\\n为了使你的网站符合 PWA 的要求，你需要创建一个 [Web app manifests](https://developer.mozilla.org/zh-CN/docs/Web/Manifest) 文件，并且为你的 PWA 设置图标、颜色等信息。\\n\\n你需要将你的 Manifest 文件和图标放置在 [Public 目录](../../guide/assets.md#public-文件) 下。在下述的示例中，我们假设你正在使用默认的 Public 目录 `.vuepress/public` 。\\n\\n1. 创建 Manifest 文件\\n\\n通常是 `.vuepress/public/manifest.webmanifest` ：\\n\\n```json\\n{\\n  \\"name\\": \\"VuePress\\",\\n  \\"short_name\\": \\"VuePress\\",\\n  \\"description\\": \\"Vue-powered Static Site Generator\\",\\n  \\"start_url\\": \\"/index.html\\",\\n  \\"display\\": \\"standalone\\",\\n  \\"background_color\\": \\"#fff\\",\\n  \\"theme_color\\": \\"#3eaf7c\\",\\n  \\"icons\\": [\\n    {\\n      \\"src\\": \\"/images/icons/android-chrome-192x192.png\\",\\n      \\"sizes\\": \\"192x192\\",\\n      \\"type\\": \\"image/png\\"\\n    },\\n    {\\n      \\"src\\": \\"/images/icons/android-chrome-384x384.png\\",\\n      \\"sizes\\": \\"384x384\\",\\n      \\"type\\": \\"image/png\\"\\n    }\\n  ]\\n}\\n```\\n\\n2. 生成 PWA 图标\\n\\n为了提高你的 PWA 的可用性，你需要生成一些图标，并将它们放置在 Public 目录下。\\n\\n确保图标的路径匹配 Manifest 文件中的 `icons` 字段：\\n\\n- `.vuepress/public/images/icons/android-chrome-192x192.png`\\n- `.vuepress/public/images/icons/android-chrome-384x384.png`\\n\\n::: tip\\n一些工具可以帮助你做这些事。比如 [Favicon Generator](https://realfavicongenerator.net/) 可以帮助你生成图片以及一个 Manifest 文件样例。\\n:::\\n\\n3. 设置 Head 中的标签\\n\\n你还需要通过 [head](../config.md#head) 配置项来设置一些标签，用来 [部署你的 Manifest 文件](https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag) 。\\n\\n```js\\nmodule.exports = {\\n  head: [\\n    [\'link\', { rel: \'manifest\', href: \'/manifest.webmanifest\' }],\\n    [\'meta\', { name: \'theme-color\', content: \'#3eaf7c\' }],\\n    // ...其他标签\\n  ]\\n}\\n```\\n\\n## 配置项\\n\\n该插件的配置项可以接收 workbox-build 中 [generateSW 方法](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW) 除了 `globDirectory` 和 `swDest` 以外的所有参数。\\n\\n比如，你可以设置 `skipWaiting: true` ，这将在新的 Service Worker 就绪之后立即激活它：\\n\\n```js\\nmodule.exports = {\\n  plugins: [\\n    [\\n      \'@vuepress/pwa\',\\n      {\\n        skipWaiting: true,\\n      },\\n    ],\\n  ],\\n}\\n```\\n\\n但是如果你不设置 `skipWaiting` 或设置为 `false` ，你就需要手动激活新的 Service Worker 。\\n\\n- 对于用户，你可以配合我们提供的 [pwa-popup](./pwa-popup.md) 插件一起使用。\\n- 对于开发者，你可以使用该插件提供的 [Composition API](#composition-api) 来控制 Service Worker 的行为。\\n\\n### serviceWorkerFilename\\n\\n- 类型： `string`\\n\\n- 默认值： `\'service-worker.js\'`\\n\\n- 详情：\\n\\n  生成的 Service Worker 文件路径，该路径是 [dest](../config.md#dest) 目录的相对路径。\\n\\n  Service Worker 文件只会在 `build` 模式下生成。\\n\\n## Composition API\\n\\n### usePwaEvent\\n\\n- 详情：\\n\\n  返回该插件的 Event Emitter 。\\n\\n  你可以为 [register-service-worker](https://github.com/yyx990803/register-service-worker) 提供的事件添加事件监听器。\\n\\n- 示例：\\n\\n```ts\\nimport { usePwaEvent } from \'@vuepress/plugin-pwa/lib/client\'\\n\\nexport default {\\n  setup() {\\n    const event = usePwaEvent()\\n    event.on(\'ready\', (registration) => {\\n      console.log(\'Service worker 已经生效。\')\\n    })\\n  },\\n}\\n```\\n\\n### useSkipWaiting\\n\\n- 参数：\\n\\n|  参数         | 类型                        | 描述                                       |\\n| ------------ | --------------------------- | ----------------------------------------- |\\n| registration | `ServiceWorkerRegistration` | 你想要激活的 Service Worker 的 Registration  |\\n\\n- 详情：\\n\\n  调用 [skipWaiting()](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) 来激活处于 Waiting 状态的 Service Worker 。\\n\\n- 示例：\\n\\n```ts\\nimport {\\n  usePwaEvent,\\n  useSkipWaiting,\\n} from \'@vuepress/plugin-pwa/lib/client\'\\n\\nexport default {\\n  setup() {\\n    const event = usePwaEvent()\\n    event.on(\'updated\', (registration) => {\\n      console.log(\'在 Waiting 状态的 Service Worker 已经就绪。\')\\n      // 激活 Waiting 状态的 Service Worker\\n      useSkipWaiting(registration)\\n    })\\n  },\\n}\\n```\\n","author":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":787,"words":787,"readingTime":2.62}')},63075:(s,n,e)=>{e.r(n),e.d(n,{default:()=>ls});var a=e(1863);const l=(0,a._)("h1",{id:"pwa",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pwa","aria-hidden":"true"},"#"),(0,a.Uk)(" pwa")],-1),o={href:"https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},p={href:"https://developers.google.com/web/tools/workbox/modules/workbox-build",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},i=(0,a._)("h2",{id:"安装",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),(0,a.Uk)(" 安装")],-1),t={class:"code-enhance"},c=(0,a.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-pwa@next</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),D=(0,a._)("h2",{id:"web-app-manifests",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#web-app-manifests","aria-hidden":"true"},"#"),(0,a.Uk)(" Web App Manifests")],-1),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"},u=(0,a._)("code",null,".vuepress/public",-1),v=(0,a._)("ol",null,[(0,a._)("li",null,"创建 Manifest 文件")],-1),y=(0,a._)("p",null,[(0,a.Uk)("通常是 "),(0,a._)("code",null,".vuepress/public/manifest.webmanifest"),(0,a.Uk)(" ：")],-1),m={class:"code-enhance"},b=(0,a.uE)('<div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;VuePress&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;short_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;VuePress&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;description&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Vue-powered Static Site Generator&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/index.html&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;display&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;standalone&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;background_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#fff&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;theme_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#3eaf7c&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;icons&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;src&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/images/icons/android-chrome-192x192.png&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;sizes&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;192x192&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;image/png&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;src&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/images/icons/android-chrome-384x384.png&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;sizes&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;384x384&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;image/png&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),g=(0,a._)("ol",{start:"2"},[(0,a._)("li",null,"生成 PWA 图标")],-1),k=(0,a._)("p",null,"为了提高你的 PWA 的可用性，你需要生成一些图标，并将它们放置在 Public 目录下。",-1),h=(0,a._)("p",null,[(0,a.Uk)("确保图标的路径匹配 Manifest 文件中的 "),(0,a._)("code",null,"icons"),(0,a.Uk)(" 字段：")],-1),C=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("code",null,".vuepress/public/images/icons/android-chrome-192x192.png")]),(0,a._)("li",null,[(0,a._)("code",null,".vuepress/public/images/icons/android-chrome-384x384.png")])],-1),_={class:"custom-container tip"},f=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),E={href:"https://realfavicongenerator.net/",target:"_blank",rel:"noopener noreferrer"},W=(0,a._)("ol",{start:"3"},[(0,a._)("li",null,"设置 Head 中的标签")],-1),w={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag",target:"_blank",rel:"noopener noreferrer"},U={class:"code-enhance"},x=(0,a.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">head:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;link&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">rel:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;manifest&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">href:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;/manifest.webmanifest&#39;</span><span style="color:#D4D4D4;"> }],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;meta&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;theme-color&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">content:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#3eaf7c&#39;</span><span style="color:#D4D4D4;"> }],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ...其他标签</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),q=(0,a._)("h2",{id:"配置项",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#配置项","aria-hidden":"true"},"#"),(0,a.Uk)(" 配置项")],-1),S={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},P=(0,a._)("code",null,"globDirectory",-1),F=(0,a._)("code",null,"swDest",-1),A=(0,a._)("p",null,[(0,a.Uk)("比如，你可以设置 "),(0,a._)("code",null,"skipWaiting: true"),(0,a.Uk)(" ，这将在新的 Service Worker 就绪之后立即激活它：")],-1),z={class:"code-enhance"},M=(0,a.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/pwa&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">skipWaiting:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),j=(0,a._)("p",null,[(0,a.Uk)("但是如果你不设置 "),(0,a._)("code",null,"skipWaiting"),(0,a.Uk)(" 或设置为 "),(0,a._)("code",null,"false"),(0,a.Uk)(" ，你就需要手动激活新的 Service Worker 。")],-1),B=(0,a._)("li",null,[(0,a.Uk)("对于开发者，你可以使用该插件提供的 "),(0,a._)("a",{href:"#composition-api"},"Composition API"),(0,a.Uk)(" 来控制 Service Worker 的行为。")],-1),I=(0,a._)("h3",{id:"serviceworkerfilename",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#serviceworkerfilename","aria-hidden":"true"},"#"),(0,a.Uk)(" serviceWorkerFilename")],-1),N=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("类型： "),(0,a._)("code",null,"string")])],-1),V=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("默认值： "),(0,a._)("code",null,"'service-worker.js'")])],-1),G=(0,a._)("p",null,"详情：",-1),R=(0,a._)("p",null,[(0,a.Uk)("Service Worker 文件只会在 "),(0,a._)("code",null,"build"),(0,a.Uk)(" 模式下生成。")],-1),T=(0,a._)("h2",{id:"composition-api",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#composition-api","aria-hidden":"true"},"#"),(0,a.Uk)(" Composition API")],-1),H=(0,a._)("h3",{id:"usepwaevent",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#usepwaevent","aria-hidden":"true"},"#"),(0,a.Uk)(" usePwaEvent")],-1),L=(0,a._)("p",null,"详情：",-1),J=(0,a._)("p",null,"返回该插件的 Event Emitter 。",-1),O={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},Z=(0,a._)("li",null,[(0,a._)("p",null,"示例：")],-1),K={class:"code-enhance"},Q=(0,a.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">usePwaEvent</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa/lib/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">event</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePwaEvent</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;ready&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Service worker 已经生效。&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    })</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),X=(0,a.uE)('<h3 id="useskipwaiting" tabindex="-1"><a class="header-anchor" href="#useskipwaiting" aria-hidden="true">#</a> useSkipWaiting</h3><ul><li>参数：</li></ul><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>registration</td><td><code>ServiceWorkerRegistration</code></td><td>你想要激活的 Service Worker 的 Registration</td></tr></tbody></table>',3),Y=(0,a._)("p",null,"详情：",-1),$={href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting",target:"_blank",rel:"noopener noreferrer"},ss=(0,a._)("li",null,[(0,a._)("p",null,"示例：")],-1),ns={class:"code-enhance"},es=(0,a.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">usePwaEvent</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">useSkipWaiting</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">} </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa/lib/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">event</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePwaEvent</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;updated&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;在 Waiting 状态的 Service Worker 已经就绪。&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 激活 Waiting 状态的 Service Worker</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">useSkipWaiting</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    })</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),as={},ls=(0,e(94598).Z)(as,[["render",function(s,n){const e=(0,a.up)("NpmBadge"),as=(0,a.up)("ExternalLinkIcon"),ls=(0,a.up)("CodeCopyButton"),os=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[l,(0,a.Wm)(e,{package:"@vuepress/plugin-pwa"}),(0,a._)("p",null,[(0,a.Uk)("使你的 VuePress 站点成为一个 "),(0,a._)("a",o,[(0,a.Uk)("渐进式 Web 应用 (PWA)"),(0,a.Wm)(as)]),(0,a.Uk)(".")]),(0,a._)("p",null,[(0,a.Uk)("该插件使用 "),(0,a._)("a",p,[(0,a.Uk)("workbox-build"),(0,a.Wm)(as)]),(0,a.Uk)(" 来生成 Service Worker 文件，并通过 "),(0,a._)("a",r,[(0,a.Uk)("register-service-worker"),(0,a.Wm)(as)]),(0,a.Uk)(" 来注册 Service Worker 。")]),i,(0,a._)("div",t,[c,(0,a.Wm)(ls)]),D,(0,a._)("p",null,[(0,a.Uk)("为了使你的网站符合 PWA 的要求，你需要创建一个 "),(0,a._)("a",d,[(0,a.Uk)("Web app manifests"),(0,a.Wm)(as)]),(0,a.Uk)(" 文件，并且为你的 PWA 设置图标、颜色等信息。")]),(0,a._)("p",null,[(0,a.Uk)("你需要将你的 Manifest 文件和图标放置在 "),(0,a.Wm)(os,{to:"/zh/vuepress-next/guide/assets.html#public-%E6%96%87%E4%BB%B6"},{default:(0,a.w5)((()=>[(0,a.Uk)("Public 目录")])),_:1}),(0,a.Uk)(" 下。在下述的示例中，我们假设你正在使用默认的 Public 目录 "),u,(0,a.Uk)(" 。")]),v,y,(0,a._)("div",m,[b,(0,a.Wm)(ls)]),g,k,h,C,(0,a._)("div",_,[f,(0,a._)("p",null,[(0,a.Uk)("一些工具可以帮助你做这些事。比如 "),(0,a._)("a",E,[(0,a.Uk)("Favicon Generator"),(0,a.Wm)(as)]),(0,a.Uk)(" 可以帮助你生成图片以及一个 Manifest 文件样例。")])]),W,(0,a._)("p",null,[(0,a.Uk)("你还需要通过 "),(0,a.Wm)(os,{to:"/zh/vuepress-next/reference/config.html#head"},{default:(0,a.w5)((()=>[(0,a.Uk)("head")])),_:1}),(0,a.Uk)(" 配置项来设置一些标签，用来 "),(0,a._)("a",w,[(0,a.Uk)("部署你的 Manifest 文件"),(0,a.Wm)(as)]),(0,a.Uk)(" 。")]),(0,a._)("div",U,[x,(0,a.Wm)(ls)]),q,(0,a._)("p",null,[(0,a.Uk)("该插件的配置项可以接收 workbox-build 中 "),(0,a._)("a",S,[(0,a.Uk)("generateSW 方法"),(0,a.Wm)(as)]),(0,a.Uk)(" 除了 "),P,(0,a.Uk)(" 和 "),F,(0,a.Uk)(" 以外的所有参数。")]),A,(0,a._)("div",z,[M,(0,a.Wm)(ls)]),j,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("对于用户，你可以配合我们提供的 "),(0,a.Wm)(os,{to:"/zh/vuepress-next/reference/plugin/pwa-popup.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("pwa-popup")])),_:1}),(0,a.Uk)(" 插件一起使用。")]),B]),I,(0,a._)("ul",null,[N,V,(0,a._)("li",null,[G,(0,a._)("p",null,[(0,a.Uk)("生成的 Service Worker 文件路径，该路径是 "),(0,a.Wm)(os,{to:"/zh/vuepress-next/reference/config.html#dest"},{default:(0,a.w5)((()=>[(0,a.Uk)("dest")])),_:1}),(0,a.Uk)(" 目录的相对路径。")]),R])]),T,H,(0,a._)("ul",null,[(0,a._)("li",null,[L,J,(0,a._)("p",null,[(0,a.Uk)("你可以为 "),(0,a._)("a",O,[(0,a.Uk)("register-service-worker"),(0,a.Wm)(as)]),(0,a.Uk)(" 提供的事件添加事件监听器。")])]),Z]),(0,a._)("div",K,[Q,(0,a.Wm)(ls)]),X,(0,a._)("ul",null,[(0,a._)("li",null,[Y,(0,a._)("p",null,[(0,a.Uk)("调用 "),(0,a._)("a",$,[(0,a.Uk)("skipWaiting()"),(0,a.Wm)(as)]),(0,a.Uk)(" 来激活处于 Waiting 状态的 Service Worker 。")])]),ss]),(0,a._)("div",ns,[es,(0,a.Wm)(ls)])])}]])}}]);