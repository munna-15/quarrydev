
"use client";

import Navbar from "../layout/Navbar";
import HeroMedia from "./HeroMedia";
import { motion } from "motion/react";

export default function HeroIntro() {
  return (
    <section className="relative h-[80vh] overflow-hidden bg-black md:h-screen">
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

      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 md:hidden">
        <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/45">
          Scroll
        </span>

        <div className="relative h-9 w-px overflow-hidden bg-white/15">
          <motion.span
            initial={{ y: "-100%" }}
            animate={{ y: "200%" }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 h-1/2 w-px bg-white/80"
          />
        </div>
      </div>
    </section>
  );
}
