import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
