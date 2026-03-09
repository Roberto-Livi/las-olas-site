import { SectionReveal } from "@/components/animations/section-reveal";
import { amenities } from "@/components/home/home-content.constants";

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-gradient-to-b from-sand-50 to-white scroll-mt-24 sm:scroll-mt-28"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent" />
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-0 lg:py-16">
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
                    backgroundImage: `linear-gradient(135deg, rgba(15,118,110,0.08), rgba(230,212,189,0.15)), url('${item.image}')`,
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
  );
}
