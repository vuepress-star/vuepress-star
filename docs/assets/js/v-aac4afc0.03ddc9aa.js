"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7892],{38442:(e,s,n)=>{n.r(s),n.d(s,{data:()=>p});const p=JSON.parse('{"key":"v-aac4afc0","path":"/zh/guide/feature/typescript.html","title":"TS 支持","lang":"zh-CN","frontmatter":{"title":"TS 支持","icon":"typescript","category":"feature","tags":["feature","typescript"]},"excerpt":"<p><code v-pre>vuepress-theme-star</code> 的大部分文件都是使用 TypeScript 编写，所以 vuepress-theme-star 也可以为你的 VuePress 项目带来了原生的 TypeScript\\n支持，你只需设置 <code v-pre>themeConfig.typescript</code> 为 <code v-pre>true</code> 即可开启 <code v-pre>typescript</code> 支持。</p>\\n<p>开启 TypeScript 支持意味着你可以使用 <code v-pre>enhanceAppFiles.ts</code>，同时在你的 vue 组件 和 Markdown 文件中使用 TypeScript。</p>\\n<p>如果你需要向 ts-loader 传递一些自定义选项，你也可以将 <code v-pre>themeConfig.typescript</code> 设置为一个 Object 来传递给 ts-loader。</p>\\n","headers":[{"level":2,"title":"开启准备","slug":"开启准备","link":"#开启准备","children":[]}],"git":{"createdTime":1638099974000,"updatedTime":1639901643000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":2}]},"copyright":"","filePathRelative":"zh/guide/feature/typescript.md","content":"---\\ntitle: TS 支持\\nicon: typescript\\ncategory: feature\\ntags:\\n  - feature\\n  - typescript\\n---\\n\\n`vuepress-theme-star` 的大部分文件都是使用 TypeScript 编写，所以 vuepress-theme-star 也可以为你的 VuePress 项目带来了原生的 TypeScript\\n支持，你只需设置 `themeConfig.typescript` 为 `true` 即可开启 `typescript` 支持。\\n\\n开启 TypeScript 支持意味着你可以使用 `enhanceAppFiles.ts`，同时在你的 vue 组件 和 Markdown 文件中使用 TypeScript。\\n\\n如果你需要向 ts-loader 传递一些自定义选项，你也可以将 `themeConfig.typescript` 设置为一个 Object 来传递给 ts-loader。\\n\\n\x3c!-- more --\x3e\\n\\n::: tip\\n\\n启用本主题后，你无需再依赖并启用 `@vuepress/plugin-typescript`。\\n\\n:::\\n\\n## 开启准备\\n\\n如果你的项目没有依赖 typescript，你需要额外安装它:\\n\\n<CodeGroup>\\n<CodeGroupItem title=\\"yarn\\">\\n```bash\\nyarn add -D typescript\\n```\\n</CodeGroupItem>\\n\\n<CodeGroupItem title=\\"npm\\">\\n```bash\\nnpm i -D typescript\\n```\\n</CodeGroupItem>\\n</CodeGroup>\\n\\n同时，你需要保证你的工作区包含有效的 `tsconfig.json`。 一个最简单的 `tsconfig.json` 如下:\\n\\n```json\\n{\\n  \\"compilerOptions\\": {\\n    \\"target\\": \\"ES6\\", // 任何不小于 es6 的 target 均可\\n    \\"allowSyntheticDefaultImports\\": true, // 规避 vuepress-types 的类型定义问题\\n    \\"experimentalDecorators\\": true, // Vue 的 TypeScript 写法需要开启此选项\\n    \\"module\\": \\"commonjs\\", // 为了避免 vuepress-types 解析失败\\n    \\"types\\": [\\"@mr-hope/vuepress-theme-types\\"]\\n  },\\n  \\"include\\": [\\n    // 项目中需要至少包含一个 ts 文件 (空的文件也可)，并正确配置在 include 中\\n    \\"src/.vuepress/enhanceApp.ts\\" // 请将 src 替换成你的文档目录\\n  ]\\n}\\n```\\n\\n如果你已经有了 `tsconfig.json`, 那么只需要在 `compilerOptions.types` 中添加 vuepress-theme-star\\n的类型定义文件包 `\\"@mr-hope/vuepress-theme-types\\"` 即可。\\n\\n你还应该在你的项目中创建一个 ts 文件并添加至 `tsconfig.json` 的 `include` 中，你可以直接创建一个空的 enhanceApp.ts 并将其引入。\\n\\n::: warning\\n\\n`ts-loader` 要求 `tsconfig.json` 至少命中一个有效的 ts 文件，所以最简单的办法就是创建或者转换 (如果你已经有了 `enhanceAppFiles.js`) 一个 `enhanceAppFiles.ts` 并将它添加至 `include` 选项中\\n\\n:::\\n","icon":"typescript","author":[{"name":"Starzkg","email":"1600337300@qq.com"}],"top":false,"length":460,"words":460,"readingTime":1.53}')},5861:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});var p=n(1863);const t=(0,p.uE)('<p><code>vuepress-theme-star</code> 的大部分文件都是使用 TypeScript 编写，所以 vuepress-theme-star 也可以为你的 VuePress 项目带来了原生的 TypeScript 支持，你只需设置 <code>themeConfig.typescript</code> 为 <code>true</code> 即可开启 <code>typescript</code> 支持。</p><p>开启 TypeScript 支持意味着你可以使用 <code>enhanceAppFiles.ts</code>，同时在你的 vue 组件 和 Markdown 文件中使用 TypeScript。</p><p>如果你需要向 ts-loader 传递一些自定义选项，你也可以将 <code>themeConfig.typescript</code> 设置为一个 Object 来传递给 ts-loader。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>启用本主题后，你无需再依赖并启用 <code>@vuepress/plugin-typescript</code>。</p></div><h2 id="开启准备" tabindex="-1"><a class="header-anchor" href="#开启准备" aria-hidden="true">#</a> 开启准备</h2><p>如果你的项目没有依赖 typescript，你需要额外安装它:</p>',6),o=(0,p._)("p",null,[(0,p.Uk)("同时，你需要保证你的工作区包含有效的 "),(0,p._)("code",null,"tsconfig.json"),(0,p.Uk)("。 一个最简单的 "),(0,p._)("code",null,"tsconfig.json"),(0,p.Uk)(" 如下:")],-1),a={class:"code-enhance"},c=(0,p.uE)('<div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;compilerOptions&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;target&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;ES6&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// 任何不小于 es6 的 target 均可</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;allowSyntheticDefaultImports&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// 规避 vuepress-types 的类型定义问题</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;experimentalDecorators&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// Vue 的 TypeScript 写法需要开启此选项</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;module&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;commonjs&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// 为了避免 vuepress-types 解析失败</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;types&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;@mr-hope/vuepress-theme-types&quot;</span><span style="color:#D4D4D4;">]</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;include&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 项目中需要至少包含一个 ts 文件 (空的文件也可)，并正确配置在 include 中</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;src/.vuepress/enhanceApp.ts&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// 请将 src 替换成你的文档目录</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),r=(0,p.uE)('<p>如果你已经有了 <code>tsconfig.json</code>, 那么只需要在 <code>compilerOptions.types</code> 中添加 vuepress-theme-star 的类型定义文件包 <code>&quot;@mr-hope/vuepress-theme-types&quot;</code> 即可。</p><p>你还应该在你的项目中创建一个 ts 文件并添加至 <code>tsconfig.json</code> 的 <code>include</code> 中，你可以直接创建一个空的 enhanceApp.ts 并将其引入。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><code>ts-loader</code> 要求 <code>tsconfig.json</code> 至少命中一个有效的 ts 文件，所以最简单的办法就是创建或者转换 (如果你已经有了 <code>enhanceAppFiles.js</code>) 一个 <code>enhanceAppFiles.ts</code> 并将它添加至 <code>include</code> 选项中</p></div>',3),l={},i=(0,n(94598).Z)(l,[["render",function(e,s){const n=(0,p.up)("CodeGroupItem"),l=(0,p.up)("CodeGroup"),i=(0,p.up)("CodeCopyButton");return(0,p.wg)(),(0,p.iD)("div",null,[t,(0,p.Wm)(l,null,{default:(0,p.w5)((()=>[(0,p.Wm)(n,{title:"yarn"},{default:(0,p.w5)((()=>[(0,p.Uk)(" ```bash yarn add -D typescript ``` ")])),_:1}),(0,p.Wm)(n,{title:"npm"},{default:(0,p.w5)((()=>[(0,p.Uk)(" ```bash npm i -D typescript ``` ")])),_:1})])),_:1}),o,(0,p._)("div",a,[c,(0,p.Wm)(i)]),r])}]])}}]);