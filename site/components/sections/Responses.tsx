"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RESPONSES = [
  {
    n: "01",
    head: "把延迟和被延迟区分开",
    body: "你是在主动选择多花两年想清楚要做什么（延迟），还是被房价、被就业、被家庭逼着没法做决定（被延迟）？这两件事看起来一样，但心理后果完全不同。前者会让你产生力量，后者会消耗你。",
  },
  {
    n: "02",
    head: "建立一个不依赖单一身份的支点",
    body: "奥德赛时期最大的危险是身份的全面悬空。在这种状态下保持心理稳定的唯一办法，是建立一个不依赖任何外部确认的身份内核——一项长期的技艺、一段持续的关系、一个自定义的项目。这些东西不会让你赚到钱，但会让你在所有外部身份失效的时候依然知道自己是谁。",
  },
  {
    n: "03",
    head: "把当下当主路径，不是过渡期",
    body: "一个常见的错觉是把奥德赛时期看作“真正的人生开始之前的等候室”。这种心态会让你在等候室里浪费十年。没有真正的人生在前面等你——你已经在过你的人生了。",
  },
];

function Card({ r, idx }: { r: (typeof RESPONSES)[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="bg-paper border border-line p-10 md:p-12 hover:bg-card transition-colors duration-700 ease-brand"
    >
      <div className="mono text-[11px] tracking-[0.2em] text-clay mb-6">RESPONSE / {r.n}</div>
      <h3 className="font-sans font-medium text-[28px] md:text-[36px] tracking-[-0.02em] leading-[1.1] mb-6">
        {r.head}
      </h3>
      <p className="serif text-[16px] leading-[1.75] text-ink/85 max-w-[42ch]">{r.body}</p>
    </motion.div>
  );
}

export default function Responses() {
  return (
    <section id="responses" className="relative bg-card border-y border-line py-32">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <div className="mono text-[11px] tracking-[0.2em] text-clay">CHAPTER 06</div>
            <div className="mono text-[11px] tracking-[0.2em] text-muted mt-1">个体 / 三件值得说的事</div>
          </div>
          <div className="md:col-span-9">
            <h2 className="h-section">
              对结构性问题的个体回应，<br />
              <span className="serif italic text-muted font-normal">只有三件值得说的事。</span>
            </h2>
            <p className="serif text-[16px] leading-[1.7] text-muted max-w-[55ch] mt-6">
              通常这类文章会在结尾给出“五个建议”。这些建议都不算错，但都很轻盈。诚实地说——
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {RESPONSES.map((r, i) => (
            <Card key={r.n} r={r} idx={i} />
          ))}
        </div>

        <div className="mt-24 max-w-3xl">
          <p className="serif text-[20px] md:text-[24px] leading-[1.55] text-ink/90">
            奥德修斯漂了十年才回到伊萨卡岛，但他回去的不是出发时的那个家——
            <em className="text-clay not-italic">是一个被他的漂泊重新定义过的家</em>。
          </p>
          <p className="serif text-[16px] text-muted mt-6 max-w-[55ch]">
            这或许才是这个隐喻最深的层次：奥德赛时期不是回家的延误，而是回家的方式本身正在被改写。
          </p>
        </div>
      </div>
    </section>
  );
}
