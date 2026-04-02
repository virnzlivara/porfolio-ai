"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  company: string;
  period: string;
  emoji: string;
  description: string;
  points: string[];
  tools: string;
  type: "freelance" | "personal";
};

const PROJECTS: Project[] = [
  {
    title: "QMS System – IT Project Management",
    company: "Undisclosed Client",
    period: "June – August 2024",
    emoji: "🏗️",
    type: "freelance",
    description: "Managed a full development team to build a quality management application.",
    points: [
      "Managed a team of developers and quality engineers to build a Quality Management application.",
      "Prepared deployment of servers and code for web development.",
      "Reported to CEO and Project Stakeholders regarding project progress.",
    ],
    tools: "NextJS, NodeJS, Droplets, Space, Sequelize, Digital Ocean, Trello, Jira, Gitlab, CI/CD",
  },
  {
    title: "SPEEDREGALO – Web & Mobile Frontend",
    company: "SpeedRegalo",
    period: "February – June 2024",
    emoji: "🎁",
    type: "freelance",
    description: "E-commerce platform built for gifting, web and mobile.",
    points: [
      "Managed a team of developers and QA engineers to build an e-commerce application.",
      "Wrote code for web and mobile using NextJS and Expo (React Native).",
      "Leveraged dynamic routing and easy deployment features.",
      "Prepared deployment of servers and code for web and mobile.",
    ],
    tools: "NextJS, NodeJS, Droplets, Space, Sequelize, MySQL, Digital Ocean, Expo React Native, Jira, Gitlab, CI/CD",
  },
  // {
  //   title: "XPPlus – E-commerce Platform",
  //   company: "XPPlus",
  //   period: "January 2025",
  //   emoji: "🛍️",
  //   type: "freelance",
  //   description: "Full-featured e-commerce application with web and mobile apps.",
  //   points: [
  //     "Managed team of developers and QA engineers for an e-commerce build.",
  //     "Developed web and mobile using NextJS and Expo React Native.",
  //     "Reported project status to CEO and stakeholders.",
  //   ],
  //   tools: "NextJS, NodeJS, Expo ReactNative, MySQL, Digital Ocean, Gitlab, CI/CD",
  // },
  {
    title: "XPPlus - QR Code Ayuda System – PWA",
    company: "Government / LGU",
    period: "Individual Contributor",
    emoji: "📱",
    type: "freelance",
    description: "Progressive Web App to scan QR codes and auto-email constituents for government benefit distribution.",
    points: [
      "Created a PWA application that scans QR codes and emails constituents automatically.",
      "Automated the system for sending ayuda (government aid) to their constituents.",
    ],
    tools: "NextJS, PHP, AWS LightSail, S3 Bucket, SES",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <p className="text-neon-pink font-mono text-xs uppercase tracking-widest mb-2">
            // projects[]
          </p> */}
          <h2 className="section-title">Projects</h2>
          <p className="text-white/40 text-sm font-body mt-3 max-w-xl mx-auto">
            Freelance & individual projects beyond full-time employment
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col gap-4 hover:scale-[1.01] transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: "rgba(191,90,242,0.12)",
                    border: "1px solid rgba(191,90,242,0.3)",
                  }}
                >
                  {project.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-sm font-700 text-white leading-snug">
                      {project.title}
                    </h3>
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full flex-shrink-0"
                      style={
                        project.type === "freelance"
                          ? {
                              background: "rgba(255,45,120,0.12)",
                              border: "1px solid rgba(255,45,120,0.3)",
                              color: "#f472b6",
                            }
                          : {
                              background: "rgba(0,245,255,0.1)",
                              border: "1px solid rgba(0,245,255,0.25)",
                              color: "#67e8f9",
                            }
                      }
                    >
                      {project.type === "freelance" ? "Freelance" : "Personal"}
                    </span>
                  </div>
                  <p
                    className="font-mono text-xs mt-0.5"
                    style={{
                      background: "linear-gradient(135deg, #FF2D78, #BF5AF2)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {project.company} · {project.period}
                  </p>
                </div>
              </div>

              <p className="text-white/55 text-sm font-body leading-relaxed">
                {project.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-1.5">
                {project.points.map((pt, pi) => (
                  <li
                    key={pi}
                    className="flex items-start gap-2 text-white/50 text-xs font-body leading-relaxed"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: "#BF5AF2" }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div
                className="mt-auto pt-3 border-t"
                style={{ borderColor: "rgba(46,42,110,0.5)" }}
              >
                <p className="text-white/30 text-xs font-mono">
                  <span className="text-neon-cyan">🔧 Tools:</span>{" "}
                  {project.tools}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current portfolio link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://virna-portfolio-ix8a0zg3c-virnzlivaras-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Previous Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
