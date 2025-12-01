import Link from "next/link";
import { Button } from "@/components/ui/button";

type SiteShellProps = {
  children: React.ReactNode;
};

const navigation = [
  { href: "/suites", label: "Suites & Residences" },
  { href: "/eagle-beach", label: "Eagle Beach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-sand-50/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-display text-sm uppercase tracking-[0.35em] text-teal-900">
              Las Olas
            </span>
            <span className="text-xs text-charcoal/70">
              Condominiums · Eagle Beach
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-charcoal/80 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative pb-1 transition hover:text-teal-900"
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 block h-px bg-teal-900/30 opacity-0 transition-opacity duration-200 hover:opacity-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild>
              <Link href="/book">Book now</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-10 lg:pt-16">
        {children}
      </main>

      <footer className="border-t border-white/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-charcoal/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Las Olas Condominiums</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-teal-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-teal-900">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
