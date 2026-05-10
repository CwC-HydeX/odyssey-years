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

## 主页 `/` 章节顺序

垂直高度 ≈ 22-24 屏（桌面 1080p），顺序与文件：

| # | 章节 | 文件 | 关键设计 |
|---|---|---|---|
| 00 | `Loom`（fixed 装置，不占文档流） | `components/Loom.tsx` | 滚动驱动织布机，最高只到 72%，详见下文 |
| 01 | `Hero` | `components/sections/Hero.tsx` | 标题 `clip-path` reveal + 三层视差；§01 *WHAT* 名词解释段（serif 双段、左 hairline 标尺）；§02 *THESIS* 核心论点；4 项底部角注 |
| 02 | `QuoteWall` | `sections/QuoteWall.tsx` | 五条金句的纸面排版墙 |
| 03 | `DataGrid` | `sections/DataGrid.tsx` | Odometer 数字 + IO 触发的事实卡 |
| 04 | `Prologue` | `sections/Prologue.tsx` | Arnett 五特征 sticky + AnimatePresence 切换 |
| 05 | `ChapterOne` | `sections/ChapterOne.tsx` | 4 个 sub-tab：四个全球引擎 / 经济结构 / 心理与文化 / 阶级批评。**心理与文化** tab 已重设计：圆角卡 + clay 题头短杠 + 右上角 chip + 右下水印数字 + stagger whileInView |
| 06 | `LabelGenealogy` | `sections/LabelGenealogy.tsx` | GSAP ScrollTrigger pin + 横向 scrub；7 个标签（葛优躺→编制崇拜）；收尾段用 clay-left-bordered 引文盒，z-20 覆盖时间基线 |
| 07 | `ChinaDifference` | `sections/ChinaDifference.tsx` | 五个差异，每行三栏 split-pane（编号 / WEST / CHINA·2026），中央 clay `vs` 圆徽，hover 切到 card 底色；下方动画 disclosure「五个值得警惕的认知陷阱」（受控 height + stagger，不是原生 details） |
| 08 | `XiaoLiScene` | `sections/XiaoLiScene.tsx` | `#262624` 暗场 + 五扇窗 tabs（14:00 / 17:30 / 21:14 / 23:52 / —）；左窗用 SVG 抽象图（标签页 / 拨号 / 城乡两点 / 经验条 / 空 box），切换时上下窗帘对开 0.7s |
| 09 | `Responses` | `sections/Responses.tsx` | 三件事的回应卡（不是大黑框，是 `bg-paper border` 三联） |
| 10 | `MarqueeFooter` | `sections/MarqueeFooter.tsx` | 跑马灯，2 副本 × 4 段文本结构，`x: 0% → -50%` 完美对齐，无视觉跳变 |

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

入口：`app/sub/genealogy/page.tsx`（≈ 880 行单文件，多个 local section function 组合）。

**叙事弧**：从 Brooks 2007 NYT 专栏的原句切入 → 拆 Arnett 2000 五特征 → 三大前置条件 → 经济结构 → 心理学 → 阶级批评 → 收尾。

| 段 | 函数 | 设计要点 |
|---|---|---|
| 0 | `Hero()` | 大标题 `奥德赛时期 / Odyssey Years`，serif italic 副题；三段 lead 文 |
| 1 | `BrooksQuote()` | NYT 原句 pull-quote，纸面注释风 + 出版信息 mono 字体角注 |
| 2 | `FiveFeatures()` + `FeatureCard()` | Arnett 2000 五特征卡牌（Identity / Instability / Self-focus / In-between / Possibilities），左侧大编号 + clay rule，hover 升起 |
| 3 | **`ThresholdViz()`** | **本子页的签名装置**：滑块控制「成年门槛」从 1960 → 2026，下方 5 项指标（首婚年龄 / 首育年龄 / 首次稳定就业 / 首套房年龄 / 离开父母家年龄）实时插值；用 `lerp` + `pickFrame` 在 6 个时间锚点之间做平滑过渡，所有数字用本页内 `Counter` 滚动 |
| 4 | `Counter({ tag, cn, value, unit, bar, accent })` | 公共数字部件，IntersectionObserver 触发后 1.6s cubic-out 滚到目标，下方 progress bar 同步生长 |
| 5 | `Preconditions()` | 三大前置条件：知识经济 / 避孕革命 / 女性运动；每条左 cap 数字、右文字 + 一张说明小图 |
| 6 | `Economic()` | 住房成本爆炸 / 学生债 / 零工 / AI 自动化，4 行 `border-t` 编辑式表格 |
| 7 | `Psyche()` | 比较 / 四分之一危机 / FOMO / Erikson-Marcia 道德期延长 |
| 8 | `Critique()` | Côté《被逮捕的成人期》引文 + 中产特权 callout |
| 9 | `Conclusion()` | 收束回主页，提供回主站锚点跳转 |
| / | `GenealogyPage()` | 顶层组装 + `<SubPageNav>` |

