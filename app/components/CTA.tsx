"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">
              Let&apos;s Create Something Amazing
            </span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Make Your Event Unforgettable
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s a wedding, concert, corporate event, or private party,
            we have the equipment and expertise to bring your vision to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+255769940569"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-primary font-bold rounded-full hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/255655920515"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-navy-dark text-white font-bold rounded-full hover:bg-navy-light transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
