import React from "react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    quote:
      "আমার এলাকায় ভালো ডাক্তার পাওয়া খুব কষ্টসাধ্য ছিল। এই অ্যাপের মাধ্যমে খুব সহজেই একজন স্পেশালিস্ট ডাক্তার পেয়েছি।",
    name: "রহিম ইসলাম",
    location: "খুলনা, বাংলাদেশ",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
    rating: 5,
  },
  {
    quote:
      "হঠাৎ করে রাতে এসি নষ্ট হয়ে যায়। অ্যাপ দিয়ে মেকানিক খুঁজলাম, ১ ঘণ্টার মধ্যেই এসে ঠিক করে দিয়ে গেল।",
    name: "সাদিয়া আক্তার",
    location: "ঢাকা, বাংলাদেশ",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    rating: 5,
  },
  {
    quote:
      "রক্তের প্রয়োজনে পোস্ট করেছিলাম, কয়েকজন ডোনার সাথে সাথেই যোগাযোগ করেছে। অনেক বড় উপকার হলো।",
    name: "তানভীর আহমেদ",
    location: "সিলেট, বাংলাদেশ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-card border border-border rounded-full text-xs text-textMuted mb-4">
          মতামত
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          হাজারো মানুষের{" "}
          <span className="gradient-text">বিশ্বাসই আমাদের শক্তি</span>
        </h2>
        <p className="text-textMuted mt-4">
          সারা বাংলাদেশ থেকে আমাদের ব্যবহারকারীদের কিছু অভিজ্ঞতা
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-card border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl transition duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-4xl text-border mb-4">“</div>

            {/* Rating */}
            <div className="flex text-yellow-400 mb-4 gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-textMuted text-sm mb-6 leading-relaxed">
              {testimonial.quote}
            </p>

            <div className="flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h5 className="text-sm font-bold text-white">
                  {testimonial.name}
                </h5>
                <p className="text-xs text-textMuted">{testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;