"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue, useMotionValueEvent } from "framer-motion";
import SubPageNav from "@/components/SubPageNav";

/* ---------------- Hero ---------------- */

const TAG_PEOPLE = [
  { en: "DAVID BROOKS", cn: "命名者", year: "2007" },
  { en: "JEFFREY ARNETT", cn: "理论奠基", year: "2000" },
  { en: "ERIK ERIKSON", cn: "心理社会模型", year: "1950s" },
  { en: "JAMES MARCIA", cn: "身份道德期", year: "1966" },
  { en: "JAMES CÔTÉ", cn: "尖锐批评者", year: "2014" },
];

function Hero() {
  const headline = "奥德赛时期";
  const sub = "概念溯源与社会学解剖";

  return (
    <section className="relative pt-28 md:pt-36 pb-24 px-6 md:px-12 overflow-hidden">
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* top tiny meta band */}
      <div className="relative flex items-center justify-between mono text-[10px] tracking-[0.3em] uppercase text-muted mb-12">
        <span>SUB · 01 / GENEALOGY</span>
        <span className="hidden md:block">2026.04.26 · 深度·概念史</span>
        <span>研究产出 · 7,400 字 · 估读 18 min</span>
      </div>

      <div className="relative grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-9">
          <div className="mono text-[11px] tracking-[0.22em] text-clay mb-6">
            FROM 2007 NYT COLUMN · TO 2026 GLOBAL CONDITION
          </div>
          <h1 className="font-sans font-medium tracking-[-0.03em] leading-[0.92]"
              style={{ fontSize: "clamp(72px, 11.5vw, 184px)" }}>
            {headline.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: i * 0.04, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
          </h1>
          <h2 className="serif italic text-muted mt-4 tracking-[-0.01em]"
              style={{ fontSize: "clamp(28px, 4.2vw, 64px)", lineHeight: 1.05 }}>
            {sub}
          </h2>
        </div>

        <div className="col-span-12 md:col-span-3 md:pb-3">
          <p className="serif text-[15px] leading-[1.75] text-ink/80 max-w-[34ch]">
            从 Brooks 在《纽约时报》的命名，到 Arnett 横跨二十年的访谈，
            再到经济结构推开的延迟成年——
          </p>
          <p className="serif italic text-clay text-[15px] leading-[1.75] mt-3 max-w-[34ch]">
            这一份子代理重新追问：「奥德赛时期」究竟是发展阶段，还是结构性枷锁？
          </p>
        </div>
      </div>

      {/* People band */}
      <div className="relative mt-16 border-y border-line py-8">
        <div className="mono text-[10px] tracking-[0.3em] text-muted mb-5">DRAMATIS PERSONAE / 出场人物</div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-6">
          {TAG_PEOPLE.map((p) => (
            <div key={p.en} className="border-l border-line pl-4">
              <div className="mono text-[11px] tracking-[0.18em] text-ink mb-1">{p.en}</div>
              <div className="serif text-[14px] text-ink/80">{p.cn}</div>
              <div className="mono text-[10px] tracking-[0.2em] text-muted mt-1">{p.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Brooks pull quote ---------------- */

function BrooksQuote() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-card border-y border-line">
      <div className="container mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">CHAPTER · 00</div>
            <div className="mono text-[11px] tracking-[0.22em] text-muted">NAMING AN ERA</div>
            <div className="serif text-[18px] mt-6 text-ink/70">
              2007.10.09 · 《纽约时报》<br/>专栏作家 David Brooks
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="text-clay mono text-[64px] leading-none mb-2">"</div>
            <p className="font-sans font-medium tracking-[-0.02em] text-ink"
               style={{ fontSize: "clamp(32px, 4.2vw, 60px)", lineHeight: 1.15 }}>
              人生不再是<span className="text-muted">四个</span>经典阶段——
              <br/>童年 / 青春期 / 成年 / 老年——
              <br/>而是<span className="text-clay">五个</span>。
              <br/>新增的这一段，叫作 <em className="serif italic">Odyssey Years</em>。
            </p>
            <div className="serif text-[16px] leading-[1.85] text-ink/80 mt-10 max-w-[60ch]">
              他指的，是 20 至 35 岁这一段——年轻人不断更换工作、住所、伴侣与世界观，
              同时背负着「应该已经长大」的罪疚。这并非凭空之论，更早的 2000 年，
              心理学家 <strong>Jeffrey Jensen Arnett</strong> 已在《American Psychologist》
              提出 <em className="serif italic">Emerging Adulthood / 新兴成年期</em>，
              为这段「迷茫期」给出了系统的学术框架。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Arnett 五特征 vertical sticky stack ---------------- */

const FIVE = [
  {
    n: "I",
    en: "IDENTITY EXPLORATION",
    cn: "身份探索",
    body: "工作 / 爱情 / 世界观三个核心领域的反复尝试。Arnett 1995–2000 访谈 300 名 18-29 岁。恋爱平均时长从青少年期 5–12 个月拉长到 21 个月——年轻人开始把自己正在形成的身份当作选择伴侣的参考点。",
    stat: ["21", "个月", "新兴成年期恋爱平均时长"],
  },
  {
    n: "II",
    en: "INSTABILITY",
    cn: "不稳定",
    body: "美国 1960s 与父母同住的男性约 9–10%；2011 年攀升到 19%。加拿大 1981 年 27.5% / 2001 年 41%。这些数字背后不是固守传统，而是经济不稳定性的直接反映。",
    stat: ["41", "%", "2001 年加拿大与父母同住率"],
  },
  {
    n: "III",
    en: "SELF-FOCUS",
    cn: "自我聚焦",
    body: "本身是一种阶级特权。需要迅速进入劳动力市场养活自己或家人的年轻人无法享受这种「自我发现」的时光——他们的「自我聚焦」不是对未来的投资，而是对生存的被迫关注。",
    stat: ["—", "", "「特权」隐藏的代际不平等"],
  },
  {
    n: "IV",
    en: "FEELING IN-BETWEEN",
    cn: "过渡感",
    body: "「你已经长大了吗？」大多数 18-25 岁美国人回答「在某些方面是的，在其他方面则不是」。形式独立 vs 实质依赖：可以投票、签署合同，却仍依赖父母财务、保险与心理指导。",
    stat: ["68", "%", "回答「介于两者之间」的比例"],
  },
  {
    n: "V",
    en: "POSSIBILITIES",
    cn: "可能性 · 乐观",
    body: "美国 18-24 岁受访者 92% 认为「自己的生活会与父辈一样好或更好」。这种乐观不因社会经济背景而消失——它是新兴成年期的奢侈，也是其后来演变为「四分之一人生危机」的前驱症状。",
    stat: ["92", "%", "相信会过得不比父辈差"],
  },
];

function FiveFeatures() {
  return (
    <section id="five" className="relative">
      {/* header */}
      <div className="px-6 md:px-12 pt-28 pb-12">
        <div className="container mx-auto max-w-[1280px]">
          <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">CHAPTER · 01</div>
          <div className="mono text-[11px] tracking-[0.22em] text-muted mb-6">FIVE DEFINING FEATURES</div>
          <h2 className="font-sans font-medium tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(48px, 7vw, 112px)", lineHeight: 0.98 }}>
            Arnett 的<br/>五个本质特征
          </h2>
        </div>
      </div>

      {/* sticky stack */}
      <div className="relative">
        {FIVE.map((f, i) => (
          <FeatureCard key={f.n} feature={f} index={i} total={FIVE.length} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
  total,
}: {
  feature: (typeof FIVE)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0.0, 0.15, 0.85, 1], [0.6, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.96]);

  return (
    <div ref={ref} className="sticky top-0 h-screen flex items-center px-6 md:px-12">
      <motion.div
        style={{ opacity, scale, top: `${index * 18}px` }}
        className="relative w-full container mx-auto max-w-[1280px] bg-paper border border-line rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-10 md:p-16"
      >
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* big roman */}
          <div className="col-span-12 md:col-span-3">
            <div className="font-sans font-medium text-clay tracking-[-0.04em] leading-none"
                 style={{ fontSize: "clamp(120px, 18vw, 280px)" }}>
              {feature.n}
            </div>
            <div className="mono text-[11px] tracking-[0.22em] text-muted mt-2">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="mono text-[11px] tracking-[0.22em] text-muted mb-3">{feature.en}</div>
            <h3 className="font-sans font-medium tracking-[-0.02em] text-ink mb-6"
                style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05 }}>
              {feature.cn}
            </h3>
            <p className="serif text-[16px] md:text-[17px] leading-[1.85] text-ink/85 max-w-[58ch]">
              {feature.body}
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 md:border-l md:border-line md:pl-6">
            <div className="mono text-[10px] tracking-[0.22em] text-muted mb-2">EVIDENCE</div>
            <div className="flex items-baseline gap-1">
              <span className="font-sans font-medium tracking-[-0.04em] text-ink"
                    style={{ fontSize: "clamp(56px, 7vw, 104px)", lineHeight: 1 }}>
                {feature.stat[0]}
              </span>
              <span className="mono text-[14px] text-clay">{feature.stat[1]}</span>
            </div>
            <div className="serif text-[13px] leading-[1.6] text-muted mt-3">
              {feature.stat[2]}
            </div>
          </div>
        </div>

        {/* progress dots */}
        <div className="mt-10 flex gap-2">
          {Array.from({ length: total }).map((_, j) => (
            <span
              key={j}
              className="h-[2px] flex-1"
              style={{ background: j <= index ? "var(--clay)" : "var(--line)" }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- 装置：成年门槛后退器 / Threshold of Adulthood ---------------- */

const THRESHOLD_FRAMES = [
  { year: 1960, age: 22, livePct: 9, debt: 0, label: "工业繁荣" },
  { year: 1980, age: 24, livePct: 11, debt: 2, label: "石油危机后" },
  { year: 2000, age: 28, livePct: 17, debt: 17, label: "千禧一代" },
  { year: 2020, age: 33, livePct: 19, debt: 35, label: "零工经济" },
  { year: 2026, age: 35, livePct: 21, debt: 38, label: "AI 时代" },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function pickFrame(p: number) {
  const segs = THRESHOLD_FRAMES.length - 1;
  const x = p * segs;
  const i = Math.min(segs - 1, Math.floor(x));
  const local = x - i;
  const a = THRESHOLD_FRAMES[i];
  const b = THRESHOLD_FRAMES[i + 1];
  return {
    year: Math.round(lerp(a.year, b.year, local)),
    age: lerp(a.age, b.age, local),
    livePct: lerp(a.livePct, b.livePct, local),
    debt: lerp(a.debt, b.debt, local),
    label: local < 0.5 ? a.label : b.label,
  };
}

function ThresholdViz() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const sp = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });
  const [frame, setFrame] = useState(pickFrame(0));

  useMotionValueEvent(sp, "change", (v) => {
    setFrame(pickFrame(Math.max(0, Math.min(1, v))));
  });

  // line position (0..100 where 0=18yr, 100=40yr threshold visualisation)
  const ageMin = 18;
  const ageMax = 40;
  const linePct = ((frame.age - ageMin) / (ageMax - ageMin)) * 100;

  return (
    <section ref={ref} id="threshold" className="relative bg-nightBg text-paper" style={{ height: "320vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* header */}
        <div className="px-6 md:px-12 pt-24 md:pt-28">
          <div className="container mx-auto max-w-[1280px] flex items-end justify-between gap-8">
            <div>
              <div className="mono text-[11px] tracking-[0.22em] text-nightClay mb-3">CHAPTER · 02 / SIGNATURE DEVICE</div>
              <div className="mono text-[11px] tracking-[0.22em] text-paper/60 mb-4">THE RECEDING THRESHOLD OF ADULTHOOD</div>
              <h2 className="font-sans font-medium tracking-[-0.025em]"
                  style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 1 }}>
                成年的门槛<br/>
                <span className="serif italic text-paper/70">正在向后退</span>
              </h2>
            </div>
            <div className="hidden md:block max-w-[28ch] serif text-[14px] leading-[1.7] text-paper/60">
              滚动 ↓ 让时间从 1960 流向 2026。<br/>
              三条曲线告诉你：「成年」不是抵达，是退却。
            </div>
          </div>
        </div>

        {/* the device */}
        <div className="flex-1 px-6 md:px-12 mt-10 md:mt-14">
          <div className="container mx-auto max-w-[1280px] h-full flex flex-col">
            {/* year + label */}
            <div className="flex items-end justify-between border-b border-paper/20 pb-4 mb-6">
              <div className="font-sans font-medium tracking-[-0.04em] leading-none"
                   style={{ fontSize: "clamp(72px, 12vw, 200px)" }}>
                {frame.year}
              </div>
              <div className="text-right">
                <div className="mono text-[10px] tracking-[0.22em] text-paper/50">CONTEXT</div>
                <div className="serif italic text-[20px] md:text-[28px] text-nightClay">{frame.label}</div>
              </div>
            </div>

            {/* age line */}
            <div className="mb-8">
              <div className="flex justify-between mono text-[10px] tracking-[0.22em] text-paper/50 mb-3">
                <span>AGE 18 · 形式上的成人</span>
                <span>AGE 40 · 中年门槛</span>
              </div>
              <div className="relative h-[2px] bg-paper/15 mb-3">
                {/* ticks */}
                {[18, 22, 26, 30, 34, 38].map((a) => {
                  const p = ((a - ageMin) / (ageMax - ageMin)) * 100;
                  return (
                    <div key={a} className="absolute -top-1 h-3 w-px bg-paper/20" style={{ left: `${p}%` }} />
                  );
                })}
                {/* moving threshold marker */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${linePct}%` }}
                >
                  <div className="relative">
                    <div className="absolute -translate-x-1/2 -top-3 w-[10px] h-[10px] rounded-full bg-nightClay shadow-[0_0_0_4px_rgba(212,135,106,0.18)]" />
                    <div className="absolute -translate-x-1/2 top-5 mono text-[10px] tracking-[0.22em] text-nightClay whitespace-nowrap">
                      首次购房 · {frame.age.toFixed(1)} 岁
                    </div>
                    {/* trailing line */}
                    <div className="absolute right-0 top-[1px] h-[2px] bg-nightClay" style={{ width: `${linePct * 0.04}rem`, transform: "translateX(0)" }} />
                  </div>
                </motion.div>
                {/* baseline 1960 */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[18.18%] w-2 h-2 -translate-x-1/2 rounded-full bg-paper/40" />
                <div className="absolute top-5 mono text-[10px] tracking-[0.22em] text-paper/40 left-[18.18%] -translate-x-1/2 whitespace-nowrap">1960 基准 · 22</div>
              </div>
            </div>

            {/* three counters */}
            <div className="grid grid-cols-3 gap-4 md:gap-10 mt-auto pb-12">
              <Counter
                tag="HOUSING"
                cn="首次购房年龄"
                value={frame.age.toFixed(1)}
                unit="岁"
                bar={(frame.age - 22) / (35 - 22)}
                accent="text-nightClay"
              />
              <Counter
                tag="LIVING"
                cn="与父母同住率"
                value={frame.livePct.toFixed(1)}
                unit="%"
                bar={(frame.livePct - 9) / (21 - 9)}
                accent="text-paper"
              />
              <Counter
                tag="DEBT"
                cn="学生债务负担"
                value={frame.debt.toFixed(1)}
                unit="K USD/人"
                bar={frame.debt / 38}
                accent="text-paper"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ tag, cn, value, unit, bar, accent }:
  { tag: string; cn: string; value: string; unit: string; bar: number; accent: string }) {
  const w = Math.max(0, Math.min(1, bar)) * 100;
  return (
    <div className="border-t border-paper/20 pt-4">
      <div className="flex items-baseline justify-between mono text-[10px] tracking-[0.22em] text-paper/50 mb-2">
        <span>{tag}</span>
        <span>{cn}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className={`font-sans font-medium tracking-[-0.03em] leading-none ${accent}`}
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
          {value}
        </span>
        <span className="mono text-[12px] text-paper/60">{unit}</span>
      </div>
      <div className="relative h-[2px] bg-paper/10 mt-3 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-nightClay"
          style={{ width: `${w}%`, transition: "none" }}
        />
      </div>
    </div>
  );
}

/* ---------------- 四前提 horizontal scroll ---------------- */

const PRECONDITIONS = [
  {
    n: "01",
    title: "技术革命",
    en: "Knowledge Economy",
    body: "西方从制造业经济转向知识经济。高中毕业即可进厂的时代结束——入门级岗位至少要本科，越来越多要硕士。教育「关卡」往后推，工作生涯起点延后到 25+ 岁。同时学位通胀使其作为「信号」贬值。",
    chip: "学位通胀",
  },
  {
    n: "02",
    title: "性革命",
    en: "Contraception",
    body: "1960s 口服避孕药推广。未婚女性获得史无前例的人生选择权——婚姻不再是「成年里程碑」中的强制项。结婚时间整体后延，为延迟身份探索打开时间空间。",
    chip: "婚姻不再必选",
  },
  {
    n: "03",
    title: "女性运动",
    en: "Career Access",
    body: "女性获得与男性相当的教育与职业机会。在事业与生育间分配时间的权利——以及被强加的代价：更长的青春期、更晚的首育、被压缩的生命时间表。",
    chip: "更晚首育",
  },
  {
    n: "04",
    title: "青年文化",
    en: "Forever Young",
    body: "1950s 摇滚 → 1970s 反文化 → 21 世纪的全球青年崇拜。「年轻」从暂时状态变成理想生活方式。「我想永远年轻」——曾经的异想，现在的常态。",
    chip: "永远年轻",
  },
];

function Preconditions() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useEffect(() => {
    const calc = () => {
      const el = trackRef.current;
      if (!el) return;
      requestAnimationFrame(() => {
        const overflow = el.scrollWidth - window.innerWidth;
        setMaxX(Math.max(0, overflow));
      });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  return (
    <section ref={ref} className="relative" style={{ height: "360vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="px-6 md:px-12 pt-24 pb-8">
          <div className="container mx-auto max-w-[1280px]">
            <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">CHAPTER · 03</div>
            <div className="mono text-[11px] tracking-[0.22em] text-muted mb-4">FOUR PRECONDITIONS</div>
            <h2 className="font-sans font-medium tracking-[-0.025em] text-ink"
                style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1 }}>
              为什么<span className="text-clay">「现在」</span>才出现这个阶段？
            </h2>
            <p className="serif text-[15px] leading-[1.75] text-muted mt-4 max-w-[60ch]">
              新兴成年期不是从来就有。Arnett 指出四个特定的历史前提——它们叠
              加在一起，才让这一段「延长的青春」成为可能。
            </p>
          </div>
        </div>

        <div className="flex-1 flex items-center overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-6 px-6 md:px-12 pr-12 will-change-transform">
            {PRECONDITIONS.map((p) => (
              <article
                key={p.n}
                className="shrink-0 w-[78vw] sm:w-[58vw] md:w-[40vw] lg:w-[34vw] bg-card border border-line rounded-[20px] p-8 md:p-10"
                style={{ minHeight: "48vh" }}
              >
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div className="font-sans font-medium text-clay tracking-[-0.04em] leading-none"
                       style={{ fontSize: "clamp(64px, 7vw, 112px)" }}>
                    {p.n}
                  </div>
                  <span className="mono text-[11px] tracking-[0.18em] text-muted border border-line rounded-full px-3 py-1 mt-3 whitespace-nowrap">
                    {p.chip}
                  </span>
                </div>
                <div className="mono text-[11px] tracking-[0.22em] text-muted mb-3">{p.en}</div>
                <h3 className="font-sans font-medium tracking-[-0.02em] text-ink mb-5"
                    style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.05 }}>
                  {p.title}
                </h3>
                <p className="serif text-[15px] leading-[1.8] text-ink/85 max-w-[42ch]">
                  {p.body}
                </p>
              </article>
            ))}
          </motion.div>
        </div>

        {/* progress */}
        <div className="px-6 md:px-12 pb-10">
          <div className="container mx-auto max-w-[1280px] flex items-center gap-4">
            <span className="mono text-[10px] tracking-[0.22em] text-muted">SCROLL ↓ 横向推进</span>
            <div className="flex-1 h-[2px] bg-line">
              <motion.div className="h-full bg-clay origin-left"
                style={{ scaleX: scrollYProgress }} />
            </div>
            <span className="mono text-[10px] tracking-[0.22em] text-muted">04 / 04</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 经济结构 ---------------- */

const ECON = [
  {
    n: "01",
    big: "35",
    unit: "岁",
    title: "首次购房年龄",
    delta: "1960s · 27 → 2020s · 35",
    body: "美国 1960s 约 15-20% 年轻人购房；2020s 不足 5%。「拥有自己的家」这个成年标志被推迟到了中年。",
  },
  {
    n: "02",
    big: "1.7",
    unit: "万亿 USD",
    title: "美国学生债务总额 (2023)",
    delta: "平均每借款人 ≈ 35,000 USD",
    body: "中产阶级最大受害者：富裕家庭由父母资助免债，最贫困群体不敢上大学反而避过债务。教育成了向上流动的负资产。",
  },
  {
    n: "03",
    big: "30-40",
    unit: "%",
    title: "零工经济占比 (2020s)",
    delta: "2010s · 15% → 2020s · 30-40%",
    body: "灵活性的承诺，被无医保 / 无退休金 / 无带薪假的现实吞没。不稳定不再是过渡，而是永久条件。",
  },
  {
    n: "04",
    big: "↓",
    unit: "",
    title: "入门级岗位",
    delta: "AI / 自动化对青年市场的吞噬",
    body: "数据录入、客服、行政——曾经的「第一份工作」首当其冲。年轻人需要经验拿好工作，但提供经验的入门岗位正在消失。",
  },
];

function Economic() {
  return (
    <section className="relative px-6 md:px-12 py-32 bg-paper">
      <div className="container mx-auto max-w-[1280px]">
        <div className="mb-16">
          <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">CHAPTER · 04</div>
          <div className="mono text-[11px] tracking-[0.22em] text-muted mb-4">ECONOMIC STRUCTURE</div>
          <h2 className="font-sans font-medium tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(44px, 6vw, 96px)", lineHeight: 0.98 }}>
            真正的推动力，<br/>
            <span className="serif italic text-muted">从来不是心理学。</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
          {ECON.map((e, i) => (
            <motion.div
              key={e.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-paper p-10 md:p-14"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="mono text-[11px] tracking-[0.22em] text-clay">{e.n}</span>
                <span className="mono text-[10px] tracking-[0.22em] text-muted">{e.delta}</span>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-sans font-medium tracking-[-0.04em] text-ink leading-none"
                      style={{ fontSize: "clamp(72px, 10vw, 168px)" }}>
                  {e.big}
                </span>
                <span className="mono text-[14px] text-clay">{e.unit}</span>
              </div>
              <h3 className="font-sans font-medium tracking-[-0.01em] text-ink mb-3"
                  style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}>
                {e.title}
              </h3>
              <p className="serif text-[15px] leading-[1.8] text-ink/80 max-w-[44ch]">
                {e.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 心理 / 比较焦虑 ---------------- */

const PSYCHE = [
  {
    tag: "FOMO",
    cn: "错过恐惧",
    quote: "当所有选择都被无限呈现，选择本身就成了痛苦。",
    body: "一个 25 岁的人不断追问：我应该现在工作还是再读一年？这份是不是「最优解」？错过恐惧把「探索」从可能性的礼物变成强迫症。",
  },
  {
    tag: "LOCKED-OUT",
    cn: "被锁在外面",
    quote: "我看见了人生该有的样子，但我永远买不起入场券。",
    body: "稳定工作、负担得起的房子、满意的人生——年轻人无法获得他们期望的东西。期望被通胀，但工资没有。",
  },
  {
    tag: "LOCKED-IN",
    cn: "被锁在里面",
    quote: "想换，但代价大到我承担不起。",
    body: "困在一份无聊的工作、一个没有前景的城市。改变需要付出巨大代价。「锁外」与「锁内」共同构成四分之一人生危机的心理双重门。",
  },
];

function Psyche() {
  return (
    <section className="relative px-6 md:px-12 py-32 bg-card border-y border-line">
      <div className="container mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">CHAPTER · 05</div>
            <div className="mono text-[11px] tracking-[0.22em] text-muted">PSYCHOLOGICAL TURN</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-sans font-medium tracking-[-0.025em] text-ink"
                style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.02 }}>
              比较焦虑的时代<br/>
              与<span className="serif italic text-muted">四分之一人生危机的普遍化</span>
            </h2>
            <p className="serif text-[16px] leading-[1.85] text-ink/80 mt-6 max-w-[60ch]">
              社交媒体把参考群体从邻居拓展到全球。
              「70% 的三十多岁人报告说，他们在二十多岁时经历过某种形式的四分之一人生危机。」
              这不再是异常，已是规范。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PSYCHE.map((p, i) => (
            <motion.article
              key={p.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-paper border border-line rounded-[16px] p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className="mono text-[10px] tracking-[0.22em] text-clay">{p.tag}</span>
                <span className="mono text-[10px] tracking-[0.22em] text-muted">0{i + 1}</span>
              </div>
              <div className="text-clay mono text-[40px] leading-none mb-2">"</div>
              <p className="font-sans font-medium tracking-[-0.01em] text-ink leading-[1.2]"
                 style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}>
                {p.quote}
              </p>
              <div className="serif italic text-clay text-[15px] mt-4">{p.cn}</div>
              <div className="border-t border-line my-6" />
              <p className="serif text-[14px] leading-[1.8] text-ink/80">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 批评 ---------------- */

const CRITIQUE = [
  {
    n: "α",
    en: "CLASS PRIVILEGE",
    cn: "中产阶级特权的隐形化",
    body: "Côté 2014 在《Applied Developmental Science》尖锐指出：能够在 18-35 岁「探索」的奢侈，主要属于拥有经济缓冲的年轻人。把它说成代际特征，等于把结构性不平等心理化。",
    cite: "Côté, J. E. (2014). The Dangerous Myth of Emerging Adulthood.",
  },
  {
    n: "β",
    en: "GENDER × CLASS",
    cn: "性别与阶级的交叉性",
    body: "工人阶级女性、少数族裔女性更早进入职业与生育——不是因为她们缺乏「探索的欲望」，而是经济现实让她们少了选择。中产女性又被「生物钟」与「自我实现」夹击。",
    cite: "焦虑混合：既不完全是经济的，也不完全是心理的。",
  },
  {
    n: "γ",
    en: "GLOBAL BLINDSPOT",
    cn: "全球差异的忽视",
    body: "在许多发展中国家，新兴成年期根本不存在。北欧靠社会保障可以延后；美国因医保挂钩工作反而被催早；日本的社会规范仍施加强约束。同一国家内还会因种族与移民身份而分裂。",
    cite: "「奥德赛时期」首先是西方中产的本地经验。",
  },
];

function Critique() {
  return (
    <section className="relative px-6 md:px-12 py-32 bg-paper">
      <div className="container mx-auto max-w-[1280px]">
        <div className="mb-16">
          <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">CHAPTER · 06</div>
          <div className="mono text-[11px] tracking-[0.22em] text-muted mb-4">THE PRIVILEGE TRAP</div>
          <h2 className="font-sans font-medium tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(40px, 5.5vw, 84px)", lineHeight: 1 }}>
            <span className="serif italic text-muted">如果你能「探索」，</span><br/>
            那是因为有人替你买了单。
          </h2>
        </div>

        <div className="space-y-6">
          {CRITIQUE.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-6 items-start border-t border-ink pt-8"
            >
              <div className="col-span-12 md:col-span-2">
                <div className="font-sans font-medium text-clay tracking-[-0.04em] leading-none"
                     style={{ fontSize: "clamp(64px, 7vw, 120px)" }}>
                  {c.n}
                </div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="mono text-[10px] tracking-[0.22em] text-muted mb-2">{c.en}</div>
                <h3 className="font-sans font-medium tracking-[-0.02em] text-ink mb-4"
                    style={{ fontSize: "clamp(24px, 2.8vw, 36px)", lineHeight: 1.1 }}>
                  {c.cn}
                </h3>
                <p className="serif text-[16px] leading-[1.85] text-ink/85">
                  {c.body}
                </p>
              </div>
              <div className="col-span-12 md:col-span-3 md:border-l md:border-line md:pl-5">
                <div className="mono text-[10px] tracking-[0.22em] text-muted mb-2">REFERENCE</div>
                <div className="serif italic text-[13px] leading-[1.7] text-ink/70">{c.cite}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Conclusion ---------------- */

function Conclusion() {
  return (
    <section className="relative bg-nightBg text-paper px-6 md:px-12 py-40">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--paper) 1px, transparent 1px), linear-gradient(to bottom, var(--paper) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />
      <div className="container mx-auto max-w-[1280px] relative">
        <div className="mono text-[11px] tracking-[0.22em] text-nightClay mb-6">CHAPTER · 07 / CODA</div>
        <h2 className="font-sans font-medium tracking-[-0.03em]"
            style={{ fontSize: "clamp(56px, 9vw, 168px)", lineHeight: 0.95 }}>
          理解，<br/>
          <span className="serif italic text-paper/70">而不是定罪。</span>
        </h2>
        <div className="grid md:grid-cols-12 gap-8 mt-16">
          <div className="md:col-span-7">
            <p className="serif text-[18px] leading-[1.85] text-paper/85">
              新兴成年期既是真实的，也是有问题的。它真实，因为许多年轻人确实在这段时期经历着延迟的身份形成与经济独立。
              它有问题，因为这种延迟的原因主要是结构性的经济，而非心理或文化发展阶段。
            </p>
            <p className="serif text-[18px] leading-[1.85] text-paper/85 mt-6">
              真正的问题不是年轻人花太多时间「自我探索」。真正的问题是：
              <em className="serif italic text-nightClay">为什么年轻人无法负担房屋？为什么大学学位要花数十万美元？为什么入门岗位正在消失？</em>
            </p>
            <p className="serif text-[18px] leading-[1.85] text-paper/85 mt-6">
              在这些被解决之前，奥德赛时期仍然是一首未完成的史诗——
              充满可能性，也充满困境；反映进步，也反映失败；提供自由，也强加约束。
            </p>
          </div>
          <div className="md:col-span-5 md:pl-10 md:border-l border-paper/15">
            <div className="mono text-[10px] tracking-[0.22em] text-paper/50 mb-4">NEXT STATION</div>
            <Link
              href="/sub/china"
              data-cursor="hover"
              className="group block border border-paper/25 rounded-[16px] p-8 hover:bg-paper hover:text-ink transition-colors duration-500"
            >
              <div className="mono text-[11px] tracking-[0.22em] text-nightClay group-hover:text-clay mb-3">SUB-AGENT 02</div>
              <div className="font-sans font-medium tracking-[-0.02em] text-[28px] md:text-[36px] leading-[1.05]">
                中国式奥德赛<br/>
                <span className="serif italic opacity-70">编制崇拜下没有合法漂泊权的年轻人</span>
              </div>
              <div className="mt-6 mono text-[11px] tracking-[0.22em] flex items-center justify-between">
                <span>2020-2026 中国版本</span>
                <span>→</span>
              </div>
            </Link>

            <div className="mt-10 mono text-[10px] tracking-[0.22em] text-paper/40 leading-[1.9]">
              <div>REFS</div>
              <div className="mt-2 text-paper/60">
                Arnett 2000 · Brooks 2007<br/>
                Côté 2014 · Marcia 1966<br/>
                Erikson 1950s
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function GenealogyPage() {
  return (
    <main className="bg-paper text-ink">
      <SubPageNav no="01" next={{ href: "/sub/china", label: "子代理 02 中国式奥德赛" }} />
      <div className="pt-14">
        <Hero />
        <BrooksQuote />
        <FiveFeatures />
        <ThresholdViz />
        <Preconditions />
        <Economic />
        <Psyche />
        <Critique />
        <Conclusion />
      </div>
    </main>
  );
}
