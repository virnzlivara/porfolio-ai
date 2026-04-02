"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-space-border"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? { background: "rgba(6,6,18,0.85)" }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2 group"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #FF2D78, #BF5AF2)" }}>
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span
            className="font-display text-sm font-700 tracking-widest uppercase"
            style={{
              background: "linear-gradient(135deg, #FF2D78, #BF5AF2, #00F5FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            VRC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`relative px-4 py-2 text-xs font-body font-600 uppercase tracking-widest transition-all duration-300 rounded-full ${
                active === href.slice(1)
                  ? "text-neon-pink"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {active === href.slice(1) && (
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(255,45,120,0.1)" }}
                />
              )}
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:virnzlivara@gmail.com"
          className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
        >
          Hire Me ✨
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white transition"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-space-border backdrop-blur-xl"
          style={{ background: "rgba(6,6,18,0.97)" }}
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-body font-600 uppercase tracking-widest text-white/70 hover:text-neon-pink transition rounded-xl hover:bg-neon-pink/10"
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:virnzlivara@gmail.com"
              className="mt-2 btn-primary text-xs justify-center"
            >
              Hire Me ✨
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
