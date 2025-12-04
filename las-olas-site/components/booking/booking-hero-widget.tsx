"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div
      className="
        mt-1.5 sm:mt-3 md:mt-5 w-full max-w-[92vw] sm:max-w-3xl lg:max-w-4xl mx-auto hero-booking
        rounded-xl sm:rounded-3xl bg-white/8 sm:bg-white/10 backdrop-blur-lg
        border border-white/14 sm:border-white/18 shadow-[0_16px_40px_-32px_rgba(0,0,0,0.7)]
        px-2.5 py-2 sm:px-3.5 sm:py-[0.45rem] md:px-4.5 md:py-[0.6rem]
        flex flex-col md:flex-row items-stretch md:items-center
        gap-1.5 sm:gap-2.5 md:gap-3.5
      "
    >
      <div
        className="
          flex-1 rounded-lg sm:rounded-2xl border border-white/14 sm:border-white/20
          bg-white/4 px-3 py-1.5 sm:px-3.5 sm:py-2.25
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
          flex-1 rounded-lg sm:rounded-2xl border border-white/14 sm:border-white/20
          bg-white/4 px-3 py-1.5 sm:px-3.5 sm:py-2.25
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
          flex-1 rounded-lg sm:rounded-2xl border border-white/14 sm:border-white/20
          bg-white/4 px-3 py-1.5 sm:px-3.5 sm:py-2.25
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
        className="
          shrink-0 rounded-full bg-white/90 hover:bg-white text-teal-900 hover:text-teal-900
          px-4 py-2 sm:px-5 sm:py-2.5 text-sm md:text-base font-semibold
          shadow-[0_10px_34px_-20px_rgba(0,0,0,0.65)] hover:-translate-y-[2px]
          transition-all duration-200 ring-1 ring-white/50
          h-11 md:h-auto md:self-center
        "
        aria-label="Check availability"
      >
        Check availability
      </Button>
    </div>
  );
}
