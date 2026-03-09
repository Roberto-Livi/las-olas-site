export function LocationSection() {
  return (
    <section
      id="location-home"
      className="relative overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100 scroll-mt-24 sm:scroll-mt-28"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-0 lg:py-16">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Location</p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Two minutes from Eagle Beach.</h2>
          <p className="max-w-2xl text-base text-charcoal/75">
            Step out of Las Olas and onto the boardwalk that leads directly to Eagle Beach-the Caribbean&apos;s #1 and the
            world&apos;s #3 beach. Cafes, dining, and the shoreline are all within a short stroll.
          </p>
          <div className="grid gap-3 text-sm text-charcoal/80 sm:grid-cols-3">
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
  );
}
