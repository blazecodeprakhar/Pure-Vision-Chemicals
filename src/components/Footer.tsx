"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#E4ECE6] text-[#093366] border-t border-[#D9E0DA] py-20 lg:py-24 select-none mt-auto">
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#008F7C] via-[#0B3A71] to-[#008F7C]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* MAIN EDITORIAL FOOTER BODY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Hero Statement & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#008F7C]">
              Formulation Desk • Pure Vision Chemicals
            </span>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#093366] leading-[1.12]">
              Have a formula <br />
              <span className="italic font-normal text-[#008F7C]">
                in mind?
              </span>
            </h2>

            <p className="text-[#62736B] text-sm sm:text-base max-w-lg font-light leading-relaxed">
              Tell us what raw materials or specifications you need. Our technical desk will help you find the right starting point.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-flex items-center gap-2.5 bg-[#008F7C] hover:bg-[#007767] text-white font-extrabold px-6 py-3.5 text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer rounded-md shadow-lg hover:shadow-2xl hover:shadow-[#008F7C]/40 hover:-translate-y-1 active:scale-95 border border-[#008F7C] before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700"
              >
                <span>Start an Enquiry</span>
                <ArrowUpRight className="h-4 w-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>

              <a
                href="https://wa.me/919326395502"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-5 py-3.5 text-xs uppercase tracking-widest transition-all duration-300 rounded-md shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/30 hover:-translate-y-1 active:scale-95 border border-[#25D366]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.708 1.458h.005c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pure-vision-chemicals-b74654387/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold px-5 py-3.5 text-xs uppercase tracking-widest transition-all duration-300 rounded-md shadow-lg hover:shadow-2xl hover:shadow-[#0A66C2]/30 hover:-translate-y-1 active:scale-95 border border-[#0A66C2]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Direct Details & Nav */}
          <div className="lg:col-span-5 space-y-8 lg:pt-6">

            {/* Contact channels list with icons */}
            <div className="space-y-5 text-xs sm:text-sm font-light text-[#62736B]">

              <a
                href="mailto:sales@purevisionchemicals.com"
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="h-8 w-8 rounded-xl border border-[#008F7C]/40 bg-[#008F7C]/10 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#008F7C] transition-colors duration-300">
                  <Mail className="h-4 w-4 text-[#008F7C] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-[#093366] group-hover:text-[#008F7C] transition-colors font-medium">
                  sales@purevisionchemicals.com
                </span>
              </a>

              <a
                href="tel:+919326395502"
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="h-8 w-8 rounded-xl border border-[#008F7C]/40 bg-[#008F7C]/10 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#008F7C] transition-colors duration-300">
                  <Phone className="h-4 w-4 text-[#008F7C] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-[#093366] group-hover:text-[#008F7C] transition-colors font-medium">
                  +91 93263 95502
                </span>
              </a>

              <a
                href="https://maps.app.goo.gl/MFdwPsYWStsuoMrz9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="h-8 w-8 rounded-xl border border-[#008F7C]/40 bg-[#008F7C]/10 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#008F7C] transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-[#008F7C] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="leading-relaxed text-[#093366] group-hover:text-[#008F7C] transition-colors font-medium">
                  Unit 201, Jai Malhar, Mumbai - 400064, India
                </span>
              </a>

            </div>

            {/* Quick Navigation Links */}
            <div className="pt-6 border-t border-[#D9E0DA] flex flex-wrap items-center gap-6 sm:gap-8 text-xs uppercase font-bold tracking-widest text-[#62736B]">
              <Link href="/" className="flex items-center gap-1.5 text-[#093366] hover:text-[#008F7C] transition-colors">
                <span>Home</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#008F7C]" />
              </Link>
              <Link href="/#catalog" className="flex items-center gap-1.5 text-[#093366] hover:text-[#008F7C] transition-colors">
                <span>Our Products</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#008F7C]" />
              </Link>
              <Link href="/about" className="flex items-center gap-1.5 text-[#093366] hover:text-[#008F7C] transition-colors">
                <span>About Us</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#008F7C]" />
              </Link>
              <Link href="/contact" className="flex items-center gap-1.5 text-[#093366] hover:text-[#008F7C] transition-colors">
                <span>Contact</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#008F7C]" />
              </Link>
            </div>

          </div>

        </div>

        {/* SUBFOOTER COPYRIGHT */}
        <div className="border-t border-[#D9E0DA] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#62736B] tracking-wider">
          <span>© {currentYear} Pure Vision Chemicals. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
