"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Certificates from "../components/Certificates";
import { Target, Eye, Heart, Award, Shield, Leaf, Users, TrendingUp } from "lucide-react";

const values = [
  { icon: Award, title: "Professionalism", description: "Maintaining the highest standards in every aspect of our service." },
  { icon: Heart, title: "Customer Satisfaction", description: "Putting our clients' needs first and exceeding expectations." },
  { icon: Shield, title: "Safety & Responsibility", description: "Ensuring safe operations at every event we handle." },
  { icon: Leaf, title: "Environmental Awareness", description: "Committed to sustainable and eco-friendly practices." },
  { icon: Users, title: "Team Growth", description: "Investing in our people to deliver better results." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-navy-dark overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Hero.jpg"
              alt="Background"
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
                  About Us
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                About PERAMIHO EVENTS AND DESIGNING
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <Image
                    src="/istockphoto-2021242696-612x612.jpg"
                    alt="Event Production"
                    width={600}
                    height={500}
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-emerald-primary p-8 rounded-2xl shadow-xl">
                    <p className="text-4xl font-bold text-white">2011</p>
                    <p className="text-white/80">Established</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-dark mb-6">
                  Your Trusted Event Partner in Tanzania
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    PERAMIHO EVENTS AND DESIGNING is a Tanzanian-owned company specializing
                    in event production, equipment rental, and event support services. Since
                    its establishment in 2011, the company has grown rapidly to become a
                    trusted provider in the Dar es Salaam region and beyond.
                  </p>
                  <p>
                    Officially registered on 6th April 2016, the company operates with full
                    compliance including TIN and business licenses. We are 100% citizen-owned
                    and committed to delivering professional services across Tanzania.
                  </p>
                  <p>
                    Our team combines technical expertise and industry experience to deliver
                    high-quality services tailored to each client&apos;s needs.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-3xl shadow-lg"
              >
                <div className="w-16 h-16 bg-emerald-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-emerald-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-dark mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To become the leading event equipment and production company in Tanzania,
                  known for quality, innovation, and reliability. We aim to set the standard
                  for event production excellence across East Africa.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-lg"
              >
                <div className="w-16 h-16 bg-emerald-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-emerald-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-dark mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To deliver consistent, high-quality event services while creating value
                  for our clients and maintaining professional excellence. We are committed
                  to making every event memorable and successful.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-navy-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-4xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-white/70">
                The principles that guide everything we do at PERAMIHO Events and Designing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <value.icon className="w-10 h-10 text-emerald-primary mb-4" />
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/60">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-emerald-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "13+", label: "Years Experience" },
                { number: "1000+", label: "Events Completed" },
                { number: "2", label: "Locations" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </p>
                  <p className="text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Certificates />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
