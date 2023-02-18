import{_ as r,r as i,o as l,c as d,a as e,b as t,d as n,e as h,f as o}from"./app.07530a6c.js";const c={},p=e("h1",{id:"markdown-基础语法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-基础语法","aria-hidden":"true"},"#"),t(" Markdown 基础语法")],-1),u=e("p",null,"本章节介绍 VuePress Star 的 Markdown 基本语法。",-1),f={href:"https://markdown-it.github.io/",target:"_blank",rel:"noopener noreferrer"},m=e("hr",null,null,-1),b=e("p",null,[e("strong",null,"Advertisement 😃")],-1),_={href:"https://nodeca.github.io/pica/demo/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/nodeca/babelfish/",target:"_blank",rel:"noopener noreferrer"},k=o(`<p>You will like those projects!</p><hr><h1 id="h1-heading" tabindex="-1"><a class="header-anchor" href="#h1-heading" aria-hidden="true">#</a> h1 Heading 😎</h1><h2 id="h2-heading" tabindex="-1"><a class="header-anchor" href="#h2-heading" aria-hidden="true">#</a> h2 Heading</h2><h3 id="h3-heading" tabindex="-1"><a class="header-anchor" href="#h3-heading" aria-hidden="true">#</a> h3 Heading</h3><h4 id="h4-heading" tabindex="-1"><a class="header-anchor" href="#h4-heading" aria-hidden="true">#</a> h4 Heading</h4><h5 id="h5-heading" tabindex="-1"><a class="header-anchor" href="#h5-heading" aria-hidden="true">#</a> h5 Heading</h5><h6 id="h6-heading" tabindex="-1"><a class="header-anchor" href="#h6-heading" aria-hidden="true">#</a> h6 Heading</h6><h2 id="水平分割线" tabindex="-1"><a class="header-anchor" href="#水平分割线" aria-hidden="true">#</a> 水平分割线</h2><hr><hr><hr><h2 id="排版替换" tabindex="-1"><a class="header-anchor" href="#排版替换" aria-hidden="true">#</a> 排版替换</h2><p>Enable typographer option to see result.</p><p>© © ® ® ™ ™ (p) (P) ±</p><p>test… test… test… test?.. test!..</p><p>!!! ??? , – —</p><p>“Smartypants, double quotes” and ‘single quotes’</p><h2 id="样式文本" tabindex="-1"><a class="header-anchor" href="#样式文本" aria-hidden="true">#</a> 样式文本</h2><p><strong>This is bold text</strong></p><p><strong>This is bold text</strong></p><p><em>This is italic text</em></p><p><em>This is italic text</em></p><p><s>Strikethrough</s></p><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><blockquote><p>Blockquotes can also be nested…</p><blockquote><p>…by using additional greater-than signs right next to each other…</p><blockquote><p>…or with spaces between arrows.</p></blockquote></blockquote></blockquote><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><p>Unordered</p><ul><li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li><li>Sub-lists are made by indenting 2 spaces: <ul><li>Marker character change forces new list start: <ul><li>Ac tristique libero volutpat at</li></ul><ul><li>Facilisis in pretium nisl aliquet</li></ul><ul><li>Nulla volutpat aliquam velit</li></ul></li></ul></li><li>Very easy!</li></ul><p>Ordered</p><ol><li><p>Lorem ipsum dolor sit amet</p></li><li><p>Consectetur adipiscing elit</p></li><li><p>Integer molestie lorem at massa</p></li><li><p>You can use sequential numbers…</p></li><li><p>…or keep all the numbers as <code>1.</code></p></li></ol><p>Start numbering with offset:</p><ol start="57"><li>foo</li><li>bar</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><p>Inline <code>code</code></p><p>Indented code</p><pre><code>// Some comments
line 1 of code
line 2 of code
line 3 of code
</code></pre><p>Block code “fences”</p>`,38),x={class:"code-enhance"},y=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Sample text here...</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),D=e("p",null,"Syntax highlighting",-1),w={class:"code-enhance"},v=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">++;</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">));</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C=o('<h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>data</td><td>path to data files to supply the data that will be passed into templates.</td></tr><tr><td>engine</td><td>engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td>ext</td><td>extension to be used for dest files.</td></tr></tbody></table><p>Right aligned columns</p><table><thead><tr><th style="text-align:right;">Option</th><th style="text-align:right;">Description</th></tr></thead><tbody><tr><td style="text-align:right;">data</td><td style="text-align:right;">path to data files to supply the data that will be passed into templates.</td></tr><tr><td style="text-align:right;">engine</td><td style="text-align:right;">engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td style="text-align:right;">ext</td><td style="text-align:right;">extension to be used for dest files.</td></tr></tbody></table><h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2>',5),T={href:"http://dev.nodeca.com",target:"_blank",rel:"noopener noreferrer"},q={href:"http://nodeca.github.io/pica/demo/",title:"title text!",target:"_blank",rel:"noopener noreferrer"},E=o('<p>Autoconverted link https://github.com/nodeca/pica (enable linkify to see)</p><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><p><img src="https://octodex.github.com/images/minion.png" alt="Minion"><img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat"></p><p>Like links, Images also have a footnote style syntax</p><p><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat"></p><p>With a reference later in the document defining the URL location:</p><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2>',7),j=e("code",null,"markdown-it",-1),H={href:"https://www.npmjs.org/browse/keyword/markdown-it-plugin",target:"_blank",rel:"noopener noreferrer"},S={id:"emojies",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#emojies","aria-hidden":"true"},"#",-1),M={href:"https://github.com/markdown-it/markdown-it-emoji",target:"_blank",rel:"noopener noreferrer"},I=e("blockquote",null,[e("p",null,"Classic markup: 😉 :crush: 😢 :tear: 😆 😋"),e("p",null,"Shortcuts (emoticons): 😃 😦 😎 😉")],-1),L={href:"https://github.com/markdown-it/markdown-it-emoji#change-output",target:"_blank",rel:"noopener noreferrer"},F={id:"subscript-superscript",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#subscript-superscript","aria-hidden":"true"},"#",-1),N={href:"https://github.com/markdown-it/markdown-it-sub",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/markdown-it/markdown-it-sup",target:"_blank",rel:"noopener noreferrer"},O=e("ul",null,[e("li",null,[t("19"),e("sup",null,"th")]),e("li",null,[t("H"),e("sub",null,"2"),t("O")])],-1),R={id:"ins",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#ins","aria-hidden":"true"},"#",-1),P={href:"https://github.com/markdown-it/markdown-it-ins",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,[e("ins",null,"Inserted text")],-1),W={id:"mark",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#mark","aria-hidden":"true"},"#",-1),G={href:"https://github.com/markdown-it/markdown-it-mark",target:"_blank",rel:"noopener noreferrer"},J=e("p",null,[e("mark",null,"Marked text")],-1),K={id:"footnotes",tabindex:"-1"},Q=e("a",{class:"header-anchor",href:"#footnotes","aria-hidden":"true"},"#",-1),X={href:"https://github.com/markdown-it/markdown-it-footnote",target:"_blank",rel:"noopener noreferrer"},Z=o('<p>Footnote 1 link<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><p>Footnote 2 link<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>.</p><p>Inline footnote<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup> definition.</p><p>Duplicated footnote reference<sup class="footnote-ref"><a href="#fn2" id="fnref2:1">[2:1]</a></sup>.</p>',4),$={id:"definition-lists",tabindex:"-1"},ee=e("a",{class:"header-anchor",href:"#definition-lists","aria-hidden":"true"},"#",-1),te={href:"https://github.com/markdown-it/markdown-it-deflist",target:"_blank",rel:"noopener noreferrer"},ne=o(`<dl><dt>Term 1</dt><dd><p>Definition 1 with lazy continuation.</p></dd><dt>Term 2 with <em>inline markup</em></dt><dd><p>Definition 2</p><pre><code>  { some code, part of Definition 2 }
</code></pre><p>Third paragraph of definition 2.</p></dd></dl><p><em>Compact style:</em></p><dl><dt>Term 1</dt><dd>Definition 1</dd><dt>Term 2</dt><dd>Definition 2a</dd><dd>Definition 2b</dd></dl>`,3),ae={id:"abbreviations",tabindex:"-1"},oe=e("a",{class:"header-anchor",href:"#abbreviations","aria-hidden":"true"},"#",-1),se={href:"https://github.com/markdown-it/markdown-it-abbr",target:"_blank",rel:"noopener noreferrer"},ie=e("p",null,[t("This is "),e("abbr",{title:"Hyper Text Markup Language"},"HTML"),t(" abbreviation example.")],-1),re=e("p",null,[t("It converts “"),e("abbr",{title:"Hyper Text Markup Language"},"HTML"),t("”, but keep intact partial entries like “xxxHTMLyyy” and so on.")],-1),le={id:"custom-containers",tabindex:"-1"},de=e("a",{class:"header-anchor",href:"#custom-containers","aria-hidden":"true"},"#",-1),he={href:"https://github.com/markdown-it/markdown-it-container",target:"_blank",rel:"noopener noreferrer"},ce=o('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><em>here be dragons</em></p></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Footnote <strong>can have markup</strong></p><p>and multiple paragraphs. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li><li id="fn2" class="footnote-item"><p>Footnote text. <a href="#fnref2" class="footnote-backref">↩︎</a> <a href="#fnref2:1" class="footnote-backref">↩︎</a></p></li><li id="fn3" class="footnote-item"><p>Text of inline footnote <a href="#fnref3" class="footnote-backref">↩︎</a></p></li></ol></section>',3);function pe(ue,fe){const a=i("ExternalLinkIcon"),s=i("CodeCopyButton");return l(),d("div",null,[p,u,e("p",null,[t("这是来自 "),e("a",f,[t("markdown-it"),n(a)]),t(" 的 MarkDown Demo")]),h(" more "),m,b,e("ul",null,[e("li",null,[e("strong",null,[e("a",_,[t("pica"),n(a)])]),t(" - high quality and fast image resize in browser.")]),e("li",null,[e("strong",null,[e("a",g,[t("babelfish"),n(a)])]),t(" - developer friendly i18n with plurals support and easy syntax.")])]),k,e("div",x,[y,n(s)]),D,e("div",w,[v,n(s)]),C,e("p",null,[e("a",T,[t("link text"),n(a)])]),e("p",null,[e("a",q,[t("link with title"),n(a)])]),E,e("p",null,[t("The killer feature of "),j,t(" is very effective support of "),e("a",H,[t("syntax plugins"),n(a)]),t(".")]),e("h3",S,[A,t(),e("a",M,[t("Emojies"),n(a)])]),I,e("p",null,[t("see "),e("a",L,[t("how to change output"),n(a)]),t(" with twemoji.")]),e("h3",F,[B,t(),e("a",N,[t("Subscript"),n(a)]),t(" / "),e("a",V,[t("Superscript"),n(a)])]),O,e("h3",R,[z,t(),e("a",P,[t("<ins>"),n(a)])]),U,e("h3",W,[Y,t(),e("a",G,[t("<mark>"),n(a)])]),J,e("h3",K,[Q,t(),e("a",X,[t("Footnotes"),n(a)])]),Z,e("h3",$,[ee,t(),e("a",te,[t("Definition lists"),n(a)])]),ne,e("h3",ae,[oe,t(),e("a",se,[t("Abbreviations"),n(a)])]),ie,re,e("h3",le,[de,t(),e("a",he,[t("Custom containers"),n(a)])]),ce])}const be=r(c,[["render",pe],["__file","index.html.vue"]]);export{be as default};
