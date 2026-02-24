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

export default function Contact() {
  return (
    <div className="bg-white text-slate-900 min-h-screen overflow-hidden relative">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[300px] sm:w-[500px] lg:w-[800px] h-[300px] sm:h-[500px] lg:h-[800px] bg-slate-200/40 blur-[120px] sm:blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[300px] sm:w-[500px] lg:w-[800px] h-[300px] sm:h-[500px] lg:h-[800px] bg-slate-200/40 blur-[120px] sm:blur-[160px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-22 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-28">

        {/* ================= HEADER ================= */}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto mb-4 sm:mb-16 lg:mb-20"
        >

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-4 sm:mb-6">
            <Activity size={14} className="text-slate-500" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
              Contact Platform
            </span>
          </div>

          <h1 className="
            font-bold tracking-tight leading-tight mb-4 sm:mb-6
            text-[clamp(1.5rem,6vw,4rem)]
          ">
            Let’s Build Something <br />

            <span className="bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 bg-clip-text text-transparent">
              Intelligent Together
            </span>

          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed">
            Share your goals with us. Our team will architect scalable,
            future-ready systems tailored to your business.
          </p>

        </motion.div>



        {/* ================= FORM CARD ================= */}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >

          <div className="
            bg-white
            border border-slate-300
            rounded-2xl sm:rounded-3xl
            p-5 sm:p-8 lg:p-14
            shadow-lg hover:shadow-xl
            transition
            max-w-5xl
            mx-auto
          ">

            {/* Form Header */}
            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 lg:mb-10">
              <Sparkles size={16} className="text-slate-400" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                Message Form
              </span>
            </div>


            {/* FORM */}
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

              <Input label="Full Name" />

              <Input label="Email Address" type="email" />

              <Select />

              <Textarea />

              <div className="
                sm:col-span-2
                flex flex-col sm:flex-row
                items-center justify-between
                gap-4 sm:gap-6
                mt-4 sm:mt-6
              ">

                <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
                  Enterprise-grade encrypted transmission
                </p>

                <button
                  type="submit"
                  className="
                    bg-black text-white
                    px-6 sm:px-8 lg:px-10
                    py-3 sm:py-4
                    rounded-xl
                    text-sm sm:text-base
                    font-semibold
                    hover:scale-[1.03]
                    hover:bg-slate-800
                    transition
                    flex items-center gap-2
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

        <div className="
          mt-12 sm:mt-16 lg:mt-24
          pt-6 sm:pt-8
          border-t border-slate-200
          flex flex-col sm:flex-row
          justify-between items-center
          text-[10px] sm:text-xs
          text-slate-400
          gap-3 sm:gap-4
          text-center sm:text-left
        ">

          <div className="flex items-center gap-2">
            <TerminalIcon size={14} />
            Terminal v2026 Stable
          </div>

          <div>
            TECHBRAHMAND • AI INFRASTRUCTURE PLATFORM
          </div>

        </div>

      </div>

    </div>
  );
}



/* ================= INPUT ================= */

function Input({ label, type = "text" }) {
  return (
    <div className="relative">

      <input
        type={type}
        required
        placeholder=" "
        className="
          peer w-full
          border border-slate-200
          rounded-xl
          px-4 py-3 sm:py-4
          text-sm sm:text-base
          outline-none
          focus:border-black
          focus:ring-2 focus:ring-black/5
          transition
        "
      />

      <label className="
        absolute left-4
        text-xs text-slate-400
        transition-all
        top-2
        peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4
        peer-placeholder-shown:text-sm
        peer-focus:top-2
        peer-focus:text-xs
      ">
        {label}
      </label>

    </div>
  );
}



/* ================= SELECT ================= */

function Select() {
  return (
    <div className="sm:col-span-2">

      <select className="
        w-full
        border border-slate-200
        rounded-xl
        px-4 py-3 sm:py-4
        text-sm sm:text-base
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



/* ================= TEXTAREA ================= */

function Textarea() {
  return (
    <div className="sm:col-span-2 relative">

      <textarea
        rows="4"
        placeholder=" "
        className="
          peer w-full
          border border-slate-200
          rounded-xl
          px-4 py-3 sm:py-4
          text-sm sm:text-base
          outline-none
          resize-none
          focus:border-black
          focus:ring-2 focus:ring-black/5
          transition
        "
      />

      <label className="
        absolute left-4
        text-xs text-slate-400
        transition-all
        top-2
        peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4
        peer-placeholder-shown:text-sm
        peer-focus:top-2
        peer-focus:text-xs
      ">
        Message
      </label>

    </div>
  );
}