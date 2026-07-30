"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Sprout, 
  Globe2, 
  ArrowRight,
  Beaker,
  Droplet,
  Heart,
  ShoppingCart
} from "lucide-react";

export default function Industries() {
  const sectors = [
    {
      id: "personal-care",
      name: "Personal Care & Cosmetics",
      icon: <Droplet className="h-6 w-6 text-brand-secondary-bright" />,
      tagline: "Formulating for Beauty & Radiance",
      description: "Premium functional actives, natural emollients, gelling agents, and standard preservatives tailored for high-end skincare, hair care, and aesthetic cosmetics.",
      bullets: [
        "Sodium Hyaluronate (5KDA - 2MDA sizes)",
        "Biotinoyl Tripeptide - 1 & Decapeptide - 10",
        "Ceramide Blend - 5 & Coenzyme Q10",
        "Alpha Arbutin & Ethyl Ascorbic Acid",
        "Natural Emollient Butters (Shea, Cocoa)",
        "Mild Surfactants & Emulsifiers"
      ],
      colorTheme: "from-brand-secondary to-teal-600"
    },
    {
      id: "home-care",
      name: "Home Care & Detergents",
      icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
      tagline: "Industrial Sourcing Consistency",
      description: "Preservatives, texture emulsifiers, thickeners, and rheology modifiers optimized for household cleaners, laundry gels, and sanitizers.",
      bullets: [
        "DMDM Hydantoin & CMIT/MIT Blends",
        "Phenoxyethanol + Ethylhexylglycerin",
        "Acrylate Copolymers (Rheology Modifiers)",
        "PEG 120 Methyl Glucose Dioleate",
        "Thixo Gel Systems & Emulsifiers",
        "Broad Spectrum Disinfectant Actives"
      ],
      colorTheme: "from-blue-600 to-indigo-700"
    },
    {
      id: "pet-care",
      name: "Pet Care & Grooming",
      icon: <Sprout className="h-6 w-6 text-emerald-500" />,
      tagline: "Safe, Mild, and Botanically Sourced",
      description: "Mild surfactant blends, gelling polymers, conditioning extracts, and safe preservatives designed for pet shampoos, grooming mists, and clean products.",
      bullets: [
        "Ultra Mild Amino Acid Surfactants",
        "Water & Oil Soluble Botanical Extracts",
        "Natural Soothing Essential Oils",
        "Formaldehyde-free Preserving Blends",
        "Soothing Natural Gums (Xanthan Gum)",
        "Deodorizing & Conditioning Agents"
      ],
      colorTheme: "from-emerald-500 to-green-600"
    },
    {
      id: "food-nutrition",
      name: "Food & Nutrition",
      icon: <Globe2 className="h-6 w-6 text-brand-primary" />,
      tagline: "Regulatory Compliant Ingredients",
      description: "Specialty thickeners, stabilizers, texturizing gums, natural carrier oils, and essential nutrients complying with strict national safety standards.",
      bullets: [
        "Food Grade Thickening Gums",
        "Natural Carrier Oils (Almond, Coconut)",
        "Natural Sourced Emollients & Oils",
        "Biotin & Coenzyme Q 10 Nutrition Grade",
        "Potassium Sorbate & Sodium Benzoate",
        "Custom Sourced Botanical Actives"
      ],
      colorTheme: "from-brand-primary to-slate-800"
    }
  ];

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
          <span className="text-xs font-bold tracking-widest text-brand-secondary-bright uppercase">Sectors We Supply</span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Industrial Sourcing Expertise</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From functional cosmetics to home care detergents and food formulations, we supply certified specialty ingredients.
          </p>
        </div>
      </section>

      {/* SECTORS GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-350 overflow-hidden relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background gradient bar */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${sector.colorTheme}`} />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform">
                    {sector.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-primary leading-tight">{sector.name}</h3>
                    <span className="text-xs text-brand-secondary font-semibold tracking-wide block mt-0.5">{sector.tagline}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {sector.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Sourced Ingredients:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                    {sector.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                >
                  <span>Explore Ingredients</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-85px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-display font-bold text-xl text-brand-primary">Need a custom chemical blend or specification?</h4>
            <p className="text-sm text-slate-500">
              Our technical formulation engineers can source compounds adhering to exact molecular weight and pH constraints.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary hover:bg-brand-primary-dark text-white px-6 py-3.5 font-bold shadow-md shadow-brand-primary/10 transition-all hover:translate-y-[-1px] cursor-pointer text-sm shrink-0"
          >
            <span>Discuss Sourcing Needs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

    </motion.div>
  );
}
