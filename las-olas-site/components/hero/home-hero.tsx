"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight, Menu } from "lucide-react";
import { HeroVideo } from "@/components/hero/hero-video";
import { BookingModal } from "@/components/hero/booking-modal";
import { DrawerMenu } from "@/components/hero/drawer-menu";
import { HeroBookingBar } from "@/components/hero/hero-booking-bar";
import { StickyAccessNav } from "@/components/hero/sticky-access-nav";
import {
  useHeroScrollProgress,
  useOverlayScrollLock,
  useScrollThreshold,
} from "@/components/hero/home-hero.hooks";

export function HomeHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [introReady, setIntroReady] = useState(false);
  const [logoReady, setLogoReady] = useState(false);
  const [introFallbackReady, setIntroFallbackReady] = useState(false);

  const closeAllOverlays = useCallback(() => {
    setMenuOpen(false);
    setBookingOpen(false);
  }, []);

  const showStickyAccess = useScrollThreshold(0.72);
  const heroScrollProgress = useHeroScrollProgress();
  const isOverlayOpen = menuOpen || bookingOpen;

  useOverlayScrollLock(isOverlayOpen, closeAllOverlays);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIntroFallbackReady(true), 700);
    return () => window.clearTimeout(timeout);
  }, []);

  const shouldRunIntro = introReady && (logoReady || introFallbackReady);

  return (
    <section
      id="hero"
      className={`relative min-h-screen overflow-hidden bg-[#0b0f13] text-white ${shouldRunIntro ? "hero-intro-ready" : ""}`}
    >
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

      <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center" aria-hidden>
        <Image
          src="/images/las-olas-logo-white.PNG"
          alt=""
          width={620}
          height={218}
          className="hero-logo-watermark h-auto w-[68vw] max-w-[680px] opacity-0"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-5 pb-12 pt-7 sm:px-8 sm:pb-16 lg:px-12 lg:pb-10 lg:pt-9">
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

          <div className="pointer-events-none absolute left-1/2 top-0 flex -translate-x-1/2 items-center justify-center px-2 hero-logo-reveal opacity-0">
            <Image
              src="/images/las-olas-logo-white.PNG"
              alt="Las Olas Condominiums"
              width={210}
              height={74}
              className="h-auto w-[82px] opacity-95 sm:w-[98px] lg:w-[122px]"
              priority
              onLoad={() => setLogoReady(true)}
              onError={() => setLogoReady(true)}
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

        <div className="flex-1 pt-10 sm:pt-14 lg:flex lg:flex-col lg:justify-end lg:pt-16">
          <div className="w-full max-w-none space-y-6 lg:max-w-[980px]">
            <h1 className="hero-headline-reveal font-display text-[2.2rem] leading-[1.04] text-white sm:text-[2.7rem] lg:text-[1.65rem] lg:leading-[1.08]">
              Wake up near one of the world&apos;s most beautiful beaches.
            </h1>
          </div>
        </div>

        <HeroBookingBar className="relative z-20 mt-8 hidden lg:block xl:mx-2" />
      </div>

      <DrawerMenu open={menuOpen} onClose={() => setMenuOpen(false)} onBookNow={() => setBookingOpen(true)} />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />

      <StickyAccessNav
        visible={showStickyAccess && !isOverlayOpen}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
      />
    </section>
  );
}
