"use client";
import { useEffect, useRef, useState } from "react";

/**
 * 帕涅罗珀的织机 / Penelope's Loom
 *
 * 设计语言：极简、低饱和、纸面工程图风。
 * - 顶部细横梁 + 两根立柱构成织机外框；
 * - 9 根经线（warp）从顶梁悬下；
 * - 滚动 progress → 纬线（weft）一根根被织上去；最高约 72%；
 * - 在 UNWIND_RANGES 区间内已织部分反向回抽 25%（永远织不完的布）；
 * - 梭子（shuttle）跟随当前正在编织的那一行；
 * - 已织区域以低饱和陶土色实色块呈现，自带渐变与经线纹理。
 */

const TOTAL_WEFTS = 56;
const WARP_COUNT = 9;
const UNWIND_RANGES: [number, number][] = [
  [0.55, 0.62],
  [0.78, 0.84],
];

export default function Loom() {
  const [progress, setProgress] = useState(0);
  const [woven, setWoven] = useState(0);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max ? h.scrollTop / max : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const base = progress * 0.72 * TOTAL_WEFTS;
    let actual = base;
    for (const [a, b] of UNWIND_RANGES) {
      if (progress > a) {
        const span = b - a;
        const inRange = Math.min((progress - a) / span, 1);
        actual -= base * 0.25 * inRange;
      }
    }
    targetRef.current = Math.max(0, actual);
  }, [progress]);

  useEffect(() => {
    const tick = () => {
      setWoven((w) => w + (targetRef.current - w) * 0.12);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const W = 200;
  const H = 420;
  const padX = 28;
  const padTop = 56;
  const padBot = 92;
  const innerW = W - padX * 2;
  const innerH = H - padTop - padBot;
  const wovenInt = Math.floor(woven);
  const partialFrac = woven - wovenInt;
  const wovenPct = Math.round((woven / TOTAL_WEFTS) * 100);

  // 已织行延伸到的 y（从顶部往下生长）
  const clothTopY = padTop;
  const clothCurY = padTop + (innerH / TOTAL_WEFTS) * woven;
  const inUnwind = UNWIND_RANGES.some(([a, b]) => progress > a && progress < b + 0.04);

  return (
    <div
      aria-hidden
      className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-30 pointer-events-none select-none"
      style={{ width: W, height: H }}
    >
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="cloth-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--clay-dark)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--clay)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* 标签 */}
        <text
          x={W / 2}
          y={20}
          fontSize={8}
          letterSpacing={2.4}
          fill="var(--muted)"
          fontFamily="var(--font-jetbrains), monospace"
          textAnchor="middle"
        >
          PENELOPE&apos;S LOOM
        </text>
        <text
          x={W / 2}
          y={34}
          fontSize={7.5}
          letterSpacing={1.2}
          fill="var(--muted)"
          opacity={0.7}
          fontFamily="var(--font-noto-serif-sc), serif"
          textAnchor="middle"
        >
          帕涅罗珀的织机
        </text>

        {/* 顶梁 */}
        <line x1={padX - 12} y1={padTop} x2={W - padX + 12} y2={padTop} stroke="var(--ink)" strokeWidth={1.6} strokeLinecap="round" />
        <circle cx={padX - 12} cy={padTop} r={3.2} fill="var(--paper)" stroke="var(--ink)" strokeWidth={1.2} />
        <circle cx={W - padX + 12} cy={padTop} r={3.2} fill="var(--paper)" stroke="var(--ink)" strokeWidth={1.2} />
        {/* 底梁 / 卷布辊 */}
        <line x1={padX - 12} y1={H - padBot} x2={W - padX + 12} y2={H - padBot} stroke="var(--ink)" strokeWidth={1.6} strokeLinecap="round" />
        <circle cx={padX - 12} cy={H - padBot} r={3.2} fill="var(--paper)" stroke="var(--ink)" strokeWidth={1.2} />
        <circle cx={W - padX + 12} cy={H - padBot} r={3.2} fill="var(--paper)" stroke="var(--ink)" strokeWidth={1.2} />
        {/* 立柱 */}
        <line x1={padX - 12} y1={padTop - 14} x2={padX - 12} y2={H - padBot + 14} stroke="var(--ink)" strokeWidth={1.4} strokeLinecap="round" />
        <line x1={padX - 9.5} y1={padTop - 14} x2={padX - 9.5} y2={H - padBot + 14} stroke="var(--ink)" strokeWidth={0.5} opacity={0.4} />
        <line x1={W - padX + 12} y1={padTop - 14} x2={W - padX + 12} y2={H - padBot + 14} stroke="var(--ink)" strokeWidth={1.4} strokeLinecap="round" />
        <line x1={W - padX + 9.5} y1={padTop - 14} x2={W - padX + 9.5} y2={H - padBot + 14} stroke="var(--ink)" strokeWidth={0.5} opacity={0.4} />

        {/* 经线（warp）— 全部贯穿（半透明） */}
        {Array.from({ length: WARP_COUNT }).map((_, i) => {
          const x = padX + (innerW / (WARP_COUNT - 1)) * i;
          return (
            <line
              key={`warp-${i}`}
              x1={x}
              y1={padTop}
              x2={x}
              y2={H - padBot}
              stroke="var(--ink)"
              strokeOpacity={0.16}
              strokeWidth={0.5}
            />
          );
        })}

        {/* 已织布块（陶土色矩形 + 经线深化） */}
        {woven > 0.3 && (
          <g>
            <rect
              x={padX}
              y={clothTopY}
              width={innerW}
              height={Math.max(0, clothCurY - clothTopY)}
              fill="url(#cloth-grad)"
            />
            {Array.from({ length: WARP_COUNT }).map((_, i) => {
              const x = padX + (innerW / (WARP_COUNT - 1)) * i;
              return (
                <line
                  key={`warp-on-${i}`}
                  x1={x}
                  y1={clothTopY}
                  x2={x}
                  y2={clothCurY}
                  stroke="var(--paper)"
                  strokeOpacity={0.35}
                  strokeWidth={0.6}
                />
              );
            })}
            {/* 已织纬线的横向高光（每 4 行一根浅色突出） */}
            {Array.from({ length: wovenInt }).map((_, i) => {
              if (i % 4 !== 0) return null;
              const y = padTop + (innerH / TOTAL_WEFTS) * (i + 0.5);
              return (
                <line
                  key={`hl-${i}`}
                  x1={padX}
                  y1={y}
                  x2={padX + innerW}
                  y2={y}
                  stroke="var(--paper)"
                  strokeOpacity={0.22}
                  strokeWidth={0.5}
                />
              );
            })}
          </g>
        )}

        {/* 当前编织行 + 梭子 */}
        {wovenInt < TOTAL_WEFTS && (
          <g>
            {(() => {
              const y = clothCurY;
              const xL = padX;
              const xR = padX + innerW * partialFrac;
              return (
                <>
                  <line x1={xL} y1={y} x2={xR} y2={y} stroke="var(--clay)" strokeWidth={1.8} strokeLinecap="round" opacity={1} />
                  {/* shuttle — 流线型 */}
                  <g transform={`translate(${xR}, ${y})`}>
                    <line x1={-22} y1={0} x2={-9} y2={0} stroke="var(--ink)" strokeOpacity={0.2} strokeWidth={1.2} />
                    <ellipse cx={0} cy={0} rx={9} ry={2.6} fill="var(--ink)" />
                    <circle cx={0} cy={0} r={0.9} fill="var(--paper)" />
                  </g>
                </>
              );
            })()}
          </g>
        )}

        {/* 顶梁右上角小线团（装饰） */}
        <g transform={`translate(${W - padX + 4}, ${padTop - 22})`}>
          <circle cx={0} cy={0} r={6} fill="none" stroke="var(--clay)" strokeWidth={0.6} opacity={0.6} />
          <circle cx={0} cy={0} r={3.5} fill="none" stroke="var(--clay)" strokeWidth={0.6} opacity={0.6} />
          <circle cx={0} cy={0} r={1.5} fill="var(--clay)" opacity={0.7} />
        </g>

        {/* 底部 HUD */}
        <text
          x={padX - 12}
          y={H - padBot + 32}
          fontSize={22}
          letterSpacing={-0.6}
          fill="var(--ink)"
          fontFamily="var(--font-jetbrains), monospace"
          fontWeight={500}
        >
          {String(wovenPct).padStart(2, "0")}
        </text>
        <text
          x={padX - 12 + 30}
          y={H - padBot + 32}
          fontSize={9}
          letterSpacing={1.6}
          fill="var(--muted)"
          fontFamily="var(--font-jetbrains), monospace"
        >
          % WOVEN
        </text>
        <text
          x={padX - 12}
          y={H - padBot + 48}
          fontSize={8}
          letterSpacing={1.4}
          fill={inUnwind ? "var(--clay-dark)" : "var(--muted)"}
          fontFamily="var(--font-jetbrains), monospace"
        >
          {inUnwind ? "UNWINDING ─ 她拆掉了一段" : "WEAVING ─ 她还在织"}
        </text>
        <line
          x1={padX - 12}
          y1={H - padBot + 56}
          x2={W - padX + 12}
          y2={H - padBot + 56}
          stroke="var(--line)"
          strokeWidth={1}
        />
        <line
          x1={padX - 12}
          y1={H - padBot + 56}
          x2={padX - 12 + (W - padX * 2 + 24) * (woven / TOTAL_WEFTS)}
          y2={H - padBot + 56}
          stroke={inUnwind ? "var(--clay-dark)" : "var(--clay)"}
          strokeWidth={1.6}
          strokeLinecap="round"
        />
        <text
          x={W - padX + 12}
          y={H - padBot + 70}
          fontSize={6.5}
          letterSpacing={1}
          fill="var(--muted)"
          fontFamily="var(--font-jetbrains), monospace"
          textAnchor="end"
          opacity={0.7}
        >
          一架永远织不完的布
        </text>
      </svg>
    </div>
  );
}
