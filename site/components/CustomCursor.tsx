"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 800, damping: 50, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 800, damping: 50, mass: 0.3 });
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 900px)").matches) {
      setHidden(true);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      const interactive = !!(t.closest && t.closest("a, button, [data-cursor='hover'], input, textarea, summary"));
      setHover(interactive);
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y]);

  if (hidden) return null;
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
    >
      <motion.div
        animate={{ width: hover ? 56 : 8, height: hover ? 56 : 8, x: hover ? -28 : -4, y: hover ? -28 : -4 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        style={{ background: "#FAF9F5", borderRadius: 999 }}
      />
    </motion.div>
  );
}
