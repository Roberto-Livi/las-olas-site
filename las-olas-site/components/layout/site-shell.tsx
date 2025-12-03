"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

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

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return pathname === href;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-sand-50/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6 py-6 lg:px-0">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <span className="font-display text-2xl tracking-[0.04em] text-teal-900">Las Olas</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/70">
                Condominiums at Eagle Beach
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 text-sm font-medium text-charcoal/80">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-glow group relative pb-2 transition hover:text-teal-900 ${
                  isActive(item.href) ? "text-teal-900" : ""
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute inset-x-0 bottom-0 block h-[2px] scale-x-0 origin-center transform transition-all duration-300 ease-out ${
                    isActive(item.href)
                      ? "bg-teal-900 opacity-100 scale-x-100"
                      : "bg-teal-900/40 opacity-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute inset-0 -z-10 rounded-full bg-teal-900/6 opacity-0 blur-lg transition duration-300 group-hover:opacity-100`}
                />
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 pr-1 sm:pr-2">
            <Button
              asChild
              className="hidden rounded-full px-5 py-2 shadow-md bg-teal-700 text-white hover:bg-teal-900 hover:-translate-y-0.5 transition lg:inline-flex"
            >
              <Link href="/book" className="text-white">
                Book now
              </Link>
            </Button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-charcoal/80 ring-1 ring-sand-200 shadow-md transition hover:text-teal-900 hover:ring-teal-900/40 hover:-translate-y-0.5 cursor-pointer lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <span className="text-base">Menu</span>
              <div className="flex h-4 w-5 flex-col justify-between">
                <span className="block h-[2px] w-full bg-charcoal" />
                <span className="block h-[2px] w-full bg-charcoal" />
                <span className="block h-[2px] w-full bg-charcoal" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute inset-y-0 right-0 w-full max-w-sm bg-white text-charcoal shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-sand-200 px-4 py-4">
              <div className="flex flex-col">
                <span className="font-display text-xl text-teal-900">Las Olas</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/70">Eagle Beach</span>
              </div>
              <button
                type="button"
                className="h-10 w-10 rounded-full bg-sand-100 text-charcoal/80 ring-1 ring-sand-200 transition hover:ring-teal-900/40"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-1 px-4 py-4 text-base">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 transition hover:bg-sand-50 hover:text-teal-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 w-full justify-center bg-teal-700 text-white hover:bg-teal-900 shadow-md rounded-full px-5 py-3"
              >
                <Link href="/book" onClick={() => setMobileOpen(false)}>
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
