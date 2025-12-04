"use client";

import { Button } from "@/components/ui/button";

export function BookingHeroWidget() {
  return (
    <div className="mt-1.15 sm:mt-2.2 md:mt-3 w-full max-w-[92vw] sm:max-w-3xl lg:max-w-4xl mx-auto hero-booking">
      {/* Mobile: compact glass card with radiant accents */}
      <div className="block sm:hidden">
        <div className="relative overflow-hidden rounded-[14px] border border-white/16 bg-gradient-to-br from-white/14 via-white/8 to-white/4 backdrop-blur-xl shadow-[0_16px_42px_-32px_rgba(0,0,0,0.9)] text-white">
          <div className="absolute inset-0 opacity-65">
            <div className="absolute -left-10 -top-8 h-28 w-28 rounded-full bg-emerald-300/16 blur-3xl" />
            <div className="absolute right-0 top-6 h-28 w-28 rounded-full bg-cyan-300/14 blur-3xl" />
            <div className="absolute -right-4 bottom-0 h-24 w-24 rounded-full bg-amber-200/20 blur-3xl" />
          </div>

          <div className="relative p-2.85 space-y-2.35">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.8 rounded-full border border-white/20 bg-white/12 px-2.25 py-1 text-[9.6px] uppercase tracking-[0.2em] text-white/82">
                <span className="h-1 w-5 rounded-full bg-gradient-to-r from-emerald-300/45 via-cyan-200/70 to-amber-200/55" />
                Stay planner
              </div>
              <span className="text-[10.8px] font-semibold text-white/86">Concierge on-call</span>
            </div>

            <div className="grid grid-cols-1 gap-1.1">
              {[
                { label: "Check-in", value: "Select date" },
                { label: "Check-out", value: "Select date" },
                { label: "Guests", value: "2 guests · Ocean view" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center justify-between rounded-[11px] border border-white/16 bg-white/10 px-2.4 py-1.75 shadow-[0_12px_30px_-32px_rgba(0,0,0,0.75)] backdrop-blur-lg"
                >
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-white/60">{item.label}</p>
                    <p className="text-[11.6px] font-semibold text-white/95">{item.value}</p>
                  </div>
                  <span className="h-7.5 w-7.5 rounded-full bg-gradient-to-br from-emerald-300/28 via-cyan-200/40 to-white/18 ring-1 ring-white/18 shadow-inner shadow-white/10" />
                </div>
              ))}
            </div>

            <Button
              variant="ghost"
              className="
                w-full justify-center rounded-[11px] bg-gradient-to-r from-emerald-500/82 via-teal-500/85 to-cyan-400/80 text-white
                px-3 py-2.1 text-[12px] font-semibold tracking-[0.01em]
                shadow-[0_16px_32px_-28px_rgba(0,0,0,0.9)] hover:shadow-[0_18px_38px_-28px_rgba(0,0,0,0.95)]
                transition-all duration-180 hover:-translate-y-[1px] ring-1 ring-white/28
              "
              aria-label="Check availability"
            >
              Check availability
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop: sculpted marble ribbon, ultra low-profile */}
      <div className="hidden sm:block">
        <div className="relative overflow-hidden rounded-[18px] border border-white/70 bg-gradient-to-br from-white/95 via-white/90 to-white/86 backdrop-blur-xl shadow-[0_26px_68px_-44px_rgba(0,0,0,0.52)] text-charcoal">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-emerald-300/18 blur-3xl" />
            <div className="absolute right-2 top-6 h-40 w-40 rounded-full bg-cyan-300/26 blur-3xl" />
            <div className="absolute -right-8 bottom-0 h-52 w-52 rounded-full bg-amber-200/24 blur-3xl" />
            <div className="absolute inset-x-5 top-4 h-px bg-gradient-to-r from-transparent via-emerald-500/18 to-transparent" />
          </div>

          <div className="relative grid grid-cols-12 gap-4 lg:gap-5 p-4.25 sm:p-4.75 lg:p-5 items-center">
            <div className="col-span-12 md:col-span-4 space-y-1.6">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100/75 to-cyan-100/55 text-teal-900 px-2.9 py-1 text-[10.5px] font-semibold tracking-[0.1em] uppercase ring-1 ring-teal-900/10">
                Signature stay
                <span className="h-1.5 w-9 rounded-full bg-gradient-to-r from-emerald-400/60 to-cyan-400/60" />
              </div>
              <p className="text-[18px] lg:text-[20px] font-semibold text-teal-900 leading-tight">
                Tailored beachfront bookings, crafted in under a minute.
              </p>
              <p className="text-[12.8px] text-charcoal/70">
                Lock your suite, sync arrivals, and let our hosts arrange the details.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-2.6 lg:gap-3">
              {[
                { label: "Check-in", value: "Select date" },
                { label: "Check-out", value: "Select date" },
                { label: "Guests", value: "2 guests · Suite" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group rounded-[12px] border border-teal-900/10 bg-gradient-to-br from-white via-white/80 to-emerald-50/70 px-3 py-2.25 shadow-[0_16px_36px_-36px_rgba(0,0,0,0.5)]"
                >
                  <p className="text-[10.8px] uppercase tracking-[0.15em] text-teal-900/72">{item.label}</p>
                  <p className="text-[13.6px] lg:text-[14px] font-semibold text-teal-900">{item.value}</p>
                </div>
              ))}
              <Button
                variant="ghost"
                className="
                  col-span-2 lg:col-span-1 h-full justify-center rounded-[12px]
                  bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-500 text-white px-3.2 py-2.25
                  text-[13px] lg:text-[13.5px] font-semibold tracking-wide
                  shadow-[0_18px_40px_-26px_rgba(15,118,110,0.55)] hover:-translate-y-[1px] transition-all duration-180
                  ring-1 ring-teal-900/15
                "
                aria-label="Check availability"
              >
                Check availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
