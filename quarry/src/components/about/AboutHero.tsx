"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../layout/Navbar";

export default function AboutHero() {
  return (
    <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-[#080808] text-white sm:min-h-[400px] lg:min-h-[420px]">
      {/* Background video */}
      <div className="absolute inset-0">
        <div className="absolute inset-[5%_4%] overflow-hidden sm:inset-[6%_5%]">
          <video
            src="/videos/about-hero-final.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Video contrast */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25" />
        </div>

        {/* Frame */}
        <div className="absolute inset-x-[4%] top-[5%] h-px bg-white/[0.15] sm:inset-x-[5%] sm:top-[6%]" />
        <div className="absolute inset-x-[4%] bottom-[5%] h-px bg-white/[0.15] sm:inset-x-[5%] sm:bottom-[6%]" />
        <div className="absolute bottom-[5%] left-[4%] top-[5%] w-px bg-white/[0.15] sm:bottom-[6%] sm:left-[5%] sm:top-[6%]" />
        <div className="absolute bottom-[5%] right-[4%] top-[5%] w-px bg-white/[0.15] sm:bottom-[6%] sm:right-[5%] sm:top-[6%]" />
      </div>

      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1800px] flex-col justify-end px-7 pb-8 sm:px-10 sm:pb-9 lg:px-14 lg:pb-10">

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[950px] font-[var(--font-manrope)] text-[clamp(2.8rem,7.2vw,7rem)] font-medium leading-[0.88] tracking-[-0.08em]"
          >
            We build
            <br />
            <span className="text-white/50">with a reason.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[370px] lg:justify-self-end"
          >
            <p className="text-[13px] leading-[1.8] text-white/75 sm:text-sm sm:leading-7">
              Quarry is a software studio focused on building useful technology
              for real businesses.
            </p>

            <a
              href="#about-quarry"
              className="group mt-4 inline-flex min-h-10 items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white sm:mt-5"
            >
              Discover Quarry
              <span className="flex size-8 items-center justify-center rounded-full border border-white/35 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowDown
                  size={13}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Bottom information */}
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/25 pt-4 sm:mt-7 sm:pt-5">
          <span className="max-w-[270px] text-[8px] leading-5 tracking-[0.14em] text-white/55 sm:max-w-none sm:text-[9px] sm:tracking-[0.2em]">
            Software Engineering · Web · AI · Automation
          </span>

          <Link
            href="/"
            className="group hidden shrink-0 items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white sm:inline-flex"
          >
            Back to home
            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
