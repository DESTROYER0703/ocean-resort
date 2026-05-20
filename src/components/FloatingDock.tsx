"use client";

import { useState, useRef, useEffect } from "react";
import { Sun, Clock, Music, Volume2, VolumeX, MessageSquare, ArrowUp, Calendar } from "lucide-react";
import WeatherWidget from "./WeatherWidget";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingDock() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Lazy load ambient ocean sounds
    audioRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2513/2513-84.wav");
    audioRef.current.loop = true;

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.log("Audio play blocked by browser policy. Play after user interaction."));
    }
    setIsPlaying(!isPlaying);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Bottom Center Glass Dock */}
      <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex w-[90vw] md:w-auto overflow-hidden sm:overflow-visible flex-col md:flex-row justify-center items-center gap-2 md:gap-4 bg-primary-dark/90 md:bg-primary-dark/80 backdrop-blur-xl border border-glass-border px-3 md:px-6 py-2 md:py-3 rounded-3xl md:rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Weather & Time */}
        <WeatherWidget />

        {/* Vertical Divider */}
        <div className="hidden md:block h-6 w-[1px] bg-glass-border" />

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Music Toggle */}
          <button 
            onClick={toggleAudio}
            className="p-2.5 rounded-full hover:bg-glass transition-colors text-gold hover:text-gold-light relative group"
          >
            {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-pearl/50" />}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-primary-dark border border-glass-border text-[9px] uppercase tracking-widest px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Ambient Ocean
            </span>
          </button>

          {/* AI Concierge Toggle */}
          <button 
            onClick={() => setIsConciergeOpen(true)}
            className="p-2.5 rounded-full hover:bg-glass transition-colors text-gold hover:text-gold-light relative group"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-primary-dark border border-glass-border text-[9px] uppercase tracking-widest px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
              AI Concierge
            </span>
          </button>

          {/* Back to Top */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={scrollToTop}
                className="p-2.5 rounded-full bg-gold text-primary hover:scale-105 transition-transform"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* AI Concierge Modal */}
      <AnimatePresence>
        {isConciergeOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-primary-dark/80 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-md bg-primary border border-glass-border rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="bg-primary-dark border-b border-glass-border p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-serif text-gold">AURA</h3>
                  <p className="text-[10px] uppercase tracking-widest text-pearl/50">Your Private AI Concierge</p>
                </div>
                <button 
                  onClick={() => setIsConciergeOpen(false)}
                  className="text-pearl/50 hover:text-pearl text-xs uppercase tracking-widest font-sans"
                >
                  Close
                </button>
              </div>
              <div className="p-6 h-80 overflow-y-auto space-y-4 font-sans text-sm">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-serif">A</div>
                  <div className="bg-glass border border-glass-border p-3 rounded-r-xl rounded-bl-xl max-w-[80%] text-pearl/90">
                    Welcome to Ocean Resort. I am Aura, your digital concierge. How may I assist your escape today? You can inquire about our private suites, dining options, or bespoke experiences.
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary-dark border-t border-glass-border flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask Aura anything..." 
                  className="flex-grow bg-glass border border-glass-border rounded-full px-4 py-2.5 text-xs text-pearl placeholder-pearl/30 focus:outline-none focus:border-gold transition-colors"
                />
                <button className="bg-gold text-primary rounded-full px-4 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-gold-light transition-colors">
                  Send
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
