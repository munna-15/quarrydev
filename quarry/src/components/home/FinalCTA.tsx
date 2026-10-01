"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15%] top-[-25%] h-[600px] w-[600px] rounded-full bg-white/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-35%] left-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[76vh] max-w-[1800px] flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-white/30" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
              Start a project
            </span>
          </div>

          <span className="font-[var(--font-manrope)] text-[12px] font-semibold tracking-[-0.03em] text-white/30">
            QUARRY
          </span>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="py-20 sm:py-24 lg:py-28"
        >
          <span className="mb-7 block text-[10px] uppercase tracking-[0.24em] text-white/30">
            Let&apos;s create what&apos;s next
          </span>

          <h2 className="max-w-[1100px] font-[var(--font-manrope)] text-[clamp(3.5rem,8.5vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.075em]">
            Have something
            <br />
            <span className="text-white/45">worth building?</span>
          </h2>

          <div className="mt-12 flex flex-col gap-8 sm:mt-14 sm:flex-row sm:items-center sm:gap-12">
            <Link
              href="mailto:quarrysoftware@gmail.com"
              className="group flex w-fit items-center gap-4"
            >
              <span className="text-sm font-medium text-white">
                Let&apos;s talk
              </span>

              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            <p className="max-w-[360px] text-sm leading-6 text-white/40">
              Tell us what you&apos;re building, what&apos;s not working, or
              where you want to take the business next.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[9px] uppercase tracking-[0.2em] text-white/25">
            <span>Software Engineering</span>
            <span>Web</span>
            <span>AI</span>
            <span>Automation</span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
            Digital systems for what&apos;s next.
          </span>
        </div>
      </div>
    </section>
  );
}
