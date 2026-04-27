import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Tech } from "@/components/sections/Tech";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
