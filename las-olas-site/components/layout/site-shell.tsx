"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type SiteShellProps = {
  children: React.ReactNode;
  locale?: string;
};

const primaryNavLinks = [
  { href: "/", label: "Home" },
  { href: "/#residences", label: "Residences" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
];

const secondaryNavLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const desktopNavLinks = [
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
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const mobileActionBase =
    "inline-flex h-7 items-center justify-center rounded-full px-2 text-[10px] font-semibold tracking-[0.01em] whitespace-nowrap transition cursor-pointer";

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash || "");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const getHrefHash = (href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return "";
    return `#${href.slice(hashIndex + 1)}`;
  };

  const isActive = (href: string) => {
    const hash = getHrefHash(href);
    if (hash) {
      const basePath = href.split("#")[0] || "/";
      return pathname === basePath && currentHash === hash;
    }

    if (href === "/") {
      return pathname === "/" && currentHash === "";
    }

    return pathname === href;
  };

  const handleNavClick = (href: string) => {
    const hash = getHrefHash(href);
    const basePath = href.split("#")[0] || "/";
    const isInPageHashNav = Boolean(hash) && pathname === basePath;

    if (isInPageHashNav) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.history.replaceState(null, "", `${basePath}${hash}`);
      setCurrentHash(hash);
    } else {
      router.push(href);
      setCurrentHash(hash);
    }

    if (mobileOpen) setMobileOpen(false);
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
              {desktopNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(item.href);
                  }}
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
              className={`${mobileActionBase} gap-1 bg-white/90 text-teal-900/90 ring-1 ring-white/60 shadow-[0_4px_12px_-18px_rgba(0,0,0,0.35)] backdrop-blur-md hover:-translate-y-0.5 hover:shadow-[0_6px_16px_-18px_rgba(0,0,0,0.4)] hover:ring-white/70 px-2.5 py-1.5 rounded-full`}
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
        <div
          className="fixed inset-0 z-50 bg-[linear-gradient(to_bottom,rgba(9,22,28,0.52),rgba(12,20,24,0.46))] backdrop-blur-[8px] animate-[menuBackdropIn_220ms_ease-out_both]"
          onClick={() => setMobileOpen(false)}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.13),transparent_62%)]" />
          <div
            className="menu-shoreline-texture absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-hidden bg-gradient-to-br from-[#f9f5ef]/97 via-[#fffdfa]/97 to-[#f1ebe0]/96 text-teal-900 shadow-[0_22px_60px_-24px_rgba(8,24,30,0.75)] ring-1 ring-white/65 animate-[menuPanelIn_260ms_cubic-bezier(0.22,0.9,0.24,1)_both]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="relative flex items-center justify-between border-b border-teal-100/80 px-5 pt-[calc(env(safe-area-inset-top)+0.9rem)] pb-4">
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-[1.4rem] leading-none text-teal-950">Las Olas</span>
                <span className="text-[12px] tracking-[0.08em] text-teal-900/80">Eagle Beach, Aruba</span>
                <Link
                  href="/eagle-beach"
                  onClick={() => setMobileOpen(false)}
                  className="mt-1 inline-flex min-h-8 items-center text-[12px] text-teal-900/72 underline decoration-teal-900/30 underline-offset-4 transition hover:text-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900/45"
                >
                  Explore Eagle Beach
                </Link>
              </div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-teal-900 ring-1 ring-teal-200/80 shadow-sm backdrop-blur transition active:scale-[0.97] hover:ring-teal-900/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900/45"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pt-5 pb-4">
              <div>
                <p className="mb-3 text-[11px] font-medium tracking-[0.12em] text-teal-900/55">Primary</p>
                <nav className="flex flex-col gap-1.5" aria-label="Primary navigation">
                  {primaryNavLinks.map((item, index) => (
                    <Link
                    key={item.href}
                    href={item.href}
                    className={`menu-item-enter group relative flex min-h-12 items-center rounded-xl py-3 pl-4 pr-3 text-[17px] leading-tight text-teal-950/92 transition active:translate-x-[1px] active:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900/45 ${
                      isActive(item.href)
                        ? "bg-teal-900/[0.07] text-teal-950"
                        : "hover:bg-teal-900/[0.05] active:bg-teal-900/[0.08]"
                    }`}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(item.href);
                    }}
                    style={{ animationDelay: `${70 + index * 28}ms` }}
                  >
                      <span
                        className={`absolute left-1.5 top-2 bottom-2 w-[2px] rounded-full transition ${
                          isActive(item.href) ? "bg-teal-800/70" : "bg-transparent group-hover:bg-teal-800/30"
                        }`}
                      />
                      <span className="relative inline-block">{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="pt-5">
                <p className="mb-3 text-[11px] font-medium tracking-[0.12em] text-teal-900/55">More</p>
                <nav className="flex flex-col gap-1.5" aria-label="Secondary navigation">
                  {secondaryNavLinks.map((item, index) => (
                    <Link
                    key={item.href}
                    href={item.href}
                    className={`menu-item-enter group relative flex min-h-11 items-center rounded-xl py-2.5 pl-4 pr-3 text-[15px] text-teal-950/88 transition active:translate-x-[1px] active:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900/45 ${
                      isActive(item.href)
                        ? "bg-teal-900/[0.07] text-teal-950"
                        : "hover:bg-teal-900/[0.05] active:bg-teal-900/[0.08]"
                    }`}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(item.href);
                    }}
                    style={{ animationDelay: `${230 + index * 28}ms` }}
                  >
                      <span
                        className={`absolute left-1.5 top-2 bottom-2 w-[2px] rounded-full transition ${
                          isActive(item.href) ? "bg-teal-800/70" : "bg-transparent group-hover:bg-teal-800/30"
                        }`}
                      />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="sticky bottom-0 left-0 right-0 mt-5 border-t border-teal-100/80 bg-[linear-gradient(to_top,rgba(245,239,230,0.98),rgba(249,244,236,0.92))] px-5 pt-4 pb-[calc(env(safe-area-inset-bottom)+0.95rem)] backdrop-blur-xl">
              <Link
                href="/gallery"
                onClick={() => setMobileOpen(false)}
                className="mb-3 inline-flex min-h-10 items-center text-[14px] text-teal-900/80 underline decoration-teal-900/35 underline-offset-4 transition hover:text-teal-900 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900/45"
              >
                View Photos
              </Link>
              <Button
                asChild
                className="w-full justify-center rounded-full bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700 px-5 py-3 text-[14px] font-semibold text-white shadow-[0_15px_36px_-18px_rgba(1,28,34,0.68)] ring-1 ring-white/45 transition hover:-translate-y-[1px] hover:brightness-110 active:translate-y-[1px] active:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900/40 [&_a]:!text-white"
              >
                <Link href="/book" onClick={() => setMobileOpen(false)} className="!text-white">
                  Check Availability
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
