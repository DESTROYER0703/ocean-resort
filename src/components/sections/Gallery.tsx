"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import Image from "next/image";

const items = [
  {
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Pool",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Activities",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Pool",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop",
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Rooms", "Pool", "Dining", "Activities"];

  const filteredItems = filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <section 
      id="gallery" 
      className="bg-primary-dark py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-3 block"
          >
            Visual Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-light text-pearl mb-4"
          >
            Life at Ocean Resort
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-widest font-sans font-semibold transition-colors py-2 px-4 rounded-full border ${
                filter === cat 
                  ? "bg-gold text-primary border-gold" 
                  : "bg-transparent text-pearl/60 border-glass-border hover:text-pearl"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                key={`${item.image}-${idx}`}
                className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden border border-glass-border group cursor-pointer shadow-lg"
              >
                <Image 
                  src={item.image} 
                  alt={item.category}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-gold text-primary rounded-full hover:scale-110 transition-transform duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Outline Button */}
        <div className="text-center mt-16">
          <button className="magnetic border border-gold text-gold hover:bg-gold hover:text-primary px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors duration-300">
            Load More Images
          </button>
        </div>

      </div>
    </section>
  );
}
