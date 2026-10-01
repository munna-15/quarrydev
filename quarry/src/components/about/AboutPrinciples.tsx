"use client";

import { motion } from "motion/react";

const principles = [
  {
    number: "01",
    title: "Business first",
    description:
      "Technology starts with the problem, not the tool. We build around what the business actually needs.",
  },
  {
    number: "02",
    title: "Useful by design",
    description:
      "Every interaction should have a reason. We keep experiences clear, intentional, and easy to use.",
  },
  {
    number: "03",
    title: "Built to last",
    description:
      "Good software should remain useful as the business grows. We care about solid foundations and maintainable systems.",
  },
  {
    number: "04",
    title: "Always evolving",
    description:
      "A product is never truly finished. We leave room for learning, iteration, and what comes next.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
              Principles
            </span>

            <h2 className="font-[var(--font-manrope)] text-3xl font-medium leading-none tracking-[-0.055em] sm:text-4xl">
              How we think.
            </h2>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.22em] text-white/25 sm:block">
            01 — 04
          </span>
        </div>

        <div className="border-t border-white/10">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-6 border-b border-white/10 py-8 sm:py-10 lg:grid-cols-[70px_0.9fr_1.1fr] lg:items-center lg:gap-12"
            >
              <span className="text-[9px] tracking-[0.2em] text-white/25">
                {principle.number}
              </span>

              <h3 className="font-[var(--font-manrope)] text-3xl font-medium tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                {principle.title}
              </h3>

              <p className="max-w-lg text-sm leading-7 text-white/40">
                {principle.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}