"use client";

import { useEffect, useState } from "react";

export function LoadingOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const settle = () => setVisible(false);
    const timer = window.setTimeout(settle, 1600);
    if (document.readyState === "complete") {
      settle();
    } else {
      window.addEventListener("load", settle, { once: true });
    }
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", settle);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-600 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/85 to-slate-900/70 backdrop-blur-[10px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(72,221,210,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,173,94,0.16),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.12),transparent_45%)] animate-pulse-slow" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white">
        <div className="flex items-center gap-3">
          <span className="text-sm uppercase tracking-[0.3em] text-white/70">Las Olas</span>
          <span className="h-px w-10 bg-white/40" />
          <span className="text-xs uppercase tracking-[0.24em] text-white/60">Eagle Beach · Aruba</span>
        </div>
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border border-white/20" />
          <div className="absolute inset-2 rounded-full border-t-2 border-white/70 animate-spin-slow" />
          <div className="absolute inset-4 rounded-full bg-white/10 backdrop-blur" />
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">Preparing your stay</p>
      </div>
    </div>
  );
}
