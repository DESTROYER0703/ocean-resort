"use client";

import { motion } from "framer-motion";
import { GlassWater, Utensils, Award } from "lucide-react";
import Image from "next/image";

const restaurants = [
  {
    name: "The Coral Table",
    type: "Signature Seafood",
    hours: "12:00 PM - 11:00 PM",
    desc: "A seaside pavilion serving fresh, sustainably sourced catch, transformed by global coastal cooking techniques.",
    icon: Utensils,
  },
  {
    name: "Blue Horizon Rooftop",
    type: "Modern Tapas & Mixology",
    hours: "5:00 PM - 1:00 AM",
    desc: "Overlooking the infinity pool and ocean, featuring progressive cocktails, fine vintage wines, and artisanal small plates.",
    icon: GlassWater,
  },
  {
    name: "The Beach Shack",
    type: "Woodfired Grill & Bar",
    hours: "11:00 AM - 10:00 PM",
    desc: "Barefoot casual luxury on the sand. Savor smoked meats, chargrilled lobsters, and ice-cold local brews.",
    icon: Award,
  }
];

export default function Dining() {
  return (
    <section 
      id="dining" 
      className="relative bg-primary py-24 md:py-32 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-3 block"
          >
            Culinary Artistry
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-light text-pearl mb-4"
          >
            Taste The Ocean, Savour The Moment
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>

        {/* Featured Video / Main Image */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">
          
          <div className="lg:col-span-7 relative h-[350px] md:h-[500px] w-full rounded-lg overflow-hidden border border-glass-border shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop" 
              alt="Dining Experience"
              fill
              className="object-cover scale-100 hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            {/* Elegant vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif text-pearl mb-6">A Symphony of Freshness & Technique</h3>
            <p className="text-pearl/80 font-sans font-light tracking-wide leading-relaxed mb-6">
              Our culinary program is directed by Michelin-profile chefs dedicated to showcasing local coastal ingredients. We believe in simplicity, clean techniques, and sensory pairings that reflect the coastal surroundings.
            </p>
            <p className="text-pearl/60 font-sans font-light tracking-wide leading-relaxed mb-8">
              From our morning catch program to private candlelit dining experiences on our private sands, every bite is crafted to evoke memories of Goa.
            </p>
            <a 
              href="#booking"
              className="w-max bg-gold text-primary hover:bg-gold-light px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Reserve a Table
            </a>
          </div>

        </div>

        {/* Restaurants Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {restaurants.map((rest, idx) => {
            const Icon = rest.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="glass-panel p-8 rounded-lg flex flex-col justify-between group hover:border-gold/30 transition-all duration-300"
              >
                <div>
                  <div className="p-3 bg-gold/10 border border-gold/20 rounded-lg text-gold w-max mb-6 group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif text-pearl mb-2">{rest.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-sans block mb-4">{rest.type}</span>
                  <p className="text-xs md:text-sm text-pearl/70 leading-relaxed font-light mb-6 font-sans">
                    {rest.desc}
                  </p>
                </div>
                <div className="border-t border-glass-border pt-4 text-xs text-pearl/50 uppercase tracking-wider font-sans">
                  Open: {rest.hours}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
