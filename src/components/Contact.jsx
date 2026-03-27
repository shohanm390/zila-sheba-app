import React, { useState } from "react";

const Contact = () => {
  const [service, setService] = useState("");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-extrabold gradient-text">
          যোগাযোগ করুন
        </h1>
        <p className="mt-4 text-textMuted max-w-2xl mx-auto">
          যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সঙ্গে যোগাযোগ করুন। আমাদের টিম
          ২৪/৭ প্রস্তুত।
        </p>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Contact Info */}
        <div className="relative">
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <svg
                  className="w-7 h-7"
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
              </div>
              <div>
                <h3 className="text-lg font-bold">ফোন</h3>
                <p className="text-textMuted">+8801700962537</p>
                <p className="text-xs text-textMuted mt-1">
                  সকাল ১০টা - রাত ১০টা
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">ইমেইল</h3>
                <p className="text-textMuted">infzilaseba@gmail.com
</p>
                <p className="text-xs text-textMuted mt-1">
                  ২৪/৭ অনলাইন সাপোর্ট
                </p>
              </div>
            </div>

            {/* Office Card */}
            <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <svg
                  className="w-7 h-7"
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
                <h3 className="text-lg font-bold">অফিস</h3>
                <p className="text-textMuted">House 12, Road 4, Banani</p>
                <p className="text-xs text-textMuted mt-1">Khulna - 9000 Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-card border border-border p-10 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>

          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-textMuted">নাম</label>
                <input
                  type="text"
                  placeholder="আপনার নাম"
                  className="w-full bg-[#040914] border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-textMuted">ইমেইল</label>
                <input
                  type="email"
                  placeholder="ইমেইল এড্রেস"
                  className="w-full bg-[#040914] border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white transition"
                />
              </div>
            </div>
            {/* Dropdown Service Type */}
            <div className="space-y-2">
              <label className="text-sm text-textMuted">সার্ভিস টাইপ</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#040914] border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white transition"
              >
                <option value="">সার্ভিস নির্বাচন করুন</option>
                <option value="electricity">বিদ্যুৎ সংক্রান্ত</option>
                <option value="plumbing">প্লাম্বিং</option>
                <option value="internet">ইন্টারনেট/ডাটা</option>
                <option value="cleaning">পরিষ্কার পরিচ্ছন্নতা</option>
                <option value="other">অন্যান্য</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-textMuted">ফোন নাম্বার</label>
              <input
                type="text"
                placeholder="+8801XXXXXXXXX"
                className="w-full bg-[#040914] border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-textMuted">বার্তা</label>
              <textarea
                rows="5"
                placeholder="আপনার মেসেজ লিখুন..."
                className="w-full bg-[#040914] border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-white transition resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary hover:bg-primaryHover text-white px-8 py-3 rounded-xl text-sm font-medium transition duration-300"
              >
                মেসেজ পাঠান
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
