"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Failed to send message.");
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <p className="text-neon-pink font-mono text-xs uppercase tracking-widest mb-2">
            // contact_me()
          </p> */}
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-white/40 text-sm font-body mt-3 max-w-lg mx-auto">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat! ✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: "Email", value: "virnzlivara@gmail.com", href: "mailto:virnzlivara@gmail.com", color: "#FF2D78" },
              { icon: Phone, label: "Phone", value: "09178861296", href: "tel:09178861296", color: "#00F5FF" },
              { icon: MapPin, label: "Location", value: "Cavite, Philippines", href: null, color: "#BF5AF2" },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <div
                key={label}
                className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:scale-[1.02] transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}40`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-white/80 text-sm font-body hover:text-white transition"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white/80 text-sm font-body">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Education + Cert */}
            <div className="glass-card p-5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎓</span>
                <div>
                  <p className="text-white/80 text-sm font-600">B.S. Computer Science</p>
                  <p className="text-white/40 text-xs font-mono">Adamson University · 2007–2011</p>
                </div>
              </div>
              <div
                className="border-t"
                style={{ borderColor: "rgba(46,42,110,0.5)" }}
              />
              <div className="flex items-center gap-3">
                <span className="text-xl">🏆</span>
                <div>
                  <p className="text-white/80 text-sm font-600">SAFe® 6.0 Practitioner</p>
                  <p className="text-white/40 text-xs font-mono">Certified 2024</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center gap-4 h-full text-center">
                <CheckCircle2 className="w-12 h-12 text-neon-cyan" />
                <h3 className="font-display text-lg font-700 text-white">
                  Message Sent! 🎉
                </h3>
                <p className="text-white/50 text-sm font-body">
                  Thanks for reaching out! I&apos;ll get back to you soon. ✨
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="btn-outline text-xs mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card p-6 sm:p-8 rounded-2xl space-y-5"
              >
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Virna ✨" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "hello@example.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2"
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      value={form[id as "name" | "email"]}
                      onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm font-body text-white placeholder-white/25 outline-none transition-all duration-300"
                      style={{
                        background: "rgba(13,11,43,0.8)",
                        border: "1px solid rgba(46,42,110,0.7)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(191,90,242,0.5)";
                        e.target.style.boxShadow = "0 0 15px rgba(191,90,242,0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(46,42,110,0.7)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Hi Virna, I'd love to work with you! 🌸"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm font-body text-white placeholder-white/25 outline-none transition-all duration-300 resize-none"
                    style={{
                      background: "rgba(13,11,43,0.8)",
                      border: "1px solid rgba(46,42,110,0.7)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(191,90,242,0.5)";
                      e.target.style.boxShadow = "0 0 15px rgba(191,90,242,0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(46,42,110,0.7)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message ✨
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
