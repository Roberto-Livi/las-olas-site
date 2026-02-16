"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  poster: string;
  src: string;
  mobileSrc?: string;
};

export function HeroVideo({ poster, src, mobileSrc }: HeroVideoProps) {
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const readyRef = useRef(false);

  const markReady = () => {
    if (readyRef.current) return;
    readyRef.current = true;
    setIsReady(true);
    window.dispatchEvent(new Event("hero-video-ready"));
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay might be blocked; the poster remains until user interaction.
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
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          isReady ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
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
