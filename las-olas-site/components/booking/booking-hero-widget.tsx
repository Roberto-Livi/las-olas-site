import { Button } from "@/components/ui/button";

type BookingHeroWidgetProps = {
  variant: "mobile" | "desktop";
};

export function BookingHeroWidget({ variant }: BookingHeroWidgetProps) {
  if (variant === "mobile") {
    return <MobileWidget />;
  }

  return <DesktopWidget />;
}

function MobileWidget() {
  return (
    <div className="relative mx-auto w-full max-w-[20rem]">
      <div className="absolute inset-0 -z-10 translate-y-1 rounded-[26px] bg-gradient-to-r from-white/14 via-cyan-100/10 to-amber-100/10 blur-3xl opacity-70" />

      <div className="relative overflow-hidden rounded-[22px] border border-white/14 bg-white/10 shadow-[0_16px_44px_-32px_rgba(0,0,0,0.75)] ring-1 ring-white/14 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_80%_18%,rgba(15,118,110,0.14),transparent_32%)] opacity-80" />

        <div className="relative grid grid-cols-3 divide-x divide-white/12 px-3 py-2.5 text-sm text-white/90">
          <div className="flex flex-col gap-1 pr-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Check-in</span>
            <span className="text-[13px] font-semibold leading-tight">Dec 12</span>
          </div>
          <div className="flex flex-col gap-1 px-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Check-out</span>
            <span className="text-[13px] font-semibold leading-tight">Dec 16</span>
          </div>
          <div className="flex flex-col gap-1 pl-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Guests</span>
            <span className="text-[13px] font-semibold leading-tight">2 adults</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center px-4 py-3">
          <Button className="h-9 rounded-full bg-teal-800/90 px-4 text-[12px] font-semibold text-white shadow-[0_12px_40px_-32px_rgba(0,0,0,0.9)] ring-1 ring-teal-100/55 hover:bg-teal-900">
            Check availability
          </Button>
        </div>
      </div>
    </div>
  );
}

function DesktopWidget() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="absolute inset-x-6 -top-3 h-14 rounded-full bg-gradient-to-r from-white/14 via-cyan-100/12 to-amber-100/14 blur-3xl opacity-70" />

      <div className="relative overflow-hidden rounded-[24px] border border-white/14 bg-white/12 shadow-[0_22px_80px_-52px_rgba(0,0,0,0.85)] ring-1 ring-white/14 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(255,255,255,0.16),transparent_36%),radial-gradient(circle_at_72%_16%,rgba(15,118,110,0.14),transparent_30%)] opacity-85" />

        <div className="relative flex items-center gap-4 px-6 py-4">
          <div className="flex flex-1 items-center gap-4 text-sm text-white">
            <Field label="Check-in" value="Dec 12" />
            <Field label="Check-out" value="Dec 16" />
            <Field label="Guests" value="2 adults" />
          </div>

          <Button className="flex-none rounded-full bg-teal-800/90 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_50px_-34px_rgba(0,0,0,0.85)] ring-1 ring-teal-100/55 hover:bg-teal-900">
            View availability
          </Button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-1 items-center justify-between gap-2 rounded-full bg-white/14 px-3 py-2 text-[13px] font-semibold ring-1 ring-white/20">
      <span className="text-[11px] uppercase tracking-[0.18em] text-white/70">{label}</span>
      <span className="text-white">{value}</span>
    </div>
  );
}
