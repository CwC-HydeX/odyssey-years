"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function RevealText({
  text,
  className = "",
  delay = 0,
  el = "span",
  stagger = 0.03,
}: {
  text: string;
  className?: string;
  delay?: number;
  el?: "span" | "h1" | "h2" | "h3" | "p";
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const chars = Array.from(text);
  const Tag: any = el;

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span className="reveal-line" aria-hidden>
        {chars.map((c, i) => (
          <motion.span
            key={i}
            className="char"
            initial={{ y: "100%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 1,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: "inline-block", whiteSpace: c === " " ? "pre" : "normal" }}
          >
            {c}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}

export function MaskReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ClipReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={inView ? { clipPath: "inset(0 0 0 0)" } : {}}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
