import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { locales, defaultLocale } from "../../i18n";
import { LoadingOverlay } from "@/components/ui/loading-overlay";
import { SiteShell } from "@/components/layout/site-shell";
import "../globals.css";

export const metadata: Metadata = {
  title: "Las Olas Condominiums – Eagle Beach, Aruba | Steps from #3 Beach in the World",
  description: "Beachfront condo-hotel at Eagle Beach, Aruba—2 minutes to Tripadvisor’s #3 beach in the world.",
};

type LocaleLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = locales.includes(params.locale as any) ? (params.locale as (typeof locales)[number]) : defaultLocale;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="overflow-x-hidden">
      <body className="bg-sand-50 text-charcoal antialiased overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={{ common: messages }}>
          <LoadingOverlay />
          <SiteShell locale={locale}>{children}</SiteShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
