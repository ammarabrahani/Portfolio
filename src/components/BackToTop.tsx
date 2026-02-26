"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-6 right-6 z-10 cursor-pointer
        inline-flex h-11 w-11 items-center justify-center rounded-xl
        border border-black/10 bg-white/70 text-gray-900 backdrop-blur shadow-sm
        transition-all duration-200
        hover:-translate-y-0.5 hover:bg-white hover:shadow-md
        dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10
      "
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
