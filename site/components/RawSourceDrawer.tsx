"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const SOURCES: { name: string; desc: string; href?: string }[] = [
  { name: "奥德赛时期_延长的青春与漂泊一代.md", desc: "主回复 · 综合论述（即本站首页）", href: "/" },
  { name: "奥德赛时期的概念溯源与社会学解剖.md", desc: "子代理 01 · 概念史 / Arnett / 经济结构 / 批评", href: "/sub/genealogy" },
  { name: "中国式奥德赛_编制崇拜下没有合法漂泊权的年轻人.md", desc: "子代理 02 · 中国版本 2020-2026 形态", href: "/sub/china" },
];

export default function RawSourceDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        data-cursor="hover"
        onClick={() => setOpen(true)}
        className="fixed right-6 bottom-6 z-50 mono text-[11px] tracking-[0.2em] uppercase
                   border border-ink/80 rounded-full px-4 py-2 bg-paper hover:bg-ink hover:text-paper
                   transition-colors duration-500 ease-brand"
      >
        原始素材 ↗
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[80] bg-ink/30 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[90] w-[min(520px,92vw)] bg-card border-l border-line p-10 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="label">Raw Sources / 原始素材</span>
                <button data-cursor="hover" onClick={() => setOpen(false)} className="mono text-xs tracking-widest">
                  关闭 ✕
                </button>
              </div>
              <h3 className="font-sans text-3xl font-medium tracking-[-0.02em] mb-8">三份 Markdown 原稿</h3>
              <p className="serif text-[15px] leading-[1.75] text-muted mb-10 max-w-prose">
                本站内容来自一次主代理 + 2 子代理的研究产出。点击下方任意一项，即可进入对应子页面（主回复就是当前首页）。
              </p>
              <ul className="space-y-4">
                {SOURCES.map((s) => {
                  const Inner = (
                    <div className="block border-t border-line pt-5 pb-2 group">
                      <div className="mono text-[12px] tracking-[0.18em] text-clay mb-1 flex items-center justify-between">
                        <span className="truncate pr-2">{s.name}</span>
                        {s.href && s.href !== "/" && (
                          <span className="opacity-60 group-hover:opacity-100 transition-opacity">↗</span>
                        )}
                      </div>
                      <div className="serif text-[15px] text-ink/80 group-hover:text-ink transition-colors">
                        {s.desc}
                      </div>
                    </div>
                  );
                  if (!s.href) return <li key={s.name}>{Inner}</li>;
                  return (
                    <li key={s.name}>
                      <Link
                        href={s.href}
                        data-cursor="hover"
                        onClick={() => setOpen(false)}
                        className="block hover:bg-paper/60 -mx-3 px-3 transition-colors"
                      >
                        {Inner}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-12 mono text-[11px] tracking-[0.18em] uppercase text-muted leading-relaxed">
                文件位于：<br />
                <span className="text-ink">/一些想法/奥德赛时期_延长的青春与漂泊一代/</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

