"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DIFFS = [
  {
    n: "01",
    head: "缺失的 gap year",
    west: "美国/欧洲简历上一段间隔年写着“在尼泊尔徒步”或“自学独立游戏开发”，HR 会觉得有趣甚至加分。",
    cn: "中国 HR 看到三个月空窗，第一反应是“这人是不是有问题”。这不是 HR 水平差异，是社会容错机制差异。",
  },
  {
    n: "02",
    head: "六个钱包陷阱",
    west: "美国一个中产家庭三个孩子，一个失败两个成功是可以接受的概率分布。",
    cn: "独生子女家庭只有一颗子弹，失败就是全军覆没。父母 + 双方祖辈共 6 人押注 1 子——年轻人的每一次选择都背着六个人的期待。",
  },
  {
    n: "03",
    head: "户籍与社保的地理锁定",
    west: "西方年轻人可以相对自由地迁移、累积社保。",
    cn: "社保、医保、买房资格、子女入学全部和缴纳地与户籍绑定。一个 25 岁想用三年时间在三个城市试错，等于自愿放弃所有累积权益。",
  },
  {
    n: "04",
    head: "婚恋市场的剧烈性别分化",
    west: "30 多岁单身在西方很常见。",
    cn: "立刻引发“你怎么还没结婚”的集体忧虑。彩礼、房车不仅是符号，更是实实在在的进入婚姻的成本。",
  },
  {
    n: "05",
    head: "“稳定”是一种宗教",
    west: "stability 在西方是中立词汇，有时甚至带有消极含义。",
    cn: "编制崇拜是这种心态的最高表现。一个基层公务员所有维度都可能不如私企高管，但在社会地位和心理安全感上是绝对赢家。探索本身被污名化了。",
  },
];

const TRAPS: [string, string, string][] = [
  ["陷阱一", "把结构问题心理化", "把“找不到工作”翻译成“我还在自我探索”是一种语言上的镇痛剂。它让本来应该指向住房、就业、税收、教育结构的愤怒变成指向自己内心的疑问。"],
  ["陷阱二", "把中产经验普遍化", "Brooks 的奥德赛时期，写的其实是常春藤毕业生在曼哈顿合租的故事。一个从郑州中专毕业的 19 岁女工每天在富士康打螺丝，她不存在奥德赛时期。"],
  ["陷阱三", "把延迟当常态", "一旦被叙事化为“这一代人就是这样”，就有了一个隐藏的政策逻辑：既然这是发展阶段的自然产物，那么不需要改善结构。"],
  ["陷阱四", "把焦虑当美学", "短视频、播客、出版业把“四分之一人生危机”包装成了一种气质。书本身就是迷茫期的一部分赢利模型。"],
  ["陷阱五", "把退场当解放", "“躺平”“全职儿女” 反抗了什么？反抗之后呢？如果反抗的结果是退回到家庭的庇护下、依然消费父母的积蓄，那么这个反抗其实是另一个版本的依附。"],
];

