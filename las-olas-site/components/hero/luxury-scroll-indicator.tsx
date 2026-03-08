"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export function LuxuryScrollIndicator() {
  const [mobileBottomOffset, setMobileBottomOffset] = useState<number | null>(null);

  useEffect(() => {
    const recomputeOffset = () => {
      if (window.innerWidth > 767) {
        setMobileBottomOffset(null);
        return;
      }

      const baseOffset = 14;
      const bookingWidget = document.getElementById("booking-widget");
      if (!bookingWidget) {
        setMobileBottomOffset(baseOffset);
        return;
      }

      const bookingRect = bookingWidget.getBoundingClientRect();
      const offsetAboveBooking = window.innerHeight - bookingRect.top + 14;
      const clamped = Math.min(Math.max(baseOffset, offsetAboveBooking), 140);
      setMobileBottomOffset(clamped);
    };

    recomputeOffset();
    window.addEventListener("resize", recomputeOffset);
    window.addEventListener("orientationchange", recomputeOffset);
    window.addEventListener("load", recomputeOffset);

    return () => {
      window.removeEventListener("resize", recomputeOffset);
      window.removeEventListener("orientationchange", recomputeOffset);
      window.removeEventListener("load", recomputeOffset);
    };
  }, []);

  const handleClick = () => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    let target = hero.nextElementSibling as HTMLElement | null;
    while (target && target.tagName.toLowerCase() !== "section") {
      target = target.nextElementSibling as HTMLElement | null;
    }
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });

    const header = document.querySelector("header");
    const headerOffset = header ? header.getBoundingClientRect().height + 8 : 0;
    if (headerOffset > 0) {
      window.setTimeout(() => {
        window.scrollBy({ top: -headerOffset, behavior: "auto" });
      }, 360);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to content"
      className="hero-scroll-indicator"
      style={mobileBottomOffset !== null ? ({ ["--hero-scroll-bottom" as string]: `${mobileBottomOffset}px` } as CSSProperties) : undefined}
    >
      <span className="hero-scroll-line" aria-hidden />
      <svg
        className="hero-scroll-chevron"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}
