"use client";

import { motion } from "framer-motion";
import { FileCheck, Award, Shield, BadgeCheck } from "lucide-react";

const certificates = [
  {
    icon: FileCheck,
    title: "Business Registration Certificate",
    description: "Officially registered with BRELA",
    status: "Registered 2016",
  },
  {
    icon: Award,
    title: "TIN Certificate",
    description: "Taxpayer Identification Number",
    status: "Verified",
  },
  {
    icon: Shield,
    title: "VAT Registration",
    description: "Value Added Tax compliance",
    status: "Active",
  },
  {
    icon: BadgeCheck,
    title: "Tax Clearance Certificate",
    description: "TRA compliance verification",
    status: "Current",
  },
  {
    icon: FileCheck,
    title: "Business License",
    description: "Tememe Municipal Council",
    status: "Valid",
  },
];

export default function Certificates() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-primary/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-primary rounded-full" />
            <span className="text-sm font-semibold text-emerald-primary uppercase tracking-wider">
              Compliance
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
            Our Certificates
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We are fully compliant with all Tanzanian regulations. Here are our official certifications and registrations.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-emerald-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Empty Image Placeholder */}
              <div className="relative w-full h-48 bg-slate-200 rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <cert.icon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <span className="text-xs">Certificate Image</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-emerald-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Certificate Info */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <cert.icon className="w-5 h-5 text-emerald-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-dark mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-2">
                    {cert.description}
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-primary/10 text-emerald-primary">
                    {cert.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-slate-400 text-sm mt-12"
        >
          * Certificate images will be uploaded soon. Contact us for verification.
        </motion.p>
      </div>
    </section>
  );
}
