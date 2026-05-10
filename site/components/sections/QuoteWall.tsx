"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QUOTES = [
  {
    n: "01",
    t: "他们想回家，",
    h: "但奥林匹斯山上的诸神不允许。",
    src: "—— Brooks 隐喻的当代翻译",
  },
  {
    n: "02",
    t: "中国年轻人面临的不是奥德赛时期，",
    h: "是奥德赛时期被取消乐观分量之后剩下的部分。",
    src: "—— 主回复 / 第二节",
  },
  {
    n: "03",
    t: "中国社会没有给奥德赛时期",
    h: "发准生证。",
    src: "—— 主回复 / 第四节",
  },
  {
    n: "04",
    t: "Brooks 说西方人不愿长大，",
    h: "中国年轻人则是直接放弃做“年轻人”这个角色。",
    src: "—— 主回复 / 第三节 ④",
  },
];

function QuoteRow({ q, idx }: { q: (typeof QUOTES)[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  return (
    <div ref={ref} className="border-t border-line py-20 md:py-28 first:border-t-0">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-10 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-2">
          <div className="mono text-[11px] tracking-[0.2em] text-clay">{q.n}</div>
          <div className="mono text-[10px] tracking-[0.2em] text-muted mt-1">QUOTE / 金句</div>
        </div>
        <div className="md:col-span-9">
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[34px] md:text-[64px] leading-[1.05] tracking-[-0.02em] font-medium"
            >
              {q.t}
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="serif italic text-[34px] md:text-[64px] leading-[1.05] tracking-[-0.01em] text-clay"
              style={{ fontWeight: 400 }}
            >
              {q.h}
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mono text-[11px] tracking-[0.2em] text-muted mt-10"
          >
            {q.src}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function QuoteWall() {
  return (
    <section id="quotes" className="relative bg-paper">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-10 py-20">
        <div className="flex items-baseline gap-6 mb-2">
          <span className="mono text-[11px] tracking-[0.2em] uppercase text-muted">— Pull Quotes</span>
          <span className="mono text-[11px] tracking-[0.2em] uppercase text-muted">04 句 · 撕开问题的缝隙</span>
        </div>
      </div>
      {QUOTES.map((q, i) => (
        <QuoteRow key={q.n} q={q} idx={i} />
      ))}
    </section>
  );
}
