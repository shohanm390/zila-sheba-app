import { useState } from "react";

const CitySelect = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Bogura"); // default district

  // Example district list
  const districts = [
    "Bogura",
    "Dhaka",
    "Chattogram",
    "Khulna",
    "Rajshahi",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh"
  ];

  const handleSelect = (district) => {
    setSelected(district);
    setOpen(false); // close dropdown when clicked
    // You can implement content changing logic here later
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-[#0A0F1C] transition hover:bg-[#121b2c]"
      >
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="text-sm font-medium text-white">{selected}</span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-2 w-40 bg-card border border-gray-700 rounded shadow-lg z-50 max-h-60 overflow-y-auto">
          {districts.map((district) => (
            <button
              key={district}
              onClick={() => handleSelect(district)}
              className="w-full text-left px-4 py-2 text-sm text-textMuted hover:bg-gray-800 hover:text-white transition"
            >
              {district}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitySelect;