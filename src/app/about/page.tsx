"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe2, 
  ShieldCheck, 
  Target, 
  Compass, 
  Users, 
  TrendingUp,
  FlaskConical
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
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
      className="relative min-h-screen bg-slate-50 text-slate-700 select-none pb-20"
    >
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-r from-brand-primary-dark via-brand-primary to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-[-50px] right-[-50px] h-36 w-36 rounded-full bg-brand-secondary/20 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.span 
            className="text-xs font-bold tracking-widest text-brand-secondary-bright uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Corporate Profile
          </motion.span>
          <motion.h1 
            className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            About Pure Vision Chemicals
          </motion.h1>
          <motion.p 
            className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Delivering high-value specialty chemical ingredients sourced from globally renowned manufacturing partners.
          </motion.p>
        </div>
      </section>

      {/* CORE PROFILE & TIMELINE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-primary">
              Technical Expertise, Sourcing Integrity, and Long-Term Value
            </h2>
            <div className="h-1 bg-gradient-to-r from-brand-primary to-brand-secondary w-20 rounded-full" />
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                At <strong>Pure Vision Chemicals</strong>, we combine scientific expertise, global partnerships, and market intelligence to deliver specialty chemical solutions that keep pace with the evolving needs of modern industries. Built on a strong foundation of technical knowledge, integrity, and decades of industry experience, we are committed to creating sustainable value for our customers through innovation, reliability, and long-term partnerships.
              </p>
              <p>
                Founded in <strong>2025</strong>, Pure Vision Chemicals began its journey with a focus on personal care raw material sourcing. We have since evolved into a diversified specialty chemicals organization serving a broad spectrum of industries, including <strong>Personal Care, Home Care, Pet Care, and Food</strong>.
              </p>
              <p>
                Our carefully curated portfolio is sourced from globally and locally recognized manufacturers and meets the highest standards of quality, regulatory compliance, and technical excellence. With over two decades of market expertise, we provide customers with innovative ingredients, formulation support, and market-driven solutions that enable them to stay ahead in a rapidly changing business landscape.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 bg-gradient-to-tr from-brand-primary-dark to-brand-primary p-8 sm:p-10 rounded-3xl text-white shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute top-[-50px] right-[-50px] h-32 w-32 rounded-full bg-brand-secondary/20 blur-xl" />
            <div className="space-y-8 relative z-10">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-brand-secondary-bright uppercase">Corporate Compass</span>
                <h3 className="font-display text-xl font-bold mt-1">Our Core Commitment</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-secondary-bright">
                    <Target className="h-4 w-4" />
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider">Our Mission</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    To be a trusted partner for customers and global suppliers by delivering high-quality specialty chemicals, technical expertise, and value-added services. We are committed to sustainable growth through responsible business practices, green chemistry, innovation, and the highest standards of corporate governance.
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-secondary-bright">
                    <Compass className="h-4 w-4" />
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider">Our Vision</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    To be a leading provider of sustainable specialty chemical solutions that enrich lives and industries worldwide. Through innovation, global partnerships, technical excellence, and responsible business practices, we aspire to create lasting value across the Personal Care, Home Care, Pet Care, and Food sectors.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CORE PHILOSOPHY & VALUES */}
      <section className="border-t border-slate-200/80 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-2xl mx-auto space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-extrabold tracking-widest text-brand-secondary uppercase">Corporate Pillars</span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary">
              Our Core Philosophy
            </h2>
            <p className="text-sm text-slate-500">
              "Customer first, strong partnership, succeed together." These values shape everything we do.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={cardVariants} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-slate-200 text-brand-primary flex items-center justify-center mb-6">
                <Globe2 className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold text-slate-800 text-lg mb-3">Global Sourcing Network</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sourcing directly from globally renowned manufacturing partners under rigorous standards, ensuring pure and traceable chemical supply lines.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-slate-200 text-brand-primary flex items-center justify-center mb-6">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold text-slate-800 text-lg mb-3">Technical Sales Support</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Experienced chemical sales engineers strategically located across India to provide responsive localized service and formulation guidance.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-slate-200 text-brand-primary flex items-center justify-center mb-6">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold text-slate-800 text-lg mb-3">Sincere Partnership</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We believe in growing alongside our clients, maintaining complete pricing transparency, sourcing consistency, and technical support.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
}
