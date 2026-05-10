"use client";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SUBTABS = [
  { id: "engine", n: "i", label: "四个全球引擎" },
  { id: "econ", n: "ii", label: "经济结构" },
  { id: "psych", n: "iii", label: "心理与文化" },
  { id: "class", n: "iv", label: "阶级批评" },
];

const ENGINES = [
  {
    name: "知识经济",
    body:
      "学历从入场券退化为出生证明。西方花了 30 年完成大学普及化，中国只用了 15 年。1999 扩招前大学毕业生还是天之骄子；2026 年 1222 万年新增，本科学历的边际信号价值已接近于零。",
    cn: "中国变压器：学历贬值的加速度",
  },
  {
    name: "避孕革命",
    body:
      "西方避孕革命主要把女性从婚姻里解放出来；中国独生子女女性既享受了城市核心家庭里前所未有的教育投入，又承担了“必须为我家延续香火”的传统压力。两股力量对冲，初婚人数继续创历史新低。",
    cn: "中国变压器：被独生子女政策反向放大",
  },
  {
    name: "女性运动",
    body:
      "中国女性 2024 年硕士及以上占比超过 52%，但职场和婚恋市场对女性的歧视性条款依然顽固。结果是双重错位：女性向上流动的能力增强了，但能匹配的男性供给在减少；男性相对位置下降了，但他们的婚恋预期没有调整。",
    cn: "中国变压器：女性单边崛起",
  },
  {
    name: "青年文化",
    body:
      "西方的青年文化是“40 岁也想保持 25 岁的酷”。中国 2024-2026 的趋势恰恰相反——“25 岁就想活成 55 岁”，直接进入“全职儿女”模式，跳过中间所有奋斗。",
    cn: "中国变压器：反向永远年轻",
  },
];

const ECON_BLOCKS = [
  {
    head: "住房成本爆炸",
    body:
      "1960 年代年轻工人 5-7 年首付 → 2020 年代需 15-20 年。美国 1960s 约 15-20% 年轻人购房，2020s 不足 5%。年轻人首次购房平均年龄从 27 岁推迟到 35 岁。",
  },
  {
    head: "学生债务的枷锁",
    body:
      "美国 2023 年学生债务总额超 1.7 万亿美元，人均 ≈ 3.5 万美元 + 7-8% 利率。当一个 25 岁的年轻人背负这个数字，他无法考虑创业、搬城市、间隔年。教育成了把中产阶级年轻人锁进生存模式的工具。",
  },
  {
    head: "零工经济",
    body:
      "2010s 15% → 2020s 30-40%。表面是“灵活性”，实质是缺乏医疗保险、退休、有偿假和稳定收入。生病或经历个人危机的零工工作者可能失去所有收入——不稳定从过渡变成永久条件。",
  },
  {
    head: "AI 与自动化",
    body:
      "数据输入、客服、行政助理等入门级岗位是 AI 首先吞噬的对象。年轻人需要工作经验来获得更好的工作，但获得第一份工作的门槛大幅上升。两条出路都通向延迟成年。",
  },
];

const PSYCH = [
  {
    head: "社交媒体与无限比较",
    body:
      "心理学早已证明：人类不是按绝对标准评估幸福，而是按参考群体的相对位置。社交媒体把你的参考群体从邻居扩展到数百万陌生人。一个年入 5 万的小城年轻人 24 小时看着硅谷工程师年入 30 万的精修人生——这是系统性的、持续的、无法逃脱的不足感。",
  },
  {
    head: "四分之一人生危机",
    body:
      "Christine Hassler 在 2001 年推广这个术语。当 70% 的三十多岁人群报告自己经历过这种危机时，它已经从个人心理问题演变为结构性的代际问题。两种典型形式：“被锁在外面”（无法获得期望的东西）与“被锁在里面”（被困在不满意的处境中）。",
  },
  {
    head: "FOMO 与完美主义陷阱",
    body:
      "在被无限选择淹没的时代，选择本身变成了痛苦的来源。新兴成年期理论将不确定性正常化为“探索”，但 FOMO 让“探索”变成了一种强迫性的症状——年轻人开始追求一种永远找不到的“最优人生路径”。",
  },
  {
    head: "Erikson · Marcia · 道德期延长",
    body:
      "Erikson 1950s 描绘的青年期身份认同冲突，本应是相对短暂的过渡。但新兴成年期理论表明，Marcia 的“身份道德期”已经从几年延伸到十多年。35 岁仍处于道德期——这是社会的进步还是病理？恐怕两者都是。",
  },
];

