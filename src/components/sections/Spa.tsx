"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Spa() {
  return (
    <section 
      id="spa" 
      className="relative bg-primary-dark py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Showcase Left */}
          <div className="lg:col-span-7 relative h-[400px] md:h-[600px] w-full rounded-lg overflow-hidden border border-glass-border shadow-2xl order-2 lg:order-1">
            <motion.div 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8 }}
              className="w-full h-full relative"
            >
              <Image 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop" 
                alt="Spa & Wellness Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Copywriting Right */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4"
            >
              The Sanctuary Spa
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-light text-pearl mb-6 leading-tight"
            >
              Bespoke Ayurvedic Healing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pearl/80 font-sans font-light tracking-wide leading-relaxed mb-6"
            >
              Step into a realm of deep restoration. Our wellness pavilion provides customized body rituals, ancient Ayurvedic oil therapies, and advanced facial treatments, overseen by certified wellness doctors.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pearl/60 font-sans font-light tracking-wide leading-relaxed mb-8"
            >
              Each pavilion sits in absolute isolation, flanked by water gardens. Experience sound bath meditations or private yoga sessions directed by local ashram guides.
            </motion.p>

            {/* Rituals list */}
            <div className="space-y-4 mb-8">
              {[
                { title: "Abhyanga Massage", duration: "90 mins", price: "₹6,500" },
                { title: "Sound Healing Therapy", duration: "60 mins", price: "₹4,500" },
                { title: "Sunder Facial Ritual", duration: "75 mins", price: "₹5,500" }
              ].map((ritual, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-glass-border pb-3">
                  <div>
                    <h4 className="font-serif text-pearl font-medium text-base">{ritual.title}</h4>
                    <span className="text-[10px] text-pearl/50 uppercase tracking-widest font-sans">{ritual.duration}</span>
                  </div>
                  <span className="text-gold font-serif">{ritual.price}</span>
                </div>
              ))}
            </div>

            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="#booking"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold hover:text-gold-light transition-colors group w-max"
            >
              Request Spa Booking 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </div>

        </div>

      </div>
    </section>
  );
}
