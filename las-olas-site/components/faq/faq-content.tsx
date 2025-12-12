"use client";

import { useState } from "react";

const faqs = [
  { q: "How far is Las Olas from Eagle Beach?", a: "A 2-minute walk—direct boardwalk access from the property." },
  { q: "Is parking included?", a: "Yes, on-site parking is available for guests." },
  { q: "Do you provide beach towels?", a: "Complimentary beach towels are provided for registered guests." },
  { q: "Is there daily cleaning service?", a: "Light daily refresh is available, with full cleanings on request." },
  { q: "What are check-in and check-out times?", a: "Check-in is at 3 PM and check-out is at 11 AM." },
  { q: "Is early check-in or late check-out possible?", a: "Subject to availability—please request in advance." },
  { q: "Are cribs or high chairs available?", a: "Yes, available upon request before arrival." },
  { q: "Is there a supermarket nearby?", a: "Yes, grocery options are within a short drive or quick walk." },
];

export function FaqContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-16 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-14 top-0 h-56 w-56 rounded-full bg-teal-900/10 blur-3xl" />
          <div className="absolute right-0 -bottom-14 h-56 w-56 rounded-full bg-sand-200/70 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl space-y-4 px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">FAQ</p>
          <h1 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="max-w-2xl text-base text-charcoal/75">
            Everything you need to know before booking your stay at Las Olas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-0">
        <div className="rounded-3xl border border-sand-200 bg-white/90 p-4 shadow-md backdrop-blur sm:p-6">
          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const open = openIndex === idx;
              return (
                <div
                  key={item.q}
                  className="rounded-2xl border border-sand-200 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <button
                    className="flex w-full items-center justify-between text-left text-charcoal"
                    onClick={() => setOpenIndex(open ? null : idx)}
                  >
                    <span className="font-semibold">{item.q}</span>
                    <span className="text-charcoal/60">{open ? "–" : "+"}</span>
                  </button>
                  {open && <p className="mt-2 text-sm text-charcoal/75">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
