"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShoppingBag,
  ArrowRight,
  Trash2
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { inquiryCart, toggleCartItem, clearCart, cartOpen, setCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Strictly 3 pages as requested
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Products", href: "/#catalog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const handleCartEnquiryTrigger = () => {
    setCartOpen(false);
    router.push("/contact");
  };

  return (
    <>
      {/* LUXURY EDITORIAL HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-[#D9E0DA] bg-[#F8F8F3]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo & Brand text */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <img
              src="/logo.png"
              alt="Pure Vision Chemicals Logo"
              className="h-10 w-10 shrink-0 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg sm:text-xl font-bold tracking-tight text-[#1A2E26] group-hover:text-[#2D4A3E] transition-colors leading-tight">
                PURE VISION
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#62736B] font-medium">
                CHEMICALS
              </span>
            </div>
          </Link>

          {/* Desktop Nav links (Strictly 3 pages) */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-xs tracking-wider uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 transition-colors duration-200 ${
                    isActive
                      ? "text-[#1A2E26] font-bold"
                      : "text-[#62736B] hover:text-[#1A2E26]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C49A45]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Inquiry List Drawer Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative flex items-center gap-2 rounded-none bg-[#1A2E26] hover:bg-[#2D4A3E] px-4 py-2.5 text-xs tracking-wider uppercase font-semibold text-white transition-all cursor-pointer shadow-sm active:scale-95 border border-[#1A2E26]"
            >
              <ShoppingBag className="h-4 w-4 text-[#C49A45]" />
              <span className="hidden sm:inline">Request Quote</span>
              {inquiryCart.length > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C49A45] text-[10px] text-white font-bold ml-0.5">
                  {inquiryCart.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="flex md:hidden p-2 text-[#1A2E26] hover:bg-[#E4ECE6] cursor-pointer rounded-none border border-[#D9E0DA]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-[#1A2E26]/60 backdrop-blur-xs md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 z-50 h-full w-[290px] bg-[#F8F8F3] shadow-2xl flex flex-col border-l border-[#D9E0DA] md:hidden"
            >
              <div className="flex h-20 items-center justify-between border-b border-[#D9E0DA] px-6 shrink-0">
                <span className="font-serif-luxury font-bold text-[#1A2E26] text-lg">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#62736B] hover:text-[#1A2E26] cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
                <nav className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-widest text-[#1A2E26]">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3 px-4 transition-all border-b border-[#D9E0DA]/50 ${
                          isActive
                            ? "bg-[#E4ECE6] text-[#1A2E26] font-bold border-l-2 border-l-[#C49A45]"
                            : "text-[#62736B] hover:text-[#1A2E26]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-8 border-t border-[#D9E0DA] space-y-4 text-xs text-[#62736B]">
                  <span className="block font-bold text-[#1A2E26] uppercase tracking-widest text-[10px]">Direct Desk</span>
                  <div>
                    <p className="font-semibold text-[#1A2E26]">Telephone</p>
                    <a href="tel:+919326395502" className="hover:text-[#C49A45] transition-colors block mt-0.5">+91 93263 95502</a>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A2E26]">Email Address</p>
                    <a href="mailto:purevisionchem@outlook.com" className="hover:text-[#C49A45] transition-colors block mt-0.5">purevisionchem@outlook.com</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* INQUIRY LIST SIDEBAR DRAWER */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 z-50 bg-[#1A2E26]/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-full sm:w-[460px] bg-[#F8F8F3] shadow-2xl flex flex-col border-l border-[#D9E0DA]"
            >
              {/* Drawer Header */}
              <div className="flex h-20 items-center justify-between border-b border-[#D9E0DA] px-6">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5 text-[#C49A45]" />
                  <h2 className="font-serif-luxury text-xl font-bold text-[#1A2E26]">Sample Quote List</h2>
                  <span className="rounded-full bg-[#E4ECE6] px-2.5 py-0.5 text-xs font-semibold text-[#1A2E26]">
                    {inquiryCart.length}
                  </span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 text-[#62736B] hover:text-[#1A2E26] cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                {inquiryCart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center py-12">
                    <div className="rounded-full bg-[#E4ECE6] p-4 text-[#62736B] mb-4">
                      <ShoppingBag className="h-8 w-8 text-[#2D4A3E]" />
                    </div>
                    <p className="font-serif-luxury text-lg text-[#1A2E26] font-bold">Your quote list is empty</p>
                    <p className="text-xs text-[#62736B] mt-2 max-w-[280px] leading-relaxed">
                      Select ingredients from our botanical & specialty chemical catalog on the homepage to request custom quotes and specification sheets.
                    </p>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="mt-6 inline-block bg-[#1A2E26] hover:bg-[#2D4A3E] px-6 py-3 text-xs tracking-wider uppercase font-semibold text-white transition-all cursor-pointer"
                    >
                      Browse Ingredients
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold text-[#62736B] uppercase tracking-widest">Selected Ingredients ({inquiryCart.length})</p>
                    <div className="divide-y divide-[#D9E0DA]">
                      {inquiryCart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between py-3.5">
                          <div className="pr-4">
                            <p className="font-medium text-[#1A2E26] text-sm leading-snug">{item.name}</p>
                            <span className="inline-block mt-1 text-[9px] font-bold text-[#62736B] uppercase tracking-wider bg-[#E4ECE6] px-2 py-0.5">
                              {item.category}
                            </span>
                          </div>
                          <button
                            onClick={() => toggleCartItem(item)}
                            className="p-2 text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer Actions */}
              {inquiryCart.length > 0 && (
                <div className="border-t border-[#D9E0DA] bg-[#E4ECE6]/50 p-6 space-y-3">
                  <button
                    onClick={handleCartEnquiryTrigger}
                    className="w-full flex items-center justify-center gap-2 bg-[#1A2E26] hover:bg-[#2D4A3E] text-white py-4 text-xs font-bold tracking-widest uppercase transition-all cursor-pointer"
                  >
                    <span>Proceed to Sourcing Request</span>
                    <ArrowRight className="h-4 w-4 text-[#C49A45]" />
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-center py-2 text-xs font-medium text-[#62736B] hover:text-[#1A2E26] transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    Clear Entire List
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

