import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { locales, defaultLocale } from "../../i18n";
import { SiteShell } from "@/components/layout/site-shell";
import "../globals.css";

export const metadata: Metadata = {
  title: "Las Olas Condominiums – Eagle Beach, Aruba | Steps from #3 Beach in the World",
  description: "Beachfront condo-hotel at Eagle Beach, Aruba—2 minutes to Tripadvisor’s #3 beach in the world.",
};

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: requestedLocale } = await params;
  const locale = locales.includes(requestedLocale as any)
    ? (requestedLocale as (typeof locales)[number])
    : defaultLocale;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="overflow-x-hidden">
      <body className="bg-sand-50 text-charcoal antialiased overflow-x-hidden">
        <SiteShell locale={locale}>{children}</SiteShell>
      </body>
    </html>
  );
}
