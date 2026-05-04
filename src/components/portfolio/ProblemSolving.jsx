import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand the actual problem",
    body: "Before writing a single line of code, I ask: what breaks without this? Who does it affect and how? A solution built on a misunderstood problem is just noise.",
  },
  {
    number: "02",
    title: "Design the system, not just the feature",
    body: "I think in terms of data flow, entities, and relationships first. A system designed well at the architecture level is easier to build, debug, and scale.",
  },
  {
    number: "03",
    title: "Build lean, iterate fast",
    body: "Start with the smallest version that actually works. Get it in front of real conditions quickly, then improve based on what breaks or what users need more of.",
  },
  {
    number: "04",
    title: "Refine with intent, not assumption",
    body: "Every bug is a gap in understanding. I approach debugging systematically — reproduce it, isolate it, understand why it happened, then fix it properly.",
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative p-7 border border-white/[0.07] rounded-2xl hover:border-[#C9A84C]/25 transition-all duration-300"
      style={{ background: "#0d0d0d" }}
    >
      <span className="font-playfair text-4xl font-bold text-white/[0.04] group-hover:text-[#C9A84C]/10 transition-colors duration-300 absolute top-6 right-7">
        {step.number}
      </span>
      <h3 className="font-playfair text-xl font-bold text-[#F5F0E8] mb-3 leading-snug pr-10">
        {step.title}
      </h3>
      <p className="font-inter text-sm text-[#F5F0E8]/50 leading-relaxed">
        {step.body}
      </p>
    </motion.div>
  );
}

export default function ProblemSolving() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="approach" className="py-28 px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="text-xs font-inter font-semibold tracking-[0.18em] uppercase text-[#C9A84C]/70">
            Thinking Process
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mt-3 mb-4 leading-tight">
            How I approach<br />
            <span className="italic font-normal text-[#C9A84C]">complex problems.</span>
          </h2>
          <p className="font-inter text-base text-[#F5F0E8]/50 mb-14 max-w-lg">
            The way I think about problems matters more than any specific tool or language.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}