"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  parallax?: number;
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  parallax = 0.08,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (parallax <= 0) return;
    const node = ref.current;
    if (!node) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let raf = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.5;
      const elementCenter = rect.top + rect.height * 0.5;
      const delta = (elementCenter - viewportCenter) * parallax;
      const clamped = Math.max(-28, Math.min(28, delta));
      setParallaxY(clamped);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [parallax]);

  const style = {
    "--reveal-delay": `${delay}s`,
    "--parallax-y": `${parallaxY}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`${className ?? ""} scene-reveal ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}
