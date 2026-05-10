import type { Metadata } from "next";
import { JetBrains_Mono, Source_Serif_4, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import StatusBadge from "@/components/StatusBadge";
import ScrollProgress from "@/components/ScrollProgress";
import ChapterSidebar from "@/components/ChapterSidebar";
import RawSourceDrawer from "@/components/RawSourceDrawer";

// Geist 通过 geist 官方包加载，作为 Styrene 的免费替代
import { GeistSans } from "geist/font/sans";

const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["400", "500"] });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif", weight: ["400", "500", "600"] });
const notoSerifSC = Noto_Serif_SC({ subsets: ["latin"], variable: "--font-noto-serif-sc", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "奥德赛时期 · 延长的青春与漂泊一代",
  description: "一份关于 2026 年中国年轻人没有合法漂泊权的编辑式长读：从 Brooks 的 Odyssey Years 到 Arnett 的五特征，再到躺平、全职儿女与编制崇拜。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${GeistSans.variable} ${jetbrains.variable} ${sourceSerif.variable} ${notoSerifSC.variable}`}>
      <body>
        <LenisProvider>
          <CustomCursor />
          <ScrollProgress />
          <ChapterSidebar />
          <StatusBadge />
          <RawSourceDrawer />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
