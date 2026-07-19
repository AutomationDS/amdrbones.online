import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Labs from "@/components/labs/Labs";
import Architecture from "@/components/architecture/Architecture";
import Journal from "@/components/journal/Journal";
import About from "@/components/about/About";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Labs />
      <Architecture />
      <Journal />
      <About />
      <Contact />
     <Footer />
    </main>
  );
}