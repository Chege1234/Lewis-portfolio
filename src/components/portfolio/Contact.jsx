import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "lewiskariuki04@gmail.com",
    href: "mailto:lewiskariuki04@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Chege1234",
    href: "https://github.com/Chege1234",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/lewischege/",
  },
];

function ContactLink({ link, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = link.icon;
  return (
    <motion.a
      ref={ref}
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col items-center gap-3 p-7 border border-white/[0.07] rounded-2xl hover:border-[#C9A84C]/30 transition-all duration-300 text-center"
      style={{ background: "#0d0d0d" }}
    >
      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C9A84C]/40 group-hover:bg-[#C9A84C]/10 transition-all duration-300">
        <Icon className="w-4 h-4 text-[#F5F0E8]/30 group-hover:text-[#C9A84C] transition-colors duration-300" />
      </div>
      <div>
        <p className="text-xs font-inter font-semibold tracking-[0.12em] uppercase text-[#C9A84C]/50 mb-0.5">
          {link.label}
        </p>
        <p className="text-sm font-inter text-[#F5F0E8]/50 group-hover:text-[#F5F0E8] group-hover:underline underline-offset-2 flex items-center gap-1 justify-center transition-colors duration-200">
          {link.value}
          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </p>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-28 px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-inter font-semibold tracking-[0.18em] uppercase text-[#C9A84C]/70">
            Contact
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#F5F0E8] mt-3 mb-5 leading-tight">
            Let's build something<br />
            <span className="italic font-normal text-[#C9A84C]">worth building.</span>
          </h2>
          <p className="font-inter text-base text-[#F5F0E8]/50 max-w-md mx-auto">
            Open to opportunities, collaborations, and serious projects. If you have a
            real problem that needs a real solution — reach out.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <ContactLink key={link.label} link={link} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}