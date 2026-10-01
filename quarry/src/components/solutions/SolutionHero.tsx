"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft } from "lucide-react";
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

const visuals = {
  web: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  software:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  ai: "https://images.unsplash.com/photo-1587620931276-d97f425f62b9?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  automation:
    "https://images.unsplash.com/photo-1743385779347-1549dabf1320?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
} as const;

export default function SolutionHero({ solution }: Props) {
  const image = visuals[solution.slug as keyof typeof visuals] ?? visuals.web;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/80" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-7 pt-7 sm:px-8 sm:pb-9 sm:pt-8 lg:px-10 lg:pt-9">
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between">
          <Link
            href="/"
            aria-label="Quarry home"
            className="font-[var(--font-manrope)] text-[26px] font-extrabold leading-none tracking-[-0.075em] text-white transition-opacity duration-300 hover:opacity-65 sm:text-[29px]"
          >
            QUARRY
          </Link>

          <Link
            href="/solutions#capabilities"
            className="group flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
              <ArrowLeft
                size={13}
                strokeWidth={1.7}
                className="transition-transform duration-500 group-hover:-translate-x-0.5"
              />
            </span>

            <span>Back to solutions</span>
          </Link>
        </div>

        <div className="mx-auto w-full max-w-[1800px]">
          <div className="mb-8 flex items-center gap-3 sm:mb-10">
            <span className="h-px w-8 bg-white/35" />

            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/40">
              {solution.number} / {solution.label}
            </span>
          </div>

          <div className="max-w-[1250px]">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="mb-5 block font-[var(--font-manrope)] text-[clamp(1rem,1.5vw,1.4rem)] font-medium tracking-[-0.035em] text-white/45">
                {solution.label}
              </span>

              <h1 className="font-[var(--font-manrope)] text-[clamp(4rem,10vw,10.5rem)] font-medium leading-[0.8] tracking-[-0.085em]">
                {solution.title}
                <span className="text-white/25">.</span>
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 grid gap-8 border-t border-white/15 pt-6 sm:mt-12 sm:pt-7 lg:grid-cols-[1fr_auto]"
          >
            <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              {solution.description}
            </p>

            <a
              href="#solution-content"
              className="group flex w-fit items-center gap-3 self-end text-[9px] font-medium uppercase tracking-[0.22em] text-white/60 transition-colors hover:text-white"
            >
              Explore
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowDown
                  size={13}
                  strokeWidth={1.7}
                  className="transition-transform duration-500 group-hover:translate-y-0.5"
                />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
