"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3389],{74236:(s,n,e)=>{e.r(n),e.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-6d7af5a6","path":"/zh/vuepress-next/guide/deployment.html","title":"部署","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"GitHub Pages","slug":"github-pages","link":"#github-pages","children":[]},{"level":2,"title":"GitLab Pages","slug":"gitlab-pages","link":"#gitlab-pages","children":[]},{"level":2,"title":"Google Firebase","slug":"google-firebase","link":"#google-firebase","children":[]},{"level":2,"title":"Heroku","slug":"heroku","link":"#heroku","children":[]},{"level":2,"title":"Netlify","slug":"netlify","link":"#netlify","children":[]},{"level":2,"title":"Vercel","slug":"vercel","link":"#vercel","children":[]},{"level":2,"title":"云开发 CloudBase","slug":"云开发-cloudbase","link":"#云开发-cloudbase","children":[]},{"level":2,"title":"21 云盒子","slug":"_21-云盒子","link":"#_21-云盒子","children":[]}],"git":{"createdTime":1635758933000,"updatedTime":1635758933000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"zh/vuepress-next/guide/deployment.md","content":"# 部署\\n\\n下述的指南基于以下条件：\\n\\n- Markdown 源文件放置在你项目的 `docs` 目录；\\n- 使用的是默认的构建输出目录 (`.vuepress/dist`) ；\\n- 使用 [Yarn classic](https://classic.yarnpkg.com/zh-Hans/) 作为包管理器，当然也可以使用 NPM 。\\n- VuePress 作为项目依赖安装，并在 `package.json` 中配置了如下脚本：\\n\\n```json\\n{\\n  \\"scripts\\": {\\n    \\"docs:build\\": \\"vuepress build docs\\"\\n  }\\n}\\n```\\n\\n## GitHub Pages\\n\\n1. 设置正确的 [base](../reference/config.md#base) 选项。\\n\\n    如果你准备发布到 `https://<USERNAME>.github.io/` ，你可以省略这一步，因为 `base` 默认就是 `\\"/\\"` 。\\n\\n    如果你准备发布到 `https://<USERNAME>.github.io/<REPO>/` ，也就是说你的仓库地址是 `https://github.com/<USERNAME>/<REPO>` ，则将 `base` 设置为 `\\"/<REPO>/\\"`。\\n\\n2. 选择你想要使用的 CI 工具。这里我们以 [GitHub Actions](https://github.com/features/actions) 为例。\\n\\n    创建 `.github/workflows/docs.yml` 文件来配置工作流。\\n\\n::: details 点击展开配置样例\\n```yaml\\nname: docs\\n\\non:\\n  # 每当 push 到 main 分支时触发部署\\n  push:\\n    branches: [main]\\n  # 手动触发部署\\n  workflow_dispatch:\\n\\njobs:\\n  docs:\\n    runs-on: ubuntu-latest\\n\\n    steps:\\n      - uses: actions/checkout@v2\\n        with:\\n          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录\\n          fetch-depth: 0\\n\\n      - name: Setup Node.js\\n        uses: actions/setup-node@v1\\n        with:\\n          # 选择要使用的 node 版本\\n          node-version: \'14\'\\n\\n      # 缓存 node_modules\\n      - name: Cache dependencies\\n        uses: actions/cache@v2\\n        id: yarn-cache\\n        with:\\n          path: |\\n            **/node_modules\\n          key: ${{ runner.os }}-yarn-${{ hashFiles(\'**/yarn.lock\') }}\\n          restore-keys: |\\n            ${{ runner.os }}-yarn-\\n\\n      # 如果缓存没有命中，安装依赖\\n      - name: Install dependencies\\n        if: steps.yarn-cache.outputs.cache-hit != \'true\'\\n        run: yarn --frozen-lockfile\\n\\n      # 运行构建脚本\\n      - name: Build VuePress site\\n        run: yarn docs:build\\n\\n      # 查看 workflow 的文档来获取更多信息\\n      # @see https://github.com/crazy-max/ghaction-github-pages\\n      - name: Deploy to GitHub Pages\\n        uses: crazy-max/ghaction-github-pages@v2\\n        with:\\n          # 部署到 gh-pages 分支\\n          target_branch: gh-pages\\n          # 部署目录为 VuePress 的默认输出目录\\n          build_dir: docs/.vuepress/dist\\n        env:\\n          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret\\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\\n```\\n:::\\n\\n\\n::: tip\\n请参考 [GitHub Pages 官方指南](https://pages.github.com/) 来获取更多信息。\\n:::\\n\\n## GitLab Pages\\n\\n1. 设置正确的 [base](../reference/config.md#base) 选项。\\n\\n    如果你准备发布到 `https://<USERNAME>.gitlab.io/` ，你可以省略这一步，因此 `base` 默认就是 `\\"/\\"` 。\\n\\n    如果你准备发布到 `https://<USERNAME>.gitlab.io/<REPO>/` ，也就是说你的仓库地址是 `https://gitlab.com/<USERNAME>/<REPO>` ，则将 `base` 设置为 `\\"/<REPO>/\\"`。\\n\\n2. 创建 `.gitlab-ci.yml` 文件来配置 [GitLab CI](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/) 工作流。\\n\\n::: details 点击展开配置样例\\n```yaml\\n# 选择你要使用的 docker 镜像\\nimage: node:14-buster\\n\\npages:\\n  # 每当 push 到 main 分支时触发部署\\n  only:\\n  - main\\n\\n  # 缓存 node_modules\\n  cache:\\n    paths:\\n    - node_modules/\\n\\n  # 安装依赖并运行构建脚本\\n  script:\\n  - yarn --frozen-lockfile\\n  - yarn docs:build --dest public\\n\\n  artifacts:\\n    paths:\\n    - public\\n```\\n:::\\n\\n::: tip\\n请参考 [GitLab Pages 官方指南](https://docs.gitlab.com/ce/user/project/pages/#getting-started) 来获取更多信息。\\n:::\\n\\n## Google Firebase\\n\\n1. 请确保你已经安装了 [firebase-tools](https://www.npmjs.com/package/firebase-tools)。\\n\\n2. 在你项目的根目录下创建 `firebase.json` 和 `.firebaserc`，并包含以下内容：\\n\\n`firebase.json`:\\n\\n```json\\n{\\n  \\"hosting\\": {\\n    \\"public\\": \\"./docs/.vuepress/dist\\",\\n    \\"ignore\\": []\\n  }\\n}\\n```\\n\\n`.firebaserc`:\\n\\n```json\\n{\\n  \\"projects\\": {\\n    \\"default\\": \\"<YOUR_FIREBASE_ID>\\"\\n  }\\n}\\n```\\n\\n3. 在执行了 `yarn docs:build` 或 `npm run docs:build` 后, 使用 `firebase deploy` 指令来部署。\\n\\n::: tip\\n请参考 [Firebase CLI 官方指南](https://firebase.google.com/docs/cli) 来获取更多信息。\\n:::\\n\\n## Heroku\\n\\n1. 首先安装 [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)；\\n\\n2. [在这里](https://signup.heroku.com) 注册一个 Heroku 账号；\\n\\n3. 运行 `heroku login` 并填写你的 Heroku 认证信息：\\n\\n```bash\\nheroku login\\n```\\n\\n4. 在你的项目根目录中，创建一个名为 `static.json` 的文件，并包含下述内容：\\n\\n`static.json`:\\n\\n```json\\n{\\n  \\"root\\": \\"./docs/.vuepress/dist\\"\\n}\\n```\\n\\n这里是你项目的配置，请参考 [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static) 来获取更多信息。\\n\\n## Netlify\\n\\n1. 前往 [Netlify](https://netlify.com) ，从 GitHub 创建一个新项目，并进行如下配置：\\n\\n    - **Build Command:** `yarn docs:build`\\n    - **Publish directory:** `docs/.vuepress/dist`\\n\\n2. 设置 [Environment variables](https://docs.netlify.com/configure-builds/environment-variables) 来选择 Node 版本：\\n\\n    - `NODE_VERSION`: 14\\n\\n3. 点击 deploy 按钮。\\n\\n## Vercel\\n\\n请查看 [Creating and Deploying a VuePress App with Vercel](https://vercel.com/guides/deploying-vuepress-to-vercel).\\n\\n\x3c!-- 下列平台是中文文档特有的，放在最下方 --\x3e\\n\\n## 云开发 CloudBase\\n\\n[云开发 CloudBase](https://cloudbase.net/?site=vuepress) 是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 [CloudBase Framework](https://cloudbase.net/framework.html?site=vuepress) 来一键部署应用。\\n\\n1. 全局安装 CloudBase CLI ：\\n\\n```bash\\nnpm install -g @cloudbase/cli\\n```\\n\\n2. 在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 [开通环境](https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&tdl_site=vuejs)：\\n\\n```bash\\ncloudbase init --without-template\\ncloudbase framework:deploy\\n```\\n\\n  CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认。\\n\\n  确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 GitHub Action 来持续部署 GitHub 上的 VuePress 应用。\\n\\n  也可以使用 `cloudbase init --template vuepress` 快速创建和部署一个新的 VuePress 应用。\\n\\n::: tip\\n更多详细信息请查看 CloudBase Framework 的[部署项目示例](https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B)\\n:::\\n\\n## 21 云盒子\\n\\n请查看 [21 云盒子 - 部署一个 VuePress 静态网页](https://www.21yunbox.com/docs/#/deploy-vuepress)。\\n","author":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":1247,"words":1247,"readingTime":4.16}')},30038:(s,n,e)=>{e.r(n),e.d(n,{default:()=>js});var l=e(1863);const a=(0,l._)("h1",{id:"部署",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),(0,l.Uk)(" 部署")],-1),o=(0,l._)("p",null,"下述的指南基于以下条件：",-1),p=(0,l._)("li",null,[(0,l.Uk)("Markdown 源文件放置在你项目的 "),(0,l._)("code",null,"docs"),(0,l.Uk)(" 目录；")],-1),i=(0,l._)("li",null,[(0,l.Uk)("使用的是默认的构建输出目录 ("),(0,l._)("code",null,".vuepress/dist"),(0,l.Uk)(") ；")],-1),c={href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},r=(0,l._)("li",null,[(0,l.Uk)("VuePress 作为项目依赖安装，并在 "),(0,l._)("code",null,"package.json"),(0,l.Uk)(" 中配置了如下脚本：")],-1),t={class:"code-enhance"},d=(0,l.uE)('<div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;scripts&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;docs:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress build docs&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),u=(0,l._)("h2",{id:"github-pages",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#github-pages","aria-hidden":"true"},"#"),(0,l.Uk)(" GitHub Pages")],-1),D=(0,l.uE)("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2),b={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},y=(0,l._)("p",null,[(0,l.Uk)("创建 "),(0,l._)("code",null,".github/workflows/docs.yml"),(0,l.Uk)(" 文件来配置工作流。")],-1),v={class:"custom-container details"},h=(0,l._)("summary",null,"点击展开配置样例",-1),m={class:"code-enhance"},g=(0,l.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 每当 push 到 main 分支时触发部署</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">push</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">branches</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">main</span><span style="color:#D4D4D4;">]</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 手动触发部署</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">workflow_dispatch</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">jobs</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">docs</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">runs-on</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ubuntu-latest</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">steps</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/checkout@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">fetch-depth</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Setup Node.js</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/setup-node@v1</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 选择要使用的 node 版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">node-version</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;14&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 缓存 node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Cache dependencies</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/cache@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn-cache</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">path</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">|</span></span>\n<span class="line"><span style="color:#CE9178;">            **/node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">${{ runner.os }}-yarn-${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">restore-keys</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">|</span></span>\n<span class="line"><span style="color:#CE9178;">            ${{ runner.os }}-yarn-</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 如果缓存没有命中，安装依赖</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Install dependencies</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">if</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn --frozen-lockfile</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 运行构建脚本</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Build VuePress site</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn docs:build</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 查看 workflow 的文档来获取更多信息</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Deploy to GitHub Pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">crazy-max/ghaction-github-pages@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 部署到 gh-pages 分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">target_branch</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">gh-pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 部署目录为 VuePress 的默认输出目录</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">build_dir</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs/.vuepress/dist</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">env</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">GITHUB_TOKEN</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">${{ secrets.GITHUB_TOKEN }}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),k={class:"custom-container tip"},_=(0,l._)("p",{class:"custom-container-title"},"TIP",-1),E={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},C=(0,l._)("h2",{id:"gitlab-pages",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),(0,l.Uk)(" GitLab Pages")],-1),f=(0,l.uE)("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/</code> ，你可以省略这一步，因此 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2),U=(0,l._)("code",null,".gitlab-ci.yml",-1),w={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},P={class:"custom-container details"},A=(0,l._)("summary",null,"点击展开配置样例",-1),B={class:"code-enhance"},N=(0,l.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 选择你要使用的 docker 镜像</span></span>\n<span class="line"><span style="color:#569CD6;">image</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">node:14-buster</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">pages</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 每当 push 到 main 分支时触发部署</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">only</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">main</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 缓存 node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">cache</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">node_modules/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 安装依赖并运行构建脚本</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">yarn --frozen-lockfile</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">yarn docs:build --dest public</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">artifacts</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">public</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),j={class:"custom-container tip"},x=(0,l._)("p",{class:"custom-container-title"},"TIP",-1),q={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},R=(0,l._)("h2",{id:"google-firebase",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),(0,l.Uk)(" Google Firebase")],-1),H={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},G=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("在你项目的根目录下创建 "),(0,l._)("code",null,"firebase.json"),(0,l.Uk)(" 和 "),(0,l._)("code",null,".firebaserc"),(0,l.Uk)("，并包含以下内容：")])],-1),I=(0,l._)("p",null,[(0,l._)("code",null,"firebase.json"),(0,l.Uk)(":")],-1),W={class:"code-enhance"},S=(0,l.uE)('<div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;hosting&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;public&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;ignore&quot;</span><span style="color:#D4D4D4;">: []</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),O=(0,l._)("p",null,[(0,l._)("code",null,".firebaserc"),(0,l.Uk)(":")],-1),V={class:"code-enhance"},F=(0,l.uE)('<div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;projects&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;default&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),z=(0,l._)("ol",{start:"3"},[(0,l._)("li",null,[(0,l.Uk)("在执行了 "),(0,l._)("code",null,"yarn docs:build"),(0,l.Uk)(" 或 "),(0,l._)("code",null,"npm run docs:build"),(0,l.Uk)(" 后, 使用 "),(0,l._)("code",null,"firebase deploy"),(0,l.Uk)(" 指令来部署。")])],-1),L={class:"custom-container tip"},T=(0,l._)("p",{class:"custom-container-title"},"TIP",-1),M={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},$=(0,l._)("h2",{id:"heroku",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),(0,l.Uk)(" Heroku")],-1),K={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},J=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("运行 "),(0,l._)("code",null,"heroku login"),(0,l.Uk)(" 并填写你的 Heroku 认证信息：")])],-1),Z={class:"code-enhance"},Q=(0,l.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">heroku login</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),X=(0,l._)("ol",{start:"4"},[(0,l._)("li",null,[(0,l.Uk)("在你的项目根目录中，创建一个名为 "),(0,l._)("code",null,"static.json"),(0,l.Uk)(" 的文件，并包含下述内容：")])],-1),ss=(0,l._)("p",null,[(0,l._)("code",null,"static.json"),(0,l.Uk)(":")],-1),ns={class:"code-enhance"},es=(0,l.uE)('<div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;root&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),ls={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},as=(0,l._)("h2",{id:"netlify",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),(0,l.Uk)(" Netlify")],-1),os={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},ps=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("strong",null,"Build Command:"),(0,l.Uk)(),(0,l._)("code",null,"yarn docs:build")]),(0,l._)("li",null,[(0,l._)("strong",null,"Publish directory:"),(0,l.Uk)(),(0,l._)("code",null,"docs/.vuepress/dist")])],-1),is={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},cs=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("code",null,"NODE_VERSION"),(0,l.Uk)(": 14")])],-1),rs=(0,l._)("li",null,[(0,l._)("p",null,"点击 deploy 按钮。")],-1),ts=(0,l._)("h2",{id:"vercel",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),(0,l.Uk)(" Vercel")],-1),ds={href:"https://vercel.com/guides/deploying-vuepress-to-vercel",target:"_blank",rel:"noopener noreferrer"},us=(0,l._)("h2",{id:"云开发-cloudbase",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#云开发-cloudbase","aria-hidden":"true"},"#"),(0,l.Uk)(" 云开发 CloudBase")],-1),Ds={href:"https://cloudbase.net/?site=vuepress",target:"_blank",rel:"noopener noreferrer"},bs={href:"https://cloudbase.net/framework.html?site=vuepress",target:"_blank",rel:"noopener noreferrer"},ys=(0,l._)("ol",null,[(0,l._)("li",null,"全局安装 CloudBase CLI ：")],-1),vs={class:"code-enhance"},hs=(0,l.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm install -g @cloudbase/cli</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),ms={start:"2"},gs={href:"https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&tdl_site=vuejs",target:"_blank",rel:"noopener noreferrer"},ks={class:"code-enhance"},_s=(0,l.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">cloudbase init --without-template</span></span>\n<span class="line"><span style="color:#D4D4D4;">cloudbase framework:deploy</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',1),Es=(0,l._)("p",null,"CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认。",-1),Cs=(0,l._)("p",null,"确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 GitHub Action 来持续部署 GitHub 上的 VuePress 应用。",-1),fs=(0,l._)("p",null,[(0,l.Uk)("也可以使用 "),(0,l._)("code",null,"cloudbase init --template vuepress"),(0,l.Uk)(" 快速创建和部署一个新的 VuePress 应用。")],-1),Us={class:"custom-container tip"},ws=(0,l._)("p",{class:"custom-container-title"},"TIP",-1),Ps={href:"https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},As=(0,l._)("h2",{id:"_21-云盒子",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#_21-云盒子","aria-hidden":"true"},"#"),(0,l.Uk)(" 21 云盒子")],-1),Bs={href:"https://www.21yunbox.com/docs/#/deploy-vuepress",target:"_blank",rel:"noopener noreferrer"},Ns={},js=(0,e(94598).Z)(Ns,[["render",function(s,n){const e=(0,l.up)("ExternalLinkIcon"),Ns=(0,l.up)("CodeCopyButton"),js=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)("div",null,[a,o,(0,l._)("ul",null,[p,i,(0,l._)("li",null,[(0,l.Uk)("使用 "),(0,l._)("a",c,[(0,l.Uk)("Yarn classic"),(0,l.Wm)(e)]),(0,l.Uk)(" 作为包管理器，当然也可以使用 NPM 。")]),r]),(0,l._)("div",t,[d,(0,l.Wm)(Ns)]),u,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("设置正确的 "),(0,l.Wm)(js,{to:"/zh/vuepress-next/reference/config.html#base"},{default:(0,l.w5)((()=>[(0,l.Uk)("base")])),_:1}),(0,l.Uk)(" 选项。")]),D]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("选择你想要使用的 CI 工具。这里我们以 "),(0,l._)("a",b,[(0,l.Uk)("GitHub Actions"),(0,l.Wm)(e)]),(0,l.Uk)(" 为例。")]),y])]),(0,l._)("details",v,[h,(0,l._)("div",m,[g,(0,l.Wm)(Ns)])]),(0,l._)("div",k,[_,(0,l._)("p",null,[(0,l.Uk)("请参考 "),(0,l._)("a",E,[(0,l.Uk)("GitHub Pages 官方指南"),(0,l.Wm)(e)]),(0,l.Uk)(" 来获取更多信息。")])]),C,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("设置正确的 "),(0,l.Wm)(js,{to:"/zh/vuepress-next/reference/config.html#base"},{default:(0,l.w5)((()=>[(0,l.Uk)("base")])),_:1}),(0,l.Uk)(" 选项。")]),f]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("创建 "),U,(0,l.Uk)(" 文件来配置 "),(0,l._)("a",w,[(0,l.Uk)("GitLab CI"),(0,l.Wm)(e)]),(0,l.Uk)(" 工作流。")])])]),(0,l._)("details",P,[A,(0,l._)("div",B,[N,(0,l.Wm)(Ns)])]),(0,l._)("div",j,[x,(0,l._)("p",null,[(0,l.Uk)("请参考 "),(0,l._)("a",q,[(0,l.Uk)("GitLab Pages 官方指南"),(0,l.Wm)(e)]),(0,l.Uk)(" 来获取更多信息。")])]),R,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("请确保你已经安装了 "),(0,l._)("a",H,[(0,l.Uk)("firebase-tools"),(0,l.Wm)(e)]),(0,l.Uk)("。")])]),G]),I,(0,l._)("div",W,[S,(0,l.Wm)(Ns)]),O,(0,l._)("div",V,[F,(0,l.Wm)(Ns)]),z,(0,l._)("div",L,[T,(0,l._)("p",null,[(0,l.Uk)("请参考 "),(0,l._)("a",M,[(0,l.Uk)("Firebase CLI 官方指南"),(0,l.Wm)(e)]),(0,l.Uk)(" 来获取更多信息。")])]),$,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("首先安装 "),(0,l._)("a",K,[(0,l.Uk)("Heroku CLI"),(0,l.Wm)(e)]),(0,l.Uk)("；")])]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l._)("a",Y,[(0,l.Uk)("在这里"),(0,l.Wm)(e)]),(0,l.Uk)(" 注册一个 Heroku 账号；")])]),J]),(0,l._)("div",Z,[Q,(0,l.Wm)(Ns)]),X,ss,(0,l._)("div",ns,[es,(0,l.Wm)(Ns)]),(0,l._)("p",null,[(0,l.Uk)("这里是你项目的配置，请参考 "),(0,l._)("a",ls,[(0,l.Uk)("heroku-buildpack-static"),(0,l.Wm)(e)]),(0,l.Uk)(" 来获取更多信息。")]),as,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("前往 "),(0,l._)("a",os,[(0,l.Uk)("Netlify"),(0,l.Wm)(e)]),(0,l.Uk)(" ，从 GitHub 创建一个新项目，并进行如下配置：")]),ps]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("设置 "),(0,l._)("a",is,[(0,l.Uk)("Environment variables"),(0,l.Wm)(e)]),(0,l.Uk)(" 来选择 Node 版本：")]),cs]),rs]),ts,(0,l._)("p",null,[(0,l.Uk)("请查看 "),(0,l._)("a",ds,[(0,l.Uk)("Creating and Deploying a VuePress App with Vercel"),(0,l.Wm)(e)]),(0,l.Uk)(".")]),us,(0,l._)("p",null,[(0,l._)("a",Ds,[(0,l.Uk)("云开发 CloudBase"),(0,l.Wm)(e)]),(0,l.Uk)(" 是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 "),(0,l._)("a",bs,[(0,l.Uk)("CloudBase Framework"),(0,l.Wm)(e)]),(0,l.Uk)(" 来一键部署应用。")]),ys,(0,l._)("div",vs,[hs,(0,l.Wm)(Ns)]),(0,l._)("ol",ms,[(0,l._)("li",null,[(0,l.Uk)("在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 "),(0,l._)("a",gs,[(0,l.Uk)("开通环境"),(0,l.Wm)(e)]),(0,l.Uk)("：")])]),(0,l._)("div",ks,[_s,(0,l.Wm)(Ns)]),Es,Cs,fs,(0,l._)("div",Us,[ws,(0,l._)("p",null,[(0,l.Uk)("更多详细信息请查看 CloudBase Framework 的"),(0,l._)("a",Ps,[(0,l.Uk)("部署项目示例"),(0,l.Wm)(e)])])]),As,(0,l._)("p",null,[(0,l.Uk)("请查看 "),(0,l._)("a",Bs,[(0,l.Uk)("21 云盒子 - 部署一个 VuePress 静态网页"),(0,l.Wm)(e)]),(0,l.Uk)("。")])])}]])}}]);