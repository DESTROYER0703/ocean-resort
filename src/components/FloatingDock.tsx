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

  // AI Concierge Chat States
  const [messages, setMessages] = useState<Array<{ sender: "aura" | "guest"; text: string }>>([
    {
      sender: "aura",
      text: "Welcome to Ocean Resort. I am Aura, your digital concierge. How may I assist your escape today? You can inquire about our private suites, dining options, or bespoke experiences.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Lazy load ambient ocean sounds - high quality 30s loop
    audioRef.current = new Audio("https://www.soundjay.com/nature/sounds/ocean-wave-1.mp3");
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

  const handleSendMessage = () => {
    if (!inputVal.trim()) return;

    const userMessage = inputVal.trim();
    setMessages((prev) => [...prev, { sender: "guest", text: userMessage }]);
    setInputVal("");
    setIsTyping(true);

    // Simulate smart AI response based on keywords
    setTimeout(() => {
      const lowerMsg = userMessage.toLowerCase();
      let replyText = "";

      if (lowerMsg.includes("suite") || lowerMsg.includes("room") || lowerMsg.includes("villa") || lowerMsg.includes("accommodation")) {
        replyText = "Our private sanctuaries range from the exquisite Ocean View Suite (₹18,500/night) to the Beachfront Villa (₹32,000/night) and the grand Presidential Suite (₹55,000/night). Each features custom luxury furnishings and direct ocean vistas. You can book them in the Accommodations section.";
      } else if (lowerMsg.includes("dine") || lowerMsg.includes("dining") || lowerMsg.includes("food") || lowerMsg.includes("restaurant") || lowerMsg.includes("chef") || lowerMsg.includes("eat")) {
        replyText = "Our main dining pavilion offers custom organic menus prepared by our executive chefs, featuring fresh local seafood and curated Indian & international cuisine. Beachside dining under the stars is also available.";
      } else if (lowerMsg.includes("where") || lowerMsg.includes("location") || lowerMsg.includes("map") || lowerMsg.includes("address") || lowerMsg.includes("fatehpur")) {
        replyText = "Ocean Resort is located on the pristine sands of Fatehpur, Uttar Pradesh, India. We coordinate private helicopter transfers and luxury vehicle transits for our guests.";
      } else if (lowerMsg.includes("contact") || lowerMsg.includes("phone") || lowerMsg.includes("email") || lowerMsg.includes("whatsapp")) {
        replyText = "You can contact our 24/7 guest service team at +91 8573890894 or mail us directly at concierge@oceanresort.com.";
      } else if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("rate") || lowerMsg.includes("night") || lowerMsg.includes("how much")) {
        replyText = "Our suites start at ₹18,500 per night. Best rates are guaranteed when booking directly with our concierge. Check out our Booking section for specific date availability.";
      } else if (lowerMsg.includes("pool") || lowerMsg.includes("swim") || lowerMsg.includes("infinity")) {
        replyText = "We feature a heated coastal infinity pool with panoramic views of the water, and private pools in all Beachfront Villas.";
      } else if (lowerMsg.includes("owner") || lowerMsg.includes("founder") || lowerMsg.includes("dev") || lowerMsg.includes("gupta")) {
        replyText = "The resort was founded by Dev Gupta, a visionary dedicated to delivering the pinnacle of luxury, curation, and relaxation along the Fatehpur coastline.";
      } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey") || lowerMsg.includes("greetings")) {
        replyText = "Greetings! I am Aura, your digital concierge. How may I elevate your stay or assist you with booking details today?";
      } else {
        replyText = "Thank you for reaching out. At Ocean Resort, we pride ourselves on catering to your every desire. I have shared your inquiry with our guest experience team, and a representative will respond shortly, or you can contact our booking line directly.";
      }

      setMessages((prev) => [...prev, { sender: "aura", text: replyText }]);
      setIsTyping(false);
    }, 1200);
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
              <div className="p-6 h-80 overflow-y-auto space-y-4 font-sans text-sm scrollbar-thin">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex gap-3 ${msg.sender === "guest" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif shrink-0 ${msg.sender === "guest" ? "bg-pearl/10 border border-pearl/20 text-pearl" : "bg-gold/10 border border-gold/30 text-gold"}`}>
                      {msg.sender === "aura" ? "A" : "G"}
                    </div>
                    <div className={`p-3 max-w-[80%] text-pearl/90 border border-glass-border rounded-xl ${msg.sender === "guest" ? "bg-primary-dark/60 rounded-tr-none text-left" : "bg-glass rounded-tl-none"}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-serif shrink-0">A</div>
                    <div className="bg-glass border border-glass-border p-3 rounded-r-xl rounded-bl-xl text-pearl/50 italic flex items-center gap-1.5">
                      Aura is typing
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <div className="p-4 bg-primary-dark border-t border-glass-border flex gap-2">
                <input 
                  type="text" 
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                  placeholder="Ask Aura anything..." 
                  className="flex-grow bg-glass border border-glass-border rounded-full px-4 py-2.5 text-xs text-pearl placeholder-pearl/30 focus:outline-none focus:border-gold transition-colors"
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-gold text-primary rounded-full px-4 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-gold-light transition-colors"
                >
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
