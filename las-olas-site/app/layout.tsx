import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-sand-50 text-charcoal antialiased`}
      >
        <LoadingOverlay />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
