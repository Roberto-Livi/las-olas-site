import Link from "next/link";
import type { Metadata } from "next";
import { SectionReveal } from "@/components/animations/section-reveal";
import { Button } from "@/components/ui/button";
import { ResidenceCard } from "@/components/residences/residence-card";
import { HomeHero } from "@/components/hero/home-hero";
import "./hero-overrides.css";

export const metadata: Metadata = {
  title: "Eagle Beach Apartments in Aruba | Beachfront Vacation Rentals",
  description:
    "Las Olas offers 37 beachfront vacation rentals in Eagle Beach, Aruba—modern condos with full kitchens, balconies, and concierge-level service steps from the shore.",
  openGraph: {
    title: "Eagle Beach Apartments in Aruba | Beachfront Vacation Rentals",
    description:
      "Las Olas offers 37 beachfront vacation rentals in Eagle Beach, Aruba—modern condos with full kitchens, balconies, and concierge-level service steps from the shore.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/eagle-beach-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Beachfront apartments at Las Olas, Eagle Beach Aruba",
      },
    ],
  },
  alternates: { canonical: "/" },
};

const suiteImages = [
  "/images/residences/studio/studio-apartment-1-1600.jpg",
  "/images/residences/studio/studio-apartment-2-1600.jpg",
  "/images/residences/studio/studio-apartment-3-1600.jpg",
];

