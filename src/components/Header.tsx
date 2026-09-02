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
      {/* BRAND LOGO COLORED HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-[#D9E0DA] bg-[#F8F8F3]/90 backdrop-blur-md shadow-xs">
        <div className="h-[2.5px] w-full bg-gradient-to-r from-[#008F7C] via-[#0B3A71] to-[#008F7C]" />
        <div className="mx-auto flex max-w-7xl h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Standalone Logo Image */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center cursor-pointer select-none"
          >
            <img
              src="/logo.png"
              alt="Pure Vision Chemicals"
              draggable={false}
              className="h-7 sm:h-9 w-auto object-contain select-none pointer-events-auto"
            />
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-xs tracking-wider uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 transition-colors duration-200 ${
                    isActive
                      ? "text-[#093366] font-bold"
                      : "text-[#62736B] hover:text-[#093366]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#008F7C] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Inquiry List Drawer Trigger & Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative flex items-center gap-2 rounded-md bg-[#093366] hover:bg-[#0B3A71] px-4 py-2.5 text-xs tracking-wider uppercase font-semibold text-white transition-all cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#008F7C]/20 active:scale-95 border border-[#008F7C]/50"
            >
              <ShoppingBag className="h-4 w-4 text-[#008F7C]" />
              <span className="hidden sm:inline">Request Quote</span>
              {inquiryCart.length > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#008F7C] text-[10px] text-white font-bold ml-0.5 shadow-xs">
                  {inquiryCart.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="flex md:hidden p-2 text-[#093366] hover:bg-[#E4ECE6] cursor-pointer rounded-xl border border-[#D9E0DA] shadow-xs"
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
              className="fixed inset-0 z-50 bg-[#093366]/60 backdrop-blur-xs md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 z-50 h-full w-[290px] bg-[#F8F8F3] shadow-2xl flex flex-col border-l border-[#D9E0DA] rounded-l-3xl overflow-hidden md:hidden"
            >
              <div className="flex h-20 items-center justify-between border-b border-[#D9E0DA] px-6 shrink-0">
                <span className="font-serif-luxury font-bold text-[#093366] text-lg">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#62736B] hover:text-[#093366] cursor-pointer rounded-full hover:bg-black/5"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
                <nav className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-widest text-[#093366]">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3 px-4 transition-all rounded-xl border-b border-[#D9E0DA]/50 ${
                          isActive
                            ? "bg-[#E4ECE6] text-[#093366] font-bold border-l-4 border-l-[#008F7C] shadow-xs"
                            : "text-[#62736B] hover:text-[#093366] hover:bg-white/60"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-8 border-t border-[#D9E0DA] space-y-4 text-xs text-[#62736B]">
                  <span className="block font-bold text-[#093366] uppercase tracking-widest text-[10px]">Direct Desk</span>
                  <div>
                    <p className="font-semibold text-[#093366]">Telephone</p>
                    <a href="tel:+919326395502" className="hover:text-[#008F7C] transition-colors block mt-0.5">+91 93263 95502</a>
                  </div>
                  <div>
                    <p className="font-semibold text-[#093366]">Email Address</p>
                    <a href="mailto:purevisionchem@outlook.com" className="hover:text-[#008F7C] transition-colors block mt-0.5">purevisionchem@outlook.com</a>
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
              className="fixed inset-0 z-50 bg-[#093366]/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-full sm:w-[460px] bg-[#F8F8F3] shadow-2xl flex flex-col border-l border-[#D9E0DA] rounded-l-3xl overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex h-20 items-center justify-between border-b border-[#D9E0DA] px-6">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5 text-[#008F7C]" />
                  <h2 className="font-serif-luxury text-xl font-bold text-[#093366]">Sample Quote List</h2>
                  <span className="rounded-full bg-[#E4ECE6] px-2.5 py-0.5 text-xs font-semibold text-[#093366] shadow-xs">
                    {inquiryCart.length}
                  </span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 text-[#62736B] hover:text-[#093366] cursor-pointer rounded-full hover:bg-black/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                {inquiryCart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center py-12">
                    <div className="rounded-full bg-[#E4ECE6] p-4 text-[#62736B] mb-4 shadow-sm">
                      <ShoppingBag className="h-8 w-8 text-[#008F7C]" />
                    </div>
                    <p className="font-serif-luxury text-lg text-[#093366] font-bold">Your quote list is empty</p>
                    <p className="text-xs text-[#62736B] mt-2 max-w-[280px] leading-relaxed">
                      Select ingredients from our botanical & specialty chemical catalog on the homepage to request custom quotes and specification sheets.
                    </p>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="mt-6 inline-block bg-[#093366] hover:bg-[#0B3A71] px-6 py-3 text-xs tracking-wider uppercase font-semibold text-white transition-all cursor-pointer rounded-md shadow-md hover:shadow-lg"
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
                            <p className="font-medium text-[#093366] text-sm leading-snug">{item.name}</p>
                            <span className="inline-block mt-1 text-[9px] font-bold text-[#62736B] uppercase tracking-wider bg-[#E4ECE6] px-2 py-0.5 rounded-md">
                              {item.category}
                            </span>
                          </div>
                          <button
                            onClick={() => toggleCartItem(item)}
                            className="p-2 text-red-600 hover:text-red-800 transition-colors cursor-pointer rounded-full hover:bg-red-50"
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
                    className="w-full flex items-center justify-center gap-2 bg-[#093366] hover:bg-[#0B3A71] text-white py-4 text-xs font-bold tracking-widest uppercase transition-all cursor-pointer rounded-md shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-[#008F7C]/40"
                  >
                    <span>Proceed to Sourcing Request</span>
                    <ArrowRight className="h-4 w-4 text-[#008F7C]" />
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-center py-2 text-xs font-medium text-[#62736B] hover:text-[#093366] transition-colors cursor-pointer uppercase tracking-wider"
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
