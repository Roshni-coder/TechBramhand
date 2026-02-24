import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Layers,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Activity,
  Globe,
  Sparkles,
} from "lucide-react";

/* ================= DATA ================= */

const trinityData = [
  {
    title: "Tech Brahma",
    subtitle: "The Creator",
    desc: "Architecting AI-native digital infrastructure from absolute zero.",
    gradient: "from-amber-50 to-orange-50",
    border: "border-amber-100",
    text: "text-amber-700",
  },
  {
    title: "Tech Vishnu",
    subtitle: "The Re-Engineer",
    desc: "Preserving value while injecting intelligence into existing systems.",
    gradient: "from-cyan-50 to-blue-50",
    border: "border-cyan-100",
    text: "text-cyan-700",
  },
  {
    title: "Tech Mahesh",
    subtitle: "The Transformer",
    desc: "Dissolving legacy debt to build modern platforms.",
    gradient: "from-purple-50 to-indigo-50",
    border: "border-purple-100",
    text: "text-purple-700",
  },
];

export default function About() {
  return (
    <div className="bg-[#FAFAFA] text-slate-900 min-h-screen overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-20%] w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-blue-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-20%] w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-purple-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-22 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">

        {/* ================= HERO ================= */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-24 lg:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Activity size={14} className="text-slate-500" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-slate-600">
              Platform Origins
            </span>
          </div>

          <h1 className="font-semibold tracking-tight leading-tight mb-6 text-[clamp(1.5rem,6vw,4.5rem)]">
            The Intelligence Behind Evolution
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Tech Brahmand is a neural infrastructure platform engineered to architect,
            sustain, and transform business technology with precision and scalability.
          </p>
        </motion.header>

        {/* ================= WHO / WHY ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 sm:mb-24">

          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-[2.5rem] border border-slate-100 shadow-sm">
            <Users className="mb-4 text-slate-900" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mb-6">
              An AI-first engineering house bridging operations with execution.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Startups", "Legacy Systems", "Infrastructure"].map((item) => (
                <span key={item} className="px-3 py-1.5 text-xs font-bold bg-slate-50 border border-slate-100 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-[2.5rem] relative overflow-hidden">
            <Target className="mb-4" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Why We Exist
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Businesses fail when their digital nervous system cannot keep up.
              We build systems that evolve continuously.
            </p>
            <Globe className="absolute -bottom-10 -right-10 opacity-10 w-32 h-32 sm:w-48 sm:h-48" />
          </div>
        </div>

        {/* ================= TRINITY ================= */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center mb-10">
            <h2 className="text-xs uppercase tracking-[0.3em] font-black text-slate-400">
              The Trinity Methodology
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trinityData.map((item, i) => (
              <div
                key={i}
                className={`p-6 sm:p-8 rounded-2xl border ${item.border} bg-gradient-to-b ${item.gradient}`}
              >
                <span className={`text-[10px] uppercase tracking-widest font-bold ${item.text}`}>
                  Phase 0{i + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-black mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs uppercase text-slate-400 mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INDUSTRIES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-6">
              Industry Focus
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Manufacturing", "FinTech", "Logistics", "EdTech"].map((ind) => (
                <div key={ind} className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-bold shadow-sm">
                  {ind}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest font-black text-slate-400 mb-6">
              The Guardrails
            </h2>
            <div className="space-y-3">
              {[
                "Zero-Template Engineering",
                "Minimal Disruption Deployments",
                "Infrastructure as Evolution",
              ].map((guard) => (
                <div key={guard} className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs sm:text-sm font-bold">
                  <CheckCircle2 size={16} className="text-green-500" />
                  {guard}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-20 text-center">
          <Sparkles className="mx-auto mb-6 text-blue-400" size={36} />
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-6">
            Ready to evolve?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
            Deploy your AI-native infrastructure today.
          </p>
          <button className="bg-white text-black px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2 mx-auto hover:scale-105 transition">
            Initiate Deployment
            <ArrowRight />
          </button>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 text-center">
          <div className="h-px bg-slate-200 w-full mb-8" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
            TechBrahmand • Neural Infrastructure Platform © 2026
          </p>
        </footer>

      </div>
    </div>
  );
}