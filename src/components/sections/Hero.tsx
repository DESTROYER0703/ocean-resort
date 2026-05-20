"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Calendar } from "lucide-react";
import { useRef } from "react";
import GoldParticles from "@/components/GoldParticles";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[120%] -z-20"
      >
        <img 
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Resort Background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary/60 to-primary-dark" />
      </motion.div>

      {/* Floating Orbs for Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      <GoldParticles />

      {/* Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.8 }}
          className="text-xs uppercase tracking-[0.4em] text-gold font-sans font-semibold mb-4"
        >
          Ultra-Luxury Beachfront Retreat
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-serif font-light tracking-wide text-pearl mb-6 leading-[1.05]"
        >
          Where Luxury <br />
          <span className="italic text-gold-light">Meets the Ocean</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 5.4 }}
          className="flex flex-col items-center max-w-2xl mb-12 gap-4"
        >
          <p className="text-sm md:text-lg text-pearl/90 font-serif tracking-wide font-light leading-relaxed italic">
            "Experience paradise beyond imagination at Fatehpur's most exclusive beachfront escape. Where every sunset is curated just for you."
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-sans font-semibold">
            — Dev Gupta, Founder of the Resort
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 5.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <a 
            href="#booking"
            className="w-full sm:w-auto magnetic bg-gold text-primary hover:bg-gold-light px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Book Your Stay
          </a>
          <a 
            href="#about"
            className="w-full sm:w-auto magnetic border border-gold text-gold hover:bg-gold hover:text-primary px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Explore Resort
          </a>
        </motion.div>

        {/* Mobile Info Cards (hidden on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 6.0 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 lg:hidden w-full max-w-md"
        >
          <div className="flex-1 flex items-center justify-center gap-3 glass-panel p-3.5 rounded-lg text-left">
            <div className="flex text-gold text-xs leading-none">★★★★★</div>
            <div className="h-5 w-[1px] bg-glass-border" />
            <div className="font-sans">
              <p className="text-[9px] uppercase tracking-wider text-pearl/50">Rating</p>
              <p className="text-[11px] font-semibold text-pearl">4.9★ (500+ Guests)</p>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-center gap-3 glass-panel p-3.5 rounded-lg text-left">
            <span className="text-xs">🛡️</span>
            <div className="h-5 w-[1px] bg-glass-border" />
            <div className="font-sans">
              <p className="text-[9px] uppercase tracking-wider text-pearl/50">Official Site</p>
              <p className="text-[11px] font-semibold text-pearl">Best Rate Guaranteed</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Stats Glass Card Bottom Left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 6 }}
        className="absolute bottom-10 left-10 hidden lg:flex items-center gap-4 glass-panel p-4 rounded-lg"
      >
        <div className="flex text-gold">
          {"★★★★★".split("").map((s, i) => (
            <span key={i} className="text-xs">★</span>
          ))}
        </div>
        <div className="h-6 w-[1px] bg-glass-border" />
        <div className="text-left font-sans">
          <p className="text-[10px] uppercase tracking-wider text-pearl/50">Rating</p>
          <p className="text-xs font-semibold text-pearl">4.9★ (500+ Guests)</p>
        </div>
      </motion.div>

      {/* Floating Rate Guarantee Card Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 6.2 }}
        className="absolute bottom-10 right-10 hidden lg:flex items-center gap-4 glass-panel p-4 rounded-lg"
      >
        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
          🛡️
        </div>
        <div className="text-left font-sans">
          <p className="text-[10px] uppercase tracking-wider text-pearl/50">Official Site</p>
          <p className="text-xs font-semibold text-pearl">Best Rate Guaranteed</p>
        </div>
      </motion.div>

      {/* Bouncing Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 6.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-pearl/60 font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
