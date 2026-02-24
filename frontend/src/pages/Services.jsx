import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Layers,
  Database,
  Zap,
  ShieldCheck,
  Activity,
  Orbit,
} from "lucide-react";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};


export default function Services() {

  const coreServices = [
    {
      title: "Software as a Service (SaaS)",
      icon: <Cloud size={22} />,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-100",
      desc: "We design and deliver custom software applications that run securely on the cloud and evolve continuously with your business.",
      features: [
        "Custom AI Architecture",
        "Cloud-Native Deployment",
        "Evolutionary Upgrades",
        "24/7 System Integrity",
      ],
      ideal:
        "Internal business apps, customer platforms, workflow automation.",
    },
    {
      title: "Platform as a Service (PaaS)",
      icon: <Layers size={22} />,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
      desc: "We build scalable platforms that allow teams, applications, and data to work together with autonomous intelligence.",
      features: [
        "Modular Logic Layers",
        "AI Data Orchestration",
        "Unified API Integration",
        "Rapid Scale Protocols",
      ],
      ideal:
        "Scaling businesses, multi-app environments, data-heavy operations.",
    },
    {
      title: "Infrastructure as a Service (IaaS)",
      icon: <Database size={22} />,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-100",
      desc: "We design and manage intelligent infrastructure that supports performance, security, and extreme scalability.",
      features: [
        "Hybrid-Mesh Design",
        "AI Resource Allocation",
        "Cost-Efficiency Engine",
        "Disaster Recovery Alpha",
      ],
      ideal:
        "Complex enterprise setups, legacy migrations, high-availability.",
    },
  ];


  return (
  <div className="
    pt-22 sm:pt-24 lg:pt-32
    pb-16 sm:pb-20 lg:pb-24
    bg-white min-h-screen relative overflow-hidden
  ">

    {/* background */}
    <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white -z-10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


      {/* HEADER */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-center mb-10 sm:mb-20 lg:mb-24 max-w-4xl mx-auto"
      >

        {/* badge */}
        <div className="
          inline-flex items-center gap-2
          px-3 sm:px-4 py-2
          bg-white border border-slate-200
          shadow-sm rounded-full mb-4 sm:mb-6
        ">

          <Activity size={14} className="text-slate-500" />

          <span className="
            text-[10px] sm:text-xs
            font-semibold tracking-wider
            text-slate-600 uppercase
          ">
            Service Infrastructure
          </span>

        </div>


        {/* heading */}
        <h1 className="
          font-bold tracking-tight text-slate-900 mb-4 sm:mb-6
          text-[clamp(1.5rem,6vw,4.5rem)]
        ">

          Evolving Technology <br />

          <span className="
            bg-gradient-to-r
            from-slate-900 via-slate-600 to-slate-400
            bg-clip-text text-transparent
          ">
            Ecosystems
          </span>

        </h1>


        {/* text */}
        <p className="
          text-slate-500
          text-sm sm:text-base lg:text-lg
          max-w-2xl mx-auto
          leading-relaxed
        ">
          Technology should evolve continuously — not break every time it grows.
          We provide long-term stability through continuous intelligence upgrades.
        </p>

      </motion.div>



      {/* SERVICES GRID */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4 sm:gap-6 lg:gap-8
          mb-14 sm:mb-20 lg:mb-24
        "
      >

        {coreServices.map((service, i) => (

          <motion.div
            key={i}
            variants={fadeInUp}
            className={`
              group bg-white
              border ${service.border}
              rounded-xl sm:rounded-2xl lg:rounded-3xl
              p-5 sm:p-6 lg:p-8
              hover:shadow-xl
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
              ${service.bg} ${service.color}
            `}>
              {service.icon}
            </div>


            {/* title */}
            <h3 className="
              text-xl sm:text-xl lg:text-2xl
              font-bold text-slate-900
              mb-3 sm:mb-4
            ">
              {service.title}
            </h3>


            {/* desc */}
            <p className="
              text-sm sm:text-base
              text-slate-500
              mb-4 sm:mb-6
              leading-relaxed
            ">
              {service.desc}
            </p>


            {/* features */}
            <div className="mb-6 sm:mb-8">

              <div className="
                text-[10px] sm:text-xs
                font-semibold uppercase tracking-wider
                text-slate-400 mb-3 sm:mb-4
              ">
                Core Ecosystem
              </div>

              <ul className="space-y-2 sm:space-y-3">

                {service.features.map((feat, idx) => (

                  <li
                    key={idx}
                    className="
                      flex items-center gap-3
                      text-xs sm:text-sm
                      text-slate-600
                    "
                  >

                    <div className={`w-2 h-2 rounded-full ${service.bg}`} />

                    {feat}

                  </li>

                ))}

              </ul>

            </div>


            {/* ideal */}
            <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-200">

              <div className="
                text-[10px] sm:text-xs
                font-semibold uppercase tracking-wider
                text-slate-400 mb-2
              ">
                Optimal For
              </div>

              <p className="
                text-xs sm:text-sm
                text-slate-500 italic
              ">
                {service.ideal}
              </p>

            </div>

          </motion.div>

        ))}

      </motion.div>



      {/* BENEFITS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          bg-slate-50 border border-slate-200
          rounded-xl sm:rounded-2xl lg:rounded-3xl
          p-5 sm:p-8 lg:p-10
        "
      >

        <div className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-4
          gap-6 sm:gap-8 lg:gap-10
        ">

          {[
            { label: "Fixed Costing", icon: <ShieldCheck size={24} /> },
            { label: "Infinite AI Upgrades", icon: <Zap size={24} /> },
            { label: "System Optimization", icon: <Orbit size={24} /> },
            { label: "Active Partnership", icon: <Activity size={24} /> },
          ].map((item, i) => (

            <div key={i} className="flex flex-col items-center text-center">

              <div className="
                w-12 h-12 sm:w-14 sm:h-14
                bg-white border border-slate-200
                rounded-lg sm:rounded-xl
                flex items-center justify-center
                mb-3 sm:mb-4
                text-slate-700
              ">
                {item.icon}
              </div>

              <div className="
                text-[10px] sm:text-xs
                font-semibold tracking-wider
                text-slate-500 uppercase
              ">
                {item.label}
              </div>

            </div>

          ))}

        </div>

      </motion.div>


    </div>
  </div>
);
}