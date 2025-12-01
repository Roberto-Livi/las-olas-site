import Link from "next/link";
import Image from "next/image";
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
      <section className="relative isolate min-h-[90vh] w-full overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-55"
            style={{ backgroundImage: "url('/images/eagle-beach-hero.jpg')" }}
            aria-hidden
          />
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-charcoal/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.07),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_30%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:py-20 lg:py-28">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/12 px-5 py-2 text-xs uppercase tracking-[0.26em] text-white/80 ring-1 ring-white/20 backdrop-blur">
            <span className="h-px w-10 bg-white/60" />
            Eagle Beach · Aruba
            <span className="h-px w-10 bg-white/60" />
          </div>
          <div className="max-w-5xl space-y-6">
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Beachfront living, reimagined for the modern traveler.
            </h1>
            <p className="mx-auto max-w-4xl text-lg text-white/85">
              Las Olas is a luxury condo-hotel steps from Eagle Beach. Architectural calm meets island ease—private
              residences, elevated hospitality, and the Caribbean’s most beloved shoreline at your door.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
            {perks.map((perk) => (
              <span
                key={perk.label}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-2 shadow-sm backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-sand-100" />
                <span className="font-medium text-white">{perk.label}</span>
                <span className="text-white/70">· {perk.detail}</span>
              </span>
            ))}
          </div>
          <div className="w-full max-w-3xl">
            <BookingHeroWidget />
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

      <section className="space-y-10 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto">
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

      <section className="space-y-10 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">
              Eagle Beach in your backyard
            </p>
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">
              Two-minute walk to Aruba’s calmest stretch of sand.
            </h2>
            <p className="text-base text-charcoal/75">
              Las Olas sits steps from Eagle Beach—arrive, drop your bags, and you’re toes-in-sand in under two minutes.
              Concierge can set chairs and umbrellas so you just stroll over.
            </p>
            <div className="rounded-2xl border border-sand-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <h3 className="font-display text-xl text-charcoal">Location details</h3>
              <ul className="mt-3 space-y-2 text-sm text-charcoal/75">
                <li>• 2-minute walk to Eagle Beach boardwalk</li>
                <li>• 10 minutes to Palm Beach dining</li>
                <li>• 15 minutes from Queen Beatrix International Airport</li>
              </ul>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm">
            <iframe
              title="Las Olas Condominiums at Eagle Beach"
              src="https://www.google.com/maps?q=Las+Olas+Condominiums+at+Eagle+Beach&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-charcoal text-white shadow-2xl max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
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

      <section className="space-y-8 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Stay in touch</p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Plan your stay with our team.</h2>
          <p className="max-w-2xl text-base text-charcoal/75">
            Share your questions or trip vision—we’ll pair you with the right residence and arrange arrivals, beach setups,
            and island activities.
          </p>
        </div>
        <form
          className="grid gap-4 rounded-3xl border border-sand-200 bg-white p-6 shadow-lg backdrop-blur md:grid-cols-2"
          action="mailto:legacyaua@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label className="space-y-2 text-sm text-charcoal/80">
            <span className="font-medium text-charcoal">Name</span>
            <input
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-sand-200 bg-sand-50 px-3 py-3 text-charcoal shadow-inner focus:border-teal-700 focus:outline-none"
              placeholder="Your full name"
            />
          </label>
          <label className="space-y-2 text-sm text-charcoal/80">
            <span className="font-medium text-charcoal">Email</span>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-sand-200 bg-sand-50 px-3 py-3 text-charcoal shadow-inner focus:border-teal-700 focus:outline-none"
              placeholder="you@email.com"
            />
          </label>
          <label className="md:col-span-2 space-y-2 text-sm text-charcoal/80">
            <span className="font-medium text-charcoal">Message</span>
            <textarea
              name="message"
              required
              className="h-32 w-full rounded-xl border border-sand-200 bg-sand-50 px-3 py-3 text-charcoal shadow-inner focus:border-teal-700 focus:outline-none"
              placeholder="Tell us about your questions or trip vision."
            />
          </label>
          <div className="md:col-span-2 flex items-center justify-between text-sm text-charcoal/60">
            <span>We’ll reply from legacyaua@gmail.com</span>
            <Button type="submit" className="px-6">
              Send message
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
