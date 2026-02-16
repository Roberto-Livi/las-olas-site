"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  poster: string;
  src: string;
  mobileSrc?: string;
};

export function HeroVideo({ poster, src, mobileSrc }: HeroVideoProps) {
  const [isReady, setIsReady] = useState(false);
  const [showPoster, setShowPoster] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const readyRef = useRef(false);

  const markReady = () => {
    if (readyRef.current) return;
    readyRef.current = true;
    setIsReady(true);
    window.dispatchEvent(new Event("hero-video-ready"));
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } })
      .connection;
    const saveData = connection?.saveData === true;

    if (prefersReducedMotion || saveData) {
      setShowPoster(true);
      return;
    }

    const posterFallbackTimeout = window.setTimeout(() => {
      if (!readyRef.current) setShowPoster(true);
    }, 350);

    return () => {
      window.clearTimeout(posterFallbackTimeout);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay might be blocked; show image fallback.
        setShowPoster(true);
      }
    };

    attemptPlay();

    const readyCheck = window.setInterval(() => {
      if (video.readyState >= 2) markReady();
    }, 200);

    return () => window.clearInterval(readyCheck);
  }, []);

  return (
    <div className="absolute inset-0">
      {showPoster && !isReady ? (
        <Image
          src={poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : null}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
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
