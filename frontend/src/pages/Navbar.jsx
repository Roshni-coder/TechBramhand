import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-8"
          : "bg-transparent py-8"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg cursor-pointer">

          <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rotate-45"></div>
          </div>

          Techbrahmand

        </Link>


        {/* CENTER LINKS */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link, index) => (

            <Link
              key={index}
              to={link.path}
              className={`text-sm font-medium transition duration-200
              ${
                location.pathname === link.path
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {link.name}
            </Link>

          ))}

        </div>


        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-4">
          
         <Link to='/contact'>
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition">
            Get Started
          </button>
          </Link>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;