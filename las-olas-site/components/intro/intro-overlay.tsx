"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

let hasPlayed = false;

export function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (hasPlayed) {
      setVisible(false);
      return;
    }
    hasPlayed = true;
    setVisible(true);

    const outTimer = setTimeout(() => setClosing(true), 1300);
    const offTimer = setTimeout(() => setVisible(false), 2200);
    return () => {
      clearTimeout(outTimer);
      clearTimeout(offTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sand-50 via-sand-100 to-teal-800/40 transition duration-700 ease-out ${
        closing ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-20 h-[420px] w-[420px] rounded-full bg-white/30 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-teal-700/30 blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.18),transparent_55%)] opacity-70" />
      </div>

      <div
        className={`relative h-[360px] w-[360px] sm:h-[480px] sm:w-[480px] md:h-[540px] md:w-[540px] transition duration-700 ${
          closing ? "scale-95 opacity-80" : "scale-105 opacity-100"
        }`}
      >
        <Image
          src="/images/las-olas-logo.png"
          alt="Las Olas"
          width={800}
          height={800}
          className="h-full w-full object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.35)]"
          priority
        />
      </div>
    </div>
  );
}
