"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShoppingCart,
  Check,
  ArrowRight
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import faviconImg from "@/assets/favicon.png";
import logoTextImg from "@/assets/logo_text.png";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { inquiryCart, toggleCartItem, clearCart, cartOpen, setCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" }
  ];

  const handleCartEnquiryTrigger = () => {
    setCartOpen(false);
    router.push("/contact");
  };

  return (
    <>
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo & Brand text */}
          <Link href="/" className="flex items-center cursor-pointer group">
            <div className="flex items-center h-9 select-none shrink-0">
              <Image
                src={logoTextImg}
                alt="Pure Vision Chemicals"
                className="h-7 sm:h-8 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative py-2 px-3 rounded-lg transition-colors duration-200 ${isActive
                      ? "text-brand-secondary font-bold"
                      : "text-slate-600 hover:text-brand-secondary"
                    }`}
                >
                  {/* Hover background pill */}
                  <AnimatePresence>
                    {hoveredLink === link.href && (
                      <motion.span
                        layoutId="hoverBgPill"
                        className="absolute inset-0 bg-slate-100 rounded-lg -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-secondary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Inquiry Cart Floating Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative flex items-center gap-2 rounded-full bg-slate-50 hover:bg-slate-100 px-4 py-2 text-sm font-semibold text-brand-primary transition-all border border-slate-200/80 cursor-pointer shadow-sm active:scale-95"
            >
              <ShoppingCart className="h-4 w-4 text-brand-secondary" />
              <span className="hidden sm:inline">Enquiry List</span>
              {inquiryCart.length > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-secondary text-xs text-white font-bold animate-bounce">
                  {inquiryCart.length}
                </span>
              )}
            </button>

            {/* Mobile Menu button */}
            <button
              className="flex md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900 md:hidden"
            />
            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Header */}
              <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6 shrink-0">
                <span className="font-display font-bold text-brand-primary text-base">Navigation</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links with Staggered animations */}
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <motion.nav 
                  className="flex flex-col gap-2 font-semibold text-slate-700"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: { staggerChildren: 0.08 }
                    }
                  }}
                >
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          show: { opacity: 1, x: 0 }
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-3 px-4 rounded-xl transition-all ${isActive
                              ? "bg-slate-100 text-brand-secondary"
                              : "hover:bg-slate-50 text-slate-700 hover:text-brand-secondary"
                            }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.nav>

                {/* Direct Contact Info in Mobile Menu */}
                <div className="mt-12 pt-8 border-t border-slate-100 space-y-4 px-4 text-xs text-slate-500">
                  <span className="block font-bold text-slate-400 uppercase tracking-widest">Direct Desk</span>
                  <div>
                    <p className="font-medium text-slate-700">Telephone</p>
                    <a href="tel:+919326395502" className="hover:text-brand-secondary transition-colors block mt-0.5">+91 93263 95502</a>
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Email Address</p>
                    <a href="mailto:purevisionchem@outlook.com" className="hover:text-brand-secondary transition-colors block mt-0.5">purevisionchem@outlook.com</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PERSISTENT FLOATING INQUIRY LIST SIDEBAR DRAWER */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-full sm:w-[480px] bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-brand-secondary" />
                  <h2 className="font-display text-lg font-bold text-brand-primary">Inquiry List</h2>
                  <span className="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
                    {inquiryCart.length} items
                  </span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Drawer Body - Selection List */}
              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                {inquiryCart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="rounded-full bg-slate-100 p-4 text-slate-400 mb-4">
                      <ShoppingCart className="h-8 w-8" />
                    </div>
                    <p className="font-semibold text-slate-600">Your list is empty</p>
                    <p className="text-sm text-slate-400 mt-1 max-w-[280px]">
                      Browse our chemical catalog and add ingredients to request specifications and quotes.
                    </p>
                    <Link
                      href="/products"
                      onClick={() => setCartOpen(false)}
                      className="mt-6 inline-block rounded-full bg-brand-primary hover:bg-brand-primary-dark px-6 py-2.5 text-sm font-semibold text-white transition-all cursor-pointer shadow-md shadow-brand-primary/10"
                    >
                      Browse Catalog
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Selected Ingredients</p>
                    <div className="divide-y divide-slate-100 border-y border-slate-100">
                      {inquiryCart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between py-3.5">
                          <div className="pr-4">
                            <p className="font-semibold text-slate-700 text-sm leading-snug">{item.name}</p>
                            <span className="inline-block mt-1 rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                              {item.category}
                            </span>
                          </div>
                          <button
                            onClick={() => toggleCartItem(item)}
                            className="text-xs font-medium text-red-500 hover:text-red-700 py-1 px-2.5 rounded hover:bg-red-50 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Drawer Actions */}
              {inquiryCart.length > 0 && (
                <div className="border-t border-slate-200 bg-slate-50 p-6 space-y-3">
                  <button
                    onClick={handleCartEnquiryTrigger}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-primary hover:bg-brand-primary-dark text-white py-3.5 font-bold shadow-md shadow-brand-primary/10 transition-all hover:translate-y-[-1px] cursor-pointer"
                  >
                    <span>Request Quotation / Specs</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-center py-2 text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    Clear All Selected
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
