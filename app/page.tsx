import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="scanlines">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
