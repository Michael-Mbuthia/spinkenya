import Hero from "@/components/Hero";
import Tournaments from "./tournaments/page";
import Merchandise from "./merchandise/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Tournaments />
      <Merchandise />
    </main>

  );
}