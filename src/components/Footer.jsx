import React from "react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-12 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-9 h-9 bg-card border border-border rounded-xl flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition">
                <div className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 bg-primary/20 rounded-full"></div>
                <div className="absolute top-2.5 right-2 w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold tracking-wide text-white leading-none flex items-start gap-1">
                  জেলা সেবা
                  <svg
                    className="w-3 h-3 text-primary -mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <p className="text-sm text-textMuted leading-relaxed">
              দেশের ১ নম্বর ডিজিটাল প্ল্যাটফর্ম। আপনার জেলার সব ধরণের তথ্য ও
              সেবা এখন হাতের মুঠোয়।
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-border flex items-center justify-center hover:bg-primary transition"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-border flex items-center justify-center hover:bg-primary transition"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14..." />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-border flex items-center justify-center hover:bg-primary transition"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85..." />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">সেবাসমূহ</h4>
            <ul className="space-y-2 text-sm text-textMuted">
              <li>
                <a href="#" className="hover:text-primary transition">
                  কেনাকাটা মার্কেটপ্লেস
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  ডাক্তার ও ক্লিনিক
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  রক্ত ডোনার খুঁজুন
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  লোকাল সার্ভিস
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">কোম্পানি</h4>
            <ul className="space-y-2 text-sm text-textMuted">
              <li>
                <a href="#" className="hover:text-primary transition">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  যোগাযোগ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  ক্যারিয়ার
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  মিডিয়া
                </a>
              </li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="text-lg font-semibold mb-4">অ্যাপ ডাউনলোড</h4>
            <div className="space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.global.zilaseba"
                target="_blank"
                className="inline-block w-full"
              >
                <div className="bg-black border border-gray-700 px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition">
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
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-textMuted">
          <p>&copy; 2023 জেলা সেবা (Zilla Sheba). সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              শর্তাবলী
            </a>
            <a href="#" className="hover:text-white transition">
              প্রাইভেসি পলিসি
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
