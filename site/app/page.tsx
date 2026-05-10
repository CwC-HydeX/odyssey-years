import Hero from "@/components/sections/Hero";
import QuoteWall from "@/components/sections/QuoteWall";
import DataGrid from "@/components/sections/DataGrid";
import Prologue from "@/components/sections/Prologue";
import ChapterOne from "@/components/sections/ChapterOne";
import LabelGenealogy from "@/components/sections/LabelGenealogy";
import ChinaDifference from "@/components/sections/ChinaDifference";
import XiaoLiScene from "@/components/sections/XiaoLiScene";
import Responses from "@/components/sections/Responses";
import MarqueeFooter from "@/components/sections/MarqueeFooter";
import Loom from "@/components/Loom";

export default function Page() {
  return (
    <main className="relative">
      <Loom />
      <Hero />
      <QuoteWall />
      <DataGrid />
      <Prologue />
      <ChapterOne />
      <LabelGenealogy />
      <ChinaDifference />
      <XiaoLiScene />
      <Responses />
      <MarqueeFooter />
    </main>
  );
}
