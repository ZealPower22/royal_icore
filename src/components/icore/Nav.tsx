import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#program", label: "Program" },
  { href: "#faculty", label: "Faculty" },
  { href: "#research", label: "Research" },
  { href: "#venue", label: "Venue" },
  { href: "#pricing", label: "Registration" },
  { href: "#jaipur", label: "Jaipur" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-[var(--gold)]/60 flex items-center justify-center text-[var(--gold)] font-display text-sm group-hover:bg-[var(--gold)]/10 transition">
            ✦
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm tracking-[0.3em] text-[var(--ivory)]">I.C.O.R.E</div>
            <div className="text-[10px] tracking-[0.3em] text-[var(--gold)]/80">JAIPUR · 2026</div>
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.25em] text-[var(--ivory)]/80 hover:text-[var(--gold)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#pricing"
          className="text-xs uppercase tracking-[0.25em] px-5 py-3 border border-[var(--gold)]/60 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--burgundy-deep)] transition-all duration-300"
        >
          Register →
        </a>
      </div>
    </nav>
  );
}