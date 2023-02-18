"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4682],{13142:(e,n,t)=>{t.r(n),t.d(n,{data:()=>i});const i=JSON.parse('{"key":"v-87a48ac4","path":"/zh/guide/markdown/feature/","title":"特性","lang":"zh-CN","frontmatter":{"title":"特性"},"excerpt":"","headers":[{"level":2,"title":"h2 Heading","slug":"h2-heading","link":"#h2-heading","children":[{"level":3,"title":"h3 Heading","slug":"h3-heading","link":"#h3-heading","children":[]}]},{"level":2,"title":"Horizontal Rules","slug":"horizontal-rules","link":"#horizontal-rules","children":[]},{"level":2,"title":"Typographic replacements","slug":"typographic-replacements","link":"#typographic-replacements","children":[]},{"level":2,"title":"Emphasis","slug":"emphasis","link":"#emphasis","children":[]},{"level":2,"title":"Blockquotes","slug":"blockquotes","link":"#blockquotes","children":[]},{"level":2,"title":"Lists","slug":"lists","link":"#lists","children":[]},{"level":2,"title":"Code","slug":"code","link":"#code","children":[]},{"level":2,"title":"Tables","slug":"tables","link":"#tables","children":[]},{"level":2,"title":"Links","slug":"links","link":"#links","children":[]},{"level":2,"title":"Images","slug":"images","link":"#images","children":[]},{"level":2,"title":"Plugins","slug":"plugins","link":"#plugins","children":[{"level":3,"title":"Emojies","slug":"emojies","link":"#emojies","children":[]},{"level":3,"title":"Subscript / Superscript","slug":"subscript-superscript","link":"#subscript-superscript","children":[]},{"level":3,"title":"<ins>","slug":"ins","link":"#ins","children":[]},{"level":3,"title":"<mark>","slug":"mark","link":"#mark","children":[]},{"level":3,"title":"Footnotes","slug":"footnotes","link":"#footnotes","children":[]},{"level":3,"title":"Definition lists","slug":"definition-lists","link":"#definition-lists","children":[]},{"level":3,"title":"Abbreviations","slug":"abbreviations","link":"#abbreviations","children":[]},{"level":3,"title":"Custom containers","slug":"custom-containers","link":"#custom-containers","children":[]}]}],"git":{"createdTime":1636106368000,"updatedTime":1653375733000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":1},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1},{"name":"shentuzhigang","email":"shentuzhigang@shentuzhigang.cn","commits":1}]},"copyright":"","filePathRelative":"zh/guide/markdown/feature/README.md","content":"---\\ntitle: 特性\\n\\n---\\n__Advertisement :)__\\n\\n- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\\n  resize in browser.\\n- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\\n  i18n with plurals support and easy syntax.\\n\\nYou will like those projects!\\n\\n# h1 Heading 8-)\\n## h2 Heading\\n### h3 Heading\\n#### h4 Heading\\n##### h5 Heading\\n###### h6 Heading\\n\\n\\n## Horizontal Rules\\n\\n___\\n\\n---\\n\\n***\\n\\n\\n## Typographic replacements\\n\\nEnable typographer option to see result.\\n\\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\\n\\ntest.. test... test..... test?..... test!....\\n\\n!!!!!! ???? ,,  -- ---\\n\\n\\"Smartypants, double quotes\\" and \'single quotes\'\\n\\n\\n## Emphasis\\n\\n**This is bold text**\\n\\n__This is bold text__\\n\\n*This is italic text*\\n\\n_This is italic text_\\n\\n~~Strikethrough~~\\n\\n\\n## Blockquotes\\n\\n\\n> Blockquotes can also be nested...\\n>> ...by using additional greater-than signs right next to each other...\\n> > > ...or with spaces between arrows.\\n\\n\\n## Lists\\n\\nUnordered\\n\\n+ Create a list by starting a line with `+`, `-`, or `*`\\n+ Sub-lists are made by indenting 2 spaces:\\n  - Marker character change forces new list start:\\n    * Ac tristique libero volutpat at\\n    + Facilisis in pretium nisl aliquet\\n    - Nulla volutpat aliquam velit\\n+ Very easy!\\n\\nOrdered\\n\\n1. Lorem ipsum dolor sit amet\\n2. Consectetur adipiscing elit\\n3. Integer molestie lorem at massa\\n\\n\\n1. You can use sequential numbers...\\n1. ...or keep all the numbers as `1.`\\n\\nStart numbering with offset:\\n\\n57. foo\\n1. bar\\n\\n\\n## Code\\n\\nInline `code`\\n\\nIndented code\\n\\n    // Some comments\\n    line 1 of code\\n    line 2 of code\\n    line 3 of code\\n\\n\\nBlock code \\"fences\\"\\n\\n```\\nSample text here...\\n```\\n\\nSyntax highlighting\\n\\n``` js\\nvar foo = function (bar) {\\n  return bar++;\\n};\\n\\nconsole.log(foo(5));\\n```\\n\\n## Tables\\n\\n| Option | Description |\\n| ------ | ----------- |\\n| data   | path to data files to supply the data that will be passed into templates. |\\n| engine | engine to be used for processing templates. Handlebars is the default. |\\n| ext    | extension to be used for dest files. |\\n\\nRight aligned columns\\n\\n| Option | Description |\\n| ------:| -----------:|\\n| data   | path to data files to supply the data that will be passed into templates. |\\n| engine | engine to be used for processing templates. Handlebars is the default. |\\n| ext    | extension to be used for dest files. |\\n\\n\\n## Links\\n\\n[link text](http://dev.nodeca.com)\\n\\n[link with title](http://nodeca.github.io/pica/demo/ \\"title text!\\")\\n\\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\\n\\n\\n## Images\\n\\n![Minion](https://octodex.github.com/images/minion.png)\\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg \\"The Stormtroopocat\\")\\n\\nLike links, Images also have a footnote style syntax\\n\\n![Alt text][id]\\n\\nWith a reference later in the document defining the URL location:\\n\\n[id]: https://octodex.github.com/images/dojocat.jpg  \\"The Dojocat\\"\\n\\n\\n## Plugins\\n\\nThe killer feature of `markdown-it` is very effective support of\\n[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).\\n\\n\\n### [Emojies](https://github.com/markdown-it/markdown-it-emoji)\\n\\n> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:\\n>\\n> Shortcuts (emoticons): :-) :-( 8-) ;)\\n\\nsee [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.\\n\\n\\n### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)\\n\\n- 19^th^\\n- H~2~O\\n\\n\\n### [\\\\<ins>](https://github.com/markdown-it/markdown-it-ins)\\n\\n++Inserted text++\\n\\n\\n### [\\\\<mark>](https://github.com/markdown-it/markdown-it-mark)\\n\\n==Marked text==\\n\\n\\n### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)\\n\\nFootnote 1 link[^first].\\n\\nFootnote 2 link[^second].\\n\\nInline footnote^[Text of inline footnote] definition.\\n\\nDuplicated footnote reference[^second].\\n\\n[^first]: Footnote **can have markup**\\n\\n    and multiple paragraphs.\\n\\n[^second]: Footnote text.\\n\\n\\n### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)\\n\\nTerm 1\\n\\n:   Definition 1\\nwith lazy continuation.\\n\\nTerm 2 with *inline markup*\\n\\n:   Definition 2\\n\\n        { some code, part of Definition 2 }\\n\\n    Third paragraph of definition 2.\\n\\n_Compact style:_\\n\\nTerm 1\\n~ Definition 1\\n\\nTerm 2\\n~ Definition 2a\\n~ Definition 2b\\n\\n\\n### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)\\n\\nThis is HTML abbreviation example.\\n\\nIt converts \\"HTML\\", but keep intact partial entries like \\"xxxHTMLyyy\\" and so on.\\n\\n*[HTML]: Hyper Text Markup Language\\n\\n### [Custom containers](https://github.com/markdown-it/markdown-it-container)\\n\\n::: warning\\n*here be dragons*\\n:::\\n","author":[{"name":"Starzkg","email":"1600337300@qq.com"},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"},{"name":"shentuzhigang","email":"shentuzhigang@shentuzhigang.cn"}],"top":false,"length":623,"words":623,"readingTime":2.08}')},83473:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ne});var i=t(1863);const a=(0,i._)("p",null,[(0,i._)("strong",null,"Advertisement 😃")],-1),o={href:"https://nodeca.github.io/pica/demo/",target:"_blank",rel:"noopener noreferrer"},s={href:"https://github.com/nodeca/babelfish/",target:"_blank",rel:"noopener noreferrer"},r=(0,i.uE)('<p>You will like those projects!</p><h1 id="h1-heading" tabindex="-1"><a class="header-anchor" href="#h1-heading" aria-hidden="true">#</a> h1 Heading 😎</h1><h2 id="h2-heading" tabindex="-1"><a class="header-anchor" href="#h2-heading" aria-hidden="true">#</a> h2 Heading</h2><h3 id="h3-heading" tabindex="-1"><a class="header-anchor" href="#h3-heading" aria-hidden="true">#</a> h3 Heading</h3><h4 id="h4-heading" tabindex="-1"><a class="header-anchor" href="#h4-heading" aria-hidden="true">#</a> h4 Heading</h4><h5 id="h5-heading" tabindex="-1"><a class="header-anchor" href="#h5-heading" aria-hidden="true">#</a> h5 Heading</h5><h6 id="h6-heading" tabindex="-1"><a class="header-anchor" href="#h6-heading" aria-hidden="true">#</a> h6 Heading</h6><h2 id="horizontal-rules" tabindex="-1"><a class="header-anchor" href="#horizontal-rules" aria-hidden="true">#</a> Horizontal Rules</h2><hr><hr><hr><h2 id="typographic-replacements" tabindex="-1"><a class="header-anchor" href="#typographic-replacements" aria-hidden="true">#</a> Typographic replacements</h2><p>Enable typographer option to see result.</p><p>© © ® ® ™ ™ (p) (P) ±</p><p>test… test… test… test?.. test!..</p><p>!!! ??? , – —</p><p>“Smartypants, double quotes” and ‘single quotes’</p><h2 id="emphasis" tabindex="-1"><a class="header-anchor" href="#emphasis" aria-hidden="true">#</a> Emphasis</h2><p><strong>This is bold text</strong></p><p><strong>This is bold text</strong></p><p><em>This is italic text</em></p><p><em>This is italic text</em></p><p><s>Strikethrough</s></p><h2 id="blockquotes" tabindex="-1"><a class="header-anchor" href="#blockquotes" aria-hidden="true">#</a> Blockquotes</h2><blockquote><p>Blockquotes can also be nested…</p><blockquote><p>…by using additional greater-than signs right next to each other…</p><blockquote><p>…or with spaces between arrows.</p></blockquote></blockquote></blockquote><h2 id="lists" tabindex="-1"><a class="header-anchor" href="#lists" aria-hidden="true">#</a> Lists</h2><p>Unordered</p><ul><li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li><li>Sub-lists are made by indenting 2 spaces: <ul><li>Marker character change forces new list start: <ul><li>Ac tristique libero volutpat at</li></ul><ul><li>Facilisis in pretium nisl aliquet</li></ul><ul><li>Nulla volutpat aliquam velit</li></ul></li></ul></li><li>Very easy!</li></ul><p>Ordered</p><ol><li><p>Lorem ipsum dolor sit amet</p></li><li><p>Consectetur adipiscing elit</p></li><li><p>Integer molestie lorem at massa</p></li><li><p>You can use sequential numbers…</p></li><li><p>…or keep all the numbers as <code>1.</code></p></li></ol><p>Start numbering with offset:</p><ol start="57"><li>foo</li><li>bar</li></ol><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><p>Inline <code>code</code></p><p>Indented code</p><pre><code>// Some comments\nline 1 of code\nline 2 of code\nline 3 of code\n</code></pre><p>Block code “fences”</p>',37),l={class:"code-enhance"},d=(0,i.uE)('<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Sample text here...</span></span>\n<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),h=(0,i._)("p",null,"Syntax highlighting",-1),p={class:"code-enhance"},c=(0,i.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">++;</span></span>\n<span class="line"><span style="color:#D4D4D4;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">));</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),u=(0,i.uE)('<h2 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>data</td><td>path to data files to supply the data that will be passed into templates.</td></tr><tr><td>engine</td><td>engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td>ext</td><td>extension to be used for dest files.</td></tr></tbody></table><p>Right aligned columns</p><table><thead><tr><th style="text-align:right;">Option</th><th style="text-align:right;">Description</th></tr></thead><tbody><tr><td style="text-align:right;">data</td><td style="text-align:right;">path to data files to supply the data that will be passed into templates.</td></tr><tr><td style="text-align:right;">engine</td><td style="text-align:right;">engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td style="text-align:right;">ext</td><td style="text-align:right;">extension to be used for dest files.</td></tr></tbody></table><h2 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h2>',5),m={href:"http://dev.nodeca.com",target:"_blank",rel:"noopener noreferrer"},g={href:"http://nodeca.github.io/pica/demo/",title:"title text!",target:"_blank",rel:"noopener noreferrer"},f=(0,i.uE)('<p>Autoconverted link https://github.com/nodeca/pica (enable linkify to see)</p><h2 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h2><p><img src="https://octodex.github.com/images/minion.png" alt="Minion"><img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat"></p><p>Like links, Images also have a footnote style syntax</p><p><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat"></p><p>With a reference later in the document defining the URL location:</p><h2 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h2>',7),b=(0,i._)("code",null,"markdown-it",-1),k={href:"https://www.npmjs.org/browse/keyword/markdown-it-plugin",target:"_blank",rel:"noopener noreferrer"},y={id:"emojies",tabindex:"-1"},_=(0,i._)("a",{class:"header-anchor",href:"#emojies","aria-hidden":"true"},"#",-1),w={href:"https://github.com/markdown-it/markdown-it-emoji",target:"_blank",rel:"noopener noreferrer"},x=(0,i._)("blockquote",null,[(0,i._)("p",null,"Classic markup: 😉 :crush: 😢 :tear: 😆 😋"),(0,i._)("p",null,"Shortcuts (emoticons): 😃 😦 😎 😉")],-1),v={href:"https://github.com/markdown-it/markdown-it-emoji#change-output",target:"_blank",rel:"noopener noreferrer"},D={id:"subscript-superscript",tabindex:"-1"},T=(0,i._)("a",{class:"header-anchor",href:"#subscript-superscript","aria-hidden":"true"},"#",-1),U={href:"https://github.com/markdown-it/markdown-it-sub",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/markdown-it/markdown-it-sup",target:"_blank",rel:"noopener noreferrer"},q=(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Uk)("19"),(0,i._)("sup",null,"th")]),(0,i._)("li",null,[(0,i.Uk)("H"),(0,i._)("sub",null,"2"),(0,i.Uk)("O")])],-1),H={id:"ins",tabindex:"-1"},E=(0,i._)("a",{class:"header-anchor",href:"#ins","aria-hidden":"true"},"#",-1),S={href:"https://github.com/markdown-it/markdown-it-ins",target:"_blank",rel:"noopener noreferrer"},j=(0,i._)("p",null,[(0,i._)("ins",null,"Inserted text")],-1),z={id:"mark",tabindex:"-1"},L=(0,i._)("a",{class:"header-anchor",href:"#mark","aria-hidden":"true"},"#",-1),A={href:"https://github.com/markdown-it/markdown-it-mark",target:"_blank",rel:"noopener noreferrer"},W=(0,i._)("p",null,[(0,i._)("mark",null,"Marked text")],-1),I={id:"footnotes",tabindex:"-1"},M=(0,i._)("a",{class:"header-anchor",href:"#footnotes","aria-hidden":"true"},"#",-1),F={href:"https://github.com/markdown-it/markdown-it-footnote",target:"_blank",rel:"noopener noreferrer"},R=(0,i.uE)('<p>Footnote 1 link<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p><p>Footnote 2 link<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>.</p><p>Inline footnote<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup> definition.</p><p>Duplicated footnote reference<sup class="footnote-ref"><a href="#fn2" id="fnref2:1">[2:1]</a></sup>.</p>',4),B={id:"definition-lists",tabindex:"-1"},O=(0,i._)("a",{class:"header-anchor",href:"#definition-lists","aria-hidden":"true"},"#",-1),N={href:"https://github.com/markdown-it/markdown-it-deflist",target:"_blank",rel:"noopener noreferrer"},P=(0,i.uE)("<dl><dt>Term 1</dt><dd><p>Definition 1 with lazy continuation.</p></dd><dt>Term 2 with <em>inline markup</em></dt><dd><p>Definition 2</p><pre><code>  { some code, part of Definition 2 }\n</code></pre><p>Third paragraph of definition 2.</p></dd></dl><p><em>Compact style:</em></p><dl><dt>Term 1</dt><dd>Definition 1</dd><dt>Term 2</dt><dd>Definition 2a</dd><dd>Definition 2b</dd></dl>",3),Y={id:"abbreviations",tabindex:"-1"},V=(0,i._)("a",{class:"header-anchor",href:"#abbreviations","aria-hidden":"true"},"#",-1),G={href:"https://github.com/markdown-it/markdown-it-abbr",target:"_blank",rel:"noopener noreferrer"},J=(0,i._)("p",null,[(0,i.Uk)("This is "),(0,i._)("abbr",{title:"Hyper Text Markup Language"},"HTML"),(0,i.Uk)(" abbreviation example.")],-1),Z=(0,i._)("p",null,[(0,i.Uk)("It converts “"),(0,i._)("abbr",{title:"Hyper Text Markup Language"},"HTML"),(0,i.Uk)("”, but keep intact partial entries like “xxxHTMLyyy” and so on.")],-1),K={id:"custom-containers",tabindex:"-1"},Q=(0,i._)("a",{class:"header-anchor",href:"#custom-containers","aria-hidden":"true"},"#",-1),X={href:"https://github.com/markdown-it/markdown-it-container",target:"_blank",rel:"noopener noreferrer"},$=(0,i.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><em>here be dragons</em></p></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Footnote <strong>can have markup</strong></p><p>and multiple paragraphs. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li><li id="fn2" class="footnote-item"><p>Footnote text. <a href="#fnref2" class="footnote-backref">↩︎</a> <a href="#fnref2:1" class="footnote-backref">↩︎</a></p></li><li id="fn3" class="footnote-item"><p>Text of inline footnote <a href="#fnref3" class="footnote-backref">↩︎</a></p></li></ol></section>',3),ee={},ne=(0,t(94598).Z)(ee,[["render",function(e,n){const t=(0,i.up)("ExternalLinkIcon"),ee=(0,i.up)("CodeCopyButton");return(0,i.wg)(),(0,i.iD)("div",null,[a,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("strong",null,[(0,i._)("a",o,[(0,i.Uk)("pica"),(0,i.Wm)(t)])]),(0,i.Uk)(" - high quality and fast image resize in browser.")]),(0,i._)("li",null,[(0,i._)("strong",null,[(0,i._)("a",s,[(0,i.Uk)("babelfish"),(0,i.Wm)(t)])]),(0,i.Uk)(" - developer friendly i18n with plurals support and easy syntax.")])]),r,(0,i._)("div",l,[d,(0,i.Wm)(ee)]),h,(0,i._)("div",p,[c,(0,i.Wm)(ee)]),u,(0,i._)("p",null,[(0,i._)("a",m,[(0,i.Uk)("link text"),(0,i.Wm)(t)])]),(0,i._)("p",null,[(0,i._)("a",g,[(0,i.Uk)("link with title"),(0,i.Wm)(t)])]),f,(0,i._)("p",null,[(0,i.Uk)("The killer feature of "),b,(0,i.Uk)(" is very effective support of "),(0,i._)("a",k,[(0,i.Uk)("syntax plugins"),(0,i.Wm)(t)]),(0,i.Uk)(".")]),(0,i._)("h3",y,[_,(0,i.Uk)(),(0,i._)("a",w,[(0,i.Uk)("Emojies"),(0,i.Wm)(t)])]),x,(0,i._)("p",null,[(0,i.Uk)("see "),(0,i._)("a",v,[(0,i.Uk)("how to change output"),(0,i.Wm)(t)]),(0,i.Uk)(" with twemoji.")]),(0,i._)("h3",D,[T,(0,i.Uk)(),(0,i._)("a",U,[(0,i.Uk)("Subscript"),(0,i.Wm)(t)]),(0,i.Uk)(" / "),(0,i._)("a",C,[(0,i.Uk)("Superscript"),(0,i.Wm)(t)])]),q,(0,i._)("h3",H,[E,(0,i.Uk)(),(0,i._)("a",S,[(0,i.Uk)("<ins>"),(0,i.Wm)(t)])]),j,(0,i._)("h3",z,[L,(0,i.Uk)(),(0,i._)("a",A,[(0,i.Uk)("<mark>"),(0,i.Wm)(t)])]),W,(0,i._)("h3",I,[M,(0,i.Uk)(),(0,i._)("a",F,[(0,i.Uk)("Footnotes"),(0,i.Wm)(t)])]),R,(0,i._)("h3",B,[O,(0,i.Uk)(),(0,i._)("a",N,[(0,i.Uk)("Definition lists"),(0,i.Wm)(t)])]),P,(0,i._)("h3",Y,[V,(0,i.Uk)(),(0,i._)("a",G,[(0,i.Uk)("Abbreviations"),(0,i.Wm)(t)])]),J,Z,(0,i._)("h3",K,[Q,(0,i.Uk)(),(0,i._)("a",X,[(0,i.Uk)("Custom containers"),(0,i.Wm)(t)])]),$])}]])}}]);