"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  FlaskConical,
  Sprout,
  ShieldCheck,
  Globe2,
  Droplet,
  Award,
  Zap,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative min-h-screen bg-slate-50 text-slate-700 overflow-hidden flex flex-col select-none"
    >

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] bg-gradient-to-br from-brand-primary-dark via-brand-primary to-slate-900 text-white overflow-hidden flex items-center py-8 lg:py-0">

        {/* Abstract Bio-Chemical Floating Graphic Ornaments */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-brand-secondary/25 blur-3xl opacity-60" />
          <div className="absolute bottom-[-100px] right-[-100px] h-[600px] w-[600px] rounded-full bg-brand-secondary-bright/15 blur-3xl animate-pulse" />
          {/* Subtle grid lines background overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content */}
            <motion.div
              className="lg:col-span-7 flex flex-col justify-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >

              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6"
              >
                Where Vision <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary-bright to-emerald-400">
                  Meets Science
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl"
              >
                Positioned at the forefront of India's dynamic specialty chemicals market, PV Chem delivers a comprehensive portfolio of high-value specialty chemicals and performance ingredients sourced from globally renowned manufacturing partners. Through technical excellence, innovation, and a steadfast commitment to quality, we serve as a trusted partner.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 sm:items-center"
              >
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-2 rounded-xl bg-brand-secondary hover:bg-teal-600 text-white font-bold px-8 py-4 shadow-lg shadow-brand-secondary/20 transition-all hover:translate-y-[-2px] cursor-pointer"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 px-8 py-4 font-bold transition-all hover:translate-y-[-2px] cursor-pointer"
                >
                  <span>Get in Touch</span>
                </Link>
              </motion.div>

              {/* Statistics row */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-6 border-t border-white/10 text-center sm:text-left"
              >
                <div>
                  <p className="font-display text-3xl font-extrabold text-brand-secondary-bright">144+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-semibold">Natural Oils</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-brand-secondary-bright">89+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-semibold">Water Extracts</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-brand-secondary-bright">87+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-semibold">Oil Extracts</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-brand-secondary-bright">23+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-semibold">Actives</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Graphic Visualization */}
            <div className="lg:col-span-5 hidden lg:flex justify-center relative">
              <motion.div
                className="relative w-[450px] h-[450px] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              >

                {/* Simulated laboratory abstract grid rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 rounded-full border border-dashed border-white/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-16 rounded-full border border-white/5" />

                {/* 3D-feeling translucent card containing beaker & plant illustration */}
                <motion.div
                  className="glass-dark p-8 rounded-3xl shadow-2xl relative w-[380px] h-[400px] flex flex-col justify-between border border-white/15"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs uppercase font-bold tracking-widest text-slate-400">R&D Formulation</span>
                    <FlaskConical className="h-6 w-6 text-brand-secondary-bright" />
                  </div>

                  <div className="my-auto flex flex-col items-center">
                    {/* Glowing graphic element representing chemistry and botany */}
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-tr from-brand-secondary to-emerald-500/20 text-white shadow-xl shadow-brand-secondary/20">
                      <FlaskConical className="h-16 w-16 text-brand-secondary-bright" />
                      <div className="absolute bottom-1 right-1 bg-brand-primary p-2 rounded-full border border-white/20">
                        <Sprout className="h-5 w-5 text-emerald-400" />
                      </div>
                    </div>
                    <span className="font-display text-2xl font-bold text-white mt-5">Pure Sourcing Model</span>
                    <span className="text-sm text-slate-400 mt-1.5 text-center max-w-[280px]">Formulating for skincare, pet care, home & foods</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/15 pt-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand-secondary-bright" /> QC Approved</span>
                    <span>100% Compliant</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY & BANNER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white border-y border-slate-200 shadow-sm relative z-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-secondary">Core Value System</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-primary text-center md:text-left italic">
              "Customer first, strong partnership, succeed together."
            </h3>
            <Link
              href="/about"
              className="flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer group"
            >
              <span>Our Philosophy</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* INTRODUCTION PREVIEW SECTIONS */}
      <section className="py-20 lg:py-24 bg-slate-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image/Visual Mock Column */}
            <motion.div
              className="lg:col-span-5 order-last lg:order-first"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            >
              <div className="relative p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-teal-50 text-brand-secondary flex items-center justify-center shrink-0">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-800 text-sm">Responsive local service</h4>
                      <p className="text-xs text-slate-400">Technical sales engineers across key hubs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center shrink-0">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-800 text-sm">Regulatory Sourcing Integrity</h4>
                      <p className="text-xs text-slate-400">Full COA and specification compliance sheets</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-800 text-sm">Green Chemistry Focus</h4>
                      <p className="text-xs text-slate-400">Natural essential oils and botanical extracts</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            >
              <span className="text-xs font-extrabold tracking-widest text-brand-secondary uppercase">Corporate Profile</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-primary">
                Technical Expertise, Sourcing Integrity, and Long-Term Value
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full" />
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                At <strong>Pure Vision Chemicals</strong>, we combine scientific expertise, global partnerships, and market intelligence to deliver specialty chemical solutions that keep pace with the evolving needs of modern industries.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We serve a broad spectrum of industries, including <strong>Personal Care, Home Care, Pet Care, and Food & Nutrition</strong>. Our carefully curated portfolio meets the highest standards of quality and regulatory compliance.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-primary hover:bg-brand-primary-dark text-white font-bold px-6 py-3 shadow-md shadow-brand-primary/10 transition-all hover:translate-y-[-1px] cursor-pointer text-sm"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES PREVIEW */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-extrabold tracking-widest text-brand-secondary uppercase">Sectors We Supply</span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary">
              Empowering Chemical Formulations Across India
            </h2>
            <p className="text-sm text-slate-500">
              We offer technical sales guidance and tailored formulation assistance across key industrial domains.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {/* Personal Care */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Droplet className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-primary mb-3">Personal Care</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Premium actives, gelling agents, emollients, and botanical extracts for skincare and cosmetics.
              </p>
              <Link href="/industries" className="text-xs font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1">
                <span>View Ingredients</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Home Care */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-primary mb-3">Home Care</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Preservatives, emulsifiers, surfactants, and rheology modifiers optimized for detergents.
              </p>
              <Link href="/industries" className="text-xs font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1">
                <span>View Ingredients</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Pet Care */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sprout className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-primary mb-3">Pet Care</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Mild surfactants, gelling systems, natural botanical oils, and safe preservatives for pet shampoos.
              </p>
              <Link href="/industries" className="text-xs font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1">
                <span>View Ingredients</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Food Ingredients */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-primary mb-3">Food & Nutrition</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Specialty thickeners, standard gums, texture enhancers, and nutrient oils adhering strictly to standards.
              </p>
              <Link href="/industries" className="text-xs font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1">
                <span>View Ingredients</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW & CALL TO ACTION */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-brand-primary-dark text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl border border-white/10"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="absolute top-[-50px] right-[-50px] h-40 w-40 rounded-full bg-brand-secondary/20 blur-2xl" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="text-xs font-extrabold tracking-widest text-brand-secondary-bright uppercase">Specialty Catalog</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                Explore Our Specialty Ingredients Catalog
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Filter and search through our extensive database of functionals, safe preservatives, botanical extracts, natural oils, and emollient butters. Add items directly to your B2B Inquiry list.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-secondary hover:bg-teal-600 text-white font-bold px-8 py-4 shadow-md shadow-brand-secondary/10 transition-all hover:translate-y-[-1px] cursor-pointer text-sm"
                >
                  <span>Open Interactive Catalog</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 px-8 py-4 font-bold transition-all hover:translate-y-[-1px] cursor-pointer text-sm"
                >
                  <span>Submit Custom Sourcing Request</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
