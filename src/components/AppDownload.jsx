import React from "react";
import { motion } from "framer-motion";
import appImage from "../image/app.png"; // replace with your actual image

const AppDownload = () => {
  // Animation variants
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            className="p-10 lg:p-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={leftVariants}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              অফিসিয়াল মোবাইল অ্যাপ
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              জেলা সেবা অ্যাপ <br />
              <span className="text-primary">ডাউনলোড করুন আজই</span>
            </h2>

            <p className="text-textMuted text-lg mb-10 max-w-md">
              আপনার স্মার্টফোনে সকল সেবা, তথ্য এবং জরুরি কন্টাক্ট — সব এখন এক
              ক্লিকেই।
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-10">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  <span>৪.৯ রেটিং</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-xs text-textMuted">গুগল প্লে স্টোর</p>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div>
                <p className="font-bold text-white text-lg">১০০কে+ ডাউনলোড</p>
                <p className="text-xs text-textMuted">সার্ভিস ইউজার</p>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div>
                <p className="font-bold text-green-500 text-lg">১০০% ফ্রী</p>
                <p className="text-xs text-textMuted">লাইফটাইম এক্সেস</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.global.zilaseba" target="_blank" className="inline-block">
                <div className="bg-black border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-3 hover:bg-gray-900 transition">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.983 1.983 0 01-.61-.954V2.768a1.984 1.984 0 01.609-.954z" />
                    <path d="M14.524 12.731l2.583 2.583-10.45 6.012a1.984 1.984 0 01-1.282.164l9.149-8.759z" />
                    <path d="M14.524 11.269L5.375 2.51a1.985 1.985 0 011.282.164l10.45 6.012-2.583 2.583z" />
                    <path d="M17.825 10.83l3.327 1.914a1 1 0 010 1.734l-3.327 1.913-2.583-2.583 2.583-2.578z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-300 uppercase leading-tight">
                      Get it on
                    </p>
                    <p className="text-sm font-semibold text-white leading-tight">
                      Google Play
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="text-sm font-medium text-textMuted hover:text-white transition flex items-center gap-1"
              >
                বিস্তারিত জানুন{" "}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative h-full min-h-[400px] flex items-center justify-center p-10 bg-gradient-to-br from-primary/10 to-transparent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rightVariants}
          >
            {/* Main phone mockup */}
            <div className="relative w-80  rounded-[2.5rem] overflow-hidden shadow-2xl z-20">
              <img
                src={appImage} // your phone/app image
                alt="App Mockup"
                className="w-full h-full object-cover rounded-[2.5rem] hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Background shadow/multi-layer effect */}
            <div className="absolute w-56 h-[400px] rounded-[2.5rem] shadow-2xl -translate-x-12 translate-y-6 opacity-80 scale-95 bg-gray-900 z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;