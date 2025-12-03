"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div className="mt-6 w-full max-w-3xl rounded-3xl border border-white/25 bg-white/12 p-5 sm:p-6 shadow-xl backdrop-blur">
      <div className="grid gap-6 sm:grid-cols-4 sm:items-center sm:gap-10">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.14em] text-white/75">
            Check-in
          </p>
          <p className="text-sm font-medium text-white">Select date</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.14em] text-white/75">
            Check-out
          </p>
          <p className="text-sm font-medium text-white">Select date</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.14em] text-white/75">
            Guests
          </p>
          <p className="text-sm font-medium text-white">2 guests</p>
        </div>
        <div className="sm:col-span-1 flex items-center justify-start sm:justify-end mt-3 sm:mt-0">
          <Button className="w-full sm:w-auto px-6 shadow-xl" aria-label="Check availability">
            Check availability
          </Button>
        </div>
      </div>
    </div>
  );
}
