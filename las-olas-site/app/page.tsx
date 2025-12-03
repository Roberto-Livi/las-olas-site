// ...existing code...
import Link from "next/link";
import Image from "next/image";
import { BookingHeroWidget } from "@/components/booking/booking-hero-widget";
import { Button } from "@/components/ui/button";
import { ResidenceCard } from "@/components/residences/residence-card";
import { IntroOverlay } from "@/components/intro/intro-overlay";
import { ScrollIndicator } from "@/components/hero/scroll-indicator";

const highlights = [
  {
    title: "Ocean-calibrated design",
    copy: "Calm palettes, sculpted lighting, and tactile finishes that mirror the softness of Eagle Beach.",
  },
  {
    title: "Concierge-level service",
    copy: "Private arrivals, beach setups, island transfers, and on-call hosts for anything you need.",
  },
  {
    title: "Wellness-forward amenities",
    copy: "Spa-inspired baths, sunrise yoga decks, fitness, and breezy lounges shaded by palms.",
  },
];

const suites = [
  {
    title: "Studio Apartment",
    sleeps: "Sleeps 2",
    copy: "Streamlined studio with full kitchen, seating area, and private balcony or terrace—perfect for solo stays or couples.",
    highlights: ["Full kitchen", "Balcony/terrace", "Open layout"],
    gallery: [
      "/images/residences/studio-apartment-1.jpg",
      "/images/residences/studio-apartment-2.jpg",
      "/images/residences/studio-apartment-3.jpg",
    ],
  },
  {
    title: "One Bedroom Apartment",
    sleeps: "Sleeps 2–4",
    copy: "Full kitchen, living with sofa bed, balcony/terrace, and a serene bedroom for couples or small families.",
    highlights: ["Full kitchen", "Balcony/terrace", "Sofa bed"],
    gallery: [
      "/images/residences/one-bedroom-apartment-1.jpg",
      "/images/residences/one-bedroom-apartment-2.jpg",
      "/images/residences/one-bedroom-apartment-3.jpg",
    ],
  },
  {
    title: "One Bedroom Suite",
    sleeps: "Sleeps 2–4",
    copy: "Expanded living area, elevated finishes, fully equipped kitchen, and private balcony for an elevated stay.",
    highlights: ["Expanded living", "Upgraded finishes", "Private balcony"],
    gallery: [
      "/images/residences/one-bedroom-suite-1.jpg",
      "/images/residences/one-bedroom-suite-2.jpg",
      "/images/residences/one-bedroom-suite-3.jpg",
    ],
  },
  {
    title: "Two Bedroom Apartment",
    sleeps: "Sleeps 4–6",
    copy: "Two bedrooms, two baths, dining area, full kitchen, and terrace—ideal for families or groups.",
    highlights: ["Two bathrooms", "Dining area", "Balcony/terrace"],
    gallery: [
      "/images/residences/two-bedroom-apartment-1.jpg",
      "/images/residences/two-bedroom-apartment-2.jpg",
      "/images/residences/two-bedroom-apartment-3.jpg",
    ],
  },
  {
    title: "Three Bedroom Apartment",
    sleeps: "Sleeps 6–8",
    copy: "Generous living and dining spaces, multiple baths, full kitchen, and balcony for larger gatherings.",
    highlights: ["Multiple baths", "Generous dining", "Balcony/terrace"],
    gallery: [
      "/images/residences/three-bedroom-apartment-1.jpg",
      "/images/residences/three-bedroom-apartment-2.jpg",
      "/images/residences/three-bedroom-apartment-3.jpg",
    ],
  },
  {
    title: "Three Bedroom Penthouse",
    sleeps: "Sleeps 6–8",
    copy: "Top-floor views, expansive open layout, upgraded finishes, and a private terrace for elevated privacy.",
    highlights: ["Top-floor views", "Open layout", "Private terrace"],
    gallery: [
      "/images/residences/three-bedroom-penthouse-1.jpg",
      "/images/residences/three-bedroom-penthouse-2.jpg",
      "/images/residences/three-bedroom-penthouse-3.jpg",
    ],
  },
];

