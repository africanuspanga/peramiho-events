"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Bank of Tanzania", logo: "/client logos/bank-of-tanzania-bot-logo-png_seeklogo-528184-Photoroom.png" },
  { name: "CRDB Bank", logo: "/client logos/crdb-bank-tanzania-logo-png_seeklogo-356585.png" },
  { name: "NMB Bank", logo: "/client logos/nmb-logo.png" },
  { name: "Tanzania Railways", logo: "/client logos/tanzania-railways-corporation-logo-png_seeklogo-556026-1.png" },
  { name: "TRA", logo: "/client logos/tra-logo.png" },
  { name: "TPA", logo: "/client logos/TPA Logo_bg_white.png" },
  { name: "CCM", logo: "/client logos/Logo_of_the_Chama_Cha_Mapinduzi.svg.png" },
  { name: "TIA", logo: "/client logos/Tanzania-Institute-of-Accountancy-Logo.png" },
];

export default function Clients() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-dark mb-4">
            Trusted By Event Organizers Across Tanzania
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We proudly support promoters, wedding planners, corporate organizations,
            and event managers across Dar es Salaam and beyond.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex items-center justify-center p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
