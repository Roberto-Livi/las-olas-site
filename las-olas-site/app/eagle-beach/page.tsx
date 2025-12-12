import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Eagle Beach Aruba | Las Olas Beachfront Apartments",
  description:
    "Discover Eagle Beach, Aruba—steps from Las Olas beachfront apartments. Calm turquoise water, fofoti trees, and #3 beach in the world just a 2-minute walk away.",
  openGraph: {
    title: "Eagle Beach Aruba | Las Olas Beachfront Apartments",
    description:
      "Discover Eagle Beach, Aruba—steps from Las Olas beachfront apartments. Calm turquoise water, fofoti trees, and #3 beach in the world just a 2-minute walk away.",
    url: "/eagle-beach",
    type: "website",
  },
  alternates: { canonical: "/eagle-beach" },
};

const whyCards = [
  { title: "Soft white sand", copy: "Powdery, pristine sand ideal for sunrise strolls and sunset lounging." },
  { title: "Turquoise waters", copy: "Calm, clear water perfect for swimming, paddle, and effortless dips." },
  { title: "Iconic fofoti trees", copy: "Aruba’s signature windswept trees framing your beach walks and photos." },
];

const gallery = [
  "/images/gallery/beach-1.jpg",
  "/images/gallery/beach-2.jpg",
  "/images/gallery/beach-3.jpg",
  "/images/gallery/beach-4.jpg",
  "/images/gallery/beach-5.jpg",
  "/images/gallery/beach-6.jpg",
];

export default function EagleBeachPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: "url('/images/eagle-beach-hero.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-charcoal/80" />
        </div>
        <div className="relative mx-auto max-w-6xl space-y-6 px-4 py-16 sm:px-6 lg:px-0 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/25 backdrop-blur">
            Tripadvisor Travelers’ Choice 2025 · #3 Beach in the World
          </div>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">Eagle Beach, Aruba</h1>
          <p className="max-w-3xl text-lg text-white/85">Just a 2-minute walk from Las Olas.</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 shadow-sm backdrop-blur">
              #3 Beach in the World
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 shadow-sm backdrop-blur">
              #1 in the Caribbean
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 shadow-sm backdrop-blur">
              2-minute walk from Las Olas
            </span>
          </div>
          <Button
            asChild
            className="bg-white text-teal-900 hover:bg-sand-100 hover:text-teal-900 shadow-lg"
          >
            <Link href="/book">Check availability</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-0">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Why Eagle Beach</p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">World-class shoreline, moments away.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {whyCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-sand-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-display text-xl text-charcoal">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{card.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-8 px-4 sm:px-6 lg:px-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">From your doorstep to the shore</p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Two minutes to turquoise water.</h2>
          <p className="text-base text-charcoal/75">
            Step out of Las Olas and onto Eagle Beach’s boardwalk in minutes. Perfect for sunrise jogs, kid-friendly
            days, and sunset walks beneath the fofoti trees. Calm water and wide sands make it easy for everyone to
            enjoy.
          </p>
        </div>
        <div className="rounded-3xl border border-sand-200 bg-white/90 p-6 shadow-md backdrop-blur">
          <h3 className="font-display text-xl text-charcoal">Fast facts</h3>
          <ul className="mt-3 space-y-2 text-sm text-charcoal/75">
            <li>• #3 Beach in the World (Tripadvisor Best of the Best 2025)</li>
            <li>• #1 in the Caribbean (2025)</li>
            <li>• 2-minute walk from Las Olas</li>
            <li>• Calm surf, soft sand, family-friendly</li>
          </ul>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-900/10 px-3 py-1 text-xs font-semibold text-teal-900">
            <Link href="https://www.tripadvisor.com/TravelersChoice-Beaches" target="_blank" rel="noreferrer">
              View Tripadvisor ranking
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-0">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Gallery</p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">A few glimpses of Eagle Beach</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, idx) => (
            <div
              key={idx}
              className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-sand-100 via-white to-teal-900/10 shadow-sm ring-1 ring-sand-200/70 transition hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(15,118,110,0.08), rgba(230,212,189,0.18)), url('${src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
