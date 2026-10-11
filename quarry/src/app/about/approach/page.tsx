"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Check } from "lucide-react";
import Navbar from "../../../components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const stages = [
  {
    number: "01",
    label: "ALIGNMENT",
    title: "Get on the same page.",
    description:
      "Before writing a line of code, we learn about your business, your users, and the outcome you want to achieve. This gives the project a clear starting point.",
    details: [
      "Business goals and requirements",
      "Target users and core challenges",
      "Project scope and priorities",
    ],
    image: "/images/approach/discovery.png",
    alt: "Team discussing a project brief and business requirements",
    side: "left",
  },
  {
    number: "02",
    label: "DIRECTION",
    title: "Map the way forward.",
    description:
      "We turn requirements into a practical roadmap. You get clarity on the features, technical direction, priorities, and milestones before development moves ahead.",
    details: [
      "Feature planning and prioritization",
      "Technical direction and milestones",
      "A shared plan for moving forward",
    ],
    image: "/images/approach/planning.png",
    alt: "Team planning a project roadmap and workflow",
    side: "right",
  },
  {
    number: "03",
    label: "EXECUTION",
    title: "Build in the open.",
    description:
      "We develop in focused stages, share progress, and discuss important decisions along the way. Your feedback helps shape the product while there is still room to improve it.",
    details: [
      "Visible progress and regular updates",
      "Feedback at meaningful checkpoints",
      "Thoughtful implementation and reviews",
    ],
    image: "/images/approach/development.png",
    alt: "Software developers building a digital product",
    side: "left",
  },
  {
    number: "04",
    label: "DELIVERY",
    title: "Prepare for the real world.",
    description:
      "Before handover, we review the finished work, test key functionality, and prepare the solution for launch. The goal is to deliver something ready to serve its intended purpose.",
    details: [
      "Functional checks and final review",
      "Deployment and launch preparation",
      "Handover and next-step guidance",
    ],
    image: "/images/approach/delivery.png",
    alt: "Team preparing a software product for delivery",
    side: "right",
  },
];

export default function ApproachPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f2] text-[#292C25]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[300px] w-full overflow-hidden bg-[#30352F]">
        <Image
          src="/images/quarry/hero.avif"
          alt="Software engineers collaborating on a digital product"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-7 pt-24 sm:px-8 sm:pb-9 lg:px-16 lg:pb-10"
        >
          <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D4DEC9] sm:text-xs">
            THE QUARRY APPROACH
          </span>

          <h1 className="max-w-4xl text-3xl font-medium leading-[0.98] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            From the first conversation
            <span className="mt-2 block text-[#D4DEC9]">
              to a solution that works.
            </span>
          </h1>

          <div className="mt-4 flex items-end justify-between gap-5">
            <p className="max-w-xl text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
              A clear, collaborative way to turn business requirements into
              purposeful digital products — with clarity at every stage.
            </p>

            <a
              href="#our-process"
              aria-label="Explore our process"
              className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#292C25] sm:h-10 sm:w-10"
            >
              <ArrowDown size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section
        id="our-process"
        className="px-5 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24 lg:px-16 lg:pt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16"
        >
          <div>
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#78816B]">
              HOW WE WORK
            </span>

            <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
              Clear steps.
              <span className="block text-[#78816B]">No guesswork.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-[#696A60] sm:text-base sm:leading-8 lg:justify-self-end">
            Every project has its own challenges, but the way we move forward
            stays transparent. We agree on the direction, communicate as we
            build, and keep the intended outcome in focus.
          </p>
        </motion.div>
      </section>

      {/* Alternating process sections */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-16 lg:pb-28">
        <div className="mx-auto max-w-[1440px]">
          {stages.map((stage) => {
            const reversed = stage.side === "right";

            return (
              <motion.article
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="grid grid-cols-1 items-center gap-8 border-t border-[#DCD8CE] py-12 sm:gap-10 sm:py-16 lg:grid-cols-2 lg:gap-20 lg:py-20"
              >
                {/* Content */}
                <div
                  className={`flex flex-col ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#78816B]">
                    <span>{stage.number}</span>
                    <span className="h-px w-7 bg-[#A8AE9B]" />
                    <span>{stage.label}</span>
                  </div>

                  <h3 className="max-w-lg text-3xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-4xl lg:text-[48px]">
                    {stage.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#696A60] sm:text-base sm:leading-8">
                    {stage.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {stage.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm text-[#45483E]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#D1CEC3]">
                          <Check size={11} className="text-[#78816B]" />
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 h-px w-full max-w-md bg-[#DCD8CE]" />
                </div>

                {/* Illustration */}
                <div
                  className={`relative flex min-h-[240px] items-center justify-center sm:min-h-[320px] lg:min-h-[370px] ${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative h-[250px] w-full max-w-[440px] sm:h-[320px] lg:h-[370px]">
                    <Image
                      src={stage.image}
                      alt={stage.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 440px"
                      className="object-contain"
                    />
                  </div>

                  <span className="pointer-events-none absolute bottom-1 right-1 text-[10px] font-medium tracking-[0.18em] text-[#9B9A8D]">
                    QUARRY / {stage.number}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Collaboration statement */}
      <section className="border-t border-[#DCD8CE] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-[1440px] gap-5 sm:grid-cols-2 sm:items-start lg:gap-16"
        >
          <div>
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#78816B]">
              BUILT TOGETHER
            </span>

            <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.055em] sm:text-4xl">
              Good work comes from good collaboration.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#696A60] sm:text-base sm:leading-8">
            We believe the strongest outcomes come from shared understanding.
            You bring your business knowledge; we bring product thinking,
            design, and engineering. We work together to make informed decisions
            at every important stage.
          </p>
        </motion.div>
      </section>
      <Footer/>
    </main>
  );
}
