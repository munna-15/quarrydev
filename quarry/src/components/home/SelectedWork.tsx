"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Websites & Web Applications",
    description:
      "We create thoughtful digital experiences that help people understand your business, explore your services and connect with your brand. Every website is designed to balance usability, performance and a clear business purpose.",
    image: "/images/services/web-apps.jpg",
    overlay: "from-[#101b2b]/85 via-[#101b2b]/65 to-[#101b2b]/50",
  },
  {
    number: "02",
    title: "Custom Software",
    description:
      "We build software around the way your business actually operates. From internal dashboards to complete management platforms, our solutions help organise information, simplify everyday operations and support better decisions as your business grows.",
    image: "/images/services/custom-software.jpg",
    overlay: "from-[#21152e]/85 via-[#21152e]/65 to-[#21152e]/50",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "We turn repetitive tasks into intelligent workflows using AI and automation. From handling enquiries and organising information to connecting everyday tools, we help your team save time and focus on work that creates real value.",
    image: "/images/services/ai-automation.jpg",
    overlay: "from-[#102927]/85 via-[#102927]/65 to-[#102927]/50",
  },
  {
    number: "04",
    title: "Business Automation",
    description:
      "We connect your business processes so information moves smoothly between teams and systems. Automate routine follow-ups, lead management, notifications and recurring tasks to reduce manual effort and create a more consistent way of working.",
    image:
      "https://www.asarum-tech.com/_next/image?q=75&url=%2Fautomation%2Fautomation-en.webp&w=3840",
    overlay: "from-[#14271d]/85 via-[#14271d]/65 to-[#14271d]/50",
  },
  {
    number: "05",
    title: "APIs & Integrations",
    description:
      "We connect the platforms and services your business relies on, allowing them to exchange data and work together. From payment gateways and third-party APIs to internal tools, integrations reduce disconnected processes and create a more unified system.",
    image: "/images/services/integrations.jpg",
    overlay: "from-[#302117]/85 via-[#302117]/65 to-[#302117]/50",
  },
  {
    number: "06",
    title: "Cloud & Infrastructure",
    description:
      "We help deploy and maintain the technical foundations behind your digital products. From server configuration and application deployment to scalable infrastructure, we focus on reliable performance, maintainability and room for future growth.",
    image:
      "https://media.datacenterdynamics.com/media/images/Google_Data_Centers_1_1.original.jpg",
    overlay: "from-[#151c31]/85 via-[#151c31]/65 to-[#151c31]/50",
  },
];

export default function WhatWeBuild() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      const cards = cardsRef.current?.querySelectorAll<HTMLElement>(
        "[data-service-card]",
      );

      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#f5f5f2] text-[#111111]"
    >
      <div className="mx-auto w-full max-w-7xl px-12 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 h-px bg-black/10 sm:mb-14" />

        <div
          ref={headingRef}
          className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:flex-row lg:items-end"
        >
          <div className="min-w-0">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-black/45">
              WHAT WE BUILD
            </p>

            <h2 className="text-[clamp(2.8rem,6.5vw,6rem)] font-medium leading-[0.93] tracking-[-0.065em]">
              Technology for
              <br />
              <span className="text-black/35">real business.</span>
            </h2>
          </div>

          <p className="max-w-[390px] text-sm leading-[1.8] text-black/55 sm:text-base lg:pb-1">
            We combine engineering, thoughtful design and automation to create
            digital solutions that solve real problems and support the next
            stage of your business.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {services.map((service) => (
            <article
              key={service.number}
              data-service-card
              className="group relative isolate flex min-h-[400px] items-center justify-center overflow-hidden bg-[#17191c] sm:min-h-[380px] lg:min-h-[420px]"
            >
              <img
                src={service.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 -z-30 h-full w-full scale-[1.03] object-cover opacity-75 transition-transform duration-700 ease-out group-hover:scale-[1.07]"
              />

              <div className="absolute inset-0 -z-20 bg-black/25" />

              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${service.overlay}`}
              />

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

              <div className="w-full px-5 py-12 text-center sm:px-6 lg:px-7">
                <p className="mb-5 text-[10px] font-medium tracking-[0.22em] text-white/65">
                  {service.number} / 06
                </p>

                <h3 className="mx-auto max-w-[360px] text-[clamp(1.8rem,2.5vw,2.35rem)] font-medium leading-[1.08] tracking-[-0.05em] text-white">
                  {service.title}
                </h3>

                <p className="mx-auto mt-5 max-w-[370px] text-[16px] leading-[1.85] text-white/85 sm:text-md">
                  {service.description}
                </p>
              </div>

              {/* Transparent Play CTA */}
              <button
                type="button"
                aria-label={`Explore ${service.title}`}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="absolute bottom-3 right-4 z-10 flex size-12 cursor-pointer items-center justify-center bg-transparent text-white transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:bottom-4 sm:right-5 sm:size-14"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 sm:size-6"
                  aria-hidden="true"
                >
                  <path d="M8 5.8c0-.65.72-1.05 1.28-.7l9.2 5.7a1.4 1.4 0 0 1 0 2.4l-9.2 5.7A.83.83 0 0 1 8 18.2V5.8Z" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
