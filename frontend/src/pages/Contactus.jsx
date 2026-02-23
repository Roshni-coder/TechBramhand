import React from "react";
import { motion } from "framer-motion";
import {
  Send,
  Activity,
  Sparkles,
  Terminal as TerminalIcon,
} from "lucide-react";

/* ================= ANIMATION ================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ================= PAGE ================= */

export default function Contact() {
  return (
    <div className="bg-white text-slate-900 min-h-screen overflow-hidden">

      {/* Subtle Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-slate-200/40 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-slate-200/40 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-28">


        {/* ================= CENTERED HEADER ================= */}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto mb-20"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-6">
            <Activity size={14} className="text-slate-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Contact Platform
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">

            Let’s Build Something <br />

            <span className="bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 bg-clip-text text-transparent">
              Intelligent Together
            </span>

          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            Share your goals with us. Our team will architect scalable,
            future-ready systems tailored to your business.
          </p>

        </motion.div>



        {/* ================= CENTERED FORM CARD ================= */}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="w-full"
        >

          <div className="
            bg-white
            border border-slate-300
            rounded-3xl
            p-8 md:p-14
            shadow-[0_25px_60px_rgba(0,0,0,0.0.15)]
            hover:shadow-[0_30px_70px_rgba(0,0,0,0.10)]
            transition
            max-w-6xl
            mx-auto
          ">

            {/* Form Header */}
            <div className="flex items-center justify-center gap-2 mb-10">
              <Sparkles size={16} className="text-slate-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Message Form
              </span>
            </div>


            {/* FORM */}
            <form className="grid md:grid-cols-2 gap-6">

              <Input label="Full Name" />

              <Input label="Email Address" type="email" />

              <Select />

              <Textarea />

              <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 mt-6">

                <p className="text-sm text-slate-400">
                  Enterprise-grade encrypted transmission
                </p>

                <button
                  type="submit"
                  className="
                    bg-black
                    text-white
                    px-10
                    py-4
                    rounded-xl
                    font-semibold
                    hover:scale-[1.03]
                    hover:bg-slate-800
                    transition
                    flex
                    items-center
                    gap-2
                  "
                >
                  Send Message
                  <Send size={16} />
                </button>

              </div>

            </form>

          </div>

        </motion.div>



        {/* ================= FOOTER ================= */}

        <div className="mt-24 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">

          <div className="flex items-center gap-2">
            <TerminalIcon size={14} />
            Terminal v2026 Stable
          </div>

          <div>
            TECH BRAHMAND • AI INFRASTRUCTURE PLATFORM
          </div>

        </div>

      </div>
    </div>
  );
}



/* ================= COMPONENTS ================= */

function Input({ label, type = "text" }) {
  return (
    <div className="relative">

      <input
        type={type}
        required
        placeholder=" "
        className="
          peer
          w-full
          border border-slate-200
          rounded-xl
          px-4 py-4
          outline-none
          focus:border-black
          focus:ring-2 focus:ring-black/5
          transition
        "
      />

      <label className="
        absolute
        left-4
        top-2
        text-xs
        text-slate-400
        transition-all
        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-sm
        peer-focus:top-2
        peer-focus:text-xs
      ">
        {label}
      </label>

    </div>
  );
}


function Select() {
  return (
    <div className="md:col-span-2">

      <select className="
        w-full
        border border-slate-200
        rounded-xl
        px-4 py-4
        outline-none
        focus:border-black
        focus:ring-2 focus:ring-black/5
        transition
      ">

        <option>Tech Brahma</option>
        <option>Tech Vishnu</option>
        <option>Tech Mahesh</option>
        <option>Custom AI Services</option>

      </select>

    </div>
  );
}


function Textarea() {
  return (
    <div className="md:col-span-2 relative">

      <textarea
        rows="4"
        placeholder=" "
        className="
          peer
          w-full
          border border-slate-200
          rounded-xl
          px-4 py-4
          outline-none
          resize-none
          focus:border-black
          focus:ring-2 focus:ring-black/5
          transition
        "
      />

      <label className="
        absolute
        left-4
        top-2
        text-xs
        text-slate-400
        transition-all
        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-sm
        peer-focus:top-2
        peer-focus:text-xs
      ">
        Message
      </label>

    </div>
  );
}