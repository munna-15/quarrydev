"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  MessagesSquare,
  TicketCheck,
  Settings2,
  Check,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const supportServices = [
  {
    number: "01",
    eyebrow: "PERSON-TO-PERSON",
    title: "Direct Support",
    description:
      "Get clear answers and practical guidance from our team whenever you need help with your digital product.",
    features: ["Email assistance", "Technical guidance"],
    Icon: MessagesSquare,
    visual: "support",
  },
  {
    number: "02",
    eyebrow: "FIND THE WAY FORWARD",
    title: "Issue Resolution",
    description:
      "From unexpected errors to technical roadblocks, we'll help investigate the problem and work toward a solution.",
    features: ["Bug investigation", "Troubleshooting"],
    Icon: TicketCheck,
    visual: "resolution",
  },
  {
    number: "03",
    eyebrow: "BUILT FOR THE LONG RUN",
    title: "Ongoing Care",
    description:
      "Keep your website or application running smoothly with maintenance and thoughtful improvements over time.",
    features: ["Maintenance", "Continuous improvements"],
    Icon: Settings2,
    visual: "care",
  },
] as const;

const supportEmail =
  "mailto:quarrysoftware@gmail.com?subject=" +
  encodeURIComponent("Customer Support — Quarry");

function ServiceVisual({
  type,
  Icon,
}: {
  type: (typeof supportServices)[number]["visual"];
  Icon: (typeof supportServices)[number]["Icon"];
}) {
  return (
    <div className="relative flex h-[150px] items-center justify-center overflow-hidden rounded-xl bg-[#f5f5f2] sm:h-[175px]">
      {type === "support" && (
        <>
          <div
            aria-hidden="true"
            className="absolute left-[12%] top-[22%] h-16 w-24 rounded-xl border border-[#59684f]/20 bg-[#f7f6f0]/70"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[19%] right-[12%] h-12 w-20 rounded-xl border border-[#59684f]/15 bg-[#f7f6f0]/60"
          />
          <div className="relative flex size-[76px] items-center justify-center rounded-2xl border border-[#59684f]/20 bg-[#f5f3ed] text-[#53634b] shadow-[0_10px_35px_rgba(40,45,34,0.07)] transition-transform duration-500 group-hover:-translate-y-1">
            <MessagesSquare size={34} strokeWidth={1.25} />
            <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-[#66765a] text-white">
              <Check size={13} strokeWidth={2} />
            </span>
          </div>
          <span className="absolute bottom-4 left-4 text-[9px] font-medium uppercase tracking-[0.2em] text-[#6a7060]">
            We are listening
          </span>
        </>
      )}

      {type === "resolution" && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(89,104,79,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(89,104,79,0.12) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative flex size-[76px] items-center justify-center rounded-full border border-[#59684f]/20 bg-[#f5f3ed] text-[#53634b] shadow-[0_10px_35px_rgba(40,45,34,0.07)] transition-transform duration-500 group-hover:rotate-[-5deg]">
            <TicketCheck size={36} strokeWidth={1.25} />
          </div>
          <div className="absolute right-[18%] top-[20%] flex size-8 items-center justify-center rounded-full border border-[#59684f]/20 bg-[#f5f3ed] text-[#59684f]">
            <Check size={15} strokeWidth={1.8} />
          </div>
          <span className="absolute bottom-4 left-4 text-[9px] font-medium uppercase tracking-[0.2em] text-[#6a7060]">
            Problems into progress
          </span>
        </>
      )}

      {type === "care" && (
        <>
          <div
            aria-hidden="true"
            className="absolute size-[120px] rounded-full border border-[#59684f]/15 sm:size-[138px]"
          />
          <div
            aria-hidden="true"
            className="absolute size-[88px] rounded-full border border-[#59684f]/20 sm:size-[102px]"
          />
          <div className="relative flex size-[76px] items-center justify-center rounded-2xl border border-[#59684f]/20 bg-[#f5f3ed] text-[#53634b] shadow-[0_10px_35px_rgba(40,45,34,0.07)] transition-transform duration-500 group-hover:rotate-6">
            <Settings2 size={36} strokeWidth={1.25} />
          </div>
          <span className="absolute bottom-4 left-4 text-[9px] font-medium uppercase tracking-[0.2em] text-[#6a7060]">
            Better over time
          </span>
        </>
      )}

      <span className="absolute right-4 top-4 text-[10px] tracking-[0.16em] text-[#77796f]">
        {supportServices.find((service) => service.visual === type)?.number}
      </span>
    </div>
  );
}

export default function CustomerSupport() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-support-intro]",
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-support-intro]",
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        "[data-support-card]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-support-grid]",
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="customer-support-title"
      className="relative overflow-hidden bg-[#f5f5f2] text-[#242720]"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Intro */}
        <div
          data-support-intro
          className="mb-11 flex flex-col gap-7 sm:mb-14 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
        >
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#66765a]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#59684f] sm:text-[11px]">
                Customer support
              </p>
            </div>

            <h2
              id="customer-support-title"
              className="text-[clamp(2.8rem,7vw,6.8rem)] font-medium leading-[0.94] tracking-[-0.08em]"
            >
              Good work deserves
              <br className="hidden sm:block" />{" "}
              <span className="text-[#77796f]">good support.</span>
            </h2>
          </div>

          <div className="max-w-[400px] lg:mb-2 lg:shrink-0">
            <p className="text-[14px] leading-[1.9] text-[#4d5048] sm:text-[15px]">
              The right support makes all the difference. Whether you need an
              answer, a fix, or ongoing care, we help you keep moving forward.
            </p>

            <a
              href={supportEmail}
              className="group mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#33372e] transition-colors hover:text-[#59684f]"
            >
              Talk to our team
              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Service cards */}
        <div
          data-support-grid
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
        >
          {supportServices.map((service) => (
            <article
              key={service.number}
              data-support-card
              className="group flex min-w-0 flex-col rounded-2xl border border-[#77796f]/20 bg-[#faf9f5] p-3.5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#77796f]/40 hover:shadow-[0_18px_45px_rgba(35,39,30,0.06)] sm:p-4"
            >
              <ServiceVisual type={service.visual} Icon={service.Icon} />

              <div className="flex flex-1 flex-col px-2 pb-2 pt-6 sm:px-3 sm:pt-7">
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.19em] text-[#6a765f] sm:text-[10px]">
                  {service.eyebrow}
                </p>

                <h3 className="text-[clamp(1.6rem,3vw,2.15rem)] font-medium leading-tight tracking-[-0.055em]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[13px] leading-[1.9] text-[#51544b] sm:text-[14px] sm:leading-[1.9]">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-[#77796f]/20 pt-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-[12px] text-[#454940] sm:text-[13px]"
                    >
                      <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-[#e8e9df] text-[#59684f]">
                        <Check size={11} strokeWidth={2} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={supportEmail}
                  aria-label={`Ask Quarry about ${service.title}`}
                  className="mt-6 flex min-h-11 items-center justify-between border-t border-[#77796f]/20 pt-4 text-[13px] font-semibold text-[#34382f]"
                >
                  <span className="transition-colors group-hover:text-[#59684f]">
                    Get support
                  </span>

                  <span className="flex size-9 items-center justify-center rounded-full border border-[#77796f]/35 transition-all duration-300 group-hover:border-[#59684f] group-hover:bg-[#59684f] group-hover:text-white">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-7 flex flex-col gap-4 border-t border-[#77796f]/30 pt-6 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:pt-7">
          <p className="max-w-[440px] text-[13px] leading-6 text-[#55584f] sm:text-sm">
            Not sure where to start? Tell us what you need. We’ll help you
            figure out the next step.
          </p>

          <Link
            href="/contact"
            className="group inline-flex min-h-11 items-center gap-3 self-start text-sm font-semibold text-[#292c25] transition-colors hover:text-[#59684f] sm:self-auto"
          >
            Contact Quarry
            <span className="flex size-9 items-center justify-center rounded-full border border-[#77796f]/40 transition-all duration-300 group-hover:border-[#59684f] group-hover:bg-[#59684f] group-hover:text-white">
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