const perks = [
  { label: "37 residences", detail: "Private, boutique scale" },
  { label: "2-minute walk", detail: "Direct to Eagle Beach" },
];

const amenities = [
  {
    title: "On-Site Restaurant",
    body: "Fresh meals and drinks all day, steps from your apartment.",
    tag: "Casual dining · Walk-in friendly",
    image: "/images/amenities/restaurant.jpg",
  },
  {
    title: "Specialty Coffee Shop",
    body: "Espresso, pastries, and grab-and-go before the beach.",
    tag: "Morning favorites · To-go options",
    image: "/images/amenities/coffee.jpg",
  },
  {
    title: "Car Rental Office",
    body: "Pick up a rental on-property and explore Aruba freely.",
    tag: "On-property pickup · Explore Aruba",
    image: "/images/amenities/car-rental.jpg",
  },
  {
    title: "Pool & Jacuzzi",
    body: "Sun deck loungers and a jacuzzi for post-beach unwind.",
    tag: "Sun deck · Relax & recharge",
    image: "/images/amenities/pool.jpg",
  },
];

export default function Home() {
  return (
    <div className="space-y-24 lg:space-y-32">
      {/* <IntroOverlay /> */}
      {/* CALM, LUXURY HERO */}
      <section className="relative isolate min-h-screen w-full overflow-hidden bg-charcoal text-white">
        {/* Background media */}
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/eagle-beach-hero.jpg"
          >
            <source src="/videos/las-olas-intro.mp4" type="video/mp4" />
          </video>

          {/* Stronger gradient overlay between media and text */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/55 via-slate-900/30 to-slate-900/0" />

          {/* Subtle cinematic layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-charcoal/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,220,220,0.06),transparent_45%),radial-gradient(circle_at_75%_5%,rgba(255,255,255,0.06),transparent_40%)] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/25 via-slate-900/5 to-slate-900/40" />
          <div className="absolute inset-0 bg-black/18 mix-blend-multiply" />

          {/* Gentle orbs */}
          <div className="absolute top-10 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-teal-500/18 to-cyan-500/12 blur-3xl opacity-40 animate-pulse-slower" />
          <div className="absolute -bottom-20 -right-56 h-96 w-96 rounded-full bg-gradient-to-l from-orange-500/12 to-red-500/8 blur-3xl opacity-30 animate-pulse-slow" />
        </div>

        {/* Main text container above overlay */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-7 sm:pt-9 lg:pt-12 pb-8 sm:pb-10">
          <div className="flex min-h-[68vh] sm:min-h-[72vh] md:min-h-[75vh] flex-col items-center justify-center text-center gap-4 sm:gap-5 md:gap-6">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-4 rounded-full bg-white/12 px-6 py-3 text-[12px] sm:text-[13px] uppercase tracking-[0.24em] text-white/90 ring-1 ring-white/25 backdrop-blur-2xl transition-all duration-500">
                <span className="h-px w-6 bg-gradient-to-r from-white/0 via-white/70 to-white/0" />
                <span className="font-medium">Aruba · Eagle Beach</span>
                <span className="h-px w-6 bg-gradient-to-r from-white/0 via-white/70 to-white/0" />
              </div>

              <div className="inline-flex items-center gap-3 rounded-full bg-white/14 px-5 py-2.5 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/35 backdrop-blur-2xl">
                <span className="relative flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-300 shadow-sm" />
                </span>
                <span>Travelers' Choice 2025 · #3 Beach Worldwide</span>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light md:font-normal tracking-tight text-white leading-[1.1] sm:leading-[1.08] md:leading-[1.06] lg:leading-[1.04]">
                Beachfront living, reimagined for the modern traveler.
              </h1>
            </div>

            {/* Feature pills row */}
            <div className="mt-1 sm:mt-2 mb-4 sm:mb-7 flex flex-wrap items-center justify-center gap-3">
              {perks.map((perk) => (
                <span
                  key={perk.label}
                  className="inline-flex items-center rounded-full bg-white/18 border border-white/30 px-5 py-2 text-xs md:text-sm text-slate-50/95 font-medium hover:bg-white/28 hover:border-white/40 hover:-translate-y-[1px] transition-all duration-200 ease-out"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-300/80 mr-3" />
                  <span className="font-medium">{perk.label}</span>
                  <span className="ml-2 text-white/70 text-xs md:text-sm">· {perk.detail}</span>
                </span>
              ))}
            </div>

            <p className="mx-auto max-w-3xl text-sm leading-relaxed sm:text-base md:text-lg text-white/85 drop-shadow font-light tracking-wide">
              Las Olas is a luxury condo-hotel steps from Eagle Beach. Architectural calm meets island ease—luxury residences, elevated hospitality, and the Caribbean's most beloved shoreline at your door.
            </p>

            {/* Booking bar centered under features */}
            <div className="w-full max-w-4xl pb-2 sm:pb-3 mb-7 sm:mb-9">
              <BookingHeroWidget />
            </div>
          </div>

          <ScrollIndicator />
        </div>
      </section>

      <section
        id="eagle-beach"
        className="relative -mt-20 sm:-mt-24 lg:-mt-28 overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100 scroll-mt-24 sm:scroll-mt-28 py-14 sm:py-16 lg:py-20"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-teal-900/10 blur-3xl" />
          <div className="absolute right-0 -bottom-20 h-64 w-64 rounded-full bg-sand-200/70 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-0">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3 rounded-full bg-teal-900/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-teal-900 ring-1 ring-teal-900/20">
              <span className="h-px w-8 bg-teal-900/50" />
              Eagle Beach · #3 in the World
            </div>
            <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
              Two minutes to Tripadvisor’s Best of the Best shoreline.
            </h2>
            <p className="max-w-3xl text-base text-charcoal/75">
              Tripadvisor Travelers’ Choice Best of the Best 2025 ranked Eagle Beach #3 worldwide and #1 in the
              Caribbean. Powder-soft sand, calm turquoise water, and iconic fofoti trees frame your stay—just steps from
              your residence.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-sand-200 bg-white/90 p-4 text-sm font-semibold text-charcoal shadow-sm backdrop-blur">
                <p>Tripadvisor 2025</p>
                <p className="text-charcoal/70">#3 Beach in the World</p>
              </div>
              <div className="rounded-2xl border border-sand-200 bg-white/90 p-4 text-sm font-semibold text-charcoal shadow-sm backdrop-blur">
                <p>Caribbean’s Best</p>
                <p className="text-charcoal/70">Visitaruba ranking</p>
              </div>
              <div className="rounded-2xl border border-sand-200 bg-white/90 p-4 text-sm font-semibold text-charcoal shadow-sm backdrop-blur">
                <p>2-minute walk</p>
                <p className="text-charcoal/70">Direct boardwalk access</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-sm text-charcoal/70">
              <span>Ranked by Tripadvisor Travelers’ Choice Best of the Best 2025.</span>
              <Link
                href="https://www.tripadvisor.com/TravelersChoice-Beaches"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-teal-900/10 px-3 py-1 text-teal-900 underline decoration-2 underline-offset-4 hover:bg-teal-900/15"
              >
                View ranking
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/20 opacity-70" />
            <div className="relative flex h-full flex-col justify-end p-6 text-white">
              <p className="text-lg font-semibold leading-snug drop-shadow">
                #3 Beach in the World · #1 in the Caribbean
              </p>
              <p className="text-sm text-white/85 drop-shadow">Awarded Best of the Best 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">
            The Las Olas experience
          </p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">
            Architecture, hospitality, and horizon views.
          </h2>
          <p className="max-w-2xl text-base text-charcoal/75">
            Subtle luxury from arrival to sunset. Every stay layers immersive calm with thoughtful service, so you can
            breathe deeper and stay closer to the beach.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-sand-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/0 via-transparent to-teal-900/5 opacity-0 transition group-hover:opacity-100" />
              <h3 className="font-display text-xl text-charcoal">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ...rest of file unchanged... */}
    </div>
  );
}
// ...existing code...
