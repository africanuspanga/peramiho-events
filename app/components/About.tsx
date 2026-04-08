"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Established in 2011, registered 2016",
  "100% Tanzanian citizen-owned",
  "Two locations: Chang'ombe & Buza",
  "Full compliance with TIN & licenses",
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image - Using gallery/about-us-section.jpeg */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/gallery/about-us-section.jpeg"
                  alt="PERAMIHO Events Team"
                  width={600}
                  height={700}
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-emerald-primary">
                      15+
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Years of</p>
                    <p className="text-lg font-bold text-navy-dark">
                      Excellence
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-emerald-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 left-1/4 w-32 h-32 bg-emerald-primary/5 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-primary/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-primary rounded-full" />
              <span className="text-sm font-semibold text-emerald-primary uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark mb-6 leading-tight">
              About PERAMIHO EVENTS AND DESIGNING
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                PERAMIHO EVENTS AND DESIGNING is a leading event production and
                equipment rental company based in Dar es Salaam, Tanzania.
                Established in 2011 and officially registered in 2016, we
                specialize in delivering complete event solutions including sound
                systems, lighting, staging, branding, and more.
              </p>
              <p>
                With headquarters in Chang&apos;ombe Maduka Mawili and a branch in
                Buza Mnarani, we serve clients across Tanzania with a strong focus
                on quality, reliability, and professionalism. Our experienced team
                ensures every event runs smoothly from setup to completion.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-emerald-primary font-semibold hover:text-emerald-dark transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
