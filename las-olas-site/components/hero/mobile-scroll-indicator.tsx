"use client";

type MobileScrollIndicatorProps = {
  targetId?: string;
};

export function MobileScrollIndicator({ targetId = "eagle-beach" }: MobileScrollIndicatorProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mx-auto mt-3 flex flex-col items-center gap-1 text-white/80 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
      aria-label="Scroll to next section"
    >
      <svg
        className="h-5 w-5 animate-float-soft"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14m0 0-5-5m5 5 5-5" />
      </svg>
    </button>
  );
}
