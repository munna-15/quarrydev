"use client";

import Navbar from "../layout/Navbar";
import HeroMedia from "./HeroMedia";

import { motion } from "motion/react";

const codeLines = [
  {
    number: "01",
    content: (
      <>
        <span className="text-white/70">const</span>{" "}
        <span className="text-white">idea</span>{" "}
        <span className="text-white/35">=</span>{" "}
        <span className="text-white/60">business</span>
      </>
    ),
  },
  {
    number: "02",
    content: (
      <>
        <span className="text-white/70">const</span>{" "}
        <span className="text-white">system</span>{" "}
        <span className="text-white/35">=</span>{" "}
        <span className="text-white/60">build</span>
        <span className="text-white/35">(idea)</span>
      </>
    ),
  },
  {
    number: "03",
    content: (
      <>
        <span className="text-white/70">return</span>{" "}
        <span className="text-white/60">system</span>
      </>
    ),
  },
];

export default function HeroIntro() {
  return (
    <section className="relative h-[80vh] overflow-hidden bg-black md:h-screen">
      <HeroMedia />
      <Navbar />

      {/* Hero heading */}
      <div className="absolute inset-x-0 bottom-10 z-20 px-6 sm:bottom-12 sm:px-8 lg:bottom-14 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl font-[var(--font-manrope)] text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
        >
          Quarry Creative Solution
        </motion.h1>
      </div>

      {/* Code animation */}
      <div className="pointer-events-none absolute right-5 top-1/2 z-20 -translate-y-1/2 sm:right-10 lg:right-14">
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-mono text-[10px] leading-[2] sm:text-[11px] lg:text-[12px]"
        >
          {codeLines.map((line, index) => (
            <motion.div
              key={line.number}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex whitespace-nowrap"
            >
              <span className="mr-3 select-none text-white/20 sm:mr-4">
                {line.number}
              </span>

              <span>{line.content}</span>

              {index === codeLines.length - 1 && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="ml-1 mt-[4px] h-3 w-px bg-white/75"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 2.2,
          }}
          className="mt-3 flex items-center gap-2"
        >
          <span className="h-px w-4 bg-white/20" />

          <span className="text-[7px] uppercase tracking-[0.28em] text-white/30 sm:text-[8px]">
            Digital systems
          </span>
        </motion.div>
      </div>

      {/* Scroll / Explore */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 2.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-7 right-5 z-20 sm:bottom-8 sm:right-8 md:bottom-9 md:left-1/2 md:right-auto md:-translate-x-1/2"
      >
        <div className="flex items-center gap-3">
          <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/45">
            Explore
          </span>

          <div className="relative h-10 w-10">
            {/* rotating arc */}
            <motion.svg
              viewBox="0 0 40 40"
              className="absolute inset-0 h-full w-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="0.8"
                strokeDasharray="18 95"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* inner ring */}
            <div className="absolute inset-[5px] flex items-center justify-center rounded-full border border-white/15">
              <motion.span
                animate={{
                  y: [0, 3, 0],
                  opacity: [0.45, 1, 0.45],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[15px] font-light leading-none text-white/75"
              >
                ↓
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
