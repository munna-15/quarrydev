"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-[var(--font-manrope)] text-[18vw] font-extrabold leading-[0.72] tracking-[-0.1em] text-white sm:text-[15vw] lg:text-[12vw]"
              >
                QUARRY
              </motion.h2>
            </div>

            <div className="flex flex-col justify-between gap-14 lg:pb-2">
              <div>
                <span className="mb-6 block text-[10px] uppercase tracking-[0.24em] text-white/35">
                  Get in touch
                </span>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href="mailto:quarrysoftware@gmail.com"
                    className="group flex w-fit items-center gap-3"
                  >
                    <span className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white sm:text-base">
                      quarrysoftware@gmail.com
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </motion.div>
              </div>

              <nav className="grid grid-cols-2 gap-x-10 gap-y-5 sm:flex sm:flex-wrap">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative w-fit text-[11px] uppercase tracking-[0.16em] text-white/40 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}

                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[9px] uppercase tracking-[0.18em] text-white/25">
            <span>Software Engineering</span>
            <span>Web</span>
            <span>AI</span>
            <span>Automation</span>
          </div>

          <div className="flex items-center justify-between gap-8 text-[9px] uppercase tracking-[0.18em] text-white/25 sm:justify-end">
            <span>Dhaka — Bangladesh</span>
            <span>© {new Date().getFullYear()} Quarry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
