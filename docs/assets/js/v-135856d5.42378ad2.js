"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7926],{8754:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-135856d5","path":"/guide/markdown/presentation/demo.html","title":"Demo","lang":"en-US","frontmatter":{"title":"Demo","icon":"discover","layout":"Slide"},"excerpt":"","headers":[{"level":2,"title":"Slide Demo","slug":"slide-demo","link":"#slide-demo","children":[]},{"level":2,"title":"Marking Slides","slug":"marking-slides","link":"#marking-slides","children":[]},{"level":2,"title":"Marking Slides","slug":"marking-slides-1","link":"#marking-slides-1","children":[]},{"level":2,"title":"Markdown","slug":"markdown","link":"#markdown","children":[]},{"level":2,"title":"Markdown","slug":"markdown-1","link":"#markdown-1","children":[{"level":3,"title":"This is a H3","slug":"this-is-a-h3","link":"#this-is-a-h3","children":[]}]},{"level":2,"title":"Markdown","slug":"markdown-2","link":"#markdown-2","children":[]},{"level":2,"title":"Markdown","slug":"markdown-3","link":"#markdown-3","children":[]},{"level":2,"title":"Markdown","slug":"markdown-4","link":"#markdown-4","children":[]},{"level":2,"title":"Markdown","slug":"markdown-5","link":"#markdown-5","children":[]},{"level":2,"title":"Layout","slug":"layout","link":"#layout","children":[]},{"level":2,"title":"Layout","slug":"layout-1","link":"#layout-1","children":[]},{"level":2,"title":"Layout","slug":"layout-2","link":"#layout-2","children":[]},{"level":2,"title":"Layout","slug":"layout-3","link":"#layout-3","children":[{"level":3,"title":"Background","slug":"background","link":"#background","children":[]}]},{"level":2,"title":"Fragment","slug":"fragment","link":"#fragment","children":[]},{"level":2,"title":"Fragment","slug":"fragment-1","link":"#fragment-1","children":[]},{"level":2,"title":"Fragment","slug":"fragment-2","link":"#fragment-2","children":[{"level":3,"title":"Animation class","slug":"animation-class","link":"#animation-class","children":[]}]},{"level":2,"title":"Fragment","slug":"fragment-3","link":"#fragment-3","children":[{"level":3,"title":"Animation class","slug":"animation-class-1","link":"#animation-class-1","children":[]}]},{"level":2,"title":"Fragment","slug":"fragment-4","link":"#fragment-4","children":[{"level":3,"title":"Mutiple fragments","slug":"mutiple-fragments","link":"#mutiple-fragments","children":[]}]},{"level":2,"title":"Fragment","slug":"fragment-5","link":"#fragment-5","children":[{"level":3,"title":"Order","slug":"order","link":"#order","children":[]}]},{"level":2,"title":"Transition","slug":"transition","link":"#transition","children":[]},{"level":2,"title":"Transition","slug":"transition-1","link":"#transition-1","children":[]},{"level":2,"title":"Transition","slug":"transition-2","link":"#transition-2","children":[{"level":3,"title":"Auto animate","slug":"auto-animate","link":"#auto-animate","children":[]}]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":2,"title":"Functions","slug":"functions-1","link":"#functions-1","children":[{"level":3,"title":"Code","slug":"code","link":"#code","children":[]}]},{"level":2,"title":"Functions","slug":"functions-2","link":"#functions-2","children":[{"level":3,"title":"Overview","slug":"overview","link":"#overview","children":[]}]},{"level":2,"title":"Functions","slug":"functions-3","link":"#functions-3","children":[{"level":3,"title":"Full Screen","slug":"full-screen","link":"#full-screen","children":[]}]},{"level":2,"title":"Functions","slug":"functions-4","link":"#functions-4","children":[{"level":3,"title":"Zoom","slug":"zoom","link":"#zoom","children":[]}]},{"level":2,"title":"The End","slug":"the-end","link":"#the-end","children":[]}],"git":{"createdTime":1635925377000,"updatedTime":1666582688000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com","commits":1},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"guide/markdown/presentation/demo.md","content":"---\\ntitle: Demo\\nicon: discover\\nlayout: Slide\\n---\\n\\n\x3c!-- markdownlint-disable MD024 MD033 --\x3e\\n\\n@slidestart\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" --\x3e\\n\\n## Slide Demo\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\nA simple slide demo and useful hints.\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n> By Mr.Hope. Please scroll mousewheel down to the next slide\\n\\n---\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Marking Slides\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n[👇](#/1/1)\\n\\n--\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Marking Slides\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\nUse `---` to mark horizontal slides\\n\\n\x3c!-- .element: class=\\"fragment fade-in\\" --\x3e\\n\\nUse `--` to sperate vertical slides in a horizontal slide.\\n\\n\x3c!-- .element: class=\\"fragment fade-in\\" --\x3e\\n\\nUse `\x3c!-- .slide: ... --\x3e` to add attributes to slide\\n\\n\x3c!-- .element: class=\\"fragment fade-in\\" --\x3e\\n\\nUse `\x3c!-- .element: ... --\x3e` to add attributes to the previous HTML element\\n\\n\x3c!-- .element: class=\\"fragment fade-in\\" --\x3e\\n\\n---\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Markdown\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\nYou can use all kinds of markup in slides.\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Markdown\\n\\nYou can use all kinds of markup in slides.\\n\\n### This is a H3\\n\\nHeadings will transform to UPPERCASE by default.\\n\\nHere is paragraph with some **bold**, _italic_, ~~strikethrough~~ text and a [link](https://mrhope.site), and it can auto break itself so you dont need to worry the length.\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Markdown\\n\\nYou can use all kinds of markup in slides.\\n\\nList is `inline-block` by default.\\n\\n- Item\\n- Item\\n- Item\\n\\n1. Item 1\\n1. Item 2\\n1. Item 3\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Markdown\\n\\nYou can use all kinds of markup in slides.\\n\\nCode block will get auto highlight if you enable `highlight` plugin.\\n\\n```js\\nconst a = 1;\\n```\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Markdown\\n\\nYou can use all kinds of markup in slides.\\n\\nYou can also write math equation using tex syntax if you enable `math` plugin.\\n\\n$$\\nJ(\\\\theta_0,\\\\theta_1) = \\\\sum_{i=0}\\n$$\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Markdown\\n\\nYou can use all kinds of markup in slides.\\n\\n⚠**Note**: Table, hr and other unstandard Markdown syntax is not supported.\\n\\n---\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Layout\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate  --\x3e\\n\\n## Layout\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n👆 The `r-fit-text` class makes text as large as possible without overflowing the slide.\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate  --\x3e\\n\\n## Layout\\n\\n![Logo](/logo.png)\\n\\n\x3c!-- .element: class=\\"r-stretch\\" --\x3e\\n\\n👆 The `r-stretch` class helper lets you resize an element, like an image or video, to cover the remaining vertical space in a slide.\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate data-background-color=\\"rgb(70, 70, 255)\\" --\x3e\\n\\n## Layout\\n\\n### Background\\n\\nCutom background by adding `data-background` attribute to slide.\\n\\n---\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Fragment\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Fragment\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\nFragments are used to highlight or incrementally reveal individual elements on a slide.\\n\\nAdd `fragment` and animation class to element.\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Fragment\\n\\n### Animation class\\n\\n- `fade-in`\\n\x3c!-- .element: class=\\"fragment fade-in\\" --\x3e\\n\\n- `fade-out`\\n\x3c!-- .element: class=\\"fragment fade-out\\" --\x3e\\n\\n- `fade-up`\\n\x3c!-- .element: class=\\"fragment fade-up\\" --\x3e\\n\\n\x3c!-- list break --\x3e\\n\\n- `fade-down`\\n\x3c!-- .element: class=\\"fragment fade-down\\" --\x3e\\n\\n- `fade-left`\\n\x3c!-- .element: class=\\"fragment fade-left\\" --\x3e\\n\\n- `fade-right`\\n\x3c!-- .element: class=\\"fragment fade-right\\" --\x3e\\n\\n\x3c!-- list break --\x3e\\n\\n- `fade-in-then-out`\\n\x3c!-- .element: class=\\"fragment fade-in-then-out\\" --\x3e\\n\\n- `fade-in-then-semi-out`\\n\x3c!-- .element: class=\\"fragment fade-in-then-semi-out\\" --\x3e\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Fragment\\n\\n### Animation class\\n\\n- `grow`\\n\x3c!-- .element: class=\\"fragment grow\\" --\x3e\\n\\n- `shrink`\\n\x3c!-- .element: class=\\"fragment shrink\\" --\x3e\\n\\n- `strike`\\n\x3c!-- .element: class=\\"fragment strike\\" --\x3e\\n\\n\x3c!-- list break --\x3e\\n\\n- `highlight-red`\\n\x3c!-- .element: class=\\"fragment highlight-red\\" --\x3e\\n\\n- `highlight-green`\\n\x3c!-- .element: class=\\"fragment highlight-green\\" --\x3e\\n\\n- `highlight-blue`\\n\x3c!-- .element: class=\\"fragment highlight-blue\\" --\x3e\\n\\n\x3c!-- list break --\x3e\\n\\n- `highlight-current-red`\\n\x3c!-- .element: class=\\"fragment highlight-current-red\\" --\x3e\\n\\n- `highlight-current-green`\\n\x3c!-- .element: class=\\"fragment highlight-current-green\\" --\x3e\\n\\n- `highlight-current-blue`\\n\x3c!-- .element: class=\\"fragment highlight-current-blue\\" --\x3e\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Fragment\\n\\n### Mutiple fragments\\n\\nMultiple fragments can be applied to the same element sequentially by wrapping it\\n\\n<span class=\\"fragment fade-in\\">\\n  <span class=\\"fragment highlight-red\\">\\n    <span class=\\"fragment fade-out\\">\\n      Fade in > Turn red > Fade out\\n    </span>\\n  </span>\\n</span>\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Fragment\\n\\n### Order\\n\\nOrder can be changed using the `data-fragment-index` attribute.\\n\\nMultiple elements can appear at the same index.\\n\\n- Appears last\\n\x3c!-- .element: class=\\"fragment\\" data-fragment-index=\\"3\\"--\x3e\\n\\n- Appears second\\n\x3c!-- .element: class=\\"fragment\\" data-fragment-index=\\"2\\"--\x3e\\n\\n\x3c!-- list break --\x3e\\n\\n- Appears first\\n\x3c!-- .element: class=\\"fragment\\" data-fragment-index=\\"1\\"--\x3e\\n\\n- Appears second\\n\x3c!-- .element: class=\\"fragment\\" data-fragment-index=\\"2\\"--\x3e\\n\\n---\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Transition\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n--\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Transition\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\nTransition can be changed by setting the `transition` config option globally or `data-transition` attribute on specific slide.\\n\\nPossible values:\\n\\n- none\\n- fade\\n- slide\\n\\n\x3c!-- list break --\x3e\\n\\n- convex\\n- concave\\n- zoom\\n\\n--\\n\\n\x3c!-- .slide: data-auto-animate --\x3e\\n\\n## Transition\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n### Auto animate\\n\\n`data-auto-animate` can be added on nearby slides to make an animation on unchanged elements.\\n\\n---\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Functions\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n--\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Functions\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n### Code\\n\\nBy enabling `highlight` plugin, you can highlight code blocks.\\n\\nYou can use `[a-b|c-d]` syntax to highlight lines by steps.\\n\\n```js [1-2|3|4]\\nlet a = 1;\\nlet b = 2;\\nlet c = (x) => 1 + 2 + x;\\nc(3);\\n```\\n\\n--\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Functions\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n### Overview\\n\\nPress `Esc` or `O` to enter overview mode when the presentation is active\\n\\n--\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Functions\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n### Full Screen\\n\\nPress `F` or `F11` to enter fullscreen when the presentation is active\\n\\n--\\n\\n\x3c!-- .slide: data-transition=\\"slide\\" data-auto-animate --\x3e\\n\\n## Functions\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n### Zoom\\n\\nHold down the `alt` key (`ctrl` in Linux) and click on any element to zoom towards it.\\n\\nClick again to zoom back out.\\n\\n---\\n\\n\x3c!-- .element: class=\\"r-fit-text\\" --\x3e\\n\\n## The End\\n\\n@slideend\\n","icon":"discover","author":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com"},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":970,"words":970,"readingTime":3.23}')},10132:(e,n,a)=>{a.r(n),a.d(n,{default:()=>_});var t=a(1863);const l=(0,t.uE)('<p>@slidestart</p><h2 id="slide-demo" tabindex="-1"><a class="header-anchor" href="#slide-demo" aria-hidden="true">#</a> Slide Demo</h2><p>A simple slide demo and useful hints.</p><blockquote><p>By Mr.Hope. Please scroll mousewheel down to the next slide</p></blockquote><hr><h2 id="marking-slides" tabindex="-1"><a class="header-anchor" href="#marking-slides" aria-hidden="true">#</a> Marking Slides</h2><p><a href="#/1/1">👇</a></p><p>–</p><h2 id="marking-slides-1" tabindex="-1"><a class="header-anchor" href="#marking-slides-1" aria-hidden="true">#</a> Marking Slides</h2><p>Use <code>---</code> to mark horizontal slides</p><p>Use <code>--</code> to sperate vertical slides in a horizontal slide.</p><p>Use <code>&lt;!-- .slide: ... --&gt;</code> to add attributes to slide</p><p>Use <code>&lt;!-- .element: ... --&gt;</code> to add attributes to the previous HTML element</p><hr><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><p>You can use all kinds of markup in slides.</p><p>–</p><h2 id="markdown-1" tabindex="-1"><a class="header-anchor" href="#markdown-1" aria-hidden="true">#</a> Markdown</h2><p>You can use all kinds of markup in slides.</p><h3 id="this-is-a-h3" tabindex="-1"><a class="header-anchor" href="#this-is-a-h3" aria-hidden="true">#</a> This is a H3</h3><p>Headings will transform to UPPERCASE by default.</p>',21),s=(0,t._)("strong",null,"bold",-1),i=(0,t._)("em",null,"italic",-1),r=(0,t._)("s",null,"strikethrough",-1),o={href:"https://mrhope.site",target:"_blank",rel:"noopener noreferrer"},d=(0,t.uE)('<p>–</p><h2 id="markdown-2" tabindex="-1"><a class="header-anchor" href="#markdown-2" aria-hidden="true">#</a> Markdown</h2><p>You can use all kinds of markup in slides.</p><p>List is <code>inline-block</code> by default.</p><ul><li>Item</li><li>Item</li><li>Item</li></ul><ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol><p>–</p><h2 id="markdown-3" tabindex="-1"><a class="header-anchor" href="#markdown-3" aria-hidden="true">#</a> Markdown</h2><p>You can use all kinds of markup in slides.</p><p>Code block will get auto highlight if you enable <code>highlight</code> plugin.</p>',10),c={class:"code-enhance"},h=(0,t.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),u=(0,t._)("p",null,"–",-1),m=(0,t._)("h2",{id:"markdown-4",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#markdown-4","aria-hidden":"true"},"#"),(0,t.Uk)(" Markdown")],-1),p=(0,t._)("p",null,"You can use all kinds of markup in slides.",-1),g=(0,t._)("p",null,[(0,t.Uk)("You can also write math equation using tex syntax if you enable "),(0,t._)("code",null,"math"),(0,t.Uk)(" plugin.")],-1),x=(0,t._)("p",{class:"katex-block"},[(0,t._)("span",{class:"katex-display"},[(0,t._)("span",{class:"katex"},[(0,t._)("span",{class:"katex-mathml"},[(0,t._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[(0,t._)("semantics",null,[(0,t._)("mrow",null,[(0,t._)("mi",null,"J"),(0,t._)("mo",{stretchy:"false"},"("),(0,t._)("msub",null,[(0,t._)("mi",null,"θ"),(0,t._)("mn",null,"0")]),(0,t._)("mo",{separator:"true"},","),(0,t._)("msub",null,[(0,t._)("mi",null,"θ"),(0,t._)("mn",null,"1")]),(0,t._)("mo",{stretchy:"false"},")"),(0,t._)("mo",null,"="),(0,t._)("munder",null,[(0,t._)("mo",null,"∑"),(0,t._)("mrow",null,[(0,t._)("mi",null,"i"),(0,t._)("mo",null,"="),(0,t._)("mn",null,"0")])])]),(0,t._)("annotation",{encoding:"application/x-tex"}," J(\\theta_0,\\theta_1) = \\sum_{i=0} ")])])]),(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,t._)("span",{class:"mord mathnormal",style:{"margin-right":"0.09618em"}},"J"),(0,t._)("span",{class:"mopen"},"("),(0,t._)("span",{class:"mord"},[(0,t._)("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ"),(0,t._)("span",{class:"msupsub"},[(0,t._)("span",{class:"vlist-t vlist-t2"},[(0,t._)("span",{class:"vlist-r"},[(0,t._)("span",{class:"vlist",style:{height:"0.3011em"}},[(0,t._)("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[(0,t._)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,t._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,t._)("span",{class:"mord mtight"},"0")])])]),(0,t._)("span",{class:"vlist-s"},"​")]),(0,t._)("span",{class:"vlist-r"},[(0,t._)("span",{class:"vlist",style:{height:"0.15em"}},[(0,t._)("span")])])])])]),(0,t._)("span",{class:"mpunct"},","),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),(0,t._)("span",{class:"mord"},[(0,t._)("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ"),(0,t._)("span",{class:"msupsub"},[(0,t._)("span",{class:"vlist-t vlist-t2"},[(0,t._)("span",{class:"vlist-r"},[(0,t._)("span",{class:"vlist",style:{height:"0.3011em"}},[(0,t._)("span",{style:{top:"-2.55em","margin-left":"-0.0278em","margin-right":"0.05em"}},[(0,t._)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,t._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,t._)("span",{class:"mord mtight"},"1")])])]),(0,t._)("span",{class:"vlist-s"},"​")]),(0,t._)("span",{class:"vlist-r"},[(0,t._)("span",{class:"vlist",style:{height:"0.15em"}},[(0,t._)("span")])])])])]),(0,t._)("span",{class:"mclose"},")"),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,t._)("span",{class:"mrel"},"="),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"2.3277em","vertical-align":"-1.2777em"}}),(0,t._)("span",{class:"mop op-limits"},[(0,t._)("span",{class:"vlist-t vlist-t2"},[(0,t._)("span",{class:"vlist-r"},[(0,t._)("span",{class:"vlist",style:{height:"1.05em"}},[(0,t._)("span",{style:{top:"-1.8723em","margin-left":"0em"}},[(0,t._)("span",{class:"pstrut",style:{height:"3.05em"}}),(0,t._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,t._)("span",{class:"mord mtight"},[(0,t._)("span",{class:"mord mathnormal mtight"},"i"),(0,t._)("span",{class:"mrel mtight"},"="),(0,t._)("span",{class:"mord mtight"},"0")])])]),(0,t._)("span",{style:{top:"-3.05em"}},[(0,t._)("span",{class:"pstrut",style:{height:"3.05em"}}),(0,t._)("span",null,[(0,t._)("span",{class:"mop op-symbol large-op"},"∑")])])]),(0,t._)("span",{class:"vlist-s"},"​")]),(0,t._)("span",{class:"vlist-r"},[(0,t._)("span",{class:"vlist",style:{height:"1.2777em"}},[(0,t._)("span")])])])])])])])])],-1),f=(0,t.uE)('<p>–</p><h2 id="markdown-5" tabindex="-1"><a class="header-anchor" href="#markdown-5" aria-hidden="true">#</a> Markdown</h2><p>You can use all kinds of markup in slides.</p><p>⚠<strong>Note</strong>: Table, hr and other unstandard Markdown syntax is not supported.</p><hr><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h2><p>–</p><h2 id="layout-1" tabindex="-1"><a class="header-anchor" href="#layout-1" aria-hidden="true">#</a> Layout</h2><p>👆 The <code>r-fit-text</code> class makes text as large as possible without overflowing the slide.</p><p>–</p><h2 id="layout-2" tabindex="-1"><a class="header-anchor" href="#layout-2" aria-hidden="true">#</a> Layout</h2><p><img src="/logo.png" alt="Logo"></p><p>👆 The <code>r-stretch</code> class helper lets you resize an element, like an image or video, to cover the remaining vertical space in a slide.</p><p>–</p><h2 id="layout-3" tabindex="-1"><a class="header-anchor" href="#layout-3" aria-hidden="true">#</a> Layout</h2><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h3><p>Cutom background by adding <code>data-background</code> attribute to slide.</p><hr><h2 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h2><p>–</p><h2 id="fragment-1" tabindex="-1"><a class="header-anchor" href="#fragment-1" aria-hidden="true">#</a> Fragment</h2><p>Fragments are used to highlight or incrementally reveal individual elements on a slide.</p><p>Add <code>fragment</code> and animation class to element.</p><p>–</p><h2 id="fragment-2" tabindex="-1"><a class="header-anchor" href="#fragment-2" aria-hidden="true">#</a> Fragment</h2><h3 id="animation-class" tabindex="-1"><a class="header-anchor" href="#animation-class" aria-hidden="true">#</a> Animation class</h3><ul><li><code>fade-in</code></li></ul><ul><li><code>fade-out</code></li></ul><ul><li><code>fade-up</code></li></ul><ul><li><code>fade-down</code></li></ul><ul><li><code>fade-left</code></li></ul><ul><li><code>fade-right</code></li></ul><ul><li><code>fade-in-then-out</code></li></ul><ul><li><code>fade-in-then-semi-out</code></li></ul><p>–</p><h2 id="fragment-3" tabindex="-1"><a class="header-anchor" href="#fragment-3" aria-hidden="true">#</a> Fragment</h2><h3 id="animation-class-1" tabindex="-1"><a class="header-anchor" href="#animation-class-1" aria-hidden="true">#</a> Animation class</h3><ul><li><code>grow</code></li></ul><ul><li><code>shrink</code></li></ul><ul><li><code>strike</code></li></ul><ul><li><code>highlight-red</code></li></ul><ul><li><code>highlight-green</code></li></ul><ul><li><code>highlight-blue</code></li></ul><ul><li><code>highlight-current-red</code></li></ul><ul><li><code>highlight-current-green</code></li></ul><ul><li><code>highlight-current-blue</code></li></ul><p>–</p><h2 id="fragment-4" tabindex="-1"><a class="header-anchor" href="#fragment-4" aria-hidden="true">#</a> Fragment</h2><h3 id="mutiple-fragments" tabindex="-1"><a class="header-anchor" href="#mutiple-fragments" aria-hidden="true">#</a> Mutiple fragments</h3><p>Multiple fragments can be applied to the same element sequentially by wrapping it</p><span class="fragment fade-in"><span class="fragment highlight-red"><span class="fragment fade-out"> Fade in &gt; Turn red &gt; Fade out </span></span></span><p>–</p><h2 id="fragment-5" tabindex="-1"><a class="header-anchor" href="#fragment-5" aria-hidden="true">#</a> Fragment</h2><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> Order</h3><p>Order can be changed using the <code>data-fragment-index</code> attribute.</p><p>Multiple elements can appear at the same index.</p><ul><li>Appears last</li></ul><ul><li>Appears second</li></ul><ul><li>Appears first</li></ul><ul><li>Appears second</li></ul><hr><h2 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h2><p>–</p><h2 id="transition-1" tabindex="-1"><a class="header-anchor" href="#transition-1" aria-hidden="true">#</a> Transition</h2><p>Transition can be changed by setting the <code>transition</code> config option globally or <code>data-transition</code> attribute on specific slide.</p><p>Possible values:</p><ul><li>none</li><li>fade</li><li>slide</li></ul><ul><li>convex</li><li>concave</li><li>zoom</li></ul><p>–</p><h2 id="transition-2" tabindex="-1"><a class="header-anchor" href="#transition-2" aria-hidden="true">#</a> Transition</h2><h3 id="auto-animate" tabindex="-1"><a class="header-anchor" href="#auto-animate" aria-hidden="true">#</a> Auto animate</h3><p><code>data-auto-animate</code> can be added on nearby slides to make an animation on unchanged elements.</p><hr><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><p>–</p><h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h3><p>By enabling <code>highlight</code> plugin, you can highlight code blocks.</p><p>You can use <code>[a-b|c-d]</code> syntax to highlight lines by steps.</p>',79),k={class:"code-enhance"},b=(0,t.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">b</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">c</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">x</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#DCDCAA;">c</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),y=(0,t.uE)('<p>–</p><h2 id="functions-2" tabindex="-1"><a class="header-anchor" href="#functions-2" aria-hidden="true">#</a> Functions</h2><h3 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h3><p>Press <code>Esc</code> or <code>O</code> to enter overview mode when the presentation is active</p><p>–</p><h2 id="functions-3" tabindex="-1"><a class="header-anchor" href="#functions-3" aria-hidden="true">#</a> Functions</h2><h3 id="full-screen" tabindex="-1"><a class="header-anchor" href="#full-screen" aria-hidden="true">#</a> Full Screen</h3><p>Press <code>F</code> or <code>F11</code> to enter fullscreen when the presentation is active</p><p>–</p><h2 id="functions-4" tabindex="-1"><a class="header-anchor" href="#functions-4" aria-hidden="true">#</a> Functions</h2><h3 id="zoom" tabindex="-1"><a class="header-anchor" href="#zoom" aria-hidden="true">#</a> Zoom</h3><p>Hold down the <code>alt</code> key (<code>ctrl</code> in Linux) and click on any element to zoom towards it.</p><p>Click again to zoom back out.</p><hr><h2 id="the-end" tabindex="-1"><a class="header-anchor" href="#the-end" aria-hidden="true">#</a> The End</h2><p>@slideend</p>',16),v={},_=(0,a(94598).Z)(v,[["render",function(e,n){const a=(0,t.up)("ExternalLinkIcon"),v=(0,t.up)("CodeCopyButton");return(0,t.wg)(),(0,t.iD)("div",null,[l,(0,t._)("p",null,[(0,t.Uk)("Here is paragraph with some "),s,(0,t.Uk)(", "),i,(0,t.Uk)(", "),r,(0,t.Uk)(" text and a "),(0,t._)("a",o,[(0,t.Uk)("link"),(0,t.Wm)(a)]),(0,t.Uk)(", and it can auto break itself so you dont need to worry the length.")]),d,(0,t._)("div",c,[h,(0,t.Wm)(v)]),u,m,p,g,x,f,(0,t._)("div",k,[b,(0,t.Wm)(v)]),y])}]])}}]);