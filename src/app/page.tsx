"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Check,
  Plus,
  ArrowRight,
  Droplets,
  ShieldCheck,
  Globe2,
  Leaf,
  FlaskConical,
  ShoppingBag,
  ChevronRight
} from "lucide-react";

import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const CATEGORIES = [
  "Actives",
  "Sunscreen & Moisturizer",
  "Functional Products",
  "Preservatives",
  "Rheology Modifiers",
  "Herbal Extracts (Water Soluble)",
  "Herbal Extracts (Oil Soluble)",
  "Natural Oils",
  "Butters"
] as const;

export default function Home() {
  const { inquiryCart, toggleCartItem, setCartOpen } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("Actives");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [catalogueViewMode, setCatalogueViewMode] = useState<"list" | "grid">("list");

  // Filter products cleanly
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);


  return (
    <div className="relative min-h-screen bg-[#F8F8F3] text-[#1A2E26] flex flex-col select-none">
      
      {/* HERO SECTION - LUXURY PERFUME / BOTANICAL EDITORIAL */}
      <section className="relative overflow-hidden bg-[#1A2E26] text-[#E4ECE6] py-20 sm:py-24 lg:py-32 border-b border-[#D9E0DA]/20">
        
        {/* Background Subtle Gradient Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2D4A3E] rounded-full blur-[160px]" />
          <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-[#C49A45]/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            
            {/* Left Copy */}
            <motion.div 
              className="lg:col-span-7 space-y-7"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 border border-[#C49A45]/40 bg-[#C49A45]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C49A45]">
                <span>Botanical Intelligence • Specialty Actives</span>
              </div>

              <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Where Nature Meets <br />
                <span className="italic font-normal text-[#C49A45]">
                  & Precise Formulation
                </span>
              </h1>

              <p className="text-[#A3B8AC] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
                Positioned at the forefront of India's dynamic specialty chemicals market, Pure Vision Chemicals delivers high-value performance ingredients sourced from globally renowned partners for Personal Care, Home Care, Pet Care, and Food formulation sectors.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href="#catalog"
                  className="inline-flex items-center justify-center gap-3 bg-[#C49A45] hover:bg-[#b0873a] text-[#1A2E26] font-extrabold px-8 py-4 text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Explore Ingredients</span>
                  <ArrowRight className="h-4 w-4 text-[#1A2E26]" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#C49A45] bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 text-xs uppercase tracking-widest transition-all cursor-pointer"
                >
                  <span>Request Custom Quote</span>
                </Link>
              </div>

              {/* Quick Metrics Bar */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
                <div>
                  <p className="font-serif-luxury text-3xl font-bold text-white">389+</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#A3B8AC] mt-1 font-semibold">Raw Materials</p>
                </div>
                <div>
                  <p className="font-serif-luxury text-3xl font-bold text-white">7</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#A3B8AC] mt-1 font-semibold">Core Categories</p>
                </div>
                <div>
                  <p className="font-serif-luxury text-3xl font-bold text-white">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#A3B8AC] mt-1 font-semibold">COA Quality Verified</p>
                </div>
                <div>
                  <p className="font-serif-luxury text-3xl font-bold text-white">2025</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#A3B8AC] mt-1 font-semibold">Established</p>
                </div>
              </div>

            </motion.div>

            {/* Right Editorial Hero Image Container */}
            <motion.div 
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-none border border-white/15 p-2.5 sm:p-3 bg-white/5 backdrop-blur-md shadow-2xl">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/pics-1.png"
                    alt="Pure Vision Specialty Botanical Active Oil"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E26] via-transparent to-transparent opacity-65" />
                  
                  {/* Badge overlay on hero image */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 bg-[#1A2E26]/90 backdrop-blur-md border border-white/10 text-white space-y-1">
                    <span className="text-[9px] uppercase tracking-widest font-semibold text-[#C49A45]">Featured Ingredient</span>
                    <p className="font-serif-luxury text-base font-bold">Sodium Hyaluronate 5KDA</p>
                    <p className="text-[11px] text-[#A3B8AC] font-light">Deep penetrating bioactive active for skincare formulation</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE VALUE BANNER - EDITORIAL MARQUEE BAR */}
      <section className="bg-[#E4ECE6] border-b border-[#D9E0DA] py-7 select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#62736B]">Our Core Philosophy</span>
            <p className="font-serif-luxury text-lg sm:text-2xl italic font-normal text-[#1A2E26]">
              "Customer first, strong partnership, succeed together."
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1A2E26] hover:text-[#C49A45] transition-colors"
            >
              <span>Corporate Profile</span>
              <ChevronRight className="h-4 w-4 text-[#C49A45]" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN INTERACTIVE PRODUCT CATALOGUE - MASTER 4x4 DASHBOARD & SEARCH */}
      <section id="catalog" className="py-20 lg:py-28 bg-[#F8F8F3] border-t border-[#D9E0DA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Header: Title, Description & Integrated Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D9E0DA] pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C49A45]">
                The Portfolio / 2025–26
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1A2E26] leading-tight">
                Ingredients with <br />
                <span className="italic font-normal text-[#C49A45]">
                  intention.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#62736B] font-light leading-relaxed">
                From the first botanical extract to the final texture, our catalogue brings essential building blocks into one considered source.
              </p>
            </div>

            {/* Live Search Input Bar */}
            <div className="relative w-full sm:w-80 shrink-0">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-[#62736B]" />
              <input
                type="text"
                placeholder="Search 389+ ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#D9E0DA] text-xs text-[#1A2E26] focus:outline-none focus:border-[#1A2E26] transition-colors shadow-xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-[10px] uppercase font-bold text-[#C49A45] hover:text-[#1A2E26]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* MASTER 4x2 CATEGORY DASHBOARD GRID */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#62736B]">Select Category Family</span>
              <span className="text-xs text-[#62736B]">8 Core Families</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  id: "01",
                  name: "Actives",
                  description: "Targeted ingredients for high-performance skin and hair care.",
                  bg: "bg-[#E8F0EC]",
                },
                {
                  id: "02",
                  name: "Sunscreen & Moisturizer",
                  description: "UV filters and hydration systems for modern formulations.",
                  bg: "bg-[#FDF6E9]",
                },
                {
                  id: "03",
                  name: "Functional Products",
                  description: "Emollients, emulsifiers, surfactants and conditioning systems.",
                  bg: "bg-[#F4EFEA]",
                },
                {
                  id: "04",
                  name: "Preservatives",
                  description: "Reliable preservation systems for safe, stable products.",
                  bg: "bg-[#EAF1F0]",
                },
                {
                  id: "05",
                  name: "Rheology Modifiers",
                  description: "Texture, viscosity and sensory control for elegant formulas.",
                  bg: "bg-[#E8F0EC]",
                },
                {
                  id: "06",
                  name: "Herbal Extracts (Water Soluble)",
                  description: "Water-soluble botanical extracts selected for conscious formulation.",
                  bg: "bg-[#FBF6EE]",
                },
                {
                  id: "07",
                  name: "Natural Oils",
                  description: "Plant-derived oils for nourishment and sensory richness.",
                  bg: "bg-[#F6F2EC]",
                },
                {
                  id: "08",
                  name: "Butters",
                  description: "Rich botanical butters for balms, creams and care.",
                  bg: "bg-[#F1ECE6]",
                },
              ].map((cat) => {
                const count = PRODUCTS.filter((p) => 
                  p.category === cat.name || 
                  (cat.name === "Herbal Extracts (Water Soluble)" && p.category.includes("Herbal Extracts"))
                ).length;
                const isSelected = selectedCategory === cat.name || (selectedCategory.includes("Herbal Extracts") && cat.name.includes("Herbal Extracts"));

                return (
                  <div
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`p-6 border transition-all duration-200 flex flex-col justify-between space-y-5 cursor-pointer group relative ${cat.bg} ${
                      isSelected
                        ? "border-[#C49A45] ring-1 ring-[#C49A45]/40 shadow-sm"
                        : "border-[#D9E0DA] hover:border-[#C49A45]/40"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-serif-luxury text-xs font-bold text-[#C49A45]">
                          {cat.id}
                        </span>
                        <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full ${
                          isSelected ? "bg-[#1A2E26] text-white" : "bg-white/80 text-[#62736B] border border-[#D9E0DA]/80"
                        }`}>
                          {count} Items
                        </span>
                      </div>

                      <h3 className="font-serif-luxury font-bold text-lg sm:text-xl text-[#1A2E26] leading-snug">
                        {cat.name}
                      </h3>

                      <p className="text-xs text-[#62736B] leading-relaxed font-light">
                        {cat.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-end pt-1">
                      <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${
                        isSelected ? "text-[#C49A45] translate-x-0.5" : "text-[#62736B]/60 group-hover:text-[#1A2E26]"
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* SELECTED CATEGORY LIVE RESULTS HEADER & SPEC SHEET LIST / GRID TOGGLE */}
          <div className="pt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9E0DA] pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C49A45]">Showing Category</span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A2E26] pt-0.5">
                  {selectedCategory} <span className="text-sm font-normal text-[#62736B]">({filteredProducts.length} items)</span>
                </h3>
              </div>

              {/* View Switcher: Spec Sheet List vs Card Grid */}
              <div className="flex items-center gap-3">
                {searchQuery && (
                  <span className="text-xs text-[#62736B] bg-white px-3 py-1 border border-[#D9E0DA]">
                    Query: "<strong className="text-[#1A2E26]">{searchQuery}</strong>"
                  </span>
                )}

                <div className="inline-flex border border-[#D9E0DA] bg-white p-1">
                  <button
                    onClick={() => setCatalogueViewMode("list")}
                    className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      catalogueViewMode === "list"
                        ? "bg-[#1A2E26] text-white"
                        : "text-[#62736B] hover:text-[#1A2E26]"
                    }`}
                  >
                    <span>Spec List</span>
                  </button>
                  <button
                    onClick={() => setCatalogueViewMode("grid")}
                    className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      catalogueViewMode === "grid"
                        ? "bg-[#1A2E26] text-white"
                        : "text-[#62736B] hover:text-[#1A2E26]"
                    }`}
                  >
                    <span>Card Grid</span>
                  </button>
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white border border-[#D9E0DA] space-y-3">
                <FlaskConical className="h-10 w-10 text-[#62736B] mx-auto opacity-50" />
                <p className="font-serif-luxury text-lg text-[#1A2E26] font-bold">No ingredients found</p>
                <p className="text-xs text-[#62736B]">Try adjusting your search query or select another category above.</p>
                <button
                  onClick={() => { setSelectedCategory("Actives"); setSearchQuery(""); }}
                  className="mt-2 text-xs text-[#C49A45] font-bold uppercase tracking-wider underline cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>

            ) : catalogueViewMode === "list" ? (
              /* ULTRA-AESTHETIC SPEC SHEET LIST VIEW MATCHING SCREENSHOT 2 */
              <div className="bg-[#F6F6F1] border border-[#D9E0DA] p-4 sm:p-8">
                <div className="divide-y divide-[#D9E0DA]">
                  {filteredProducts.map((product, idx) => {
                    const isInCart = inquiryCart.some((item) => item.id === product.id);
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.2) }}
                        className="py-4 sm:py-5 flex items-center justify-between hover:bg-white/80 px-4 sm:px-6 transition-all duration-200 group border-b border-[#D9E0DA]/60 last:border-b-0"
                      >
                        <div className="flex items-center gap-6 sm:gap-10">
                          <span className="font-serif-luxury text-xs sm:text-sm text-[#C49A45] font-bold w-6">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <h4 className="font-serif-luxury font-bold text-base sm:text-xl text-[#1A2E26] group-hover:text-[#2D4A3E] transition-colors">
                            {product.name}
                          </h4>
                        </div>

                        <button
                          onClick={() => toggleCartItem(product)}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                            isInCart
                              ? "text-[#C49A45] font-bold bg-[#1A2E26] px-3.5 py-1.5"
                              : "text-[#1A2E26] hover:text-[#C49A45] bg-transparent"
                          }`}
                        >
                          {isInCart ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-[#C49A45]" />
                              <span>Added to Quote</span>
                            </>
                          ) : (
                            <>
                              <span>Add to quote</span>
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            ) : (
              /* CARD GRID VIEW */
              <div className="flex flex-wrap justify-center gap-4">
                {filteredProducts.map((product, idx) => {
                  const isInCart = inquiryCart.some((item) => item.id === product.id);
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
                      className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-5 flex flex-col justify-between transition-all duration-300 group hover:shadow-md"
                    >

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#62736B]">
                          <span className="text-[#C49A45]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="bg-[#E4ECE6] px-2 py-0.5 text-[#1A2E26]">
                            {product.category}
                          </span>
                        </div>

                        <h3 className="font-serif-luxury font-bold text-base text-[#1A2E26] group-hover:text-[#2D4A3E] transition-colors leading-snug pt-1">
                          {product.name}
                        </h3>
                      </div>

                      <div className="pt-5 mt-4 border-t border-[#D9E0DA]/50 flex items-center justify-between">
                        <span className="text-[11px] text-[#62736B] font-light">COA Specification</span>
                        <button
                          onClick={() => toggleCartItem(product)}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            isInCart
                              ? "bg-[#2D4A3E] text-white"
                              : "bg-[#F0F4F1] hover:bg-[#1A2E26] text-[#1A2E26] hover:text-white border border-[#D9E0DA]"
                          }`}
                        >
                          {isInCart ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-[#C49A45]" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="h-3.5 w-3.5" />
                              <span>Add Quote</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECTORS WE SUPPLY SECTION - COMMENTED OUT AS REQUESTED */}
      {/* 
      <section className="py-24 lg:py-28 bg-[#E4ECE6] border-y border-[#D9E0DA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#62736B] font-semibold">Industrial Applications</span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2E26] leading-tight">
              Targeted Sectors <br />
              <span className="italic font-normal text-[#C49A45] whitespace-nowrap">
                & Commercial Applications
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#62736B] font-light leading-relaxed max-w-xl mx-auto">
              High-performance specialty raw materials optimized for demanding commercial formulation standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-8 sm:p-9 flex flex-col justify-between space-y-8 shadow-xs hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D4A3E]">
                  <Droplets className="h-6 w-6" />
                </div>
                
                <h3 className="font-serif-luxury font-bold text-2xl text-[#1A2E26] group-hover:text-[#2D4A3E] transition-colors pt-1">
                  Personal Care
                </h3>

                <p className="text-xs text-[#62736B] leading-relaxed font-light">
                  High-purity actives, hyaluronates, and botanical oils for skincare and haircare formulation.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D9E0DA]/60 space-y-2.5 text-xs text-[#1A2E26] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Bio-actives & Peptides</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Natural Emollients</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Botanical Extracts</span>
                </div>
              </div>

              <div className="h-1 bg-transparent group-hover:bg-[#C49A45] transition-colors duration-300 absolute bottom-0 left-0 right-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.08 }}
              className="bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-8 sm:p-9 flex flex-col justify-between space-y-8 shadow-xs hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D4A3E]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                
                <h3 className="font-serif-luxury font-bold text-2xl text-[#1A2E26] group-hover:text-[#2D4A3E] transition-colors pt-1">
                  Home Care
                </h3>

                <p className="text-xs text-[#62736B] leading-relaxed font-light">
                  Preservatives, rheology modifiers, and surfactants designed for surface cleaners and detergents.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D9E0DA]/60 space-y-2.5 text-xs text-[#1A2E26] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Safe Preservatives</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Surfactant Blends</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Rheology Modifiers</span>
                </div>
              </div>

              <div className="h-1 bg-transparent group-hover:bg-[#C49A45] transition-colors duration-300 absolute bottom-0 left-0 right-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.16 }}
              className="bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-8 sm:p-9 flex flex-col justify-between space-y-8 shadow-xs hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D4A3E]">
                  <Leaf className="h-6 w-6" />
                </div>
                
                <h3 className="font-serif-luxury font-bold text-2xl text-[#1A2E26] group-hover:text-[#2D4A3E] transition-colors pt-1">
                  Pet Care
                </h3>

                <p className="text-xs text-[#62736B] leading-relaxed font-light">
                  Gentle botanical oils, natural herbal extracts, and mild thickeners tailored for pet hygiene.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D9E0DA]/60 space-y-2.5 text-xs text-[#1A2E26] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Gentle Botanical Oils</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Safe Herbal Extracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Mild Thickeners</span>
                </div>
              </div>

              <div className="h-1 bg-transparent group-hover:bg-[#C49A45] transition-colors duration-300 absolute bottom-0 left-0 right-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.24 }}
              className="bg-white border border-[#D9E0DA] hover:border-[#C49A45]/50 p-8 sm:p-9 flex flex-col justify-between space-y-8 shadow-xs hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-[#1A2E26] text-[#C49A45] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D4A3E]">
                  <Globe2 className="h-6 w-6" />
                </div>
                
                <h3 className="font-serif-luxury font-bold text-2xl text-[#1A2E26] group-hover:text-[#2D4A3E] transition-colors pt-1">
                  Food & Nutrition
                </h3>

                <p className="text-xs text-[#62736B] leading-relaxed font-light">
                  Specialty thickeners, natural gums, and texture enhancers meeting strict food standards.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D9E0DA]/60 space-y-2.5 text-xs text-[#1A2E26] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Specialty Thickeners</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Hydrocolloids & Gums</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C49A45] font-bold">✓</span>
                  <span>Texture Enhancers</span>
                </div>
              </div>

              <div className="h-1 bg-transparent group-hover:bg-[#C49A45] transition-colors duration-300 absolute bottom-0 left-0 right-0" />
            </motion.div>

          </div>

        </div>
      </section>
      */}





      {/* TECHNICAL EXCELLENCE & SOURCING MODEL BANNER */}
      <section className="py-20 lg:py-28 bg-[#F8F8F3] border-t border-[#D9E0DA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Editorial Image Frame with Label */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative aspect-[4/5] border border-[#D9E0DA] p-3 bg-white shadow-xl"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/tech-excellence.jpg"
                  alt="Laboratory Sourcing Precision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E26] via-transparent to-transparent opacity-65" />
                <div className="absolute bottom-5 left-5 right-5 p-3.5 bg-[#1A2E26]/90 border border-white/10 text-white space-y-0.5">
                  <span className="text-[9px] uppercase tracking-widest text-[#C49A45] font-bold">R&D & Formulation Desk</span>
                  <p className="font-serif-luxury text-xs font-bold">Pure Technical Guidance & Logistics</p>
                </div>
              </div>
            </motion.div>

            {/* Right Editorial Copy & Typography Pairing */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 border border-[#C49A45]/40 bg-[#C49A45]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C49A45]">
                <span>Technical Excellence • Global Network</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1A2E26] leading-[1.18]">
                Global Sourcing Integrity <br />
                <span className="italic font-normal text-[#C49A45]">
                  & Technical Assistance
                </span>
              </h2>

              <p className="font-serif-luxury italic text-base sm:text-lg text-[#1A2E26] leading-relaxed border-l-2 border-[#C49A45] pl-4">
                "Combining scientific expertise, manufacturer partnerships, and market intelligence to power next-generation formulations."
              </p>

              <p className="text-xs sm:text-sm text-[#62736B] leading-relaxed font-light">
                Our sales engineers across India provide formulation guidance, technical documentation (COA/MSDS), and dependable supply chain logistics to keep your production moving forward.
              </p>

              {/* Feature Badges */}
              <div className="pt-1 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-[#1A2E26]">
                <span className="bg-[#E4ECE6] border border-[#D9E0DA] px-3 py-1.5">✓ COA & MSDS Verified</span>
                <span className="bg-[#E4ECE6] border border-[#D9E0DA] px-3 py-1.5">✓ Formulation Support</span>
                <span className="bg-[#E4ECE6] border border-[#D9E0DA] px-3 py-1.5">✓ Pan-India Logistics</span>
              </div>

              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#1A2E26] hover:bg-[#2D4A3E] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <span>Connect with Technical Desk</span>
                  <ArrowRight className="h-4 w-4 text-[#C49A45]" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* STICKY BOTTOM QUOTE LIST FLOATING BAR */}
      <AnimatePresence>
        {inquiryCart.length > 0 && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-xl bg-[#1A2E26] text-white p-4 shadow-2xl border border-[#C49A45]/40 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-[#C49A45] text-[#1A2E26] flex items-center justify-center font-bold text-xs">
                {inquiryCart.length}
              </div>
              <div>
                <p className="font-serif-luxury text-sm font-bold">Selected Ingredients for Quote</p>
                <p className="text-[10px] text-[#A3B8AC]">Ready to send for specification & pricing proposal</p>
              </div>
            </div>

            <button
              onClick={() => setCartOpen(true)}
              className="bg-white hover:bg-[#E4ECE6] text-[#1A2E26] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              Review Quote List
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