**已修复**（曾经的三个 bug）：
1. `Counter` 慢半拍 → IO threshold 改 `0.4`，cubic-out 改 1600ms；
2. 横向滚动越界 → root `<main>` 加 `overflow-x-clip`；
3. 卡片 + chip 错位 → `FeatureCard` 用 `relative` + `absolute` chip 而非 flex inline。

---

## 子页 2 · `/sub/china` — 中国式失败惩罚

入口：`app/sub/china/page.tsx`（≈ 1160 行，9 个 section function）。

**叙事弧**：场景化序幕 → 数据墙 → **词典式标签谱系**（签名装置）→ 五个差异 → 结构性诊断 → 全职儿女日记 → 编制崇拜 → Coda。

| 段 | 函数 | 设计要点 |
|---|---|---|
| 0 | `Hero()` | 一行 hero claim：「编制崇拜 / Cult of Establishment」+ 副标 + clay 装饰行 |
| 1 | `ScenePrologue()` | 一段 reportage 场景（小李 26 岁 · 投递 327 份简历）+ 大编号 |
| 2 | `StatsBoard()` + `StatCard()` | 数字墙：考公报录比 / 全职儿女估算 / 应届剩余率 / 第一份工作流失率，用 `lerp` 同 ThresholdViz 一脉同源的数字滚动 |
| 3 | **`LexiconViz()`** | **本子页的签名装置 · 总高度 520vh**：模仿《现代汉语词典》的滚动单页 — 上部固定 sticky 装置区，scroll 推进时按 progress 切换 7 个网络流行词条目（葛优躺 → 996.ICU → 躺平 → 摆烂 → 全职儿女 → 鼠鼠/长衫 → 编制崇拜）。每条都有：注音 / 词性标签 / 释义 / 例句 / 出处年份 / clay 心理学侧栏。视觉锚是中央那本翻开的"词典"动效 |
| 4 | `DiffTable()` + `DiffRow()` | 中西差异精简表，5 行 split-pane，与主页 `ChinaDifference` 同语法但更紧凑，作为子页内部回锚 |
| 5 | `Structure()` | 户籍 / 社保 / 婚恋 / 编制 四大结构性约束，左侧 timeline + 右侧文字 |
| 6 | `Diary()` | 「全职儿女」一日 24h 时间线日记，handwritten serif italic |
| 7 | `CultOfEstablishment()` | 编制崇拜的三层心理：稳定 / 体面 / 风险厌恶；红印章风格的"通过/未通过"图章装饰 |
| 8 | `Coda()` | 大字收尾：「从『我能改变世界』 / 到『世界改不了我』」，已按设计调到 `clamp(40px, 7vw, 120px)`，行高 0.96 |
| / | `ChinaPage()` | 顶层组装 + `<SubPageNav>` |

**辅助**：本文件内私有 `lerp(a, b, t)` 用于 LexiconViz 进度插值。

---

## 全局组件清单

| 组件 | 作用 | 关键参数 |
|---|---|---|
| `LenisProvider` | 平滑滚动 | duration 1.2 / expo-out |
| `CustomCursor` | 自定义光标 | 8px → 56px hover；`mix-blend-difference`；< 900px 自动禁用 |
| `MagneticButton` | 磁吸按钮 | 100px 半径，位移 0.4× |
| `ScrollProgress` | 顶部进度条 + 章节滚切 | 章名切换 240ms roll |
| `ChapterSidebar` | 左侧 mini-map | `getElementById` 高亮 |
| `StatusBadge` | 左下角呼吸点 + 实时时间 | 1s 间隔 |
| `RawSourceDrawer` | 右下角原始素材抽屉 | spring 600ms |
| `SubPageNav` | 子页吸顶导航 | 提供回主站锚点；两个 `/sub/*` 都用它 |
| `Loom` | **主页专属装置** | 见上 |
| `RevealText` / `MaskReveal` / `ClipReveal` | 文字入场 | char stagger 30ms / clip-path / y-translate |
| `OdometerNumber` | 主页用的数字滚动 | IO + cubic ease-out 1.8s |

---

## 动效 / 排版 SOTA 清单

