
"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatIsQuarry() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        eyebrowRef.current,
        {
          opacity: 0,
          y: 16,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
      )
        .fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.2",
        )
        .fromTo(
          introRef.current,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .fromTo(
          detailsRef.current,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .fromTo(
          footerRef.current,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.25",
        );

      gsap.to(headingRef.current, {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-is-quarry"
      className="overflow-hidden bg-[#f5f5f2] text-[#111111]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mb-10 h-px w-full bg-black/15 sm:mb-14" />

        <div
          ref={eyebrowRef}
          className="mb-10 flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-black/45 sm:mb-14"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
          WHAT IS QUARRY
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <h2
              ref={headingRef}
              className="max-w-[800px] text-[clamp(3.4rem,7.5vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.065em]"
            >
              <span className="block">Technology</span>

              <span className="ml-[5vw] block text-black/60 sm:ml-[4vw]">
                with
              </span>

              <span className="ml-[10vw] block sm:ml-[8vw]">
                purpose.
              </span>
            </h2>

            <p className="mt-8 max-w-[390px] text-sm leading-7 text-black/45 sm:ml-[8vw] sm:mt-12">
              Software engineering, thoughtful design and practical innovation
              — built around the real needs of businesses.
            </p>
          </div>

          <div className="flex flex-col lg:pt-24">
            <p
              ref={introRef}
              className="text-[19px] leading-[1.6] tracking-[-0.025em] text-black/80 sm:text-[23px] sm:leading-[1.55]"
            >
              Quarry is a software engineering and digital solutions company
              that helps businesses turn challenges, ideas and opportunities
              into technology that works.
            </p>

            <div
              ref={detailsRef}
              className="mt-7 space-y-5 text-[15px] leading-[1.85] text-black/55 sm:mt-9 sm:text-[16px]"
            >
              <p>
                We design and develop websites, custom software, AI-powered
                solutions and automated workflows — helping businesses
                establish their digital presence, simplify operations and
                create better experiences for their customers.
              </p>

              <p>
                Every business works differently. That is why we start by
                understanding the problem, the people and the process before
                deciding what to build. We combine engineering, design and
                practical thinking to create solutions that fit real business
                needs.
              </p>

              <p>
                For us, technology is not the end goal. It is a way to remove
                friction, improve how work gets done and give businesses a
                stronger foundation for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

