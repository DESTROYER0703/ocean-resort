"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 md:px-12 py-6 ${
        isScrolled 
          ? "bg-primary-dark/70 backdrop-blur-md border-b border-glass-border py-4" 
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 4.5, ease: "easeOut" }} // Delays until preloader finishes
    >
      <div className="text-gold font-serif text-2xl uppercase tracking-widest font-medium cursor-pointer">
        Ocean Resort
      </div>

      <nav className="hidden lg:flex gap-10 text-sm tracking-widest uppercase font-medium text-pearl">
        {["Home", "Accommodations", "Amenities", "Dining", "Gallery"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="relative group magnetic hover:text-gold transition-colors"
          >
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="hidden md:flex magnetic items-center gap-2 bg-gold text-primary px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(201,168,76,0.2)]">
          <Phone size={14} /> Book Now
        </button>
        
        {/* Mobile Menu Hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2 magnetic z-50">
          <span className="w-6 h-[1px] bg-pearl"></span>
          <span className="w-6 h-[1px] bg-pearl"></span>
          <span className="w-6 h-[1px] bg-pearl"></span>
        </button>
      </div>
    </motion.header>
  );
}
