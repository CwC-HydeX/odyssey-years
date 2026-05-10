"use client";
import Link from "next/link";

export default function SubPageNav({
  no,
  prev,
  next,
}: {
  no: string;
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-paper/85 backdrop-blur-md border-b border-line">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-10 h-14 flex items-center justify-between">
        <Link
          href="/"
          data-cursor="hover"
          className="mono text-[11px] tracking-[0.22em] uppercase hover:text-clay transition-colors"
        >
          ← 返回主站 / Odyssey Years
        </Link>
        <div className="mono text-[11px] tracking-[0.22em] text-muted hidden md:block">
          SUB-AGENT {no}
        </div>
        <div className="flex items-center gap-5 mono text-[11px] tracking-[0.22em]">
          {prev && (
            <Link href={prev.href} data-cursor="hover" className="text-muted hover:text-clay transition-colors">
              ← {prev.label}
            </Link>
          )}
          {next && (
            <Link href={next.href} data-cursor="hover" className="text-muted hover:text-clay transition-colors">
              {next.label} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
