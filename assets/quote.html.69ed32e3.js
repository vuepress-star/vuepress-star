import{_ as o,r as t,o as l,c as i,e as c,a as s,d as n,b as d,f as e}from"./app.07530a6c.js";const r={},p=s("h1",{id:"引用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#引用","aria-hidden":"true"},"#"),d(" 引用")],-1),h=s("p",null,"让你的 VuePress 站点中的 Markdown 文件支持引用。",-1),u=e('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Vuepress Star 并没有对此功能增强。</p></div><h2 id="引用文本" tabindex="-1"><a class="header-anchor" href="#引用文本" aria-hidden="true">#</a> 引用文本</h2><p>您可以使用 <code>&gt;</code> 引用文本。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p><strong>输入</strong></p>',5),m={class:"code-enhance"},D=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">&gt;</span><span style="color:#D4D4D4;"> Blockquotes can also be nested...</span></span>
<span class="line"><span style="color:#6A9955;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">&gt;</span><span style="color:#D4D4D4;"> ...by using additional greater-than signs right next to each other...</span></span>
<span class="line"><span style="color:#6A9955;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">&gt;</span><span style="color:#D4D4D4;"> ...or with spaces between arrows.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=e('<p><strong>输出</strong></p><blockquote><p>Blockquotes can also be nested…</p><blockquote><p>…by using additional greater-than signs right next to each other…</p><blockquote><p>…or with spaces between arrows.</p></blockquote></blockquote></blockquote><h2 id="引用代码" tabindex="-1"><a class="header-anchor" href="#引用代码" aria-hidden="true">#</a> 引用代码</h2><p>您可以在带有单个反引号的句子中调用代码或命令。 反引号内的文本不会被格式化。</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><p><strong>输入</strong></p>',6),b={class:"code-enhance"},g=e('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Use </span><span style="color:#CE9178;">`git status`</span><span style="color:#D4D4D4;"> to list all new or modified files that haven&#39;t yet been committed.</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),_=e('<p><strong>输出</strong></p><h2 id="引用代码块" tabindex="-1"><a class="header-anchor" href="#引用代码块" aria-hidden="true">#</a> 引用代码块</h2><p>Use <code>git status</code> to list all new or modified files that haven’t yet been committed.</p><p>要将代码或文本格式化为自己独特的块，请使用三重反引号。</p><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3><p><strong>输入</strong></p>',6),y={class:"code-enhance"},k=e('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Some basic Git commands are:</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"><span style="color:#D4D4D4;">git status</span></span>\n<span class="line"><span style="color:#D4D4D4;">git add</span></span>\n<span class="line"><span style="color:#D4D4D4;">git commit</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),f=s("p",null,[s("strong",null,"输出")],-1),x=s("p",null,"Some basic Git commands are:",-1),E={class:"code-enhance"},w=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git status</span></span>
<span class="line"><span style="color:#D4D4D4;">git add</span></span>
<span class="line"><span style="color:#D4D4D4;">git commit</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,"如果需要嵌套代码块，需要使用四重反引号。")],-1);function A(B,C){const a=t("CodeCopyButton");return l(),i("div",null,[p,h,c(" more "),u,s("div",m,[D,n(a)]),v,s("div",b,[g,n(a)]),_,s("div",y,[k,n(a)]),f,x,s("div",E,[w,n(a)]),q])}const N=o(r,[["render",A],["__file","quote.html.vue"]]);export{N as default};
