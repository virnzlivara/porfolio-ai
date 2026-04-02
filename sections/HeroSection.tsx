"use client";

import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown, Star } from "lucide-react";

const FLOATING_ICONS = ["⚛️", "🚀", "💜", "✨", "🌸", "💻", "🎀", "🌙"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 z-10 overflow-hidden"
    >
      {/* Floating cute emoji orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {FLOATING_ICONS.map((icon, i) => (
          <span
            key={i}
            className="absolute text-xl select-none opacity-20"
            style={{
              left: `${8 + (i * 12) % 88}%`,
              top: `${10 + (i * 17) % 75}%`,
              animation: `float ${5 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Glow blob */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(191,90,242,0.15) 0%, rgba(255,45,120,0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        className="relative text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Cute badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-body font-600 tracking-widest uppercase mb-6"
          style={{
            background: "rgba(191,90,242,0.12)",
            border: "1px solid rgba(191,90,242,0.35)",
            color: "#C084FC",
          }}
        >
          <Star className="w-3 h-3 fill-current" />
          Available for opportunities
          <Star className="w-3 h-3 fill-current" />
        </motion.div>

        {/* Name */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-900 mb-4 leading-tight">
          <span
            style={{
              background: "linear-gradient(135deg, #FF2D78, #BF5AF2, #00F5FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Virna
          </span>
          <br />
          <span className="text-white">Cabaguing</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="font-mono text-base sm:text-lg md:text-xl text-white/70">
            {"< "}
            <TypeAnimation
              sequence={[
                "Senior Frontend Engineer",
                2000,
                "React / Next.js Expert",
                2000,
                "TypeScript Specialist",
                2000,
                "10+ Years Experience",
                2000,
                "UI/UX Enthusiast ✨",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: "#00F5FF" }}
            />
            {" />"}
          </span>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8 font-body"
        >
          Senior Front-End Engineer with{" "}
          <span className="text-neon-pink font-600">10+ years</span> of
          experience building scalable web & mobile apps across{" "}
          <span className="text-neon-cyan font-600">banking, telco, ERP</span>,
          insurance & enterprise platforms. Expert in React, Next.js, Angular,
          Vue &amp; TypeScript. 🌸
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary">
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>
          <a
            href="../resume.pdf"
            download="Virna_Rizza_Cabaguing_CV.pdf"
            className="btn-primary"
            style={{ background: "linear-gradient(135deg, #00F5FF, #BF5AF2)", boxShadow: "0 0 20px rgba(0,245,255,0.35)" }}
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
          <a href="#experience" className="btn-outline">
            View My Work ✨
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { val: "10+", label: "Years Experience" },
            { val: "6+", label: "Companies" },
            { val: "React·Next·Angular", label: "Core Stack" },
            { val: "PH 🇵🇭", label: "Based In Cavite" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <p
                className="font-display text-xl sm:text-2xl font-700"
                style={{
                  background: "linear-gradient(135deg, #FF2D78, #BF5AF2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {val}
              </p>
              <p className="text-white/40 text-xs font-body uppercase tracking-widest mt-1">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/30 text-xs font-body tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-white/30" />
      </motion.div>
    </section>
  );
}
