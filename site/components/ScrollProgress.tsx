"use client";
import { useEffect, useState } from "react";

const CHAPTERS = [
  { id: "hero", num: "00", label: "序" },
  { id: "quotes", num: "·", label: "金句" },
  { id: "data", num: "·", label: "数据" },
  { id: "prologue", num: "01", label: "Arnett 五特征" },
  { id: "chapter-one", num: "02", label: "概念溯源" },
  { id: "genealogy", num: "03", label: "标签谱系" },
  { id: "chapter-two", num: "04", label: "中国式奥德赛" },
  { id: "xiaoli", num: "05", label: "小李日常" },
  { id: "responses", num: "06", label: "三件值得说的事" },
];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(CHAPTERS[0]);
  const [rolled, setRolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max ? h.scrollTop / max : 0);

      let active = CHAPTERS[0];
      for (const c of CHAPTERS) {
        const el = document.getElementById(c.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35) active = c;
      }
      if (active.id !== current.id) {
        setRolled(true);
        setTimeout(() => {
          setCurrent(active);
          setRolled(false);
        }, 240);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [current.id]);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
      <div className="h-[2px] bg-line/0">
        <div
          className="h-full bg-clay origin-left"
          style={{ transform: `scaleX(${progress})`, transition: "transform 120ms linear" }}
        />
      </div>
      <div className="flex justify-between items-center px-6 md:px-10 py-3">
        <div className="mono text-[11px] tracking-[0.2em] uppercase text-muted">
          奥德赛时期 / Odyssey Years
        </div>
        <div className="mono text-[11px] tracking-[0.2em] uppercase text-ink overflow-hidden h-4">
          <div
            style={{
              transform: rolled ? "translateY(-100%)" : "translateY(0)",
              transition: "transform 240ms cubic-bezier(0.65,0,0.35,1)",
            }}
          >
            {current.num} · {current.label}
          </div>
        </div>
      </div>
    </div>
  );
}
