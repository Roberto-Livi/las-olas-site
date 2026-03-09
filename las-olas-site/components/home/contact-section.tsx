import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white to-sand-50 scroll-mt-24 sm:scroll-mt-28"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-sand-100/80 to-transparent" />
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 sm:px-6 sm:py-14 lg:px-0 lg:py-16">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-900/70">Contact</p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Plan your stay at Las Olas</h2>
          <p className="mx-auto max-w-2xl text-base text-charcoal/75">
            Tell us about your dates and preferences. Our team will confirm availability and curate your experience.
          </p>
        </div>
        <div className="rounded-3xl border border-sand-200 bg-white/90 px-4 py-6 shadow-xl backdrop-blur sm:px-8 sm:py-8">
          <form className="grid gap-4 sm:gap-5">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-charcoal/80">Name</label>
              <input
                type="text"
                name="name"
                className="w-full rounded-2xl border border-sand-200 bg-white/70 px-4 py-3 text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
                placeholder="Your full name"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-charcoal/80">Email</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-2xl border border-sand-200 bg-white/70 px-4 py-3 text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-charcoal/80">Message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full resize-none rounded-2xl border border-sand-200 bg-white/70 px-4 py-3 text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
                placeholder="Share your dates, preferences, or questions."
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-charcoal/60">We reply quickly with availability and a tailored experience.</p>
              <Button className="rounded-full bg-teal-700 px-6 py-3 text-white shadow-md hover:bg-teal-900">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
