"use client";

import { motion } from "motion/react";

export default function AboutQuarry() {
  return (
    <section id="about-quarry" className="bg-[#f7f8fa] text-[#111827]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9ca3af]">
              Quarry
            </span>

            <div className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#9ca3af]">
              Software Studio
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[1050px] font-[var(--font-manrope)] text-[clamp(2.8rem,5.5vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.07em]">
              We create digital
              <br />
              <span className="text-[#9ca3af]">that has a purpose.</span>
            </h2>

            <div className="mt-12 grid gap-8 border-t border-[#e5e7eb] pt-8 sm:grid-cols-2 lg:mt-16 lg:gap-16">
              <p className="max-w-md text-base leading-7 text-[#374151]">
                Quarry builds websites, software, AI systems, and automation
                around the problems businesses actually face.
              </p>

              <p className="max-w-md text-sm leading-7 text-[#6b7280]">
                We combine thoughtful design with practical engineering to
                create technology that is clear to use, built to perform, and
                ready to grow with the business.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
