"use client";

import { motion } from "framer-motion";
import { Clock, Award, Users, Headphones, Calendar, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "13+ Years Experience",
    description: "Over a decade of experience in event production across Tanzania.",
  },
  {
    icon: Award,
    title: "Premium Equipment",
    description: "High-quality professional equipment maintained to the highest standards.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Full-service delivery, setup, and support from our experienced team.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Reliable team with technical expertise available around the clock.",
  },
  {
    icon: Calendar,
    title: "Flexible Solutions",
    description: "Customized packages for small gatherings to large-scale events.",
  },
  {
    icon: MapPin,
    title: "Local Presence",
    description: "Strong presence in Dar es Salaam with two convenient locations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-primary rounded-full" />
            <span className="text-sm font-semibold text-emerald-primary uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose PERAMIHO
          </h2>
          <p className="text-white/70 text-lg">
            We bring expertise, quality, and dedication to every event we handle.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-emerald-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-emerald-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-primary/30 transition-colors">
                <reason.icon className="w-7 h-7 text-emerald-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
