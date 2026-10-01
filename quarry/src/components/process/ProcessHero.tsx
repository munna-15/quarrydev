"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../layout/Navbar";

export default function ProcessHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-[64%] w-[84%] overflow-visible">
          <video
            src="/videos/process-hero-final.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -right-[8%] top-[8%] h-48 w-48 rounded-full border border-white/[0.12] bg-white/[0.025] backdrop-blur-[1px] sm:h-64 sm:w-64 lg:h-80 lg:w-80"
          >
            <div className="absolute inset-[22%] rounded-full border border-white/[0.08]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -right-[1%] top-[22%] h-24 w-24 rounded-full border border-white/[0.1] bg-white/[0.03] sm:h-32 sm:w-32 lg:h-44 lg:w-44"
          />
        </div>

        <div className="pointer-events-none absolute left-[8%] top-[18%] h-[64%] w-[84%]">
          <div className="absolute left-0 top-0 h-px w-full bg-white/[0.12]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-white/[0.12]" />
          <div className="absolute left-0 top-0 h-full w-px bg-white/[0.12]" />
          <div className="absolute right-0 top-0 h-full w-px bg-white/[0.12]" />
        </div>
      </div>

      <Navbar />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-8 pt-7 sm:px-8 sm:pb-10 sm:pt-8 lg:px-10">
        <div className="mx-auto w-full max-w-[1800px]" />

        <div className="mx-auto w-full max-w-[1800px]">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />

            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/55">
              Our Process
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1100px] font-[var(--font-manrope)] text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.085em]"
            >
              From idea
              <br />
              <span className="text-white/50">to impact.</span>
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
                A focused process that turns business problems into useful
                digital products, systems, and experiences.
              </p>

              <a
                href="#process-stages"
                className="group mt-7 flex w-fit items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
              >
                Explore process
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
              Brief · Direction · Production · Delivery
            </span>

            <span className="hidden items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-white/40 sm:flex">
              Process
              <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
