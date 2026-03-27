import React from "react";
import { motion } from "framer-motion";

const Features = () => {
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

  const features = [
    {
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
      title: "ডাক্তার ও ক্লিনিক",
      desc: "অভিজ্ঞ ডাক্তার এবং নিকটস্থ ক্লিনিকের সন্ধান।",
    },
    {
      img: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?auto=format&fit=crop&w=500&q=80",
      title: "রক্ত ডোনার খুঁজন",
      desc: "জরুরি মুহূর্তে রক্তদাতাদের তালিকা ও যোগাযোগ।",
    },
    {
      img: "https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg",
      title: "আইন ও থানা",
      desc: "জরুরি প্রয়োজনে নিকটস্থ থানা ও পুলিশের নাম্বার।",
    },
    {
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=500&q=80",
      title: "অ্যাম্বুলেন্স",
      desc: "দ্রুত এম্বুলেন্স সেবা পেতে যোগাযোগ করুন।",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <span className="text-primary font-medium text-sm tracking-wider uppercase mb-2 block">
          ফিচারসমূহ
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold">
          এক অ্যাপে <span className="gradient-text">সব তথ্য</span>
        </h2>
        <p className="text-textMuted mt-4 max-w-2xl mx-auto">
          আপনার জেলার প্রয়োজনীয় সব তথ্য ও সেবা এক স্থানে
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        {/* Main Feature */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          whileHover={hoverEffect}
          viewport={{ once: true }}
          variants={entranceVariants}
          className="lg:col-span-7 relative rounded-2xl overflow-hidden cursor-pointer h-[300px] lg:h-[450px]"
        >
          <img
            src="https://images.pexels.com/photos/2276796/pexels-photo-2276796.jpeg"
            alt="Marketplace"
            className="w-full h-full object-cover transform transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              কেনাকাটা মার্কেটপ্লেস
            </h3>
            <p className="text-gray-300 text-sm max-w-md">
              আপনার জেলার সব ধরণের কেনাকাটার জন্য একটি নির্ভরযোগ্য মার্কেটপ্লেস,
              সম্পূর্ণ নিরাপদ এবং বিশ্বস্ত।
            </p>
          </div>
        </motion.div>

        {/* Smaller Features */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 h-auto lg:h-[450px]">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              custom={idx + 1}
              initial="hidden"
              whileInView="visible"
              whileHover={hoverEffect}
              viewport={{ once: true }}
              variants={entranceVariants}
              className="relative rounded-2xl overflow-hidden cursor-pointer h-[200px] lg:h-auto"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-full object-cover transform transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5">
                <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-300">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;