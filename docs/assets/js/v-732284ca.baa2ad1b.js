"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[300],{21560:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-732284ca","path":"/zh/guide/markdown/feature/footnote.html","title":"脚注","lang":"zh-CN","frontmatter":{"title":"脚注","icon":"footnote","category":"markdown","tags":["feature","markdown"]},"excerpt":"<h1 id=\\"脚注\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#脚注\\" aria-hidden=\\"true\\">#</a> 脚注</h1>\\n<p>Let the Markdown file in your VuePress site support footnotes.</p>\\n","headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Case","slug":"case","link":"#case","children":[]}],"git":{"createdTime":1636106368000,"updatedTime":1636181996000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":1},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"zh/guide/markdown/feature/footnote.md","content":"---\\ntitle: 脚注\\nicon: footnote\\ncategory: markdown\\ntags:\\n  - feature\\n  - markdown\\n---\\n\\n# 脚注\\n\\nLet the Markdown file in your VuePress site support footnotes.\\n\\n\x3c!-- more --\x3e\\n\\n## Configuration\\n\\n```js {7}\\nmodule.exports = {\\n  plugins: [\\n    [\\n      \\"markdown-enhance\\",\\n      {\\n        // Enable Footnote\\n        footnote: true,\\n      },\\n    ],\\n  ],\\n};\\n```\\n\\n## Syntax\\n\\n- Use `[^Anchor text]` in Markdown to define a footnote\\n\\n- Use `[^Anchor text]: ...` to describe footnote content\\n\\n- If there are muti paragraph in footnote, the paragraph show be double indented\\n\\n## Case\\n\\nFootnote 1 link[^first].\\n\\nFootnote 2 link[^second].\\n\\nInline footnote^[Text of inline footnote] definition.\\n\\nDuplicated footnote reference[^second].\\n\\n[^first]: Footnote **can have markup**\\n\\n    and multiple paragraphs.\\n\\n[^second]: Footnote text.\\n\\n```md\\nFootnote 1 link[^first].\\n\\nFootnote 2 link[^second].\\n\\nInline footnote^[Text of inline footnote] definition.\\n\\nDuplicated footnote reference[^second].\\n\\n[^first]: Footnote **can have markup**\\n\\n    and multiple paragraphs.\\n\\n[^second]: Footnote text.\\n```\\n","icon":"footnote","author":[{"name":"Starzkg","email":"1600337300@qq.com"},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":137,"words":137,"readingTime":0.46}')},2542:(n,e,s)=>{s.r(e),s.d(e,{default:()=>h});var a=s(1863);const o=(0,a._)("h1",{id:"脚注",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#脚注","aria-hidden":"true"},"#"),(0,a.Uk)(" 脚注")],-1),t=(0,a._)("p",null,"Let the Markdown file in your VuePress site support footnotes.",-1),l=(0,a._)("h2",{id:"configuration",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),(0,a.Uk)(" Configuration")],-1),i={class:"code-enhance"},r=(0,a.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;markdown-enhance&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// Enable Footnote</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">footnote:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">};</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),p=(0,a.uE)('<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li><p>Use <code>[^Anchor text]</code> in Markdown to define a footnote</p></li><li><p>Use <code>[^Anchor text]: ...</code> to describe footnote content</p></li><li><p>If there are muti paragraph in footnote, the paragraph show be double indented</p></li></ul><h2 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> Case</h2><p>Footnote 1 link<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><p>Footnote 2 link<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>.</p><p>Inline footnote<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup> definition.</p><p>Duplicated footnote reference<sup class="footnote-ref"><a href="#fn2" id="fnref2:1">[2:1]</a></sup>.</p>',7),c={class:"code-enhance"},d=(0,a.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Footnote 1 link[</span><span style="color:#CE9178;">^first</span><span style="color:#D4D4D4;">].</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Footnote 2 link[</span><span style="color:#CE9178;">^second</span><span style="color:#D4D4D4;">].</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Inline footnote^[Text of inline footnote] definition.</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Duplicated footnote reference[</span><span style="color:#CE9178;">^second</span><span style="color:#D4D4D4;">].</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">^first</span><span style="color:#D4D4D4;">]: Footnote </span><span style="color:#569CD6;font-style:italic;">**can have markup**</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">    and multiple paragraphs.</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">^second</span><span style="color:#D4D4D4;">]: Footnote text.</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),f=(0,a.uE)('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Footnote <strong>can have markup</strong></p><p>and multiple paragraphs. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li><li id="fn2" class="footnote-item"><p>Footnote text. <a href="#fnref2" class="footnote-backref">↩︎</a> <a href="#fnref2:1" class="footnote-backref">↩︎</a></p></li><li id="fn3" class="footnote-item"><p>Text of inline footnote <a href="#fnref3" class="footnote-backref">↩︎</a></p></li></ol></section>',2),u={},h=(0,s(94598).Z)(u,[["render",function(n,e){const s=(0,a.up)("CodeCopyButton");return(0,a.wg)(),(0,a.iD)("div",null,[o,t,l,(0,a._)("div",i,[r,(0,a.Wm)(s)]),p,(0,a._)("div",c,[d,(0,a.Wm)(s)]),f])}]])}}]);