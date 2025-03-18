"use client";

import { useState } from "react";

export default function LanguageFilter({ onFilter }: { onFilter: (language: string | null) => void }) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>("🇺🇸");

  const handleFilter = (language: string | null) => {
    setSelectedLanguage(language);
    onFilter(language);
  };

  return (
    <div className="flex gap-2 mb-6">
      <button
        className={`px-4 py-1 rounded-full ${selectedLanguage === "🇺🇸" ? "bg-purple-500 text-white" : "bg-gray-700 text-white"}`}
        onClick={() => handleFilter("🇺🇸")}
      >
        🇺🇸
      </button>
      <button
        className={`px-4 py-1 rounded-full ${selectedLanguage === "🇧🇷" ? "bg-green-500 text-white" : "bg-gray-700 text-white"}`}
        onClick={() => handleFilter("🇧🇷")}
      >
        🇧🇷
      </button>
    </div>
  );
}
