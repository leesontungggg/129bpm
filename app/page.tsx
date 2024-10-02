import Artists from "@/components/artists";
import Hero from "@/components/hero";
import Trailer from "@/components/trailer";
import Timer from "@/components/timer";
import Stories from "@/components/stories";
import Ticket from "@/components/ticket";
import Seatmap from "@/components/seatmap";
import Partners from "@/components/partners";
import Merchandise from "@/components/merchandise";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <div className="w-screen min-h-screen h-fit">
      <Hero />
      <Timer />
      <Trailer />
      <Stories />
      <Artists />
      <Ticket />
      <Seatmap />
      <Merchandise />
      <Partners />
      <FAQ />
    </div>
  );
}
