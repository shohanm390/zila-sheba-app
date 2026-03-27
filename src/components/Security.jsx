import React from 'react';

const Security = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
        <div>
          <span className="text-green-500 font-medium text-sm tracking-wider uppercase mb-2 block">নিরাপত্তা</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">আপনার সুরক্ষা <br /><span className="gradient-text">আমাদের সর্বোচ্চ প্রতিশ্রুতি</span></h2>
          <p className="text-textMuted mb-10 max-w-xl">প্রতিটি প্রোফাইল ম্যানুয়ালি ভেরিফাই করা হয়। প্রতারণা রোধে আমাদের রয়েছে কঠোর পলিসি এবং ২৪/৭ কাস্টমার সাপোর্ট।</p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex-shrink-0 flex items-center justify-center text-blue-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h4 className="font-bold mb-2">সুরক্ষিত লেনদেন</h4>
                <p className="text-sm text-textMuted">সব ধরনের লেনদেন সম্পূর্ণ নিরাপদ এবং এন্ড-টু-এন্ড এনক্রিপ্টেড।</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-bold mb-2">যাচাইকৃত প্রোফাইল</h4>
                <p className="text-sm text-textMuted">প্রতিটি সার্ভিস প্রোভাইডারের এনআইডি কার্ড দিয়ে ভেরিফাই করা হয়।</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex-shrink-0 flex items-center justify-center text-purple-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h4 className="font-bold mb-2">২৪/৭ কাস্টমার সাপোর্ট</h4>
                <p className="text-sm text-textMuted">যেকোনো দরকারে আমাদের এক্সপার্ট টিম সবসময় প্রস্তুত।</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex-shrink-0 flex items-center justify-center text-orange-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <div>
                <h4 className="font-bold mb-2">প্রাইভেসি প্রোটেকশন</h4>
                <p className="text-sm text-textMuted">আপনার ব্যক্তিগত তথ্য আমাদের কাছে শতভাগ সুরক্ষিত।</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0B1220] border border-border rounded-3xl p-8 lg:p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto bg-card border border-border rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">আপনার পণ্য বিক্রয় করুন <br /><span className="text-primary">সারা বাংলাদেশে</span></h3>
            <p className="text-textMuted text-sm mb-8">কোনো ঝামেলা ছাড়াই ফ্রি একাউন্ট খুলুন এবং আপনার পণ্য অথবা সার্ভিস বিক্রি শুরু করুন।</p>
            
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-3.5 rounded-lg font-bold w-full transition duration-300">
              একাউন্ট তৈরি করুন
            </button>
            <p className="text-xs text-textMuted mt-4">শর্তাবলী প্রযোজ্য *</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;