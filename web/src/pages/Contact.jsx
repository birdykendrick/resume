import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { profile } from "../data/profile";

const stagger = { animate: { transition: { staggerChildren: 0.1 } } };
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function SocialLink({ href, label, icon }) {
  return (
    <motion.a
      whileHover={{ x: 4 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-gray-500 hover:text-orange-500 transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
    >
      <span className="w-9 h-9 bg-white border border-orange-100 rounded-xl flex items-center justify-center text-base group-hover:border-orange-200 group-hover:shadow-sm transition-all">
        {icon}
      </span>
      <span className="font-medium text-sm">{label}</span>
    </motion.a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  const inputClass =
    "w-full bg-white/80 border border-orange-100 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200 resize-none";

  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/60 to-rose-50/40">
        <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-black mb-2 text-gray-900">Get in Touch</h1>
            <p className="text-gray-500">Have a project in mind? Let's talk.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={stagger} initial="initial" animate="animate">
              {!sent ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <motion.div variants={item}>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Name</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                  </motion.div>
                  <motion.div variants={item}>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Email</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                  </motion.div>
                  <motion.div variants={item}>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Message</label>
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project..." className={inputClass} />
                  </motion.div>
                  <motion.button
                    variants={item}
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(249,115,22,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-gray-900 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 hover:bg-gray-700"
                  >
                    Send Message
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/80 rounded-2xl p-8 text-center border border-orange-100 shadow-lg shadow-orange-50"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                    className="mt-4 text-sm text-orange-400 hover:underline focus:outline-none"
                  >
                    Send another
                  </button>
                </motion.div>
              )}
            </motion.div>

            <motion.div variants={stagger} initial="initial" animate="animate" className="flex flex-col gap-6">
              <motion.div variants={item}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Or reach me directly</h3>
                <div className="flex flex-col gap-3">
                  <SocialLink href={`mailto:${profile.email}`} label={profile.email} icon="✉️" />
                  <SocialLink href={profile.github} label="GitHub" icon="🐙" />
                  <SocialLink href={profile.linkedin} label="LinkedIn" icon="💼" />
                  <SocialLink href={profile.twitter} label="Twitter / X" icon="🐦" />
                </div>
              </motion.div>
              <motion.div variants={item} className="bg-white/70 rounded-2xl p-5 border border-orange-100">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Response time</p>
                <p className="text-2xl font-black text-gradient">Under 24h</p>
                <p className="text-sm text-gray-500 mt-1">I'm currently open to new projects and full-time roles.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}