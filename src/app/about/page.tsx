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
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#F8F8F3] text-[#1A2E26] flex flex-col select-none pb-20">
      
      {/* GRAND EDITORIAL ABOUT HERO SECTION */}
      <section className="relative bg-[#1A2E26] text-[#E4ECE6] py-16 sm:py-24 lg:py-28 border-b border-[#D9E0DA]/20 overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2D4A3E] rounded-full blur-[150px]" />
          <div className="absolute top-0 right-10 w-[350px] h-[350px] bg-[#C49A45]/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[#C49A45]/40 bg-[#C49A45]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C49A45]"
          >
            <span>About Us</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
          >
            Welcome to <strong className="text-white font-bold">Pure Vision Chemicals</strong>, <br />
            <span className="italic font-normal text-[#C49A45]">
              where Vision meets Science.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#E4ECE6]/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-light"
          >
            We are a premier manufacturer and supplier specializing in high-performance <strong className="font-semibold text-white">specialty chemicals</strong> and premium <strong className="font-semibold text-white">herbal extracts</strong>. Founded on the pillars of innovation, quality, and sustainability, we serve as a trusted partner to global industries, including Dermaceuticals, cosmetics & Home-Care.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 pt-2"
          >
            <span className="hidden sm:block h-[1px] w-12 bg-[#C49A45]/40" />
            <p className="font-serif-luxury italic text-base sm:text-xl text-[#A3B8AC] tracking-wide max-w-2xl font-normal leading-relaxed">
              "We leverage our 15+ years of industry experience and technical precision to align your specific formulation needs with the exact product fit, ensuring optimal performance every time."
            </p>
            <span className="hidden sm:block h-[1px] w-12 bg-[#C49A45]/40" />
          </motion.div>

        </div>
      </section>


      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 lg:py-24 bg-[#F8F8F3] border-b border-[#D9E0DA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header Badge matching user screenshot */}
          <div className="text-center">
            <div className="inline-block bg-[#1A2E26] text-white px-10 py-3.5 rounded-full shadow-lg border border-[#C49A45]/30">
              <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide">
                Why Choose Us
              </h2>
            </div>
          </div>

          {/* 5 Value Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#D9E0DA] p-7 space-y-3 shadow-xs hover:shadow-md transition-all border-l-4 border-l-[#C49A45]"
            >
              <h3 className="font-serif-luxury font-bold text-lg text-[#1A2E26]">
                Technical Sales
              </h3>
              <p className="text-xs text-[#62736B] leading-relaxed font-light">
                Expertise in product solutions tailored to your technical requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-[#D9E0DA] p-7 space-y-3 shadow-xs hover:shadow-md transition-all border-l-4 border-l-[#1A2E26]"
            >
              <h3 className="font-serif-luxury font-bold text-lg text-[#1A2E26]">
                Wide Market Reach
              </h3>
              <p className="text-xs text-[#62736B] leading-relaxed font-light">
                Access to diverse customer segments and global distribution networks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-[#D9E0DA] p-7 space-y-3 shadow-xs hover:shadow-md transition-all border-l-4 border-l-[#C49A45]"
            >
              <h3 className="font-serif-luxury font-bold text-lg text-[#1A2E26]">
                Long Term Association & Growth
              </h3>
              <p className="text-xs text-[#62736B] leading-relaxed font-light">
                Focusing on building the market together as one united team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-[#D9E0DA] p-7 space-y-3 shadow-xs hover:shadow-md transition-all border-l-4 border-l-[#1A2E26]"
            >
              <h3 className="font-serif-luxury font-bold text-lg text-[#1A2E26]">
                Transparency
              </h3>
              <p className="text-xs text-[#62736B] leading-relaxed font-light">
                Complete transparency for optimal performance and trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border border-[#D9E0DA] p-7 space-y-3 shadow-xs hover:shadow-md transition-all border-l-4 border-l-[#C49A45] md:col-span-2 lg:col-span-1"
            >
              <h3 className="font-serif-luxury font-bold text-lg text-[#1A2E26]">
                Quick Delivery Assurance
              </h3>
              <p className="text-xs text-[#62736B] leading-relaxed font-light">
                On-time delivery with guaranteed customer satisfaction every time.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#E4ECE6] border-y border-[#D9E0DA] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 border border-[#D9E0DA] space-y-4">
              <div className="flex items-center gap-3 text-[#1A2E26]">
                <div className="h-10 w-10 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center">
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
            <div className="bg-white p-8 border border-[#D9E0DA] space-y-4">
              <div className="flex items-center gap-3 text-[#1A2E26]">
                <div className="h-10 w-10 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center">
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

      {/* CORE PHILOSOPHY & PILLARS - GRAND EDITORIAL REDESIGN */}
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
              className="bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-5">
                <div className="h-13 w-13 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D4A3E]">
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
              className="bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-5">
                <div className="h-13 w-13 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D4A3E]">
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
              className="bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-5">
                <div className="h-13 w-13 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D4A3E]">
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
              className="inline-flex items-center gap-3 bg-[#1A2E26] hover:bg-[#2D4A3E] text-white px-9 py-4 text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
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
