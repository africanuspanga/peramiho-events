"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      href="https://wa.me/255655920515"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <span className="text-sm font-medium text-navy-dark">Chat on WhatsApp</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
      </div>

      {/* Button with WhatsApp Image */}
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }} />
        
        {/* Main Button with WhatsApp PNG */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 bg-white">
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            fill
            className="object-contain p-1"
          />
        </div>
      </div>
    </motion.a>
  );
}
