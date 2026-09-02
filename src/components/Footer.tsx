"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#093366] text-[#E4ECE6] border-t border-[#D9E0DA]/20 py-20 lg:py-24 select-none mt-auto">
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#008F7C] via-[#0B3A71] to-[#008F7C]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* MAIN EDITORIAL FOOTER BODY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Hero Statement & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#008F7C]">
              Formulation Desk • Pure Vision Chemicals
            </span>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Have a formula <br />
              <span className="italic font-normal text-[#008F7C]">
                in mind?
              </span>
            </h2>

            <p className="text-[#A3B8AC] text-sm sm:text-base max-w-lg font-light leading-relaxed">
              Tell us what raw materials or specifications you need. Our technical desk will help you find the right starting point.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#008F7C] hover:bg-[#007767] text-white font-extrabold px-8 py-4 text-xs uppercase tracking-widest transition-all cursor-pointer rounded-md shadow-lg hover:shadow-xl hover:shadow-[#008F7C]/25 hover:-translate-y-0.5"
              >
                <span>Start an Enquiry</span>
                <ArrowUpRight className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Right Direct Details & Nav */}
          <div className="lg:col-span-5 space-y-8 lg:pt-6">
            
            {/* Contact channels list with icons */}
            <div className="space-y-5 text-xs sm:text-sm font-light text-[#A3B8AC]">
              
              <div className="flex items-center gap-3.5 group">
                <div className="h-8 w-8 rounded-xl border border-[#008F7C]/40 bg-[#008F7C]/10 flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="h-4 w-4 text-[#008F7C]" />
                </div>
                <a 
                  href="mailto:purevisionchem@outlook.com" 
                  className="text-white hover:text-[#008F7C] transition-colors font-medium"
                >
                  purevisionchem@outlook.com
                </a>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="h-8 w-8 rounded-xl border border-[#008F7C]/40 bg-[#008F7C]/10 flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="h-4 w-4 text-[#008F7C]" />
                </div>
                <a 
                  href="tel:+919326395502" 
                  className="text-white hover:text-[#008F7C] transition-colors font-medium"
                >
                  +91 93263 95502
                </a>
              </div>

              <div className="flex items-start gap-3.5 group">
                <div className="h-8 w-8 rounded-xl border border-[#008F7C]/40 bg-[#008F7C]/10 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="h-4 w-4 text-[#008F7C]" />
                </div>
                <span className="leading-relaxed text-white/90">
                  Unit 201, Jai Malhar, Mumbai - 400064, India
                </span>
              </div>

            </div>

            {/* Quick Navigation Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8 text-xs uppercase font-bold tracking-widest text-[#A3B8AC]">
              <Link href="/" className="flex items-center gap-1.5 text-white hover:text-[#008F7C] transition-colors">
                <span>Home</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#008F7C]" />
              </Link>
              <Link href="/#catalog" className="flex items-center gap-1.5 text-white hover:text-[#008F7C] transition-colors">
                <span>Our Products</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#008F7C]" />
              </Link>
              <Link href="/about" className="flex items-center gap-1.5 text-white hover:text-[#008F7C] transition-colors">
                <span>About Us</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#008F7C]" />
              </Link>
              <Link href="/contact" className="flex items-center gap-1.5 text-white hover:text-[#008F7C] transition-colors">
                <span>Contact</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#008F7C]" />
              </Link>
            </div>

          </div>

        </div>

        {/* SUBFOOTER COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3B8AC]/70 tracking-wider">
          <span>© {currentYear} Pure Vision Chemicals. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
