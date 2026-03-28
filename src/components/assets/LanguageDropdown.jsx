import { useState } from "react";

// Add a 'className' prop to accept external Tailwind classes
const LanguageDropdown = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("বাংলা");

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    // Apply the passed className to the wrapper div
    <div className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        // Removed sm:hidden md:visible lg:visible. Just kept 'flex'
        className="flex items-center gap-1.5 text-textMuted hover:text-white transition group px-3 py-2 border border-gray-700 rounded"
      >
        <svg
          className="w-4 h-4 group-hover:rotate-12 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <span className="text-sm font-medium">{selected}</span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-card border border-gray-700 rounded shadow-lg z-50">
          <button
            onClick={() => handleSelect("English")}
            className="w-full text-left px-4 py-2 text-sm text-textMuted hover:bg-gray-800 hover:text-white transition"
          >
            English
          </button>
          <button
            onClick={() => handleSelect("বাংলা")}
            className="w-full text-left px-4 py-2 text-sm text-textMuted hover:bg-gray-800 hover:text-white transition"
          >
            বাংলা
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;