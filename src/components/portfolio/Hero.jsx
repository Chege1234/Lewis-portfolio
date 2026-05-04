import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 relative overflow-hidden bg-[#0A0A0A]">
      {/* Particle Canvas background */}
      <ParticleCanvas />

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(10,10,10,0.7) 100%)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-block text-xs font-inter font-semibold tracking-[0.18em] uppercase mb-6 px-3 py-1 rounded-full border border-[#C9A84C]/30 text-[#C9A84C]/70 bg-[#C9A84C]/5">
            Full-Stack Developer
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.25)}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-[#F5F0E8] leading-[1.08] mb-6"
        >
          Building software that{" "}
          <span className="italic font-normal text-[#C9A84C]">actually solves</span>
          <br />
          real problems.
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="font-inter text-base sm:text-lg text-[#F5F0E8]/60 max-w-xl mx-auto leading-relaxed mb-10"
        >
          I'm Lewis — a full-stack developer driven by curiosity and a deep interest in
          systems that work. I build scalable, practical software end-to-end, from
          database design to clean user interfaces.
        </motion.p>

        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-full bg-[#C9A84C] text-[#0A0A0A] text-sm font-inter font-semibold hover:bg-[#D4B56A] transition-all duration-200"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-full border border-[#C9A84C]/30 text-[#F5F0E8]/70 text-sm font-inter font-medium hover:border-[#C9A84C]/60 hover:text-[#F5F0E8] transition-all duration-200"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.8)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button onClick={() => scrollTo("about")} className="text-[#C9A84C]/40 hover:text-[#C9A84C] transition-colors duration-200">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}