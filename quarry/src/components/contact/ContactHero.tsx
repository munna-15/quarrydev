"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../layout/Navbar";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-[8%_5%_8%_5%] overflow-hidden">
          <video
            src="/videos/contact-hero-final.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
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

            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/50">
              Contact Quarry
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1150px] font-[var(--font-manrope)] text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.085em]"
            >
              Have a problem
              <br />
              <span className="text-white/40">worth solving?</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-sm lg:justify-self-end"
            >
              <p className="text-sm leading-7 text-white/65 sm:text-base">
                Tell us what you’re working on. We’ll look at the problem,
                understand the opportunity, and start from there.
              </p>

              <a
                href="#project-brief"
                className="group mt-7 flex w-fit items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
              >
                Start your brief
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
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/40">
              Software Engineering · Web · AI · Automation
            </span>

            <Link
              href="/"
              className="hidden items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white sm:flex"
            >
              Back to home
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
