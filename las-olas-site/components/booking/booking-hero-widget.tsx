"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div
      className="
        mt-1.25 sm:mt-3 md:mt-5 w-full max-w-[92vw] sm:max-w-3xl lg:max-w-4xl mx-auto hero-booking
        rounded-lg sm:rounded-3xl bg-white/8 sm:bg-white/10 backdrop-blur-lg
        border border-white/12 sm:border-white/16 shadow-[0_16px_40px_-32px_rgba(0,0,0,0.7)]
        px-2.25 py-1.6 sm:px-3.25 sm:py-[0.4rem] md:px-4.25 md:py-[0.55rem]
        flex flex-col md:flex-row items-stretch md:items-center
        gap-1.25 sm:gap-2.25 md:gap-3.25
      "
    >
      <div
        className="
          flex-1 rounded-md sm:rounded-2xl border border-white/12 sm:border-white/18
          bg-white/4 px-2.75 py-1.35 sm:px-3.25 sm:py-2
          flex flex-col justify-center
          text-left text-[11px] sm:text-xs md:text-sm
          text-white/90
        "
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-white/60 mb-0.5">
          Check-in
        </span>
        <span className="text-sm sm:text-base md:text-lg font-medium text-white">
          Select date
        </span>
      </div>

      <div
        className="
          flex-1 rounded-md sm:rounded-2xl border border-white/12 sm:border-white/18
          bg-white/4 px-2.75 py-1.35 sm:px-3.25 sm:py-2
          flex flex-col justify-center
          text-left text-[11px] sm:text-xs md:text-sm
          text-white/90
        "
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-white/60 mb-0.5">
          Check-out
        </span>
        <span className="text-sm sm:text-base md:text-lg font-medium text-white">
          Select date
        </span>
      </div>

      <div
        className="
          flex-1 rounded-md sm:rounded-2xl border border-white/12 sm:border-white/18
          bg-white/4 px-2.75 py-1.35 sm:px-3.25 sm:py-2
          flex flex-col justify-center
          text-left text-[11px] sm:text-xs md:text-sm
          text-white/90
        "
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-white/60 mb-0.5">
          Guests
        </span>
        <span className="text-sm sm:text-base md:text-lg font-medium text-white">
          2 guests
        </span>
      </div>

      <Button
        variant="ghost"
        className="
          shrink-0 rounded-full bg-teal-800/95 hover:bg-teal-900 text-white
          px-4.25 py-2 sm:px-5 sm:py-2.35 text-sm md:text-base font-semibold tracking-tight
          shadow-[0_14px_36px_-22px_rgba(0,0,0,0.7)] hover:-translate-y-[2px]
          transition-all duration-200 ring-1 ring-white/30
          h-10.5 md:h-auto md:self-center
        "
        aria-label="Check availability"
      >
        Check availability
      </Button>
    </div>
  );
}
