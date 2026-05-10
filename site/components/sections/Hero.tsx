"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText, MaskReveal, ClipReveal } from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} id="hero" className="relative min-h-[110vh] pt-36 pb-32 overflow-hidden">
      {/* 背景图层：希腊海图风格的极淡 SVG */}
      <motion.svg
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g stroke="var(--line)" fill="none" strokeWidth={0.6}>
          {Array.from({ length: 18 }).map((_, i) => (
            <circle key={i} cx={1200} cy={500} r={60 + i * 35} opacity={0.5 - i * 0.025} />
          ))}
          <path d="M0,600 C300,520 600,680 900,600 S1200,520 1440,580" />
          <path d="M0,650 C300,560 600,720 900,640 S1200,560 1440,620" opacity={0.6} />
          <path d="M0,700 C300,610 600,760 900,680 S1200,610 1440,660" opacity={0.4} />
        </g>
      </motion.svg>

      <div className="container mx-auto max-w-[1280px] px-6 md:px-10 relative">
        {/* 顶部元信息 */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-14 mt-4">
          <span className="label">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-clay align-middle mr-3" />
            ESSAY · 长读
          </span>
          <span className="label">2026.04.26</span>
          <span className="label">主代理 + 2 子代理</span>
          <span className="label">约 18,000 字</span>
          <span className="label">阅读 32 分钟</span>
        </div>

        {/* 主标题 */}
        <div className="mb-10">
          <ClipReveal>
            <h1 className="hero-title">
              奥德赛时期
            </h1>
          </ClipReveal>
          <ClipReveal delay={0.15}>
            <h1 className="hero-title text-muted italic font-serif font-normal" style={{ fontWeight: 400 }}>
              延长的青春，与漂泊一代
            </h1>
          </ClipReveal>
        </div>

        {/* 「奥德赛时期」科普条——与下方 THESIS 同一套 12-grid，起点对齐，去掉 chunky 卡 */}
        <motion.div style={{ y: yMid }} className="grid md:grid-cols-12 gap-10 mt-16">
          <div className="md:col-span-1 md:col-start-2 hidden md:flex flex-col items-end pt-1 leading-tight">
            <span className="mono text-[11px] tracking-[0.22em] uppercase text-clay whitespace-nowrap">
              § 01
            </span>
            <span className="mono text-[10px] tracking-[0.18em] text-muted whitespace-nowrap mt-1">
              WHAT
            </span>
          </div>
          <div className="md:col-span-9">
            <MaskReveal delay={0.35}>
              <div className="border-l border-clay/50 pl-6 md:pl-8">
                <div className="mono text-[10px] tracking-[0.22em] text-muted mb-3 uppercase">
                  这个词是什么 · odyssey years
                </div>
                <p className="serif text-[16.5px] md:text-[18px] leading-[1.85] text-ink/85 max-w-[58ch]">
                  <span className="font-sans font-medium not-italic text-ink">奥德赛时期</span>
                  ，是 David Brooks 2007 年在 NYT 专栏里造的概念——
                  指年轻人从「离开父母家」到「建立自己家庭」之间，
                  那段越拉越长的人生阶段，大致 <span className="mono text-[15px] text-clay">22–35</span> 岁。
                </p>
                <p className="serif text-[15px] md:text-[16px] leading-[1.85] text-muted mt-4 max-w-[58ch]">
                  <em>毕业、辞职、跳槽、间隔年、考研、考编、回家、再出走</em>……
                  他们像奥德修斯一样在外漂泊，却回不到那个叫「成家立业」的伊萨卡岛。
                </p>
              </div>
            </MaskReveal>
          </div>
        </motion.div>

        {/* 核心论点 */}
        <motion.div style={{ y: yMid }} className="grid md:grid-cols-12 gap-10 mt-16">
          <div className="md:col-span-1 md:col-start-2 hidden md:flex flex-col items-end pt-1 leading-tight">
            <span className="mono text-[11px] tracking-[0.22em] uppercase text-clay whitespace-nowrap">
              § 02
            </span>
            <span className="mono text-[10px] tracking-[0.18em] text-muted whitespace-nowrap mt-1">
              THESIS
            </span>
          </div>
          <div className="md:col-span-8">
            <MaskReveal delay={0.6}>
              <p className="serif text-[22px] md:text-[30px] leading-[1.45] text-ink/90 max-w-[42ch]">
                奥德赛时期不是回家的延误，而是<em className="text-clay not-italic">回家的方式本身</em>正在被改写。
              </p>
            </MaskReveal>
            <MaskReveal delay={0.85}>
              <p className="serif text-[16px] md:text-[18px] leading-[1.7] text-muted mt-8 max-w-[58ch]">
                谁能够在这个改写过程中保持清醒、保持具体、保持不被两种最常见的诱惑——廉价乐观和廉价虚无——带走，谁就能从这场漂泊里活着上岸。
              </p>
            </MaskReveal>
            <div className="mt-12 flex flex-wrap gap-4">
              <MagneticButton variant="clay" onClick={() => (window as any).__lenis?.scrollTo("#prologue", { offset: -40 })}>
                进入正文 ↓
              </MagneticButton>
              <MagneticButton onClick={() => (window as any).__lenis?.scrollTo("#data", { offset: -40 })}>
                先看数据
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* 底部细节角注 */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-line pt-8 max-w-3xl">
          <div>
            <div className="label mb-2">概念</div>
            <div className="serif text-sm text-ink/80">Odyssey Years · Brooks 2007</div>
          </div>
          <div>
            <div className="label mb-2">理论</div>
            <div className="serif text-sm text-ink/80">Emerging Adulthood · Arnett 2000</div>
          </div>
          <div>
            <div className="label mb-2">中国</div>
            <div className="serif text-sm text-ink/80">编制崇拜 · 全职儿女 · 2026</div>
          </div>
          <div>
            <div className="label mb-2">研究方法</div>
            <div className="serif text-sm text-ink/80">主代理综合 + 2 子代理深挖</div>
          </div>
        </div>
      </div>
    </section>
  );
}
