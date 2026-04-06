"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Heart, Music, Building2, PartyPopper, ArrowRight } from "lucide-react";
import Link from "next/link";

const eventTypes = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Make your special day unforgettable with our comprehensive wedding services. From elegant lighting to crystal-clear sound systems, we handle every detail.",
    image: "/chandelier-with-flowers-greenery-hangs-dinner-table.jpg",
    features: ["Romantic lighting design", "Premium sound systems", "Elegant staging", "Photo booth rentals"],
  },
  {
    icon: Music,
    title: "Concerts & Live Shows",
    description: "Professional production for concerts, live performances, and music events. We provide the technical expertise to make your show spectacular.",
    image: "/Event-Lighting.jpg",
    features: ["Concert-grade PA systems", "Stage lighting rigs", "LED video walls", "Backline equipment"],
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Impress your stakeholders with professionally executed corporate events, conferences, and product launches.",
    image: "/empty-seats-row-convention-center.jpg",
    features: ["Conference AV systems", "Presentation equipment", "Branding solutions", "Live streaming"],
  },
  {
    icon: PartyPopper,
    title: "Festivals & Private Parties",
    description: "From intimate gatherings to large festivals, we create the perfect atmosphere for celebration.",
    image: "/istockphoto-1400794599-612x612.jpg",
    features: ["Festival staging", "Outdoor tent solutions", "DJ equipment", "Decorative lighting"],
  },
];

const galleryImages = [
  { src: "/istockphoto-2021242696-612x612.jpg", alt: "Event Setup" },
  { src: "/istockphoto-2178715155-612x612.jpg", alt: "Stage Design" },
  { src: "/istockphoto-2216677600-612x612.jpg", alt: "Lighting Show" },
  { src: "/istockphoto-2220690051-612x612.jpg", alt: "Corporate Event" },
  { src: "/istockphoto-2226906619-612x612.jpg", alt: "Wedding Setup" },
  { src: "/istockphoto-2227771828-612x612.jpg", alt: "Concert Production" },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-32 bg-navy-dark overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Hero.jpg"
              alt="Events"
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
                  Our Events
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Events We Create
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                From intimate gatherings to large-scale productions, we bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {eventTypes.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-emerald-primary rounded-xl flex items-center justify-center">
                      <event.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-bold text-navy-dark mb-3">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-emerald-primary/10 text-emerald-primary text-sm font-medium rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-4xl font-bold text-navy-dark mb-6">
                Event Gallery
              </h2>
              <p className="text-slate-600">
                A glimpse of events we&apos;ve had the privilege to be part of.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/40 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-emerald-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Plan Your Event?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let&apos;s discuss how we can make your next event extraordinary.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-primary font-bold rounded-full hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Start Planning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