export default function ChinaDifference() {
  const [open, setOpen] = useState(false);

  return (
    <section id="chapter-two" className="relative bg-paper border-b border-line">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-10 py-32">
        <div className="grid md:grid-cols-12 gap-8 mb-20 border-b border-line pb-12">
          <div className="md:col-span-3">
            <div className="mono text-[11px] tracking-[0.2em] text-clay">CHAPTER 04</div>
            <div className="mono text-[11px] tracking-[0.2em] text-muted mt-1">中国式奥德赛 / 五个差异</div>
          </div>
          <div className="md:col-span-9">
            <h2 className="h-section">
              西方给奥德赛时期发了准生证，<br />
              <span className="serif italic text-muted font-normal">中国没有。</span>
            </h2>
            <p className="serif text-muted text-[16.5px] leading-[1.75] max-w-[55ch] mt-8">
              中国年轻人正在过一种被官方话语和家庭话语都不承认的生活。他们既不是“在工作”，也不是“在读书”，也不是“在家庭里”，他们存在于一个所有现有词汇都不太指涉的空间里。
            </p>
          </div>
        </div>

        {/* === 重设计的差异列表：五张独立对比卡，中间 vs 符号 + clay rule line === */}
        <div className="flex flex-col gap-px bg-line border border-line">
          {DIFFS.map((d, idx) => (
            <motion.article
              key={d.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid md:grid-cols-12 bg-paper hover:bg-card/40 transition-colors duration-700"
            >
              {/* 左侧编号 + 标题 */}
              <div className="md:col-span-3 p-8 md:p-10 flex md:flex-col gap-6 md:gap-3 items-start md:border-r md:border-line">
                <div
                  className="serif italic text-clay/70 leading-none group-hover:text-clay transition-colors duration-700"
                  style={{ fontSize: "clamp(40px, 4vw, 56px)" }}
                >
                  {d.n}
                </div>
                <h4 className="font-sans font-medium text-[20px] md:text-[24px] tracking-[-0.02em] leading-[1.15] max-w-[14ch]">
                  {d.head}
                </h4>
              </div>

              {/* 右侧：严格 1:1 双列，clay 竖线分隔，用明暗对比表达 WEST vs CHINA */}
              <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2">
                {/* WEST — 褪色处理，历史参照感 */}
                <div className="relative p-8 md:p-10 border-b border-line md:border-b-0">
                  <div className="mono text-[10px] tracking-[0.22em] text-muted mb-4">WEST</div>
                  <p className="serif text-[15.5px] leading-[1.8] text-ink/85">{d.west}</p>

                  {/* clay 竖线 + 居中小点，取代任何文字 badge */}
                  <div className="absolute right-0 inset-y-0 hidden md:block pointer-events-none">
                    <div className="absolute inset-0 w-px bg-clay/25 group-hover:bg-clay/55 transition-colors duration-700" />
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-clay/50 bg-paper group-hover:bg-clay group-hover:border-clay transition-all duration-500 flex items-center justify-center mono text-[9px] tracking-wider text-clay/70 group-hover:text-paper">vs</div>
                  </div>
                </div>

                {/* CHINA — 全墨，当下冲击感 */}
                <div className="p-8 md:p-10 bg-card/20 group-hover:bg-card/50 transition-colors duration-700">
                  <div className="mono text-[10px] tracking-[0.22em] text-clay mb-4">CHINA · 2026</div>
                  <p className="serif text-[15.5px] leading-[1.8] text-ink">{d.cn}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* === 五个认知陷阱 · 动画受控展开 === */}
        <div className="mt-20 border border-line rounded-[20px] bg-card/50 overflow-hidden">
          <button
            data-cursor="hover"
            onClick={() => setOpen((v) => !v)}
            className="cursor-none w-full flex items-center justify-between gap-6 px-8 md:px-10 py-7 md:py-8 text-left group"
          >
            <div className="flex items-baseline gap-4 min-w-0">
              <span className="mono text-[10px] tracking-[0.22em] text-clay shrink-0">
                COMMENTARY · 05
              </span>
              <span className="font-sans font-medium text-[18px] md:text-[22px] tracking-[-0.015em] text-ink truncate">
                五个值得警惕的认知陷阱
              </span>
            </div>
            <span
              className="shrink-0 inline-flex items-center gap-3 mono text-[11px] tracking-[0.22em] uppercase text-clay"
              style={{ transition: "opacity .3s" }}
            >
              {open ? "收起" : "展开看"}
              <span
                aria-hidden
                className="inline-block w-7 h-7 rounded-full border border-clay flex items-center justify-center"
                style={{
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform .55s var(--ease-brand)",
                }}
              >
                ↓
              </span>
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="trap-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-8 md:px-10 pb-10 md:pb-12 grid md:grid-cols-2 gap-x-10 gap-y-10">
                  {TRAPS.map(([n, h, b], i) => (
                    <motion.div
                      key={n}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.18 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="relative pl-5 border-l-2 border-clay/40"
                    >
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="mono text-[10px] tracking-[0.22em] text-clay">{n}</span>
                        <span className="font-sans font-medium text-[16px] md:text-[18px] tracking-[-0.015em] text-ink leading-tight">
                          {h}
                        </span>
                      </div>
                      <p className="serif text-[15px] md:text-[16px] leading-[1.8] text-ink/80">
                        {b}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
