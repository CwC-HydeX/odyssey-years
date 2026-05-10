"use client";
import { useEffect, useRef, useState } from "react";

export default function OdometerNumber({
  value,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setShown(eased * value);
              if (p < 1) requestAnimationFrame(tick);
              else setShown(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  const display =
    decimals > 0
      ? shown.toFixed(decimals)
      : Math.floor(shown).toLocaleString("zh-CN");

  return (
    <span ref={ref} className="mono tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
