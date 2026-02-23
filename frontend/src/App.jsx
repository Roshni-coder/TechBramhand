import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Products from "./pages/Products";

import Services from "./pages/Services";
import Contactus from "./pages/Contactus";
import About from "./pages/About";

// Simple Scroll to Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/products" element={<Products />} />
             <Route path="/services" element={<Services />} />
             <Route path="/contact" element={<Contactus />} />
             <Route path="/about" element={<About/>} />  
            {/* Other routes remain the same */}
          </Routes>
<Footer/>
    </Router>
  );
}