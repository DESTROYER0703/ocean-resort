"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    time: "07:00 AM",
    title: "Sunrise Yoga",
    desc: "A private yoga and mindfulness session on the beach, guided by ashram elders.",
  },
  {
    time: "12:00 PM",
    title: "Infinity Pool Lounge",
    desc: "Soak in custom cocktail creations while floating in Goa's largest heated saltwater infinity pool.",
  },
  {
    time: "04:00 PM",
    title: "Sanctuary Spa Treatment",
    desc: "A custom 90-minute Ayurvedic body scrub and hot oil massage to restore deep vitality.",
  },
  {
    time: "06:30 PM",
    title: "Sunset Yacht Cruise",
    desc: "Sip fine vintages on our private catamaran as the sun sinks below the horizon.",
  },
  {
    time: "09:00 PM",
    title: "Candlelit Beach Dining",
    desc: "A private chef's dinner served on our secluded sands under a canopy of stars.",
  }
];

export default function Timeline() {
  return (
    <section 
      id="experience-timeline" 
      className="bg-pearl text-primary-dark py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-primary-dark/60 font-sans font-semibold mb-3 block"
          >
            A Day In Paradise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-light text-primary-dark mb-4"
          >
            The Perfect Coastal Day
          </motion.h2>
          <div className="w-24 h-[1px] bg-primary-dark/20 mx-auto mt-6" />
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-[38px] left-[20px] md:left-[30px] right-0 bottom-0 md:bottom-auto md:w-full h-full md:h-[2px] bg-primary-dark/10 -z-10" />

          {/* Cards Flex */}
          <div className="flex flex-col md:flex-row justify-between gap-12 relative z-10 overflow-x-auto pb-10 scrollbar-thin">
            {timelineEvents.map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex-grow flex-shrink-0 w-full md:w-[220px] flex flex-col items-start md:items-center text-left md:text-center px-4"
              >
                {/* Time Indicator Bubble */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center text-primary-dark font-serif text-xs md:text-sm font-semibold mb-6 shadow-md hover:bg-gold hover:text-primary transition-colors duration-300">
                  {event.time.split(" ")[0]}
                </div>
                
                <h3 className="font-serif text-lg md:text-xl text-primary-dark mb-3">
                  {event.title}
                </h3>
                <p className="text-xs md:text-sm text-primary-dark/70 leading-relaxed font-sans font-light">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
