import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Zap,
  Cpu,
  Layers,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Activity,
  Globe,
  Sparkles,
} from "lucide-react";

/* ================= THEMES ================= */

const trinityData = [
  {
    title: "Tech Brahma",
    subtitle: "The Creator",
    desc: "Architecting AI-native digital infrastructure from absolute zero.",
    color: "amber",
    gradient: "from-amber-50 to-orange-50",
    border: "border-amber-100",
    text: "text-amber-700",
  },
  {
    title: "Tech Vishnu",
    subtitle: "The Re-Engineer",
    desc: "Preserving value while injecting intelligence into existing systems.",
    color: "cyan",
    gradient: "from-cyan-50 to-blue-50",
    border: "border-cyan-100",
    text: "text-cyan-700",
  },
  {
    title: "Tech Mahesh",
    subtitle: "The Transformer",
    desc: "Dissolving legacy debt to build modern, future-ready platforms.",
    color: "purple",
    gradient: "from-purple-50 to-indigo-50",
    border: "border-purple-100",
    text: "text-purple-700",
  },
];

/* ================= ANIMATIONS ================= */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <div className="bg-[#FAFAFA] text-slate-900 min-h-screen selection:bg-black selection:text-white">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-50/50 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-50/50 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-10">
        {/* ================= HERO ================= */}
        <motion.header
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
  className="
    max-w-5xl
    mx-auto
    text-center
    flex
    flex-col
    items-center
    mb-28 md:mb-36
  "
>

  {/* Badge */}
  <div className="
    inline-flex items-center gap-3
    px-4 py-1.5
    rounded-full
    bg-gradient-to-b from-white to-slate-50
    border border-slate-200
    shadow-sm
    mb-8
  ">

    <Activity size={14} className="text-slate-500" />

    <span className="
      text-[11px]
      font-semibold
      tracking-[0.18em]
      uppercase
      text-slate-600
    ">
      Platform Origins
    </span>

  </div>


  {/* Heading */}
  <h1 className="
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
    font-semibold
    tracking-tight
    leading-[1.05]
    text-slate-900
    mb-8
  ">

    The Intelligence  Behind Evolution<br />

    

  </h1>


  {/* Subtext */}
  <p className="
    text-base
    sm:text-lg
    md:text-xl
    lg:text-2xl
    text-slate-500
    leading-relaxed
    max-w-2xl
    font-medium
  ">

    Tech Brahmand is a neural infrastructure platform engineered to architect,
    sustain, and transform business technology with precision, scalability,
    and intelligent evolution.

  </p>


  {/* Divider */}
  <div className="
    flex
    items-center
    justify-center
    gap-4
    mt-10
  ">

    <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

    <span className="
      text-xs
      uppercase
      tracking-[0.2em]
      text-slate-400
      font-semibold
    ">
      Enterprise AI Infrastructure
    </span>

    <div className="h-px w-16 bg-gradient-to-l from-transparent via-slate-300 to-transparent" />

  </div>

</motion.header>
        {/* ================= WHO / WHY BENTO ================= */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-6 mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100">
                <Users size={20} className="text-slate-900" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                We are an AI-first engineering house dedicated to bridging the
                gap between high-level operations and technological execution.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Startups",
                "Inefficient Systems",
                "Legacy Infrastructure",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-600 border border-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                <Target size={20} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Why We Exist</h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                Modern businesses fail not because of ideas, but because their
                digital nervous system cannot keep up with their growth. We provide
                the system that adapts.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Globe size={240} />
            </div>
          </motion.div>
        </motion.section>

        {/* ================= TRINITY GRID ================= */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-200 flex-1" />
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              The Trinity Methodology
            </h2>
            <div className="h-px bg-slate-200 flex-1" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trinityData.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`p-8 rounded-[2rem] border ${item.border} bg-gradient-to-b ${item.gradient} transition-all duration-300`}
              >
                <span
                  className={`text-[10px] font-black uppercase tracking-widest ${item.text} mb-4 block`}
                >
                  Phase 0{i + 1}
                </span>
                <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                  {item.subtitle}
                </p>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= INDUSTRIES & GUARDRAILS ================= */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Layers className="text-slate-400" size={20} />
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">
                Industry Focus
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Manufacturing",
                "Pharma",
                "FinTech",
                "Logistics",
                "EdTech",
                "Research",
              ].map((ind) => (
                <div
                  key={ind}
                  className="px-6 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold shadow-sm hover:shadow-md transition-shadow"
                >
                  {ind}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="text-slate-400" size={20} />
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">
                The Guardrails
              </h2>
            </div>
            {[
              "Zero-Template Engineering",
              "Minimal Disruption Deployments",
              "Infrastructure as Evolution",
            ].map((guard) => (
              <div
                key={guard}
                className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-700"
              >
                <CheckCircle2 size={18} className="text-green-500" />
                {guard}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================= CTA ================= */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl shadow-slate-200"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <Sparkles size={40} className="mx-auto mb-8 text-blue-400" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Ready to evolve?
            </h2>
            <p className="text-slate-400 text-lg mb-10 font-medium">
              Join the new generation of intelligent enterprises. Deploy your
              AI-native infrastructure today.
            </p>
            <button className="group bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all flex items-center gap-3 mx-auto shadow-xl">
              Initiate Deployment
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]" />
        </motion.section>

        {/* FOOTER */}
        <footer className="mt-32 text-center">
          <div className="h-px bg-slate-200 w-full mb-12" />
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
            Tech Brahmand • Neural Infrastructure Platform © 2026
          </p>
        </footer>
      </div>
    </div>
  );
}