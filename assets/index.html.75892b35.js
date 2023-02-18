const n=JSON.parse('{"key":"v-a05dae26","path":"/zh/guide/component/","title":"组件","lang":"zh-CN","frontmatter":{"title":"组件","icon":"component","head":[["meta",{"name":"og:url","content":"/zh/guide/component/"}],["meta",{"name":"og:site_name","content":"vuepress-theme-star"}],["meta",{"name":"og:title","content":"组件"}],["meta",{"name":"og:description","content":""}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:image","content":""}],["meta",{"name":"og:updated_time","content":"2022-09-25T13:00:16.000Z"}],["meta",{"name":"og:locale","content":"zh-CN"}],["meta",{"name":"og:locale:alternate","content":"en-US"}],["meta",{"name":"og:locale:alternate","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"vuepress-theme-star"}],["meta",{"name":"article:author","content":""}],["meta",{"name":"article:published_time","content":""}],["meta",{"name":"article:modified_time","content":"2022-09-25T13:00:16.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Badge","slug":"badge","link":"#badge","children":[{"level":3,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"CodeGroup","slug":"codegroup","link":"#codegroup","children":[{"level":3,"title":"详情","slug":"详情","link":"#详情","children":[]}]},{"level":2,"title":"CodeGroupItem","slug":"codegroupitem","link":"#codegroupitem","children":[{"level":3,"title":"属性","slug":"属性-1","link":"#属性-1","children":[]},{"level":3,"title":"详情","slug":"详情-1","link":"#详情-1","children":[]},{"level":3,"title":"使用","slug":"使用-1","link":"#使用-1","children":[]},{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]}]},{"level":2,"title":"ExternalLinkIcon","slug":"externallinkicon","link":"#externallinkicon","children":[]},{"level":2,"title":"Element Plus","slug":"element-plus","link":"#element-plus","children":[]}],"git":{"createdTime":1664110816000,"updatedTime":1664110816000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com","commits":1}]},"copyright":"Copyright © 2021-present Starzkg","filePathRelative":"zh/guide/component/README.md","content":"---\\ntitle: 组件\\nicon: component\\n---\\n# 组件\\n\\n## Badge\\n在MarkDown中使用徽章\\n\\n### 属性\\ntext <Badge text=\\"必填\\" type=\\"danger\\" />\\n\\n- 类型：`string`\\n- 默认值：\\"\\"\\n\\n  徽章文字内容\\n\\ntype\\n\\n- 类型：`\\"tip\\" | \\"wraning\\" | \\"danger\\"`\\n- 默认值：`\\"tip\\"`\\n\\n  徽章类型\\n  - <Badge text=\\"tip\\" type=\\"tip\\" />\\n  - <Badge text=\\"warn\\" type=\\"warning\\" />\\n  - <Badge text=\\"error\\" type=\\"danger\\" />\\n\\ncolor <Badge text=\\"可选\\" />\\n- 类型：`string`\\n\\n  徽章颜色，CSS合法的颜色值\\n\\nvertical\\n- 类型：`\\"top\\" | \\"middle\\" | \\"bottom\\" | undefined `\\n- 默认值：`\\"undefined\\"`\\n\\n  徽章垂直方向的位置\\n  -  顶部<Badge text=\\"top\\" vertical=\\"top\\" />\\n  -  居中<Badge text=\\"middle\\" vertical=\\"middle\\" />\\n  -  底部<Badge text=\\"bottom\\" vertical=\\"bottom\\" />\\n\\nis-dot\\n- 类型：Boolean\\n- 默认值：true\\n\\n  不显示 `text`  内容，显示一个小圆点\\n\\n小红点 <Badge  type=\\"danger\\" is-dot/>\\n\\n\\n### 使用\\n在MarkDown中为标题或链接添加一些状态\\n```markdown\\n### Badge <Badge text=\\"Building\\" type=\\"warning\\" /> <Badge text=\\"Starzkg\\" color=\\"grey\\" />\\n```\\n\\n### 示例\\n- <Badge text=\\"type\\" type=\\"warning\\" />\\n- <Badge text=\\"color\\" color=\\"grey\\" />\\n\\n## CodeGroup\\n\\n在MarkDown中可用的代码块分组\\n\\n### 详情\\n\\n[CodeGroupItem](components.md#codegroupitem) 组件的Wrapper\\n\\n## CodeGroupItem\\n在MarkDown中可用的代码块分组项\\n\\n### 属性\\ntitle <Badge text=\\"必填\\" type=\\"danger\\" />\\n- 类型： `string`\\n\\nactive\\n- 类型： `boolean`\\n- 默认值： `false`\\n\\n### 详情\\n\\n该组件必须放置在 [CodeGroup](#codegroup) 组件的内部。\\n\\n可以通过 `active` Prop 来设置初始激活的元素。如果不设置，默认激活第一个元素。\\n\\n### 使用\\n请使用 `<CodeGroup />` 包裹 `<CodeGroupItem />`。\\n\\n对于每个 `<CodeGroupItem />`，你需要设置 `title` 属性作为选项卡的标题，并仅在选项卡内放置一个代码块。你还可以在其中一个 `<CodeGroupItem />` 上设置 active 属性使其默认激活。\\n\\n::: tip\\n\\n你需要在每个 `<CodeGroupItem />` 之间放置一个空行，否则 VuePress 可能无法正确的解析它们。\\n\\n:::\\n\\n### 示例\\n\\n输入：\\n\\n````markdown\\n<CodeGroup>\\n<CodeGroupItem title=\\"yarn\\">\\n```bash\\n  yarn add -D vuepress-theme-star\\n```\\n</CodeGroupItem>\\n<CodeGroupItem title=\\"npm\\" active>\\n```bash\\nnpm i -D vuepress-theme-star\\n```\\n</CodeGroupItem>\\n</CodeGroup>\\n````\\n\\n输出：\\n\\n<CodeGroup>\\n  <CodeGroupItem title=\\"yarn\\">\\n\\n```bash\\nyarn add -D vuepress-theme-star\\n```\\n  </CodeGroupItem>\\n\\n  <CodeGroupItem title=\\"npm\\" active>\\n\\n```bash\\nnpm i -D vuepress-theme-star\\n```\\n  </CodeGroupItem>\\n</CodeGroup>\\n\\n## ExternalLinkIcon\\n- 使用\\n\\n```html\\n<ExternalLinkIcon/>\\n```\\n- 详情\\n\\n  该组件会渲染一个标识外部 URL 链接的图标。\\n\\n  该组件主要是为了开发主题时使用。在绝大多数情况下你不会用到它。\\n- 示例\\n  <ExternalLinkIcon/>\\n\\n\\n## Element Plus\\n内置 Element Plus 组件库和图标库\\n::: tip\\n为了避免组件名称冲突，图标组件与Element相比需要加`icon-`前缀\\n:::\\n<el-row>\\n<el-button>Default</el-button>\\n<el-button type=\\"primary\\">Primary</el-button>\\n<el-button type=\\"success\\">Success</el-button>\\n<el-button type=\\"info\\">Info</el-button>\\n<el-button type=\\"warning\\">Warning</el-button>\\n<el-button type=\\"danger\\">Danger</el-button>\\n<el-button>中文</el-button>\\n</el-row>\\n\\n<el-row style=\\"margin-top: 10px\\">\\n  <el-button plain>Plain</el-button>\\n  <el-button type=\\"primary\\" plain>Primary</el-button>\\n  <el-button type=\\"success\\" plain>Success</el-button>\\n  <el-button type=\\"info\\" plain>Info</el-button>\\n  <el-button type=\\"warning\\" plain>Warning</el-button>\\n  <el-button type=\\"danger\\" plain>Danger</el-button>\\n</el-row>\\n\\n<el-row style=\\"margin-top: 10px\\">\\n  <el-button round>Round</el-button>\\n  <el-button type=\\"primary\\" round>Primary</el-button>\\n  <el-button type=\\"success\\" round>Success</el-button>\\n  <el-button type=\\"info\\" round>Info</el-button>\\n  <el-button type=\\"warning\\" round>Warning</el-button>\\n  <el-button type=\\"danger\\" round>Danger</el-button>\\n</el-row>\\n\\n<el-row style=\\"margin-top: 10px\\">\\n  <el-button icon=\\"icon-search\\" circle></el-button>\\n  <el-button type=\\"primary\\" icon=\\"icon-edit\\" circle></el-button>\\n  <el-button type=\\"success\\" icon=\\"icon-check\\" circle></el-button>\\n  <el-button type=\\"info\\" icon=\\"icon-message\\" circle></el-button>\\n  <el-button type=\\"warning\\" icon=\\"icon-star\\" circle></el-button>\\n  <el-button type=\\"danger\\" icon=\\"icon-delete\\" circle></el-button>\\n</el-row>\\n","icon":"component","author":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com"}],"top":false,"length":769,"words":769,"readingTime":2.56}');export{n as data};
