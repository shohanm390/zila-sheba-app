import React, { useState, useEffect, useRef } from "react";

// Native counting component with scroll detection (No external libraries needed)
const AnimatedCounter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000; // 2 seconds animation
          const increment = end / (duration / 16); // 60 FPS update rate

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);

          observer.disconnect(); // Stop observing once animation triggers
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  // Format with South Asian commas and translate to Bengali digits
  const formatBangla = (num) => {
    const formattedWithCommas = Number(num).toLocaleString('en-IN');
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return formattedWithCommas.replace(/\d/g, (d) => banglaDigits[d]);
  };

  return (
    <span ref={ref}>
      {formatBangla(count)}{suffix}
    </span>
  );
};

const statsData = [
  {
    id: 1,
    iconBg: "bg-primary/10 text-primary",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    value: 500000,
    suffix: "+",
    label: "একটিভ ব্যবহারকারী",
  },
  {
    id: 2,
    iconBg: "bg-green-500/10 text-green-500",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    value: 100000,
    suffix: "+",
    label: "সার্ভিস প্রোভাইডার",
  },
  {
    id: 3,
    iconBg: "bg-purple-500/10 text-purple-500",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    value: 150,
    suffix: "+",
    label: "ক্যাটাগরি সার্ভিস",
  },
  {
    id: 4,
    iconBg: "bg-orange-500/10 text-orange-500",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: 64,
    suffix: "",
    label: "জেলায় কভারেজ",
  },
];

const Stats = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-card border border-border rounded-2xl p-6 lg:p-8 text-center hover:border-primary/50 transition duration-300"
          >
            <div
              className={`w-12 h-12 mx-auto ${stat.iconBg} rounded-xl flex items-center justify-center mb-4`}
            >
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">
              {/* Using our native component to avoid the Vite crash */}
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-sm text-textMuted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;