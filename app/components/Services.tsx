"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Volume2, Lightbulb, Tent, Palette, Monitor, Camera, Utensils, Package } from "lucide-react";

const services = [
  {
    icon: Volume2,
    title: "Sound Systems (PA)",
    description: "Heavy-duty digital sound systems and mini sound systems for all event sizes.",
    image: "/istockphoto-2021242696-612x612.jpg",
  },
  {
    icon: Lightbulb,
    title: "Stages & Lighting",
    description: "Aluminium stages, VIP platforms, and professional lighting setups.",
    image: "/Event-Lighting.jpg",
  },
  {
    icon: Tent,
    title: "Tents & Structures",
    description: "Marquee tents (20x5, 15x5, 10x5) and pagoda tents for all occasions.",
    image: "/istockphoto-458865833-612x612.jpg",
  },
  {
    icon: Palette,
    title: "Branding & Decorations",
    description: "Banners, VIP setups, carpets, and floral decorations.",
    image: "/chandelier-with-flowers-greenery-hangs-dinner-table.jpg",
  },
  {
    icon: Monitor,
    title: "LED Screens",
    description: "Indoor and outdoor LED screen installations for events.",
    image: "/gallery/gallery-6.jpeg",
  },
  {
    icon: Camera,
    title: "Videography & Photography",
    description: "Professional video coverage, photography, and albums.",
    image: "/istockphoto-2216677600-612x612.jpg",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Complete catering solutions for events of any size.",
    image: "/istockphoto-1400794599-612x612.jpg",
  },
  {
    icon: Package,
    title: "Equipment Hiring",
    description: "Chairs, tables, generators, and mobile toilets (VIP & public).",
    image: "/empty-seats-row-convention-center.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-primary/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-primary rounded-full" />
            <span className="text-sm font-semibold text-emerald-primary uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy-dark mb-6">
            Everything You Need for a Perfect Event
          </h2>
          <p className="text-slate-600 text-lg">
            From sound and lighting to full event production, we provide comprehensive
            solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-emerald-primary rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy-dark mb-2 group-hover:text-emerald-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-navy-dark hover:bg-navy-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
