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
      <section className="relative bg-[#1A2E26] text-[#E4ECE6] py-16 sm:py-28 lg:py-32 border-b border-[#D9E0DA]/20 overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2D4A3E] rounded-full blur-[150px]" />
          <div className="absolute top-0 right-10 w-[350px] h-[350px] bg-[#C49A45]/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
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
              "Your end-to-end partner for custom botanical extracts and specialty cosmetic ingredients."
            </p>
            <span className="hidden sm:block h-[1px] w-12 bg-[#C49A45]/40" />
          </motion.div>

        </div>
      </section>


      {/* CORE PROFILE & TIMELINE */}
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
                At <strong>Pure Vision Chemicals</strong>, we combine scientific expertise, global partnerships, and market intelligence to deliver specialty chemical solutions that keep pace with the evolving needs of modern industries. Built on a strong foundation of technical knowledge, integrity, and industry experience, we are committed to creating sustainable value for our customers through innovation, reliability, and long-term partnerships.
              </p>
              <p>
                Founded in <strong>2025</strong>, Pure Vision Chemicals began its journey with a focus on personal care raw material sourcing. We have since evolved into a diversified specialty chemicals organization serving a broad spectrum of industries, including <strong>Personal Care, Home Care, Pet Care, and Food</strong>.
              </p>
              <p>
                Our carefully curated portfolio is sourced from globally and locally recognized manufacturers and meets the highest standards of quality, regulatory compliance, and technical excellence. With dedicated market expertise, we provide customers with innovative ingredients, formulation support, and market-driven solutions that enable them to stay ahead in a rapidly changing business landscape.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[4/5] min-h-[280px] sm:min-h-[360px] border border-[#D9E0DA] p-2 sm:p-3 bg-white shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/about-image.jpg"
                alt="Pure Vision Corporate Profile"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E26] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 bg-[#1A2E26]/90 border border-white/10 text-white space-y-0.5 sm:space-y-1">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-[#C49A45] font-bold">Mumbai Headquarters</span>
                <p className="font-serif-luxury text-xs sm:text-sm font-bold">Pure Sourcing & Technical Guidance</p>
              </div>
            </div>
          </motion.div>

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
                To be a trusted partner for customers and global suppliers by delivering high-quality specialty chemicals, technical expertise, and value-added services. We are committed to sustainable growth through responsible business practices, green chemistry, innovation, and the highest standards of corporate governance.
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
                To be a leading provider of sustainable specialty chemical solutions that enrich lives and industries worldwide. Through innovation, global partnerships, technical excellence, and responsible business practices, we aspire to create lasting value across Personal Care, Home Care, Pet Care, and Food sectors.
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
            
            {/* Global Sourcing Network */}
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
                  Global Sourcing Network
                </h3>

                <p className="text-xs sm:text-sm text-[#62736B] leading-relaxed font-light">
                  Sourcing directly from globally renowned manufacturing partners under rigorous standards, ensuring pure, compliant, and fully traceable chemical supply lines.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D9E0DA]/60 flex items-center gap-2 text-xs font-semibold text-[#1A2E26]">
                <span className="text-[#C49A45] font-bold">✓</span>
                <span>Traceable Supply Lines</span>
              </div>

              {/* Bottom Gold Accent */}
              <div className="h-1 bg-transparent group-hover:bg-[#C49A45] transition-colors duration-300 absolute bottom-0 left-0 right-0" />
            </motion.div>

            {/* Technical Sales Support */}
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
                  Technical Sales Support
                </h3>

                <p className="text-xs sm:text-sm text-[#62736B] leading-relaxed font-light">
                  Experienced chemical sales engineers strategically located across India to provide responsive localized service, COA sheets, and formulation guidance.
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
                  We believe in growing alongside our clients by maintaining complete pricing transparency, dependable sourcing consistency, and long-term commitment.
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
