import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabData = [
  {
    id: 0,
    title: "মার্কেটপ্লেস",
    icon: (
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
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    mockupAccent: "bg-blue-500",
    features: [
      {
        title: "দ্রুততম হোম ডেলিভারি",
        desc: "অর্ডারকৃত পণ্য পাবেন দ্রুততম সময়ে। আমরাই দিচ্ছি সবচেয়ে কম সময়ে নিরাপদ ডেলিভারির নিশ্চয়তা।",
      },
      {
        title: "হাজারো পণ্যের সমাহার",
        desc: "নিত্যপ্রয়োজনীয় বাজার থেকে শুরু করে গ্যাজেট, ইলেকট্রনিক্স এবং ফ্যাশন—সবকিছুই পাচ্ছেন এক জায়গায়।",
      },
      {
        title: "আকর্ষণীয় মূল্যছাড়",
        desc: "ভেরিফাইড সেলারদের সাথে যুক্ত হয়ে আকর্ষণীয় ডিসকাউন্টে কেনাকাটা করুন একদম নিশ্চিন্তে।",
      },
    ],
  },
  {
    id: 1,
    title: "স্বাস্থ্য সেবা",
    icon: (
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    mockupAccent: "bg-red-500",
    features: [
      {
        title: "অভিজ্ঞ ডাক্তার",
        desc: "আপনার জেলার সেরা এবং বিশেষজ্ঞ ডাক্তারদের চেম্বার ও সিরিয়াল বুকিং করুন ঘরে বসেই।",
      },
      {
        title: "জরুরি রক্ত ডোনার",
        desc: "যেকোনো মুহূর্তে যেকোনো রক্তের গ্রুপের জন্য ডোনার খুঁজুন এবং সরাসরি যোগাযোগ করুন।",
      },
      {
        title: "নিকটস্থ ক্লিনিক",
        desc: "আপনার আশেপাশের সব ক্লিনিক এবং ডায়াগনস্টিক সেন্টারের তথ্য ও লোকেশন পেয়ে যান মুহূর্তেই।",
      },
    ],
  },
  {
    id: 2,
    title: "রাইড শেয়ার",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
    mockupAccent: "bg-green-500",
    features: [
      {
        title: "ভাড়া গাড়ি ও বাইক",
        desc: "প্রাইভেট কার, মাইক্রোবাস, পিকআপ বা বাইক যেকোনো দরকারে খুব সহজেই গাড়ি ভাড়া করুন।",
      },
      {
        title: "নিরাপদ যাতায়াত",
        desc: "আমাদের সকল ড্রাইভার এনআইডি ভেরিফাইড। তাই আপনার প্রতিটি যাত্রা হবে সম্পূর্ণ নিরাপদ।",
      },
      {
        title: "সাশ্রয়ী ভাড়া",
        desc: "দরদাম করার ঝামেলা ছাড়াই একদম সাশ্রয়ী ভাড়ায় গন্তব্যে পৌঁছান নিশ্চিন্তে।",
      },
    ],
  },
  {
    id: 3,
    title: "লোকাল সার্ভিস",
    icon: (
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
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    mockupAccent: "bg-purple-500",
    features: [
      {
        title: "দক্ষ টেকনিশিয়ান",
        desc: "ইলেক্ট্রিশিয়ান, প্লাম্বার, এসি মেকানিক সহ যেকোনো দৈনন্দিন কাজের জন্য এক্সপার্ট খুঁজুন।",
      },
      {
        title: "যাচাইকৃত সার্ভিস",
        desc: "প্রতিটি সার্ভিস প্রোভাইডারের কাজের মান এবং রেটিং দেখে আপনার জন্য সঠিক মানুষটি বেছে নিন।",
      },
      {
        title: "দ্রুত সমাধান",
        desc: "বাসার যেকোনো সমস্যা সমাধানে সার্ভিস প্রোভাইডাররা দ্রুততম সময়ে আপনার দোরগোড়ায়।",
      },
    ],
  },
];

const PlatformFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  const duration = 4000; // 4 seconds per tab
  const intervalTime = 50;
  const step = 100 / (duration / intervalTime);

  // Auto tab switch
  useEffect(() => {
    const interval = setInterval(() => {
      progressRef.current += step;
      if (progressRef.current >= 100) {
        const nextTab = (activeTab + 1) % tabData.length;
        setActiveTab(nextTab);
        progressRef.current = 0;
      }
      setProgress(progressRef.current);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    progressRef.current = 0;
    setProgress(0);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          জেলা সেবা <span className="gradient-text">প্ল্যাটফর্ম</span>
        </h2>
        <p className="text-textMuted max-w-2xl mx-auto text-lg">
          আপনার দৈনন্দিন জীবনের সব প্রয়োজনীয় সুবিধা প্রদান করে শুধুমাত্র আপনার
          জন্য।
        </p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar justify-start lg:justify-center gap-3 sm:gap-4 mb-16 pb-4 border-b border-border/50 relative z-10">
        {tabData.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(index)}
            className={`relative flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
              activeTab === index
                ? "bg-primary/10 text-primary border border-primary/30"
                : "text-textMuted hover:bg-card hover:text-white"
            }`}
          >
            {tab.icon}
            {tab.title}

            {activeTab === index && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-border overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-primary"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Content + Mockup */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {tabData[activeTab].features.map((feature, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all"></div>
                {idx !== tabData[activeTab].features.length - 1 && (
                  <div className="absolute left-[2px] top-4 w-[2px] h-[calc(100%+16px)] bg-border"></div>
                )}
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-textMuted text-base leading-relaxed max-w-md">
                  {feature.desc}
                </p>
              </div>
            ))}

            <div className="pt-6 pl-8">
              <button className="bg-primary hover:bg-primaryHover text-white px-8 py-3.5 rounded-xl font-bold transition duration-300 flex items-center gap-3 group shadow-lg shadow-primary/25">
                আরো জানুন
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Phone Mockup */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-mockup"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[80px] rounded-full opacity-30 transition-colors duration-700 ${tabData[activeTab].mockupAccent}`}
            ></div>

            <div className="relative w-[300px] h-[600px] bg-[#0A0F1C] border-[10px] border-[#161D2E] rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10">
              <div className="relative w-[300px] h-[600px] bg-[#0A0F1C] border-[10px] border-[#161D2E] rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                  <div className="w-32 h-full bg-[#161D2E] rounded-b-2xl"></div>
                </div>

                {/* Mockup Content */}
                <div className="w-full h-full bg-[#040914] pt-12 px-4 flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-textMuted"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] text-textMuted uppercase tracking-wider">
                        Tab Title Here
                      </div>
                      <div className="text-xs font-bold text-white flex items-center justify-center gap-1">
                        ঢাকা, বাংলাদেশ
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-card border border-border"></div>
                  </div>

                  {/* Search Bar */}
                  <div className="w-full h-10 bg-card rounded-xl border border-border flex items-center px-3 gap-2">
                    <svg
                      className="w-4 h-4 text-textMuted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <div className="w-24 h-2 bg-border rounded-full"></div>
                  </div>

                  {/* Banner */}
                  <div
                    className={`w-full h-32 rounded-2xl relative overflow-hidden flex items-end p-4 ${tabData[activeTab].mockupAccent}`}
                  >
                    {" "}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="relative z-10 w-3/4 h-3 bg-white/80 rounded-full mb-2"></div>
                    <div className="relative z-10 w-1/2 h-2 bg-white/50 rounded-full"></div>
                  </div>

                  {/* Grid Icons */}
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-card border border-border"></div>
                        <div className="w-8 h-1.5 bg-border rounded-full"></div>
                      </div>
                    ))}
                  </div>

                  {/* Offer Cards */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="h-32 bg-card rounded-xl border border-border p-3 flex flex-col justify-end relative overflow-hidden">
                      <div className="absolute top-2 right-2 w-8 h-4 bg-red-500/20 rounded text-[8px] text-red-500 font-bold flex items-center justify-center">
                        15%
                      </div>
                      <div className="w-full h-2 bg-border rounded-full mb-2"></div>
                      <div className="w-2/3 h-1.5 bg-border rounded-full"></div>
                    </div>
                    <div className="h-32 bg-card rounded-xl border border-border p-3 flex flex-col justify-end relative overflow-hidden">
                      <div className="absolute top-2 right-2 w-8 h-4 bg-green-500/20 rounded text-[8px] text-green-500 font-bold flex items-center justify-center">
                        NEW
                      </div>
                      <div className="w-full h-2 bg-border rounded-full mb-2"></div>
                      <div className="w-2/3 h-1.5 bg-border rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PlatformFeatures;
