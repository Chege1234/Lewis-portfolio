import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    icon: "◈",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    icon: "◎",
    skills: ["Node.js", "Express", "Python", "REST APIs", "JWT / OAuth"],
  },
  {
    label: "Database",
    icon: "◐",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    label: "Tools",
    icon: "◇",
    skills: ["Git & GitHub", "Postman", "VS Code", "Figma", "Linux CLI"],
  },
];

function SkillCard({ group, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/25 transition-all duration-300"
      style={{ background: "#1c1c1c" }}
    >
      <div className="flex items-center gap-2 mb-5">
        <span className="text-lg text-[#C9A84C]/50">{group.icon}</span>
        <p className="text-xs font-inter font-semibold tracking-[0.12em] uppercase text-[#C9A84C]/60">
          {group.label}
        </p>
      </div>
      <div className="space-y-2">
        {group.skills.map((skill) => (
          <div key={skill} className="flex items-center gap-2 text-sm font-inter text-[#F5F0E8]/55">
            <div className="w-1 h-1 rounded-full bg-[#C9A84C]/30 flex-shrink-0" />
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-28 px-6" style={{ background: "#121212" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <span className="text-xs font-inter font-semibold tracking-[0.18em] uppercase text-[#C9A84C]/70">
            Skills
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mt-3 mb-14 leading-tight">
            Tools of the trade.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}