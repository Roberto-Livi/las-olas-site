"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useEffect } from "react";

type SiteShellProps = {
  children: React.ReactNode;
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/eagle-beach", label: "Eagle Beach" },
  { href: "/#residences", label: "Residences" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileActionBase =
    "inline-flex h-7 items-center justify-center rounded-full px-2 text-[10px] font-semibold tracking-[0.01em] whitespace-nowrap transition cursor-pointer";

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return pathname === href;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/70 bg-white shadow-[0_10px_28px_-24px_rgba(10,82,75,0.25)]">
        <div className="mx-auto flex max-w-6xl items-center gap-3 sm:gap-5 px-3 sm:px-4 lg:px-6 py-0.5 sm:py-1 md:py-1.5 lg:py-1.75 pt-[env(safe-area-inset-top)]">
          <Link href="/" className="flex shrink-0 items-center gap-1 sm:gap-1.5">
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[11px] sm:text-lg md:text-xl tracking-[0.05em] text-teal-900 whitespace-nowrap">
                Las Olas
              </span>
              <span className="text-[5.8px] sm:text-[9.5px] md:text-[11px] uppercase tracking-[0.2em] text-charcoal/70 whitespace-nowrap">
                Condominiums at Eagle Beach
              </span>
            </div>
          </Link>

          <div className="hidden xl:flex flex-1 items-center justify-center">
            <div className="inline-flex items-center gap-4 rounded-full border border-white/50 bg-white/80 px-4 py-1.75 text-[12px] font-medium text-charcoal/80 shadow-[0_12px_28px_-20px_rgba(0,0,0,0.35)] backdrop-blur whitespace-nowrap">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link-glow group relative px-1.5 pb-1 transition hover:text-teal-900 whitespace-nowrap ${
                    isActive(item.href) ? "text-teal-900 font-semibold" : ""
                  }`}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute inset-x-1 bottom-0 block h-[2px] scale-x-0 origin-center transform transition-all duration-300 ease-out ${
                      isActive(item.href)
                        ? "bg-teal-900 opacity-100 scale-x-100"
                        : "bg-teal-900/40 opacity-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5 md:gap-3 pr-3 sm:pr-4">
            <div className="hidden xl:block">
              <Suspense fallback={null}>
                <LanguageSwitcher compact />
              </Suspense>
            </div>
            <Button
              asChild
              className="inline-flex shrink-0 whitespace-nowrap rounded-full bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700 px-2.25 py-1.1 text-[10px] font-semibold text-white shadow-[0_10px_28px_-16px_rgba(0,0,0,0.45)] ring-1 ring-white/40 transition hover:-translate-y-[2px] hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.55)] hover:brightness-110 md:px-3 md:py-1.5 md:text-[11px] lg:px-3.25 lg:py-1.75 lg:text-[11.5px] xl:px-3.5 xl:py-2 xl:text-[12px]"
            >
              <Link href="/book" className="text-white !text-white hover:!text-white">
                Book now
              </Link>
            </Button>
            <button
              type="button"
              className={`${mobileActionBase} xl:hidden gap-1 bg-white/90 text-teal-900/90 ring-1 ring-white/60 shadow-[0_4px_12px_-18px_rgba(0,0,0,0.35)] backdrop-blur-md hover:-translate-y-0.5 hover:shadow-[0_6px_16px_-18px_rgba(0,0,0,0.4)] hover:ring-white/70 px-2.5 py-1.5 rounded-full`}
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <div className="flex h-3 w-3.5 flex-col justify-between">
                <span className="block h-[1px] w-full rounded-full bg-teal-800/85 transition" />
                <span className="block h-[1px] w-full rounded-full bg-teal-800/85 transition" />
                <span className="block h-[1px] w-full rounded-full bg-teal-800/85 transition" />
              </div>
              <span className="text-[10px] font-semibold text-teal-900/90">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute inset-y-0 right-0 w-full max-w-sm bg-gradient-to-br from-cyan-50/95 via-white/92 to-amber-50/90 backdrop-blur-2xl text-teal-900 shadow-2xl ring-1 ring-teal-100/80 animate-[fadeIn_180ms_ease-out] data-[slide]:animate-[slideIn_220ms_ease-out]"
            onClick={(e) => e.stopPropagation()}
            data-slide
          >
            <div className="flex items-center justify-between border-b border-teal-100/80 px-5 py-4">
              <div className="flex flex-col">
                <span className="font-display text-xl text-teal-900">Las Olas</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-teal-800/80">Eagle Beach</span>
              </div>
              <button
                type="button"
                className="h-9 w-9 rounded-full bg-white/90 text-teal-800 ring-1 ring-teal-100/80 backdrop-blur transition hover:ring-teal-900/40 hover:text-teal-900 cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="border-t border-teal-100/80 px-5 py-3">
              <div className="pb-3 flex items-center justify-start">
                <Suspense fallback={null}>
                  <LanguageSwitcher compact tone="light" />
                </Suspense>
              </div>
              <nav className="flex flex-col text-base text-teal-900 leading-relaxed">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group px-1 py-3 tracking-[0.08em] uppercase transition hover:text-teal-700 relative"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="relative inline-block">
                      {item.label}
                      <span className="pointer-events-none absolute inset-x-0 -bottom-1 block h-[1.5px] scale-x-0 bg-gradient-to-r from-teal-500/20 via-teal-600/60 to-amber-400/25 transition-transform duration-200 origin-center group-hover:scale-x-100" />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-r from-teal-500/20 border-t border-teal-100/80 backdrop-blur-2xl p-4">
              <Button
                asChild
                className="w-full justify-center rounded-full bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700 px-5 py-3 text-[14px] font-semibold text-white shadow-[0_14px_34px_-18px_rgba(0,0,0,0.55)] ring-1 ring-white/40 transition hover:-translate-y-[2px] hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)] hover:brightness-110 [&_a]:!text-white"
              >
                <Link href="/book" onClick={() => setMobileOpen(false)} className="!text-white">
                  Book now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      <main className="flex w-full flex-1 flex-col pb-16">{children}</main>

      <footer className="border-t border-white/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-44">
              <Image
                src="/images/las-olas-logo.png"
                alt="Las Olas Condominiums"
                fill
                sizes="176px"
                className="object-contain"
                priority
              />
            </div>
            <div className="text-sm text-charcoal/70">
              <p className="font-medium text-charcoal">Las Olas · Eagle Beach</p>
              <p>J.E. Irausquin Blvd 228D, Aruba</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-charcoal/70">
            <Link href="/privacy" className="hover:text-teal-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-teal-900">
              Terms
            </Link>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
