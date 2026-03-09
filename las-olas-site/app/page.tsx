import type { Metadata } from "next";
import { HomeHero } from "@/components/hero/home-hero";
import { AmenitiesSection } from "@/components/home/amenities-section";
import { ContactSection } from "@/components/home/contact-section";
import { EagleBeachSection } from "@/components/home/eagle-beach-section";
import { KeyBenefitsSection } from "@/components/home/key-benefits-section";
import { LocationSection } from "@/components/home/location-section";
import { ResidencesSection } from "@/components/home/residences-section";
import "./hero-overrides.css";

export const metadata: Metadata = {
  title: "Eagle Beach Apartments in Aruba | Beachfront Vacation Rentals",
  description:
    "Las Olas offers 37 beachfront vacation rentals in Eagle Beach, Aruba-modern condos with full kitchens, balconies, and concierge-level service steps from the shore.",
  openGraph: {
    title: "Eagle Beach Apartments in Aruba | Beachfront Vacation Rentals",
    description:
      "Las Olas offers 37 beachfront vacation rentals in Eagle Beach, Aruba-modern condos with full kitchens, balconies, and concierge-level service steps from the shore.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/eagle-beach-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Beachfront apartments at Las Olas, Eagle Beach Aruba",
      },
    ],
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="space-y-24 lg:space-y-32">
      <HomeHero />
      <KeyBenefitsSection />
      <EagleBeachSection />
      <AmenitiesSection />
      <ResidencesSection />
      <LocationSection />
      <ContactSection />
    </div>
  );
}
