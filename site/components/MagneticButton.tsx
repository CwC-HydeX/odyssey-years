"use client";
import { ReactNode, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
  onClick,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "clay";
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20 });
  const sy = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < 100) {
      x.set(dx * 0.4);
      y.set(dy * 0.4);
    }
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      data-cursor="hover"
      className={`magnetic-btn ${variant === "clay" ? "cta-clay" : ""} ${className}`}
    >
      {children}
    </motion.button>
  );
}
