"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const LABELS = [
  { y: 2016, name: "葛优躺", en: "Slacker Lying", note: "懒散的反抗，但还有幽默的距离感", mood: "幽默" },
  { y: 2019, name: "996.ICU", en: "Anti-Overwork", note: "对过度劳动的公开反抗，充满理想主义的愤怒", mood: "愤怒" },
  { y: 2021, name: "躺平", en: "Tang Ping", note: "从反抗到精神退场，带着哲学性的冷漠", mood: "冷漠" },
  { y: 2022, name: "摆烂", en: "Bai Lan", note: "从躺平到行动的堕落——“努力已经没用”", mood: "堕落" },
  { y: 2023, name: "全职儿女", en: "Full-time Children", note: "放弃所有社会身份，回到最原始的家庭角色", mood: "退场" },
  { y: 2024, name: "鼠鼠 / 长衫", en: "Rat-Lit / Kong Yiji", note: "从消极到自我贬抑，一种精致的绝望", mood: "自贬" },
  { y: 2026, name: "编制崇拜", en: "Cult of Establishment", note: "彻底的理想破产，转向对体制的绝对依赖", mood: "投降" },
];

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function LabelGenealogy() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const ctx = gsap.context(() => {
      const dist = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${dist()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      return () => {
        tween.kill();
      };
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      id="genealogy"
      className="relative bg-card border-y border-line overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* 顶部章节标头（pinned 时常驻） */}
      <div className="absolute top-0 left-0 right-0 z-10 px-6 md:px-10 pt-10 pointer-events-none">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <div className="mono text-[11px] tracking-[0.2em] text-clay">CHAPTER 03</div>
            <div className="mono text-[11px] tracking-[0.2em] text-muted mt-1">SUB-AGENT 02 · 标签谱系</div>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-sans font-medium text-[28px] md:text-[44px] tracking-[-0.02em] leading-[1.05]">
              一代人心理防御线，<span className="serif italic text-muted font-normal">逐步瓦解的七步。</span>
            </h2>
          </div>
          <div className="md:col-span-2 mono text-[10px] tracking-[0.2em] text-muted text-right">
            ← 横向滚动 / SCROLL
          </div>
        </div>
      </div>

      {/* 横向 track */}
      <div
        ref={trackRef}
        className="absolute inset-0 flex items-center pl-[10vw] pr-[10vw]"
        style={{ width: "max-content", paddingTop: 140 }}
      >
        {/* 时间基线 */}
        <div
          className="absolute left-0 right-0 h-px bg-line"
          style={{ top: "calc(50% + 40px)", width: "100%" }}
        />

        {LABELS.map((l, i) => (
          <div
            key={l.y}
            className="relative flex flex-col mr-[18vw] last:mr-0 group"
            style={{ width: "32vw", minWidth: 360 }}
          >
            {/* 年份巨字背景 */}
            <div
              aria-hidden
              className="font-sans font-medium absolute -top-8 -left-2 select-none pointer-events-none"
              style={{
                fontSize: "clamp(120px, 14vw, 220px)",
                letterSpacing: "-0.04em",
                color: "var(--line)",
                lineHeight: 0.9,
                zIndex: 0,
              }}
            >
              {l.y}
            </div>

            <div className="relative z-10 flex flex-col gap-4 pt-32">
              <div className="mono text-[11px] tracking-[0.22em] text-clay">
                {String(i + 1).padStart(2, "0")} / {LABELS.length}
              </div>
              <h3 className="font-sans font-medium text-[56px] md:text-[80px] tracking-[-0.02em] leading-[0.95]">
                {l.name}
              </h3>
              <div className="mono text-[12px] tracking-[0.18em] text-muted uppercase">{l.en}</div>
              <p className="serif text-[17px] leading-[1.6] text-ink/85 max-w-[28ch] mt-2">{l.note}</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="block w-2 h-2 rounded-full bg-clay" />
                <span className="mono text-[11px] tracking-[0.2em] uppercase text-clay">{l.mood}</span>
              </div>
            </div>

            {/* 节点圆点 */}
            <div
              className="absolute"
              style={{ top: "calc(100% - 10px)", left: 0, width: 14, height: 14, borderRadius: 999, background: "var(--ink)" }}
            />
          </div>
        ))}

        {/* 收尾文字（用 bg-card 覆盖时间基线，避免被横线穿过） */}
        <div
          className="relative flex flex-col justify-center pr-[10vw] z-20"
          style={{ width: "44vw", minWidth: 420 }}
        >
          <div className="bg-card border-l-2 border-clay pl-6 py-8">
            <div className="mono text-[11px] tracking-[0.2em] text-clay mb-4">
              — 谱系总结
            </div>
            <p className="serif text-[22px] md:text-[26px] leading-[1.55] text-ink/90 max-w-[34ch]">
              从反抗到接受，从接受到投降，从投降到自我贬低。
              <em className="not-italic text-clay">
                这不是代沟，这是心理防线的逐步瓦解。
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
