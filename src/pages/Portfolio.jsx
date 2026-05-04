import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Projects from "../components/portfolio/Projects";
import ProblemSolving from "../components/portfolio/ProblemSolving";
import Skills from "../components/portfolio/Skills";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

export default function Portfolio() {
  // Apply dark mode to root
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("dark");
  }

  return (
    <div className="min-h-screen relative" style={{ background: "#0A0A0A" }}>
      {/* Grain texture overlay */}

      <div className="fixed inset-0 pointer-events-none z-[999]" style={{ opacity: 0.03 }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ProblemSolving />
      <Skills />
      <Contact />
      <Footer />


    </div>
  );
}