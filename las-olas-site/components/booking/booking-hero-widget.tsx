"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div
      className="
        mt-10 w-full max-w-4xl mx-auto
        rounded-3xl bg-white/10 backdrop-blur-md
        border border-white/25 shadow-xl
        px-6 py-4 md:px-8 md:py-5
        flex flex-col md:flex-row items-stretch md:items-center
        gap-4 md:gap-6
      "
    >
      <div
        className="
          flex-1 rounded-2xl border border-white/20
          bg-white/5 px-4 py-3
          flex flex-col justify-center
          text-left text-xs md:text-sm
          text-white/90
        "
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-white/60 mb-1">
          Check-in
        </span>
        <span className="text-base md:text-lg font-medium text-white">
          Select date
        </span>
      </div>

      <div
        className="
          flex-1 rounded-2xl border border-white/20
          bg-white/5 px-4 py-3
          flex flex-col justify-center
          text-left text-xs md:text-sm
          text-white/90
        "
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-white/60 mb-1">
          Check-out
        </span>
        <span className="text-base md:text-lg font-medium text-white">
          Select date
        </span>
      </div>

      <div
        className="
          flex-1 rounded-2xl border border-white/20
          bg-white/5 px-4 py-3
          flex flex-col justify-center
          text-left text-xs md:text-sm
          text-white/90
        "
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-white/60 mb-1">
          Guests
        </span>
        <span className="text-base md:text-lg font-medium text-white">
          2 guests
        </span>
      </div>

      <Button
        className="
          shrink-0 rounded-full bg-teal-600/90 hover:bg-teal-700
          px-6 py-3 text-sm md:text-base font-semibold text-white
          shadow-md hover:-translate-y-[2px]
          transition-all duration-200
          h-full md:h-auto md:self-center
        "
        aria-label="Check availability"
      >
        Check availability
      </Button>
    </div>
  );
}
