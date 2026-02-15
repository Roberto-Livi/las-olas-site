"use client";

import { useState } from "react";

type HeroVideoProps = {
  poster: string;
  src: string;
};

export function HeroVideo({ poster, src }: HeroVideoProps) {
  const [isReady, setIsReady] = useState(false);

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
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="auto"
        onLoadedData={() => {
          setIsReady(true);
          window.dispatchEvent(new Event("hero-video-ready"));
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
