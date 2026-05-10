# 推送到 GitHub 一步到位

**已经替你做完**：
- ✅ `git init` + `main` 分支
- ✅ `.gitignore` 已写（排除 `.tools/` `node_modules/` `.next/` `.vercel/` `.env*` 等）
- ✅ 41 个文件首次 commit 已建立
- ✅ `DEPLOY.md` 已写好 Vercel 部署步骤

**你只需要做两步**：

## 1. 在 GitHub 建空仓库

打开 https://github.com/new

- Repository name: `odyssey-years`（或任意 ASCII 名）
- Public（推荐，Vercel 免费部署最方便）
- **不要勾**任何 `Add README / .gitignore / license`（我们已经有了，勾了会冲突）
- 点 **Create repository**

复制页面顶部那个 URL，形如 `https://github.com/yourname/odyssey-years.git`

## 2. 在本仓库目录跑一条命令

打开 PowerShell：

```powershell
cd "E:\CodeWorkSpace\AML\一些想法\奥德赛时期_延长的青春与漂泊一代"

# 把 <URL> 换成你刚才复制的地址
git remote add origin <URL>
git push -u origin main
```

> 第一次 push 会弹出浏览器让你登录 GitHub 授权（或者要求输入 PAT）。授权后会自动推完。

完成后刷新 GitHub 仓库页，41 个文件就上去了。

## 3. （推荐）连 Vercel 一键部署

按 `DEPLOY.md` 的步骤：vercel.com 用 GitHub 登录 → Import 这个仓库 → **Root Directory 改成 `site`** → Deploy。1-2 分钟后给你一个 `xxx.vercel.app` 域名。

之后每次 `git push`，Vercel 自动重新部署。
