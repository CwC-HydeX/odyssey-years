"use client";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const WINDOWS = [
  {
    n: "01",
    time: "14:00",
    title: "三个标签页",
    en: "Three Tabs",
    quote: "他在心里计算：扣除 3500 房租、1500 饮食，再加保险——这个数字听起来还不错，但他知道这是假象。",
    body: "小李坐在出租屋里，开着三个招聘软件的标签页。前东家在第二轮融资受挫后裁员 35%，他是其中之一。985 本科、一线城市、五年工作经验，最近的职位是某互联网公司的高级产品经理——按理说应该有很多机会。",
  },
  {
    n: "02",
    time: "17:30",
    title: "未拨出的电话",
    en: "Unsent Call",
    quote: "他从未对父母说过这些。不是因为怕他们担心，是因为一旦说出来，他就必须面对一个现实——",
    body: "他每个月会收到父母转来的 5000 块。这不是他们富有，而是他们在努力维持一个假象——儿子的城市生活依然风光。但实际上，没有这 5000，小李这个月就要透支信用卡了。六个钱包，其实只是拖延问题，而不是解决问题。",
  },
  {
    n: "03",
    time: "21:14",
    title: "一个朋友回了县城",
    en: "Friend Goes Home",
    quote: "他经常在微信上说，生活变得「简单了」。小李知道那是什么意思——那是一种放弃复杂追求后的释然。",
    body: "去年离职，回到老家县城，月薪 5000 的工作，但父母的房子足够他住，食物来自老家的地里。这是\"全职儿女\"的另一个温和版本：不彻底回家，但也不再追问意义。小李把这个朋友的微信置顶了，又把他的朋友圈屏蔽了。",
  },
  {
    n: "04",
    time: "23:52",
    title: "一局又一局",
    en: "One More Match",
    quote: "至少在游戏里，努力是有直接回报的。",
    body: "晚上，他打开抖音，推荐页是一个\"95 后创业成功\"的故事。他快速划过。他转而打开了某款游戏，花了四个小时获得一些虚拟成就感。这四个小时里，他不需要思考工作、房子、结婚或人生目标——他需要的只是点击、反应和不断上升的经验值。",
  },
  {
    n: "05",
    time: "—",
    title: "理性的放弃",
    en: "A Rational Surrender",
    quote: "这不是心理问题。这是一种理性的放弃。",
    body: "如果你算得过帐——四线城市的稳定 vs. 北上广的不稳定的高薪——很多年轻人现在选前者。这不是他们\"没追求\"，是这道题本来就没有第三个选项。他们既不算在工作，也不算在读书，也不算在家庭里。他们存在于一个所有现有词汇都不太指涉的空间里。",
  },
];

