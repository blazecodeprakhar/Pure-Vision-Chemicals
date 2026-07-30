"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Check, 
  ArrowRight,
  ChevronDown
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

  // Pre-fill form from cart inquiry list
  useEffect(() => {
    if (inquiryCart.length > 0) {
      const productListText = inquiryCart.map(p => `• ${p.name} (${p.category})`).join("\n");
      setFormState(prev => ({
        ...prev,
        message: `Hello PV Chem Team,\n\nI would like to request detailed specifications, availability, and quotes for the following specialty ingredients:\n${productListText}\n\nPlease get back to me with the details.\n`
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
    }, 5000);
  };

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
        <div className="absolute top-[-50px] right-[-50px] h-36 w-36 rounded-full bg-brand-secondary/20 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-secondary-bright uppercase">Contact Channels</span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Request Samples & Quotations</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Collaborate on raw material formulations. Send us a message or reach out via email or phone.
          </p>
        </div>
      </section>

      {/* CONTACT BODY & FORM */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left side details */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-brand-primary">Get in Touch</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                We look forward to partnering with your procurement and technical R&D teams.
              </p>
            </div>

            {/* Direct details card */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-brand-secondary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-800">Email Address</h5>
                  <p className="text-sm text-slate-500 mt-0.5"><a href="mailto:purevisionchem@outlook.com" className="hover:text-brand-primary transition-colors">purevisionchem@outlook.com</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-brand-secondary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-800">Telephone</h5>
                  <p className="text-sm text-slate-500 mt-0.5"><a href="tel:+919326395502" className="hover:text-brand-primary transition-colors">+91 93263 95502</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-brand-secondary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-800">HQ Office Address</h5>
                  <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Unit 201, Jai Malhar, Mumbai - 400064, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-brand-secondary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-800">Operation Hours</h5>
                  <p className="text-sm text-slate-500 mt-0.5">Mon - Sat: 10:00 AM - 7:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Simulated Map rendering */}
            <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center">
              <div className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="text-center space-y-2 z-10 px-4">
                <MapPin className="h-8 w-8 text-brand-primary mx-auto animate-bounce" />
                <p className="font-display font-bold text-slate-800 text-sm">PV Chem Mumbai HQ</p>
                <p className="text-[11px] text-slate-400">Unit 201, Jai Malhar, Mumbai 064</p>
              </div>
            </div>
          </motion.div>

          {/* Right side form */}
          <motion.div 
            className="lg:col-span-7 bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-sm"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="font-display text-xl font-bold text-slate-800 mb-6">Specification Sourcing Request</h3>
            
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-800 space-y-3"
              >
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-base">Inquiry Submitted Successfully</h4>
                <p className="text-xs text-emerald-600 leading-relaxed max-w-sm mx-auto">
                  Thank you! Our technical sales engineers will verify stock, specification sheets (COA), and send a proposal to your inbox shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:bg-white focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company Name</label>
                    <input 
                      type="text"
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleInputChange}
                      placeholder="Acme Formulations Ltd."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:bg-white focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Email</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="purchasing@acme.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:bg-white focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:bg-white focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Primary Category of Interest</label>
                  <div className="relative">
                    <select 
                      name="interest"
                      value={formState.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:bg-white focus:border-transparent transition-all"
                    >
                      <option value="Actives">Actives (Peptides, Hyaluronates)</option>
                      <option value="Preservatives">Preservatives (Phenoxyethanol, Hydantoins)</option>
                      <option value="Rheology Modifiers">Rheology Modifiers (Copolymers, Gels)</option>
                      <option value="Herbal Extracts">Botanical / Herbal Extracts</option>
                      <option value="Natural Oils">Natural & Essential Oils</option>
                      <option value="Butters">Natural Butters (Shea, Cocoa)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-3.5 h-5 w-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Prepopulated Inquiry Items display */}
                {inquiryCart.length > 0 && (
                  <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Attached Sourcing List ({inquiryCart.length})</span>
                    <div className="max-h-24 overflow-y-auto divide-y divide-slate-100 pr-2 custom-scrollbar">
                      {inquiryCart.map(item => (
                        <div key={item.id} className="text-xs py-1.5 text-slate-600 flex justify-between font-medium">
                          <span>{item.name}</span>
                          <span className="text-[9px] text-slate-400 uppercase font-semibold">{item.category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Specification Details / Message</label>
                  <textarea 
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Specify molecular weights, purity levels, estimated volume quantities required..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:bg-white focus:border-transparent transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-primary hover:bg-brand-primary-dark text-white py-4 font-bold shadow-md shadow-brand-primary/10 transition-all hover:translate-y-[-1px] cursor-pointer"
                >
                  <span>Submit B2B Sourcing Request</span>
                  <ArrowRight className="h-5 w-5" />
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
}
