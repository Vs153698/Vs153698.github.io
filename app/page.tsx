import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Stack } from "@/components/Stack";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="noise">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
