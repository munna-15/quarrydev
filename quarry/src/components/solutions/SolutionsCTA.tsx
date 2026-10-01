"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function SolutionsCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      <div className="mx-auto flex min-h-[65vh] max-w-[1800px] flex-col justify-between px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-white/25" />

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
            Start a conversation
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="py-20 sm:py-24 lg:py-28"
        >
          <h2 className="max-w-[1100px] font-[var(--font-manrope)] text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.075em]">
            Have a problem
            <br />
            <span className="text-white/40">worth solving?</span>
          </h2>

          <div className="mt-12 flex flex-col gap-8 sm:mt-14 sm:flex-row sm:items-center sm:gap-12">
            <Link
              href="mailto:quarrysoftware@gmail.com"
              className="group flex w-fit items-center gap-4"
            >
              <span className="text-sm font-medium text-white">
                Tell us about it
              </span>

              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            <p className="max-w-[360px] text-sm leading-6 text-white/35">
              Tell us what you need to build, automate, improve, or rethink.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
            Software Engineering · Web · AI · Automation
          </span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
            Quarry
          </span>
        </div>
      </div>
    </section>
  );
}
