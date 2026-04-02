"use client";

import { motion } from "framer-motion";

type Skill = { name: string; emoji?: string };
type SkillGroup = { category: string; color: string; skills: Skill[] };

const SKILLS: SkillGroup[] = [
  {
    category: "Frontend Frameworks",
    color: "#FF2D78",
    skills: [
      { name: "React.js", emoji: "⚛️" },
      { name: "Next.js", emoji: "🔺" },
      { name: "Angular", emoji: "🔴" },
      { name: "Vue.js", emoji: "💚" },
      { name: "React Native", emoji: "📱" },
      { name: "ExtJS", emoji: "🟦" },
    ],
  },
  {
    category: "Languages",
    color: "#00F5FF",
    skills: [
      { name: "TypeScript", emoji: "🔷" },
      { name: "JavaScript", emoji: "🟨" },
      { name: "Lua", emoji: "🌙" },
    ],
  },
  {
    category: "State Management",
    color: "#BF5AF2",
    skills: [
      { name: "Redux Toolkit", emoji: "🔵" },
      { name: "NgRx", emoji: "🔴" },
      { name: "RxJS", emoji: "💜" },
    ],
  },
  {
    category: "UI & Design Systems",
    color: "#FF2D78",
    skills: [
      { name: "MUI", emoji: "🎨" },
      { name: "PrimeReact", emoji: "🌟" },
      { name: "Storybook", emoji: "📖" },
      { name: "Tailwind CSS", emoji: "🌊" },
      { name: "WCAG Accessibility", emoji: "♿" },
      { name: "Pixel-perfect UI", emoji: "✨" },
    ],
  },
  {
    category: "API & Auth",
    color: "#00F5FF",
    skills: [
      { name: "REST API", emoji: "🔗" },
      { name: "GraphQL", emoji: "🟣" },
      { name: "SOAP XML", emoji: "📦" },
      { name: "SSO / OAuth", emoji: "🔐" },
      { name: "Azure AD", emoji: "☁️" },
      { name: "Okta", emoji: "🛡️" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "#BF5AF2",
    skills: [
      { name: "Azure", emoji: "☁️" },
      { name: "AWS", emoji: "🟠" },
      { name: "Azure DevOps", emoji: "🔄" },
      { name: "GitLab CI/CD", emoji: "🦊" },
      { name: "Digital Ocean", emoji: "🌊" },
    ],
  },
  {
    category: "Testing & Monitoring",
    color: "#FF2D78",
    skills: [
      { name: "Jest", emoji: "🃏" },
      { name: "Cypress", emoji: "🌲" },
      { name: "Datadog", emoji: "🐶" },
      { name: "LaunchDarkly", emoji: "🚀" },
      { name: "SonarQube", emoji: "🔍" },
    ],
  },
  {
    category: "Tools & Other",
    color: "#00F5FF",
    skills: [
      { name: "Figma", emoji: "🎨" },
      { name: "Jira", emoji: "🔵" },
      { name: "Confluence", emoji: "📚" },
      { name: "Adobe Photoshop", emoji: "🖼️" },
      { name: "Scrum / Agile", emoji: "🔄" },
      { name: "SAFe 6.0", emoji: "📋" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <p className="text-neon-cyan font-mono text-xs uppercase tracking-widest mb-2">
            // skills.json
          </p> */}
          <h2 className="section-title">Technical Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="glass-card p-5 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }}
                />
                <h3 className="font-display text-xs font-700 uppercase tracking-wider text-white/80">
                  {group.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-badge"
                    style={{
                      background: `${group.color}18`,
                      borderColor: `${group.color}50`,
                      color: group.color === "#00F5FF" ? "#67e8f9" : group.color === "#FF2D78" ? "#f472b6" : "#c084fc",
                    }}
                  >
                    {skill.emoji && (
                      <span className="text-xs">{skill.emoji}</span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 glass-card p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
            style={{ background: "linear-gradient(135deg, #FF2D78, #BF5AF2)" }}
          >
            🏆
          </div>
          <div>
            <p className="font-display text-sm font-700 text-white">
              SAFe® 6.0 Practitioner
            </p>
            <p className="text-white/50 text-xs mt-0.5 font-mono">
              Certified 2024 · Scaled Agile Framework
            </p>
          </div>
          <div
            className="sm:ml-auto px-4 py-1.5 rounded-full text-xs font-mono"
            style={{
              background: "rgba(255,45,120,0.12)",
              border: "1px solid rgba(255,45,120,0.3)",
              color: "#f472b6",
            }}
          >
            ✓ Verified
          </div>
        </motion.div>
      </div>
    </section>
  );
}
