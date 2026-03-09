"use client";

import { useEffect, useRef, useState } from "react";

export function useOverlayScrollLock(open: boolean, onEscape: () => void) {
  const lockedScrollY = useRef(0);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };

    lockedScrollY.current = window.scrollY;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    window.addEventListener("keydown", onKeyDown);

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
  }, [open, onEscape]);
}

export function useScrollThreshold(multiplier = 0.72) {
  const [passedThreshold, setPassedThreshold] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const threshold = window.innerHeight * multiplier;
      setPassedThreshold(window.scrollY > threshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [multiplier]);

  return passedThreshold;
}

export function useHeroScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let raf = 0;
    const updateProgress = () => {
      const viewport = window.innerHeight || 1;
      const next = Math.min(1, Math.max(0, window.scrollY / (viewport * 1.2)));
      setProgress(next);
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

  return progress;
}
