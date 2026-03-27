import React from "react";
import { motion } from "framer-motion";

const EmergencyCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const buttonHover = {
    scale: 1.05,
    y: -2,
    boxShadow: "0px 10px 20px rgba(239,68,68,0.3)", // red shadow
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const buttonPulse = {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0px 0px 0px rgba(239,68,68,0)",
      "0px 0px 20px rgba(239,68,68,0.4)",
      "0px 0px 0px rgba(239,68,68,0)",
    ],
    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-red-600/20 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
            <svg
              className="w-8 h-8 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              জরুরি রক্তের প্রয়োজন?
            </h3>
            <p className="text-textMuted">
              যেকোনো রক্তের গ্রুপ, যেকোনো সময় — আমরা আছি আপনার পাশে। এখনই কল করুন।
            </p>
          </div>
        </div>

        <motion.button
          whileHover={buttonHover}
          animate={buttonPulse}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 whitespace-nowrap w-full md:w-auto justify-center"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a href="tel:+8801700962537">এখনই কল করুন</a>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default EmergencyCTA;