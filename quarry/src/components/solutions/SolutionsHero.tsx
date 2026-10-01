"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../layout/Navbar";

export default function SolutionsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        src="/videos/work-hero-1-final.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/55" />

      <Navbar />

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-12 lg:px-10 lg:pb-14">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-white/35" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
              Solutions
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1050px] font-[var(--font-manrope)] text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.075em] text-white"
            >
              Technology
              <br />
              <span className="text-white/60">built around your business.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-sm lg:justify-self-end"
            >
              <p className="text-sm leading-7 text-white/65">
                From digital experiences to intelligent systems, we build
                technology around the way your business actually works.
              </p>

              <a
                href="#capabilities"
                className="group mt-7 flex w-fit items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-white"
              >
                Explore solutions
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <ArrowDown
                    size={14}
                    strokeWidth={1.7}
                    className="transition-transform duration-500 group-hover:translate-y-0.5"
                  />
                </span>
              </a>
            </motion.div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/20 pt-5">
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/40">
              Web · Software · AI · Automation
            </span>

            <span className="hidden items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-white/40 sm:flex">
              Quarry
              <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