export default function XiaoLiScene() {
  const ref = useRef<HTMLElement>(null);
  const [tab, setTab] = useState(0);
  const w = WINDOWS[tab];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dim = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const yMid = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id="xiaoli" className="relative bg-nightBg text-paper overflow-hidden py-32 md:py-44">
      {/* 暗化背景纹理 */}
      <motion.div aria-hidden style={{ opacity: dim }} className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <g stroke="rgba(212,135,106,0.14)" fill="none" strokeWidth={0.5}>
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={i} x1={i * 50} y1={0} x2={i * 50 - 200} y2={900} />
            ))}
          </g>
        </svg>
      </motion.div>

      <motion.div style={{ y: yMid }} className="container mx-auto max-w-[1200px] px-6 md:px-10 relative">
        <div className="mb-16 grid md:grid-cols-12 gap-6 items-baseline">
          <div className="md:col-span-3">
            <div className="mono text-[11px] tracking-[0.2em] text-nightClay">CHAPTER 05</div>
            <div className="mono text-[11px] tracking-[0.2em] text-paper/50 mt-1">SCENE · 五扇窗</div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-sans font-medium text-[40px] md:text-[64px] tracking-[-0.02em] leading-[1.0]">
              一个 26 岁年轻人的一天，<br />
              <span className="serif italic text-paper/70 font-normal">从五扇窗里看进去。</span>
            </h2>
            <p className="serif text-[15px] md:text-[16px] leading-[1.7] text-paper/55 max-w-[55ch] mt-6">
              点击下面的时间标签，每一扇窗只展示这一天里的一个片段。窗子是关上的——只透出他没说的那部分。
            </p>
          </div>
        </div>

        {/* tab bar — 时间轴样式 */}
        <div className="border-y border-paper/15 py-6 mb-12">
          <div className="flex flex-wrap items-end gap-x-10 gap-y-4">
            {WINDOWS.map((win, i) => {
              const active = i === tab;
              return (
                <button
                  key={win.n}
                  data-cursor="hover"
                  onClick={() => setTab(i)}
                  className="group inline-flex flex-col items-start origin-bottom-left"
                  style={{
                    transform: active ? "scale(1.1)" : "scale(1)",
                    transition: "transform .5s var(--ease-brand)",
                  }}
                >
                  <span className="inline-flex items-baseline gap-3">
                    <span
                      className="mono text-[11px] tracking-[0.2em]"
                      style={{
                        color: active ? "var(--clay)" : "rgba(250,249,245,0.42)",
                        transition: "color .4s var(--ease-brand)",
                      }}
                    >
                      {win.time}
                    </span>
                    <span
                      className="font-sans text-[15px] md:text-[17px] tracking-[-0.01em]"
                      style={{
                        color: active ? "rgb(250,249,245)" : "rgba(250,249,245,0.55)",
                        fontWeight: active ? 600 : 400,
                        transition: "color .4s var(--ease-brand)",
                      }}
                    >
                      {win.title}
                    </span>
                  </span>
                  <span
                    className="block h-[2px] mt-1.5"
                    style={{
                      width: active ? "100%" : 0,
                      background: "var(--clay)",
                      transition: "width .5s var(--ease-brand)",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* === 窗口本体 === */}
        <div className="grid md:grid-cols-12 gap-10 min-h-[460px]">
          {/* 左侧：窗框 */}
          <div className="md:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={w.n}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] border border-paper/20 bg-black/30 overflow-hidden"
              >
                {/* 上下两块"窗帘"开启动效 */}
                <motion.div
                  initial={{ y: "0%" }}
                  animate={{ y: "-101%" }}
                  exit={{ y: "0%" }}
                  transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute top-0 left-0 right-0 bottom-1/2 bg-nightBg z-10"
                />
                <motion.div
                  initial={{ y: "0%" }}
                  animate={{ y: "101%" }}
                  exit={{ y: "0%" }}
                  transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1], delay: 0.05 }}
                  className="absolute bottom-0 left-0 right-0 top-1/2 bg-nightBg z-10"
                />

                {/* 窗里的内容（编号 + 时间 + 抽象图） */}
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-baseline justify-between mono text-[10px] tracking-[0.22em] text-paper/50">
                    <span>WINDOW {w.n}</span>
                    <span>{w.en}</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 flex items-center justify-center relative"
                  >
                    {/* 抽象 SVG —— 每个 tab 不同 */}
                    <SceneArt n={tab} />
                  </motion.div>
                  <div className="mono text-[10px] tracking-[0.22em] text-paper/40 flex items-baseline justify-between border-t border-paper/15 pt-3">
                    <span>{w.time}</span>
                    <span className="text-nightClay">●</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 右侧：文字 */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={w.n}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mono text-[10px] tracking-[0.22em] text-nightClay mb-4">
                  WINDOW {w.n} · {w.time}
                </div>
                <h3 className="font-sans font-medium text-[32px] md:text-[42px] tracking-[-0.02em] leading-[1.05] mb-8">
                  {w.title}
                </h3>
                <blockquote className="serif italic text-[20px] md:text-[22px] leading-[1.5] text-nightClay border-l-2 border-nightClay/60 pl-5 mb-8 max-w-[40ch]">
                  {w.quote}
                </blockquote>
                <p className="serif text-[15.5px] leading-[1.85] text-paper/85 max-w-[42ch]">{w.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/** 每扇窗里的抽象图形，避免文字密度太高 */
function SceneArt({ n }: { n: number }) {
  const c = "var(--clay)";
  const cd = "rgba(212,135,106,0.5)";
  switch (n) {
    case 0:
      // 三个标签页
      return (
        <svg viewBox="0 0 200 140" className="w-full h-full max-w-[260px]">
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${10 + i * 18}, ${20 + i * 12})`}>
              <rect width={140} height={80} fill="none" stroke={i === 1 ? c : cd} strokeWidth={1} />
              <line x1={10} y1={14} x2={60} y2={14} stroke={i === 1 ? c : cd} strokeWidth={1} />
              <line x1={10} y1={26} x2={120} y2={26} stroke="rgba(250,249,245,0.18)" strokeWidth={0.5} />
              <line x1={10} y1={34} x2={100} y2={34} stroke="rgba(250,249,245,0.18)" strokeWidth={0.5} />
              <line x1={10} y1={42} x2={110} y2={42} stroke="rgba(250,249,245,0.18)" strokeWidth={0.5} />
            </g>
          ))}
        </svg>
      );
    case 1:
      // 未拨出的电话 — 圆形拨号 + 红心
      return (
        <svg viewBox="0 0 200 140" className="w-full h-full max-w-[220px]">
          <circle cx={100} cy={70} r={48} fill="none" stroke={cd} strokeWidth={1} />
          <circle cx={100} cy={70} r={36} fill="none" stroke={c} strokeWidth={1} strokeDasharray="3 3" />
          <text x={100} y={66} textAnchor="middle" fill="rgba(250,249,245,0.7)" fontSize="9" letterSpacing="2" fontFamily="var(--font-jetbrains), monospace">MOM</text>
          <text x={100} y={80} textAnchor="middle" fill={c} fontSize="14" letterSpacing="0">···</text>
          <line x1={100} y1={120} x2={100} y2={132} stroke={cd} strokeWidth={1} />
        </svg>
      );
    case 2:
      // 朋友回县城 — 两点 + 一根线
      return (
        <svg viewBox="0 0 240 140" className="w-full h-full max-w-[300px]">
          <line x1={20} y1={70} x2={220} y2={70} stroke={cd} strokeWidth={0.6} strokeDasharray="2 4" />
          <circle cx={20} cy={70} r={5} fill={c} />
          <circle cx={220} cy={70} r={5} fill="none" stroke={c} strokeWidth={1.2} />
          <text x={20} y={92} fill="rgba(250,249,245,0.7)" fontSize="9" letterSpacing="2" fontFamily="var(--font-jetbrains), monospace">CITY</text>
          <text x={220} y={92} textAnchor="end" fill="rgba(250,249,245,0.7)" fontSize="9" letterSpacing="2" fontFamily="var(--font-jetbrains), monospace">HOMETOWN</text>
          <text x={120} y={56} textAnchor="middle" fill={c} fontSize="9" letterSpacing="2" fontFamily="var(--font-jetbrains), monospace">— 1,400 km —</text>
        </svg>
      );
    case 3:
      // 一局又一局 — 经验条
      return (
        <svg viewBox="0 0 240 140" className="w-full h-full max-w-[300px]">
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(20, ${30 + i * 22})`}>
              <rect width={200} height={6} fill="none" stroke={cd} strokeWidth={0.6} />
              <rect width={200 * (0.6 + i * 0.1)} height={6} fill={c} opacity={0.8} />
              <text x={-2} y={5} textAnchor="end" fill="rgba(250,249,245,0.6)" fontSize="7" letterSpacing="1.4" fontFamily="var(--font-jetbrains), monospace">LV.{12 + i}</text>
            </g>
          ))}
        </svg>
      );
    default:
      // 理性的放弃 — 空心方块
      return (
        <svg viewBox="0 0 200 140" className="w-full h-full max-w-[240px]">
          <rect x={40} y={30} width={120} height={80} fill="none" stroke={cd} strokeWidth={0.8} strokeDasharray="2 4" />
          <text x={100} y={75} textAnchor="middle" fill={c} fontSize="11" letterSpacing="2" fontFamily="var(--font-jetbrains), monospace">— 空 —</text>
          <text x={100} y={100} textAnchor="middle" fill="rgba(250,249,245,0.45)" fontSize="8" letterSpacing="2" fontFamily="var(--font-jetbrains), monospace">NO LABEL FITS</text>
        </svg>
      );
  }
}
