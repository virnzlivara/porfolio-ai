"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Briefcase, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <p className="text-neon-pink font-mono text-xs uppercase tracking-widest mb-2">
            // about_me.ts
          </p> */}
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Avatar / Illustration card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-full opacity-30 animate-pulse-slow pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, #FF2D78, #BF5AF2, #00F5FF, #FF2D78)",
                  filter: "blur(20px)",
                }}
              />
              {/* Avatar circle */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(26,23,64,0.9), rgba(13,11,43,0.95))",
                  border: "2px solid rgba(191,90,242,0.4)",
                  boxShadow: "0 0 40px rgba(191,90,242,0.2)",
                }}
              >
                <div className="text-center select-none">
                  {/* <div className="text-6xl mb-2">👩‍💻</div> */}
                  <Image
                    src="/coder.png"
                    alt="Virna Cabaguing"
                    width={128}
                    height={128}
                    className="rounded-full"
                  />
                  <p
                    className="font-display text-xs font-700 tracking-widest uppercase"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF2D78, #BF5AF2)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    VRC
                  </p>
                </div>
              </div>

              {/* Floating cute tags */}
              {[
                { label: "React ⚛️", pos: "-top-2 -right-4" },
                { label: "TypeScript 💙", pos: "top-3 left-2" },
                { label: "Mobile Dev 📱", pos: "top-6 -left-4" },
                {label: "React Native 🌟", pos: "bottom-6 right-4" },
                { label: "Next.js 🚀", pos: "bottom-4 -left-6" },
                { label: "10+ yrs ✨", pos: "-bottom-2 right-2" },
              ].map(({ label, pos }) => (
                <div
                  key={label}
                  className={`absolute ${pos} px-3 py-1.5 rounded-full text-xs font-mono font-600 animate-float`}
                  style={{
                    background: "rgba(13,11,43,0.9)",
                    border: "1px solid rgba(191,90,242,0.4)",
                    color: "#C084FC",
                    animationDelay: `${Math.random() * 2}s`,
                    boxShadow: "0 0 12px rgba(191,90,242,0.2)",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-white/70 leading-relaxed text-base font-body">
              Hi! I&apos;m{" "}
              <span className="text-neon-pink font-700">Virna Cabaguing</span> 🌸 — a
              passionate{" "}
              <span className="text-neon-cyan font-600">
                Senior Frontend Engineer
              </span>{" "}
              based in Cavite, Philippines. I bring over{" "}
              <span className="text-neon-purple font-600">10 years</span> of
              crafting pixel-perfect, high-performance web & mobile experiences
              across banking, telco, ERP, insurance, and enterprise platforms.
            </p>

            <p className="text-white/60 leading-relaxed text-sm font-body">
              I&apos;m currently shaping retail banking apps at{" "}
              <span className="text-white/80 font-600">
                Security Bank Corporation PH
              </span>
              , leveraging Next.js, React Native, and TypeScript to build
              delightful, scalable products. I love mentoring engineers, leading
              code reviews, and pushing for clean, maintainable architecture. ✨
            </p>

            {/* Info chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: MapPin, label: "Bacoor, Cavite, PH", color: "#FF2D78" },
                { icon: Mail, label: "virnzlivara@gmail.com", color: "#00F5FF" },
                { icon: Phone, label: "09178861296", color: "#BF5AF2" },
                { icon: Briefcase, label: "Open to Remote / Hybrid", color: "#FF2D78" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(26,23,64,0.6)",
                    border: "1px solid rgba(46,42,110,0.6)",
                  }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                  <span className="text-white/70 text-sm font-body truncate">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Education */}
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-xl"
              style={{
                background: "rgba(26,23,64,0.6)",
                border: "1px solid rgba(46,42,110,0.6)",
              }}
            >
              <span className="text-lg mt-0.5">🎓</span>
              <div>
                <p className="text-white/80 text-sm font-600">
                  B.S. Computer Science
                </p>
                <p className="text-white/40 text-xs mt-0.5">
                  Adamson University · 2007–2011
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
