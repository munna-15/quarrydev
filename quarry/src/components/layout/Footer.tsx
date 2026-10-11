"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/your-page",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/your-account",
    icon: "instagram",
  },
  {
    label: "X",
    href: "https://x.com/your-account",
    icon: "x",
  },
] as const;

const emailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1" +
  "&to=quarrysoftware%40gmail.com" +
  "&su=Project%20Inquiry%20%E2%80%94%20Quarry" +
  "&body=Hi%20Quarry%2C%0A%0A" +
  "I'm%20interested%20in%20discussing%20a%20project.%0A%0A" +
  "Thanks.";

type SocialName = (typeof socials)[number]["icon"];

function SocialIcon({ name }: { name: SocialName }) {
  if (name === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.7" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
    >
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.9 5.8 22H2.6l7.3-8.4L2.1 2h6.4l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.6 3.9H5.8L17.8 20Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#f7f6f1] text-[#20231f]">
      {/* Responsive graffiti backgrounds */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* Desktop background */}
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat sm:block"
          style={{
            backgroundImage: "url('/images/quarry/footer.jpg')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />

        {/* Desktop overlay: lighter to reveal the graffiti */}
        <div className="absolute inset-0 hidden bg-[#f7f6f1]/[0.08] sm:block" />

        {/* Mobile-specific background */}
        <div
          className="absolute inset-0 bg-no-repeat sm:hidden"
          style={{
            backgroundImage: "url('/images/quarry/footer.jpg')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />

        {/* Mobile overlay: keep the artwork visible */}
        <div className="absolute inset-0 bg-[#f7f6f1]/[0.10] sm:hidden" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pb-20 lg:pt-24">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between gap-10"
          >
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#6c8067]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#41443d] sm:text-xs sm:tracking-[0.2em]">
                  Software Engineering · Web · AI · Automation
                </span>
              </div>

              <Link
                href="/"
                aria-label="Quarry home"
                className="group inline-block"
              >
                <span className="block font-[var(--font-manrope)] text-[20vw] font-extrabold leading-[0.82] tracking-[-0.105em] text-[#20231f] transition-colors duration-300 group-hover:text-[#596c54] sm:text-[15vw] lg:text-[10.5vw]">
                  QUARRY
                </span>
              </Link>
            </div>

            <p className="max-w-[440px] text-base leading-7 text-[#30332d] sm:text-lg sm:leading-8">
              Digital products, software and intelligent systems built for
              businesses ready to move forward.
            </p>
          </motion.div>

          {/* Contact and navigation */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10"
          >
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#41443d]">
                Navigate
              </p>

              <nav className="flex flex-col items-start gap-5">
                <Link
                  href="/"
                  className="text-base text-[#30332d] transition-colors duration-300 hover:text-[#596c54] sm:text-[17px]"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-base text-[#30332d] transition-colors duration-300 hover:text-[#596c54] sm:text-[17px]"
                >
                  About
                </Link>

                <Link
                  href="/case-studies"
                  className="text-base text-[#30332d] transition-colors duration-300 hover:text-[#596c54] sm:text-[17px]"
                >
                  Case Studies
                </Link>

                <Link
                  href="/web-server"
                  className="text-base text-[#30332d] transition-colors duration-300 hover:text-[#596c54] sm:text-[17px]"
                >
                  Web Server
                </Link>
              </nav>
            </div>

            <div className="flex flex-col items-start">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#41443d]">
                Start a conversation
              </p>

              <a
                href={emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex max-w-full items-center gap-3"
              >
                <span className="break-all text-sm text-[#30332d] transition-colors duration-300 group-hover:text-[#596c54] sm:text-base">
                  quarrysoftware@gmail.com
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#77796f]/70 transition-all duration-300 group-hover:border-[#20231f] group-hover:bg-[#20231f] group-hover:text-white">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>

              <div className="mt-4 break-all text-sm text-[#30332d] transition-colors duration-300 group-hover:text-[#596c54] sm:text-base">
                +880 17929 60610
              </div>

              <div className="mt-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#41443d]">
                  Follow Quarry
                </p>

                <div className="flex items-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Quarry on ${social.label}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#77796f]/70 text-[#30332d] transition-all duration-300 hover:-translate-y-1 hover:border-[#20231f] hover:bg-[#20231f] hover:text-white"
                    >
                      <SocialIcon name={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#77796f]/50 py-6 sm:py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#41443d]">
              © {new Date().getFullYear()} Quarry Software. All rights reserved.
            </p>

            <p className="text-xs text-[#41443d]">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
