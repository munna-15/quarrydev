
"use client";

import { motion } from "motion/react";

type Solution = {
  slug: string;
  number: string;
  title: string;
  label: string;
  headline: string;
  description: string;
  services: readonly string[];
};

type Props = {
  solution: Solution;
};

const details = {
  web: {
    intro:
      "Your website is often the first interaction someone has with your business. We make that interaction clear, memorable, and useful.",
    outcomes: [
      "Clearer brand presentation",
      "Better customer journeys",
      "Responsive experiences",
      "Faster, maintainable websites",
    ],
    stack: ["Next.js", "React", "TypeScript", "CMS", "Modern UI"],
  },

  software: {
    intro:
      "When off-the-shelf tools don't fit the way a business operates, custom software can turn complicated workflows into one connected system.",
    outcomes: [
      "Centralized business operations",
      "Custom workflows",
      "Role-based experiences",
      "Scalable digital products",
    ],
    stack: ["React", "Next.js", "Node.js", "MongoDB", "REST APIs"],
  },

  ai: {
    intro:
      "AI becomes valuable when it is connected to a real business problem. We focus on practical systems that improve how people work.",
    outcomes: [
      "Reduced repetitive work",
      "Faster information processing",
      "Intelligent customer interactions",
      "AI-assisted business workflows",
    ],
    stack: ["AI APIs", "LLMs", "Node.js", "MongoDB", "Automation"],
  },

  automation: {
    intro:
      "Businesses lose time when information has to be moved manually between tools. We connect those systems and let workflows run automatically.",
    outcomes: [
      "Less repetitive work",
      "Connected business tools",
      "Automated follow-ups",
      "More consistent operations",
    ],
    stack: ["n8n", "APIs", "Webhooks", "MongoDB", "Node.js"],
  },
} as const;

export default function SolutionContent({ solution }: Props) {
  const content =
    details[solution.slug as keyof typeof details] ?? details.web;

  return (
    <section id="solution-content" className="bg-[#f7f8fa] text-[#111827]">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 py-24 sm:py-28 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:py-32">
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
              What we do
            </span>

            <h2 className="max-w-lg font-[var(--font-manrope)] text-4xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              {solution.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-3xl font-[var(--font-manrope)] text-xl font-medium leading-[1.3] tracking-[-0.035em] sm:text-2xl lg:text-3xl">
              {content.intro}
            </p>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-[#6b7280] sm:text-base">
              {solution.description}
            </p>
          </motion.div>
        </div>

        <div className="border-t border-[#e5e7eb]">
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="border-b border-[#e5e7eb] py-12 lg:border-b-0 lg:border-r lg:py-16 lg:pr-16"
            >
              <span className="mb-7 block text-[9px] font-medium uppercase tracking-[0.22em] text-[#9ca3af]">
                Outcomes
              </span>

              <div className="space-y-4">
                {content.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-4">
                    <span className="h-px w-5 bg-[#9ca3af]" />

                    <span className="text-sm text-[#374151]">{outcome}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
              className="py-12 lg:py-16 lg:pl-16"
            >
              <span className="mb-7 block text-[9px] font-medium uppercase tracking-[0.22em] text-[#9ca3af]">
                Technologies
              </span>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {content.stack.map((technology) => (
                  <span
                    key={technology}
                    className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#6b7280]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-[#e5e7eb]">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            <div className="py-12 lg:py-16">
              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#9ca3af]">
                Services
              </span>
            </div>

            <div className="grid border-t border-[#e5e7eb] sm:grid-cols-2 lg:border-t-0 lg:border-l">
              {solution.services.map((service, index) => (
                <div
                  key={service}
                  className={`flex items-center gap-4 py-6 lg:px-10 ${
                    index < solution.services.length - 1
                      ? "border-b border-[#e5e7eb]"
                      : ""
                  } ${
                    index % 2 === 0 ? "sm:border-r sm:border-[#e5e7eb]" : ""
                  }`}
                >
                  <span className="text-[9px] font-medium tracking-[0.15em] text-[#9ca3af]">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-[#374151]">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

