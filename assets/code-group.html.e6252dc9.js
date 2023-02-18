import{_ as p,r as a,o as u,c as h,a as e,d as n,w as o,b as s,f as d}from"./app.07530a6c.js";const m={},_=e("h1",{id:"codegroup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#codegroup","aria-hidden":"true"},"#"),s(" CodeGroup")],-1),v=e("p",null,"在MarkDown中可用的代码块分组",-1),D=e("h2",{id:"详情",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#详情","aria-hidden":"true"},"#"),s(" 详情")],-1),b=e("h2",{id:"codegroupitem",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#codegroupitem","aria-hidden":"true"},"#"),s(" CodeGroupItem")],-1),g=e("p",null,"在MarkDown中可用的代码块分组项",-1),C=e("h2",{id:"属性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),s(" 属性")],-1),y=d('<ul><li>类型： <code>string</code></li></ul><p>active</p><ul><li>类型： <code>boolean</code></li><li>默认值： <code>false</code></li></ul><h2 id="详情-1" tabindex="-1"><a class="header-anchor" href="#详情-1" aria-hidden="true">#</a> 详情</h2><p>该组件必须放置在 <a href="#codegroup">CodeGroup</a> 组件的内部。</p><p>可以通过 <code>active</code> Prop 来设置初始激活的元素。如果不设置，默认激活第一个元素。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>请使用 <code>&lt;CodeGroup /&gt;</code> 包裹 <code>&lt;CodeGroupItem /&gt;</code>。</p><p>对于每个 <code>&lt;CodeGroupItem /&gt;</code>，你需要设置 <code>title</code> 属性作为选项卡的标题，并仅在选项卡内放置一个代码块。你还可以在其中一个 <code>&lt;CodeGroupItem /&gt;</code> 上设置 active 属性使其默认激活。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>你需要在每个 <code>&lt;CodeGroupItem /&gt;</code> 之间放置一个空行，否则 VuePress 可能无法正确的解析它们。</p></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>输入：</p>',12),f={class:"code-enhance"},G=d('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;CodeGroup&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">&lt;CodeGroupItem title=&quot;yarn&quot;&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">```bash</span></span>\n<span class="line"><span style="color:#D4D4D4;">  yarn add -D vuepress-theme-star</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"><span style="color:#D4D4D4;">&lt;/CodeGroupItem&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">&lt;CodeGroupItem title=&quot;npm&quot; active&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">```bash</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm i -D vuepress-theme-star</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"><span style="color:#D4D4D4;">&lt;/CodeGroupItem&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">&lt;/CodeGroup&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),x=e("p",null,"输出：",-1),k={class:"code-enhance"},I=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"yarn add -D vuepress-theme-star")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E={class:"code-enhance"},B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"npm i -D vuepress-theme-star")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1);function w(V,q){const c=a("RouterLink"),i=a("Badge"),t=a("CodeCopyButton"),l=a("CodeGroupItem"),r=a("CodeGroup");return u(),h("div",null,[_,v,D,e("p",null,[n(c,{to:"/zh/guide/component/components.html#codegroupitem"},{default:o(()=>[s("CodeGroupItem")]),_:1}),s(" 组件的Wrapper")]),b,g,C,e("p",null,[s("title "),n(i,{text:"必填",type:"danger"})]),y,e("div",f,[G,n(t)]),x,n(r,null,{default:o(()=>[n(l,{title:"yarn"},{default:o(()=>[e("div",k,[I,n(t)])]),_:1}),n(l,{title:"npm",active:""},{default:o(()=>[e("div",E,[B,n(t)])]),_:1})]),_:1})])}const P=p(m,[["render",w],["__file","code-group.html.vue"]]);export{P as default};
