"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  { src: "/gallery/gallery-1.jpeg", alt: "Event Setup" },
  { src: "/gallery/gallery-2.jpeg", alt: "Stage Design" },
  { src: "/gallery/gallery-3.jpeg", alt: "Lighting Setup" },
  { src: "/gallery/gallery-4.jpeg", alt: "Event Production" },
  { src: "/gallery/gallery-5.jpeg", alt: "Sound System" },
  { src: "/gallery/gallery-6.jpeg", alt: "Corporate Event" },
  { src: "/gallery/gallery-7.jpeg", alt: "Branding Setup" },
  { src: "/gallery/gallery-8.jpeg", alt: "Wedding Event" },
  { src: "/gallery/gallery-9.jpeg", alt: "Concert Setup" },
];

export default function Gallery() {
  // Duplicate images for seamless infinite loop
  const doubledImages = [...galleryImages, ...galleryImages];

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
      </div>

      {/* Auto-scrolling Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full"
      >
        {/* Right fade only */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {doubledImages.map((image, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[280px] sm:w-[320px]"
            >
              <div className="relative h-[200px] sm:h-[240px] rounded-2xl overflow-hidden shadow-lg bg-slate-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* View Full Gallery CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-navy-dark hover:bg-navy-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          View Full Gallery
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
