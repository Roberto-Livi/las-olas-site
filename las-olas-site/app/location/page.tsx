import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eagle Beach Aruba Location | Las Olas Apartments",
  description:
    "Find Las Olas on Eagle Beach, Aruba. Two-minute walk to the sand, near dining, groceries, Palm Beach nightlife, casinos, and golf—ideal for beachfront vacation rentals.",
};

const highlights = [
  { title: "Eagle Beach", distance: "2-minute walk", detail: "#3 Beach in the World · Tripadvisor 2025", icon: "🏖️" },
  { title: "Supermarket", distance: "5-minute walk", detail: "Groceries and daily essentials nearby", icon: "🛒" },
  { title: "Restaurants", distance: "5–10 minutes", detail: "Casual to upscale dining along the strip", icon: "🍽️" },
  { title: "Palm Beach", distance: "10 minutes", detail: "Shopping, nightlife, and entertainment", icon: "🌴" },
  { title: "Casino", distance: "8 minutes", detail: "Evening gaming and entertainment options", icon: "🎰" },
  { title: "Golf course", distance: "15 minutes", detail: "Scenic rounds with ocean breezes", icon: "⛳" },
];

export default function LocationPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-teal-900/10 blur-3xl" />
          <div className="absolute right-0 -bottom-16 h-64 w-64 rounded-full bg-sand-200/70 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl space-y-4 px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Location</p>
          <h1 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
            Perfectly positioned at Eagle Beach, Aruba.
          </h1>
          <p className="max-w-2xl text-base text-charcoal/75">
            Two minutes to one of the world’s top beaches, with dining, groceries, and entertainment all within easy reach.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-0">
        <div className="overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-lg">
          <iframe
            title="Las Olas Condominiums at Eagle Beach"
            src="https://www.google.com/maps?q=Las+Olas+Condominiums+at+Eagle+Beach&output=embed"
            className="h-[380px] w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Explore the area</p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Everything within minutes.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-sand-200 bg-white/90 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
                  <p className="text-sm text-charcoal/60">{item.distance}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="pt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/book" className="rounded-full bg-teal-900/10 px-3 py-2 text-teal-900 font-semibold hover:bg-teal-900/15">
            Book beachfront apartments near Eagle Beach
          </Link>
          <Link href="/faq" className="rounded-full bg-white border border-sand-200 px-3 py-2 text-charcoal hover:border-teal-700/40">
            Read guest FAQs for Las Olas Aruba
          </Link>
        </div>
      </section>
    </div>
  );
}
