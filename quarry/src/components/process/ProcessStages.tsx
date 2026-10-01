"use client";

import { motion } from "motion/react";

const stages = [
  {
    number: "01",
    title: "Brief",
    description:
      "We define what needs to be built, who it is for, and what the project needs to achieve.",
    meta: "Starting point",
  },
  {
    number: "02",
    title: "Direction",
    description:
      "We establish the product direction, priorities, scope, and technical foundation before production begins.",
    meta: "Project definition",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Design and engineering move together as the product takes shape through focused, iterative work.",
    meta: "Design + Engineering",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "We test, refine, launch, and hand over a product that is ready to become part of the business.",
    meta: "Launch",
  },
];

export default function ProcessStages() {
  return (
    <section id="process-stages" className="bg-[#f7f8fa] text-[#111827]">
      <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#9ca3af]">
              The Journey
            </span>

            <h2 className="max-w-xl font-[var(--font-manrope)] text-4xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              From first conversation
              <br />
              <span className="text-[#9ca3af]">to final product.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#6b7280] lg:justify-self-end">
            Every project moves through a clear sequence, keeping the work
            focused while giving the product room to evolve.
          </p>
        </div>

        <div className="border-t border-[#e5e7eb]">
          {stages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-7 border-b border-[#e5e7eb] py-9 sm:py-11 lg:grid-cols-[70px_0.8fr_1.2fr_auto] lg:items-center lg:gap-10"
            >
              <span className="text-[10px] font-medium tracking-[0.2em] text-[#9ca3af]">
                {stage.number}
              </span>

              <h3 className="font-[var(--font-manrope)] text-4xl font-medium tracking-[-0.06em] transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl lg:text-6xl">
                {stage.title}
              </h3>

              <p className="max-w-lg text-sm leading-7 text-[#6b7280]">
                {stage.description}
              </p>

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#9ca3af] lg:text-right">
                {stage.meta}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
