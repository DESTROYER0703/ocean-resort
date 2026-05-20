"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, X } from "lucide-react";
import Image from "next/image";

export default function DroneShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop" 
          alt="Resort Drone View"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-xs" />
      </div>

      {/* Content */}
      <div className="text-center px-6 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-gold font-sans font-semibold mb-4 block"
        >
          Cinematic Aerial View
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif font-light text-pearl mb-8 max-w-2xl leading-tight"
        >
          Take a Flight Over Paradise
        </motion.h2>

        {/* Circular Play Button */}
        <motion.button 
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 rounded-full bg-gold text-primary flex items-center justify-center hover:bg-gold-light transition-all shadow-[0_0_30px_rgba(201,168,76,0.4)] mx-auto"
        >
          <Play className="w-6 h-6 fill-primary ml-1" />
        </motion.button>
      </div>

      {/* Video Overlay Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary-dark/95 p-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-pearl/80 hover:text-pearl flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-semibold"
            >
              <X className="w-4 h-4" /> Close
            </button>

            {/* Video Container */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden border border-glass-border shadow-2xl relative bg-black"
            >
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Resort Drone Video Tour"
                className="w-full h-full border-none"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
