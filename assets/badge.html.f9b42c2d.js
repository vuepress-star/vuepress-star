import{_ as d,r as o,o as s,c as a,a as l,b as e,d as t,f as u}from"./app.07530a6c.js";const c={},r=l("h1",{id:"徽章",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#徽章","aria-hidden":"true"},"#"),e(" 徽章")],-1),_=l("p",null,"在MarkDown中使用徽章",-1),p=l("h2",{id:"属性",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),e(" 属性")],-1),h=l("ul",null,[l("li",null,[l("p",null,[e("类型："),l("code",null,"string")])]),l("li",null,[l("p",null,"默认值：“”"),l("p",null,"徽章文字内容")])],-1),g=l("p",null,"type",-1),x=l("li",null,[l("p",null,[e("类型："),l("code",null,'"tip" | "wraning" | "danger"')])],-1),m=l("p",null,[e("默认值："),l("code",null,'"tip"')],-1),y=l("p",null,"徽章类型",-1),f=l("ul",null,[l("li",null,[l("p",null,[e("类型："),l("code",null,"string")]),l("p",null,"徽章颜色，CSS合法的颜色值")])],-1),b=l("p",null,"vertical",-1),v=l("li",null,[l("p",null,[e("类型："),l("code",null,'"top" | "middle" | "bottom" | undefined ')])],-1),B=l("p",null,[e("默认值："),l("code",null,'"undefined"')],-1),k=l("p",null,"徽章垂直方向的位置",-1),q=l("p",null,"is-dot",-1),w=l("ul",null,[l("li",null,[l("p",null,"类型：Boolean")]),l("li",null,[l("p",null,"默认值：true"),l("p",null,[e("不显示 "),l("code",null,"text"),e(" 内容，显示一个小圆点")])])],-1),C=l("h2",{id:"使用",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),e(" 使用")],-1),E=l("p",null,"在MarkDown中为标题或链接添加一些状态",-1),N={class:"code-enhance"},S=u(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;font-style:italic;">### Badge &lt;Badge text=&quot;Building&quot; type=&quot;warning&quot; /&gt; &lt;Badge text=&quot;Starzkg&quot; color=&quot;grey&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),V=l("h2",{id:"示例",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),e(" 示例")],-1);function D(M,z){const n=o("Badge"),i=o("CodeCopyButton");return s(),a("div",null,[r,_,p,l("p",null,[e("text "),t(n,{text:"必填",type:"danger"})]),h,g,l("ul",null,[x,l("li",null,[m,y,l("ul",null,[l("li",null,[t(n,{text:"tip",type:"tip"})]),l("li",null,[t(n,{text:"warn",type:"warning"})]),l("li",null,[t(n,{text:"error",type:"danger"})])])])]),l("p",null,[e("color "),t(n,{text:"可选"})]),f,b,l("ul",null,[v,l("li",null,[B,k,l("ul",null,[l("li",null,[e("顶部"),t(n,{text:"top",vertical:"top"})]),l("li",null,[e("居中"),t(n,{text:"middle",vertical:"middle"})]),l("li",null,[e("底部"),t(n,{text:"bottom",vertical:"bottom"})])])])]),q,w,l("p",null,[e("小红点 "),t(n,{type:"danger","is-dot":""})]),C,E,l("div",N,[S,t(i)]),V,l("ul",null,[l("li",null,[t(n,{text:"type",type:"warning"})]),l("li",null,[t(n,{text:"color",color:"grey"})])])])}const j=d(c,[["render",D],["__file","badge.html.vue"]]);export{j as default};
