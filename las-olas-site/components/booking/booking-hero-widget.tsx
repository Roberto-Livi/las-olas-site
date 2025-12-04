"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div
      className="
        mt-1.5 sm:mt-3 md:mt-4 w-full max-w-[92vw] sm:max-w-3xl lg:max-w-4xl mx-auto hero-booking
        rounded-[12px] sm:rounded-2xl bg-white/8 sm:bg-white/10 backdrop-blur-xl
        border border-white/14 sm:border-white/16 shadow-[0_10px_32px_-28px_rgba(0,0,0,0.7)]
        px-2.25 py-1.2 sm:px-3 sm:py-1.6 md:px-3.5 md:py-1.75
        flex flex-col md:flex-row items-stretch md:items-center
        gap-0.6 sm:gap-1.4 md:gap-2
        divide-y divide-white/10 md:divide-y-0 md:divide-x md:divide-white/12
      "
    >
      <div
        className="
          flex-1 rounded-[9px] md:rounded-xl px-2.25 py-[0.55rem] sm:px-2.75 sm:py-[0.65rem]
          flex flex-col justify-center
          text-left text-[10.5px] sm:text-[11px] md:text-sm
          text-white/82 border border-white/12 bg-white/4
        "
      >
        <span className="text-[9px] tracking-[0.16em] uppercase text-white/55 mb-0.1">
          Check-in
        </span>
        <span className="text-[12.5px] sm:text-[13.5px] md:text-[15px] font-medium text-white">
          Select date
        </span>
      </div>

      <div
        className="
          flex-1 rounded-[9px] md:rounded-xl px-2.25 py-[0.55rem] sm:px-2.75 sm:py-[0.65rem]
          flex flex-col justify-center
          text-left text-[10.5px] sm:text-[11px] md:text-sm
          text-white/82 border border-white/12 bg-white/4
        "
      >
        <span className="text-[9px] tracking-[0.16em] uppercase text-white/55 mb-0.1">
          Check-out
        </span>
        <span className="text-[12.5px] sm:text-[13.5px] md:text-[15px] font-medium text-white">
          Select date
        </span>
      </div>

      <div
        className="
          flex-1 rounded-[9px] md:rounded-xl px-2.25 py-[0.55rem] sm:px-2.75 sm:py-[0.65rem]
          flex flex-col justify-center
          text-left text-[10.5px] sm:text-[11px] md:text-sm
          text-white/82 border border-white/12 bg-white/4
        "
      >
        <span className="text-[9px] tracking-[0.16em] uppercase text-white/55 mb-0.1">
          Guests
        </span>
        <span className="text-[12.5px] sm:text-[13.5px] md:text-[15px] font-medium text-white">
          2 guests
        </span>
      </div>

      <Button
        variant="ghost"
        className="
          shrink-0 rounded-full bg-white/14 text-white/92 hover:bg-white/18
          px-3.4 py-[0.65rem] sm:px-4 sm:py-[0.72rem] text-[12px] md:text-[13px] font-semibold tracking-tight
          shadow-[0_10px_30px_-26px_rgba(0,0,0,0.65)] hover:-translate-y-[1px]
          transition-all duration-150 ring-1 ring-white/24
          h-9 md:h-[38px] md:self-center
        "
        aria-label="Check availability"
      >
        Check availability
      </Button>
    </div>
  );
}
