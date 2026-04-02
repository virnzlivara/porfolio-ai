"use client";

import { motion } from "framer-motion";

type Job = {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
  tools?: string;
  badge?: string;
};

const JOBS: Job[] = [
  {
    company: "Security Bank Corporation PH",
    role: "Software Frontend Web and Mobile Engineer",
    period: "January 2024 – Present",
    badge: "Current ✨",
    points: [
      "Lead development of retail banking web and mobile apps using NextJS, React Native, and TypeScript.",
      "Built Backend-for-Frontend (BFF) solutions using NextJS API routes.",
      "Integrated REST & GraphQL APIs and marketing SDKs (Exponea).",
      "Improved performance through re-render optimization and refactoring legacy code.",
      "Standardized UI with MUI and strengthened TypeScript architecture.",
      "Implemented unit testing (Jest), feature flagging (LaunchDarkly), and production monitoring (Datadog).",
      "Led code reviews, mentored developers, and resolved production incidents.",
    ],
  },
  {
    company: "Accenture Philippines Inc",
    role: "Technical Architecture Associate Manager",
    period: "June 2021 – December 2023",
    points: [
      "Delivered enterprise applications across telecommunications, insurance, manufacturing, and booking platforms.",
      "Developed web apps using ReactJS, Angular (NgRx), VueJS, and micro-frontend architecture.",
      "Built cross-platform mobile applications using Kony Platform (iOS, Android, BlackBerry).",
      "Implemented booking features (maps, payments, autocomplete), dynamic forms, and analytics dashboards.",
      "Integrated REST and SOAP APIs, including Genesys integrations.",
      "Created POCs, High-Level Designs, and led offshore team collaboration.",
    ],
  },
  {
    company: "Deltek Systems LTD",
    role: "Senior Frontend Engineer",
    period: "May 2015 – June 2021",
    points: [
      "Maintained ERP mobile applications (Android, iOS, Windows Phone) using ExtJS.",
      "Built dynamic, data-driven UI modules and integrated REST APIs.",
      "Implemented SSO, OAuth, Azure AD, and Okta authentication with multi-tenancy support.",
      "Delivered internationalization (i18n) features for global clients.",
    ],
  },
  {
    company: "Accenture Philippines Inc (Earlier Tenure)",
    role: "Senior Software Engineer",
    period: "November 2011 – May 2015",
    points: [
      "Developed cross-platform mobile applications using Kony Platform (iOS, Android, BlackBerry).",
      "Implemented reservation and booking features (autocomplete, maps, payments).",
      "Integrated SOAP XML services.",
      "Created Proof of Concepts (POCs) and High-Level Design documents.",
      "Provided technical risk assessments and milestone reporting.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <p className="text-neon-purple font-mono text-xs uppercase tracking-widest mb-2">
            // experience.ts
          </p> */}
          <h2 className="section-title">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, #FF2D78, #BF5AF2 50%, transparent)",
            }}
          />

          <div className="space-y-10">
            {JOBS.map((job, i) => (
              <motion.div
                key={job.company + job.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2 sm:left-4 top-4 w-4 h-4 rounded-full flex-shrink-0 -translate-x-1/2"
                  style={{
                    background: "linear-gradient(135deg, #FF2D78, #BF5AF2)",
                    boxShadow: "0 0 12px rgba(255,45,120,0.6)",
                    border: "2px solid #060612",
                  }}
                />

                {/* Card */}
                <div className="glass-card p-5 sm:p-6 rounded-2xl hover:border-neon-purple/40 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-700 text-white">
                        {job.role}
                      </h3>
                      <p
                        className="font-mono text-xs mt-0.5"
                        style={{
                          background:
                            "linear-gradient(135deg, #FF2D78, #BF5AF2)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(191,90,242,0.1)",
                          border: "1px solid rgba(191,90,242,0.25)",
                          color: "#c084fc",
                        }}
                      >
                        {job.period}
                      </span>
                      {job.badge && (
                        <span
                          className="text-xs font-mono px-3 py-1 rounded-full"
                          style={{
                            background: "rgba(255,45,120,0.12)",
                            border: "1px solid rgba(255,45,120,0.3)",
                            color: "#f472b6",
                          }}
                        >
                          {job.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-1.5 mt-3">
                    {job.points.map((pt, pi) => (
                      <li
                        key={pi}
                        className="flex items-start gap-2.5 text-white/60 text-sm font-body leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                          style={{
                            background: "linear-gradient(135deg, #FF2D78, #BF5AF2)",
                          }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
