import { Sparkles, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-space-border py-10 mt-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #FF2D78, #BF5AF2)" }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-display text-xs font-700 tracking-widest uppercase"
                style={{
                  background: "linear-gradient(135deg, #FF2D78, #BF5AF2, #00F5FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Virna Rizza Cabaguing
              </p>
              <p className="text-white/40 text-xs font-mono mt-0.5">
                Senior Frontend Engineer
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:virnzlivara@gmail.com"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-space-border hover:border-neon-pink/50 hover:text-neon-pink transition-all duration-300 text-white/50"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:09178861296"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-space-border hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300 text-white/50"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/virnzlivara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-space-border hover:border-neon-purple/50 hover:text-neon-purple transition-all duration-300 text-white/50"
              aria-label="Portfolio"
            >
              <Github className="w-4 h-4" />
            </a>
            {/* add my linkedin profile */}
            <a
              href="https://www.linkedin.com/in/virna-cabaguing-95129844"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-space-border hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300 text-white/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-xs font-body text-center">
            © {year} Virna Rizza Cabaguing. Built with ✨ &amp; Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
