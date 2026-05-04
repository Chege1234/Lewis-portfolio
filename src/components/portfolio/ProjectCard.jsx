import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const projectUrl = project.live
    ? project.live.replace(/^https?:\/\//, "")
    : project.github
    ? project.github.replace(/^https?:\/\//, "")
    : "github.com/Chege1234";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0d0d0d]/90 backdrop-blur-sm hover:-translate-y-1 hover:border-[#C9A84C]/30 transition-all duration-400"
      style={{
        boxShadow: "0 0 0 0 rgba(201,168,76,0)",
      }}
      whileHover={{
        boxShadow: "0 8px 40px -8px rgba(201,168,76,0.18)",
      }}
    >
      {/* Browser frame bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#111]/80 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 bg-white/[0.05] rounded-md px-3 py-1">
          <span className="text-[10px] font-inter text-white/25 tracking-wide truncate block">
            {projectUrl}
          </span>
        </div>
      </div>

      {/* Preview image (if any) */}
      {project.previewImage && (
        <div
          className="overflow-hidden border-b border-white/[0.06]"
          style={project.fullImage ? {} : { height: "11rem" }}
        >
          <img
            src={project.previewImage}
            alt={`${project.name} preview`}
            className={`w-full transition-transform duration-500 ${
              project.fullImage
                ? "h-auto object-contain"
                : "h-full object-cover object-top group-hover:scale-105"
            }`}
          />
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title + badge */}
        <div className="flex items-start justify-between mb-4 gap-3">
          <h3 className="font-playfair text-xl font-bold text-[#F5F0E8] leading-snug">
            {project.name}
          </h3>
          {project.badge ? (
            <span className="flex-shrink-0 text-[9px] font-inter font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border border-[#C9A84C]/50 text-[#C9A84C]">
              {project.badge}
            </span>
          ) : (
            <span className="flex-shrink-0 text-[9px] font-inter font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border border-[#C9A84C]/50 text-[#C9A84C]">
              Solo
            </span>
          )}
        </div>

        {/* Problem */}
        <p className="font-inter text-xs italic text-[#C9A84C]/80 mb-3 leading-relaxed">
          <span className="not-italic font-semibold text-[#C9A84C]">Problem: </span>
          "{project.problem}"
        </p>

        {/* Solution */}
        <p className="font-inter text-sm text-[#F5F0E8]/60 leading-relaxed mb-5">
          {project.solution}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-[10px] font-inter font-medium tracking-[0.1em] uppercase rounded-full border border-white/10 text-white/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-white/[0.06]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-inter font-medium text-white/30 hover:text-[#C9A84C] transition-colors duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-inter font-medium text-white/30 hover:text-[#C9A84C] transition-colors duration-200"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Site
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}