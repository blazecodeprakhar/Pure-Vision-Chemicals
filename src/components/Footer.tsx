"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import faviconImg from "@/assets/favicon.png";
import logoTextImg from "@/assets/logo_text.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary-dark text-slate-300 border-t border-white/5 py-12 lg:py-16 select-none mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center h-9 select-none shrink-0">
                {/* Apply filters to make the logo look stunning on a dark background */}
                <Image
                  src={logoTextImg}
                  alt="Pure Vision Chemicals"
                  className="h-7 sm:h-8 w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Sourcing specialty chemicals, actives, and natural botanicals for Personal Care, Home Care, Pet Care, and Food formulation sectors.
            </p>
          </div>

          {/* Links Quick */}
          <div className="space-y-4">
            <h5 className="text-xs uppercase font-extrabold tracking-widest text-white">Navigation</h5>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <Link href="/" className="text-left text-slate-400 hover:text-white transition-colors duration-200">Home Landing</Link>
              <Link href="/about" className="text-left text-slate-400 hover:text-white transition-colors duration-200">Corporate Profile</Link>
              <Link href="/products" className="text-left text-slate-400 hover:text-white transition-colors duration-200">Active Products</Link>
              <Link href="/industries" className="text-left text-slate-400 hover:text-white transition-colors duration-200">Sectors Supplied</Link>
              <Link href="/contact" className="text-left text-slate-400 hover:text-white transition-colors duration-200">Get in Touch</Link>
            </div>
          </div>

          {/* Categories links */}
          <div className="space-y-4">
            <h5 className="text-xs uppercase font-extrabold tracking-widest text-white">Ingredient Portfolios</h5>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <Link href="/products" className="text-left text-slate-400 hover:text-white transition-colors duration-200">Functional Actives</Link>
              <Link href="/products" className="text-left text-slate-400 hover:text-white transition-colors duration-200">Safe Preservatives</Link>
              <Link href="/products" className="text-left text-slate-400 hover:text-white transition-colors duration-200">Botanical Essential Oils</Link>
              <Link href="/products" className="text-left text-slate-400 hover:text-white transition-colors duration-200">Natural Emollient Butters</Link>
            </div>
          </div>

          {/* Direct details */}
          <div className="space-y-4">
            <h5 className="text-xs uppercase font-extrabold tracking-widest text-white">India Sales HQ</h5>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <p>Email: <a href="mailto:purevisionchem@outlook.com" className="hover:text-white transition-colors">purevisionchem@outlook.com</a></p>
              <p>Phone: <a href="tel:+919326395502" className="hover:text-white transition-colors">+91 93263 95502</a></p>
              <p>Address: Unit 201, Jai Malhar, Mumbai - 400064, India</p>
            </div>
          </div>

        </div>

        {/* Subfoot copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {currentYear} Pure Vision Chemicals. All rights reserved.</span>
          <span>Where Vision Meets Science | Mumbai, India</span>
        </div>

      </div>
    </footer>
  );
}
