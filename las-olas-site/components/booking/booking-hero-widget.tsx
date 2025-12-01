"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div className="mt-6 rounded-3xl border border-white/30 bg-gradient-to-r from-teal-900/35 via-teal-700/30 to-white/10 p-5 shadow-2xl backdrop-blur">
      <div className="grid gap-4 sm:grid-cols-4 sm:items-center">
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
        <div className="sm:col-span-1 flex items-center justify-start sm:justify-end">
          <Button className="w-full sm:w-auto px-6 shadow-xl" aria-label="Check availability">
            Check availability
          </Button>
        </div>
      </div>
    </div>
  );
}
