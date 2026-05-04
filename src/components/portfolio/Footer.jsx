export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10" style={{ background: "#121212" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-playfair text-sm font-normal text-[#F5F0E8]/40">
          Lewis Chege — Full-Stack Developer
        </span>
        <span className="font-inter text-xs text-[#F5F0E8]/25">
          © {new Date().getFullYear()} — Built with intention.
        </span>
      </div>
    </footer>
  );
}