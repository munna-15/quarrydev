"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the business, users, goals, and the opportunity before defining what should be built.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We shape the product, experience, and technical direction around a clear and practical strategy.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design, engineer, integrate, and refine the solution with attention to performance and detail.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ship the product, measure what matters, and continue improving the experience as the business grows.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#f7f8fa] text-[#111827]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#6b7280]">
              Our Process
            </span>

            <h2 className="max-w-md font-[var(--font-manrope)] text-4xl font-medium leading-[1] tracking-[-0.055em] sm:text-5xl">
              From idea to something real.
            </h2>
          </div>

          <div>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 24,
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
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-t border-[#e5e7eb] py-8 sm:py-10"
              >
                <div className="grid gap-5 sm:grid-cols-[70px_0.8fr_1fr] sm:items-start sm:gap-8">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#9ca3af]">
                    {step.number}
                  </span>

                  <h3 className="font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                    {step.title}
                  </h3>

                  <p className="max-w-md text-sm leading-6 text-[#6b7280]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="border-t border-[#e5e7eb]" />
          </div>
        </div>
      </div>
    </section>
  );
}
