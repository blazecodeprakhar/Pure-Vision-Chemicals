"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  Target,
  Compass,
  Users,
  Award,
  ArrowRight,
  Truck,
  Handshake,
  Eye,
  Headset
} from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#F8F8F3] text-[#1A2E26] flex flex-col select-none pb-20">

      {/* GRAND EDITORIAL ABOUT HERO SECTION */}
      <section className="relative bg-[#1A2E26] text-[#E4ECE6] py-16 sm:py-28 lg:py-32 border-b border-[#D9E0DA]/20 overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2D4A3E] rounded-full blur-[150px]" />
          <div className="absolute top-0 right-10 w-[350px] h-[350px] bg-[#C49A45]/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[#C49A45]/40 bg-[#C49A45]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C49A45] rounded-md shadow-xs"
          >
            <span>Welcome to Pure Vision Chemicals</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12]"
          >
            Botanical Intelligence <br />
            <span className="italic font-normal text-[#C49A45]">
              & Specialty Actives
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-4 pt-2"
          >
            <span className="hidden sm:block h-[1px] w-12 bg-[#C49A45]/40" />
            <p className="font-serif-luxury italic text-base sm:text-xl text-[#A3B8AC] tracking-wide max-w-2xl font-normal leading-relaxed">
              "Where Vision Meets Science."
            </p>
            <span className="hidden sm:block h-[1px] w-12 bg-[#C49A45]/40" />
          </motion.div>
        </div>
      </section>


      {/* CORE PROFILE & EXPERIENCE HIGHLIGHT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C49A45]">Our Story & Foundation</span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1A2E26] leading-snug">
              Technical Expertise, Sourcing Integrity, and Long-Term Value
            </h2>

            <div className="h-[2px] bg-[#C49A45] w-16" />

            <div className="space-y-4 text-[#62736B] leading-relaxed text-xs sm:text-sm font-light">
              <p>
                We are a premier manufacturer and supplier specializing in high-performance <strong>specialty chemicals</strong> and premium <strong>herbal extracts</strong>. Founded on the pillars of innovation, quality, and sustainability, we serve as a trusted partner to global industries, including Dermaceuticals, Cosmetics, and Home Care.
              </p>
              <p>
                At <strong>Pure Vision Chemicals</strong>, we combine scientific expertise, global partnerships, and market intelligence to deliver specialty chemical solutions that keep pace with the evolving needs of modern formulation standards.
              </p>
              <p>
                Our carefully curated portfolio is sourced from globally and locally recognized manufacturers and meets the highest standards of quality, regulatory compliance, and technical excellence.
              </p>
            </div>

            {/* Editorial Highlighted Quote Box */}
            <div className="p-6 bg-[#1A2E26] text-[#E4ECE6] border-l-4 border-[#C49A45] shadow-lg rounded-2xl space-y-2 mt-4">
              <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-[#C49A45]">15+ Years Industry Expertise</span>
              <p className="font-serif-luxury italic text-sm sm:text-base text-white font-normal leading-relaxed">
                "We leverage our 15+ years of industry experience and technical precision to align your specific formulation needs with the exact product fit, ensuring optimal performance every time."
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[4/5] min-h-[280px] sm:min-h-[360px] border border-[#D9E0DA] p-2 sm:p-3 bg-white shadow-2xl rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/about-image.jpg"
                alt="Pure Vision Corporate Profile"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E26] via-transparent to-transparent opacity-30" />
            </div>
          </motion.div>

        </div>
      </section>


      {/* WHY CHOOSE US - PERFECTLY CENTERED EDITORIAL ADVANTAGES SECTION */}
      <section className="bg-[#1A2E26] text-white py-20 lg:py-28 border-y border-[#D9E0DA]/20 relative overflow-hidden">
        {/* Glow ambient accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D4A3E] rounded-full blur-[180px] pointer-events-none opacity-30" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C49A45] font-bold">
              The Pure Vision Advantage
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">
              Why Choose <span className="italic font-normal text-[#C49A45]">Us</span>
            </h2>
            <div className="h-[2px] bg-[#C49A45] w-12 mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#A3B8AC] font-light leading-relaxed pt-2">
              Empowering formulation excellence with technical precision, global reach, and dependable supply integrity.
            </p>
          </div>

          {/* 5 Pillar Advantage Centered Flex Grid */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">

            {/* 1. Technical Sales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm bg-white/5 border border-white/10 p-7 hover:border-[#C49A45]/50 transition-all duration-300 group space-y-4 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-[#C49A45]/15 border border-[#C49A45]/30 text-[#C49A45] flex items-center justify-center transition-transform group-hover:scale-110 rounded-xl shadow-xs">
                  <Headset className="h-6 w-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C49A45]">Pillar 01</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#C49A45] transition-colors">
                    Technical Sales
                  </h3>
                  <p className="text-xs text-[#A3B8AC] leading-relaxed font-light">
                    Expertise in product solutions tailored precisely to your specific chemical and botanical formulation needs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2. Wide Market Reach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm bg-white/5 border border-white/10 p-7 hover:border-[#C49A45]/50 transition-all duration-300 group space-y-4 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-[#C49A45]/15 border border-[#C49A45]/30 text-[#C49A45] flex items-center justify-center transition-transform group-hover:scale-110 rounded-xl shadow-xs">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C49A45]">Pillar 02</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#C49A45] transition-colors">
                    Wide Market Reach
                  </h3>
                  <p className="text-xs text-[#A3B8AC] leading-relaxed font-light">
                    Access to diverse customer segments and global manufacturers across Personal Care, Dermaceuticals, and Home Care.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3. Long Term Association & Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, delay: 0.16 }}
              className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm bg-white/5 border border-white/10 p-7 hover:border-[#C49A45]/50 transition-all duration-300 group space-y-4 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-[#C49A45]/15 border border-[#C49A45]/30 text-[#C49A45] flex items-center justify-center transition-transform group-hover:scale-110 rounded-xl shadow-xs">
                  <Handshake className="h-6 w-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C49A45]">Pillar 03</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#C49A45] transition-colors">
                    Long Term Association & Growth
                  </h3>
                  <p className="text-xs text-[#A3B8AC] leading-relaxed font-light">
                    Focusing on building sustainable markets together as one united team through shared innovation and trust.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 4. Transparency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, delay: 0.24 }}
              className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm bg-white/5 border border-white/10 p-7 hover:border-[#C49A45]/50 transition-all duration-300 group space-y-4 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-[#C49A45]/15 border border-[#C49A45]/30 text-[#C49A45] flex items-center justify-center transition-transform group-hover:scale-110 rounded-xl shadow-xs">
                  <Eye className="h-6 w-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C49A45]">Pillar 04</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#C49A45] transition-colors">
                    Transparency
                  </h3>
                  <p className="text-xs text-[#A3B8AC] leading-relaxed font-light">
                    Complete transparency in sourcing and technical documentation for optimal performance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 5. Quick Delivery Assurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, delay: 0.32 }}
              className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm bg-white/5 border border-white/10 p-7 hover:border-[#C49A45]/50 transition-all duration-300 group space-y-4 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-[#C49A45]/15 border border-[#C49A45]/30 text-[#C49A45] flex items-center justify-center transition-transform group-hover:scale-110 rounded-xl shadow-xs">
                  <Truck className="h-6 w-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C49A45]">Pillar 05</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#C49A45] transition-colors">
                    Quick Delivery Assurance
                  </h3>
                  <p className="text-xs text-[#A3B8AC] leading-relaxed font-light">
                    On-time delivery logistics with guaranteed customer satisfaction across pan-India and international supply routes.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* MISSION & VISION */}
      <section className="bg-[#E4ECE6] border-y border-[#D9E0DA] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="bg-white p-8 border border-[#D9E0DA] space-y-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 text-[#1A2E26]">
                <div className="h-10 w-10 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center rounded-xl shadow-xs">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#C49A45]">Corporate Compass</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1A2E26]">Our Mission</h3>
                </div>
              </div>
              <p className="text-xs text-[#62736B] leading-relaxed font-light">
                Our main goals are to provide the personal care and cosmetic industries with value-added raw materials, unparalleled customer service, and a competitive edge in innovation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 border border-[#D9E0DA] space-y-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 text-[#1A2E26]">
                <div className="h-10 w-10 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center rounded-xl shadow-xs">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#C49A45]">Corporate Compass</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1A2E26]">Our Vision</h3>
                </div>
              </div>
              <p className="text-xs text-[#62736B] leading-relaxed font-light">
                To be the global benchmark for technical excellence in chemical manufacturing and botanical extraction, empowering our partners to create safer, highly effective, and sustainable products for a better tomorrow.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* CORE PHILOSOPHY & PILLARS */}
      <section className="py-24 lg:py-28 bg-[#F8F8F3] border-b border-[#D9E0DA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Header with Font Pairing */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#62736B] font-semibold">Corporate Pillars</span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1A2E26] leading-tight">
              Our Core Philosophy <br />
              <span className="italic font-normal text-[#C49A45]">
                & Guiding Values
              </span>
            </h2>
            <p className="font-serif-luxury italic text-sm sm:text-base text-[#62736B] font-normal leading-relaxed pt-1">
              "Customer first, strong partnership, succeed together. These values shape every formulation and relationship."
            </p>
          </div>

          {/* 3 Pillar Motion Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

            {/* High-Quality Manufacturing & Sourcing */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-8 sm:p-10 flex flex-col justify-between space-y-8 rounded-2xl shadow-xs hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-5">
                <div className="h-13 w-13 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D4A3E] rounded-xl shadow-xs">
                  <Globe2 className="h-6 w-6" />
                </div>

                <h3 className="font-serif-luxury font-bold text-2xl text-[#1A2E26] group-hover:text-[#2D4A3E] transition-colors">
                  High-Quality Manufacturing & Sourcing
                </h3>

                <p className="text-xs sm:text-sm text-[#62736B] leading-relaxed font-light">
                  Manufacturing high-purity, nature-derived botanical extracts under rigorous standards, while seamlessly sourcing specialty chemicals from globally renowned partners to provide a comprehensive, end-to-end raw material solution.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D9E0DA]/60 flex items-center gap-2 text-xs font-semibold text-[#1A2E26]">
                <span className="text-[#C49A45] font-bold">✓</span>
                <span>Traceable Supply Lines</span>
              </div>

              {/* Bottom Gold Accent */}
              <div className="h-1 bg-transparent group-hover:bg-[#C49A45] transition-colors duration-300 absolute bottom-0 left-0 right-0" />
            </motion.div>

            {/* Technical Support & Guidance */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-8 sm:p-10 flex flex-col justify-between space-y-8 rounded-2xl shadow-xs hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-5">
                <div className="h-13 w-13 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D4A3E] rounded-xl shadow-xs">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h3 className="font-serif-luxury font-bold text-2xl text-[#1A2E26] group-hover:text-[#2D4A3E] transition-colors">
                  Technical Support & Guidance
                </h3>

                <p className="text-xs sm:text-sm text-[#62736B] leading-relaxed font-light">
                  Our experienced technical team offers dedicated assistance to streamline your product development, providing responsive localized service, comprehensive documentation, and expert formulation guidance.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D9E0DA]/60 flex items-center gap-2 text-xs font-semibold text-[#1A2E26]">
                <span className="text-[#C49A45] font-bold">✓</span>
                <span>Responsive Guidance</span>
              </div>

              {/* Bottom Gold Accent */}
              <div className="h-1 bg-transparent group-hover:bg-[#C49A45] transition-colors duration-300 absolute bottom-0 left-0 right-0" />
            </motion.div>

            {/* Sincere Partnership */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
              className="bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-8 sm:p-10 flex flex-col justify-between space-y-8 rounded-2xl shadow-xs hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-5">
                <div className="h-13 w-13 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D4A3E] rounded-xl shadow-xs">
                  <Users className="h-6 w-6" />
                </div>

                <h3 className="font-serif-luxury font-bold text-2xl text-[#1A2E26] group-hover:text-[#2D4A3E] transition-colors">
                  Sincere Partnership
                </h3>

                <p className="text-xs sm:text-sm text-[#62736B] leading-relaxed font-light">
                  We believe in growing alongside our clients by maintaining complete transparency, dependable sourcing consistency, and long-term commitment.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D9E0DA]/60 flex items-center gap-2 text-xs font-semibold text-[#1A2E26]">
                <span className="text-[#C49A45] font-bold">✓</span>
                <span>Complete Transparency</span>
              </div>

              {/* Bottom Gold Accent */}
              <div className="h-1 bg-transparent group-hover:bg-[#C49A45] transition-colors duration-300 absolute bottom-0 left-0 right-0" />
            </motion.div>

          </div>

          <div className="pt-4 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#1A2E26] hover:bg-[#2D4A3E] text-white px-9 py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-md shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Get in Touch with our Team</span>
              <ArrowRight className="h-4 w-4 text-[#C49A45]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
