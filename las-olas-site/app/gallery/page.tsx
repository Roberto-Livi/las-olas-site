const sections = [
  {
    title: "Building & Pool",
    images: [
      "/images/gallery/building-1.jpg",
      "/images/gallery/building-2.jpg",
      "/images/gallery/pool-1.jpg",
      "/images/gallery/pool-2.jpg",
      "/images/gallery/pool-3.jpg",
      "/images/gallery/building-3.jpg",
    ],
  },
  {
    title: "Interiors",
    images: [
      "/images/gallery/interior-1.jpg",
      "/images/gallery/interior-2.jpg",
      "/images/gallery/interior-3.jpg",
      "/images/gallery/interior-4.jpg",
      "/images/gallery/interior-5.jpg",
      "/images/gallery/interior-6.jpg",
    ],
  },
  {
    title: "Eagle Beach",
    images: [
      "/images/gallery/beach-1.jpg",
      "/images/gallery/beach-2.jpg",
      "/images/gallery/beach-3.jpg",
      "/images/gallery/beach-4.jpg",
      "/images/gallery/beach-5.jpg",
      "/images/gallery/beach-6.jpg",
    ],
  },
];

export default function GalleryPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-teal-900/10 blur-3xl" />
          <div className="absolute right-0 -bottom-16 h-64 w-64 rounded-full bg-sand-200/70 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl space-y-4 px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Gallery</p>
          <h1 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
            A closer look at life at Las Olas and Eagle Beach.
          </h1>
          <p className="max-w-2xl text-base text-charcoal/75">
            Plug in your imagery—grids are ready with hover lift and soft shadows.
          </p>
        </div>
      </section>

      <section className="space-y-12">
        {sections.map((section) => (
          <div key={section.title} className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-0">
            <div className="space-y-2">
              <h2 className="font-display text-2xl text-charcoal md:text-3xl">{section.title}</h2>
              <p className="text-sm text-charcoal/70">Images are ready for your assets.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.images.map((src, idx) => (
                <div
                  key={`${section.title}-${idx}`}
                  className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-sand-100 via-white to-teal-900/10 shadow-sm ring-1 ring-sand-200/70 transition hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(15,118,110,0.08), rgba(230,212,189,0.18)), url('${src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
