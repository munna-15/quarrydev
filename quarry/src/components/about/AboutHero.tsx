
"use client";

import Link from "next/link";

import { ArrowDown } from "lucide-react";

import { motion } from "motion/react";

import Navbar from "../layout/Navbar";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-[8%_5%_8%_5%] overflow-hidden">
          <video
            src="/videos/about-hero-final.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/75" />
        </div>

        <div className="absolute inset-x-[5%] top-[8%] h-px bg-white/[0.12]" />

        <div className="absolute inset-x-[5%] bottom-[8%] h-px bg-white/[0.12]" />

        <div className="absolute bottom-[8%] left-[5%] top-[8%] w-px bg-white/[0.12]" />

        <div className="absolute bottom-[8%] right-[5%] top-[8%] w-px bg-white/[0.12]" />
      </div>

      <Navbar />

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-12">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />

            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/55">
              About Quarry
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
              className="max-w-[1100px] font-[var(--font-manrope)] text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.085em]"
            >
              We build
              <br />
              <span className="text-white/45">with a reason.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-sm lg:justify-self-end"
            >
              <p className="text-sm leading-7 text-white/65 sm:text-base">
                Quarry is a software studio focused on building useful
                technology for real businesses.
              </p>

              <a
                href="#about-quarry"
                className="group mt-7 flex w-fit items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
              >
                Discover Quarry

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <ArrowDown
                    size={13}
                    strokeWidth={1.7}
                    className="transition-transform duration-500 group-hover:translate-y-0.5"
                  />
                </span>
              </a>
            </motion.div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/20 pt-5">
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/45">
              Software Engineering · Web · AI · Automation
            </span>

            <Link
              href="/"
              className="hidden text-[9px] uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white sm:block"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