const CLASS_CRITIQUE = `
能够从 18-35 岁“探索”自己的奢侈，主要属于那些拥有经济缓冲的年轻人。
中产阶层的年轻人如果第一份工作没按计划，可以回家寻找“更好”的机会。
低收入家庭的年轻人呢？第一份工作就意味着生存。

社会学家 James Côté 在《被逮捕的成人期》中尖锐地指出，新兴成年期的概念隐含了一个有害的暗示：
那些没有“享受”身份探索期、被迅速甩进劳动力市场的年轻人，在某种意义上是“失败者”。
但实际上，他们的“失败”不在于个人选择或心理特征，而在于结构性的经济不平等。
`;

export default function ChapterOne() {
  const [tab, setTab] = useState(0);
  return (
    <section id="chapter-one" className="relative bg-paper border-b border-line">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-10 py-32">
        {/* 章节封面 */}
        <div className="grid md:grid-cols-12 gap-8 mb-24 border-b border-line pb-16">
          <div className="md:col-span-3">
            <div className="mono text-[11px] tracking-[0.2em] text-clay">CHAPTER 02</div>
            <div className="mono text-[11px] tracking-[0.2em] text-muted mt-1">SUB-AGENT 01 · 概念溯源</div>
          </div>
          <div className="md:col-span-9">
            <h2 className="h-section">
              四个让奥德赛时期变长的全球引擎，<br />
              <span className="serif italic text-muted font-normal">与中国的本地变压器。</span>
            </h2>
          </div>
        </div>

        {/* sub-tabs */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 items-end mb-12">
          {SUBTABS.map((s, i) => {
            const active = i === tab;
            return (
              <button
                key={s.id}
                data-cursor="hover"
                onClick={() => setTab(i)}
                className="group inline-flex flex-col items-start py-1 origin-bottom-left"
                style={{
                  transform: active ? "scale(1.1)" : "scale(1)",
                  transition: "transform .5s var(--ease-brand)",
                }}
              >
                <span className="inline-flex items-baseline gap-2">
                  <span
                    className="mono text-[10px] tracking-[0.2em]"
                    style={{
                      color: active ? "var(--clay)" : "var(--muted)",
                      transition: "color .4s var(--ease-brand)",
                    }}
                  >
                    {s.n}.
                  </span>
                  <span
                    className="font-sans text-[18px] md:text-[22px] tracking-[-0.01em]"
                    style={{
                      color: active ? "var(--ink)" : "var(--muted)",
                      fontWeight: active ? 600 : 400,
                      transition: "color .4s var(--ease-brand)",
                    }}
                  >
                    {s.label}
                  </span>
                </span>
                <span
                  className="block h-[2px] mt-1.5 transition-all duration-500 ease-brand"
                  style={{ width: active ? "100%" : 0, background: "var(--clay)" }}
                />
              </button>
            );
          })}
        </div>

        {/* content */}
        <div className="min-h-[460px]">
          <AnimatePresence mode="wait">
            {tab === 0 && (
              <motion.div
                key="engine"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 gap-px bg-line border border-line"
              >
                {ENGINES.map((e, i) => (
                  <div key={i} className="bg-paper p-8 md:p-10">
                    <div className="mono text-[11px] tracking-[0.2em] text-clay mb-3">
                      ENGINE 0{i + 1}
                    </div>
                    <h4 className="font-sans font-medium text-[28px] md:text-[36px] tracking-[-0.02em] mb-2">
                      {e.name}
                    </h4>
                    <div className="mono text-[10px] tracking-[0.18em] text-muted mb-5">{e.cn}</div>
                    <p className="serif text-[15.5px] leading-[1.7] text-ink/85 max-w-[44ch]">{e.body}</p>
                  </div>
                ))}
              </motion.div>
            )}
            {tab === 1 && (
              <motion.div
                key="econ"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {ECON_BLOCKS.map((b, i) => (
                  <div key={i} className="grid md:grid-cols-12 gap-8 border-t border-line pt-10">
                    <div className="md:col-span-3">
                      <div className="mono text-[11px] tracking-[0.2em] text-muted">
                        ii.{String(i + 1).padStart(2, "0")}
                      </div>
                      <h4 className="font-sans font-medium text-[26px] tracking-[-0.02em] mt-2">{b.head}</h4>
                    </div>
                    <p className="md:col-span-8 serif text-[17px] leading-[1.7] text-ink/85 max-w-[58ch]">{b.body}</p>
                  </div>
                ))}
              </motion.div>
            )}
            {tab === 2 && (
              <motion.div
                key="psych"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {PSYCH.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative bg-card border border-line rounded-[20px] p-8 md:p-10 overflow-hidden hover:bg-paper transition-colors duration-700 ease-brand"
                  >
                    {/* 角标 */}
                    <div className="absolute top-0 right-0 mono text-[10px] tracking-[0.22em] text-muted px-4 py-3 border-l border-b border-line rounded-bl-[20px] bg-paper/40">
                      PSY · 0{i + 1}
                    </div>
                    {/* 大编号水印 */}
                    <div
                      aria-hidden
                      className="absolute -bottom-6 -right-2 font-sans font-medium text-line/80 select-none pointer-events-none leading-none tracking-[-0.04em] group-hover:text-clay/15 transition-colors duration-700"
                      style={{ fontSize: "clamp(80px, 9vw, 140px)" }}
                    >
                      0{i + 1}
                    </div>
                    {/* 顶部 clay 短杠 */}
                    <div className="w-10 h-[3px] bg-clay mb-6" />
                    <h4 className="font-sans font-medium text-[24px] md:text-[30px] tracking-[-0.02em] leading-[1.15] mb-4 max-w-[18ch]">
                      {b.head}
                    </h4>
                    <p className="serif text-[15.5px] leading-[1.75] text-ink/80 max-w-[44ch] relative">
                      {b.body}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
            {tab === 3 && (
              <motion.div
                key="class"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-12 gap-8"
              >
                <div className="md:col-span-2">
                  <div className="mono text-[11px] tracking-[0.2em] text-clay">iv. CRITIQUE</div>
                </div>
                <div className="md:col-span-9">
                  <h4 className="font-sans font-medium text-[34px] md:text-[44px] tracking-[-0.02em] mb-8 leading-[1.1]">
                    新兴成年期是<span className="serif italic text-clay font-normal"> 中产阶级特权 </span>被伪装成代际描述。
                  </h4>
                  <div className="serif text-[17px] leading-[1.85] text-ink/85 max-w-[58ch] whitespace-pre-line">
                    {CLASS_CRITIQUE.trim()}
                  </div>

                  <details className="mt-10 group">
                    <summary
                      data-cursor="hover"
                      className="cursor-none mono text-[11px] tracking-[0.2em] uppercase text-clay border-b border-clay/30 pb-2 inline-block"
                    >
                      展开看 · 性别与全球差异 ↓
                    </summary>
                    <div className="mt-6 serif text-[15.5px] leading-[1.75] text-muted max-w-[58ch] space-y-4">
                      <p>
                        中产阶级女性可能经历一种独特的延迟成年——她们既被鼓励“追求梦想和自我实现”，同时又面临“生物钟”的压力。
                        这创造了一种特殊的焦虑状态，既不完全是经济的，也不完全是心理的，而是两者的复杂混合。
                      </p>
                      <p>
                        在许多发展中国家，新兴成年期根本不存在。年轻人 16 岁完成学业后直接进入工作或农业，22-25 岁结婚。
                        即使在西方发达国家内部，新兴成年期的长度也随社保系统、医保制度、社会规范而异。
                      </p>
                    </div>
                  </details>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
