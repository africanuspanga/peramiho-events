"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Raphael Msuya",
    role: "Event Organizer",
    content: "PERAMIHO handled our event professionally. The sound and lighting were perfect. Their team was punctual and very cooperative throughout the entire event.",
    rating: 5,
  },
  {
    name: "Salma Ahmed",
    role: "Wedding Planner",
    content: "Very reliable team. Everything was delivered and set up on time. The quality of their equipment and the professionalism of their staff exceeded our expectations.",
    rating: 5,
  },
  {
    name: "John Kimaro",
    role: "Corporate Client",
    content: "Best event service provider in Dar es Salaam. Highly recommended for any corporate event. Their attention to detail and customer service is unmatched.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
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
              Testimonials
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy-dark mb-6">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-slate-50 rounded-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-emerald-primary rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-emerald-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
