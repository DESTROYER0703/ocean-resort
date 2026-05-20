"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Sunset Dolphin Cruise 🐬",
    duration: "2 Hours",
    price: "₹5,000",
    image: "https://images.unsplash.com/photo-1607590812739-0112469eb070?q=80&w=800&auto=format&fit=crop",
    size: "large",
  },
  {
    title: "Deep Sea Snorkeling 🤿",
    duration: "3 Hours",
    price: "₹3,500",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop",
    size: "small",
  },
  {
    title: "Private Beach Bonfire 🔥",
    duration: "Evening",
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1533202941019-218a5f36e4f6?q=80&w=600&auto=format&fit=crop",
    size: "small",
  },
  {
    title: "Sunrise Kayaking 🛶",
    duration: "1.5 Hours",
    price: "₹2,500",
    image: "https://images.unsplash.com/photo-1518099074172-2e47ee6cb394?q=80&w=600&auto=format&fit=crop",
    size: "small",
  },
  {
    title: "Island Hopping Tour 🏝",
    duration: "Half Day",
    price: "₹7,500",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=600&auto=format&fit=crop",
    size: "small",
  }
];

export default function Activities() {
  return (
    <section 
      id="experiences" 
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
            Curated Escapes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-light text-primary-dark mb-4"
          >
            Bespoke Experiences
          </motion.h2>
          <div className="w-24 h-[1px] bg-primary-dark/20 mx-auto mt-6" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {activities.map((act, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`relative rounded-lg overflow-hidden border border-primary-dark/5 shadow-md group ${
                act.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <Image 
                src={act.image} 
                alt={act.title}
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlay (gradient) */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover CTA Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <a 
                  href="#booking"
                  className="bg-pearl text-primary-dark hover:bg-gold hover:text-primary px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl"
                >
                  Book Experience
                </a>
              </div>

              {/* Details Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 flex flex-col justify-end">
                <h3 className={`font-serif text-pearl leading-tight mb-2 ${
                  act.size === "large" ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
                }`}>
                  {act.title}
                </h3>
                <div className="flex justify-between items-center text-xs text-pearl/70 font-sans tracking-wide">
                  <span>Duration: {act.duration}</span>
                  <span className="text-gold font-serif font-light text-sm">{act.price}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
