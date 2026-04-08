"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { 
  Volume2, Lightbulb, Tent, Palette, 
  Monitor, Camera, Utensils, Package,
  CheckCircle2, ArrowRight
} from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    icon: Volume2,
    title: "Sound Systems",
    description: "Professional audio solutions for events of any size",
    image: "/gallery/gallery-5.jpeg",
    items: [
      "Heavy-duty digital sound systems",
      "Mini sound systems for intimate gatherings",
      "Wireless microphone systems",
      "DJ equipment and mixers",
      "Stage monitors and speakers",
    ],
  },
  {
    icon: Lightbulb,
    title: "Staging & Lighting",
    description: "Create the perfect ambiance and stage setup",
    image: "/Event-Lighting.jpg",
    items: [
      "Aluminium performance stages",
      "VIP platforms and risers",
      "LED and intelligent lighting systems",
      "Spotlights and moving heads",
      "Stage backdrops and curtains",
    ],
  },
  {
    icon: Tent,
    title: "Tents & Structures",
    description: "Weather-resistant structures for outdoor events",
    image: "/istockphoto-458865833-612x612.jpg",
    items: [
      "Marquee tents (20x5, 15x5, 10x5)",
      "Pagoda tents for elegant events",
      "Clear span structures",
      "Tent flooring and carpeting",
      "Sidewalls and accessories",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Decorations",
    description: "Transform your venue with professional decor",
    image: "/chandelier-with-flowers-greenery-hangs-dinner-table.jpg",
    items: [
      "Custom banners and backdrops",
      "VIP lounge setups",
      "Red carpets and aisle runners",
      "Floral arrangements and centerpieces",
      "Themed decorations",
    ],
  },
  {
    icon: Monitor,
    title: "LED Screens",
    description: "High-definition displays for maximum impact",
    image: "/gallery/gallery-2.jpeg",
    items: [
      "Indoor LED video walls",
      "Outdoor LED screens",
      "LED posters and digital signage",
      "Live streaming setup",
      "Custom content playback",
    ],
  },
  {
    icon: Camera,
    title: "Media Services",
    description: "Capture every moment professionally",
    image: "/gallery/gallery-9.jpeg",
    items: [
      "Professional videography",
      "Event photography",
      "Photo booth rentals",
      "Live streaming services",
      "Video editing and albums",
    ],
  },
  {
    icon: Utensils,
    title: "Catering & Exhibition",
    description: "Complete catering and exhibition solutions",
    image: "/istockphoto-1400794599-612x612.jpg",
    items: [
      "Full-service catering",
      "Exhibition booth setups",
      "Food service equipment",
      "Beverage stations",
      "Table settings and linens",
    ],
  },
  {
    icon: Package,
    title: "Equipment Hiring",
    description: "Essential equipment for any event",
    image: "/empty-seats-row-convention-center.jpg",
    items: [
      "Chairs and tables (various styles)",
      "VIP chairs and sofas",
      "Portable generators",
      "Mobile toilets (VIP & public)",
      "Cooling fans and AC units",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-32 bg-navy-dark overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Event-Lighting.jpg"
              alt="Services"
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
                  Our Services
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Comprehensive Event Solutions
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                From concept to execution, we provide everything you need for a successful event.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {serviceCategories.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 w-14 h-14 bg-emerald-primary rounded-xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-dark mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-primary flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-dark mb-6">
                Need a Custom Package?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Contact us to discuss your specific requirements. We create tailored
                solutions for events of all sizes and types.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-primary hover:bg-emerald-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Get in Touch
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
