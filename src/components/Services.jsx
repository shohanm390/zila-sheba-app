import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const entranceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const hoverEffect = {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const serviceItems = [
    {
      img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
      title: "ভাড়া গাড়ি",
      desc: "প্রাইভেট কার, মাইক্রোবাস, পিকআপ বা ট্রাক যেকোনো দরকারে খুব সহজেই গাড়ি ভাড়া করুন।",
      color: "text-primary",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
    },
    {
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      title: "হোটেল ও রেস্টুরেন্ট",
      desc: "আপনার জেলার সেরা হোটেল, রেস্টুরেন্ট ও খাবার অর্ডার করার সুবিধা এক ছাতার নিচে।",
      color: "text-green-500",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
      title: "লোকাল সার্ভিস",
      desc: "ইলেক্ট্রিশিয়ান, প্লাম্বার, এসি মেকানিক সহ যেকোনো দৈনন্দিন কাজের জন্য দক্ষ লোক খুঁজুন।",
      color: "text-purple-500",
      icon: (
        <svg
          className="w-6 h-6"
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
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-2 block">
            সেবাসমূহ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold">
            স্থানীয় সেবা <br />
            <span className="gradient-text">আপনার হাতের কাছে</span>
          </h2>
        </div>
        <p className="text-textMuted max-w-md text-sm">
          দৈনন্দিন জীবনের সব প্রয়োজনীয় সেবা এখন একটিমাত্র প্ল্যাটফর্মে।
          যাচাইকৃত প্রোভাইডারদের মাধ্যমে নিরাপদ সেবা নিশ্চিত করুন।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceItems.map((service, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            whileHover={hoverEffect}
            viewport={{ once: true }}
            variants={entranceVariants}
            className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition duration-300 pb-6"
          >
            <div className="h-48 relative">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 left-6 w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center z-10">
                {service.icon}
              </div>
            </div>
            <div className="pt-10 px-6">
              <h3
                className={`text-xl font-bold mb-3 group-hover:${service.color} transition`}
              >
                {service.title}
              </h3>
              <p className="text-textMuted text-sm mb-6 line-clamp-2">
                {service.desc}
              </p>
              <a
                href="#"
                className={`inline-flex items-center text-sm font-semibold text-white group-hover:${service.color} transition`}
              >
                বিস্তারিত জানুন{" "}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-transparent border border-border hover:bg-card text-white px-6 py-3 rounded-lg font-medium transition duration-300 inline-flex items-center gap-2"
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
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          সব ক্যাটাগরি দেখুন
        </motion.button>
      </div>
    </section>
  );
};

export default Services;