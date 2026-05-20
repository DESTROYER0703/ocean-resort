"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="bg-primary-dark py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Details Left */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4"
            >
              Contact Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-light text-pearl mb-6 leading-tight"
            >
              Connect With Our Concierge
            </motion.h2>
            <p className="text-pearl/80 font-sans font-light tracking-wide leading-relaxed mb-8">
              Whether arranging a helicopter transit, requesting dietary modifications, or inquiring about private charters, our guest experience team is at your disposal 24/7.
            </p>

            {/* Address cards */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-gold/10 border border-gold/20 rounded-lg text-gold mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-pearl font-semibold">Resort Location</h4>
                  <p className="text-xs text-pearl/50 leading-relaxed font-sans mt-1">
                    Fatehpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-gold/10 border border-gold/20 rounded-lg text-gold mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-pearl font-semibold">Bespoke Line</h4>
                  <p className="text-xs text-pearl/50 leading-relaxed font-sans mt-1">
                    +91 8573890894 (Private Booking & Concierge)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-gold/10 border border-gold/20 rounded-lg text-gold mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-pearl font-semibold">Direct Email</h4>
                  <p className="text-xs text-pearl/50 leading-relaxed font-sans mt-1">
                    concierge@oceanresort.com
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Message Link */}
            <a 
              href="https://wa.me/918573890894" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-max bg-[#25D366] text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(37,211,102,0.2)]"
            >
              <Send className="w-4 h-4" /> Message WhatsApp Concierge
            </a>
          </div>

          {/* Map Right (Dark Stylized Map Mockup) */}
          <div className="lg:col-span-7 relative h-[350px] md:h-[500px] w-full rounded-lg overflow-hidden border border-glass-border shadow-2xl">
            {/* Real Interactive Map Frame in dark mode */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114510.98595914619!2d80.75704987518596!3d25.920807759556857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c15858cf09c73%3A0xe54d868953185317!2sFatehpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716200000000!5m2!1sen!2sin" 
              className="w-full h-full border-none grayscale invert"
              allowFullScreen 
              loading="lazy"
            />
            {/* Custom map pin badge */}
            <div className="absolute top-4 left-4 bg-primary-dark/90 border border-glass-border px-3 py-1.5 rounded text-[10px] uppercase tracking-widest text-gold font-sans pointer-events-none">
              📍 Fatehpur, Uttar Pradesh, India
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
