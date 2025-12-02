"use client";

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
  const images = gallery.length ? gallery : ["/images/residences/placeholder.jpg"];
  const current = images[index % images.length];

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl ${
        spanFull ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`relative w-full ${spanFull ? "h-80" : "h-72"} overflow-hidden`}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(15,118,110,0.12), rgba(230,212,189,0.22)), url('${current}')`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(15,118,110,0.22),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(230,212,189,0.45),transparent_35%)]" />
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
