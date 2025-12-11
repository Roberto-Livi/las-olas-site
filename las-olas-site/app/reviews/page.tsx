import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guest Reviews | Las Olas Eagle Beach Apartments",
  description:
    "Read guest reviews of Las Olas Eagle Beach apartments in Aruba—beachfront vacation rentals with concierge service, pool, and 2-minute walk to the sand.",
};

const testimonials = [
  {
    name: "Sofia M.",
    country: "🇨🇦",
    quote:
      "We loved how close we were to Eagle Beach—sunrise walks every day. The condo felt like home but with resort perks.",
  },
  {
    name: "David R.",
    country: "🇺🇸",
    quote: "Spacious, quiet, and beautifully designed. Concierge arranged everything from beach chairs to dinner.",
  },
  {
    name: "Lucia P.",
    country: "🇦🇷",
    quote: "The pool and jacuzzi after the beach were perfect. Coffee shop downstairs was our daily ritual.",
  },
  {
    name: "Marie K.",
    country: "🇫🇷",
    quote: "A true luxury condo-hotel. Balcony views, calm interiors, and two minutes to turquoise water.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-teal-900/10 blur-3xl" />
          <div className="absolute right-0 -bottom-16 h-64 w-64 rounded-full bg-sand-200/70 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl space-y-4 px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Reviews</p>
          <h1 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
            Guest Reviews
          </h1>
          <p className="max-w-2xl text-base text-charcoal/75">
            What guests love about staying at Las Olas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-0">
        <div className="overflow-hidden rounded-3xl border border-sand-200 bg-white/90 p-4 shadow-md backdrop-blur">
          <div className="flex gap-4 overflow-x-auto pb-4 sm:pb-2">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="min-w-[260px] flex-1 rounded-3xl border border-sand-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between text-sm font-semibold text-charcoal">
                  <span>{item.name}</span>
                  <span className="text-charcoal/70">{item.country}</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-teal-700">
                  {"★★★★★"}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{item.quote}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/book" className="rounded-full bg-teal-900/10 px-3 py-2 text-teal-900 font-semibold hover:bg-teal-900/15">
            Book Eagle Beach apartments in Aruba
          </Link>
          <Link href="/faq" className="rounded-full bg-white border border-sand-200 px-3 py-2 text-charcoal hover:border-teal-700/40">
            Read our FAQ before you book
          </Link>
        </div>
      </section>
    </div>
  );
}
