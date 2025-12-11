"use client";

type HeroVideoProps = {
  poster: string;
  src: string;
};

export function HeroVideo({ poster, src }: HeroVideoProps) {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      onLoadedData={() => window.dispatchEvent(new Event("hero-video-ready"))}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
