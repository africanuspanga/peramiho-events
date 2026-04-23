"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { CalendarDays, ArrowLeft, Mail, Home } from "lucide-react";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-navy-dark overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Decorative Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-accent/10 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-primary/10 rounded-full mb-8"
              >
                <CalendarDays className="w-4 h-4 text-emerald-primary" />
                <span className="text-sm font-semibold text-emerald-primary uppercase tracking-wider">
                  Coming Soon
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Events Page{" "}
                <span className="text-emerald-primary">Coming Soon</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                We are curating an exclusive showcase of past and upcoming
                events. Check back soon to explore weddings, corporate events,
                concerts, and festivals powered by PERAMIHO.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-primary hover:bg-emerald-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-primary/30 hover:-translate-y-1"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-dark mb-4">
                What to Expect
              </h2>
              <p className="text-slate-600">
                A visual journey through our most memorable events across
                Tanzania.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Weddings",
                  description:
                    "Stunning wedding setups with elegant lighting, sound, and décor.",
                },
                {
                  title: "Corporate Events",
                  description:
                    "Conferences, product launches, and gala dinners executed flawlessly.",
                },
                {
                  title: "Concerts & Festivals",
                  description:
                    "Large-scale productions with world-class stages and audio-visuals.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-primary/30 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-emerald-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-emerald-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16"
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-emerald-primary font-semibold hover:text-emerald-dark transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Return to Homepage
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
