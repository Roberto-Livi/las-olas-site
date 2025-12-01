import Link from "next/link";
import { BookingHeroWidget } from "@/components/booking/booking-hero-widget";
import { Button } from "@/components/ui/button";

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
    title: "One-Bedroom Suite",
    copy: "Tailored for two—serene bedrooms, curated art, and terraces that catch the evening glow.",
  },
  {
    title: "Two-Bedroom Residence",
    copy: "Expansive living with chef-worthy kitchens, indoor-outdoor dining, and generous lounging.",
  },
  {
    title: "Three-Bedroom Penthouse",
    copy: "Panoramic horizons, wraparound terraces, and refined privacy for elevated gatherings.",
  },
];

const perks = [
  { label: "38 residences", detail: "Private, boutique scale" },
  { label: "2-minute walk", detail: "Direct to Eagle Beach" },
  { label: "Sunrise to sunset", detail: "Cabanas, pool, lounge" },
];

export default function Home() {
  return (
    <div className="space-y-24 lg:space-y-32">
      <section className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-7">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-teal-900/75">
            <span className="h-px w-8 bg-teal-900/50" />
            Eagle Beach · Aruba
          </div>
          <h1 className="font-display text-4xl leading-tight text-charcoal md:text-5xl">
            Beachfront living, reimagined for the modern traveler.
          </h1>
          <p className="max-w-xl text-lg text-charcoal/80">
            Las Olas is a luxury condo-hotel steps from Eagle Beach. Architectural calm meets island ease—private
            residences, elevated hospitality, and the Caribbean’s most beloved shoreline at your door.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-charcoal/70">
            {perks.map((perk) => (
              <span
                key={perk.label}
                className="flex items-center gap-2 rounded-full border border-sand-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-teal-700" />
                <span className="font-medium text-charcoal">{perk.label}</span>
                <span className="text-charcoal/60">· {perk.detail}</span>
              </span>
            ))}
          </div>
          <BookingHeroWidget />
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-teal-900/15 via-teal-700/10 to-sand-100 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-24 w-24 rounded-full bg-gradient-to-br from-sand-100 via-white to-teal-900/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] bg-charcoal text-white shadow-2xl ring-1 ring-teal-900/15">
            <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-teal-900/25" />
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/eagle-beach-hero.jpg"
            >
              <source src="/videos/las-olas-intro.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-black/35 px-5 py-4 backdrop-blur">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  At Eagle Beach
                </p>
                <p className="text-base font-semibold text-white">
                  Step out and feel the sand in under two minutes.
                </p>
              </div>
              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.18em]">
                Watch
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10">
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

      <section className="space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">
              Suites & Residences
            </p>
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">
              Your beachfront address in Aruba.
            </h2>
            <p className="max-w-2xl text-base text-charcoal/75">
              Light-filled interiors, quiet luxury, and room to stretch out. Select the layout that matches your
              getaway—every option includes direct access to Eagle Beach.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/suites">Explore suites</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {suites.map((suite) => (
            <div
              key={suite.title}
              className="relative overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-white to-teal-900/12" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(15,118,110,0.15),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(230,212,189,0.4),transparent_35%)]" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="font-display text-xl text-charcoal">{suite.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/75">{suite.copy}</p>
                <Link
                  href="/suites"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-900 hover:text-teal-700"
                >
                  View details
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-charcoal text-white shadow-2xl">
        <div className="relative isolate px-8 py-12 sm:px-10 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_30%)]" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                Ready to stay at Eagle Beach?
              </p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                Book direct for the best residences and arrival perks.
              </h2>
              <p className="max-w-2xl text-base text-white/80">
                Choose your dates, secure your favorite layout, and we’ll prepare your residence with a pre-arrival
                concierge touch.
              </p>
            </div>
            <Button
              asChild
              className="bg-white text-teal-900 hover:bg-sand-100 hover:text-teal-900 shadow-lg"
            >
              <Link href="/book">Check availability</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
