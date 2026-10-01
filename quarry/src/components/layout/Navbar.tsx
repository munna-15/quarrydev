"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Work",
    href: "/work",
    section: null,
  },
  {
    label: "Solutions",
    href: "/solutions",
    section: "solutions",
  },
  {
    label: "Process",
    href: "/process",
    section: "process",
  },
  {
    label: "About",
    href: "/about",
    section: "about",
  },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 4) {
        setVisible(false);
        setMenuOpen(false);
      } else if (currentScrollY < lastScrollY - 4) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    const sections = navItems
      .filter((item) => item.section)
      .map((item) => document.getElementById(item.section!))
      .filter((section): section is HTMLElement => section !== null);

    let observer: IntersectionObserver | null = null;

    if (sections.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visibleEntry) {
            setActiveSection(visibleEntry.target.id);
          }
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: [0.1, 0.25, 0.5],
        },
      );

      sections.forEach((section) => {
        observer?.observe(section);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -30,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none fixed left-0 right-0 top-0 z-[100] max-w-full"
      >
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-5 pt-6 sm:px-8 sm:pt-7 lg:px-10 lg:pt-8">
          <Link
            href="/"
            className="pointer-events-auto font-[var(--font-manrope)] text-[26px] font-extrabold leading-none tracking-[-0.075em] text-white transition-opacity duration-300 hover:opacity-70 sm:text-[29px]"
          >
            QUARRY
          </Link>

          <div className="hidden items-center gap-12 lg:flex">
            <nav className="pointer-events-auto flex items-center gap-9">
              {navItems.map((item) => {
                const isActive =
                  item.section !== null && activeSection === item.section;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group relative flex items-center gap-2 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <span
                      className={`h-1 w-1 rounded-full bg-white transition-all duration-300 ${
                        isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      }`}
                    />

                    {item.label}

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="pointer-events-auto group flex items-center gap-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white"
            >
              <span className="transition-opacity duration-300 group-hover:opacity-60">
                Start a project
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    rotate: -45,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 45,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <X size={17} strokeWidth={1.7} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    rotate: 45,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -45,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Menu size={17} strokeWidth={1.7} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed inset-0 z-[90] bg-[#050505] lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-8 pt-28 sm:px-8">
              <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-[9px] uppercase tracking-[0.24em] text-white/30">
                  Navigation
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Quarry
                </span>
              </div>

              <nav className="flex flex-1 flex-col justify-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.06 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-5"
                    >
                      <span className="font-[var(--font-manrope)] text-[clamp(2.5rem,10vw,4.5rem)] font-medium leading-none tracking-[-0.06em] text-white/90 transition-colors duration-300 group-hover:text-white">
                        {item.label}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/35 transition-all duration-300 group-hover:border-white/50 group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight size={15} />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.35,
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-t border-white/15 pt-5 text-[11px] uppercase tracking-[0.14em] text-white/65"
                >
                  <span>Start a project</span>

                  <span className="flex items-center gap-2 text-white">
                    Let&apos;s talk
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
