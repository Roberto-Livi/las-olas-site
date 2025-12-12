import type { Metadata } from "next";
import Script from "next/script";
import { FaqContent } from "@/components/faq/faq-content";

const faqs = [
  { q: "How far is Las Olas from Eagle Beach?", a: "A 2-minute walk—direct boardwalk access from the property." },
  { q: "Is parking included?", a: "Yes, on-site parking is available for guests." },
  { q: "Do you provide beach towels?", a: "Complimentary beach towels are provided for registered guests." },
  { q: "Is there daily cleaning service?", a: "Light daily refresh is available, with full cleanings on request." },
  { q: "What are check-in and check-out times?", a: "Check-in is at 3 PM and check-out is at 11 AM." },
  { q: "Is early check-in or late check-out possible?", a: "Subject to availability—please request in advance." },
  { q: "Are cribs or high chairs available?", a: "Yes, available upon request before arrival." },
  { q: "Is there a supermarket nearby?", a: "Yes, grocery options are within a short drive or quick walk." },
];

export const metadata: Metadata = {
  title: "Eagle Beach Aruba FAQ | Las Olas Apartments",
  description:
    "Answers about staying at Las Olas—Eagle Beach Aruba apartments with on-site parking, beach towels, daily refresh, family amenities, and 2-minute walk to the sand.",
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqContent />
    </>
  );
}
