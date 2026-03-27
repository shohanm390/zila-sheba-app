import React from "react";
import { motion } from "framer-motion";

// Example district data with positions on the map (top, left in %)
const districts = [
  { name: "ঢাকা", status: "এক্টিভ", top: "45%", left: "55%" },
  { name: "চট্টগ্রাম", status: "এক্টিভ", top: "70%", left: "80%" },
  { name: "সিলেট", status: "এক্টিভ", top: "30%", left: "85%" }, 
  { name: "খুলনা", status: "এক্টিভ", top: "75%", left: "25%" },
  { name: "রাজশাহী", status: "এক্টিভ", top: "40%", left: "15%" },
];

const Coverage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-card border border-border rounded-full text-xs text-textMuted mb-4">
          কভারেজ
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          আমরা আছি <span className="gradient-text">আপনার জেলায়</span>
        </h2>
        <p className="text-textMuted mt-4">
          দেশব্যাপী ৬৪টি জেলায় আমাদের সার্ভিস এক্টিভ রয়েছে। আপনার জেলা নির্বাচন করে আপনার প্রয়োজনীয় সেবা গ্রহণ করুন।
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Map Section */}
        <div className="relative rounded-2xl overflow-hidden border border-border h-[500px] bg-gray-800 flex items-center justify-center perspective-1000">
          <motion.img
            src="https://en-ie.topographic-map.com/pub/maps/relation/tdrr/fbgnh/thumbnail.jpg"
            alt="Bangladesh Map"
            className="w-full h-full object-cover rounded-2xl shadow-inner"
            initial={{ rotateY: -10 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 1.5 }}
          />

          {/* Locator Tags */}
          {districts.map((district, index) => (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center"
              style={{ top: district.top, left: district.left }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 * index, type: "spring", stiffness: 200 }}
            >
              <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
              <span className="mt-2 text-xs text-white bg-card/70 px-2 py-1 rounded-md border border-border">
                {district.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* District List */}
        <div>
          <div className="space-y-4">
            {districts.map((district, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-primary/50 transition"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{district.name} জেলা</h4>
                    <p className="text-xs text-textMuted">সব সেবা এক্টিভ</p>
                  </div>
                </div>
                <span className="text-green-500 text-sm font-medium">
                  {district.status}
                </span>
              </motion.div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block mt-6 text-sm font-medium text-primary hover:text-white transition"
          >
            আপনার জেলা খুঁজুন এখানে <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Coverage;