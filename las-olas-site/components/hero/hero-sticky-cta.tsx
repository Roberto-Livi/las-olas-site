"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroStickyCta() {
  const [showMobile, setShowMobile] = useState(false);
  const [showDesktop, setShowDesktop] = useState(false);

  useEffect(() => {
    const bookingWidget = document.getElementById("booking-widget");
    const heroSection = document.getElementById("hero");

    if (!bookingWidget || !heroSection) return;

    const bookingObserver = new IntersectionObserver(
      ([entry]) => {
        setShowMobile(!entry.isIntersecting);
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.1 }
    );

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setShowDesktop(!entry.isIntersecting);
      },
      { rootMargin: "0px 0px -45% 0px", threshold: 0.01 }
    );

    bookingObserver.observe(bookingWidget);
    heroObserver.observe(heroSection);

    return () => {
      bookingObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* MOBILE STICKY FIX */}
      <div
        className={`sm:hidden fixed inset-x-0 bottom-0 z-50 transition duration-300 ${
          showMobile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <div className="border-t border-white/50 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
            <div className="text-[10px] uppercase tracking-[0.16em] text-charcoal/65">Best rate guaranteed</div>
            <Button asChild className="h-9 rounded-full px-4 text-[12px] font-semibold">
              <Link href="#booking-widget">Check availability</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* DESKTOP REFINEMENT */}
      <div
        className={`hidden sm:block fixed inset-x-0 top-3 z-40 transition duration-300 ${
          showDesktop ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-end px-4 sm:px-6 lg:px-8 pointer-events-none">
          <Button asChild className="pointer-events-auto rounded-full px-5 py-2 text-sm font-semibold shadow-lg">
            <Link href="#booking-widget">Check availability</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
