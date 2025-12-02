import Link from "next/link";
import Image from "next/image";
import { BookingHeroWidget } from "@/components/booking/booking-hero-widget";
import { Button } from "@/components/ui/button";
import { ResidenceCard } from "@/components/residences/residence-card";
import { IntroOverlay } from "@/components/intro/intro-overlay";

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
  { label: "38 residences", detail: "Private, boutique scale" },
  { label: "2-minute walk", detail: "Direct to Eagle Beach" },
  { label: "Sunrise to sunset", detail: "Cabanas, pool, lounge" },
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
      <IntroOverlay />
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
            Aruba · Eagle Beach
            <span className="h-px w-10 bg-white/60" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white ring-1 ring-white/25 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sand-100" />
            Tripadvisor Travelers’ Choice 2025 · #3 beach in the world
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

      <section
        id="eagle-beach"
        className="relative -mt-28 sm:-mt-32 lg:-mt-36 overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100 scroll-mt-28 sm:scroll-mt-32 py-14 sm:py-16 lg:py-20"
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
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/eagle-beach-hero.jpg')" }}
              aria-hidden
            />
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

      <section
        id="amenities"
        className="relative overflow-hidden bg-gradient-to-b from-sand-50 to-white scroll-mt-28 sm:scroll-mt-32"
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-0 sm:py-12 lg:py-16">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">On-site Amenities</p>
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">Everything at Your Doorstep</h2>
            <p className="mx-auto max-w-3xl text-base text-charcoal/75">
              Las Olas brings everyday conveniences directly into the building, so you can spend less time planning and
              more time enjoying Eagle Beach.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {amenities.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-sand-200 bg-white/90 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden sm:h-56">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/20 opacity-60 transition group-hover:opacity-80" />
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(15,118,110,0.08), rgba(230,212,189,0.15)), url('${item.image ?? "/images/amenities/placeholder.jpg"}')`,
                    }}
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-charcoal shadow-sm backdrop-blur">
                    {item.tag}
                  </div>
                </div>
                <div className="space-y-2 p-6">
                  <h3 className="font-display text-xl text-charcoal">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal/75">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="residences"
        className="space-y-10 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto scroll-mt-28 sm:scroll-mt-32"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">
              Residences
            </p>
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">
              Choose the suite that fits your escape.
            </h2>
            <p className="max-w-2xl text-base text-charcoal/75">
              Five refined categories, each with full kitchens, private outdoor space, and thoughtful finishes. Photos
              represent typical layouts—colors and configurations may vary.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/suites">View availability</Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {suites.map((suite, index) => (
            <ResidenceCard
              key={suite.title}
              title={suite.title}
              sleeps={suite.sleeps}
              copy={suite.copy}
              highlights={suite.highlights}
              gallery={suite.gallery}
              spanFull={index === suites.length - 1}
            />
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

      <section
        id="contact"
        className="space-y-8 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto scroll-mt-28 sm:scroll-mt-32"
      >
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
