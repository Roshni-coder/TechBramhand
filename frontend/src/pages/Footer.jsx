import React from "react";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {

  const links = {
    Platform: ["Overview", "Architecture", "Security", "AI Models"],
    Company: ["About", "Careers", "Press", "Contact"],
    Resources: ["Documentation", "Guides", "API Reference", "Support"],
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* subtle top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />


      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <div className="grid lg:grid-cols-12 gap-16">

          {/* BRAND */}
          <div className="lg:col-span-4">

            <div className="text-2xl font-bold tracking-tight mb-4">
              TECH BRAHMAND
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">

              AI infrastructure platform for building, modernizing, and transforming
              business systems with intelligent automation.

            </p>


            {/* SOCIAL */}
            <div className="flex gap-4">

              {[Twitter, Linkedin, Github].map((Icon, i)=>(
                <button
                  key={i}
                  className="p-3 rounded-lg border border-white/10 text-gray-400
                  hover:text-white hover:border-white hover:bg-white/5 transition">

                  <Icon size={18}/>

                </button>
              ))}

            </div>

          </div>



          {/* LINKS */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-12">

            {Object.entries(links).map(([title, items]) => (

              <div key={title}>

                <div className="font-semibold text-white mb-5">
                  {title}
                </div>

                <ul className="space-y-3">

                  {items.map(item => (

                    <li key={item}>

                      <a
                        href="#"
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition"
                      >

                        {item}

                        <ArrowUpRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition"
                        />

                      </a>

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </div>



      {/* BOTTOM */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tech Brahmand. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-gray-500">

            <a href="#" className="hover:text-white transition">
              Privacy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>

            <a href="#" className="hover:text-white transition">
              Security
            </a>

          </div>

        </div>

      </div>


      {/* subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-white/5 blur-[120px]" />

    </footer>
  );
}