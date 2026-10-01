
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const solutionProjects = {
  web: [
    {
      title: "Real Estate Experience",
      category: "Digital Experience",
      image: "/projects/realestate/01.png",
      href: "/work",
    },
    {
      title: "Maison",
      category: "Restaurant Experience",
      image: "/projects/maison/01.png",
      href: "/work",
    },
    {
      title: "The Aura",
      category: "E-commerce Experience",
      image: "/projects/aura/01.png",
      href: "/work",
    },
  ],

  software: [
    {
      title: "RestaurantOS",
      category: "Management Platform",
      image: "/projects/restaurantos/01.png",
      href: "/work",
    },
  ],

  ai: [
    {
      title: "LeadPilot",
      category: "AI Lead Automation",
      image: "/projects/leadpilot/01.png",
      href: "/work",
    },
    {
      title: "LeadFlow AI",
      category: "AI Lead Response",
      image: "/projects/leadflow/01.png",
      href: "/work",
    },
  ],

  automation: [
    {
      title: "LeadPilot",
      category: "Business Automation",
      image: "/projects/leadpilot/01.png",
      href: "/work",
    },
  ],
} as const;

type SolutionSlug = keyof typeof solutionProjects;

type Props = {
  slug: string;
};

export default function SolutionWork({ slug }: Props) {
  const projects =
    solutionProjects[slug as SolutionSlug] ?? solutionProjects.web;

  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mb-14 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
              Selected Work
            </span>

            <h2 className="max-w-2xl font-[var(--font-manrope)] text-4xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Built for real
              <br />
              <span className="text-white/40">business needs.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/40">
            A look at projects where this capability became part of a real
            digital product or business experience.
          </p>
        </div>

        <div
          className={`grid gap-5 ${
            projects.length === 1
              ? "lg:grid-cols-1"
              : "lg:grid-cols-2"
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={project.href}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-white/[0.08] bg-[#0d0d0d]">
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
                    <div>
                      <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/45">
                        {project.category}
                      </span>

                      <h3 className="font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.045em] sm:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/70 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/work"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white"
          >
            View all work

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
              <ArrowUpRight
                size={13}
                strokeWidth={1.7}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

