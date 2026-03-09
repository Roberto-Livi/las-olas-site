import Link from "next/link";
import { SectionReveal } from "@/components/animations/section-reveal";

export function EagleBeachSection() {
  return (
    <section
      id="eagle-beach"
      className="relative -mt-8 overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100 py-14 scroll-mt-24 sm:-mt-20 sm:py-16 sm:scroll-mt-28 lg:-mt-28 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
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
            Caribbean. Powder-soft sand, calm turquoise water, and iconic fofoti trees frame your stay-just steps from
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

        <SectionReveal
          delay={0.12}
          className="relative overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/20 opacity-70" />
          <div className="relative flex h-full flex-col justify-end p-6 text-white">
            <p className="text-lg font-semibold leading-snug drop-shadow">#3 Beach in the World · #1 in the Caribbean</p>
            <p className="text-sm text-white/85 drop-shadow">Awarded Best of the Best 2025</p>
          </div>
        </SectionReveal>
      </SectionReveal>
    </section>
  );
}
