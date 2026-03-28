import React from "react";
import { motion } from "framer-motion";

// Example partner logos (replace with your images)
import logo1 from "../image/logo1.png";
import logo2 from "../image/logo2.png";
import logo3 from "../image/logo3.png";
import logo4 from "../image/logo4.png";
import logo5 from "../image/logo5.png";

const partners = [logo1, logo2, logo3, logo4, logo5];

const Partners = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-16 lg:gap-24 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {partners.concat(partners).map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
            >
              {/* Fixed-size container ensures image stays big */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Partner ${index}`}
                  className="max-w-full max-h-full object-contain bg-white"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;