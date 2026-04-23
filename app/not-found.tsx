"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Home, Mail, AlertTriangle } from "lucide-react";

export default function NotFoundPage() {
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
              {/* 404 Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6"
              >
                <span className="font-serif text-8xl sm:text-9xl font-bold text-emerald-primary/20">
                  404
                </span>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-primary/10 rounded-full mb-8"
              >
                <AlertTriangle className="w-4 h-4 text-emerald-primary" />
                <span className="text-sm font-semibold text-emerald-primary uppercase tracking-wider">
                  Page Not Found
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Oops! This Page Doesn&apos;t Exist
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                The page you are looking for might have been moved, deleted, or
                never existed. Let us help you get back on track.
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
