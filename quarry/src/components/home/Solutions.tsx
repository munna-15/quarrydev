"use client";

import { motion } from "motion/react";

const solutions = [
  {
    number: "01",
    title: "Web",
    label: "Digital Experiences",
    description:
      "High-quality websites and digital experiences designed to make businesses easier to discover, understand, and engage with.",
  },
  {
    number: "02",
    title: "Software",
    label: "Digital Products & Systems",
    description:
      "Custom software built around real business workflows, from internal platforms to complete customer-facing products.",
  },
  {
    number: "03",
    title: "AI",
    label: "Intelligent Solutions",
    description:
      "Practical AI solutions that help businesses reduce repetitive work, improve decisions, and create better customer experiences.",
  },
  {
    number: "04",
    title: "Automation",
    label: "Connected Workflows",
    description:
      "Connected workflows that move information, trigger actions, and keep everyday operations running with less manual effort.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-[#111827] text-white">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mb-16 flex flex-col gap-6 sm:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
              Solutions
            </span>

            <h2 className="max-w-2xl font-[var(--font-manrope)] text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Digital systems built around your business.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/45">
            From digital presence to intelligent automation, we build the
            technology businesses need to move forward.
          </p>
        </div>

        <div className="border-t border-white/10">
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.number}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-b border-white/10 py-9 sm:py-11 lg:py-12"
            >
              <div className="grid gap-6 lg:grid-cols-[80px_0.8fr_1fr_auto] lg:items-center lg:gap-10">
                <span className="text-[10px] tracking-[0.2em] text-white/30">
                  {solution.number}
                </span>

                <div>
                  <h3 className="font-[var(--font-manrope)] text-4xl font-medium tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl lg:text-6xl">
                    {solution.title}
                  </h3>

                  <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {solution.label}
                  </span>
                </div>

                <p className="max-w-lg text-sm leading-6 text-white/45">
                  {solution.description}
                </p>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/40 transition-all duration-500 group-hover:border-white/50 group-hover:bg-white group-hover:text-black">
                  <span className="text-lg leading-none">↗</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
