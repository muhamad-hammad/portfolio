import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { hero } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="section-container py-6 sm:py-8 flex flex-col gap-2 sm:flex-row sm:justify-between text-xs sm:text-sm text-muted font-mono">
          <span>© {new Date().getFullYear()} {hero.name}</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </footer>
    </>
  );
}
