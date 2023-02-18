const n=JSON.parse('{"key":"v-fa5c09d8","path":"/zh/guide/markdown/advanced/code-demo/","title":"代码演示","lang":"zh-CN","frontmatter":{"title":"代码演示","icon":"code","categories":["Markdown"],"tags":["Markdown","代码演示"],"head":[["meta",{"name":"og:url","content":"/zh/guide/markdown/advanced/code-demo/"}],["meta",{"name":"og:site_name","content":"vuepress-theme-star"}],["meta",{"name":"og:title","content":"代码演示"}],["meta",{"name":"og:description","content":""}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:image","content":""}],["meta",{"name":"og:updated_time","content":"2022-10-22T08:40:46.000Z"}],["meta",{"name":"og:locale","content":"zh-CN"}],["meta",{"name":"og:locale:alternate","content":"en-US"}],["meta",{"name":"og:locale:alternate","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"vuepress-theme-star"}],["meta",{"name":"article:author","content":""}],["meta",{"name":"article:tag","content":"Markdown"}],["meta",{"name":"article:tag","content":"代码演示"}],["meta",{"name":"article:published_time","content":""}],["meta",{"name":"article:modified_time","content":"2022-10-22T08:40:46.000Z"}]]},"excerpt":"<h1 id=\\"代码演示\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#代码演示\\" aria-hidden=\\"true\\">#</a> 代码演示</h1>\\n<p>让你的 VuePress 站点中的 Markdown 文件支持代码演示。</p>\\n","headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[{"level":3,"title":"(置空）","slug":"置空","link":"#置空","children":[]},{"level":3,"title":"Vue","slug":"vue","link":"#vue","children":[]},{"level":3,"title":"React","slug":"react","link":"#react","children":[]},{"level":3,"title":"可用的语言","slug":"可用的语言","link":"#可用的语言","children":[]}]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1664110816000,"updatedTime":1666428046000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com","commits":4}]},"copyright":"Copyright © 2021-present Starzkg","filePathRelative":"zh/guide/markdown/advanced/code-demo/README.md","content":"---\\ntitle: 代码演示\\nicon: code\\ncategories:\\n - Markdown\\ntags:\\n - Markdown\\n - 代码演示\\n---\\n# 代码演示\\n让你的 VuePress 站点中的 Markdown 文件支持代码演示。\\n\\n<!-- more -->\\n\\n## 语法\\n\\n请使用以下语法:\\n\\n````md\\n::: code-demo[:type] 可选的标题文字\\n\\n```html\\n<!-- ↑ 使用可用的语言 -->\\n<!-- 在代码块中放置你对应语言的代码，一个语言不能出现多个块 -->\\n<!-- 你可以有多个代码块，并且 html, js, css 都是视情况可选的 -->\\n```\\n\\n```json\\n// json block 作为插件配置存放处\\n{\\n  // 放置你的配置 (optional)\\n}\\n```\\n\\n:::\\n````\\n\\n::: tip\\n\\nJSON 块是可选的，可用的配置详见 [配置](../../config/plugins/md-enhance.md#demo)。\\n\\n:::\\n\\n该插件支持三种类型:\\n\\n- (置空）\\n- vue\\n- react\\n\\n### (置空）\\n\\n````md\\n::: code-demo 可选的标题文字\\n\\n```html\\n<!-- html code -->\\n```\\n\\n```js\\n// js code\\n```\\n\\n```css\\n/* css code */\\n```\\n\\n```json\\n// 配置 (可选)\\n{\\n  \\"jsLib\\": [\\n    ...\\n  ],\\n  \\"cssLib\\":[\\n    ...\\n  ]\\n}\\n```\\n\\n:::\\n````\\n\\n### Vue\\n\\n````md\\n::: code-demo:vue 可选的标题文字\\n\\n```vue\\n<!-- ↑ 你也可以使用 html -->\\n<template>\\n  <!-- vue 模板 -->\\n</template>\\n<script>\\nexport default {\\n  // vue 组件\\n};\\n<\/script>\\n<style>\\n/* css 代码 */\\n</style>\\n```\\n\\n```json\\n// 配置 (可选)\\n```\\n\\n:::\\n````\\n\\n### React\\n\\n````md\\n::: code-demo:react 可选的标题文字\\n\\n```js\\nexport default class App extends React.Component {\\n  // react 组件\\n}\\n```\\n\\n```css\\n/* 你的 css 内容 */\\n```\\n\\n```json\\n// 配置 (可选)\\n```\\n\\n:::\\n````\\n\\n### 可用的语言\\n\\n你可以在演示块中使用不同语言。\\n\\n当你设置一些不能在浏览器上直接运行的语言时，由于插件无法解析它们，因此网页演示将被禁用。插件只显示代码。同时提供一个 \\"在 CodePen 中打开\\" 按钮允许用户直接在 CodePen 打开并浏览代码。\\n\\n可用的 HTML 语言:\\n\\n- `\\"html\\"` (默认)\\n- `\\"slim\\"`\\n- `\\"haml\\"`\\n- `\\"markdown\\"`\\n\\n> 你也可以在代码块中使用 `md`。\\n\\n可用的 JS 语言:\\n\\n- `\\"javascript\\"` (default)\\n- `\\"coffeescript\\"`\\n- `\\"babel\\"`\\n- `\\"livescript\\"`\\n- `\\"typescript\\"`\\n\\n> 你也可以在代码块中使用 `js`, `ts`, `coffee` 和 `ls`。\\n\\n可用的 CSS 语言:\\n\\n- `\\"css\\"` (default)\\n- `\\"less\\"`\\n- `\\"scss\\"`\\n- `\\"sass\\"`\\n- `\\"stylus\\"`\\n\\n> 你也可以在代码块中使用 `styl`。\\n\\n## 示例\\n\\n::: code-demo Demo 演示\\n\\n```html\\n<h1>VuePress Theme Hope</h1>\\n<p><span id=\\"very\\">非常</span>强大!</p>\\n```\\n\\n```js\\ndocument.querySelector(\\"#very\\").addEventListener(\\"click\\", () => {\\n  alert(\\"非常强大\\");\\n});\\n```\\n\\n```css\\nspan {\\n  color: red;\\n}\\n```\\n\\n:::\\n\\n:::: details 代码\\n\\n````md\\n::: code-demo Demo 演示\\n\\n```html\\n<h1>VuePress Theme Hope</h1>\\n<p><span id=\\"very\\">非常</span>强大!</p>\\n```\\n\\n```js\\ndocument.querySelector(\\"#very\\").addEventListener(\\"click\\", () => {\\n  alert(\\"非常强大\\");\\n});\\n```\\n\\n```css\\nspan {\\n  color: red;\\n}\\n```\\n\\n:::\\n````\\n\\n::::\\n\\n::: code-demo:react 一个函数式 React Demo\\n\\n```js\\nconst { useState } = React;\\n\\nexport default () => {\\n  const [message, setMessage] = useState(\\" 强大\\");\\n\\n  const handler = () => {\\n    setMessage(`十分${message}`);\\n  };\\n\\n  return (\\n    <div className=\\"box\\">\\n      <code>vuepress-theme-hope</code>\\n      <span id=\\"powerful\\" onClick={handler}>\\n        {message}\\n      </span>\\n    </div>\\n  );\\n};\\n```\\n\\n```css\\n.box #powerful {\\n  color: blue;\\n}\\n```\\n\\n:::\\n\\n:::: details 代码\\n\\n````md\\n::: code-demo:react 一个函数式 React Demo\\n\\n```js\\nconst { useState } = React;\\n\\nexport default () => {\\n  const [message, setMessage] = useState(\\" 强大\\");\\n\\n  const handler = () => {\\n    setMessage(`十分${message}`);\\n  };\\n\\n  return (\\n    <div className=\\"box\\">\\n      <code>vuepress-theme-hope</code>\\n      <span id=\\"powerful\\" onClick={handler}>\\n        {message}\\n      </span>\\n    </div>\\n  );\\n};\\n```\\n\\n```css\\n.box #powerful {\\n  color: blue;\\n}\\n```\\n\\n:::\\n````\\n\\n::::\\n\\n::: code-demo:react 一个类式 React Demo\\n\\n```js\\nexport default class App extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = { message: \\"强大\\" };\\n  }\\n  handler() {\\n    this.setState((state) => ({\\n      message: `十分${state.message}`,\\n    }));\\n  }\\n  render() {\\n    return (\\n      <div className=\\"box\\">\\n        <code>vuepress-theme-hope</code>\\n        <span id=\\"powerful\\" onClick={this.handler.bind(this)}>\\n          {this.state.message}\\n        </span>\\n      </div>\\n    );\\n  }\\n}\\n```\\n\\n```css\\n.box #powerful {\\n  color: blue;\\n}\\n```\\n\\n:::\\n\\n:::: details 代码\\n\\n````md\\n::: code-demo:react 一个类式 React Demo\\n\\n```js\\nexport default class App extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = { message: \\"强大\\" };\\n  }\\n  handler() {\\n    this.setState((state) => ({\\n      message: `十分${state.message}`,\\n    }));\\n  }\\n  render() {\\n    return (\\n      <div className=\\"box\\">\\n        <code>vuepress-theme-hope</code>\\n        <span id=\\"powerful\\" onClick={this.handler.bind(this)}>\\n          {this.state.message}\\n        </span>\\n      </div>\\n    );\\n  }\\n}\\n```\\n\\n```css\\n.box #powerful {\\n  color: blue;\\n}\\n```\\n\\n:::\\n````\\n\\n::::\\n\\n::: code-demo:vue 一个 Vue Composition 演示\\n\\n```vue\\n<template>\\n  <div class=\\"box\\">\\n    <code>vuepress-theme-hope</code> is\\n    <span @click=\\"handler\\">{{ message }}</span\\n    >!\\n  </div>\\n</template>\\n<script>\\nconst { ref } = Vue;\\n\\nexport default {\\n  setup() {\\n    const message = ref(\\"powerful\\");\\n\\n    const handler = () => {\\n      message.value = \\"very \\" + message.value;\\n    };\\n\\n    return {\\n      message,\\n      handler,\\n    };\\n  },\\n};\\n<\/script>\\n<style>\\n.box span {\\n  color: red;\\n}\\n</style>\\n```\\n\\n:::\\n\\n:::: details Code\\n\\n````md\\n::: code-demo:vue 一个 Vue Composition 演示\\n\\n```vue\\n<template>\\n  <div class=\\"box\\">\\n    <code>vuepress-theme-hope</code> is\\n    <span @click=\\"handler\\">{{ message }}</span\\n    >!\\n  </div>\\n</template>\\n<script>\\nconst { ref } = Vue;\\n\\nexport default {\\n  setup() {\\n    const message = ref(\\"powerful\\");\\n\\n    const handler = () => {\\n      message.value = \\"very \\" + message.value;\\n    };\\n\\n    return {\\n      message,\\n      handler,\\n    };\\n  },\\n};\\n<\/script>\\n<style>\\n.box span {\\n  color: red;\\n}\\n</style>\\n```\\n\\n:::\\n````\\n\\n::::\\n\\n::: code-demo:vue 一个 Vue Option 演示\\n\\n```vue\\n<template>\\n  <div class=\\"box\\">\\n    <code>vuepress-theme-hope</code> is\\n    <span @click=\\"handler\\">{{ message }}</span\\n    >!\\n  </div>\\n</template>\\n<script>\\nexport default {\\n  data: () => ({ message: \\"powerful\\" }),\\n  methods: {\\n    handler() {\\n      this.message = \\"very \\" + this.message;\\n    },\\n  },\\n};\\n<\/script>\\n<style>\\n.box span {\\n  color: red;\\n}\\n</style>\\n```\\n\\n:::\\n\\n:::: details Code\\n\\n````md\\n::: code-demo:vue 一个 Vue Option 演示\\n\\n```vue\\n<template>\\n  <div class=\\"box\\">\\n    <code>vuepress-theme-hope</code> is\\n    <span @click=\\"handler\\">{{ message }}</span\\n    >!\\n  </div>\\n</template>\\n<script>\\nexport default {\\n  data: () => ({ message: \\"powerful\\" }),\\n  methods: {\\n    handler() {\\n      this.message = \\"very \\" + this.message;\\n    },\\n  },\\n};\\n<\/script>\\n<style>\\n.box span {\\n  color: red;\\n}\\n</style>\\n```\\n\\n:::\\n````\\n\\n::::\\n\\n::: code-demo 一个使用浏览器不支持解析语言 Demo\\n\\n```md\\n# 标题\\n\\n十分强大\\n```\\n\\n```ts\\nconst message: string = \\"VuePress Theme Hope\\";\\n\\ndocument.querySelector(\\"h1\\").innerHTML = message;\\n```\\n\\n```scss\\nh1 {\\n  font-style: italic;\\n\\n  + p {\\n    color: red;\\n  }\\n}\\n```\\n\\n:::\\n\\n:::: details 代码\\n\\n````md\\n::: code-demo 一个使用浏览器不支持解析语言 Demo\\n\\n```md\\n# 标题\\n\\n十分强大\\n```\\n\\n```ts\\nconst message: string = \\"VuePress Theme Hope\\";\\n\\ndocument.querySelector(\\"h1\\").innerHTML = message;\\n```\\n\\n```scss\\nh1 {\\n  font-style: italic;\\n\\n  + p {\\n    color: red;\\n  }\\n}\\n```\\n\\n:::\\n````\\n\\n::::\\n","icon":"code","author":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com"}],"top":false,"length":1045,"words":1045,"readingTime":3.48}');export{n as data};
