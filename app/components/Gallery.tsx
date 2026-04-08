"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "/local images/WhatsApp Image 2026-04-08 at 12.54.03.jpeg", alt: "Event Setup" },
  { src: "/local images/WhatsApp Image 2026-04-08 at 12.54.06 (1).jpeg", alt: "Stage Design" },
  { src: "/local images/WhatsApp Image 2026-04-08 at 12.54.06.jpeg", alt: "Lighting Setup" },
  { src: "/local images/WhatsApp Image 2026-04-08 at 12.56.08.jpeg", alt: "Event Production" },
  { src: "/local images/WhatsApp Image 2026-04-08 at 12.56.18.jpeg", alt: "Sound System" },
  { src: "/local images/WhatsApp Image 2026-04-08 at 12.56.20 (1).jpeg", alt: "Corporate Event" },
  { src: "/local images/WhatsApp Image 2026-04-08 at 12.56.20.jpeg", alt: "Branding Setup" },
  { src: "/local images/WhatsApp Image 2026-04-08 at 12.56.22.jpeg", alt: "Wedding Event" },
  { src: "/local images/WhatsApp Image 2026-04-08 at 12.56.24.jpeg", alt: "Concert Setup" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-primary/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-primary rounded-full" />
            <span className="text-sm font-semibold text-emerald-primary uppercase tracking-wider">
              Our Work
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
            Gallery
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Browse through our portfolio of successful events and setups across Tanzania.
          </p>
        </motion.div>

        {/* Scrolling Gallery Container */}
        <div className="relative">
          {/* Gradient Overlays for Scroll Indication */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Images */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
          >
            <div className="flex gap-6 w-max">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative flex-shrink-0 w-[280px] sm:w-[320px]"
                >
                  <div className="relative h-[200px] sm:h-[240px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium text-sm">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Scroll Hint */}
          <p className="text-center text-slate-400 text-sm mt-4 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Swipe or scroll to see more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
}
