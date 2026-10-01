"use client";

import { motion } from "motion/react";

const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with the business, its users, existing workflows, and the problem that actually needs solving.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "We turn the opportunity into a clear product direction, experience, and technical approach.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "We design and build the system with the right technologies, integrations, and architecture.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We launch, learn from real usage, and refine the product as the business evolves.",
  },
];

export default function SolutionApproach() {
  return (
    <section className="bg-[#f7f8fa] text-[#111827]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#9ca3af]">
              Our Approach
            </span>

            <h2 className="max-w-lg font-[var(--font-manrope)] text-4xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Technology should solve the right problem.
            </h2>
          </motion.div>

          <div>
            <div className="border-t border-[#e5e7eb]">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-[#e5e7eb] py-8 sm:py-10 lg:py-12"
                >
                  <div className="grid gap-5 sm:grid-cols-[70px_0.8fr_1fr] sm:items-start sm:gap-8">
                    <span className="text-[10px] font-medium tracking-[0.2em] text-[#9ca3af]">
                      {stage.number}
                    </span>

                    <h3 className="font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                      {stage.title}
                    </h3>

                    <p className="max-w-md text-sm leading-6 text-[#6b7280]">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
