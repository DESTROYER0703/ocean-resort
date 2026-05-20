"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Users, Home, Award } from "lucide-react";

export default function Booking() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("Ocean View Suite");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 5000);
  };

  return (
    <section 
      id="booking" 
      className="bg-pearl text-primary-dark py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-primary-dark/60 font-sans font-semibold mb-3 block"
          >
            Reservations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-light text-primary-dark mb-4"
          >
            Begin Your Coastal Escape
          </motion.h2>
          <p className="text-sm text-primary-dark/60 font-sans tracking-wide max-w-md mx-auto mt-4 font-light">
            Inquire about our private suites or request a bespoke vacation itinerary curated by our concierge.
          </p>
        </div>

        {/* Booking Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-primary-dark/10 shadow-2xl rounded-xl p-8 md:p-12 relative overflow-hidden"
        >
          {bookingSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <span className="text-4xl mb-4 block">⚜️</span>
              <h3 className="text-2xl font-serif text-primary-dark mb-2">Inquiry Submitted</h3>
              <p className="text-sm text-primary-dark/65 max-w-md mx-auto font-sans font-light leading-relaxed">
                Thank you for choosing Ocean Resort. Your private reservation executive will contact you via email/phone within 2 hours to finalize your luxury escape.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Check In */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary-dark/50 font-sans font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold" /> Check-in Date
                  </label>
                  <input 
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="border border-primary-dark/10 bg-pearl/20 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-gold text-primary-dark"
                  />
                </div>

                {/* Check Out */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary-dark/50 font-sans font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold" /> Check-out Date
                  </label>
                  <input 
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="border border-primary-dark/10 bg-pearl/20 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-gold text-primary-dark"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Room Picker */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary-dark/50 font-sans font-semibold flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-gold" /> Suite Selection
                  </label>
                  <select 
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="border border-primary-dark/10 bg-white rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-gold text-primary-dark"
                  >
                    <option>Ocean View Suite</option>
                    <option>Beachfront Villa</option>
                    <option>Presidential Suite</option>
                  </select>
                </div>

                {/* Guests */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary-dark/50 font-sans font-semibold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gold" /> Guests
                  </label>
                  <select 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="border border-primary-dark/10 bg-white rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-gold text-primary-dark"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-primary text-gold hover:bg-primary-dark hover:text-gold-light py-4 rounded-lg text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(10,22,40,0.15)] flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4" /> Request Private Booking
              </button>

            </form>
          )}

          {/* Secure Guarantee Tag */}
          <div className="text-center mt-6 text-[10px] uppercase tracking-widest text-primary-dark/40 font-sans flex items-center justify-center gap-2">
            🛡️ Your inquiry is secure & encrypted. Best Rate Guarantee.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
