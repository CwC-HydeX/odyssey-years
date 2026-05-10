# 部署到公网

## 推荐方案：Vercel（Next.js 原生托管，免费）

> Vercel 是 Next.js 团队自家的托管平台，零配置识别 Next.js 项目，免费额度对个人项目完全够用。

### 步骤

1. **代码先推到 GitHub**（见仓库根 README 下方"推送到 GitHub"流程）。
2. 打开 https://vercel.com/ → 用 GitHub 登录。
3. `Add New… → Project` → 选刚才的仓库 → **Import**。
4. 关键设置：
   - **Root Directory**：`site`（**必须改**——本仓库 Next.js 项目在 `site/` 子目录里，不是根目录）
   - Framework Preset：会自动识别为 `Next.js`
   - Build Command：`npm run build`（默认即可）
   - Output Directory：`.next`（默认即可）
   - Install Command：`npm install`（默认即可）
   - Node.js Version：选 `22.x`（项目用了 ES2020 + Next 14.2，22.x 最稳）
5. `Deploy`。等 1-2 分钟，Vercel 会给一个 `xxx.vercel.app` 域名，立即可访问。
6. 之后每次 `git push` 都会自动重新部署；PR 还会得到 preview URL。

### 自定义域名（可选）

Vercel 项目设置 → `Domains` → 添加你的域名 → 按提示加 CNAME 解析记录到 `cname.vercel-dns.com` 即可。

---

## 备选方案 A：Cloudflare Pages

- 在 https://dash.cloudflare.com/ → `Workers & Pages` → `Create → Pages → Connect to Git`。
- Build command：`cd site && npm install && npm run build`
- Build output directory：`site/.next`
- 需要装 `@cloudflare/next-on-pages` 适配器；比 Vercel 多一两步配置，但 CDN 节点比 Vercel 在中国大陆更友好一点。

## 备选方案 B：自建 VPS

- 任意 Linux 机器，装 Node 22.x。
- `git clone … && cd site && npm ci && npm run build && npm start`（默认监听 3000）。
- 用 `pm2` 守护：`pm2 start "npm start" --name odyssey --cwd ./site`。
- 前面套 nginx 反代 + Let's Encrypt 证书。

---

## 中国大陆访问注意

- **Vercel / Cloudflare 域名在大陆访问不稳**。如果主要给国内读者看：
  - 备一个国内云服务商（阿里云 / 腾讯云 / 七牛）的对象存储 + CDN，做 SSR 的话用国内云主机；
  - 或者把站点静态导出（`next build && next export`，但本站用了 SSR-only 特性如 Lenis SSR check，需要先确认是否能纯静态导出）；
  - 国内域名需备案（ICP）。

- **不备案的快速方案**：用一个国内 SLB 反代到 Vercel/CF，自有域名解析到这个 SLB。但严格意义上这叫"绕备案"，长期不可靠。

最简单：Vercel 部署 + 给的 `*.vercel.app` 域名先用着，后续要正式投放再上国内合规线路。

---

## 字体注意

本站用了 `next/font/google` 加载 Source Serif 4 / JetBrains Mono / Noto Serif SC，
**构建时**会从 Google Fonts 下载并打到 bundle 里。Vercel 构建机器在境外，没问题。
如果在境内 VPS 上 `npm run build` 失败提示拉不到字体，需要：

```powershell
# 临时方案：开代理
$env:HTTPS_PROXY = "http://127.0.0.1:7890"
npm run build
```

或者把 fonts 改为本地 self-host（`next/font/local`）。
