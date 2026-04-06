"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    items: ["+255 755 920 515", "+255 655 920 515"],
    href: "tel:+255755920515",
  },
  {
    icon: Mail,
    title: "Email",
    items: ["peramihoevents@gmail.com"],
    href: "mailto:peramihoevents@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    items: ["Chang'ombe Maduka Mawili", "Dar es Salaam, Tanzania"],
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    items: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: By Appointment"],
    href: "#",
  },
];

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Concert",
  "Birthday Party",
  "Conference",
  "Festival",
  "Private Party",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-32 bg-navy-dark overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/istockphoto-2263477156-612x612.jpg"
              alt="Contact"
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
                  Contact Us
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Ready to plan your next event? We&apos;re here to help bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-3xl font-bold text-navy-dark mb-6">
                  Contact Information
                </h2>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  Reach out to us through any of the following channels. Our team is ready
                  to assist you with your event planning needs.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-emerald-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-emerald-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-dark mb-1">
                          {info.title}
                        </h3>
                        {info.items.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={info.href}
                            className="block text-slate-600 hover:text-emerald-primary transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.72884360215!2d39.2675!3d-6.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd5452d5e6c75%3A0x6c5b5e5e5e5e5e5e!2sChang'ombe%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-slate-50 p-8 lg:p-10 rounded-3xl">
                  <h2 className="font-serif text-2xl font-bold text-navy-dark mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Fill out the form below and we&apos;ll get back to you shortly.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 bg-emerald-primary rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-navy-dark mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-slate-600">
                        Thank you for contacting us. We&apos;ll respond soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 outline-none transition-all"
                            placeholder="+255 XXX XXX XXX"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 outline-none transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium text-slate-700 mb-2">
                          Event Type
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select event type</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 outline-none transition-all resize-none"
                          placeholder="Tell us about your event..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-primary hover:bg-emerald-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
                      >
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
