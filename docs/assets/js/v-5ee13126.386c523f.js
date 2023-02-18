"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9590],{3739:(e,n,s)=>{s.r(n),s.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-5ee13126","path":"/vuepress-next/reference/bundler/vite.html","title":"Vite","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"viteOptions","slug":"viteoptions","link":"#viteoptions","children":[]},{"level":3,"title":"vuePluginOptions","slug":"vuepluginoptions","link":"#vuepluginoptions","children":[]}]}],"git":{"createdTime":1635758933000,"updatedTime":1635758933000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"vuepress-next/reference/bundler/vite.md","content":"# Vite\\n\\n<NpmBadge package=\\"@vuepress/bundler-vite\\" />\\n\\nVite bundler is provided by [@vuepress/bundler-vite](https://www.npmjs.com/package/@vuepress/bundler-vite) package. It is a dependency of the [vuepress-vite](https://www.npmjs.com/package/vuepress-vite) package, and you can also install it separately.\\n\\n```bash\\nnpm i -D @vuepress/bundler-vite@next\\n```\\n\\n## Options\\n\\nReference of vite bundler config, which can be set via [bundlerConfig](../config.md#bundlerconfig).\\n\\n<CodeGroup>\\n  <CodeGroupItem title=\\"JS\\" active>\\n\\n```js\\nmodule.exports = {\\n  // when using vuepress-vite package, you can omit this field\\n  // because vite is the default bundler\\n  bundler: \'@vuepress/bundler-vite\',\\n  // bundler options\\n  bundlerConfig: {\\n    // see below\\n  },\\n}\\n```\\n\\n  </CodeGroupItem>\\n\\n  <CodeGroupItem title=\\"TS\\">\\n\\n```ts\\nimport type { ViteBundlerOptions } from \'@vuepress/bundler-vite\'\\nimport { defineUserConfig } from \'@vuepress/cli\'\\nimport type { DefaultThemeOptions } from \'@vuepress/theme-default\'\\n\\nexport default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({\\n  // when using vuepress-vite package, you can omit this field\\n  // because vite is the default bundler\\n  bundler: \'@vuepress/bundler-vite\',\\n  // options for vite bundler\\n  bundlerConfig: {\\n    // see below\\n  },\\n})\\n```\\n\\n  </CodeGroupItem>\\n</CodeGroup>\\n\\n### viteOptions\\n\\n- Details:\\n\\n  Accepts all options of Vite.\\n\\n- Also see:\\n  - [Vite > Config](https://vitejs.dev/config/)\\n\\n### vuePluginOptions\\n\\n- Details:\\n\\n  Accepts all options of [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue).\\n\\n- Also see:\\n  - [Vite > Plugins > Official Plugins](https://vitejs.dev/plugins/#vitejs-plugin-vue)\\n","author":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":202,"words":202,"readingTime":0.67}')},34562:(e,n,s)=>{s.r(n),s.d(n,{default:()=>U});var l=s(1863);const t=(0,l._)("h1",{id:"vite",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#vite","aria-hidden":"true"},"#"),(0,l.Uk)(" Vite")],-1),i={href:"https://www.npmjs.com/package/@vuepress/bundler-vite",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.npmjs.com/package/vuepress-vite",target:"_blank",rel:"noopener noreferrer"},a={class:"code-enhance"},r=(0,l.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/bundler-vite@next</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),p=(0,l._)("h2",{id:"options",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,l.Uk)(" Options")],-1),c={class:"code-enhance"},u=(0,l._)("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[(0,l._)("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[(0,l._)("code",null,[(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#4EC9B0"}},"module"),(0,l._)("span",{style:{color:"#D4D4D4"}},"."),(0,l._)("span",{style:{color:"#4EC9B0"}},"exports"),(0,l._)("span",{style:{color:"#D4D4D4"}}," = {")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#6A9955"}},"// when using vuepress-vite package, you can omit this field")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#6A9955"}},"// because vite is the default bundler")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#9CDCFE"}},"bundler:"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#CE9178"}},"'@vuepress/bundler-vite'"),(0,l._)("span",{style:{color:"#D4D4D4"}},",")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#6A9955"}},"// bundler options")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#9CDCFE"}},"bundlerConfig:"),(0,l._)("span",{style:{color:"#D4D4D4"}}," {")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"    "),(0,l._)("span",{style:{color:"#6A9955"}},"// see below")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  },")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"}")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"})])]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),d={class:"code-enhance"},_=(0,l._)("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[(0,l._)("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[(0,l._)("code",null,[(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#C586C0"}},"import"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#C586C0"}},"type"),(0,l._)("span",{style:{color:"#D4D4D4"}}," { "),(0,l._)("span",{style:{color:"#9CDCFE"}},"ViteBundlerOptions"),(0,l._)("span",{style:{color:"#D4D4D4"}}," } "),(0,l._)("span",{style:{color:"#C586C0"}},"from"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#CE9178"}},"'@vuepress/bundler-vite'")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#C586C0"}},"import"),(0,l._)("span",{style:{color:"#D4D4D4"}}," { "),(0,l._)("span",{style:{color:"#9CDCFE"}},"defineUserConfig"),(0,l._)("span",{style:{color:"#D4D4D4"}}," } "),(0,l._)("span",{style:{color:"#C586C0"}},"from"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#CE9178"}},"'@vuepress/cli'")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#C586C0"}},"import"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#C586C0"}},"type"),(0,l._)("span",{style:{color:"#D4D4D4"}}," { "),(0,l._)("span",{style:{color:"#9CDCFE"}},"DefaultThemeOptions"),(0,l._)("span",{style:{color:"#D4D4D4"}}," } "),(0,l._)("span",{style:{color:"#C586C0"}},"from"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#CE9178"}},"'@vuepress/theme-default'")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"}),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#C586C0"}},"export"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#C586C0"}},"default"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#DCDCAA"}},"defineUserConfig"),(0,l._)("span",{style:{color:"#D4D4D4"}},"<"),(0,l._)("span",{style:{color:"#4EC9B0"}},"DefaultThemeOptions"),(0,l._)("span",{style:{color:"#D4D4D4"}},", "),(0,l._)("span",{style:{color:"#4EC9B0"}},"ViteBundlerOptions"),(0,l._)("span",{style:{color:"#D4D4D4"}},">({")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#6A9955"}},"// when using vuepress-vite package, you can omit this field")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#6A9955"}},"// because vite is the default bundler")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#9CDCFE"}},"bundler:"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#CE9178"}},"'@vuepress/bundler-vite'"),(0,l._)("span",{style:{color:"#D4D4D4"}},",")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#6A9955"}},"// options for vite bundler")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#9CDCFE"}},"bundlerConfig:"),(0,l._)("span",{style:{color:"#D4D4D4"}}," {")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"    "),(0,l._)("span",{style:{color:"#6A9955"}},"// see below")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  },")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"})")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"})])]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),v=(0,l._)("h3",{id:"viteoptions",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#viteoptions","aria-hidden":"true"},"#"),(0,l.Uk)(" viteOptions")],-1),D=(0,l._)("li",null,[(0,l._)("p",null,"Details:"),(0,l._)("p",null,"Accepts all options of Vite.")],-1),m=(0,l._)("p",null,"Also see:",-1),y={href:"https://vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer"},b=(0,l._)("h3",{id:"vuepluginoptions",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#vuepluginoptions","aria-hidden":"true"},"#"),(0,l.Uk)(" vuePluginOptions")],-1),h=(0,l._)("p",null,"Details:",-1),g={href:"https://www.npmjs.com/package/@vitejs/plugin-vue",target:"_blank",rel:"noopener noreferrer"},f=(0,l._)("p",null,"Also see:",-1),k={href:"https://vitejs.dev/plugins/#vitejs-plugin-vue",target:"_blank",rel:"noopener noreferrer"},C={},U=(0,s(94598).Z)(C,[["render",function(e,n){const s=(0,l.up)("NpmBadge"),C=(0,l.up)("ExternalLinkIcon"),U=(0,l.up)("CodeCopyButton"),w=(0,l.up)("RouterLink"),E=(0,l.up)("CodeGroupItem"),O=(0,l.up)("CodeGroup");return(0,l.wg)(),(0,l.iD)("div",null,[t,(0,l.Wm)(s,{package:"@vuepress/bundler-vite"}),(0,l._)("p",null,[(0,l.Uk)("Vite bundler is provided by "),(0,l._)("a",i,[(0,l.Uk)("@vuepress/bundler-vite"),(0,l.Wm)(C)]),(0,l.Uk)(" package. It is a dependency of the "),(0,l._)("a",o,[(0,l.Uk)("vuepress-vite"),(0,l.Wm)(C)]),(0,l.Uk)(" package, and you can also install it separately.")]),(0,l._)("div",a,[r,(0,l.Wm)(U)]),p,(0,l._)("p",null,[(0,l.Uk)("Reference of vite bundler config, which can be set via "),(0,l.Wm)(w,{to:"/vuepress-next/reference/config.html#bundlerconfig"},{default:(0,l.w5)((()=>[(0,l.Uk)("bundlerConfig")])),_:1}),(0,l.Uk)(".")]),(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[(0,l.Wm)(E,{title:"JS",active:""},{default:(0,l.w5)((()=>[(0,l._)("div",c,[u,(0,l.Wm)(U)])])),_:1}),(0,l.Wm)(E,{title:"TS"},{default:(0,l.w5)((()=>[(0,l._)("div",d,[_,(0,l.Wm)(U)])])),_:1})])),_:1}),v,(0,l._)("ul",null,[D,(0,l._)("li",null,[m,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",y,[(0,l.Uk)("Vite > Config"),(0,l.Wm)(C)])])])])]),b,(0,l._)("ul",null,[(0,l._)("li",null,[h,(0,l._)("p",null,[(0,l.Uk)("Accepts all options of "),(0,l._)("a",g,[(0,l.Uk)("@vitejs/plugin-vue"),(0,l.Wm)(C)]),(0,l.Uk)(".")])]),(0,l._)("li",null,[f,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",k,[(0,l.Uk)("Vite > Plugins > Official Plugins"),(0,l.Wm)(C)])])])])])])}]])}}]);