"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-white text-[#111827]">
      <div className="mx-auto max-w-[1800px] px-5 py-11 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#9ca3af]">
              About Quarry
            </span>

            <h2 className="max-w-sm font-[var(--font-manrope)] text-4xl font-medium leading-[1] tracking-[-0.055em] sm:text-5xl">
              We turn complex ideas into useful digital products.
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            <p className="font-[var(--font-manrope)] text-2xl font-medium leading-[1.25] tracking-[-0.04em] sm:text-3xl">
              Quarry is a software engineering studio focused on building
              digital experiences, software systems, AI solutions, and
              automation for real businesses.
            </p>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-[#6b7280] sm:text-base">
              We combine thoughtful design with practical engineering to create
              products that are clear, reliable, and built around how businesses
              actually work.
            </p>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#e5e7eb] pt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6b7280]">
              <span>Software Engineering</span>
              <span>Web</span>
              <span>AI</span>
              <span>Automation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
