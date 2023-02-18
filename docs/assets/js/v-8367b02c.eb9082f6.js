"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1462],{44747:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a=JSON.parse('{"key":"v-8367b02c","path":"/zh/guide/markdown/feature/code-demo/","title":"代码演示","lang":"zh-CN","frontmatter":{"title":"代码演示","icon":"discover"},"excerpt":"<p>Let you insert code demos in your Markdown file.</p>\\n","headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Available languages","slug":"available-languages","link":"#available-languages","children":[{"level":3,"title":"Not supported language demo","slug":"not-supported-language-demo","link":"#not-supported-language-demo","children":[]}]}],"git":{"createdTime":1636181996000,"updatedTime":1636181996000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":1}]},"copyright":"","filePathRelative":"zh/guide/markdown/feature/code-demo/README.md","content":"---\\ntitle: 代码演示\\nicon: discover\\n---\\n\\nLet you insert code demos in your Markdown file.\\n\\n\x3c!-- more --\x3e\\n\\n## Configuration\\n\\n```js {7}\\nmodule.exports = {\\n  plugins: [\\n    [\\n      \\"markdown-enhance\\",\\n      {\\n        // Enable Code Demo\\n        demo: true,\\n      },\\n    ],\\n  ],\\n};\\n```\\n\\n## Syntax\\n\\nYou should use the following syntax:\\n\\n````md\\n::: demo [type] Optional title text\\n\\n```html\\n\x3c!-- ↑ use available ones --\x3e\\n\x3c!-- your code here --\x3e\\n\x3c!-- you can have mutiple code block, but each language must appear only once. --\x3e\\n```\\n\\n```json\\n// json block is for config\\n{\\n  // your config here (optional)\\n}\\n```\\n\\n:::\\n````\\n\\n::: tip\\n\\nThe json block is optional, for config please see [config](../../config.md#demo).\\n\\n:::\\n\\nThe plugin support three types:\\n\\n- normal (default)\\n- vue\\n- react\\n\\n## Available languages\\n\\nYou can use different language in your demo block.\\n\\nWhen you set language which can not run on browers, since the plugin is not able to resolve them, so demo display will be disabled. The plugin will only show the code and provide you a button to open it in CodePen.\\n\\nAvailable HTML languages:\\n\\n- `\\"html\\"` (default)\\n- `\\"slim\\"`\\n- `\\"haml\\"`\\n- `\\"markdown\\"`\\n\\n> You can also use `md` in code block.\\n\\nAvailable JS languages:\\n\\n- `\\"javascript\\"` (default)\\n- `\\"coffeescript\\"`\\n- `\\"babel\\"`\\n- `\\"livescript\\"`\\n- `\\"typescript\\"`\\n\\n> You can also use `js`, `ts`, `coffee` and `ls` in code block.\\n\\nAvailable CSS languages:\\n\\n- `\\"css\\"` (default)\\n- `\\"less\\"`\\n- `\\"scss\\"`\\n- `\\"sass\\"`\\n- `\\"stylus\\"`\\n\\n> You can also use `styl` in code block.\\n\\n### Not supported language demo\\n\\n::: demo A demo using language not supoprted by browsers\\n\\n```md\\n# Title\\n\\nis very handsome.\\n```\\n\\n```ts\\nconst message: string = \\"Mr.Hope\\";\\n\\ndocument.querySelector(\\"h1\\").innerHTML = message;\\n```\\n\\n```scss\\nh1 {\\n  font-style: italic;\\n\\n  + p {\\n    color: red;\\n  }\\n}\\n```\\n\\n:::\\n\\n:::: details Code\\n\\n````md\\n::: demo A normal demo\\n\\n```md\\n# Title\\n\\nis very handsome.\\n```\\n\\n```ts\\nconst message: string = \\"Mr.Hope\\";\\n\\ndocument.querySelector(\\"h1\\").innerHTML = message;\\n```\\n\\n```scss\\nh1 {\\n  font-style: italic;\\n\\n  + p {\\n    color: red;\\n  }\\n}\\n```\\n\\n:::\\n````\\n\\n::::\\n","icon":"discover","author":[{"name":"Starzkg","email":"1600337300@qq.com"}],"top":false,"length":274,"words":274,"readingTime":0.91}')},82611:(n,s,e)=>{e.r(s),e.d(s,{default:()=>A});var a=e(1863);const l=(0,a._)("p",null,"Let you insert code demos in your Markdown file.",-1),o=(0,a._)("h2",{id:"configuration",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),(0,a.Uk)(" Configuration")],-1),i={class:"code-enhance"},c=(0,a.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;markdown-enhance&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// Enable Code Demo</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">demo:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">};</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),p=(0,a._)("h2",{id:"syntax",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#"),(0,a.Uk)(" Syntax")],-1),t=(0,a._)("p",null,"You should use the following syntax:",-1),d={class:"code-enhance"},r=(0,a.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: demo [</span><span style="color:#CE9178;">type</span><span style="color:#D4D4D4;">] Optional title text</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```html</span></span>\n<span class="line"><span style="color:#6A9955;">&lt;!-- ↑ use available ones --&gt;</span></span>\n<span class="line"><span style="color:#6A9955;">&lt;!-- your code here --&gt;</span></span>\n<span class="line"><span style="color:#6A9955;">&lt;!-- you can have mutiple code block, but each language must appear only once. --&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```json</span></span>\n<span class="line"><span style="color:#6A9955;">// json block is for config</span></span>\n<span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// your config here (optional)</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">:::</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),u={class:"custom-container tip"},D=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),v=(0,a.uE)('<p>The plugin support three types:</p><ul><li>normal (default)</li><li>vue</li><li>react</li></ul><h2 id="available-languages" tabindex="-1"><a class="header-anchor" href="#available-languages" aria-hidden="true">#</a> Available languages</h2><p>You can use different language in your demo block.</p><p>When you set language which can not run on browers, since the plugin is not able to resolve them, so demo display will be disabled. The plugin will only show the code and provide you a button to open it in CodePen.</p><p>Available HTML languages:</p><ul><li><code>&quot;html&quot;</code> (default)</li><li><code>&quot;slim&quot;</code></li><li><code>&quot;haml&quot;</code></li><li><code>&quot;markdown&quot;</code></li></ul><blockquote><p>You can also use <code>md</code> in code block.</p></blockquote><p>Available JS languages:</p><ul><li><code>&quot;javascript&quot;</code> (default)</li><li><code>&quot;coffeescript&quot;</code></li><li><code>&quot;babel&quot;</code></li><li><code>&quot;livescript&quot;</code></li><li><code>&quot;typescript&quot;</code></li></ul><blockquote><p>You can also use <code>js</code>, <code>ts</code>, <code>coffee</code> and <code>ls</code> in code block.</p></blockquote><p>Available CSS languages:</p><ul><li><code>&quot;css&quot;</code> (default)</li><li><code>&quot;less&quot;</code></li><li><code>&quot;scss&quot;</code></li><li><code>&quot;sass&quot;</code></li><li><code>&quot;stylus&quot;</code></li></ul><blockquote><p>You can also use <code>styl</code> in code block.</p></blockquote><h3 id="not-supported-language-demo" tabindex="-1"><a class="header-anchor" href="#not-supported-language-demo" aria-hidden="true">#</a> Not supported language demo</h3><p>::: demo A demo using language not supoprted by browsers</p>',16),m={class:"code-enhance"},y=(0,a.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;font-style:italic;"># Title</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">is very handsome.</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),b={class:"code-enhance"},g=(0,a.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">message</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;Mr.Hope&quot;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">querySelector</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;h1&quot;</span><span style="color:#D4D4D4;">).</span><span style="color:#9CDCFE;">innerHTML</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),h={class:"code-enhance"},f=(0,a.uE)('<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">h1</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">font-style</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">italic</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  + </span><span style="color:#D7BA7D;">p</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),C=(0,a._)("p",null,":::",-1),k={class:"custom-container details"},E=(0,a._)("summary",null,"Code",-1),q={class:"code-enhance"},w=(0,a.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: demo A normal demo</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```md</span></span>\n<span class="line"><span style="color:#569CD6;font-style:italic;"># Title</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">is very handsome.</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```ts</span></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">message</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;Mr.Hope&quot;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">querySelector</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;h1&quot;</span><span style="color:#D4D4D4;">).</span><span style="color:#9CDCFE;">innerHTML</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```scss</span></span>\n<span class="line"><span style="color:#D7BA7D;">h1</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">font-style</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">italic</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  + </span><span style="color:#D7BA7D;">p</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">:::</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),x={},A=(0,e(94598).Z)(x,[["render",function(n,s){const e=(0,a.up)("CodeCopyButton"),x=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[l,o,(0,a._)("div",i,[c,(0,a.Wm)(e)]),p,t,(0,a._)("div",d,[r,(0,a.Wm)(e)]),(0,a._)("div",u,[D,(0,a._)("p",null,[(0,a.Uk)("The json block is optional, for config please see "),(0,a.Wm)(x,{to:"/zh/guide/markdown/config.html#demo"},{default:(0,a.w5)((()=>[(0,a.Uk)("config")])),_:1}),(0,a.Uk)(".")])]),v,(0,a._)("div",m,[y,(0,a.Wm)(e)]),(0,a._)("div",b,[g,(0,a.Wm)(e)]),(0,a._)("div",h,[f,(0,a.Wm)(e)]),C,(0,a._)("details",k,[E,(0,a._)("div",q,[w,(0,a.Wm)(e)])])])}]])}}]);