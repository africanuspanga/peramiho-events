"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Award } from "lucide-react";

const highlights = [
  { icon: Calendar, text: "Since 2011" },
  { icon: MapPin, text: "Nationwide Service" },
  { icon: Award, text: "Full Setup & Support" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/Hero.jpg"
          alt="Event Production"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-accent/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Word Mark Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/Peramiho Events logo.png"
              alt="PERAMIHO Events"
              width={280}
              height={80}
              className="w-auto h-16 sm:h-20"
              priority
            />
          </motion.div>

          {/* Headline - Max 4 words */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Premium <span className="text-emerald-primary">Event</span> Solutions
          </motion.h1>

          {/* Description - Max 12 words */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            Professional event production and equipment rental in Dar es Salaam since 2011.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-primary hover:bg-emerald-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-primary/30 hover:-translate-y-1"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/70"
              >
                <item.icon className="w-5 h-5 text-emerald-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4"
        >
          <div className="glass p-4 rounded-2xl border border-white/20 shadow-2xl animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-primary/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">13+</p>
                <p className="text-sm text-white/70">Years Experience</p>
              </div>
            </div>
          </div>

          <div
            className="glass p-4 rounded-2xl border border-white/20 shadow-2xl animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gold-accent/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-gold-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">1000+</p>
                <p className="text-sm text-white/70">Events Completed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
