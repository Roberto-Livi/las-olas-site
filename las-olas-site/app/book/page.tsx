import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ResidenceCard } from "@/components/residences/residence-card";

export const metadata: Metadata = {
  title: "Book Eagle Beach Apartments | Las Olas Aruba",
  description:
    "Book Eagle Beach apartments in Aruba at Las Olas. Choose studio to 3-bedroom beachfront vacation rentals with full kitchens, balconies, and concierge service.",
  openGraph: {
    title: "Book Eagle Beach Apartments | Las Olas Aruba",
    description:
      "Book Eagle Beach apartments in Aruba at Las Olas. Choose studio to 3-bedroom beachfront vacation rentals with full kitchens, balconies, and concierge service.",
    url: "/book",
    type: "website",
  },
  alternates: { canonical: "/book" },
};

const sharedGallery = [
  "/images/residences/studio/studio-apartment-1-1600.jpg",
  "/images/residences/studio/studio-apartment-2-1600.jpg",
  "/images/residences/studio/studio-apartment-3-1600.jpg",
];

const categories = [
  {
    title: "Studio Apartment",
    sleeps: "Sleeps 2",
    copy: "Streamlined studio with full kitchen, seating, and a private balcony or terrace—ideal for solo stays or couples.",
    highlights: ["Full kitchen", "Balcony/terrace", "Open layout"],
    gallery: sharedGallery,
  },
  {
    title: "One Bedroom Apartment",
    sleeps: "Sleeps 2–4",
    copy: "Full kitchen, living with sofa bed, balcony/terrace, and a serene bedroom for couples or small families.",
    highlights: ["Full kitchen", "Balcony/terrace", "Sofa bed"],
    gallery: sharedGallery,
  },
  {
    title: "One Bedroom Suite",
    sleeps: "Sleeps 2–4",
    copy: "Expanded living area, elevated finishes, fully equipped kitchen, and private balcony for an elevated stay.",
    highlights: ["Expanded living", "Upgraded finishes", "Private balcony"],
    gallery: sharedGallery,
  },
  {
    title: "Two Bedroom Apartment",
    sleeps: "Sleeps 4–6",
    copy: "Two bedrooms, two baths, dining area, full kitchen, and terrace—ideal for families or groups.",
    highlights: ["Two bathrooms", "Dining area", "Balcony/terrace"],
    gallery: sharedGallery,
  },
  {
    title: "Three Bedroom Apartment",
    sleeps: "Sleeps 6–8",
    copy: "Generous living and dining spaces, multiple baths, full kitchen, and balcony for larger gatherings.",
    highlights: ["Multiple baths", "Generous dining", "Balcony/terrace"],
    gallery: sharedGallery,
  },
  {
    title: "Three Bedroom Penthouse",
    sleeps: "Sleeps 6–8",
    copy: "Top-floor views, expansive open layout, upgraded finishes, and a private terrace for elevated privacy.",
    highlights: ["Top-floor views", "Open layout", "Private terrace"],
    gallery: sharedGallery,
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
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((cat, index) => (
            <ResidenceCard
              key={cat.title}
              title={cat.title}
              sleeps={cat.sleeps}
              copy={cat.copy}
              highlights={cat.highlights}
              gallery={cat.gallery}
              spanFull={index === categories.length - 1 && categories.length % 2 !== 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
