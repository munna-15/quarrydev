"use client";

import { motion } from "motion/react";

export default function CinematicGap() {
  return (
    <section className="relative w-full max-w-full overflow-hidden h-[60vh]">
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex h-full w-full max-w-full items-center justify-center"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/35">
          Quarry Studio
        </span>
      </motion.div>
    </section>
  );
}
