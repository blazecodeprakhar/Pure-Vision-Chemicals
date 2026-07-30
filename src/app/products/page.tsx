"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Plus, 
  Check
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const { inquiryCart, toggleCartItem } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Actives",
    "Preservatives",
    "Rheology Modifiers",
    "Herbal Extracts (Water Soluble)",
    "Herbal Extracts (Oil Soluble)",
    "Natural Oils",
    "Butters"
  ];

  // Filtering products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
        <div className="absolute bottom-[-50px] right-[-50px] h-36 w-36 rounded-full bg-brand-secondary/20 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-secondary-bright uppercase">Product Sourcing</span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Specialty Ingredients Catalog</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Browse, search, and add chemical components directly to your inquiry list for specification sheets and pricing.
          </p>
        </div>
      </section>

      {/* INTERACTIVE PRODUCTS CATALOG */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-bold text-brand-primary">Search Catalog</h2>
            <p className="text-xs text-slate-400">Filter by category or query molecular names</p>
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-12 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-3.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Catalog Tab Buttons */}
        <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none border-b border-slate-200 custom-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/15"
                  : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Product Item Counter */}
        <div className="flex items-center justify-between mt-8 mb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <span>Showing {filteredProducts.length} ingredients</span>
          {activeCategory !== "All" && <span>Category: {activeCategory}</span>}
        </div>

        {/* Interactive Products Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProducts.slice(0, 100).map((product) => {
              const isInCart = !!inquiryCart.find(item => item.id === product.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all group"
                >
                  <div>
                    <span className="text-[9px] font-bold tracking-widest text-brand-secondary uppercase bg-slate-100 rounded px-2 py-0.5 inline-block mb-3">
                      {product.category}
                    </span>
                    <h4 className="font-display font-bold text-slate-800 text-sm leading-snug group-hover:text-brand-primary transition-colors">
                      {product.name}
                    </h4>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-medium text-slate-400">Code: {product.id}</span>
                    <button 
                      onClick={() => toggleCartItem(product)}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all cursor-pointer active:scale-90 ${
                        isInCart 
                          ? "bg-brand-secondary text-white shadow-sm"
                          : "bg-slate-100 hover:bg-brand-primary/10 text-slate-600 hover:text-brand-primary"
                      }`}
                    >
                      {isInCart ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Visual truncation indicator */}
        {filteredProducts.length > 100 && (
          <div className="mt-8 text-center text-xs font-semibold text-slate-400">
            * Showing first 100 results. Use the search bar to narrow down items.
          </div>
        )}

        {/* Don't see what you need banner */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg text-brand-primary">Custom Sourcing Required?</h4>
            <p className="text-sm text-slate-500">
              Our global sourcing network covers chemicals and botanical variants not listed in the catalog.
            </p>
          </div>
          <Link 
            href="/contact"
            className="rounded-xl bg-slate-900 hover:bg-black text-white px-6 py-3 font-semibold text-sm transition-colors cursor-pointer text-center"
          >
            Inquire Custom Sourcing
          </Link>
        </div>

      </section>

    </motion.div>
  );
}
