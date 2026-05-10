"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import SubPageNav from "@/components/SubPageNav";

/* =====================================================
   /sub/china
   子代理 02 · 中国式奥德赛
   ===================================================== */

/* ---------------- Hero · 红章 + 残破田字格 ---------------- */

function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-24 px-6 md:px-12 overflow-hidden bg-paper">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px), linear-gradient(to right, var(--ink) 0.5px, transparent 0.5px), linear-gradient(to bottom, var(--ink) 0.5px, transparent 0.5px)",
          backgroundSize: "240px 240px, 240px 240px, 120px 120px, 120px 120px",
        }}
      />

      <div className="relative flex items-center justify-between mono text-[10px] tracking-[0.3em] uppercase text-muted mb-12">
        <span>SUB · 02 / CHINA EDITION</span>
        <span className="hidden md:block">2026.04.26 · 现场·结构</span>
        <span>研究产出 · 8,200 字 · 估读 22 min</span>
      </div>

      <div className="relative grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-9">
          <div className="mono text-[11px] tracking-[0.22em] text-clay mb-6">
            2020-2026 · 一个被翻译的现象
          </div>
          <h1
            className="font-sans font-medium tracking-[-0.03em] leading-[0.92]"
            style={{ fontSize: "clamp(64px, 10.5vw, 168px)" }}
          >
            {"中国式奥德赛".split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
          </h1>
          <h2
            className="serif italic text-muted mt-4 tracking-[-0.01em]"
            style={{ fontSize: "clamp(22px, 3.6vw, 52px)", lineHeight: 1.1 }}
          >
            编制崇拜下，没有合法漂泊权的年轻人
          </h2>
        </div>

        <div className="col-span-12 md:col-span-3 md:pb-3 flex md:justify-end">
          <motion.div
            initial={{ scale: 0, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: -8, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="border-[3px] border-clay rounded-[8px] px-5 py-4 text-center"
              style={{ color: "var(--clay)" }}
            >
              <div className="mono text-[10px] tracking-[0.3em] mb-1">
                2026 · 现状
              </div>
              <div
                className="font-sans font-medium tracking-[0.02em]"
                style={{ fontSize: "28px", lineHeight: 1.1 }}
              >
                慢就业
                <br />
                考编热
                <br />
                全职儿女
              </div>
              <div className="mono text-[9px] tracking-[0.2em] mt-2">
                CHN · LABEL
              </div>
            </div>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-paper" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-paper" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-paper" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-paper" />
          </motion.div>
        </div>
      </div>

      <div className="relative mt-16 border-y border-line py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          ["16.9%", "16-24 岁失业率 / 2026.03"],
          ["1222 万", "2025 应届毕业生"],
          ["≈ 2 亿", "灵活就业人口规模"],
          ["15-20 年", "一线城市房价收入比"],
        ].map(([k, v]) => (
          <div key={k} className="border-l border-line pl-4">
            <div
              className="font-sans font-medium tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(22px, 2.6vw, 36px)" }}
            >
              {k}
            </div>
            <div className="serif text-[12px] text-muted mt-1">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- 开篇 · 小张 / 小李场景 ---------------- */

function ScenePrologue() {
  return (
    <section className="relative bg-card border-y border-line px-6 md:px-12 py-32">
      <div className="container mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">
              SCENE · 00
            </div>
            <div className="mono text-[11px] tracking-[0.22em] text-muted mb-6">
              A REDEFINED TURNING POINT
            </div>
            <div className="serif text-[14px] leading-[1.75] text-ink/70">
              2026.04 · 北京某互联网公司
              <br />
              小张 / 25 / 985 / HC -1
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p
              className="font-sans font-medium tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(28px, 3.6vw, 48px)", lineHeight: 1.2 }}
            >
              裁员邮件在午间发出。
              <br />
              微信群里的反应不是震惊，
              <br />
              <span className="text-muted">是一种集体的麻木。</span>
            </p>
            <p className="serif text-[16px] leading-[1.85] text-ink/85 mt-10 max-w-[60ch]">
              没有人再谈论「逃离北上广」或「开启自己的副业」这样的理想主义话题。
              取而代之的，是对一个问题的反复追问——
              <em className="serif italic text-clay">接下来怎么办？</em>
            </p>
            <p className="serif text-[16px] leading-[1.85] text-ink/85 mt-5 max-w-[60ch]">
              这不是一个修辞问。中国年轻人正陷入与西方完全不同的困境——
              一个 <strong>没有合法漂泊权</strong> 的奥德赛时期。
              他们既不能真正「休息」，也无处真正「探索」。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 数据看板 · 4 张 odometer 卡 ---------------- */

const STATS = [
  {
    n: "01",
    big: 16.9,
    suffix: "%",
    label: "16-24 岁失业率",
    note: "2026.03 · 不含在校生新口径 · 结束六连降",
    bar: 0.169 / 0.25,
  },
  {
    n: "02",
    big: 1222,
    suffix: " 万",
    label: "高校毕业生 (2025)",
    note: "2024 · 1179 万 → 2025 · 1222 万 → 2026 仍在增长",
    bar: 1,
  },
  {
    n: "03",
    big: 1.7,
    suffix: "%",
    label: "3 月社零同比",
    note: "近三年同期最低消费倾向 · 收入在涨，信心在跌",
    bar: 0.017 / 0.05,
  },
  {
    n: "04",
    big: 35,
    suffix: "%",
    label: "互联网某中型厂裁员比例",
    note: "2026 春 · 二轮融资受挫后 · 一线员工首当其冲",
    bar: 0.35 / 0.5,
  },
];

function StatsBoard() {
  return (
    <section className="relative px-6 md:px-12 py-32 bg-paper">
      <div className="container mx-auto max-w-[1280px]">
        <div className="mb-16">
          <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">
            CHAPTER · 01
          </div>
          <div className="mono text-[11px] tracking-[0.22em] text-muted mb-4">
            DATA UNDER A NEW METRIC
          </div>
          <h2
            className="font-sans font-medium tracking-[-0.025em] text-ink"
            style={{ fontSize: "clamp(40px, 6vw, 92px)", lineHeight: 0.98 }}
          >
            一个被<span className="text-clay">软化</span>的危机
          </h2>
          <p className="serif text-[15px] leading-[1.85] text-ink/75 mt-6 max-w-[60ch]">
            2023 年 6 月，16-24 岁青年失业率 21.3%——这一指标随后消失了半年。
            2024 年起改用「不含在校生」新口径。
            统计技术的调整，本身就是对现实的软化。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {STATS.map((s, i) => (
            <StatCard key={s.n} {...s} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  n,
  big,
  suffix,
  label,
  note,
  bar,
  delay,
}: {
  n: string;
  big: number;
  suffix: string;
  label: string;
  note: string;
  bar: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting && !run) setRun(true);
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [run]);

  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const dur = 1700;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(eased * big);
      if (p < 1) requestAnimationFrame(tick);
      else setShown(big);
    };
    requestAnimationFrame(tick);
  }, [run, big]);

  const decimals = big < 100 ? 1 : 0;
  const w = Math.max(0, Math.min(1, run ? bar : 0)) * 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="bg-paper p-10 md:p-14"
    >
      <div className="flex items-baseline justify-between mb-6">
        <span className="mono text-[11px] tracking-[0.22em] text-clay">{n}</span>
        <span className="mono text-[10px] tracking-[0.22em] text-muted">
          STAT · CN
        </span>
      </div>
      <div className="flex items-baseline gap-2 mb-3">
        <span
          className="font-sans font-medium tracking-[-0.04em] text-ink leading-none tabular-nums"
          style={{ fontSize: "clamp(64px, 10vw, 144px)" }}
        >
          {shown.toFixed(decimals)}
        </span>
        <span className="mono text-[14px] text-clay">{suffix}</span>
      </div>
      <h3
        className="font-sans font-medium tracking-[-0.01em] text-ink mb-3"
        style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
      >
        {label}
      </h3>
      <p className="serif text-[14px] leading-[1.8] text-ink/75 max-w-[44ch]">
        {note}
      </p>
      <div className="relative h-[2px] bg-line mt-6 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-clay"
          style={{
            width: `${w}%`,
            transition: "width 1.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ---------------- 专属装置：标签谱系 / Lexicon Recession ---------------- */

const LEXICON = [
  {
    year: 2016,
    word: "葛优躺",
    en: "Ge You Lying",
    posture: "懒散的反抗 · 但还有幽默的距离感",
    defense: 86,
    shade: "理想主义",
  },
  {
    year: 2019,
    word: "996.ICU",
    en: "Anti Overwork",
    posture: "对过度劳动的公开反抗 · 充满理想的愤怒",
    defense: 72,
    shade: "对抗",
  },
  {
    year: 2021,
    word: "躺平",
    en: "Lying Flat",
    posture: "从反抗到精神退场 · 哲学性的冷漠",
    defense: 54,
    shade: "退场",
  },
  {
    year: 2022,
    word: "摆烂",
    en: "Let It Rot",
    posture: "从躺平到行动堕落 · 承认努力已经没用",
    defense: 38,
    shade: "堕落",
  },
  {
    year: 2023,
    word: "全职儿女",
    en: "Full-time Children",
    posture: "放弃所有社会身份 · 回到原始家庭角色",
    defense: 24,
    shade: "投降",
  },
  {
    year: 2024,
    word: "鼠鼠文学",
    en: "Mouse Lit / 长衫",
    posture: "从消极到自我贬抑 · 一种精致的绝望",
    defense: 14,
    shade: "自贬",
  },
  {
    year: 2026,
    word: "宇宙的尽头是编制",
    en: "Cult of Establishment",
    posture: "彻底的理想破产 · 转向对体制的绝对依赖",
    defense: 6,
    shade: "投奔",
  },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function LexiconViz() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });
  const [idx, setIdx] = useState(0);
  const [defense, setDefense] = useState(LEXICON[0].defense);
  const [year, setYear] = useState(LEXICON[0].year);

  useMotionValueEvent(smoothed, "change", (v) => {
    const total = LEXICON.length - 1;
    const x = Math.max(0, Math.min(1, v)) * total;
    const i = Math.min(total - 1, Math.max(0, Math.floor(x)));
    const local = x - i;
    const a = LEXICON[i];
    const b = LEXICON[i + 1];
    setIdx(local > 0.5 ? i + 1 : i);
    setDefense(lerp(a.defense, b.defense, local));
    setYear(Math.round(lerp(a.year, b.year, local)));
  });

  const cur = LEXICON[idx];

  return (
    <section
      ref={ref}
      className="relative bg-nightBg text-paper"
      style={{ height: "520vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="px-6 md:px-12 pt-20 md:pt-24">
          <div className="container mx-auto max-w-[1280px] flex items-end justify-between gap-8">
            <div>
              <div className="mono text-[11px] tracking-[0.22em] text-nightClay mb-3">
                CHAPTER · 02 / SIGNATURE DEVICE
              </div>
              <div className="mono text-[11px] tracking-[0.22em] text-paper/60 mb-4">
                LEXICON RECESSION · 心理防线的逐步瓦解
              </div>
              <h2
                className="font-sans font-medium tracking-[-0.025em]"
                style={{ fontSize: "clamp(36px, 5.6vw, 84px)", lineHeight: 1 }}
              >
                标签谱系 ——
                <br />
                <span className="serif italic text-paper/70">
                  从葛优躺到「宇宙的尽头是编制」
                </span>
              </h2>
            </div>
            <div className="hidden md:block max-w-[26ch] serif text-[14px] leading-[1.7] text-paper/60">
              滚动 ↓ 逐年推进。
              <br />
              右侧的电池槽，是这一代人「相信努力有用」的剩余电量。
            </div>
          </div>
        </div>

        <div className="flex-1 px-6 md:px-12 mt-8 md:mt-12 pb-10">
          <div className="container mx-auto max-w-[1280px] grid md:grid-cols-12 gap-8 h-full">
            <div className="md:col-span-7 flex flex-col">
              <div className="mono text-[11px] tracking-[0.22em] text-paper/40 mb-3">
                CURRENT · 当前年份
              </div>
              <div
                className="font-sans font-medium tracking-[-0.04em] text-paper leading-none tabular-nums"
                style={{ fontSize: "clamp(96px, 16vw, 256px)" }}
              >
                {year}
              </div>
              <div className="mt-6 mono text-[10px] tracking-[0.22em] text-nightClay">
                {cur.en} / 心理姿态
              </div>
              <div
                className="font-sans font-medium tracking-[-0.02em] text-paper mt-2"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 80px)",
                  lineHeight: 1.1,
                }}
              >
                {cur.word}
              </div>
              <p className="serif italic text-[18px] md:text-[22px] text-paper/70 mt-4 leading-[1.5]">
                {cur.posture}
              </p>

              <div className="mt-auto pt-8 border-t border-paper/15">
                <div className="grid grid-cols-7 gap-1">
                  {LEXICON.map((l, i) => (
                    <div
                      key={l.year}
                      className="flex flex-col items-start gap-1"
                    >
                      <div
                        className="h-[2px] w-full"
                        style={{
                          background:
                            i <= idx
                              ? "var(--nightClay)"
                              : "rgba(250,249,245,0.18)",
                        }}
                      />
                      <span
                        className="mono text-[9px] tracking-[0.18em]"
                        style={{
                          color:
                            i === idx
                              ? "var(--nightClay)"
                              : "rgba(250,249,245,0.4)",
                        }}
                      >
                        {l.year}
                      </span>
                      <span
                        className="serif text-[11px] leading-tight"
                        style={{
                          color:
                            i === idx
                              ? "var(--paper)"
                              : "rgba(250,249,245,0.45)",
                        }}
                      >
                        {l.word}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 md:border-l md:border-paper/15 md:pl-10 flex flex-col">
              <div className="mono text-[11px] tracking-[0.22em] text-paper/40 mb-3">
                DEFENSE · 信念剩余
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="font-sans font-medium tracking-[-0.04em] text-nightClay leading-none tabular-nums"
                  style={{ fontSize: "clamp(56px, 8vw, 112px)" }}
                >
                  {defense.toFixed(0)}
                </span>
                <span className="mono text-[14px] text-paper/60">% 剩余</span>
              </div>
              <div className="serif italic text-[15px] text-paper/60 mb-6">
                「我能改变世界」 → 「世界改不了我」
              </div>

              <div className="relative w-full max-w-[360px] h-[180px] border-[3px] border-paper/40 rounded-[10px] p-2 mb-2">
                <div
                  className="h-full bg-nightClay relative overflow-hidden"
                  style={{
                    width: `${defense}%`,
                    transition: "none",
                    boxShadow: "0 0 24px rgba(212,135,106,0.35)",
                  }}
                >
                  {[20, 40, 60, 80].map((t) => (
                    <div
                      key={t}
                      className="absolute top-0 bottom-0 w-px bg-paper/15"
                      style={{ left: `${t}%` }}
                    />
                  ))}
                </div>
                <div className="absolute -right-[14px] top-1/2 -translate-y-1/2 w-[10px] h-[60px] bg-paper/40 rounded-r-[4px]" />
              </div>
              <div className="flex justify-between mono text-[9px] tracking-[0.22em] text-paper/40 max-w-[360px]">
                <span>0 · 投奔</span>
                <span>100 · 改变世界</span>
              </div>

              <div className="mt-10 inline-flex items-center gap-3">
                <span className="block w-2 h-2 rounded-full bg-nightClay" />
                <span className="mono text-[11px] tracking-[0.22em] text-paper/70 uppercase">
                  状态：{cur.shade}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 中西差异 · 比较表 ---------------- */

const DIFF = [
  {
    n: "α",
    topic: "Gap Year 文化",
    west: "被社会认可的间隔年。简历空白可被名企追问「你学到了什么」。",
    cn: "任何空白都会被解读为失败或懒惰。「你是不是有什么问题？」",
    bridge: "没有被允许的探索期。",
  },
  {
    n: "β",
    topic: "经济支持",
    west: "学生贷款 · 社会救济 · 就业市场流动。",
    cn: "六个钱包。提供金钱，也提供期待——「不能辜负六个人」。",
    bridge: "无法真正失败的权利。",
  },
  {
    n: "γ",
    topic: "户籍 / 社保",
    west: "自由迁徙。社保跨州跨国可携。",
    cn: "户籍锁定福利。多城市尝试 = 牺牲社保 / 医疗 / 住房。",
    bridge: "探索的物理成本被放大。",
  },
  {
    n: "δ",
    topic: "婚恋市场",
    west: "30+ 单身常见。同居 / 不婚被广泛接受。",
    cn: "彩礼、房车成为「进入婚姻的成本」。性别压力剧烈分化。",
    bridge: "焦虑的经济化。",
  },
  {
    n: "ε",
    topic: "「稳定」图腾地位",
    west: "中性词，甚至带轻微贬义。「太稳定 = 没冒险精神」。",
    cn: "近乎宗教信仰。编制崇拜 = 心态最高表现。",
    bridge: "「探索」被污名化。",
  },
];

function DiffTable() {
  return (
    <section className="relative px-6 md:px-12 py-32 bg-paper">
      <div className="container mx-auto max-w-[1280px]">
        <div className="mb-16">
          <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">
            CHAPTER · 03
          </div>
          <div className="mono text-[11px] tracking-[0.22em] text-muted mb-4">
            EAST × WEST · KEY DIVERGENCE
          </div>
          <h2
            className="font-sans font-medium tracking-[-0.025em] text-ink"
            style={{ fontSize: "clamp(40px, 5.6vw, 80px)", lineHeight: 1 }}
          >
            西方<span className="serif italic text-muted">允许</span>的，
            <br />
            在中国<span className="text-clay">不存在</span>。
          </h2>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-6 mono text-[10px] tracking-[0.22em] text-muted border-b border-ink pb-3 mb-2">
          <div className="col-span-1">#</div>
          <div className="col-span-2">DIMENSION</div>
          <div className="col-span-4">WEST · 西方</div>
          <div className="col-span-4">CN · 中国</div>
          <div className="col-span-1 text-right">→</div>
        </div>

        <div className="space-y-0">
          {DIFF.map((d, i) => (
            <DiffRow key={d.n} {...d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiffRow({
  n,
  topic,
  west,
  cn,
  bridge,
  index,
}: {
  n: string;
  topic: string;
  west: string;
  cn: string;
  bridge: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-line"
    >
      <button
        data-cursor="hover"
        onClick={() => setOpen((v) => !v)}
        className="w-full grid grid-cols-12 gap-6 py-6 md:py-8 text-left items-start group"
      >
        <div
          className="col-span-2 md:col-span-1 font-sans font-medium text-clay tracking-[-0.04em] leading-none"
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
        >
          {n}
        </div>
        <div className="col-span-10 md:col-span-2">
          <div className="mono text-[10px] tracking-[0.22em] text-muted mb-1 md:hidden">
            DIMENSION
          </div>
          <div
            className="font-sans font-medium tracking-[-0.01em] text-ink"
            style={{ fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: 1.2 }}
          >
            {topic}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 serif text-[15px] leading-[1.8] text-ink/75">
          <span className="md:hidden mono text-[10px] tracking-[0.22em] text-muted block mb-1">
            WEST
          </span>
          {west}
        </div>
        <div className="col-span-12 md:col-span-4 serif text-[15px] leading-[1.8] text-ink">
          <span className="md:hidden mono text-[10px] tracking-[0.22em] text-muted block mb-1">
            CN
          </span>
          {cn}
        </div>
        <div className="col-span-12 md:col-span-1 mono text-[18px] text-clay md:text-right">
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            →
          </motion.span>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-12 gap-6 pb-8">
          <div className="col-span-12 md:col-start-4 md:col-span-8 bg-card border border-line rounded-[12px] p-6 md:p-8">
            <div className="mono text-[10px] tracking-[0.22em] text-clay mb-2">
              结论 · BRIDGE
            </div>
            <div
              className="font-sans font-medium tracking-[-0.01em] text-ink"
              style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: 1.2 }}
            >
              {bridge}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------------- 结构性原因 ---------------- */

const STRUCTURE = [
  {
    n: "01",
    title: "房地产长周期下行",
    body:
      "从 2020 起进入结构性萎缩。地方财政对房地产税收的依赖，传导到就业。建筑业衰退波及全产业链。",
    quote: "房子曾是奋斗的终极目标——它的失重，是对努力动机的釜底抽薪。",
  },
  {
    n: "02",
    title: "互联网大厂从扩张到降本增效",
    body:
      "2020-21 年的黄金时代结束。美团 / 阿里 / 字节 / 腾讯轮番裁员。「进了大厂就能成功」的承诺破灭。",
    quote: "AI 时代里，连大厂经历也开始贬值。",
  },
  {
    n: "03",
    title: "制造业升级 · 高不成低不就",
    body:
      "进厂要本科但工资 3000；白领岗位要 3 年经验。年轻人被夹在中间，企业说找不到人，年轻人说找不到工作。",
    quote: "结构性错配 ≠ 个人失败。",
  },
  {
    n: "04",
    title: "教育-就业百万级错配",
    body:
      "每年百万级文科毕业生涌入饱和市场。法学 / 汉语 / 新闻——一旦选了专业，就基本确定了职业天花板。",
    quote: "选择被前置到 18 岁，代价付一辈子。",
  },
];

function Structure() {
  return (
    <section className="relative px-6 md:px-12 py-32 bg-card border-y border-line">
      <div className="container mx-auto max-w-[1280px]">
        <div className="mb-16">
          <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">
            CHAPTER · 04
          </div>
          <div className="mono text-[11px] tracking-[0.22em] text-muted mb-4">
            STRUCTURAL DRIVERS · 2026
          </div>
          <h2
            className="font-sans font-medium tracking-[-0.025em] text-ink"
            style={{ fontSize: "clamp(40px, 6vw, 96px)", lineHeight: 0.98 }}
          >
            四堵墙，
            <br />
            <span className="serif italic text-muted">同时合拢。</span>
          </h2>
        </div>

        <div className="space-y-px bg-line border border-line">
          {STRUCTURE.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-paper grid grid-cols-12 gap-6 p-8 md:p-12"
            >
              <div className="col-span-12 md:col-span-2">
                <div
                  className="font-sans font-medium text-clay tracking-[-0.04em] leading-none"
                  style={{ fontSize: "clamp(56px, 6vw, 96px)" }}
                >
                  {s.n}
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <h3
                  className="font-sans font-medium tracking-[-0.02em] text-ink mb-4"
                  style={{ fontSize: "clamp(24px, 2.6vw, 36px)", lineHeight: 1.1 }}
                >
                  {s.title}
                </h3>
                <p className="serif text-[15px] leading-[1.8] text-ink/85 max-w-[52ch]">
                  {s.body}
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:border-l md:border-line md:pl-6">
                <div className="text-clay mono text-[28px] leading-none mb-1">
                  &ldquo;
                </div>
                <p className="serif italic text-[15px] leading-[1.7] text-ink/80">
                  {s.quote}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 小李一日 · 时间日记 ---------------- */

const DIARY: [string, string][] = [
  [
    "14:00",
    "三个招聘软件 tab 同时打开。每投一份就在心里算一次：25k - 房租 - 餐 - 保险 ≈ 不到 20k。",
  ],
  [
    "15:30",
    "想起去年回县城的朋友。月薪 5k，住父母家，吃自家地里的菜。「生活变得简单了」。",
  ],
  [
    "18:00",
    "父母又转来 5000。这不是富有，而是在维持一个假象——儿子的城市生活依然风光。",
  ],
  [
    "22:00",
    "推荐页是「95 后创业成功」的故事。划过。已经没有精力听这种鸡汤。",
  ],
  [
    "23:30",
    "打开某游戏。四个小时不需要思考房子结婚人生。至少在这里，努力有直接回报。",
  ],
];

function Diary() {
  return (
    <section className="relative px-6 md:px-12 py-32 bg-paper">
      <div className="container mx-auto max-w-[1280px]">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-4">
            <div className="mono text-[11px] tracking-[0.22em] text-clay mb-3">
              CHAPTER · 05
            </div>
            <div className="mono text-[11px] tracking-[0.22em] text-muted">
              ONE DAY · 26 / M / SHENZHEN
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              className="font-sans font-medium tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.02 }}
            >
              一个 26 岁的
              <br />
              <span className="serif italic text-muted">日常</span>
            </h2>
            <p className="serif text-[15px] leading-[1.85] text-ink/75 mt-6 max-w-[60ch]">
              小李，前东家二轮融资受挫后被裁员。985 本科 + 五年一线经验 + 高级产品经理。
              按理说应有机会——
              <em className="serif italic text-clay">
                但每一行计算都通向同一个结论。
              </em>
            </p>
          </div>
        </div>

        <ol className="relative border-l-2 border-line ml-3">
          {DIARY.map(([t, body], i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-10 pr-2 py-6 grid grid-cols-12 gap-4 items-start"
            >
              <span className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-paper border-2 border-clay" />
              <div className="col-span-12 md:col-span-2 mono text-[14px] tracking-[0.18em] text-clay tabular-nums">
                {t}
              </div>
              <p className="col-span-12 md:col-span-10 serif text-[16px] md:text-[17px] leading-[1.85] text-ink/85 max-w-[60ch]">
                {body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- 编制崇拜 · 全屏暗场 ---------------- */

function CultOfEstablishment() {
  return (
    <section className="relative bg-nightBg text-paper px-6 md:px-12 py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--paper) 0 1px, transparent 1px 40px), repeating-linear-gradient(-45deg, var(--paper) 0 1px, transparent 1px 40px)",
        }}
      />
      <div className="container mx-auto max-w-[1280px] relative">
        <div className="mono text-[11px] tracking-[0.22em] text-nightClay mb-6">
          CHAPTER · 06 / DEPTH
        </div>

        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <h2
              className="font-sans font-medium tracking-[-0.03em]"
              style={{ fontSize: "clamp(48px, 8vw, 144px)", lineHeight: 0.95 }}
            >
              编制崇拜，
              <br />
              <span className="serif italic text-paper/70">
                是对市场的彻底失信。
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-10">
            <p className="serif text-[16px] leading-[1.85] text-paper/80">
              他们不相信市场能公平地奖励他们的努力。他们转向了体制。
              这是一种政治含义的转变——从鼓励竞争创新的时代，
              进入到追求稳定、压低风险的时代。
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/15">
          {[
            {
              t: "α · 出口",
              body:
                "国家体制的吸收能力。西方年轻人在困境中只能自我调适，中国还有「编制」这条出口。",
            },
            {
              t: "β · 救赎",
              body:
                "暂时缓解焦虑：稳定的薪资 / 福利 / 心理安全感。基层公务员在所有维度可能不如私企高管，但社会地位是绝对赢家。",
            },
            {
              t: "γ · 陷阱",
              body:
                "长期看，市场失去最需要的活力。当最聪慧的年轻人都涌入体制，社会创新力被系统抽离。",
            },
          ].map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-nightBg p-8 md:p-10"
            >
              <div className="mono text-[11px] tracking-[0.22em] text-nightClay mb-3">
                {it.t}
              </div>
              <p className="serif text-[15px] leading-[1.85] text-paper/85">
                {it.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 结尾 · 巨字双行 + 上一站链接 ---------------- */

function Coda() {
  return (
    <section className="relative bg-paper text-ink px-6 md:px-12 py-40 overflow-hidden">
      <div className="container mx-auto max-w-[1280px] relative">
        <div className="mono text-[11px] tracking-[0.22em] text-clay mb-8">
          CHAPTER · 07 / CODA
        </div>
        <h2
          className="font-sans font-medium tracking-[-0.035em] text-ink"
          style={{ fontSize: "clamp(40px, 7vw, 120px)", lineHeight: 0.96 }}
        >
          从「我能改变世界」
          <br />
          <span className="serif italic text-muted">
            到「世界改不了我」。
          </span>
        </h2>

        <div className="grid md:grid-cols-12 gap-10 mt-20">
          <div className="md:col-span-7">
            <p className="serif text-[18px] leading-[1.85] text-ink/85">
              这一代年轻人被教育「只要努力，就能成功」。很多人相信，并付出了高考、内卷、996 的代价。
              他们进入职场后才发现：这个承诺对少数人是真的，对大多数人是假的。
            </p>
            <p className="serif text-[18px] leading-[1.85] text-ink/85 mt-6">
              失落感催生了一种心理防御机制：
              <em className="serif italic text-clay">
                如果我无法通过努力改变现实，那我就改变对现实的态度。
              </em>
              从躺平到摆烂，从「我要赢」到「我无所谓」——这是心理自保的过程。
            </p>
            <p className="serif text-[18px] leading-[1.85] text-ink/85 mt-6">
              但这个过程是危险的。它带来的不是真正的内心平静，而是
              <strong> 虚假的平静</strong>。当一个人不再相信努力的价值，
              他也就失去了自我改进的动力。
            </p>
            <p className="serif italic text-[20px] leading-[1.7] text-clay mt-10 max-w-[44ch]">
              这不是解脱，这是精神的死亡。
            </p>
          </div>

          <div className="md:col-span-5 md:pl-10 md:border-l border-line">
            <div className="mono text-[10px] tracking-[0.22em] text-muted mb-4">
              PREV STATION
            </div>
            <Link
              href="/sub/genealogy"
              data-cursor="hover"
              className="group block border border-ink rounded-[16px] p-8 hover:bg-ink hover:text-paper transition-colors duration-500"
            >
              <div className="mono text-[11px] tracking-[0.22em] text-clay group-hover:text-nightClay mb-3">
                ← SUB-AGENT 01
              </div>
              <div
                className="font-sans font-medium tracking-[-0.02em] leading-[1.05]"
                style={{ fontSize: "clamp(24px, 2.8vw, 36px)" }}
              >
                奥德赛时期的概念溯源
                <br />
                <span className="serif italic opacity-70">
                  与社会学解剖
                </span>
              </div>
              <div className="mt-6 mono text-[11px] tracking-[0.22em] flex items-center justify-between">
                <span>从 Brooks 2007 开始</span>
                <span>↗</span>
              </div>
            </Link>

            <div className="mt-10 border-t border-line pt-6">
              <div className="mono text-[10px] tracking-[0.22em] text-muted mb-4">
                呼吁一个反思 · WHAT TO CHANGE
              </div>
              <ul className="serif text-[14px] leading-[1.85] text-ink/80 space-y-2">
                <li>· 政策：建立真正的社保，让年轻人不必完全依赖编制</li>
                <li>· 企业：创造真正有意义的工作机会，而非内卷岗位</li>
                <li>· 文化：恢复对探索 / 犯错的容纳度</li>
                <li>
                  · 自身：识别困境的<strong>系统性</strong>，
                  而非内化为个人失败
                </li>
              </ul>
            </div>

            <div className="mt-10 mono text-[10px] tracking-[0.22em] text-muted leading-[1.9]">
              REFS
              <br />
              <span className="text-ink/70">
                财新 · 第一财经 · 国家统计局
                <br />
                2026.04 · CN macro
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function ChinaPage() {
  return (
    <main className="bg-paper text-ink">
      <SubPageNav
        no="02"
        prev={{ href: "/sub/genealogy", label: "子代理 01 概念溯源" }}
      />
      <div className="pt-14">
        <Hero />
        <ScenePrologue />
        <StatsBoard />
        <LexiconViz />
        <DiffTable />
        <Structure />
        <Diary />
        <CultOfEstablishment />
        <Coda />
      </div>
    </main>
  );
}
