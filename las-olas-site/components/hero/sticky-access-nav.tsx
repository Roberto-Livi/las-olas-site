import { ChevronRight, Menu } from "lucide-react";

type StickyAccessNavProps = {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
  visible: boolean;
};

export function StickyAccessNav({ onOpenBooking, onOpenMenu, visible }: StickyAccessNavProps) {
  return (
    <>
      <div
        className={`fixed right-4 top-4 z-[40] hidden items-center gap-2 transition duration-300 lg:flex ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={onOpenMenu}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#1f3642] bg-[#0f2230] text-white shadow-[0_16px_30px_-16px_rgba(0,0,0,0.72)] transition hover:bg-[#12303d]"
          aria-label="Open menu"
        >
          <Menu className="h-4.5 w-4.5" aria-hidden />
        </button>

        <button
          type="button"
          onClick={onOpenBooking}
          className="inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-full border border-[#d8e5e1] bg-[#ffffff] px-5 text-[11px] uppercase tracking-[0.12em] !text-[#0a524b] shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_10px_20px_-12px_rgba(7,55,51,0.42)] transition hover:bg-[#f4f8f7]"
        >
          Book now
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
        </button>
      </div>

      <div
        className={`fixed bottom-4 right-4 z-[40] flex items-center gap-2 transition duration-300 lg:hidden ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={onOpenMenu}
          className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#1f3642] bg-[#0f2230] text-white shadow-[0_16px_30px_-16px_rgba(0,0,0,0.72)] transition hover:bg-[#12303d]"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>

        <button
          type="button"
          onClick={onOpenBooking}
          className="inline-flex h-12 cursor-pointer items-center gap-1.5 rounded-full border border-[#d8e5e1] bg-[#ffffff] px-5 text-[11px] uppercase tracking-[0.12em] !text-[#0a524b] shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_10px_20px_-12px_rgba(7,55,51,0.42)] transition hover:bg-[#f4f8f7]"
        >
          Book now
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
        </button>
      </div>
    </>
  );
}
