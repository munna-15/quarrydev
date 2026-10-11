"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    eyebrow: "OUR APPROACH",
    title: "Business first.",
    description:
      "Technology should solve real problems. We take the time to understand your business, your customers, and your goals before deciding what to build.",
    image: "/images/quarry/business-first.png",
    imageAlt: "Team collaborating on business strategy",
    points: ["Understand the problem", "Focus on business goals"],
  },
  {
    number: "02",
    eyebrow: "OUR DESIGN",
    title: "Useful by design.",
    description:
      "Good design makes complex things feel simple. We create digital experiences that are intuitive, purposeful, and genuinely helpful to the people using them.",
    image: "/images/quarry/useful-design.png",
    imageAlt: "Creative team working on user experience design",
    points: ["Clarity over complexity", "People-first experiences"],
  },
  {
    number: "03",
    eyebrow: "OUR ENGINEERING",
    title: "Built to last.",
    description:
      "We build with a strong technical foundation, thoughtful architecture, and maintainability in mind — so your software can grow alongside your business.",
    image: "/images/quarry/built-to-last.png",
    imageAlt: "Developers working together on software",
    points: ["Reliable foundations", "Made to scale"],
  },
  {
    number: "04",
    eyebrow: "OUR MINDSET",
    title: "Always evolving.",
    description:
      "The best solutions keep getting better. We learn from feedback, refine what we build, and adapt as your business and technology change.",
    image: "/images/quarry/always-evolving.png",
    imageAlt: "Team collaborating and improving their workflow",
    points: ["Learn through feedback", "Improve continuously"],
  },
];

export default function AboutPrinciples() {
  return (
    <section className="overflow-hidden bg-[#f5f5f2] text-[#292C25]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-2xl sm:mb-20 lg:mb-24"
        >
          <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#78816B]">
            What guides us
          </span>

          <h2 className="text-3xl font-medium tracking-[-0.055em] sm:text-4xl lg:text-[48px]">
            How we think.
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#696A60] sm:text-base sm:leading-8">
            The principles behind every decision we make, every product we
            build, and every partnership we create.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="divide-y divide-[#DCD8CE]">
          {principles.map((principle, index) => {
            const reversed = index % 2 !== 0;

            return (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                }}
                className="grid grid-cols-1 items-center gap-8 py-10 sm:gap-10 sm:py-14 lg:grid-cols-2 lg:gap-20 lg:py-16"
              >
                {/* Text */}
                <div
                  className={`flex flex-col ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#78816B]">
                    <span>{principle.number}</span>
                    <span className="h-px w-7 bg-[#A8AE9B]" />
                    <span>{principle.eyebrow}</span>
                  </span>

                  <h3 className="max-w-md text-[28px] font-medium leading-tight tracking-[-0.045em] sm:text-3xl lg:text-[40px]">
                    {principle.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-[#696A60] sm:text-base sm:leading-8">
                    {principle.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                    {principle.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-xs font-medium text-[#45483E] sm:text-sm"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#89927A]" />
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 h-px w-full max-w-md bg-[#DCD8CE]" />
                </div>

                {/* Transparent PNG illustration */}
                <div
                  className={`relative flex min-h-[240px] items-center justify-center sm:min-h-[300px] lg:min-h-[340px] ${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative h-[240px] w-full max-w-[390px] sm:h-[300px] lg:h-[340px]">
                    <Image
                      src={principle.image}
                      alt={principle.imageAlt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 390px"
                      className="object-contain"
                    />
                  </div>

                  <span className="pointer-events-none absolute bottom-2 right-2 text-[10px] font-medium tracking-[0.18em] text-[#9B9A8D]/70">
                    QUARRY / {principle.number}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col gap-5 border-t border-[#DCD8CE] pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-16"
        >
          <p className="max-w-xl text-sm leading-7 text-[#696A60]">
            Thoughtful decisions. Practical solutions. Technology built around
            what matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
