import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Star, ArrowRight, Zap, CheckCircle2, Globe } from "lucide-react";
import img from '../../public/vect.png'
import { Link } from "react-router-dom";
// Assuming background is handled via CSS or a local path
// import background from "../../public/roshni.jpg"; 

const Home = () => {
  const stats = [
    { value: "1.4M+", label: "Calls Handled", icon: <Zap size={16} /> },
    { value: "1.2M+", label: "Minutes Saved", icon: <CheckCircle2 size={16} /> },
    { value: "23K+", label: "Appointments", icon: <Star size={16} /> },
    { value: "37K+", label: "Global Reach", icon: <Globe size={16} /> },
  ];

  const agents = [
    {
      name: "Tech Brahma",
      phase: "Phase 01: Create",
      icon: "ॐ",
      desc: "For visionaries starting from zero. We architect AI-native platforms from the first line of code, ensuring your foundation is built for the next decade of scale.",
      gradient: "from-amber-500/10 to-transparent"
    },
    {
      name: "Tech Vishnu",
      phase: "Phase 02: Re-Engineer",
      icon: "सं",
      desc: "For established systems that feel the friction of legacy code. We inject intelligence into your current workflows, modernizing without a single minute of downtime.",
      gradient: "from-blue-500/10 to-transparent"
    },
    {
      name: "Tech Mahesh",
      phase: "Phase 03: Transform",
      icon: "वि",
      desc: "For enterprise systems at the breaking point. A controlled demolition of technical debt, replaced by a streamlined, autonomous AI infrastructure.",
      gradient: "from-purple-500/10 to-transparent"
    }
  ];

  return (
    <div className="bg-[#fafafa] text-slate-900 font-sans selection:bg-black selection:text-white">

      {/* --- HERO SECTION --- */}
<section className="relative min-h-screen flex items-center pt-24 sm:pt-28 overflow-hidden">

  {/* Background grid */}
  <div
    className="absolute inset-0 z-0 opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E")`,
    }}
  />

  {/* Responsive glow */}
  <div className="
    absolute top-0 left-1/2 -translate-x-1/2
    w-[350px] sm:w-[600px] lg:w-[1000px]
    h-[250px] sm:h-[350px] lg:h-[500px]
    bg-red-500/20
    blur-[120px]
    rounded-full
    -z-10
  "/>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

    {/* Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-7">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >

          {/* Badge */}
          <div className="
            inline-flex items-center gap-3
            px-4 py-2
            rounded-full
            bg-white
            border border-slate-200
            shadow-sm
            mb-6 sm:mb-8
          ">

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"/>
              <span className="relative h-2 w-2 rounded-full bg-emerald-500"/>
            </span>

            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Enterprise AI Infrastructure
            </span>

          </div>

          {/* Heading */}
          <h1 className="
            font-bold tracking-tight leading-[1.05]
            text-[clamp(2.9rem,8vw,5.7rem)]
            text-slate-900
            mb-6 sm:mb-8
          ">
            Evolve your <br />

            <span className="
              bg-gradient-to-r
              from-slate-900
              via-slate-600
              to-slate-400
              bg-clip-text
              text-transparent
            ">
              Infrastructure 
            </span>
            <br />
  <span className="
              bg-gradient-to-r
              from-slate-900
              via-slate-600
              to-slate-400
              bg-clip-text
              text-transparent
            ">
             with AI
            </span>
          </h1>

          {/* Description */}
          <p className="
            text-base sm:text-lg lg:text-xl
            text-slate-500
            leading-relaxed
            mb-8 sm:mb-10
            max-w-lg
          ">
            Tech Brahmand architects intelligent infrastructure that bridges legacy
            systems with autonomous AI — enabling enterprises to scale, modernize,
            and evolve without disruption.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

            <Link to="/contact">
              <button className="
                w-full sm:w-auto
                group
                bg-black text-white
                px-6 sm:px-8 py-3 sm:py-4
                rounded-full
                font-semibold
                flex items-center justify-center gap-2
                hover:bg-slate-800
                hover:shadow-xl hover:shadow-black/20
                transition-all duration-300
              ">
                Get Started
                <ArrowRight size={18}
                  className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </Link>

            <Link to="/contact">
              <button className="
                w-full sm:w-auto
                px-6 sm:px-8 py-3 sm:py-4
                rounded-full
                font-semibold
                border border-slate-300
                hover:bg-white
                hover:shadow-md
                transition-all duration-300
              ">
                View Case Studies
              </button>
            </Link>

          </div>

        </motion.div>

      </div>


      {/* RIGHT IMAGE */}
      <motion.div
        className="lg:col-span-5 relative flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >

        <div className="relative w-full max-w-md lg:max-w-full">

          {/* Responsive image */}
          <img
            src={img}
            alt="AI Infrastructure"
            className="
              w-full
              h-auto
              object-contain
            "
          />

          {/* Glass card */}
          <div className="
            relative sm:absolute
            mt-6 sm:mt-0
            sm:-bottom-10
            sm:left-6 sm:right-6
            bg-white/80
            backdrop-blur-xl
            border border-white/60
            p-4 sm:p-6
            rounded-2xl
            shadow-lg
          ">

            <div className="flex items-center justify-between mb-3">

              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-gradient-to-br from-slate-100 to-slate-300"
                  />
                ))}
              </div>

              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                325k+ users joined
              </span>

            </div>

            <div className="h-1 w-full bg-slate-200 rounded-full mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 2 }}
                className="h-full bg-gradient-to-r from-black to-slate-600"
              />
            </div>

            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-600">
              Efficiency Optimized: 85%
            </p>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>
      {/* --- STATS SECTION --- */}
      <section className="relative py-14 sm:py-20 lg:py-18 bg-gradient-to-b from-white to-slate-50">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">

      <h2 className="
        font-bold tracking-tight leading-tight
        text-[clamp(1.8rem,4vw,3rem)]
      ">
        Platform Scale <br />

        <span className="
          italic font-serif text-slate-400
          underline decoration-slate-200 underline-offset-4 sm:underline-offset-8
        ">
          Powering businesses at scale
        </span>

      </h2>

      <p className="
        mt-4 sm:mt-6
        text-sm sm:text-base lg:text-lg
        text-slate-600 leading-relaxed
        px-2 sm:px-0
      ">
        Trusted automation infrastructure handling millions of interactions
        across calls, messaging, and intelligent workflows globally.
      </p>

    </div>


    {/* STATS GRID */}
    <div className="
      grid grid-cols-2
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-3 sm:gap-5 lg:gap-6
    ">

      {stats.map((stat, i) => (

        <motion.div
          key={i}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.25 }}
          className="
            group
            p-4 sm:p-6 lg:p-8
            rounded-xl sm:rounded-2xl
            bg-white border border-slate-200
            shadow-sm hover:shadow-xl
            hover:border-blue-200
            transition-all duration-300
            flex flex-col items-center text-center
          "
        >

          {/* ICON */}
          <div className="
            mb-3 sm:mb-4 lg:mb-5
            p-2 sm:p-3
            rounded-lg sm:rounded-xl
            bg-gradient-to-br from-slate-50 to-slate-100
            text-slate-500
            group-hover:text-blue-600
            group-hover:scale-110
            transition
          ">
            {stat.icon}
          </div>

          {/* VALUE */}
          <div className="
            font-bold text-slate-900 tracking-tight mb-1 sm:mb-2
            text-xl sm:text-3xl lg:text-4xl
          ">
            {stat.value}
          </div>

          {/* LABEL */}
          <div className="
            text-[10px] sm:text-xs
            uppercase tracking-widest
            font-semibold text-slate-500
          ">
            {stat.label}
          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      {/* --- AGENTS / FRAMEWORK SECTION --- */}
<section className="
  py-16 sm:py-24 lg:py-32
  bg-slate-900 text-white
  rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem]
  mx-3 sm:mx-4 lg:mx-6
  overflow-hidden relative
">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* HEADER */}
    <div className="mb-10 sm:mb-16 lg:mb-20 text-center md:text-left">

      <h2 className="
        font-bold tracking-tight leading-tight mb-4 sm:mb-6
        text-[clamp(1.8rem,5vw,3.5rem)]
      ">
        The Trinity of <br className="hidden sm:block" />
        Evolution
      </h2>

      <p className="
        text-slate-400
        text-sm sm:text-base lg:text-lg
        max-w-md mx-auto md:mx-0
      ">
        Our systematic approach to replacing friction with intelligence.
      </p>

    </div>

    {/* GRID */}
    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-4 sm:gap-6 lg:gap-8
    ">

      {agents.map((agent, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className={`
            group relative
            p-5 sm:p-7 lg:p-10
            rounded-xl sm:rounded-2xl lg:rounded-[2rem]
            border border-white/10
            bg-gradient-to-br ${agent.gradient}
            hover:border-white/30
            transition-all duration-300
          `}
        >

          {/* ICON */}
          <div className="
            text-2xl sm:text-3xl lg:text-4xl
            mb-4 sm:mb-6 lg:mb-8
            w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
            flex items-center justify-center
            bg-white/5
            rounded-lg sm:rounded-xl lg:rounded-2xl
            group-hover:scale-110
            transition-transform duration-500
          ">
            {agent.icon}
          </div>

          {/* PHASE */}
          <div className="
            text-[10px] sm:text-xs
            font-bold tracking-widest uppercase
            text-slate-500 mb-2
          ">
            {agent.phase}
          </div>

          {/* TITLE */}
          <h3 className="
            text-3xl sm:text-3xl lg:text-3xl xl:text-3xl
            font-bold mb-3 sm:mb-4
          ">
            {agent.name}
          </h3>

          {/* DESCRIPTION */}
          <p className="
            text-slate-400
            text-sm sm:text-base
            leading-relaxed
            mb-4 sm:mb-6 lg:mb-8
          ">
            {agent.desc}
          </p>

          {/* HOVER LINE */}
          <div className="
            h-[2px]
            w-0 group-hover:w-full
            bg-white
            transition-all duration-500
          "/>

        </motion.div>

      ))}

    </div>

  </div>

  {/* BACKGROUND GLOW */}
  <div className="
    absolute top-0 right-0
    w-full sm:w-2/3 lg:w-1/2
    h-full
    bg-gradient-to-l from-blue-500/10 to-transparent
    pointer-events-none
  "/>

</section>

     {/* --- REFINED ABOUT SECTION --- */}
<section className="
  py-16 sm:py-24 lg:py-20
  px-4 sm:px-6 lg:px-8
">

  <div className="max-w-4xl mx-auto text-center">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6 sm:space-y-8"
    >

      {/* HEADING */}
      <h2 className="
        font-bold tracking-tight leading-tight
        text-[clamp(1.8rem,5vw,3rem)]
      ">
        Designed for the next <br className="hidden sm:block"/>

        <span className="
          italic font-serif text-slate-400
          underline decoration-slate-200
          underline-offset-4 sm:underline-offset-8
          block sm:inline
        ">
          generation of industry.
        </span>

      </h2>

      {/* DESCRIPTION */}
      <p className="
        text-slate-600 leading-relaxed
        text-sm sm:text-base lg:text-lg
        max-w-2xl mx-auto
      ">
        We don't just implement AI. We weave intelligence into your business logic.
        From building new platforms to modernizing legacy systems, Tech Brahmand
        becomes the architect of your digital future.
      </p>

      {/* BUTTON */}
      <div className="pt-4 sm:pt-6 lg:pt-10">

        <Link to="/contact">

          <button className="
            px-6 sm:px-8 lg:px-10
            py-3 sm:py-4
            text-sm sm:text-base
            bg-black text-white
            rounded-full font-semibold
            shadow-lg hover:shadow-xl
            hover:scale-[1.02]
            active:scale-[0.98]
            transition-all duration-300
          ">

            Partner With Us

          </button>

        </Link>

      </div>

    </motion.div>

  </div>

</section>


    </div>
  );
};

export default Home;