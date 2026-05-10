"use client";
import OdometerNumber from "@/components/OdometerNumber";

const DATA = [
  { v: 16.9, suf: "%", decimals: 1, label: "2026.03 中国 16-24 岁失业率（不含在校生）", note: "结束六连降，重新上行" },
  { v: 1222, suf: " 万", label: "2025 中国高校毕业生人数", note: "2024:1179 万 → 2025:1222 万 → 2026 继续增" },
  { v: 92, suf: "%", label: "Arnett 研究：美国 18–24 岁认为自己未来不输父辈", note: "中国对照样本几乎反向" },
  { v: 41, suf: "%", label: "加拿大 2001 年 20-29 岁与父母同住比例", note: "1981 年仅 27.5%" },
  { v: 1.7, suf: " 万亿美元", decimals: 1, label: "美国学生债务总额（2023）", note: "人均 ≈ 3.5 万美元" },
  { v: 35, suf: " 岁", label: "美国 2020 年首次购房平均年龄", note: "1960 年代仅 27 岁" },
  { v: 6, suf: " 个钱包", label: "中国独生子女隐形枷锁", note: "父母 + 双方祖辈共 6 人押注 1 子" },
  { v: 21, suf: " 个月", label: "Arnett 研究：新兴成年期恋爱平均时长", note: "青少年期仅 5–12 个月" },
  { v: 7, suf: " 个标签", label: "2016→2026 中国青年文化反抗谱系", note: "葛优躺 → 996 → 躺平 → 摆烂 → 全职儿女 → 鼠鼠文学 → 编制崇拜" },
];

export default function DataGrid() {
  return (
    <section id="data" className="relative bg-card border-y border-line py-32">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <div className="mono text-[11px] tracking-[0.2em] uppercase text-clay">— Hard Numbers</div>
            <div className="mono text-[11px] tracking-[0.2em] uppercase text-muted mt-2">009 / 数据卡片</div>
          </div>
          <div className="md:col-span-7">
            <h2 className="h-section">
              扫描三份原稿，<br />
              <span className="serif italic text-muted font-normal">把它们压成 9 个不容回避的数字。</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {DATA.map((d, i) => (
            <div
              key={i}
              className="bg-paper p-8 md:p-10 flex flex-col justify-between min-h-[220px] hover:bg-card transition-colors duration-500 ease-brand"
            >
              <div className="mono text-[11px] tracking-[0.2em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="my-4">
                <div className="font-sans font-medium text-[44px] md:text-[60px] leading-none tracking-[-0.02em]">
                  <OdometerNumber value={d.v} decimals={d.decimals ?? 0} suffix={d.suf} />
                </div>
              </div>
              <div>
                <div className="serif text-[14px] leading-[1.55] text-ink/90">{d.label}</div>
                <div className="mono text-[10px] tracking-[0.18em] text-muted uppercase mt-2">
                  · {d.note}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="serif italic text-muted text-sm mt-10 max-w-2xl">
          数据来源：财新 / 国家统计局 / Arnett (2000) / Wikipedia · Boomerang Generation / Côté (2014)。完整引用见右下角"原始素材"抽屉。
        </p>
      </div>
    </section>
  );
}
