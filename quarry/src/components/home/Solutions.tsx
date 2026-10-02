
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
        {/* Header */}
        <div className="mb-16 grid gap-10 sm:mb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div>
            <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/35">
              Solutions
            </span>

            <h2 className="max-w-3xl font-[var(--font-manrope)] text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-[4.25rem]">
              Digital systems built around your business.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/40 lg:justify-self-end">
            From digital presence to intelligent automation, we build
            technology that fits the way your business actually works.
          </p>
        </div>

        {/* Solutions */}
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
              className="group relative border-b border-white/10 py-9 sm:py-11 lg:py-12"
            >
              {/* Hover surface */}
              <div className="pointer-events-none absolute inset-x-0 inset-y-0 -mx-4 scale-y-95 bg-white/[0.025] opacity-0 transition-all duration-500 group-hover:scale-y-100 group-hover:opacity-100 sm:-mx-6 lg:-mx-8" />

              <div className="relative grid gap-7 lg:grid-cols-[72px_minmax(280px,0.85fr)_1fr] lg:items-center lg:gap-12">
                {/* Number */}
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/25">
                  {solution.number}
                </span>

                {/* Title */}
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-[var(--font-manrope)] text-4xl font-medium leading-none tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-1.5 sm:text-5xl lg:text-6xl">
                      {solution.title}
                    </h3>

                    <span className="h-1.5 w-1.5 scale-0 rounded-full bg-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-70" />
                  </div>

                  <span className="mt-3 block text-[10px] uppercase tracking-[0.2em] text-white/30">
                    {solution.label}
                  </span>
                </div>

                {/* Description */}
                <p className="max-w-xl text-sm leading-6 text-white/40 transition-colors duration-500 group-hover:text-white/55 lg:justify-self-end">
                  {solution.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

