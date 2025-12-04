"use client";

import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`scroll-indicator pointer-events-none absolute left-1/2 bottom-16 sm:bottom-18 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 text-white drop-shadow-2xl z-40 transition-opacity duration-300 ${
        hidden ? "opacity-0" : "opacity-95"
      }`}
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-white/90 animate-[bounce_3.8s_cubic-bezier(0.25,0.08,0.12,1)_infinite] drop-shadow"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14m0 0-5-5m5 5 5-5" />
      </svg>
    </div>
  );
}
