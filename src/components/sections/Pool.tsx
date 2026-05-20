"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Pool() {
  return (
    <section 
      id="pool" 
      className="relative bg-primary-dark py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Copywriting Left */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4"
            >
              The Horizon Pool
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-light text-pearl mb-6 leading-tight"
            >
              Where The Water Ends, The Sky Begins
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pearl/80 font-sans font-light tracking-wide leading-relaxed mb-6"
            >
              Our temperature-controlled, 50-meter infinity pool blends seamlessly with the azure expanse of the Arabian Sea. Hovering slightly above the sands, it provides a visual continuum of liquid tranquility.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pearl/60 font-sans font-light tracking-wide leading-relaxed mb-8"
            >
              Sink into a private submerged lounger or retreat to a luxury poolside cabana. Sip signature mixology creations while our attentive pool concierges tend to your every comfort.
            </motion.p>

            <div className="flex gap-8 border-t border-glass-border pt-8 mb-8">
              <div>
                <span className="text-3xl font-serif font-light text-gold">50m</span>
                <span className="text-[10px] uppercase tracking-widest text-pearl/40 font-sans block">Pool Length</span>
              </div>
              <div>
                <span className="text-3xl font-serif font-light text-gold">28°C</span>
                <span className="text-[10px] uppercase tracking-widest text-pearl/40 font-sans block">Water Temp</span>
              </div>
              <div>
                <span className="text-3xl font-serif font-light text-gold">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-pearl/40 font-sans block">Saltwater</span>
              </div>
            </div>

            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="#booking"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold hover:text-gold-light transition-colors group w-max"
            >
              Book Pool Cabana 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </div>

          {/* Visual Showcase Right */}
          <div className="lg:col-span-7 relative h-[400px] md:h-[600px] w-full rounded-lg overflow-hidden border border-glass-border shadow-2xl">
            <motion.div 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8 }}
              className="w-full h-full relative"
            >
              <Image 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop" 
                alt="Infinity Pool Experience"
                fill
                className="object-cover"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
