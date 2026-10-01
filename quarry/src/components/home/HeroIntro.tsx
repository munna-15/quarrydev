"use client";

import Navbar from "../layout/Navbar";
import HeroMedia from "./HeroMedia";

export default function HeroIntro() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <HeroMedia />

      <Navbar />

      <div className="absolute inset-x-0 bottom-8 z-20 px-6 sm:bottom-10 sm:px-8 lg:bottom-12 lg:px-12">
        <div className="flex items-end justify-between gap-8">
          <h1 className="max-w-3xl font-[var(--font-manrope)] text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
            Quarry Creative Solution
          </h1>

          <div className="hidden items-center gap-3 pb-1 sm:flex">
            <span className="h-px w-10 bg-white/30" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Scroll down
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
