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
      <section className="relative bg-[#093366] text-[#E4ECE6] py-16 sm:py-28 lg:py-32 border-b border-[#D9E0DA]/20 overflow-hidden">
        {/* Ambient Glow with Vibrant Teal & Gold Accents */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#0B3A71] rounded-full blur-[140px]" />
          <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-[#008F7C]/25 rounded-full blur-[90px]" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#008F7C]/35 rounded-full blur-[90px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 border border-[#008F7C]/40 bg-[#008F7C]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#008F7C] mx-auto rounded-md shadow-xs"
          >
            <span>Specification Sourcing • Technical Desk</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12]"
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
            <p className="font-serif-luxury italic text-base sm:text-xl text-[#A3B8AC] tracking-wide max-w-2xl font-normal leading-relaxed">
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

            {/* Direct Channel Cards with Curved Edges & Shadows */}
            <div className="space-y-5">
              
              <div className="flex items-start gap-4 p-5 bg-white border border-[#D9E0DA] hover:border-[#008F7C]/50 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center bg-[#093366] text-[#008F7C] shrink-0 rounded-xl shadow-xs">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#093366]">Email Address</h5>
                  <p className="text-xs text-[#62736B] mt-1">
                    <a href="mailto:purevisionchem@outlook.com" className="hover:text-[#008F7C] transition-colors font-medium">
                      purevisionchem@outlook.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-[#D9E0DA] hover:border-[#008F7C]/50 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center bg-[#093366] text-[#008F7C] shrink-0 rounded-xl shadow-xs">
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
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-[#D9E0DA] hover:border-[#008F7C]/50 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center bg-[#093366] text-[#008F7C] shrink-0 rounded-xl shadow-xs">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#093366]">HQ Office Address</h5>
                  <p className="text-xs text-[#62736B] mt-1 leading-relaxed font-light">
                    Unit 201, Jai Malhar, Mumbai - 400064, India
                  </p>
                </div>
              </div>

            </div>

            {/* HQ Google Map Display Embed with Theme Styling */}
            <div className="relative h-64 w-full border border-[#D9E0DA] bg-[#E4ECE6] rounded-2xl shadow-md overflow-hidden group">
              <iframe
                title="Pure Vision Chemicals Location Map"
                src="https://maps.google.com/maps?q=19.0764258,72.8650275&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(102%) saturate(85%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Overlay Badge to open direct Google Maps location */}
              <div className="absolute bottom-3 right-3 z-10">
                <a
                  href="https://maps.app.goo.gl/MFdwPsYWStsuoMrz9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#093366] hover:bg-[#0B3A71] text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all rounded-md shadow-lg border border-[#008F7C]/30 hover:scale-105"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#008F7C]" />
                  <span>Open Google Maps</span>
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
                <div className="h-12 w-12 bg-[#093366] text-[#008F7C] flex items-center justify-center mx-auto rounded-xl shadow-xs">
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
                  <label className="text-[10px] font-bold text-[#62736B] uppercase tracking-wider">Specification Details / Message *</label>
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
                  <span>Submit Sourcing Request</span>
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
