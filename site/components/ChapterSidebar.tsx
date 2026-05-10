"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ITEMS = [
  { id: "hero", num: "00" },
  { id: "prologue", num: "01" },
  { id: "chapter-one", num: "02" },
  { id: "genealogy", num: "03" },
  { id: "chapter-two", num: "04" },
  { id: "xiaoli", num: "05" },
  { id: "responses", num: "06" },
];

export default function ChapterSidebar() {
  const pathname = usePathname();
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      let cur = "hero";
      for (const it of ITEMS) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.35) cur = it.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as any).__lenis;
    if (lenis) lenis.scrollTo(el, { offset: -40 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  // 只在主页显示章节导航，子页面隐藏
  if (pathname && pathname !== "/") return null;

  return (
    <nav
      aria-label="章节导航"
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
    >
      {ITEMS.map((it) => (
        <button
          key={it.id}
          data-cursor="hover"
          onClick={() => go(it.id)}
          className="group flex items-center gap-3 mono text-[10px] tracking-[0.2em] uppercase"
          aria-label={`跳转到章节 ${it.num}`}
        >
          <span
            className="block transition-all duration-500 ease-brand"
            style={{
              width: active === it.id ? 28 : 14,
              height: 1,
              background: active === it.id ? "var(--clay)" : "var(--muted)",
            }}
          />
          <span style={{ color: active === it.id ? "var(--ink)" : "var(--muted)", transition: "color .4s" }}>
            {it.num}
          </span>
        </button>
      ))}
    </nav>
  );
}
