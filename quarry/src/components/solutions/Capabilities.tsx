
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const capabilities = [
  {
    number: "01",
    title: "Web",
    slug: "web",
    label: "Digital Experiences",
    description:
      "Websites and digital experiences designed to make businesses easier to discover, understand, and engage with.",
    points: [
      "Marketing Websites",
      "Digital Experiences",
      "E-commerce",
      "Conversion-focused Interfaces",
    ],
  },
  {
    number: "02",
    title: "Software",
    slug: "software",
    label: "Digital Products & Systems",
    description:
      "Custom software built around real workflows, from internal platforms to complete customer-facing products.",
    points: [
      "Business Platforms",
      "Management Systems",
      "Customer-facing Products",
      "Custom Web Applications",
    ],
  },
  {
    number: "03",
    title: "AI",
    slug: "ai",
    label: "Intelligent Solutions",
    description:
      "Practical AI systems that reduce repetitive work, improve decision-making, and create better customer experiences.",
    points: [
      "AI Assistants",
      "Lead Intelligence",
      "AI-powered Features",
      "Intelligent Workflows",
    ],
  },
  {
    number: "04",
    title: "Automation",
    slug: "automation",
    label: "Connected Workflows",
    description:
      "Connected workflows that move information, trigger actions, and keep everyday operations running with less manual effort.",
    points: [
      "Business Automation",
      "Lead Automation",
      "Workflow Integration",
      "Process Optimization",
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="border-t border-white/10">
          {capabilities.map((capability, index) => (
            <Capability
              key={capability.number}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Capability({
  capability,
  index,
}: {
  capability: (typeof capabilities)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-b border-white/10 py-20 sm:py-24 lg:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[90px_1fr_0.8fr] lg:gap-12">
        <div className="flex items-start">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
            {capability.number}
          </span>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-7 bg-white/20" />

            <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">
              {capability.label}
            </span>
          </div>

          <h2 className="font-[var(--font-manrope)] text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.8] tracking-[-0.08em] transition-transform duration-700 group-hover:translate-x-1">
            {capability.title}
          </h2>
        </div>

        <div className="lg:pt-3">
          <p className="max-w-md text-sm leading-7 text-white/50">
            {capability.description}
          </p>

          <div className="mt-10 border-t border-white/10 pt-6">
            <span className="mb-5 block text-[9px] uppercase tracking-[0.22em] text-white/25">
              What we build
            </span>

            <div className="space-y-3">
              {capability.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-white/45"
                >
                  <span className="h-px w-4 bg-white/20" />
                  {point}
                </div>
              ))}
            </div>

            <Link
              href={`/solutions/${capability.slug}`}
              className="group/link mt-9 flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
            >
              Explore capability

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover/link:border-white group-hover/link:bg-white group-hover/link:text-black">
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.7}
                  className="transition-transform duration-500 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

