"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would wait for images/fonts to load.
    // We'll simulate a cinematic loading delay here.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // 4.5 seconds of cinematic intro
    
    // Disable scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary-dark text-pearl"
        >
          {/* Animated Wave SVG */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-full overflow-hidden"
          >
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path fill="var(--color-gold)" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-center z-10"
          >
            <motion.h1 
              initial={{ letterSpacing: "10px" }}
              animate={{ letterSpacing: "5px" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-serif text-gold uppercase tracking-widest mb-4"
            >
              Ocean Resort
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-pearl/80"
            >
              Welcome to Paradise
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
