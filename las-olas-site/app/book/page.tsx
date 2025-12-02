import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "1 Bedroom Apartment",
    copy: "Comfortable one-bedroom with sofa bed, balcony/terrace, and a full kitchen.",
    image: "/images/residences/one-bedroom-apartment-1.jpg",
  },
  {
    title: "1 Bedroom Suite",
    copy: "Expanded living, elevated finishes, and private balcony for an elevated stay.",
    image: "/images/residences/one-bedroom-suite-1.jpg",
  },
  {
    title: "2 Bedroom Apartment",
    copy: "Two bedrooms, two baths, dining area, and terrace—ideal for families or groups.",
    image: "/images/residences/two-bedroom-apartment-1.jpg",
  },
  {
    title: "3 Bedroom Apartment",
    copy: "Generous living/dining, multiple baths, and balcony for larger gatherings.",
    image: "/images/residences/three-bedroom-apartment-1.jpg",
  },
  {
    title: "3 Bedroom Penthouse",
    copy: "Top-floor views, open layout, private terrace, and refined finishes.",
    image: "/images/residences/three-bedroom-penthouse-1.jpg",
  },
];

export default function BookPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-r from-sand-50 via-white to-sand-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-teal-900/10 blur-3xl" />
          <div className="absolute right-0 -bottom-16 h-64 w-64 rounded-full bg-sand-200/70 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Book</p>
            <h1 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Check Availability &amp; Book Your Stay
            </h1>
            <p className="max-w-2xl text-base text-charcoal/75">
              Best rate guaranteed · No service fees · Priority unit assignment. Share your dates and preferences and
              we’ll match you with the perfect residence.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-[28px] border border-sand-200 bg-white/90 p-6 shadow-lg backdrop-blur">
            <form className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-charcoal/80 md:col-span-1">
                <span className="font-medium text-charcoal">Check-in</span>
                <input
                  type="date"
                  className="w-full rounded-xl border border-sand-200 bg-sand-50 px-3 py-3 text-charcoal shadow-inner focus:border-teal-700 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-charcoal/80 md:col-span-1">
                <span className="font-medium text-charcoal">Check-out</span>
                <input
                  type="date"
                  className="w-full rounded-xl border border-sand-200 bg-sand-50 px-3 py-3 text-charcoal shadow-inner focus:border-teal-700 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-charcoal/80 md:col-span-1">
                <span className="font-medium text-charcoal">Guests</span>
                <select className="w-full rounded-xl border border-sand-200 bg-sand-50 px-3 py-3 text-charcoal shadow-inner focus:border-teal-700 focus:outline-none">
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                  <option>5 guests</option>
                  <option>6+ guests</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-charcoal/80 md:col-span-1">
                <span className="font-medium text-charcoal">Category</span>
                <select className="w-full rounded-xl border border-sand-200 bg-sand-50 px-3 py-3 text-charcoal shadow-inner focus:border-teal-700 focus:outline-none">
                  <option>1 Bedroom Apartment</option>
                  <option>1 Bedroom Suite</option>
                  <option>2 Bedroom Apartment</option>
                  <option>3 Bedroom Apartment</option>
                  <option>3 Bedroom Penthouse</option>
                </select>
              </label>
              <div className="md:col-span-2 flex justify-end pt-2">
                <Button className="px-6">Check availability</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-0">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Category highlights</p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Suites &amp; residences</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(15,118,110,0.1), rgba(230,212,189,0.2)), url('${cat.image}')`,
                }}
              />
              <div className="flex flex-1 flex-col space-y-3 p-5">
                <h3 className="font-display text-xl text-charcoal">{cat.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/75">{cat.copy}</p>
                <div className="flex-1" />
                <Button asChild variant="outline" className="self-start">
                  <Link href="/suites">View details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
