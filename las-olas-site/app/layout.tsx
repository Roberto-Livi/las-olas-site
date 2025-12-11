import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { SiteShell } from "@/components/layout/site-shell";
import { LoadingOverlay } from "@/components/ui/loading-overlay";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Las Olas Condominiums – Eagle Beach, Aruba | Steps from #3 Beach in the World",
  description: "Beachfront condo-hotel at Eagle Beach, Aruba—2 minutes to Tripadvisor’s #3 beach in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lodgingJsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Las Olas Condominiums at Eagle Beach",
    url: "https://www.lasolasaruba.com",
    telephone: "+297-741-1234",
    address: {
      "@type": "PostalAddress",
      streetAddress: "J.E. Irausquin Blvd 228D",
      addressLocality: "Noord",
      addressRegion: "Aruba",
      postalCode: "00000",
      addressCountry: "AW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.553,
      longitude: -70.056,
    },
    checkinTime: "15:00",
    checkoutTime: "11:00",
    image: ["https://www.lasolasaruba.com/images/eagle-beach-hero.jpg"],
  };

  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${playfair.variable} bg-sand-50 text-charcoal antialiased overflow-x-hidden`}
      >
        <Script
          id="ld-lodging-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
        <LoadingOverlay />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
