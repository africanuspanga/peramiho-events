"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const galleryImages = [
  { src: "/gallery/gallery-1.jpeg", alt: "Event Setup", category: "Event Production" },
  { src: "/gallery/gallery-2.jpeg", alt: "Stage Design", category: "Staging & Lighting" },
  { src: "/gallery/gallery-3.jpeg", alt: "Lighting Setup", category: "Staging & Lighting" },
  { src: "/gallery/gallery-4.jpeg", alt: "Event Production", category: "Event Production" },
  { src: "/gallery/gallery-5.jpeg", alt: "Sound System", category: "Sound Systems" },
  { src: "/gallery/gallery-6.jpeg", alt: "Corporate Event", category: "Corporate Events" },
  { src: "/gallery/gallery-7.jpeg", alt: "Branding Setup", category: "Branding & Decor" },
  { src: "/gallery/gallery-8.jpeg", alt: "Wedding Event", category: "Weddings" },
  { src: "/gallery/gallery-9.jpeg", alt: "Concert Setup", category: "Concerts" },
  { src: "/gallery/about-us-section.jpeg", alt: "PERAMIHO Events Team", category: "Behind the Scenes" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-32 bg-navy-dark overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Hero.jpg"
              alt="Gallery"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 to-navy-dark" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-primary rounded-full" />
                <span className="text-sm font-semibold text-emerald-primary uppercase tracking-wider">
                  Portfolio
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Our Gallery
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                A visual showcase of events we have produced across Tanzania.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-200">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block px-2.5 py-1 bg-emerald-primary/90 text-white text-xs font-medium rounded-md mb-2">
                        {image.category}
                      </span>
                      <p className="text-white font-semibold">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