- Hero 标题 `clip-path` reveal + parallax 三层（背景 0.5 / 主体 1.0 / 前景 1.2 隐式）；§01 *WHAT* 与 §02 *THESIS* 共享 `md:grid-cols-12` 12 栏对齐，左侧 stacked label `§ 0X / WHAT|THESIS` 不换行。
- Arnett 五特征：sticky tab + AnimatePresence 切换 600ms。
- ChapterOne：sub-tab 横向切换 + hairline 滑动指示器；心理与文化 tab 用圆角 + clay 题头短杠 + 角标 chip + 水印数字。
- **LabelGenealogy（主页）**：GSAP ScrollTrigger pin + 横向 scrub（约 7 屏水平距离 → 1 屏垂直距离）；收尾段独立引文盒 z-20 覆盖时间基线。
- **ChinaDifference**：3 栏 split-pane + 中央 `vs` 圆徽 hover 反色；底部 `五个值得警惕的认知陷阱` 改为受控 disclosure（`AnimatePresence` + `height: auto`）+ 内卡 stagger 0.18s+0.08i 入场；标题字号已加大到 18-22px。
- XiaoLiScene 暗场（`#262624`）+ AnimatePresence dim opacity 0→1→0 + 上下窗帘对开 0.7s。
- MarqueeFooter：双副本无缝循环，`x: 0% → -50%` 在两副本边界像素级对齐。
- 数据卡片 odometer：IO 触发后 1800ms cubic-out 滚动到目标。
- 全部 transition 统一缓动 `cubic-bezier(0.65, 0, 0.35, 1)`，CSS var 名 `--ease-brand`。

---

## 配色 Token

```css
--paper:    #FAF9F5  /* Anthropic paper-tone */
--card:     #F0EEE6
--ink:      #1F1E1D
--muted:    #6B6862
--line:     #E5E1D8
--clay:     #CC785C  /* Claude clay 主强调，全站只在 1-2 处 */
--clay-dark:#B85F3F  /* hover */
--nightBg:  #262624  /* 小李日常暗场 */
--nightClay:#D4876A
```

全站叠 SVG turbulence noise，opacity 0.04，mix-blend-multiply。

---

## 字号 / 字体

- 中文衬线 / 英文衬线：Noto Serif SC + Source Serif 4（混排 fallback）
- 中文 / 英文 sans：GeistSans
- mono：JetBrains Mono
- Hero 主标题 `hero-title`：`clamp(64px, 9.5vw, 168px)`
- Section h2 `h-section`：`clamp(36px, 5.2vw, 76px)`

---

## 如何替换内容

每个 section 把数据写在文件顶部的常量数组里：
- 主页 `Hero` / `QuoteWall` / `DataGrid` / `ENGINES` / `ECON_BLOCKS` / `PSYCH` / `CLASS_CRITIQUE` / `LABELS` / `DIFFS` / `WINDOWS` / `RESPONSES`
- 子页 `/sub/genealogy`：`FEATURES` / `THRESHOLD_FRAMES` / `ECON` / `PSY` 等
- 子页 `/sub/china`：`STATS` / `LEX_ENTRIES`（7 条标签谱系）/ `STRUCT_BLOCKS` / `DIARY_LINES` / `CULT_LAYERS`

切到另一个研究主题时：

1. 把 `app/page.tsx` 的章节顺序按新主回复重排；
2. 改各 section 顶部数据数组；
3. 改 `app/layout.tsx` 的 `metadata`；
4. **替换 `Loom.tsx` 为新主题的专属装置**——它是每个研究网站的灵魂，不能跳过；
5. 子页面同理：替换 `ThresholdViz` / `LexiconViz` 为新主题的签名装置。

> 当前没有用 `next-mdx-remote` / `contentlayer` 渲染原始 .md，因为本站对每段内容做了图形化重构（表格变成左右分屏、清单变成横向 pinned scroll、引文变成暗场长文）。原始 .md 通过右下角 `原始素材` 抽屉指引用户去 `/一些想法/奥德赛时期_延长的青春与漂泊一代/` 目录下查看。

---

## 已知限制

- 横向 pinned 滚动（`LabelGenealogy`）依赖 GSAP ScrollTrigger，与 Lenis 同时使用时如发现轻微抖动，可在 `LenisProvider` 中添加 `lenis.on("scroll", ScrollTrigger.update)` 桥接；当前版本走默认 raf，桌面端实测平滑。
- 自定义光标在 < 900px 移动端自动禁用。
- 暗色模式 token 已在 `globals.css` 准备好，但未做切换 UI——给 `<html>` 加 `class="dark"` 即可启用。
- VS Code 偶尔报 `@/components/sections/XiaoLiScene` 或 `@/components/Loom` 找不到模块——这是 TS Server 缓存陈旧（文件实际存在、`tsconfig.paths` 也正确）。`Ctrl+Shift+P` → `TypeScript: Restart TS Server` 即可消除。
