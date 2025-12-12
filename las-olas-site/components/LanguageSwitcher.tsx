"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Globe2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LocaleOption = {
  code: string;
  name: string;
  flag: string;
};

const locales: LocaleOption[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
];

const localeCodes = locales.map((l) => l.code);

function computePathWithLocale(pathname: string, locale: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && localeCodes.includes(parts[0])) {
    parts[0] = locale;
  } else {
    parts.unshift(locale);
  }
  return `/${parts.join("/")}` || "/";
}

type LanguageSwitcherProps = {
  compact?: boolean;
  tone?: "dark" | "light"; // light = dark text for light backgrounds
};

export function LanguageSwitcher({ compact = false, tone = "dark" }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentLocale = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    const candidate = parts[0];
    return localeCodes.includes(candidate) ? candidate : "en";
  }, [pathname]);

  const current = locales.find((l) => l.code === currentLocale) ?? locales[0];

  const handleSelect = (code: string) => {
    const newPath = computePathWithLocale(pathname, code);
    const query = searchParams.toString();
    const target = query ? `${newPath}?${query}` : newPath;
    setOpen(false);
    setActiveIndex(null);
    router.push(target);
  };

  // Close on outside click / escape
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        open &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setActiveIndex(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setActiveIndex(null);
      }
      if ((e.key === "ArrowDown" || e.key === "ArrowUp") && open) {
        e.preventDefault();
        setActiveIndex((prev) => {
          const currentIdx = prev ?? locales.findIndex((l) => l.code === currentLocale);
          const nextIdx =
            e.key === "ArrowDown"
              ? (currentIdx + 1) % locales.length
              : (currentIdx - 1 + locales.length) % locales.length;
          return nextIdx;
        });
      }
      if (e.key === "Enter" && open && activeIndex !== null) {
        e.preventDefault();
        handleSelect(locales[activeIndex].code);
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, currentLocale, pathname, searchParams, activeIndex]);

  const buttonClasses =
    tone === "light"
      ? "inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-2.5 py-1.25 text-[11px] font-semibold text-charcoal shadow-[0_6px_18px_-16px_rgba(0,0,0,0.25)] transition hover:bg-sand-100 hover:-translate-y-[1px] hover:shadow-[0_10px_24px_-16px_rgba(0,0,0,0.35)]"
      : "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/12 px-2.5 py-1.25 text-[11px] font-semibold text-white/90 shadow-[0_6px_18px_-16px_rgba(0,0,0,0.45)] backdrop-blur-sm transition hover:bg-white/18 hover:-translate-y-[1px] hover:shadow-[0_10px_24px_-16px_rgba(0,0,0,0.5)]";

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`${buttonClasses} ${compact ? "px-2.5 py-1 text-[11px]" : ""} cursor-pointer`}
      >
        <Globe2 className="h-4 w-4 text-teal-900" aria-hidden />
        <span className="tracking-[0.14em] text-[11px] text-charcoal/90">{current.code.toUpperCase()}</span>
        <ChevronDown className="h-3.5 w-3.5 text-charcoal/70" aria-hidden />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.98, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 8 }}
            exit={{ opacity: 0, scale: 0.97, y: 4 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute right-0 z-50 mt-2 w-56 rounded-2xl border border-white/70 bg-white/95 p-2 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.35)] backdrop-blur-lg"
            role="listbox"
          >
            {locales.map((locale, idx) => (
              <button
                key={locale.code}
                role="option"
                aria-selected={locale.code === currentLocale}
                tabIndex={open ? 0 : -1}
                onFocus={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => handleSelect(locale.code)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition cursor-pointer ${
                  locale.code === currentLocale
                    ? "bg-teal-50 font-semibold text-charcoal shadow-sm ring-1 ring-teal-200"
                    : activeIndex === idx
                    ? "bg-teal-50 text-charcoal shadow-[0_8px_24px_-18px_rgba(0,0,0,0.35)] ring-1 ring-teal-100"
                    : "text-charcoal/80 hover:bg-teal-50 hover:ring-1 hover:ring-teal-100"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg leading-none">{locale.flag}</span>
                  <span>{locale.name}</span>
                </span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-charcoal/60">{locale.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
