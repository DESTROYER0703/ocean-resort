"use client";

import { motion } from "framer-motion";
import { Compass, Shield, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function About() {
  const [counts, setCounts] = useState({ years: 0, suites: 0, reviews: 0, coves: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds
          const steps = 50;
          const stepTime = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            setCounts({
              years: Math.floor((15 / steps) * step),
              suites: Math.floor((50 / steps) * step),
              reviews: Math.floor((500 / steps) * step),
              coves: Math.floor((3 / steps) * step),
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounts({ years: 15, suites: 50, reviews: 500, coves: 3 });
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative bg-primary py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Quote Strip */}
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="font-serif italic text-2xl md:text-4xl text-pearl/90 leading-relaxed relative"
          >
            <span className="absolute -top-10 left-0 md:-left-10 text-6xl md:text-8xl text-gold/15 pointer-events-none font-serif">“</span>
            An escape crafted for those who seek the extraordinary — where the rhythm of the ocean becomes your heartbeat.
            <span className="absolute -bottom-16 right-0 md:-right-10 text-6xl md:text-8xl text-gold/15 pointer-events-none font-serif">”</span>
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 md:mb-32 text-center">
          {[
            { value: counts.years, label: "Years of Excellence", suffix: "+" },
            { value: counts.suites, label: "Luxury Suites & Villas", suffix: "" },
            { value: counts.reviews, label: "Five-Star Reviews", suffix: "+" },
            { value: counts.coves, label: "Private Beach Coves", suffix: "" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="glass-panel p-6 rounded-lg"
            >
              <h3 className="text-4xl md:text-5xl font-serif text-gold mb-2">
                {stat.value}{stat.suffix}
              </h3>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-pearl/60 font-sans">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Split Details Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Visual Showcase (Images Overlay) */}
          <div className="lg:col-span-6 relative h-[400px] md:h-[550px] w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="absolute left-0 top-0 w-[80%] h-[85%] rounded-lg overflow-hidden border border-glass-border shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" 
                alt="Ocean Resort Overview"
                fill
                className="object-cover scale-105"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute right-0 bottom-0 w-[50%] h-[55%] rounded-lg overflow-hidden border-4 border-primary shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop" 
                alt="Luxury Lounge Pool"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Copywriting */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4"
            >
              Our Story
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-light text-pearl mb-6 leading-tight"
            >
              A Legacy of Pure Beachfront Splendor
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pearl/80 font-sans font-light tracking-wide leading-relaxed mb-6"
            >
              Since our establishment in 2009, Ocean Resort has redefined the limits of coastal opulence. Framed by whispering coconut palms and the deep blue Arabian Sea, we provide an sanctuary tailored specifically to travelers seeking absolute seclusion and bespoke hospitality.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pearl/70 font-sans font-light tracking-wide leading-relaxed mb-8"
            >
              Every detail is meticulously planned to work in absolute harmony with the surrounding ocean ecosystem, ensuring a sustainable luxury experience that respects the natural environment.
            </motion.p>

            {/* Icon highlights */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Compass, title: "UNESCO Coastal Location", desc: "Bordering protected coastal reserves." },
                { icon: Shield, title: "Absolute Exclusivity", desc: "Private access restricted entirely to registered guests." },
                { icon: Award, title: "Award Winning Wellness", desc: "Ranked India's top luxury spa destination." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2 bg-gold/15 border border-gold/30 rounded-lg text-gold mt-1">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-pearl font-semibold">{item.title}</h4>
                    <p className="text-xs text-pearl/50">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="#booking"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold hover:text-gold-light transition-colors group w-max"
            >
              Discover Our Heritage 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
