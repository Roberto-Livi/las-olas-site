"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/hero/hero-video";
import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Menu,
  Search,
  Users,
  X,
} from "lucide-react";

type BookingField = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

const bookingFields: BookingField[] = [
  {
    icon: CalendarDays,
    label: "Dates",
    value: "Check-in  ->  Check-out",
  },
  {
    icon: Users,
    label: "Guests",
    value: "2 Adults, 0 Children",
  },
  {
    icon: Search,
    label: "Rate Option",
    value: "Special codes",
  },
];

const drawerLinks = [
  { href: "/", label: "Home" },
  { href: "/#residences", label: "Residences" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/eagle-beach", label: "Eagle Beach" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function HomeHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [showStickyAccess, setShowStickyAccess] = useState(false);
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
  const lockedScrollY = useRef(0);

  useEffect(() => {
    const isOverlayOpen = menuOpen || bookingOpen;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setBookingOpen(false);
      }
    };

    if (isOverlayOpen) {
      lockedScrollY.current = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${lockedScrollY.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, lockedScrollY.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, bookingOpen]);

  useEffect(() => {
    const updateVisibility = () => {
      const threshold = window.innerHeight * 0.72;
      setShowStickyAccess(window.scrollY > threshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let raf = 0;
    const updateProgress = () => {
      const viewport = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, window.scrollY / (viewport * 1.2)));
      setHeroScrollProgress(progress);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#0b0f13] text-white">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 origin-center"
          style={{
            transform: `translate3d(0, ${heroScrollProgress * -10}px, 0) scale(${1 + heroScrollProgress * 0.035})`,
            transition: "transform 180ms ease-out",
          }}
        >
          <HeroVideo
            poster="/images/eagle-beach-hero-1920.jpg"
            src="/videos/las-olas-intro.mp4"
            mobileSrc="/videos/las-olas-intro-720p.mp4"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-5 pb-12 pt-7 sm:px-8 sm:pb-16 lg:px-12 lg:pb-32 lg:pt-9">
        <header className="relative flex min-h-12 items-start justify-center">
          <div className="absolute left-0 top-0 flex items-center">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/28 bg-black/12 backdrop-blur transition hover:bg-black/25"
            >
              <Menu className="h-4.5 w-4.5" aria-hidden />
            </button>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-0 flex -translate-x-1/2 items-center justify-center px-2 hero-logo-reveal">
            <Image
              src="/images/las-olas-logo-white.PNG"
              alt="Las Olas Condominiums"
              width={210}
              height={74}
              className="h-auto w-[82px] opacity-95 sm:w-[98px] lg:w-[122px]"
              priority
            />
          </div>

          <div className="absolute right-0 top-0">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-[12px] uppercase tracking-[0.14em] text-white transition hover:text-white/85 lg:h-11 lg:rounded-full lg:bg-white lg:px-6 lg:text-sm lg:tracking-[0.12em] lg:!text-[#0a524b] lg:shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_10px_20px_-12px_rgba(7,55,51,0.42)] lg:hover:bg-[#f4f8f7]"
            >
              Book now
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </header>

        <div className="mt-auto pb-8 sm:pb-10 lg:pb-0 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="w-full max-w-none space-y-6 lg:max-w-[980px]">
            <h1 className="font-display text-[2.2rem] leading-[1.04] text-white sm:text-[2.7rem] lg:text-[1.65rem] lg:leading-[1.08] hero-headline-reveal">
              Wake up near one of the world&apos;s most beautiful beaches.
            </h1>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

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

      <DrawerMenu open={menuOpen} onClose={() => setMenuOpen(false)} onBookNow={() => setBookingOpen(true)} />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />

      <StickyAccessNav
        visible={showStickyAccess && !menuOpen && !bookingOpen}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
      />
    </section>
  );
}

type StickyAccessNavProps = {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
  visible: boolean;
};

function StickyAccessNav({ onOpenBooking, onOpenMenu, visible }: StickyAccessNavProps) {
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

type DrawerMenuProps = {
  onBookNow: () => void;
  onClose: () => void;
  open: boolean;
};

function DrawerMenu({ onBookNow, onClose, open }: DrawerMenuProps) {
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

type BookingModalProps = {
  onClose: () => void;
  open: boolean;
};

function BookingModal({ onClose, open }: BookingModalProps) {
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

type ModalFieldProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

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
