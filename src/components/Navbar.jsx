import React, { useState } from "react";
import brandLogo from "../image/brand-logo.png"; // Ensure this path is correct

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Toggle accordion in mobile menu
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <header className="fixed top-0 md:w-full lg:w-full w-full z-50 bg-[#040914]/80 backdrop-blur-md border-b border-border transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left Side: Logo & Location */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-9 h-9 bg-card border border-border rounded-xl flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition">
                <div className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 bg-primary/20 rounded-full"></div>
                <div className="absolute top-2.5 right-2 w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold tracking-wide text-white leading-none flex items-start gap-1">
                  Zila Seba
                  <svg className="w-3 h-3 text-primary -mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            {/* <div>
              <img src={brandLogo} className="" alt="" />
            </div> */}

            {/* Location Selector (Hidden on extra small screens) */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-[#0A0F1C] hover:bg-card hover:border-primary/50 transition">
              <svg className="w-4 h-4 text-textMuted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium text-white">Bogura</span>
            </button>
          </div>

          {/* Center/Right Nav Links (Desktop View) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-textMuted h-full">
            {/* Dropdown 1: আয়করুন */}
            <div className="relative group h-full flex items-center cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-white transition">
                <span>আয়করুন</span>
                <svg className="w-4 h-4 text-textMuted group-hover:text-white transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute top-[100%] left-0 w-56 pt-2 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-2 flex flex-col gap-1">
                  <a href="#" className="px-4 py-2.5 rounded-xl text-textMuted hover:text-white hover:bg-primary/10 transition flex justify-between items-center group/item">
                    রাইডার হোন <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-primary">→</span>
                  </a>
                  <a href="#" className="px-4 py-2.5 rounded-xl text-textMuted hover:text-white hover:bg-primary/10 transition flex justify-between items-center group/item">
                    মার্চেন্ট একাউন্ট <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-primary">→</span>
                  </a>
                  <a href="#" className="px-4 py-2.5 rounded-xl text-textMuted hover:text-white hover:bg-primary/10 transition flex justify-between items-center group/item">
                    সার্ভিস প্রোভাইডার <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-primary">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Dropdown 2: সার্ভিসসমূহ */}
            <div className="relative group h-full flex items-center cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-white transition">
                <span>সার্ভিসসমূহ</span>
                <svg className="w-4 h-4 text-textMuted group-hover:text-white transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-2 grid grid-cols-1 gap-1">
                  <a href="#" className="px-4 py-3 rounded-xl hover:bg-cardHover transition flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm leading-tight">হোটেল ও রেস্টুরেন্ট</h4>
                      <p className="text-xs text-textMuted mt-0.5">খাবার ও বুকিং</p>
                    </div>
                  </a>
                  <a href="#" className="px-4 py-3 rounded-xl hover:bg-cardHover transition flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm leading-tight">ডাক্তার ও ক্লিনিক</h4>
                      <p className="text-xs text-textMuted mt-0.5">স্বাস্থ্য সেবা</p>
                    </div>
                  </a>
                  <a href="#" className="px-4 py-3 rounded-xl hover:bg-cardHover transition flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm leading-tight">লোকাল সার্ভিস</h4>
                      <p className="text-xs text-textMuted mt-0.5">দৈনন্দিন কাজ</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Dropdown 3: হেল্প */}
            <div className="relative group h-full flex items-center cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-white transition">
                <span>হেল্প</span>
                <svg className="w-4 h-4 text-textMuted group-hover:text-white transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-48 pt-2 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-2 flex flex-col gap-1 text-center">
                  <a href="#" className="px-4 py-2.5 rounded-xl text-textMuted hover:text-white hover:bg-cardHover transition">কাস্টমার সাপোর্ট</a>
                  <a href="#" className="px-4 py-2.5 rounded-xl text-textMuted hover:text-white hover:bg-cardHover transition">সাধারণ জিজ্ঞাসা (FAQ)</a>
                  <a href="#" className="px-4 py-2.5 rounded-xl text-textMuted hover:text-white hover:bg-cardHover transition">ব্যবহারের শর্তাবলী</a>
                </div>
              </div>
            </div>

            {/* Normal Links */}
            <a href="#" className="hover:text-white transition flex items-center h-full relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">কেনা বেচা</a>
            <a href="#" className="hover:text-white transition flex items-center h-full relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">পণ্য</a>

            {/* Dropdown 4: আরো */}
            <div className="relative group h-full flex items-center cursor-pointer">
              <div className="flex items-center gap-1.5 group-hover:text-white transition">
                <span>আরো</span>
                <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] relative">
                  <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
                </span>
                <svg className="w-4 h-4 text-textMuted group-hover:text-white transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute top-[100%] right-0 w-48 pt-2 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-2 flex flex-col gap-1">
                  <a href="#" className="px-4 py-2.5 rounded-xl text-textMuted hover:text-white hover:bg-cardHover transition flex justify-between items-center">আমাদের সম্পর্কে</a>
                  <a href="#" className="px-4 py-2.5 rounded-xl text-textMuted hover:text-white hover:bg-cardHover transition flex justify-between items-center">ব্লগ</a>
                  <a href="#" className="px-4 py-2.5 rounded-xl text-primary hover:bg-primary/10 bg-primary/5 transition flex justify-between items-center">
                    ক্যারিয়ার <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">NEW</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Right Side: Language & Mobile Toggle */}
          <div className="flex items-center gap-5">
            {/* Language Selector */}
            <button className="hidden sm:flex items-center gap-1.5 text-textMuted hover:text-white transition group">
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="text-sm font-medium">বাংলা</span>
            </button>

            {/* Mobile Menu Button (Hamburger/Cross Toggle) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-card border border-border text-white hover:bg-border transition z-50 relative"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Mobile Menu Drawer (Accordion Layout) */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#040914] border-l border-border z-40 lg:hidden transform transition-transform duration-300 overflow-y-auto flex flex-col pt-24 pb-6 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Accordion 1: আয়করুন */}
        <div className="border-b border-border">
          <button onClick={() => toggleAccordion(1)} className="w-full flex items-center justify-between px-6 py-4 text-white font-medium hover:bg-card/50 transition">
            <span>আয়করুন</span>
            <svg className={`w-4 h-4 transition-transform duration-300 ${activeAccordion === 1 ? "rotate-180 text-primary" : "text-textMuted"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === 1 ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="flex flex-col gap-1 px-6 pb-4 bg-card/20">
              <a href="#" className="py-2.5 text-sm text-textMuted hover:text-white transition">রাইডার হোন</a>
              <a href="#" className="py-2.5 text-sm text-textMuted hover:text-white transition">মার্চেন্ট একাউন্ট</a>
              <a href="#" className="py-2.5 text-sm text-textMuted hover:text-white transition">সার্ভিস প্রোভাইডার</a>
            </div>
          </div>
        </div>

        {/* Accordion 2: সার্ভিসসমূহ */}
        <div className="border-b border-border">
          <button onClick={() => toggleAccordion(2)} className="w-full flex items-center justify-between px-6 py-4 text-white font-medium hover:bg-card/50 transition">
            <span>সার্ভিসসমূহ</span>
            <svg className={`w-4 h-4 transition-transform duration-300 ${activeAccordion === 2 ? "rotate-180 text-primary" : "text-textMuted"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === 2 ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="flex flex-col gap-2 px-6 pb-4 bg-card/20">
              <a href="#" className="py-2 flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm group-hover:text-primary transition">হোটেল ও রেস্টুরেন্ট</h4>
                </div>
              </a>
              <a href="#" className="py-2 flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm group-hover:text-primary transition">ডাক্তার ও ক্লিনিক</h4>
                </div>
              </a>
              <a href="#" className="py-2 flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm group-hover:text-primary transition">লোকাল সার্ভিস</h4>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Accordion 3: হেল্প */}
        <div className="border-b border-border">
          <button onClick={() => toggleAccordion(3)} className="w-full flex items-center justify-between px-6 py-4 text-white font-medium hover:bg-card/50 transition">
            <span>হেল্প</span>
            <svg className={`w-4 h-4 transition-transform duration-300 ${activeAccordion === 3 ? "rotate-180 text-primary" : "text-textMuted"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === 3 ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="flex flex-col gap-1 px-6 pb-4 bg-card/20">
              <a href="#" className="py-2.5 text-sm text-textMuted hover:text-white transition">কাস্টমার সাপোর্ট</a>
              <a href="#" className="py-2.5 text-sm text-textMuted hover:text-white transition">সাধারণ জিজ্ঞাসা (FAQ)</a>
              <a href="#" className="py-2.5 text-sm text-textMuted hover:text-white transition">ব্যবহারের শর্তাবলী</a>
            </div>
          </div>
        </div>

        {/* Normal Links (Mobile) */}
        <a href="#" className="px-6 py-4 text-white font-medium border-b border-border hover:bg-card/50 transition">কেনা বেচা</a>
        <a href="#" className="px-6 py-4 text-white font-medium border-b border-border hover:bg-card/50 transition">পণ্য</a>

        {/* Accordion 4: আরো */}
        <div className="border-b border-border">
          <button onClick={() => toggleAccordion(4)} className="w-full flex items-center justify-between px-6 py-4 text-white font-medium hover:bg-card/50 transition">
            <div className="flex items-center gap-1.5">
              <span>আরো</span>
              <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] relative">
                <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
              </span>
            </div>
            <svg className={`w-4 h-4 transition-transform duration-300 ${activeAccordion === 4 ? "rotate-180 text-primary" : "text-textMuted"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === 4 ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="flex flex-col gap-1 px-6 pb-4 bg-card/20">
              <a href="#" className="py-2.5 text-sm text-textMuted hover:text-white transition">আমাদের সম্পর্কে</a>
              <a href="#" className="py-2.5 text-sm text-textMuted hover:text-white transition">ব্লগ</a>
              <a href="#" className="py-2.5 text-sm text-primary transition flex items-center justify-between">
                ক্যারিয়ার <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">NEW</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Settings Row (Location & Lang fallback) */}
        <div className="mt-auto px-6 pt-6 flex justify-between items-center sm:hidden">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-[#0A0F1C] transition">
              <svg className="w-4 h-4 text-textMuted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium text-white">Bogura</span>
            </button>
            <button className="flex items-center gap-1.5 text-textMuted hover:text-white transition">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="text-sm font-medium">বাংলা</span>
            </button>
        </div>

      </div>
    </>
  );
};

export default Navbar;