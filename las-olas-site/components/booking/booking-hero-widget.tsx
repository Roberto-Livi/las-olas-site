"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div className="w-full space-y-4">
      {/* Premium Glassmorphic Container */}
      <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/14 via-white/8 to-white/5 p-4 sm:p-6 lg:p-8 shadow-2xl backdrop-blur-2xl">
        {/* Input Grid */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {/* Check-in Field */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/8 p-3 sm:p-4 transition-all duration-300 hover:bg-white/12 hover:border-white/30 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 via-transparent to-cyan-400/0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative space-y-2">
              <p className="text-xs uppercase tracking-[0.16em] font-semibold text-white/70 group-hover:text-white/90 transition-colors">
                Check-in
              </p>
              <p className="text-sm sm:text-base font-medium text-white group-hover:text-white transition-colors">
                Select date
              </p>
            </div>
          </div>

          {/* Check-out Field */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/8 p-3 sm:p-4 transition-all duration-300 hover:bg-white/12 hover:border-white/30 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 via-transparent to-yellow-400/0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative space-y-2">
              <p className="text-xs uppercase tracking-[0.16em] font-semibold text-white/70 group-hover:text-white/90 transition-colors">
                Check-out
              </p>
              <p className="text-sm sm:text-base font-medium text-white group-hover:text-white transition-colors">
                Select date
              </p>
            </div>
          </div>

          {/* Guests Field */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/8 p-3 sm:p-4 transition-all duration-300 hover:bg-white/12 hover:border-white/30 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/0 via-transparent to-pink-400/0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative space-y-2">
              <p className="text-xs uppercase tracking-[0.16em] font-semibold text-white/70 group-hover:text-white/90 transition-colors">
                Guests
              </p>
              <p className="text-sm sm:text-base font-medium text-white group-hover:text-white transition-colors">
                2 guests
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button - Separate for Clarity */}
      <div className="flex items-center justify-center">
        <Button 
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3 text-sm sm:text-base font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 shadow-2xl hover:shadow-teal-600/50 transition-all duration-300 hover:-translate-y-0.5" 
          aria-label="Check availability"
        >
          Check availability
        </Button>
      </div>
    </div>
  );
}
