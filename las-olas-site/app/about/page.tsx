import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Las Olas | Eagle Beach Apartments in Aruba",
  description:
    "Learn about Las Olas—37 beachfront apartments in Eagle Beach, Aruba, offering modern condo-hotel comforts, full kitchens, and concierge service steps from the sand.",
  openGraph: {
    title: "About Las Olas | Eagle Beach Apartments in Aruba",
    description:
      "Learn about Las Olas—37 beachfront apartments in Eagle Beach, Aruba, offering modern condo-hotel comforts, full kitchens, and concierge service steps from the sand.",
    url: "/about",
    type: "website",
  },
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Comfort", body: "Residences designed with soft palettes, natural light, and private outdoor space." },
  { title: "Location", body: "A 2-minute walk to Eagle Beach—sunrise strolls, sunset swims, and effortless access." },
  { title: "Experience", body: "Concierge ease, on-site dining, pool and jacuzzi, and thoughtful service." },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-teal-900/10 blur-3xl" />
          <div className="absolute right-0 -bottom-16 h-64 w-64 rounded-full bg-sand-200/70 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl space-y-5 px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">About</p>
          <h1 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
            About Las Olas
          </h1>
          <p className="max-w-3xl text-base text-charcoal/75">
            Modern condo-hotel living steps from Eagle Beach, Aruba.
          </p>
          <div className="mt-6 h-56 w-full overflow-hidden rounded-3xl bg-cover bg-center shadow-lg ring-1 ring-sand-200"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(15,118,110,0.08), rgba(230,212,189,0.2)), url('/images/eagle-beach-hero-1920.jpg')",
            }}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-0">
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">
            A new build crafted for modern beach living.
          </h2>
          <p className="text-base text-charcoal/75">
            Las Olas is a boutique 38-residence condo-hotel beside Eagle Beach. Our vision was simple: deliver
            architecturally calm spaces, intuitive service, and effortless access to one of the world’s top-ranked
            beaches. From thoughtful layouts to on-site dining and wellness, every detail is shaped for both ease and
            elegance.
          </p>
          <p className="text-base text-charcoal/75">
            Wake to soft light, walk two minutes to turquoise water, and return to a residence that feels like home—with
            resort-level support when you want it.
          </p>
          <div className="pt-2">
            <Link href="/eagle-beach" className="text-teal-900 underline decoration-2 underline-offset-4 hover:text-teal-700">
              See why Eagle Beach is the #3 beach in the world
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-sand-200 bg-white/90 p-6 shadow-md backdrop-blur">
          <h3 className="font-display text-xl text-charcoal">Highlights</h3>
          <ul className="mt-3 space-y-2 text-sm text-charcoal/75">
            <li>• 38 modern residences</li>
            <li>• 2-minute walk to Eagle Beach</li>
            <li>• Pool, jacuzzi, and sundeck</li>
            <li>• On-site restaurant, coffee shop, and car rental</li>
            <li>• Full kitchens, balconies/terraces in every category</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-0">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Our Vision</p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Why we built Las Olas</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-sand-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-display text-xl text-charcoal">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-charcoal text-white shadow-2xl">
          <div className="relative isolate px-8 py-12 sm:px-10 lg:px-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_30%)]" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                  Ready for Eagle Beach?
                </p>
                <h2 className="font-display text-3xl leading-tight md:text-4xl">
                  Stay steps from Aruba’s #3 beach in the world.
                </h2>
                <p className="max-w-2xl text-base text-white/80">
                  Choose your dates and residence type, and we’ll prepare your stay with priority unit assignment and
                  a dedicated arrival touch.
                </p>
              </div>
              <Button
                asChild
                className="bg-white text-teal-900 hover:bg-sand-100 hover:text-teal-900 shadow-lg"
              >
                <a href="/book">Check availability</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
