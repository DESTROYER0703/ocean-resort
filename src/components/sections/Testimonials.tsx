"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Absolutely breathtaking. From the moment we arrived, the service was impeccable. The ocean view suite is worth every penny. Truly a 5-star experience.",
    guest: "Sarah Jenkins",
    location: "London, UK",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote: "We spent our honeymoon here and it exceeded all expectations. The private beachfront dinner was magical. We will definitely be returning next year.",
    guest: "Michael & Emma",
    location: "New York, USA",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote: "The spa treatments are out of this world. The staff remembers your name and your preferences. Luxury hospitality at its absolute finest.",
    guest: "Priya Sharma",
    location: "Mumbai, India",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    rating: 5,
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="testimonials" 
      className="bg-primary py-24 md:py-32 overflow-hidden relative"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-3 block"
          >
            Guest Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-light text-pearl mb-4"
          >
            Stories From Our Guests
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>

        {/* Carousel Content */}
        <div className="h-80 md:h-64 flex flex-col justify-center items-center relative">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: idx === active ? 1 : 0,
                y: idx === active ? 0 : 20,
                pointerEvents: idx === active ? "auto" : "none",
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-serif italic text-xl md:text-3xl text-pearl/90 leading-relaxed mb-8 max-w-2xl">
                “{test.quote}”
              </p>
              
              <div className="flex items-center gap-4 text-left">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                  <Image 
                    src={test.photo} 
                    alt={test.guest}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-pearl font-semibold text-base">{test.guest}</h4>
                  <p className="text-[10px] text-pearl/50 uppercase tracking-widest font-sans">{test.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                active === idx ? "bg-gold scale-125 w-4" : "bg-pearl/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
