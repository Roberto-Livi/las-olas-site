import { Search } from "lucide-react";
import { bookingFields } from "@/components/hero/home-hero.constants";

export function HeroBookingBar() {
  return (
    <div className="absolute inset-x-3 bottom-3 z-20 hidden sm:inset-x-6 sm:bottom-4 lg:inset-x-10 lg:block xl:inset-x-12 hero-booking-reveal">
      <div className="relative overflow-hidden rounded-[26px] border border-white/55 bg-[linear-gradient(160deg,rgba(248,249,247,0.97),rgba(239,243,240,0.95))] p-2 shadow-[0_28px_60px_-36px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_140%_at_0%_0%,rgba(255,255,255,0.76),transparent_58%),radial-gradient(70%_90%_at_100%_0%,rgba(15,118,110,0.14),transparent_60%)]" />
        <div className="relative grid gap-2 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          {bookingFields.map((field) => (
            <button
              key={field.value}
              type="button"
              className="group inline-flex min-h-[62px] cursor-pointer items-center gap-3 rounded-2xl border border-[#dfe9e4] bg-[linear-gradient(180deg,#ffffff,#f9fbfa)] px-4 text-left text-[#38504b] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition duration-200 hover:-translate-y-[1px] hover:border-[#d0dfd9] hover:bg-white sm:min-h-[64px] sm:px-5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#edf4f1] ring-1 ring-[#d9e8e3]">
                <field.icon className="h-[16px] w-[16px] text-[#0f766e]" aria-hidden />
              </span>
              <span className="grid gap-1">
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#83958f]">{field.label}</span>
                <span className="text-[13px] font-medium leading-none tracking-[0.01em] text-[#324640]">
                  {field.value}
                </span>
              </span>
            </button>
          ))}
          <button
            type="button"
            className="col-span-1 inline-flex min-h-[58px] cursor-pointer items-center justify-center gap-2 rounded-[20px] bg-[linear-gradient(140deg,#0a524b,#0f766e)] px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_12px_24px_-14px_rgba(8,57,53,0.72)] transition duration-200 hover:-translate-y-[1px] hover:brightness-105 sm:col-span-2 lg:col-span-1 lg:min-h-[64px] lg:px-9"
          >
            Search <Search className="h-[15px] w-[15px]" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
