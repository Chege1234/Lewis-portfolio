import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ComingSoonCard from "./ComingSoonCard";

const soloProjects = [
  {
    name: "SmartQueue System",
    problem: "University students and staff waste hours in physical queues with zero visibility or control.",
    solution: "Built a real-time digital queue management system for universities. Replaces physical lines with a ticketing system supporting three distinct role tiers — Admin, Staff, and Student — each with dedicated dashboards and live department management.",
    stack: ["React", "Node.js", "WebSockets", "MySQL", "Supabase", "Express", "REST API"],
    github: "https://github.com/Chege1234/SmartQueue",
    live: "https://unique-blue.vercel.app/",
    previewImage: "/images/smartqueue-preview.png",
  },
  {
    name: "Personal Finance Tracker",
    problem: "Most people have no visibility into where their money goes. Generic apps don't fit real spending habits or protect user data properly.",
    solution: "Built a full-stack, multi-user finance app with authentication, budget categories, transaction tracking, and per-user data isolation via Supabase Row Level Security. Also installable as a PWA for mobile use.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Express", "JWT", "REST API"],
    github: "https://github.com/Chege1234/Personal-Finance-Tracker",
    live: "https://personal-fin-track.vercel.app/",
    previewImage: "/images/finance-tracker-preview.png",
    fullImage: true,
  },
];

const skinwellProject = {
  name: "SkinWell Skincare",
  problem: "A skincare brand had products but no credible digital presence to sell them and earn customer trust.",
  solution: "Designed and built a full skincare e-business website — product showcase, brand identity, and customer-facing storefront. This project demonstrates the ability to think beyond code — understanding business goals, branding, and customer experience.",
  stack: ["Web Design", "E-Commerce", "UI/UX", "Weebly"],
  live: "https://skinwell-skincare.weeblysite.com/",
  badge: "Live · E-Commerce",
};

const collabProjects = [
  {
    name: "Campus Market",
    problem: "Students lack a trusted, campus-specific platform for peer-to-peer commerce — falling back on generic social media groups with no structure.",
    solution: "A dedicated campus marketplace with product listings, search, messaging, and user verification — built specifically for the student ecosystem. Built as a 5-member team collaboration.",
    stack: ["React", "Node.js", "MySQL", "PHP", "REST API", "Tailwind CSS"],
    github: "https://github.com/Carlm832/CampusMarket",
    badge: "5-Member Team",
  },
];

function SectionLabel({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>
          <span className="text-xs font-inter font-semibold tracking-[0.18em] uppercase text-[#C9A84C]/70">
            Portfolio
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mt-3 mb-4 leading-tight">
            Problems Solved.
          </h2>
          <p className="font-inter text-base text-[#F5F0E8]/50 mb-16 max-w-lg">
            Every project here started with a real problem. Here's what I built to solve it.
          </p>
        </SectionLabel>

        {/* Solo Projects */}
        <div className="mb-16">
          <p className="text-xs font-inter font-semibold tracking-[0.15em] uppercase text-[#C9A84C]/50 mb-6 pb-3 border-b border-white/[0.07]">
            Solo Projects
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {soloProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Solo — Design & E-Commerce */}
        <div className="mb-16">
          <p className="text-xs font-inter font-semibold tracking-[0.15em] uppercase text-[#C9A84C]/50 mb-6 pb-3 border-b border-white/[0.07]">
            Design &amp; E-Commerce
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard project={skinwellProject} index={0} />
          </div>
        </div>

        {/* Collaboration */}
        <div className="mb-16">
          <p className="text-xs font-inter font-semibold tracking-[0.15em] uppercase text-[#C9A84C]/50 mb-6 pb-3 border-b border-white/[0.07]">
            Collaboration
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {collabProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div>
          <p className="text-xs font-inter font-semibold tracking-[0.15em] uppercase text-[#C9A84C]/50 mb-6 pb-3 border-b border-white/[0.07]">
            Coming Soon
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <ComingSoonCard />
            <ComingSoonCard />
            <ComingSoonCard />
          </div>
        </div>
      </div>
    </section>
  );
}