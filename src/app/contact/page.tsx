"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  ArrowRight,
  ChevronDown,
  ShoppingBag
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function Contact() {
  const { inquiryCart, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "Actives",
    message: ""
  });

  // Pre-fill form message when inquiryCart changes
  useEffect(() => {
    if (inquiryCart.length > 0) {
      const productListText = inquiryCart.map(p => `• ${p.name} (${p.category})`).join("\n");
      setFormState(prev => ({
        ...prev,
        message: `Hello Pure Vision Chemicals Team,\n\nI would like to request detailed COA specification sheets, stock availability, and bulk pricing for the following ingredients:\n${productListText}\n\nPlease share the proposal.\n`
      }));
    }
  }, [inquiryCart]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", company: "", email: "", phone: "", interest: "Actives", message: "" });
      clearCart();
    }, 6000);
  };

  return (
    <div className="relative min-h-screen bg-[#F8F8F3] text-[#093366] flex flex-col select-none pb-20">
      
      {/* GRAND EDITORIAL CONTACT HERO SECTION */}
      <section className="relative bg-[#E4ECE6] text-[#093366] py-16 sm:py-28 lg:py-32 border-b border-[#D9E0DA] overflow-hidden">
        {/* Glow ambient background with Soft Pista & Teal Accents */}
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#008F7C]/15 rounded-full blur-[140px]" />
          <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-[#0B3A71]/10 rounded-full blur-[90px]" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#008F7C]/20 rounded-full blur-[90px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          


          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#093366] leading-[1.12]"
          >
            Request Samples <br />
            <span className="italic font-normal text-[#008F7C]">
              & Custom Quotations
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-4 pt-2"
          >
            <span className="hidden sm:block h-[1px] w-12 bg-[#008F7C]/40" />
            <p className="font-serif-luxury italic text-base sm:text-xl text-[#62736B] tracking-wide max-w-2xl font-normal leading-relaxed">
              "Collaborate directly with our technical sales experts for specification sheets, stock availability, and bulk pricing."
            </p>
            <span className="hidden sm:block h-[1px] w-12 bg-[#008F7C]/40" />
          </motion.div>

        </div>
      </section>


      {/* CONTACT BODY & FORM */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Details */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#008F7C]">Direct Desk</span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#093366]">Get in Touch</h2>
              <p className="text-xs text-[#62736B] leading-relaxed font-light">
                We look forward to partnering with your procurement and R&D formulation teams.
              </p>
            </div>

            {/* Direct Channel Cards with Motion Hover */}
            <div className="space-y-5">
              
              <motion.div 
                whileHover={{ x: 6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="flex items-start gap-4 p-5 bg-white border border-[#D9E0DA] hover:border-[#008F7C]/50 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-xl cursor-pointer group"
              >
                <div className="flex h-11 w-11 items-center justify-center bg-[#093366] text-white shrink-0 rounded-xl shadow-xs group-hover:bg-[#008F7C] group-hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#093366]">Email Address</h5>
                  <p className="text-xs text-[#62736B] mt-1">
                    <a href="mailto:sales@purevisionchemicals.com" className="hover:text-[#008F7C] transition-colors font-medium">
                      sales@purevisionchemicals.com
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="flex items-start gap-4 p-5 bg-white border border-[#D9E0DA] hover:border-[#008F7C]/50 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-xl cursor-pointer group"
              >
                <div className="flex h-11 w-11 items-center justify-center bg-[#093366] text-white shrink-0 rounded-xl shadow-xs group-hover:bg-[#008F7C] group-hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#093366]">Telephone</h5>
                  <p className="text-xs text-[#62736B] mt-1">
                    <a href="tel:+919326395502" className="hover:text-[#008F7C] transition-colors font-medium">
                      +91 93263 95502
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="flex items-start gap-4 p-5 bg-white border border-[#D9E0DA] hover:border-[#008F7C]/50 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-xl cursor-pointer group"
              >
                <div className="flex h-11 w-11 items-center justify-center bg-[#093366] text-white shrink-0 rounded-xl shadow-xs group-hover:bg-[#008F7C] group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#093366]">HQ Office Address</h5>
                  <p className="text-xs text-[#62736B] mt-1 leading-relaxed font-light">
                    Unit 201, Jai Malhar, Mumbai - 400064, India
                  </p>
                </div>
              </motion.div>

            </div>

            {/* HQ Map Location Card */}
            <div className="relative h-44 sm:h-48 w-full border border-[#D9E0DA] bg-gradient-to-br from-[#F0F4F1] via-[#E4ECE6] to-[#D5E2D9] rounded-2xl shadow-md overflow-hidden p-4 sm:p-5 flex flex-col justify-between group">
              {/* Subtle background dot pattern */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none" 
                style={{ 
                  backgroundImage: `radial-gradient(#093366 1px, transparent 1px)`, 
                  backgroundSize: '16px 16px' 
                }} 
              />

              {/* Location Text Details */}
              <div className="relative z-10 space-y-2 max-w-md">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#093366] text-[#008F7C] shadow-xs shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury font-bold text-base text-[#093366]">
                      Pure Vision Chemicals Mumbai HQ
                    </h4>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#008F7C]">
                      Headquarters
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#093366] font-medium leading-relaxed pt-1 pl-11">
                  Unit 201, Jai Malhar, Mumbai 400064, India
                </p>
              </div>

              {/* Bottom Right Button for Google Maps */}
              <div className="relative z-10 flex justify-end">
                <a
                  href="https://maps.app.goo.gl/MFdwPsYWStsuoMrz9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#093366] hover:bg-[#0B3A71] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-xl shadow-lg border border-[#008F7C]/30 hover:scale-105 active:scale-95"
                >
                  <MapPin className="h-4 w-4 text-[#008F7C]" />
                  <span>OPEN GOOGLE MAPS</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card with Curved Edges & Shadow */}
          <motion.div 
            className="lg:col-span-7 bg-white border border-[#D9E0DA] p-8 sm:p-10 shadow-lg rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-b border-[#D9E0DA] pb-6 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#008F7C]">Official Form</span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#093366] mt-1">Specification Sourcing Request</h3>
            </div>
            
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-[#E4ECE6] border border-[#0B3A71] p-8 text-center text-[#093366] space-y-4 rounded-2xl shadow-md"
              >
                <div className="h-12 w-12 bg-[#093366] text-white flex items-center justify-center mx-auto rounded-xl shadow-xs">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="font-serif-luxury text-xl font-bold">Inquiry Submitted Successfully</h4>
                <p className="text-xs text-[#62736B] leading-relaxed max-w-sm mx-auto font-light">
                  Thank you! Our technical sales experts will verify stock, prepare specification sheets, and send a proposal to your inbox shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#62736B] uppercase tracking-wider">Your Name *</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-[#D9E0DA] bg-[#F8F8F3] text-xs text-[#093366] focus:outline-none focus:border-[#093366] transition-all rounded-xl shadow-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#62736B] uppercase tracking-wider">Company Name *</label>
                    <input 
                      type="text"
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleInputChange}
                      placeholder="Acme Formulations Ltd."
                      className="w-full px-4 py-3 border border-[#D9E0DA] bg-[#F8F8F3] text-xs text-[#093366] focus:outline-none focus:border-[#093366] transition-all rounded-xl shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#62736B] uppercase tracking-wider">Corporate Email *</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="purchasing@acme.com"
                      className="w-full px-4 py-3 border border-[#D9E0DA] bg-[#F8F8F3] text-xs text-[#093366] focus:outline-none focus:border-[#093366] transition-all rounded-xl shadow-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#62736B] uppercase tracking-wider">Phone / WhatsApp *</label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-[#D9E0DA] bg-[#F8F8F3] text-xs text-[#093366] focus:outline-none focus:border-[#093366] transition-all rounded-xl shadow-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#62736B] uppercase tracking-wider">Primary Category of Interest</label>
                  <div className="relative">
                    <select 
                      name="interest"
                      value={formState.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#D9E0DA] bg-[#F8F8F3] text-xs text-[#093366] appearance-none focus:outline-none focus:border-[#093366] transition-all rounded-xl shadow-xs"
                    >
                      <option value="Actives">Actives (Peptides, Hyaluronates)</option>
                      <option value="UV Filters & Moisturizer">UV Filters & Moisturizer</option>
                      <option value="Functional Products">Functional Products</option>
                      <option value="Preservatives">Preservatives (Phenoxyethanol, Hydantoins)</option>
                      <option value="Rheology Modifiers">Rheology Modifiers (Copolymers, Gels)</option>
                      <option value="Herbal Extracts">Botanical Herbal Extracts</option>
                      <option value="Natural Oils">Natural & Essential Oils</option>
                      <option value="Butters">Natural Butters (Shea, Cocoa)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-3.5 h-4 w-4 text-[#62736B] pointer-events-none" />
                  </div>
                </div>

                {/* Prepopulated Quote Cart Display */}
                {inquiryCart.length > 0 && (
                  <div className="space-y-2 p-4 bg-[#E4ECE6] border border-[#D9E0DA] rounded-xl shadow-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-[#093366] uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <ShoppingBag className="h-3.5 w-3.5 text-[#008F7C]" />
                        Attached Sourcing List ({inquiryCart.length} items)
                      </span>
                    </div>
                    <div className="max-h-28 overflow-y-auto divide-y divide-[#D9E0DA] pr-2 custom-scrollbar">
                      {inquiryCart.map(item => (
                        <div key={item.id} className="text-xs py-1.5 text-[#093366] flex justify-between font-medium">
                          <span>{item.name}</span>
                          <span className="text-[9px] text-[#62736B] uppercase font-semibold bg-white/60 px-2 py-0.5 rounded-md">{item.category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#62736B] uppercase tracking-wider">To request information, please complete the contact form below *</label>
                  <textarea 
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Specify molecular weights, purity levels, estimated volume quantities required..."
                    className="w-full px-4 py-3 border border-[#D9E0DA] bg-[#F8F8F3] text-xs text-[#093366] focus:outline-none focus:border-[#093366] transition-all rounded-xl shadow-xs"
                  />
                </div>

                <button 
                  type="submit"
                  className="group relative overflow-hidden w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#093366] via-[#008F7C] to-[#093366] hover:brightness-110 text-white py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer rounded-md shadow-md hover:shadow-2xl hover:shadow-[#008F7C]/30 hover:-translate-y-1 active:scale-95 border border-[#008F7C]/50 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="h-4 w-4 text-[#008F7C] group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </section>

    </div>
  );
}
