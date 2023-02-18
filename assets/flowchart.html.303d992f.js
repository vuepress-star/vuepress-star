import{_ as t,r as i,o as d,c as p,a as s,b as e,d as n,e as r,f as a}from"./app.07530a6c.js";const D={},u=s("h1",{id:"flowchart",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#flowchart","aria-hidden":"true"},"#"),e(" FlowChart")],-1),v=s("p",null,"让你 VuePress 站点中的 Markdown 文件支持 FlowChart 图表。",-1),h={href:"https://github.com/adrai/flowchart.js",target:"_blank",rel:"noopener noreferrer"},g=s("h2",{id:"文档",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),e(" 文档")],-1),b={href:"http://flowchart.js.org/",target:"_blank",rel:"noopener noreferrer"},m=s("h2",{id:"语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#语法","aria-hidden":"true"},"#"),e(" 语法")],-1),E={class:"code-enhance"},y=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">&lt;!-- ↓ :preset 是可选的 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`flow:preset</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">&lt;!-- 放置你的流程图代码 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=s("p",null,"目前可用的预设:",-1),A=s("ul",null,[s("li",null,[s("code",null,"vue"),e(" (默认)")]),s("li",null,[s("code",null,"ant")]),s("li",null,[s("code",null,"pie")])],-1),w=s("h2",{id:"演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),e(" 演示")],-1),f={class:"code-enhance"},k=a(`<div class="language-flow line-numbers-mode" data-ext="flow"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">st=&gt;start: 开始|past:&gt;http://www.google.com[blank]</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束|future:&gt;http://www.google.com</span></span>
<span class="line"><span style="color:#D4D4D4;">op1=&gt;operation: 操作1|past</span></span>
<span class="line"><span style="color:#D4D4D4;">op2=&gt;operation: 操作2|current</span></span>
<span class="line"><span style="color:#D4D4D4;">sub1=&gt;subroutine: 子程序|invalid</span></span>
<span class="line"><span style="color:#D4D4D4;">cond=&gt;condition: 是/否?|approved:&gt;http://www.google.com</span></span>
<span class="line"><span style="color:#D4D4D4;">c2=&gt;condition: 判断2|rejected</span></span>
<span class="line"><span style="color:#D4D4D4;">io=&gt;inputoutput: 进行反思...|future</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">st-&gt;op1(right)-&gt;cond</span></span>
<span class="line"><span style="color:#D4D4D4;">cond(yes, right)-&gt;c2</span></span>
<span class="line"><span style="color:#D4D4D4;">cond(no)-&gt;sub1(left)-&gt;op1</span></span>
<span class="line"><span style="color:#D4D4D4;">c2(yes)-&gt;io-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">c2(no)-&gt;op2-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),B={class:"code-enhance"},x=a(`<div class="language-flow line-numbers-mode" data-ext="flow"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">st=&gt;start: 开始|past:&gt;http://www.google.com[blank]</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束|future:&gt;http://www.google.com</span></span>
<span class="line"><span style="color:#D4D4D4;">op1=&gt;operation: 操作1|past</span></span>
<span class="line"><span style="color:#D4D4D4;">op2=&gt;operation: 操作2|current</span></span>
<span class="line"><span style="color:#D4D4D4;">sub1=&gt;subroutine: 子程序|invalid</span></span>
<span class="line"><span style="color:#D4D4D4;">cond=&gt;condition: 是/否?|approved:&gt;http://www.google.com</span></span>
<span class="line"><span style="color:#D4D4D4;">c2=&gt;condition: 判断2|rejected</span></span>
<span class="line"><span style="color:#D4D4D4;">io=&gt;inputoutput: 进行反思...|future</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">st-&gt;op1(right)-&gt;cond</span></span>
<span class="line"><span style="color:#D4D4D4;">cond(yes, right)-&gt;c2</span></span>
<span class="line"><span style="color:#D4D4D4;">cond(no)-&gt;sub1(left)-&gt;op1</span></span>
<span class="line"><span style="color:#D4D4D4;">c2(yes)-&gt;io-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">c2(no)-&gt;op2-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C={class:"code-enhance"},F=a(`<div class="language-flow line-numbers-mode" data-ext="flow"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">st=&gt;start: 开始|past:&gt;http://www.google.com[blank]</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束|future:&gt;http://www.google.com</span></span>
<span class="line"><span style="color:#D4D4D4;">op1=&gt;operation: 操作1|past</span></span>
<span class="line"><span style="color:#D4D4D4;">op2=&gt;operation: 操作2|current</span></span>
<span class="line"><span style="color:#D4D4D4;">sub1=&gt;subroutine: 子程序|invalid</span></span>
<span class="line"><span style="color:#D4D4D4;">cond=&gt;condition: 是/否?|approved:&gt;http://www.google.com</span></span>
<span class="line"><span style="color:#D4D4D4;">c2=&gt;condition: 判断2|rejected</span></span>
<span class="line"><span style="color:#D4D4D4;">io=&gt;inputoutput: 进行反思...|future</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">st-&gt;op1(right)-&gt;cond</span></span>
<span class="line"><span style="color:#D4D4D4;">cond(yes, right)-&gt;c2</span></span>
<span class="line"><span style="color:#D4D4D4;">cond(no)-&gt;sub1(left)-&gt;op1</span></span>
<span class="line"><span style="color:#D4D4D4;">c2(yes)-&gt;io-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">c2(no)-&gt;op2-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),V={class:"code-enhance"},q=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`flow</span></span>
<span class="line"><span style="color:#D4D4D4;">st=&gt;start: 开始|past:&gt;http://www.google.com[blank]</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束|future:&gt;http://www.google.com</span></span>
<span class="line"><span style="color:#D4D4D4;">op1=&gt;operation: 操作1|past</span></span>
<span class="line"><span style="color:#D4D4D4;">op2=&gt;operation: 操作2|current</span></span>
<span class="line"><span style="color:#D4D4D4;">sub1=&gt;subroutine: 子程序|invalid</span></span>
<span class="line"><span style="color:#D4D4D4;">cond=&gt;condition: 是/否?|approved:&gt;http://www.google.com</span></span>
<span class="line"><span style="color:#D4D4D4;">c2=&gt;condition: 判断2|rejected</span></span>
<span class="line"><span style="color:#D4D4D4;">io=&gt;inputoutput: 进行反思...|future</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">st-&gt;op1(right)-&gt;cond</span></span>
<span class="line"><span style="color:#D4D4D4;">cond(yes, right)-&gt;c2</span></span>
<span class="line"><span style="color:#D4D4D4;">cond(no)-&gt;sub1(left)-&gt;op1</span></span>
<span class="line"><span style="color:#D4D4D4;">c2(yes)-&gt;io-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">c2(no)-&gt;op2-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),N=a('<h2 id="流程图介绍" tabindex="-1"><a class="header-anchor" href="#流程图介绍" aria-hidden="true">#</a> 流程图介绍</h2><h3 id="节点类型" tabindex="-1"><a class="header-anchor" href="#节点类型" aria-hidden="true">#</a> 节点类型</h3><p>定义了结点形状</p><h4 id="开始-结束" tabindex="-1"><a class="header-anchor" href="#开始-结束" aria-hidden="true">#</a> 开始 &amp; 结束</h4><p>被用于流程开始的第一个节点。默认文字为 <code>Start</code>.</p><ul><li><code>[Variable]-&gt;start: [Text]</code></li></ul><p>被用于流程结束的最后一个节点。默认文字为 <code>End</code>.</p><ul><li><code>[Variable]-&gt;end: [Text]</code></li></ul>',8),j={class:"code-enhance"},T=a('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">```flow</span></span>\n<span class="line"><span style="color:#D4D4D4;">st=&gt;start: 开始</span></span>\n<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">st-&gt;e</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),P={class:"code-enhance"},R=a(`<div class="language-flow line-numbers-mode" data-ext="flow"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">st=&gt;start: 开始</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">st-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S=s("h4",{id:"操作",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#操作","aria-hidden":"true"},"#"),e(" 操作")],-1),I=s("ul",null,[s("li",null,[s("code",null,"[Variable]->operation: [Text]")])],-1),L={class:"code-enhance"},M=a('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">```flow</span></span>\n<span class="line"><span style="color:#D4D4D4;">process=&gt;operation: 操作</span></span>\n<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">process-&gt;e</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),$={class:"code-enhance"},z=a(`<div class="language-flow line-numbers-mode" data-ext="flow"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">process=&gt;operation: 操作</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">process-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),G=s("h4",{id:"输入输出",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#输入输出","aria-hidden":"true"},"#"),e(" 输入输出")],-1),H=s("ul",null,[s("li",null,[s("code",null,"[Variable]->inputoutput: [Text]")])],-1),J={class:"code-enhance"},K=a('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">```flow</span></span>\n<span class="line"><span style="color:#D4D4D4;">process=&gt;inputoutput: 输入输出</span></span>\n<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">process-&gt;e</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),O={class:"code-enhance"},Q=a(`<div class="language-flow line-numbers-mode" data-ext="flow"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">process=&gt;inputoutput: 输入输出</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">process-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),U=s("h4",{id:"子程序",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#子程序","aria-hidden":"true"},"#"),e(" 子程序")],-1),W=s("ul",null,[s("li",null,[s("code",null,"[Variable]->subroutine: [Text]")])],-1),X={class:"code-enhance"},Y=a('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">```flow</span></span>\n<span class="line"><span style="color:#D4D4D4;">process=&gt;subroutine: 子程序</span></span>\n<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">process-&gt;e</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),Z={class:"code-enhance"},ss=a(`<div class="language-flow line-numbers-mode" data-ext="flow"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">process=&gt;subroutine: 子程序</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">process-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ns=s("h4",{id:"条件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#条件","aria-hidden":"true"},"#"),e(" 条件")],-1),es=s("ul",null,[s("li",null,[s("p",null,[s("code",null,"[Variable]->condition: [Text]")])]),s("li",null,[s("p",null,[s("code",null,"[Variable]([yesText])->[Position]")])]),s("li",null,[s("p",null,[s("code",null,"[Variable]([noText])->[Position]")])])],-1),as={class:"code-enhance"},ls=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`flow</span></span>
<span class="line"><span style="color:#D4D4D4;">cond=&gt;condition: 是否执行操作?</span></span>
<span class="line"><span style="color:#D4D4D4;">process=&gt;operation: 操作</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">cond(yes)-&gt;process-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">cond(no)-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),os={class:"code-enhance"},is=a(`<div class="language-flow line-numbers-mode" data-ext="flow"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">cond=&gt;condition: 是否执行操作?</span></span>
<span class="line"><span style="color:#D4D4D4;">process=&gt;operation: 操作</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">cond(yes)-&gt;process-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">cond(no)-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),cs=s("h4",{id:"平行",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#平行","aria-hidden":"true"},"#"),e(" 平行")],-1),ts=s("p",null,"定义同时开始的多个程序。",-1),ds=s("ul",null,[s("li",null,[s("code",null,"[Variable]->parallel: [Text]")]),s("li",null,[s("code",null,"[Variable](path1, direction)->[Position]")]),s("li",null,[s("code",null,"[Variable](path1, direction)->[Position]")])],-1),ps={class:"code-enhance"},rs=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`flow</span></span>
<span class="line"><span style="color:#D4D4D4;">para=&gt;parallel: 平行任务</span></span>
<span class="line"><span style="color:#D4D4D4;">process=&gt;operation: 操作</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">para(path1, bottom)-&gt;process-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">para(path2)-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ds={class:"code-enhance"},us=a(`<div class="language-flow line-numbers-mode" data-ext="flow"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">para=&gt;parallel: 平行任务</span></span>
<span class="line"><span style="color:#D4D4D4;">process=&gt;operation: 操作</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: 结束</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">para(path1, bottom)-&gt;process-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;">para(path2)-&gt;e</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),vs=s("h3",{id:"链接",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#链接","aria-hidden":"true"},"#"),e(" 链接")],-1),hs=s("p",null,[e("连接方式在流程图中节点定义后描述，使用 "),s("code",null,"->"),e(" 指定一个节点之间的链接，例如 "),s("code",null,"nodeVar1->nodeVar2->nodeVar3")],-1),gs=s("p",null,"流程可以被分开:",-1),bs={class:"code-enhance"},ms=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">nodeVar1-&gt;nodeVar2</span></span>
<span class="line"><span style="color:#D4D4D4;">nodeVar2-&gt;nodeVar3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Es=a('<p>连接格式定义如下:</p><p><code>&lt;node variable name&gt;[(&lt;specificaion1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;[[(&lt;specificaion1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;]</code></p><p>在 <code>[]</code> 中的项是可选的。</p><h3 id="方向" tabindex="-1"><a class="header-anchor" href="#方向" aria-hidden="true">#</a> 方向</h3><p>以下方向可用，并定义了连接将从节点离开的方向。如果指定符不止一个，则总是最后一个。所有节点都有默认方向，这使其成为可选规范。<code>&lt;direction&gt;</code> 的可选值为:</p><ul><li><code>left</code></li><li><code>right</code></li><li><code>top</code></li><li><code>bottom</code></li></ul><h3 id="节点特定说明符" tabindex="-1"><a class="header-anchor" href="#节点特定说明符" aria-hidden="true">#</a> 节点特定说明符</h3><p>每个节点变量都有可选的说明符，例如方向，有些变量有特殊的说明符，具体取决于下面定义的节点类型。在 <code>()</code> 中的变量名后添加说明符，并用<code>,</code> 分隔，例如 <code>nodeVar (spec1，spec2)</code>。</p>',8),ys=a("<li><p><strong>start</strong><strong>operation</strong><strong>inputoutput</strong><strong>subroutine</strong></p><p>可选方向</p><p><code>startVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>operationVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>inputoutputVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>subroutineVar(&lt;direction&gt;)-&gt;nextNode</code></p></li>",1),_s=s("p",null,[s("strong",null,"condition")],-1),As=s("p",null,[e("必需指定 "),s("code",null,"yes"),e(" or "),s("code",null,"no")],-1),ws=s("p",null,"可选方向",-1),fs={class:"code-enhance"},ks=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">conditionalVar(yes, &lt;direction&gt;)-&gt;nextNode1</span></span>
<span class="line"><span style="color:#D4D4D4;">conditionalVar(no, &lt;direction&gt;)-&gt;nextNode2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Bs=s("p",null,[s("strong",null,"parallel")],-1),xs=s("p",null,[e("必需指定路径方向 "),s("code",null,"path1"),e(", "),s("code",null,"path2"),e(", 或 "),s("code",null,"path3")],-1),Cs=s("p",null,"可选方向",-1),Fs={class:"code-enhance"},Vs=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">parallelVar(path1, &lt;direction&gt;)-&gt;nextNode1</span></span>
<span class="line"><span style="color:#D4D4D4;">parallelVar(path2, &lt;direction&gt;)-&gt;nextNode2</span></span>
<span class="line"><span style="color:#D4D4D4;">parallelVar(path3, &lt;direction&gt;)-&gt;nextNode3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),qs=s("h3",{id:"网址",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#网址","aria-hidden":"true"},"#"),e(" 网址")],-1),Ns=s("p",null,[e("可以使用 "),s("code",null,":>"),e(" 运算符将外部链接添加到节点。")],-1),js=s("p",null,[s("code",null,"[blank]"),e(" 指定打开新的页面")],-1),Ts={class:"code-enhance"},Ps=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">st=&gt;start: Start:&gt;http://www.google.com[</span><span style="color:#CE9178;">blank</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">e=&gt;end: End:&gt;http://www.yahoo.com</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Rs=a('<h3 id="建议" tabindex="-1"><a class="header-anchor" href="#建议" aria-hidden="true">#</a> 建议</h3><p>文本中可能不应该使用的符号: <code>=&gt;</code>、<code>-&gt;</code>、 <code>:&gt;</code>、<code>|</code>、<code>@&gt;</code> 和 <code>:$</code></p><p>如果要在流程图中强调特定路径，则可以另外定义它，如下所示:</p>',3),Ss={class:"code-enhance"},Is=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">st@&gt;op1({&quot;stroke&quot;:&quot;Red&quot;})@&gt;cond({&quot;stroke&quot;:&quot;Red&quot;,&quot;stroke-width&quot;:6,&quot;arrow-end&quot;:&quot;classic-wide-long&quot;})@&gt;c2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;op2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;e({&quot;stroke&quot;:&quot;Red&quot;})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1);function Ls(Ms,$s){const c=i("ExternalLinkIcon"),l=i("CodeCopyButton"),o=i("FlowChart");return d(),p("div",null,[u,v,s("p",null,[e("使用 "),s("a",h,[e("flowchart.js"),n(c)]),e(" 提供相应功能。")]),r(" more "),g,s("p",null,[e("相关详情，详见 "),s("a",b,[e("flowchart 文档"),n(c)]),e(".")]),m,s("div",E,[y,n(l)]),_,A,w,s("div",f,[n(o,{id:"flowchart-382ee1a5",code:"st%3D%3Estart%3A%20%E5%BC%80%E5%A7%8B%7Cpast%3A%3Ehttp%3A%2F%2Fwww.google.com%5Bblank%5D%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%7Cfuture%3A%3Ehttp%3A%2F%2Fwww.google.com%0Aop1%3D%3Eoperation%3A%20%E6%93%8D%E4%BD%9C1%7Cpast%0Aop2%3D%3Eoperation%3A%20%E6%93%8D%E4%BD%9C2%7Ccurrent%0Asub1%3D%3Esubroutine%3A%20%E5%AD%90%E7%A8%8B%E5%BA%8F%7Cinvalid%0Acond%3D%3Econdition%3A%20%E6%98%AF%2F%E5%90%A6%3F%7Capproved%3A%3Ehttp%3A%2F%2Fwww.google.com%0Ac2%3D%3Econdition%3A%20%E5%88%A4%E6%96%AD2%7Crejected%0Aio%3D%3Einputoutput%3A%20%E8%BF%9B%E8%A1%8C%E5%8F%8D%E6%80%9D...%7Cfuture%0A%0Ast-%3Eop1(right)-%3Econd%0Acond(yes%2C%20right)-%3Ec2%0Acond(no)-%3Esub1(left)-%3Eop1%0Ac2(yes)-%3Eio-%3Ee%0Ac2(no)-%3Eop2-%3Ee%0A",preset:"vue"}),k,n(l)]),s("div",B,[n(o,{id:"flowchart-382ee1a6",code:"st%3D%3Estart%3A%20%E5%BC%80%E5%A7%8B%7Cpast%3A%3Ehttp%3A%2F%2Fwww.google.com%5Bblank%5D%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%7Cfuture%3A%3Ehttp%3A%2F%2Fwww.google.com%0Aop1%3D%3Eoperation%3A%20%E6%93%8D%E4%BD%9C1%7Cpast%0Aop2%3D%3Eoperation%3A%20%E6%93%8D%E4%BD%9C2%7Ccurrent%0Asub1%3D%3Esubroutine%3A%20%E5%AD%90%E7%A8%8B%E5%BA%8F%7Cinvalid%0Acond%3D%3Econdition%3A%20%E6%98%AF%2F%E5%90%A6%3F%7Capproved%3A%3Ehttp%3A%2F%2Fwww.google.com%0Ac2%3D%3Econdition%3A%20%E5%88%A4%E6%96%AD2%7Crejected%0Aio%3D%3Einputoutput%3A%20%E8%BF%9B%E8%A1%8C%E5%8F%8D%E6%80%9D...%7Cfuture%0A%0Ast-%3Eop1(right)-%3Econd%0Acond(yes%2C%20right)-%3Ec2%0Acond(no)-%3Esub1(left)-%3Eop1%0Ac2(yes)-%3Eio-%3Ee%0Ac2(no)-%3Eop2-%3Ee%0A",preset:"ant"}),x,n(l)]),s("div",C,[n(o,{id:"flowchart-382ee1a7",code:"st%3D%3Estart%3A%20%E5%BC%80%E5%A7%8B%7Cpast%3A%3Ehttp%3A%2F%2Fwww.google.com%5Bblank%5D%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%7Cfuture%3A%3Ehttp%3A%2F%2Fwww.google.com%0Aop1%3D%3Eoperation%3A%20%E6%93%8D%E4%BD%9C1%7Cpast%0Aop2%3D%3Eoperation%3A%20%E6%93%8D%E4%BD%9C2%7Ccurrent%0Asub1%3D%3Esubroutine%3A%20%E5%AD%90%E7%A8%8B%E5%BA%8F%7Cinvalid%0Acond%3D%3Econdition%3A%20%E6%98%AF%2F%E5%90%A6%3F%7Capproved%3A%3Ehttp%3A%2F%2Fwww.google.com%0Ac2%3D%3Econdition%3A%20%E5%88%A4%E6%96%AD2%7Crejected%0Aio%3D%3Einputoutput%3A%20%E8%BF%9B%E8%A1%8C%E5%8F%8D%E6%80%9D...%7Cfuture%0A%0Ast-%3Eop1(right)-%3Econd%0Acond(yes%2C%20right)-%3Ec2%0Acond(no)-%3Esub1(left)-%3Eop1%0Ac2(yes)-%3Eio-%3Ee%0Ac2(no)-%3Eop2-%3Ee%0A",preset:"pie"}),F,n(l)]),s("div",V,[q,n(l)]),N,s("div",j,[T,n(l)]),s("div",P,[n(o,{id:"flowchart-382ee21e",code:"st%3D%3Estart%3A%20%E5%BC%80%E5%A7%8B%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%0A%0Ast-%3Ee%0A",preset:"vue"}),R,n(l)]),S,I,s("div",L,[M,n(l)]),s("div",$,[n(o,{id:"flowchart-382ee23f",code:"process%3D%3Eoperation%3A%20%E6%93%8D%E4%BD%9C%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%0A%0Aprocess-%3Ee%0A",preset:"vue"}),z,n(l)]),G,H,s("div",J,[K,n(l)]),s("div",O,[n(o,{id:"flowchart-64a570e2",code:"process%3D%3Einputoutput%3A%20%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%0A%0Aprocess-%3Ee%0A",preset:"vue"}),Q,n(l)]),U,W,s("div",X,[Y,n(l)]),s("div",Z,[n(o,{id:"flowchart-64a570a0",code:"process%3D%3Esubroutine%3A%20%E5%AD%90%E7%A8%8B%E5%BA%8F%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%0A%0Aprocess-%3Ee%0A",preset:"vue"}),ss,n(l)]),ns,es,s("div",as,[ls,n(l)]),s("div",os,[n(o,{id:"flowchart-64a57020",code:"cond%3D%3Econdition%3A%20%E6%98%AF%E5%90%A6%E6%89%A7%E8%A1%8C%E6%93%8D%E4%BD%9C%3F%0Aprocess%3D%3Eoperation%3A%20%E6%93%8D%E4%BD%9C%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%0A%0Acond(yes)-%3Eprocess-%3Ee%0Acond(no)-%3Ee%0A",preset:"vue"}),is,n(l)]),cs,ts,ds,s("div",ps,[rs,n(l)]),s("div",Ds,[n(o,{id:"flowchart-64a56f70",code:"para%3D%3Eparallel%3A%20%E5%B9%B3%E8%A1%8C%E4%BB%BB%E5%8A%A1%0Aprocess%3D%3Eoperation%3A%20%E6%93%8D%E4%BD%9C%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%0A%0Apara(path1%2C%20bottom)-%3Eprocess-%3Ee%0Apara(path2)-%3Ee%0A",preset:"vue"}),us,n(l)]),vs,hs,gs,s("div",bs,[ms,n(l)]),Es,s("ul",null,[ys,s("li",null,[_s,As,ws,s("div",fs,[ks,n(l)])]),s("li",null,[Bs,xs,Cs,s("div",Fs,[Vs,n(l)])])]),qs,Ns,js,s("div",Ts,[Ps,n(l)]),Rs,s("div",Ss,[Is,n(l)])])}const Gs=t(D,[["render",Ls],["__file","flowchart.html.vue"]]);export{Gs as default};
