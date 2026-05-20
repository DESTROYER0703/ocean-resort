"use client";

import { motion } from "framer-motion";
import { Mail, Shield } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="bg-primary-dark border-t border-glass-border pt-20 pb-12 font-sans relative overflow-hidden">
      
      {/* Newsletter Strip */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="glass-panel p-8 md:p-12 rounded-xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h3 className="text-2xl font-serif text-gold mb-2">Subscribe to Aura</h3>
            <p className="text-xs text-pearl/50 uppercase tracking-widest leading-relaxed max-w-sm">
              Receive private invitations, seasonal offers, and resort updates directly to your inbox.
            </p>
          </div>

          <div className="w-full md:w-auto flex-grow max-w-md">
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gold text-xs uppercase tracking-widest font-semibold py-3"
              >
                ✓ Invitation Sent. Welcome to Aura.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
                <input 
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-primary border border-glass-border rounded-full px-5 py-3.5 text-xs text-pearl placeholder-pearl/30 focus:outline-none focus:border-gold transition-colors"
                />
                <button 
                  type="submit"
                  className="bg-gold text-primary hover:bg-gold-light rounded-full px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-gold font-serif text-xl uppercase tracking-widest font-medium mb-6">
            Ocean Resort
          </h4>
          <p className="text-xs text-pearl/50 leading-relaxed tracking-wide mb-6">
            Where the Arabian Sea meets unmatched luxury. Experience bespoke hospitality curated for the discerning traveler.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 text-pearl/50">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-glass-border hover:border-gold hover:text-gold transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-glass-border hover:border-gold hover:text-gold transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full border border-glass-border hover:border-gold hover:text-gold transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-pearl font-serif text-sm uppercase tracking-widest font-medium mb-6">
            Explore
          </h4>
          <ul className="space-y-3 text-xs text-pearl/50 tracking-wider">
            <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-gold transition-colors">Heritage</a></li>
            <li><a href="#accommodations" className="hover:text-gold transition-colors">Suites & Villas</a></li>
            <li><a href="#experiences" className="hover:text-gold transition-colors">Experiences</a></li>
          </ul>
        </div>

        {/* Wellness */}
        <div>
          <h4 className="text-pearl font-serif text-sm uppercase tracking-widest font-medium mb-6">
            Wellness & Dining
          </h4>
          <ul className="space-y-3 text-xs text-pearl/50 tracking-wider">
            <li><a href="#spa" className="hover:text-gold transition-colors">Ayurvedic Spa</a></li>
            <li><a href="#dining" className="hover:text-gold transition-colors">Michelin Dining</a></li>
            <li><a href="#pool" className="hover:text-gold transition-colors">Infinity Pool</a></li>
            <li><a href="#experiences" className="hover:text-gold transition-colors">Private Charters</a></li>
          </ul>
        </div>

        {/* Legal / Trust */}
        <div>
          <h4 className="text-pearl font-serif text-sm uppercase tracking-widest font-medium mb-6">
            Reservations
          </h4>
          <p className="text-xs text-pearl/50 leading-relaxed mb-4">
            Direct Bookings: +91 8573890894
          </p>
          <div className="flex items-center gap-2 text-[10px] text-gold uppercase tracking-widest border border-gold/20 p-2.5 rounded bg-gold/5">
            <Shield className="w-4 h-4" /> Best Rate Guaranteed
          </div>
        </div>

      </div>

      {/* Copy Strip */}
      <div className="max-w-7xl mx-auto px-6 border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-pearl/40 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Ocean Resort. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
