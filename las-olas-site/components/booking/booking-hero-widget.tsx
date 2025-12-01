"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div className="mt-6 rounded-2xl border border-sand-200 bg-white/95 p-4 shadow-sm backdrop-blur">
      <div className="grid gap-4 sm:grid-cols-4 sm:items-center">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.12em] text-teal-900/80">
            Check-in
          </p>
          <p className="text-sm font-medium text-charcoal">Select date</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.12em] text-teal-900/80">
            Check-out
          </p>
          <p className="text-sm font-medium text-charcoal">Select date</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.12em] text-teal-900/80">
            Guests
          </p>
          <p className="text-sm font-medium text-charcoal">2 guests</p>
        </div>
        <div className="sm:col-span-1 flex items-center justify-start sm:justify-end">
          <Button className="w-full sm:w-auto px-6" aria-label="Check availability">
            Check availability
          </Button>
        </div>
      </div>
    </div>
  );
}
