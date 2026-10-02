"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

const emailUrl =
  "mailto:quarrysoftware@gmail.com" +
  "?subject=Project%20Inquiry%20%E2%80%94%20Quarry" +
  "&body=Hi%20Quarry%2C%0A%0AI%27m%20interested%20in%20discussing%20a%20project.%20I%27d%20like%20to%20know%20more%20about%20your%20services.%0A%0AThanks.";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
            {/* Brand */}
            <div className="flex flex-col justify-between gap-12">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />

                  <span className="text-[9px] uppercase tracking-[0.28em] text-white/30">
                    Software Engineering • Web • AI • Automation
                  </span>
                </div>

                <h2 className="font-[var(--font-manrope)] text-[17vw] font-extrabold leading-[0.72] tracking-[-0.1em] text-white sm:text-[14vw] lg:text-[11vw]">
                  QUARRY
                </h2>
              </motion.div>

              <p className="max-w-md text-sm leading-6 text-white/35 sm:text-[15px]">
                Digital products, software and intelligent systems built for
                businesses ready to move forward.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col justify-between gap-14 lg:pb-1">
              <div>
                <span className="mb-6 block text-[9px] uppercase tracking-[0.26em] text-white/30">
                  Start a conversation
                </span>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={emailUrl}
                    className="group inline-flex items-center gap-4"
                  >
                    <span className="text-[15px] text-white/75 transition-colors duration-300 group-hover:text-white sm:text-base">
                      quarrysoftware@gmail.com
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </a>
                </motion.div>
              </div>

              <div>
                <span className="mb-6 block text-[9px] uppercase tracking-[0.26em] text-white/30">
                  Explore
                </span>

                <nav className="grid grid-cols-2 gap-x-10 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-8">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group relative w-fit text-[11px] uppercase tracking-[0.16em] text-white/45 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}

                      <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[9px] uppercase tracking-[0.18em] text-white/25">
            <span>Software Engineering</span>
            <span>Web</span>
            <span>AI</span>
            <span>Automation</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[9px] uppercase tracking-[0.18em] text-white/25">
            <span>Dhaka — Bangladesh</span>
            <span>© {new Date().getFullYear()} Quarry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
