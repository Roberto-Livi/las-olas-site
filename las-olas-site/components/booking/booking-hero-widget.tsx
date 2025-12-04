"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div
      className="
        mt-1 sm:mt-3 md:mt-5 w-full max-w-[92vw] sm:max-w-3xl lg:max-w-4xl mx-auto hero-booking
        rounded-[14px] sm:rounded-3xl bg-white/10 sm:bg-white/12 backdrop-blur-xl
        border border-white/14 sm:border-white/16 shadow-[0_16px_40px_-32px_rgba(0,0,0,0.7)]
        px-2 py-1.4 sm:px-3 sm:py-[0.38rem] md:px-4 md:py-[0.5rem]
        flex flex-col md:flex-row items-stretch md:items-center
        gap-0.75 sm:gap-2 md:gap-3
        divide-y divide-white/12 md:divide-y-0 md:divide-x md:divide-white/12
      "
    >
      <div
        className="
          flex-1 rounded-[10px] md:rounded-2xl px-2.5 py-1.2 sm:px-3.25 sm:py-2
          flex flex-col justify-center
          text-left text-[11px] sm:text-xs md:text-sm
          text-white/90
        "
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-white/55 mb-0.25">
          Check-in
        </span>
        <span className="text-[13px] sm:text-base md:text-lg font-medium text-white">
          Select date
        </span>
      </div>

      <div
        className="
          flex-1 rounded-[10px] md:rounded-2xl px-2.5 py-1.2 sm:px-3.25 sm:py-2
          flex flex-col justify-center
          text-left text-[11px] sm:text-xs md:text-sm
          text-white/90
        "
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-white/55 mb-0.25">
          Check-out
        </span>
        <span className="text-[13px] sm:text-base md:text-lg font-medium text-white">
          Select date
        </span>
      </div>

      <div
        className="
          flex-1 rounded-[10px] md:rounded-2xl px-2.5 py-1.2 sm:px-3.25 sm:py-2
          flex flex-col justify-center
          text-left text-[11px] sm:text-xs md:text-sm
          text-white/90
        "
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-white/55 mb-0.25">
          Guests
        </span>
        <span className="text-[13px] sm:text-base md:text-lg font-medium text-white">
          2 guests
        </span>
      </div>

      <Button
        variant="ghost"
        className="
          shrink-0 rounded-full bg-gradient-to-r from-teal-900/96 via-teal-800/94 to-teal-700/92 hover:from-teal-900 hover:to-teal-800 text-white
          px-4 py-1.9 sm:px-5 sm:py-2.2 text-[13px] md:text-base font-semibold tracking-tight
          shadow-[0_16px_40px_-26px_rgba(0,0,0,0.75)] hover:-translate-y-[2px]
          transition-all duration-200 ring-1 ring-white/28
          h-10 md:h-auto md:self-center
        "
        aria-label="Check availability"
      >
        Check availability
      </Button>
    </div>
  );
}
