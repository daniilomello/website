"use client";

import { useEffect, useState } from "react";

export function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50">
      <p className="text-sm inline">
        🍪 This site uses cookies. By continuing, you accept our use of cookies.
      </p>
      <button
        onClick={acceptCookies}
        className="ml-1 text-sm inline bg-transaparent hover:text-rose-300/80 text-white"
      >
        <span className="underline mr-1">I understand</span>
      </button>
    </div>
  );
}
