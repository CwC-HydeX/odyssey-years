"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const TEXT = "奥德赛时期 · 延长的青春 · 漂泊一代 · 想回家但诸神不允许 · ";

export default function MarqueeFooter() {
  return (
    <footer className="relative bg-paper">
      <div className="overflow-hidden border-y border-line py-10 md:py-14">
        <motion.div
          className="flex whitespace-nowrap font-sans font-medium tracking-[-0.02em] will-change-transform"
          style={{ fontSize: "clamp(72px, 12vw, 200px)", lineHeight: 1 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {/* 复制两次以实现无缝循环：动画到 -50% 时正好等于第一组的起点 */}
          {Array.from({ length: 2 }).map((_, group) => (
            <span key={group} className="flex shrink-0">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="px-8">
                  {TEXT}
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto max-w-[1280px] px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="mono text-[11px] tracking-[0.2em] text-muted mb-4">COLOPHON / 关于本站</div>
            <p className="serif text-[15.5px] leading-[1.75] text-ink/80 max-w-[42ch]">
              本站重新编排了一份主代理 + 2 子代理的研究产出，没有简单拼接渲染原始 Markdown，而是按照三层信息架构（表层金句 / 中层章节 / 深层抽屉）进行了重新切分与图形化。
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="mono text-[11px] tracking-[0.2em] text-muted mb-4">RESEARCH</div>
            <ul className="serif text-[14px] leading-[1.9] text-ink/80 space-y-1">
              <li className="text-ink">2026.04.26 · 主代理（即本页）</li>
              <li>
                <Link
                  href="/sub/genealogy"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 hover:text-clay transition-colors group"
                >
                  子代理 01 · 概念溯源
                  <span className="mono text-[11px] opacity-60 group-hover:opacity-100">↗</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sub/china"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 hover:text-clay transition-colors group"
                >
                  子代理 02 · 中国式奥德赛
                  <span className="mono text-[11px] opacity-60 group-hover:opacity-100">↗</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="mono text-[11px] tracking-[0.2em] text-muted mb-4">SIGNATURE DEVICE</div>
            <p className="serif text-[14px] leading-[1.7] text-ink/80 max-w-[36ch]">
              右侧贯穿全页的 SVG 织机：<em className="text-clay not-italic">帕涅罗珀的织机</em>。
              滚动时纬线一根根被织上去，但在退场叙事区段已织好的部分会反向回抽——
              一架永远织不完的布。
            </p>
          </div>
        </div>
        <div className="border-t border-line mt-16 pt-6 flex flex-wrap justify-between mono text-[11px] tracking-[0.2em] uppercase text-muted gap-4">
          <span>© 2026 · 奥德赛时期</span>
          <span>Built with Next.js · Lenis · GSAP · Framer Motion</span>
          <span>· 她还在织 ·</span>
        </div>
      </div>
    </footer>
  );
}
