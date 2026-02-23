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
<section className="relative min-h-screen flex items-center pt-24 overflow-hidden">

  {/* Grid Background */}
  <div
    className="absolute inset-0 z-0 opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}
  />

  {/* Gradient glow background */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] !bg-red-500 h-[500px]  blur-[140px] rounded-full -z-10" />

  <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">

    <div className="grid lg:grid-cols-12 gap-12 items-center">

      {/* Left Content */}
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold uppercase tracking-widest mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            The Future of Enterprise AI
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 text-slate-900">

            Evolve your <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-500 to-slate-400">
              Infrastructure
            </span>

          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
            Tech Brahmand architects the bridge between legacy systems and autonomous AI intelligence —
            helping enterprises build, modernize, and scale with precision.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">
         <Link to="/contact">
            <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-black/20">

              Get Started

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />

            </button>
</Link>
  <Link to="/contact">
            <button className="px-8 py-4 rounded-full font-semibold border border-slate-300 hover:bg-white hover:shadow-md transition-all">

              View Case Studies

            </button>
</Link>
          </div>

        </motion.div>
      </div>


      {/* Right Visual Element */}
      <motion.div
        className="lg:col-span-5 relative"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >

        {/* Glow */}
        {/* <div className="absolute -top-12 -right-12 w-75 h-72 bg-blue-200/40 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute -bottom-12 -left-12 w-75 h-72 bg-purple-200/40 rounded-full blur-[120px] -z-10"></div> */}

        {/* Image Card */}
        <div className="relative mb-10 ">

          <img
            src={img}
            alt="AI Infrastructure"
            className="w-full h-[430px] "
          />

          {/* Glass Overlay */}
        </div>
        <div className="absolute -bottom-10 left-6 right-6 bg-white/70 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-lg">

            <div className="flex items-center justify-between mb-4">

              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-slate-100 to-slate-300 shadow-sm"
                  />
                ))}
              </div>

              <span className="text-sm font-semibold text-slate-700">
                325k+ users joined
              </span>

            </div>

            <div className="space-y-2">

              <div className="h-2 w-full bg-slate-200 rounded-full ">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-black to-slate-600"
                />

              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
                Efficiency Optimized: 85%
              </p>

            </div>

          </div>

      </motion.div>

    </div>

  </div>

</section>
      {/* --- STATS SECTION --- */}
    <section className="relative py-28 bg-gradient-to-b from-white to-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        Platform Scale <br />
        <span className="italic font-serif text-slate-400 underline decoration-slate-200 underline-offset-8">
          Powering businesses at scale
        </span>
      </h2>

      <p className="mt-6 text-lg text-slate-600 leading-relaxed">
        Trusted automation infrastructure handling millions of interactions
        across calls, messaging, and intelligent workflows globally.
      </p>

    </div>


    {/* STATS */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

      {stats.map((stat, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.25 }}
          className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center"
        >

          {/* ICON */}
          <div className="mb-5 p-3 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 text-slate-500 group-hover:text-blue-600 group-hover:scale-110 transition">
            {stat.icon}
          </div>

          {/* VALUE */}
          <div className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">
            {stat.value}
          </div>

          {/* LABEL */}
          <div className="text-xs uppercase tracking-widest font-semibold text-slate-500">
            {stat.label}
          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>

      {/* --- AGENTS / FRAMEWORK SECTION --- */}
      <section className="py-32 bg-slate-900 text-white rounded-[3rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">The Trinity of <br />Evolution</h2>
            <p className="text-slate-400 max-w-md text-lg">Our systematic approach to replacing friction with intelligence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`group relative p-10 rounded-[2rem] border border-white/10 bg-gradient-to-br ${agent.gradient} hover:border-white/20 transition-all`}
              >
                <div className="text-4xl mb-8 w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {agent.icon}
                </div>
                <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">{agent.phase}</div>
                <h3 className="text-3xl font-bold mb-4">{agent.name}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">{agent.desc}</p>
                <div className="h-1 w-0 group-hover:w-full bg-white transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Animated background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
      </section>

      {/* --- REFINED ABOUT SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Designed for the next <br /> 
              <span className="italic font-serif text-slate-400 underline decoration-slate-200 underline-offset-8">generation of industry.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We don't just "implement" AI. We weave it into the fabric of your business logic. 
              From the cosmic creation of new platforms to the destruction of legacy bottlenecks, 
              Tech Brahmand is the architect of your digital destiny.
            </p>
            <div className="pt-10">
              <Link to="/contact">
              <button className="px-10 py-4 bg-black text-white rounded-full font-bold shadow-xl">
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