const suites = [
  {
    title: "Studio Apartment",
    sleeps: "Sleeps 2",
    copy: "Streamlined studio with full kitchen, seating area, and private balcony or terrace—perfect for solo stays or couples.",
    highlights: ["Full kitchen", "Balcony/terrace", "Open layout"],
    gallery: suiteImages,
  },
  {
    title: "One Bedroom Apartment",
    sleeps: "Sleeps 2–4",
    copy: "Full kitchen, living with sofa bed, balcony/terrace, and a serene bedroom for couples or small families.",
    highlights: ["Full kitchen", "Balcony/terrace", "Sofa bed"],
    gallery: suiteImages,
  },
  {
    title: "One Bedroom Suite",
    sleeps: "Sleeps 2–4",
    copy: "Expanded living area, elevated finishes, fully equipped kitchen, and private balcony for an elevated stay.",
    highlights: ["Expanded living", "Upgraded finishes", "Private balcony"],
    gallery: suiteImages,
  },
  {
    title: "Two Bedroom Apartment",
    sleeps: "Sleeps 4–6",
    copy: "Two bedrooms, two baths, dining area, full kitchen, and terrace—ideal for families or groups.",
    highlights: ["Two bathrooms", "Dining area", "Balcony/terrace"],
    gallery: suiteImages,
  },
  {
    title: "Three Bedroom Apartment",
    sleeps: "Sleeps 6–8",
    copy: "Generous living and dining spaces, multiple baths, full kitchen, and balcony for larger gatherings.",
    highlights: ["Multiple baths", "Generous dining", "Balcony/terrace"],
    gallery: suiteImages,
  },
  {
    title: "Three Bedroom Penthouse",
    sleeps: "Sleeps 6–8",
    copy: "Top-floor views, expansive open layout, upgraded finishes, and a private terrace for elevated privacy.",
    highlights: ["Top-floor views", "Open layout", "Private terrace"],
    gallery: suiteImages,
  },
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
      <HomeHero />

      {/* NEW */}
      <section
        aria-label="Key benefits"
        className="relative -mt-6 sm:-mt-12 z-10"
      >
        <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-6 sm:grid-cols-3 sm:gap-5 sm:px-6 lg:px-8">
          {[
            {
              title: "2-minute walk to Eagle Beach",
              body: "Step onto the boardwalk and reach Aruba’s most iconic shoreline in minutes.",
            },
            {
              title: "Residences, not rooms",
              body: "Full kitchens, living space, and balconies so your stay feels like home.",
            },
            {
              title: "Hotel-level care",
              body: "Concierge-style service with the privacy and calm of a luxury residence.",
            },
          ].map((item, index) => (
            <SectionReveal
              key={item.title}
              delay={0.06 + index * 0.08}
              className="rounded-3xl border border-white/70 bg-white/90 p-5 text-charcoal shadow-[0_16px_40px_-30px_rgba(15,23,42,0.45)] backdrop-blur"
            >
              <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{item.body}</p>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section
        id="eagle-beach"
        className="relative -mt-8 sm:-mt-20 lg:-mt-28 overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100 scroll-mt-24 sm:scroll-mt-28 py-14 sm:py-16 lg:py-20"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-teal-900/10 blur-3xl" />
          <div className="absolute right-0 -bottom-20 h-64 w-64 rounded-full bg-sand-200/70 blur-3xl" />
        </div>
        <SectionReveal className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-0">
          <SectionReveal className="space-y-5" delay={0.05}>
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
                View Tripadvisor beach ranking
              </Link>
              <Link
                href="/eagle-beach"
                className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-teal-900 ring-1 ring-sand-200 hover:bg-sand-50"
              >
                Learn more about Eagle Beach
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12} className="relative overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/20 opacity-70" />
            <div className="relative flex h-full flex-col justify-end p-6 text-white">
              <p className="text-lg font-semibold leading-snug drop-shadow">
                #3 Beach in the World · #1 in the Caribbean
              </p>
              <p className="text-sm text-white/85 drop-shadow">Awarded Best of the Best 2025</p>
            </div>
          </SectionReveal>
        </SectionReveal>
      </section>

      <section
        id="amenities"
        className="relative overflow-hidden bg-gradient-to-b from-sand-50 to-white scroll-mt-24 sm:scroll-mt-28"
        style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}
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
            {amenities.map((item, index) => (
              <SectionReveal
                key={item.title}
                delay={0.04 + index * 0.06}
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
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="residences"
        className="space-y-10 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto scroll-mt-24 sm:scroll-mt-28"
        style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1100px" }}
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
              spanFull={index === suites.length - 1 && suites.length % 2 !== 0}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      <section
        id="location-home"
        className="relative overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100 scroll-mt-24 sm:scroll-mt-28"
        style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl grid gap-10 px-4 py-12 sm:px-6 lg:px-0 sm:py-14 lg:py-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">
              Location
            </p>
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">
              Two minutes from Eagle Beach.
            </h2>
            <p className="max-w-2xl text-base text-charcoal/75">
              Step out of Las Olas and onto the boardwalk that leads directly to Eagle Beach-the Caribbean&apos;s #1 and the
              world&apos;s #3 beach. Cafes, dining, and the shoreline are all within a short stroll.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 text-sm text-charcoal/80">
              <div className="rounded-2xl border border-sand-200 bg-white/90 p-4 shadow-sm">
                <p className="font-semibold text-charcoal">2-minute walk</p>
                <p className="text-charcoal/70">Boardwalk to Eagle Beach</p>
              </div>
              <div className="rounded-2xl border border-sand-200 bg-white/90 p-4 shadow-sm">
                <p className="font-semibold text-charcoal">On-site</p>
                <p className="text-charcoal/70">Coffee, dining, car rental</p>
              </div>
              <div className="rounded-2xl border border-sand-200 bg-white/90 p-4 shadow-sm">
                <p className="font-semibold text-charcoal">Central to Aruba</p>
                <p className="text-charcoal/70">Palm Beach & Oranjestad nearby</p>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-sand-200 shadow-lg">
              <iframe
                title="Las Olas Condominiums at Eagle Beach"
                src="https://www.google.com/maps?q=Las+Olas+Condominiums+at+Eagle+Beach&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-b from-white to-sand-50 scroll-mt-24 sm:scroll-mt-28"
        style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}
      >
        <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-sand-100/80 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-0 sm:py-14 lg:py-16 space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Contact</p>
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">Plan your stay at Las Olas</h2>
            <p className="mx-auto max-w-2xl text-base text-charcoal/75">
              Tell us about your dates and preferences. Our team will confirm availability and curate your experience.
            </p>
          </div>
          <div className="rounded-3xl border border-sand-200 bg-white/90 shadow-xl backdrop-blur px-4 py-6 sm:px-8 sm:py-8">
            <form className="grid gap-4 sm:gap-5">
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-charcoal/80">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-2xl border border-sand-200 bg-white/70 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-charcoal/80">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border border-sand-200 bg-white/70 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-charcoal/80">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-2xl border border-sand-200 bg-white/70 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition resize-none"
                  placeholder="Share your dates, preferences, or questions."
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-charcoal/60">
                  We reply quickly with availability and a tailored experience.
                </p>
                <Button className="rounded-full px-6 py-3 shadow-md bg-teal-700 text-white hover:bg-teal-900">
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
