"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8436],{79164:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-4bbb6488","path":"/vuepress-next/guide/deployment.html","title":"Deployment","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"GitHub Pages","slug":"github-pages","children":[]},{"level":2,"title":"GitLab Pages","slug":"gitlab-pages","children":[]},{"level":2,"title":"Google Firebase","slug":"google-firebase","children":[]},{"level":2,"title":"Heroku","slug":"heroku","children":[]},{"level":2,"title":"Netlify","slug":"netlify","children":[]},{"level":2,"title":"Vercel","slug":"vercel","children":[]}],"git":{"updatedTime":1635758933000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"filePathRelative":"vuepress-next/guide/deployment.md","content":"# Deployment\\n\\nThe following guides are based on some shared assumptions:\\n\\n- You are placing your Markdown source files inside the `docs` directory of your project;\\n- You are using the default build output location (`.vuepress/dist`);\\n- You are using [yarn classic](https://classic.yarnpkg.com/en/) as package manager, while npm is also supported;\\n- VuePress is installed as a local dependency in your project, and you have setup the following script in `package.json`:\\n\\n```json\\n{\\n  \\"scripts\\": {\\n    \\"docs:build\\": \\"vuepress build docs\\"\\n  }\\n}\\n```\\n\\n## GitHub Pages\\n\\n1. Set the correct [base](../reference/config.md#base) config.\\n\\n    If you are deploying to `https://<USERNAME>.github.io/`, you can omit this step as `base` defaults to `\\"/\\"`.\\n\\n    If you are deploying to `https://<USERNAME>.github.io/<REPO>/`, for example your repository is at `https://github.com/<USERNAME>/<REPO>`, then set `base` to `\\"/<REPO>/\\"`.\\n\\n2. Choose your preferred CI tools. Here we take [GitHub Actions](https://github.com/features/actions) as an example.\\n\\n    Create `.github/workflows/docs.yml` to set up the workflow.\\n\\n::: details Click to expand sample config\\n```yaml\\nname: docs\\n\\non:\\n  # trigger deployment on every push to main branch\\n  push:\\n    branches: [main]\\n  # trigger deployment manually\\n  workflow_dispatch:\\n\\njobs:\\n  docs:\\n    runs-on: ubuntu-latest\\n\\n    steps:\\n      - uses: actions/checkout@v2\\n        with:\\n          # fetch all commits to get last updated time or other git log info\\n          fetch-depth: 0\\n\\n      - name: Setup Node.js\\n        uses: actions/setup-node@v1\\n        with:\\n          # choose node.js version to use\\n          node-version: \'14\'\\n\\n      # cache node_modules\\n      - name: Cache dependencies\\n        uses: actions/cache@v2\\n        id: yarn-cache\\n        with:\\n          path: |\\n            **/node_modules\\n          key: ${{ runner.os }}-yarn-${{ hashFiles(\'**/yarn.lock\') }}\\n          restore-keys: |\\n            ${{ runner.os }}-yarn-\\n\\n      # install dependencies if the cache did not hit\\n      - name: Install dependencies\\n        if: steps.yarn-cache.outputs.cache-hit != \'true\'\\n        run: yarn --frozen-lockfile\\n\\n      # run build script\\n      - name: Build VuePress site\\n        run: yarn docs:build\\n\\n      # please check out the docs of the workflow for more details\\n      # @see https://github.com/crazy-max/ghaction-github-pages\\n      - name: Deploy to GitHub Pages\\n        uses: crazy-max/ghaction-github-pages@v2\\n        with:\\n          # deploy to gh-pages branch\\n          target_branch: gh-pages\\n          # deploy the default output dir of VuePress\\n          build_dir: docs/.vuepress/dist\\n        env:\\n          # @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret\\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\\n```\\n:::\\n\\n::: tip\\nPlease refer to [GitHub Pages official guide](https://pages.github.com/) for more details.\\n:::\\n\\n## GitLab Pages\\n\\n1. Set the correct [base](../reference/config.md#base) config.\\n\\n    If you are deploying to `https://<USERNAME>.gitlab.io/`, you can omit `base` as it defaults to `\\"/\\"`.\\n\\n    If you are deploying to `https://<USERNAME>.gitlab.io/<REPO>/`, for example your repository is at `https://gitlab.com/<USERNAME>/<REPO>`, then set `base` to `\\"/<REPO>/\\"`.\\n\\n2. Create `.gitlab-ci.yml` to set up [GitLab CI](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/) workflow.\\n\\n::: details Click to expand sample config\\n```yaml\\n# choose a docker image to use\\nimage: node:14-buster\\n\\npages:\\n  # trigger deployment on every push to main branch\\n  only:\\n  - main\\n\\n  # cache node_modules\\n  cache:\\n    paths:\\n    - node_modules/\\n\\n  # install dependencies and run build script\\n  script:\\n  - yarn --frozen-lockfile\\n  - yarn docs:build --dest public\\n\\n  artifacts:\\n    paths:\\n    - public\\n```\\n:::\\n\\n::: tip\\nPlease refer to [GitLab Pages official guide](https://docs.gitlab.com/ce/user/project/pages/#getting-started) for more details.\\n:::\\n\\n## Google Firebase\\n\\n1. Make sure you have [firebase-tools](https://www.npmjs.com/package/firebase-tools) installed.\\n\\n2. Create `firebase.json` and `.firebaserc` at the root of your project with the following content:\\n\\n`firebase.json`:\\n\\n```json\\n{\\n  \\"hosting\\": {\\n    \\"public\\": \\"./docs/.vuepress/dist\\",\\n    \\"ignore\\": []\\n  }\\n}\\n```\\n\\n`.firebaserc`:\\n\\n```json\\n{\\n  \\"projects\\": {\\n    \\"default\\": \\"<YOUR_FIREBASE_ID>\\"\\n  }\\n}\\n```\\n\\n3. After running `yarn docs:build`, deploy using the command `firebase deploy`.\\n\\n::: tip\\nPlease refer to [Firebase CLI official guide](https://firebase.google.com/docs/cli) for more details.\\n:::\\n\\n## Heroku\\n\\n1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).\\n\\n2. Create a Heroku account by [signing up](https://signup.heroku.com).\\n\\n3. Run `heroku login` and fill in your Heroku credentials:\\n\\n```bash\\nheroku login\\n```\\n\\n4. Create a file called `static.json` in the root of your project with the below content:\\n\\n`static.json`:\\n\\n```json\\n{\\n  \\"root\\": \\"./docs/.vuepress/dist\\"\\n}\\n```\\n\\nThis is the configuration of your site; read more at [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static).\\n\\n## Netlify\\n\\n1. On [Netlify](https://netlify.com), set up a new project from GitHub with the following settings:\\n\\n    - **Build Command:** `yarn docs:build`\\n    - **Publish directory:** `docs/.vuepress/dist`\\n\\n2. Set [Environment variables](https://docs.netlify.com/configure-builds/environment-variables) to choose node version:\\n\\n    - `NODE_VERSION`: 14\\n\\n3. Hit the deploy button.\\n\\n## Vercel\\n\\nSee [Creating and Deploying a VuePress App with Vercel](https://vercel.com/guides/deploying-vuepress-to-vercel).\\n","length":730,"readingTime":2.43}')},7953:(s,n,e)=>{e.r(n),e.d(n,{default:()=>m});var a=e(66124);const l=(0,a.uE)('<h1 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h1><p>The following guides are based on some shared assumptions:</p><ul><li>You are placing your Markdown source files inside the <code>docs</code> directory of your project;</li><li>You are using the default build output location (<code>.vuepress/dist</code>);</li><li>You are using <a href="https://classic.yarnpkg.com/en/" target="_blank" rel="noopener noreferrer">yarn classic</a> as package manager, while npm is also supported;</li><li>VuePress is installed as a local dependency in your project, and you have setup the following script in <code>package.json</code>:</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;scripts&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;docs:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress build docs&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>',5),o=(0,a.Uk)("Set the correct "),i=(0,a.Uk)("base"),t=(0,a.Uk)(" config."),p=(0,a.uE)("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/</code>, you can omit this step as <code>base</code> defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),r=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Choose your preferred CI tools. Here we take "),(0,a._)("a",{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},"GitHub Actions"),(0,a.Uk)(" as an example.")]),(0,a._)("p",null,[(0,a.Uk)("Create "),(0,a._)("code",null,".github/workflows/docs.yml"),(0,a.Uk)(" to set up the workflow.")])],-1),c=(0,a.uE)('<details class="custom-container details"><summary>Click to expand sample config</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># trigger deployment on every push to main branch</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">push</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">branches</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">main</span><span style="color:#D4D4D4;">]</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># trigger deployment manually</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">workflow_dispatch</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">jobs</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">docs</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">runs-on</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ubuntu-latest</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">steps</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/checkout@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># fetch all commits to get last updated time or other git log info</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">fetch-depth</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Setup Node.js</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/setup-node@v1</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># choose node.js version to use</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">node-version</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;14&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># cache node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Cache dependencies</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/cache@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn-cache</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">path</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">|</span></span>\n<span class="line"><span style="color:#CE9178;">            **/node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">${{ runner.os }}-yarn-${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">restore-keys</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">|</span></span>\n<span class="line"><span style="color:#CE9178;">            ${{ runner.os }}-yarn-</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># install dependencies if the cache did not hit</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Install dependencies</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">if</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn --frozen-lockfile</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># run build script</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Build VuePress site</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn docs:build</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># please check out the docs of the workflow for more details</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Deploy to GitHub Pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">crazy-max/ghaction-github-pages@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># deploy to gh-pages branch</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">target_branch</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">gh-pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># deploy the default output dir of VuePress</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">build_dir</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs/.vuepress/dist</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">env</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">GITHUB_TOKEN</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">${{ secrets.GITHUB_TOKEN }}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Please refer to <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages official guide</a> for more details.</p></div><h2 id="gitlab-pages" tabindex="-1"><a class="header-anchor" href="#gitlab-pages" aria-hidden="true">#</a> GitLab Pages</h2>',3),d=(0,a.Uk)("Set the correct "),u=(0,a.Uk)("base"),D=(0,a.Uk)(" config."),y=(0,a.uE)("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/</code>, you can omit <code>base</code> as it defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),h=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Create "),(0,a._)("code",null,".gitlab-ci.yml"),(0,a.Uk)(" to set up "),(0,a._)("a",{href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},"GitLab CI"),(0,a.Uk)(" workflow.")])],-1),b=(0,a.uE)('<details class="custom-container details"><summary>Click to expand sample config</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># choose a docker image to use</span></span>\n<span class="line"><span style="color:#569CD6;">image</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">node:14-buster</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">pages</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># trigger deployment on every push to main branch</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">only</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">main</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># cache node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">cache</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">node_modules/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># install dependencies and run build script</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">yarn --frozen-lockfile</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">yarn docs:build --dest public</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">artifacts</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">public</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Please refer to <a href="https://docs.gitlab.com/ce/user/project/pages/#getting-started" target="_blank" rel="noopener noreferrer">GitLab Pages official guide</a> for more details.</p></div><h2 id="google-firebase" tabindex="-1"><a class="header-anchor" href="#google-firebase" aria-hidden="true">#</a> Google Firebase</h2><ol><li><p>Make sure you have <a href="https://www.npmjs.com/package/firebase-tools" target="_blank" rel="noopener noreferrer">firebase-tools</a> installed.</p></li><li><p>Create <code>firebase.json</code> and <code>.firebaserc</code> at the root of your project with the following content:</p></li></ol><p><code>firebase.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;hosting&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;public&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;ignore&quot;</span><span style="color:#D4D4D4;">: []</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.firebaserc</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;projects&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;default&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>After running <code>yarn docs:build</code>, deploy using the command <code>firebase deploy</code>.</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Please refer to <a href="https://firebase.google.com/docs/cli" target="_blank" rel="noopener noreferrer">Firebase CLI official guide</a> for more details.</p></div><h2 id="heroku" tabindex="-1"><a class="header-anchor" href="#heroku" aria-hidden="true">#</a> Heroku</h2><ol><li><p>Install <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" rel="noopener noreferrer">Heroku CLI</a>.</p></li><li><p>Create a Heroku account by <a href="https://signup.heroku.com" target="_blank" rel="noopener noreferrer">signing up</a>.</p></li><li><p>Run <code>heroku login</code> and fill in your Heroku credentials:</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">heroku login</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>Create a file called <code>static.json</code> in the root of your project with the below content:</li></ol><p><code>static.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;root&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is the configuration of your site; read more at <a href="https://github.com/heroku/heroku-buildpack-static" target="_blank" rel="noopener noreferrer">heroku-buildpack-static</a>.</p><h2 id="netlify" tabindex="-1"><a class="header-anchor" href="#netlify" aria-hidden="true">#</a> Netlify</h2><ol><li><p>On <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>, set up a new project from GitHub with the following settings:</p><ul><li><strong>Build Command:</strong> <code>yarn docs:build</code></li><li><strong>Publish directory:</strong> <code>docs/.vuepress/dist</code></li></ul></li><li><p>Set <a href="https://docs.netlify.com/configure-builds/environment-variables" target="_blank" rel="noopener noreferrer">Environment variables</a> to choose node version:</p><ul><li><code>NODE_VERSION</code>: 14</li></ul></li><li><p>Hit the deploy button.</p></li></ol><h2 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> Vercel</h2><p>See <a href="https://vercel.com/guides/deploying-vuepress-to-vercel" target="_blank" rel="noopener noreferrer">Creating and Deploying a VuePress App with Vercel</a>.</p>',21),v={},m=(0,e(61220).Z)(v,[["render",function(s,n){const e=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[l,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[o,(0,a.Wm)(e,{to:"/vuepress-next/reference/config.html#base"},{default:(0,a.w5)((()=>[i])),_:1}),t]),p]),r]),c,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[d,(0,a.Wm)(e,{to:"/vuepress-next/reference/config.html#base"},{default:(0,a.w5)((()=>[u])),_:1}),D]),y]),h]),b])}]])}}]);