"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    n: "01",
    name: "身份探索",
    en: "Identity Exploration",
    west: "我要找到真实的自己",
    cn: "我要找到一个能让爸妈满意的回答",
    body: "工作 / 爱情 / 世界观三个核心领域的反复尝试。Arnett 在 1995–2000 访谈 300 名 18-29 岁后总结：恋爱平均时长从青少年期 5-12 个月 拉长到 21 个月——年轻人开始把自己正在形成的身份当作选择伴侣的参考点。",
  },
  {
    n: "02",
    name: "不稳定",
    en: "Instability",
    west: "频繁跳槽、跨国搬家、合租流动",
    cn: "不停考公考研，考点和岗位不停换",
    body: "美国 1960s 与父母同住的男性约 9-10%；2011 年攀升到 19%。加拿大 1981 年 27.5% / 2001 年 41%。这些数字背后不是固守传统，而是经济不稳定性的直接反映。",
  },
  {
    n: "03",
    name: "自我聚焦",
    en: "Self-focus",
    west: "gap year、独自旅行、心理咨询",
    cn: "关上门刷短视频，一个人吃饭",
    body: "自我聚焦本身就是一种阶级特权。需要迅速进入劳动力市场养活自己或家人的年轻人无法享受这种“自我发现”的时光——他们的“自我聚焦”不是对未来的投资，而是对生存的被迫关注。",
  },
  {
    n: "04",
    name: "过渡感",
    en: "Feeling In-Between",
    west: "我既是少年也是大人",
    cn: "我既不是真社畜也不是真儿子",
    body: "这一特征对应 Marcia 的“身份道德期”（Identity Moratorium）——积极探索各种选择但尚未做出承诺。本应短暂的过渡，被新兴成年期理论描绘为可以延长十多年。",
  },
  {
    n: "05",
    name: "可能性 / 乐观",
    en: "Possibilities",
    west: "92% 相信未来比父辈好",
    cn: "普遍相信未来比父辈差",
    body: "最致命的反差。乐观感是奥德赛时期被合法化的心理基础——你相信前面有光，所以漂着不是问题。一旦这个乐观被抽掉，奥德赛时期就退化成了纯粹的卡夫卡式困局：永远在路上，但路本身已经不通向任何地方。",
  },
];

export default function Prologue() {
  const [idx, setIdx] = useState(0);
  const f = FEATURES[idx];
  return (
    <section id="prologue" className="relative bg-paper border-b border-line">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-10 pt-32 pb-20">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <div className="mono text-[11px] tracking-[0.2em] text-clay">CHAPTER 01</div>
            <div className="mono text-[11px] tracking-[0.2em] text-muted mt-1">Arnett 五特征 / 东西错位</div>
          </div>
          <div className="md:col-span-9">
            <h2 className="h-section">
              一个理论框架，<br />
              <span className="serif italic text-muted font-normal">在中文语境里被翻译变形了五次。</span>
            </h2>
            <p className="serif text-muted text-[16px] leading-[1.7] max-w-[55ch] mt-8">
              Jeffrey J. Arnett 在 2000 年提出 Emerging Adulthood，归纳出五个本质特征。每一项放进 2026 年的中国语境，都会发生一次变形——前四项的变形是温和的，最后一项是<em className="text-clay not-italic">致命的反向</em>。
            </p>
          </div>
        </div>

        {/* tab bar — 正常文档流，不浮动 */}
        <div className="py-4 border-y border-line">
          <div className="flex flex-wrap gap-x-8 gap-y-3 items-end">
            {FEATURES.map((feat, i) => {
              const active = i === idx;
              return (
                <button
                  key={feat.n}
                  data-cursor="hover"
                  onClick={() => setIdx(i)}
                  className="group inline-flex flex-col items-start py-2 origin-bottom-left"
                  style={{
                    transform: active ? "scale(1.12)" : "scale(1)",
                    transition: "transform .5s var(--ease-brand)",
                  }}
                >
                  <span className="inline-flex items-baseline gap-2">
                    <span
                      className="mono text-[11px] tracking-[0.18em]"
                      style={{
                        color: active ? "var(--clay)" : "var(--muted)",
                        transition: "color .4s var(--ease-brand)",
                      }}
                    >
                      {feat.n}
                    </span>
                    <span
                      className="font-sans text-[15px] tracking-[-0.01em]"
                      style={{
                        color: active ? "var(--ink)" : "var(--muted)",
                        fontWeight: active ? 600 : 400,
                        transition: "color .4s var(--ease-brand), font-weight .4s var(--ease-brand)",
                      }}
                    >
                      {feat.name}
                    </span>
                  </span>
                  <span
                    className="block h-[2px] mt-1.5 transition-all duration-500 ease-brand"
                    style={{
                      width: active ? "100%" : 0,
                      background: "var(--clay)",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* content */}
        <div className="min-h-[420px] mt-16 grid md:grid-cols-12 gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="md:col-span-12 grid md:grid-cols-12 gap-10"
            >
              <div className="md:col-span-5">
                <div className="mono text-[11px] tracking-[0.2em] text-muted mb-3">{f.en}</div>
                <h3 className="font-sans font-medium text-[40px] md:text-[64px] leading-[1.0] tracking-[-0.02em]">
                  {f.name}
                </h3>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="bg-card p-5 border border-line">
                    <div className="mono text-[10px] tracking-[0.18em] text-muted mb-2">WEST · 西方青年</div>
                    <div className="serif text-[15px] leading-[1.55]">{f.west}</div>
                  </div>
                  <div className="bg-paper p-5 border border-clay/40">
                    <div className="mono text-[10px] tracking-[0.18em] text-clay mb-2">CHINA · 中国青年</div>
                    <div className="serif text-[15px] leading-[1.55]">{f.cn}</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="serif text-[19px] md:text-[22px] leading-[1.6] text-ink/90 max-w-[42ch]">
                  {f.body}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
