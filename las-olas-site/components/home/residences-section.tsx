import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ResidenceCard } from "@/components/residences/residence-card";
import { suites } from "@/components/home/home-content.constants";

export function ResidencesSection() {
  return (
    <section
      id="residences"
      className="mx-auto max-w-6xl space-y-10 px-4 scroll-mt-24 sm:px-6 sm:scroll-mt-28 lg:px-0"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1100px" }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Residences</p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Choose the suite that fits your escape.</h2>
          <p className="max-w-2xl text-base text-charcoal/75">
            Five refined categories, each with full kitchens, private outdoor space, and thoughtful finishes. Photos
            represent typical layouts-colors and configurations may vary.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/suites">View availability</Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {suites.map((suite, index) => (
          <ResidenceCard
            key={suite.title}
            title={suite.title}
            sleeps={suite.sleeps}
            copy={suite.copy}
            highlights={suite.highlights}
            gallery={suite.gallery}
            spanFull={index === suites.length - 1 && suites.length % 2 !== 0}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
