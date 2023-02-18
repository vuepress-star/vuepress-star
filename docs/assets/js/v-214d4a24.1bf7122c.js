"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8871],{68504:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-214d4a24","path":"/zh/guide/markdown/feature/code-demo/react.html","title":"React Code Demo","lang":"zh-CN","frontmatter":{"title":"React Code Demo","icon":"react"},"excerpt":"","headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"git":{"createdTime":1636181996000,"updatedTime":1636181996000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":1}]},"copyright":"","filePathRelative":"zh/guide/markdown/feature/code-demo/react.md","content":"---\\ntitle: React Code Demo\\nicon: react\\n---\\n\\n## Syntax\\n\\n````md\\n::: demo [react] Optional title text\\n\\n```js\\n// your script, exporting your react component through `export default`\\n```\\n\\n```css\\n/* Your css content */\\n```\\n\\n```json\\n// Config (Optional)\\n```\\n\\n:::\\n````\\n\\n::: warning Attention\\n\\n- Babel must be loaded when using react to parse JSX, this is done by the plugin automaticaly\\n- You must export your component through `export default`\\n- We use \\"ShadowDOM\\" to make style isolation, and we already replace `document` with `shadowRoot`. If you want to access the page document, please visit `window.document`.\\n\\n:::\\n\\n## Demo\\n\\n::: demo [react] A function-based React Demo\\n\\n```js\\nexport default () => {\\n  const message = \\"very handsome\\";\\n\\n  const handler = () => {\\n    alert(message);\\n  };\\n\\n  return (\\n    <div className=\\"box\\">\\n      Mr.Hope is\\n      <span id=\\"very\\" onClick={handler}>\\n        {message}\\n      </span>\\n    </div>\\n  );\\n};\\n```\\n\\n```css\\n.box span {\\n  color: blue;\\n}\\n```\\n\\n:::\\n\\n:::: details Code\\n\\n````md\\n::: demo [react] A function-based React Demo\\n\\n```js\\nexport default () => {\\n  const message = \\"very handsome\\";\\n\\n  const handler = () => {\\n    alert(message);\\n  };\\n\\n  return (\\n    <div className=\\"box\\">\\n      Mr.Hope is\\n      <span id=\\"very\\" onClick={handler}>\\n        {message}\\n      </span>\\n    </div>\\n  );\\n};\\n```\\n\\n```css\\n.box span {\\n  color: blue;\\n}\\n```\\n\\n:::\\n````\\n\\n::::\\n\\n::: demo [react] A class-based React Demo\\n\\n```js\\nexport default class App extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = { message: \\"very handsome\\" };\\n  }\\n  render() {\\n    return (\\n      <div className=\\"box\\">\\n        Mr.Hope is\\n        <span id=\\"very\\" onClick={this.handler}>\\n          {this.state.message}\\n        </span>\\n      </div>\\n    );\\n  }\\n  handler() {\\n    alert(this.state.message);\\n  }\\n}\\n```\\n\\n```css\\n.box span {\\n  color: blue;\\n}\\n```\\n\\n:::\\n\\n:::: details Code\\n\\n````md\\n::: demo [react] A class-based React Demo\\n\\n```js\\nexport default class App extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = { message: \\"very handsome\\" };\\n  }\\n  render() {\\n    return (\\n      <div className=\\"box\\">\\n        Mr.Hope is\\n        <span id=\\"very\\" onClick={this.handler}>\\n          {this.state.message}\\n        </span>\\n      </div>\\n    );\\n  }\\n  handler() {\\n    alert(this.state.message);\\n  }\\n}\\n```\\n\\n```css\\n.box span {\\n  color: blue;\\n}\\n```\\n\\n:::\\n````\\n\\n::::\\n","icon":"react","author":[{"name":"Starzkg","email":"1600337300@qq.com"}],"top":false,"length":255,"words":255,"readingTime":0.85}')},35990:(s,n,a)=>{a.r(n),a.d(n,{default:()=>w});var l=a(1863);const e=(0,l._)("h2",{id:"syntax",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#"),(0,l.Uk)(" Syntax")],-1),p={class:"code-enhance"},o=(0,l.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: demo [</span><span style="color:#CE9178;">react</span><span style="color:#D4D4D4;">] Optional title text</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```js</span></span>\n<span class="line"><span style="color:#6A9955;">// your script, exporting your react component through `export default`</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```css</span></span>\n<span class="line"><span style="color:#6A9955;">/* Your css content */</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```json</span></span>\n<span class="line"><span style="color:#6A9955;">// Config (Optional)</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">:::</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),c=(0,l.uE)('<div class="custom-container warning"><p class="custom-container-title">Attention</p><ul><li>Babel must be loaded when using react to parse JSX, this is done by the plugin automaticaly</li><li>You must export your component through <code>export default</code></li><li>We use “ShadowDOM” to make style isolation, and we already replace <code>document</code> with <code>shadowRoot</code>. If you want to access the page document, please visit <code>window.document</code>.</li></ul></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><p>::: demo [react] A function-based React Demo</p>',3),t={class:"code-enhance"},r=(0,l.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">message</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;very handsome&quot;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">handler</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">alert</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">  };</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> (</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">className</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;box&quot;</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">      Mr.Hope is</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">span</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;very&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">onClick</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#9CDCFE;">handler</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">{</span><span style="color:#9CDCFE;">message</span><span style="color:#569CD6;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">span</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  );</span></span>\n<span class="line"><span style="color:#D4D4D4;">};</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),D={class:"code-enhance"},i=(0,l.uE)('<div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">.box</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">span</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">blue</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),d=(0,l._)("p",null,":::",-1),y={class:"custom-container details"},v=(0,l._)("summary",null,"Code",-1),u={class:"code-enhance"},m=(0,l.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: demo [</span><span style="color:#CE9178;">react</span><span style="color:#D4D4D4;">] A function-based React Demo</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```js</span></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">message</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;very handsome&quot;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">handler</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">alert</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">  };</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> (</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">className</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;box&quot;</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">      Mr.Hope is</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">span</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;very&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">onClick</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#9CDCFE;">handler</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">{</span><span style="color:#9CDCFE;">message</span><span style="color:#569CD6;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">span</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  );</span></span>\n<span class="line"><span style="color:#D4D4D4;">};</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```css</span></span>\n<span class="line"><span style="color:#D7BA7D;">.box</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">span</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">blue</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">:::</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),C=(0,l._)("p",null,"::: demo [react] A class-based React Demo",-1),b={class:"code-enhance"},h=(0,l.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">App</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">React</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Component</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">constructor</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">props</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">super</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">props</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">state</span><span style="color:#D4D4D4;"> = { </span><span style="color:#9CDCFE;">message:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;very handsome&quot;</span><span style="color:#D4D4D4;"> };</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">render</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> (</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">className</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;box&quot;</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">        Mr.Hope is</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">span</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;very&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">onClick</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">handler</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">{this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">state</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">message</span><span style="color:#569CD6;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">span</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    );</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">handler</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">alert</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">state</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),E={class:"code-enhance"},g=(0,l.uE)('<div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">.box</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">span</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">blue</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),x=(0,l._)("p",null,":::",-1),F={class:"custom-container details"},A=(0,l._)("summary",null,"Code",-1),k={class:"code-enhance"},f=(0,l.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: demo [</span><span style="color:#CE9178;">react</span><span style="color:#D4D4D4;">] A class-based React Demo</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```js</span></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">App</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">extends</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">React</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Component</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">constructor</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">props</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">super</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">props</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">state</span><span style="color:#D4D4D4;"> = { </span><span style="color:#9CDCFE;">message:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;very handsome&quot;</span><span style="color:#D4D4D4;"> };</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">render</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> (</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">className</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;box&quot;</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">        Mr.Hope is</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">span</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;very&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">onClick</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">handler</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">{this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">state</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">message</span><span style="color:#569CD6;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">span</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    );</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">handler</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">alert</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">state</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">```css</span></span>\n<span class="line"><span style="color:#D7BA7D;">.box</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">span</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">blue</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">:::</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),q={},w=(0,a(94598).Z)(q,[["render",function(s,n){const a=(0,l.up)("CodeCopyButton");return(0,l.wg)(),(0,l.iD)("div",null,[e,(0,l._)("div",p,[o,(0,l.Wm)(a)]),c,(0,l._)("div",t,[r,(0,l.Wm)(a)]),(0,l._)("div",D,[i,(0,l.Wm)(a)]),d,(0,l._)("details",y,[v,(0,l._)("div",u,[m,(0,l.Wm)(a)])]),C,(0,l._)("div",b,[h,(0,l.Wm)(a)]),(0,l._)("div",E,[g,(0,l.Wm)(a)]),x,(0,l._)("details",F,[A,(0,l._)("div",k,[f,(0,l.Wm)(a)])])])}]])}}]);