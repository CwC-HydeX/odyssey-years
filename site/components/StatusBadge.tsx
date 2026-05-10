"use client";
import { useEffect, useState } from "react";

export default function StatusBadge() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, "0");
      const m = String(d.getMinutes()).padStart(2, "0");
      const s = String(d.getSeconds()).padStart(2, "0");
      return `${h}:${m}:${s}`;
    };
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed left-6 bottom-6 z-50 mono text-[11px] tracking-[0.2em] uppercase text-muted flex items-center gap-2 select-none">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#788c5d] opacity-75 animate-ping" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#788c5d]" />
      </span>
      <span>READING · {time} · 远程 / 在路上</span>
    </div>
  );
}
