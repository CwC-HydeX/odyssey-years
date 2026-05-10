# 奥德赛时期 · 网站

一份关于「2026 年中国年轻人没有合法漂泊权」的编辑式长读网站。

> 主代理 + 2 子代理研究产出，按 L1（表层）/ L2（中层）/ L3（深层）三层信息架构切分，
> 主页负责论点收束与索引，两个 `/sub/*` 子页面承担深挖与论证。

---

## 快速开始

```powershell
cd 一些想法\奥德赛时期_延长的青春与漂泊一代\site
npm install
npm run dev          # 默认 http://localhost:3000
```

生产构建：`npm run build && npm run start`

> 字体（Source Serif 4、JetBrains Mono、Noto Serif SC）通过 `next/font/google` 在线下载，首次构建需要联网；Geist 通过 `geist` 包加载（已在 dependencies）。
> Node 22.x，pnpm/npm 任意。

---

## 路由总览

| 路由 | 角色 | 入口文件 | 设计装置 |
|---|---|---|---|
| `/` | 主页 · 论点收束 + 索引 | `app/page.tsx` | **帕涅罗珀的织机 / Penelope's Loom** |
| `/sub/genealogy` | 子页 1 · 概念溯源（Brooks → Arnett → 五特征） | `app/sub/genealogy/page.tsx` | **临界滑块 / ThresholdViz** |
| `/sub/china` | 子页 2 · 中国式失败惩罚（标签谱系 + 编制崇拜） | `app/sub/china/page.tsx` | **词典式标签谱系 / LexiconViz** |

主页底部含跳转入口；两个子页内部都装了 `SubPageNav` 回主页吸顶导航。

---


### 主页装置：帕涅罗珀的织机 / Penelope's Loom

文件：`components/Loom.tsx`

> 在荷马史诗里，奥德修斯漂泊的时候，他的妻子佩涅罗珀向求婚者承诺：等我把这块布织完就改嫁。
> 然后她**白天织、晚上拆**——这块布永远不会织完，因为一旦织完，她就要做一个她不愿意做的决定。

- 陶土橙细线 SVG 织机 fixed 在屏幕右侧 vw 25-60% 区间；
- 全页滚动 progress (0..1) 线性映射为已织纬线数：`p × 0.72 × TOTAL_WEFTS`，**滚到底永远只能织到 ~72%**，是有意为之，对应论点「奥德赛时期不是延误，是回家方式被改写」；
- `UNWIND_RANGES = [[0.55, 0.62], [0.78, 0.84]]` 两个区间内（标签谱系尾段「编制崇拜」+ 小李日常退场段），已织部分**反向回抽 25%**，纬线一根根消失；
- 已织部分用 `cloth-grad` 线性渐变（clay-dark → clay）从顶部向下生长成一整块布，每 4 行用纸色 highlight 模拟纬线节奏；
- 梭子（陶土色椭圆 + 拖尾线）每帧 RAF + lerp 0.12 平滑跟随当前进度行；
- 顶部右侧装饰一颗陶土色绕线球；底部 HUD 显示 `XX % WOVEN` / `WEAVING / UNWINDING` 状态行 / 陶土色进度条 + tagline「一架永远织不完的布」；
- **调参**：`TOTAL_WEFTS = 56` / `WARP_COUNT = 9` / `UNWIND_RANGES` / `0.72`（最大织成比例，**不要改**）。

---

## 子页 1 · `/sub/genealogy` — 概念溯源

入口：`app/sub/genealogy/page.tsx`

**叙事弧**：从 Brooks 2007 NYT 专栏的原句切入 → 拆 Arnett 2000 五特征 → 三大前置条件 → 经济结构 → 心理学 → 阶级批评 → 收尾。


## 子页 2 · `/sub/china` — 中国式失败惩罚

入口：`app/sub/china/page.tsx`

**叙事弧**：场景化序幕 → 数据墙 → **词典式标签谱系**（签名装置）→ 五个差异 → 结构性诊断 → 全职儿女日记 → 编制崇拜 → Coda。


