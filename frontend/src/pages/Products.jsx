import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Binary,
  Orbit,
  ArrowUpRight,
  Shield,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Products() {

  const products = [
    {
      title: "Tech Brahma",
      subtitle: "The Creator",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
      icon: <Sparkles size={20} />,
      label: "Creation Stage",
      desc: "Build complete AI-powered digital infrastructure from zero. Designed for scalability, performance, and intelligent automation.",
      features: [
        "Business process design",
        "AI-driven architecture",
        "Automation foundation",
        "Infinite scalability",
      ],
      ideal: "Startups & traditional businesses going digital",
      cta: "Build Platform",
    },
    {
      title: "Tech Vishnu",
      subtitle: "The Preserver",
      color: "text-cyan-700",
      bg: "bg-cyan-50",
      border: "border-cyan-100",
      icon: <Binary size={20} />,
      label: "Enhancement Stage",
      desc: "Enhance existing software systems with AI automation, improving efficiency without disrupting operations.",
      features: [
        "System intelligence upgrade",
        "Workflow automation",
        "AI reporting",
        "Performance optimization",
      ],
      ideal: "Growing businesses with existing software",
      cta: "Enhance Systems",
    },
    {
      title: "Tech Mahesh",
      subtitle: "The Transformer",
      color: "text-purple-700",
      bg: "bg-purple-50",
      border: "border-purple-100",
      icon: <Orbit size={20} />,
      label: "Transformation Stage",
      desc: "Safely rebuild legacy systems into modern AI-powered platforms with zero downtime.",
      features: [
        "Legacy modernization",
        "Parallel architecture",
        "Safe migration",
        "Future-proof infrastructure",
      ],
      ideal: "Enterprises with legacy infrastructure",
      cta: "Transform Infrastructure",
    },
  ];

  return (
  <div className="
    pt-28 sm:pt-24 lg:pt-32
    pb-16 sm:pb-20 lg:pb-24
    bg-white min-h-screen relative overflow-hidden
  ">

    {/* background */}
    <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white -z-10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20 lg:mb-32 max-w-4xl mx-auto"
      >

        {/* Badge */}
        <div className="
          inline-flex items-center gap-2 sm:gap-3
          px-4 sm:px-5 py-2
          rounded-full
          bg-gradient-to-b from-white to-slate-50
          border border-slate-200
          shadow-sm
          mb-2 sm:mb-8
        ">
          <Shield size={14} className="text-slate-500" />

          <span className="
            text-[10px] sm:text-[11px]
            font-semibold tracking-[0.18em]
            text-slate-600 uppercase
          ">
            AI Product Suite
          </span>
        </div>


        {/* Heading */}
        <h1 className="
          font-bold tracking-tight leading-tight text-slate-900 mb-6 sm:mb-8
          text-[clamp(1.5rem,6vw,4.5rem)]
        ">

          Intelligence Built for Every{" "}

          <span className="
            bg-gradient-to-r
            from-slate-900 via-slate-600 to-slate-400
            bg-clip-text text-transparent
          ">
            Stage of Evolution
          </span>

        </h1>


        {/* Subtext */}
        <p className="
          text-slate-500
          text-[12px] sm:text-base lg:text-lg
          leading-relaxed
          max-w-2xl mx-auto
        ">
          Deploy specialized AI agents engineered to create, enhance,
          and transform your business infrastructure.
        </p>


        {/* Divider */}
        <div className="mt-6 sm:mt-12 flex items-center justify-center gap-3 sm:gap-4">

          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-slate-300" />

          <div className="
            text-[8px] sm:text-xs
            tracking-[0.2em]
            text-slate-400 font-semibold uppercase
          ">
            Enterprise-Grade Intelligence
          </div>

          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-slate-300" />

        </div>

      </motion.div>


      {/* PRODUCTS GRID */}
      <motion.div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4 sm:gap-6 lg:gap-8
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {products.map((item, i) => (

          <motion.div
            key={i}
            variants={fadeInUp}
            className={`
              group relative
              p-5 sm:p-6 lg:p-8
              rounded-xl sm:rounded-2xl lg:rounded-3xl
              border ${item.border}
              bg-white hover:shadow-xl
              transition duration-500
              flex flex-col
            `}
          >

            {/* icon */}
            <div className={`
              w-12 h-12 sm:w-14 sm:h-14
              rounded-lg sm:rounded-xl
              flex items-center justify-center
              mb-4 sm:mb-6
              ${item.bg} ${item.color}
            `}>
              {item.icon}
            </div>


            {/* title */}
            <h2 className="
              text-2xl sm:text-xl lg:text-2xl
              font-bold text-slate-900 mb-1
            ">
              {item.title}
            </h2>


            <p className={`
              text-[10px] sm:text-xs
              uppercase tracking-widest
              font-semibold mb-3 sm:mb-4
              ${item.color}
            `}>
              {item.subtitle}
            </p>


            {/* desc */}
            <p className="
              text-sm sm:text-base
              text-slate-500 mb-4 sm:mb-6
              leading-relaxed
            ">
              {item.desc}
            </p>


            {/* features */}
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-8">

              {item.features.map((f, idx) => (

                <li key={idx} className="
                  flex items-center gap-3
                  text-xs sm:text-sm
                  text-slate-600
                ">

                  <div className={`w-2 h-2 rounded-full ${item.bg}`} />

                  {f}

                </li>

              ))}

            </ul>


            {/* ideal */}
            <div className="
              bg-slate-50 border border-slate-200
              p-3 sm:p-4
              rounded-lg sm:rounded-xl
              mb-4 sm:mb-6
            ">

              <div className="
                text-[10px] sm:text-xs
                uppercase text-slate-400 mb-1
              ">
                Ideal For
              </div>

              <div className="
                text-xs sm:text-sm
                text-slate-600
              ">
                {item.ideal}
              </div>

            </div>


            {/* CTA */}
            <button className="
              mt-auto
              bg-slate-900 text-white
              py-2.5 sm:py-3
              text-sm sm:text-base
              rounded-lg sm:rounded-xl
              font-semibold
              hover:bg-slate-700
              transition
              flex items-center justify-center gap-2
            ">

              {item.cta}

              <ArrowUpRight size={16} />

            </button>

          </motion.div>

        ))}

      </motion.div>


      {/* FOOTER NOTE */}
      <div className="
        text-center mt-12 sm:mt-16 lg:mt-20
        text-[10px] sm:text-xs
        uppercase tracking-widest
        text-slate-400 font-semibold
      ">
        Enterprise-grade • Secure • Zero downtime deployment
      </div>

    </div>
  </div>
);
}