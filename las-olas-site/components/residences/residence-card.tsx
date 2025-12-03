"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ResidenceCardProps = {
  title: string;
  sleeps: string;
  copy: string;
  highlights?: string[];
  gallery?: string[];
  spanFull?: boolean;
};

export function ResidenceCard({
  title,
  sleeps,
  copy,
  highlights = [],
  gallery = [],
  spanFull = false,
}: ResidenceCardProps) {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const images = gallery.length ? gallery : ["/images/residences/placeholder.jpg"];
  const current = images[index % images.length];

  const next = () => {
    setLoading(true);
    setImgLoaded(false);
    setIndex((prev) => {
      const nextIndex = (prev + 1) % images.length;
      setAnimKey((k) => k + 1);
      return nextIndex;
    });
  };
  const prev = () => {
    setLoading(true);
    setImgLoaded(false);
    setIndex((prev) => {
      const nextIndex = (prev - 1 + images.length) % images.length;
      setAnimKey((k) => k + 1);
      return nextIndex;
    });
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl ${
        spanFull ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`relative w-full ${spanFull ? "h-80" : "h-72"} overflow-hidden`}>
        <div className="absolute inset-0">
          <Image
            key={`${current}-${animKey}`}
            src={current}
            alt={`${title} photo ${index + 1}`}
            fill
            className={`object-cover transition-all duration-800 ease-[cubic-bezier(0.18,0.6,0.32,1.0)] ${
              imgLoaded ? "opacity-100 scale-[1.01]" : "opacity-0 scale-[1.04]"
            }`}
            onLoadingComplete={() => {
              setLoading(false);
              setImgLoaded(true);
            }}
            onLoad={() => {
              setLoading(false);
              setImgLoaded(true);
            }}
            onError={() => {
              setLoading(false);
              setImgLoaded(true);
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/12 via-transparent to-amber-300/10 mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(15,118,110,0.22),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(230,212,189,0.45),transparent_35%)]" />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px]">
            <div className="h-10 w-10 rounded-full border border-white/25 border-t-white/80 animate-spin-slow shadow-lg shadow-white/20" />
          </div>
        )}
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-charcoal shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-teal-700" />
          {sleeps}
        </div>
        {images.length > 1 && (
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm ring-1 ring-sand-200 transition hover:-translate-y-0.5"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <div className="flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition ${i === index ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm ring-1 ring-sand-200 transition hover:-translate-y-0.5"
              aria-label="Next photo"
            >
              ›
            </button>
          </div>
        )}
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl text-charcoal">{title}</h3>
            <p className="text-sm text-charcoal/60">{sleeps}</p>
          </div>
          <Button asChild variant="outline" className="px-3 text-xs">
            <Link href="/suites">View details</Link>
          </Button>
        </div>
        <p className="text-sm leading-relaxed text-charcoal/75">{copy}</p>
        <p className="text-xs uppercase tracking-[0.12em] text-charcoal/55">
          Photos are representative; layouts and palettes may vary.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-sand-200 bg-sand-50 px-3 py-1 text-xs font-medium text-charcoal/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
