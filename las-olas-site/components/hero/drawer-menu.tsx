import Link from "next/link";
import { X } from "lucide-react";
import { drawerLinks } from "@/components/hero/home-hero.constants";

type DrawerMenuProps = {
  onBookNow: () => void;
  onClose: () => void;
  open: boolean;
};

export function DrawerMenu({ onBookNow, onClose, open }: DrawerMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[80] transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/45 backdrop-blur-[3px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`absolute inset-y-0 left-0 w-full max-w-sm transform border-r border-white/15 bg-[linear-gradient(155deg,rgba(13,24,34,0.98),rgba(8,15,22,0.96))] p-6 text-white shadow-[0_28px_70px_-26px_rgba(0,0,0,0.82)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between border-b border-white/12 pb-5">
          <p className="font-display text-2xl tracking-[0.08em] text-white/95">Las Olas</p>
          <button
            type="button"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/15"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X className="h-4.5 w-4.5" aria-hidden />
          </button>
        </div>

        <nav className="mt-6 grid gap-2" aria-label="Site navigation">
          {drawerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-xl px-4 py-3 text-[15px] tracking-[0.04em] text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-white/12 pt-6">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookNow();
            }}
            className="inline-flex h-11 cursor-pointer items-center justify-center rounded-full bg-white px-6 text-sm uppercase tracking-[0.12em] !text-[#0a524b] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_20px_-12px_rgba(7,55,51,0.45)]"
          >
            Book now
          </button>
        </div>
      </aside>
    </div>
  );
}
