"use client";

import { motion } from "framer-motion";
import { Maximize, Users, Wifi, Wind } from "lucide-react";
import Image from "next/image";

const rooms = [
  {
    title: "Ocean View Suite",
    desc: "Uninterrupted ocean vistas, featuring custom teak wood furnishings, a sprawling private balcony, and state-of-the-art automation.",
    price: "18,500",
    size: "65 sqm",
    guests: "2 Guests",
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Beachfront Villa",
    desc: "Direct beach access with a private heated infinity pool, private outdoor shower, and direct views of the sunset.",
    price: "32,000",
    size: "120 sqm",
    guests: "4 Guests",
    badge: "Private Pool",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Presidential Suite",
    desc: "Our crown jewel. A dual-level suite featuring a dedicated 24/7 butler, private chef dining space, wellness area, and panoramic ocean vistas.",
    price: "55,000",
    size: "250 sqm",
    guests: "6 Guests",
    badge: "Signature Suite",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
  }
];

export default function Rooms() {
  return (
    <section 
      id="accommodations" 
      className="bg-pearl text-primary-dark py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-primary-dark/60 font-sans font-semibold mb-3 block"
          >
            Accommodations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-light text-primary-dark mb-4"
          >
            Your Private Ocean Sanctuary
          </motion.h2>
          <div className="w-24 h-[1px] bg-primary-dark/20 mx-auto mt-6" />
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white rounded-lg overflow-hidden border border-primary-dark/5 shadow-lg group relative hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 bg-primary-dark text-gold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full z-10 font-sans">
                {room.badge}
              </span>

              {/* Image Wrap */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image 
                  src={room.image} 
                  alt={room.title}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Details */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-serif text-primary-dark">{room.title}</h3>
                  <div className="flex text-gold text-[10px]">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-primary-dark/60 font-sans leading-relaxed mb-6 font-light">
                  {room.desc}
                </p>

                {/* Specs */}
                <div className="flex gap-4 border-b border-primary-dark/10 pb-6 mb-6">
                  <div className="flex items-center gap-1.5 text-xs text-primary-dark/60">
                    <Maximize className="w-3.5 h-3.5 text-gold" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary-dark/60">
                    <Users className="w-3.5 h-3.5 text-gold" />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary-dark/60">
                    <Wifi className="w-3.5 h-3.5 text-gold" />
                    <span>Free Wifi</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-serif font-light text-primary-dark">₹{room.price}</span>
                    <span className="text-[10px] uppercase tracking-widest text-primary-dark/40 font-sans block">per night</span>
                  </div>
                  <a 
                    href="#booking"
                    className="magnetic text-xs uppercase tracking-widest text-gold font-semibold hover:text-primary-dark transition-colors group flex items-center gap-1.5"
                  >
                    Reserve Suite 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Accommodations */}
        <div className="text-center mt-16">
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#booking"
            className="inline-flex items-center justify-center border border-primary-dark/30 hover:border-primary-dark text-primary-dark font-sans px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            View All Accommodations
          </motion.a>
        </div>

      </div>
    </section>
  );
}
