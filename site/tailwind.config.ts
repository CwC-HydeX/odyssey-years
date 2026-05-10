import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F5",
        card: "#F0EEE6",
        ink: "#1F1E1D",
        muted: "#6B6862",
        line: "#E5E1D8",
        clay: "#CC785C",
        clayDark: "#B85F3F",
        nightBg: "#262624",
        nightInk: "#FAF9F5",
        nightClay: "#D4876A",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Noto Sans SC", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Noto Serif SC", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      letterSpacing: { tightest: "-0.02em", widewide: "0.2em" },
      transitionTimingFunction: { brand: "cubic-bezier(0.65, 0, 0.35, 1)" },
    },
  },
  plugins: [],
};

export default config;
