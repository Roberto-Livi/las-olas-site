import Link from "next/link";
import type { ComponentType } from "react";
import { CalendarDays, ChevronDown, Search, Users, X } from "lucide-react";

type BookingModalProps = {
  onClose: () => void;
  open: boolean;
};

type ModalFieldProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

export function BookingModal({ onClose, open }: BookingModalProps) {
  return (
    <div
      className={`fixed inset-0 z-[90] transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(10,82,75,0.2),rgba(0,0,0,0.72))] backdrop-blur-[4px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div className="absolute inset-0 grid place-items-center p-4 sm:p-6">
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          className={`w-full max-w-3xl overflow-hidden rounded-[1.8rem] border border-white/45 bg-[linear-gradient(160deg,rgba(249,250,249,0.98),rgba(237,242,239,0.98))] shadow-[0_42px_90px_-38px_rgba(0,0,0,0.78)] transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between border-b border-[#d7e4df] px-5 py-4 sm:px-7 sm:py-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#5b7a73]">Direct booking</p>
              <h2 id="booking-modal-title" className="mt-1 font-display text-2xl text-[#143b36] sm:text-3xl">
                Reserve Your Las Olas Stay
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#d0e0da] bg-white/85 text-[#0a524b] transition hover:bg-white"
              aria-label="Close booking modal"
            >
              <X className="h-4.5 w-4.5" aria-hidden />
            </button>
          </div>

          <div className="space-y-5 px-5 py-5 sm:px-7 sm:py-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <ModalField label="Arrival" value="Select check-in date" icon={CalendarDays} />
              <ModalField label="Departure" value="Select check-out date" icon={CalendarDays} />
              <ModalField label="Guests" value="2 Adults, 0 Children" icon={Users} />
              <ModalField label="Rate Preference" value="Best available / Promo code" icon={Search} />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#4b655f]">Best rate guaranteed when you book directly with Las Olas.</p>
              <Link
                href="/book"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(140deg,#0a524b,#0f766e)] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_14px_24px_-14px_rgba(7,55,51,0.72)] transition hover:brightness-105"
              >
                Continue <Search className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ModalField({ icon: Icon, label, value }: ModalFieldProps) {
  return (
    <button
      type="button"
      className="group inline-flex min-h-[64px] w-full cursor-pointer items-center gap-3 rounded-2xl border border-[#dbe7e2] bg-white/88 px-4 text-left transition hover:-translate-y-[1px] hover:bg-white"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ebf3f0] ring-1 ring-[#d5e5e0]">
        <Icon className="h-[16px] w-[16px] text-[#0f766e]" aria-hidden />
      </span>
      <span className="grid gap-1">
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#7f8f8a]">{label}</span>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#324640]">
          {value}
          <ChevronDown className="h-3.5 w-3.5 text-[#6a847d]" aria-hidden />
        </span>
      </span>
    </button>
  );
}
