import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rotate-45"></div>
          </div>
          Techbrahmand
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-sm font-medium transition duration-200 ${
                location.pathname === link.path
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact">
            <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-100 mt-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#fafafa]  shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-base font-medium ${
                location.pathname === link.path
                  ? "text-black"
                  : "text-gray-500"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link to="/contact">
            <button className="w-full bg-black text-white py-3 rounded-full font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;