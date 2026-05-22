"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6" style={{ background: "#121212" }}>
      <div className="max-w-3xl mx-auto">
        <FadeSection>
          <span className="text-xs font-inter font-semibold tracking-[0.18em] uppercase text-[#C9A84C]/70">
            About
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mt-3 mb-10 leading-tight">
            Developer by craft,<br />
            <span className="italic font-normal text-[#C9A84C]">problem-solver by nature.</span>
          </h2>
        </FadeSection>

        <FadeSection delay={0.1}>
          <div className="space-y-5 font-inter text-base text-[#F5F0E8]/55 leading-relaxed">
            <p>
              I got into development not to build beautiful things — but to build
              <em className="text-[#F5F0E8] not-italic font-medium"> useful ones</em>. My focus
              has always been on systems: how data flows, how users interact, and how
              a well-designed backend can make everything feel effortless.
            </p>
            <p>
              I learn best by building. Every project I take on starts with a real
              problem — something that either affects people I know or a gap I notice
              in everyday life. Then I design and build the system from scratch.
            </p>
            <p>
              I care about the full picture: architecture decisions, database design,
              API contracts, and the UI that ties it all together. Not just one layer.
            </p>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}