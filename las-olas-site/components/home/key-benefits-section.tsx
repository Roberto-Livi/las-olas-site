import { SectionReveal } from "@/components/animations/section-reveal";
import { keyBenefits } from "@/components/home/home-content.constants";

export function KeyBenefitsSection() {
  return (
    <section aria-label="Key benefits" className="relative -mt-6 z-10 sm:-mt-12">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-6 sm:grid-cols-3 sm:gap-5 sm:px-6 lg:px-8">
        {keyBenefits.map((item, index) => (
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
  );
}
