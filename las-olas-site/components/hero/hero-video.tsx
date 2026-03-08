"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  poster: string;
  src: string;
  mobileSrc?: string;
};

export function HeroVideo({ poster, src, mobileSrc }: HeroVideoProps) {
  const [isReady, setIsReady] = useState(false);
  const [useFallbackImage, setUseFallbackImage] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const readyRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);

  const clearFallbackTimer = useCallback(() => {
    if (fallbackTimerRef.current === null) return;
    window.clearTimeout(fallbackTimerRef.current);
    fallbackTimerRef.current = null;
  }, []);

  const markReady = useCallback(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    clearFallbackTimer();
    setIsReady(true);
    setUseFallbackImage(false);
    window.dispatchEvent(new Event("hero-video-ready"));
  }, [clearFallbackTimer]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } })
      .connection;
    const saveData = connection?.saveData === true;

    if (prefersReducedMotion || saveData) {
      // Intentional static experience for reduced motion / data saver users.
      fallbackTimerRef.current = window.setTimeout(() => setUseFallbackImage(true), 0);
      return;
    }

    // If the video doesn't become playable soon, switch to a deliberate static fallback.
    fallbackTimerRef.current = window.setTimeout(() => {
      if (!readyRef.current) setUseFallbackImage(true);
    }, 2200);

    return () => {
      clearFallbackTimer();
    };
  }, [clearFallbackTimer]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        await video.play();
      } catch {
        setUseFallbackImage(true);
      }
    };

    attemptPlay();

    const readyCheck = window.setInterval(() => {
      if (video.readyState >= 2) markReady();
    }, 200);

    return () => window.clearInterval(readyCheck);
  }, [markReady]);

  return (
    <div className="absolute inset-0">
      {useFallbackImage ? (
        <Image src={poster} alt="" fill priority sizes="100vw" className="object-cover" />
      ) : null}

      <div
        className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
          isReady || useFallbackImage ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_12%_8%,rgba(74,191,201,0.3),transparent_56%),radial-gradient(70%_90%_at_88%_5%,rgba(255,255,255,0.26),transparent_50%),linear-gradient(160deg,#0a1e29,#0b2531_45%,#071920)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent_36%,rgba(0,0,0,0.22))]" />
      </div>

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={markReady}
        onLoadedData={markReady}
        onCanPlay={markReady}
      >
        {mobileSrc ? <source src={mobileSrc} type="video/mp4" media="(max-width: 768px)" /> : null}
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
