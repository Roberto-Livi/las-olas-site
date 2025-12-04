"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div
      className="
        mt-1.25 sm:mt-2.5 md:mt-3.5 w-full max-w-[92vw] sm:max-w-3xl lg:max-w-4xl mx-auto hero-booking
        rounded-[9px] sm:rounded-[14px] bg-white/8 sm:bg-white/10 backdrop-blur-xl
        border border-white/12 sm:border-white/16 shadow-[0_10px_28px_-30px_rgba(0,0,0,0.7)]
        px-1.7 py-0.7 sm:px-2.75 sm:py-1.35 md:px-3 md:py-1.55
        flex flex-col md:flex-row items-stretch md:items-center
        gap-0.45 sm:gap-1.2 md:gap-1.75
        divide-y divide-white/10 md:divide-y-0 md:divide-x md:divide-white/12
      "
    >
      <div
        className="
          flex-1 rounded-[7px] md:rounded-[11px] px-1.65 py-[0.28rem] sm:px-2.5 sm:py-[0.6rem]
          flex flex-col justify-center
          text-left text-[10px] sm:text-[11px] md:text-sm
          text-white/82 border border-white/12 bg-white/4
        "
      >
        <span className="text-[8.4px] tracking-[0.16em] uppercase text-white/55 mb-0.05">
          Check-in
        </span>
        <span className="text-[11.5px] sm:text-[13.2px] md:text-[14.6px] font-medium text-white">
          Select date
        </span>
      </div>

      <div
        className="
          flex-1 rounded-[7px] md:rounded-[11px] px-1.65 py-[0.28rem] sm:px-2.5 sm:py-[0.6rem]
          flex flex-col justify-center
          text-left text-[10px] sm:text-[11px] md:text-sm
          text-white/82 border border-white/12 bg-white/4
        "
      >
        <span className="text-[8.4px] tracking-[0.16em] uppercase text-white/55 mb-0.05">
          Check-out
        </span>
        <span className="text-[11.5px] sm:text-[13.2px] md:text-[14.6px] font-medium text-white">
          Select date
        </span>
      </div>

      <div
        className="
          flex-1 rounded-[7px] md:rounded-[11px] px-1.65 py-[0.28rem] sm:px-2.5 sm:py-[0.6rem]
          flex flex-col justify-center
          text-left text-[10px] sm:text-[11px] md:text-sm
          text-white/82 border border-white/12 bg-white/4
        "
      >
        <span className="text-[8.4px] tracking-[0.16em] uppercase text-white/55 mb-0.05">
          Guests
        </span>
        <span className="text-[11.5px] sm:text-[13.2px] md:text-[14.6px] font-medium text-white">
          2 guests
        </span>
      </div>

      <Button
        variant="ghost"
        className="
          shrink-0 rounded-[10px] bg-white/18 text-white/94 hover:bg-white/22
          px-2.6 py-[0.38rem] sm:px-3.8 sm:py-[0.66rem] text-[11.2px] md:text-[12.5px] font-semibold tracking-tight
          shadow-[0_10px_28px_-28px_rgba(0,0,0,0.65)] hover:-translate-y-[1px]
          transition-all duration-150 ring-1 ring-white/22 w-full
          h-[34px] md:h-[36px] md:self-center
        "
        aria-label="Check availability"
      >
        Check availability
      </Button>
    </div>
  );
}
