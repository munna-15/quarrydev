"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  MonitorCog,
  Code2,
  Bot,
  Workflow,
  Server,
  Network,
} from "lucide-react";

const solutions = [
  {
    name: "Web Development",
    description:
      "Modern websites and web applications designed around your business goals and customer experience.",
    icon: MonitorCog,
  },
  {
    name: "Custom Software",
    description:
      "Purpose-built software that simplifies operations and solves your specific business challenges.",
    icon: Code2,
  },
  {
    name: "AI Solutions",
    description:
      "Practical AI tools that help businesses handle information, improve responses, and work smarter.",
    icon: Bot,
  },
  {
    name: "Business Automation",
    description:
      "Connected workflows that reduce repetitive tasks and help your team save valuable time.",
    icon: Workflow,
  },
  {
    name: "Cloud & Server Solutions",
    description:
      "Deployment, server configuration, and infrastructure support for reliable digital operations.",
    icon: Server,
  },
  {
    name: "System Integration",
    description:
      "Connect APIs, applications, and business tools into one coordinated digital workflow.",
    icon: Network,
  },
];

type Solution = (typeof solutions)[number];

type ServiceCardProps = {
  solution: Solution;
  shouldReduceMotion: boolean | null;
};

function ServiceCard({ solution, shouldReduceMotion }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = solution.icon;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 38,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.9,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.button
      type="button"
      variants={cardVariants}
      aria-label={
        isFlipped
          ? `Show front of ${solution.name} card`
          : `View details for ${solution.name}`
      }
      aria-pressed={isFlipped}
      onClick={(event) => {
        const isTouchDevice =
          typeof window !== "undefined" &&
          window.matchMedia("(hover: none)").matches;

        // Toggle on touch devices and keyboard activation.
        // Desktop mouse hover uses the CSS flip animation.
        if (isTouchDevice || event.detail === 0) {
          setIsFlipped((current) => !current);
        }
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -4,
              transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className={`quarry-service-card relative block h-[225px] w-full text-center sm:h-[235px] ${
        isFlipped ? "is-flipped" : ""
      }`}
    >
      <span className="sr-only">
        Activate to flip the card and view service details.
      </span>

      <div className="quarry-service-flipper">
        {/* Front face: icon and service name */}
        <div className="quarry-service-face quarry-service-front">
          <Icon
            size={54}
            strokeWidth={1.3}
            aria-hidden="true"
            className="quarry-service-icon mb-5"
          />

          <h3 className="max-w-[280px] text-[19px] font-medium leading-tight tracking-[-0.045em] sm:text-[21px]">
            {solution.name}
          </h3>
        </div>

        {/* Back face: service details */}
        <div
          className="quarry-service-face quarry-service-back"
          aria-hidden={!isFlipped}
        >
          <h3 className="text-[19px] font-medium leading-tight tracking-[-0.045em] sm:text-[21px]">
            {solution.name}
          </h3>

          <span aria-hidden="true" className="my-4 h-px w-10 bg-[#C5DDCE]/60" />

          <p className="max-w-[290px] text-[12px] leading-[1.8] text-[#D2E3D8] sm:text-[13px]">
            {solution.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

export default function SolutionOverview() {
  const shouldReduceMotion = useReducedMotion();

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.2,
        staggerChildren: shouldReduceMotion ? 0 : 0.28,
      },
    },
  };

  return (
    <section
      aria-labelledby="solutions-heading"
      className="overflow-hidden bg-[#f5f5f2] text-[#111111]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-9 flex flex-col justify-between gap-5 sm:mb-11 lg:flex-row lg:items-end lg:gap-12"
        >
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-black/45 sm:text-[11px]">
              <span className="size-1.5 rounded-full bg-[#389d78]" />
              What We Do
            </div>

            <h2
              id="solutions-heading"
              className="max-w-[750px] text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.065em]"
            >
              Technology for
              <br />
              <span className="text-black/35">real business.</span>
            </h2>
          </div>

          <p className="max-w-[350px] text-sm leading-7 text-black/55 lg:pb-1">
            From digital experiences to intelligent systems, we build solutions
            that help businesses move forward.
          </p>
        </motion.div>

        {/* Service cards with sequential reveal */}
        <motion.div
          variants={gridVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {solutions.map((solution) => (
            <ServiceCard
              key={solution.name}
              solution={solution}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 flex items-center justify-between border-t border-black/15 pt-4 sm:mt-8"
        >
          <p className="text-[11px] leading-6 text-black/45 sm:text-xs">
            Thoughtful engineering. Practical solutions.
          </p>

          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-black/40">
            QUARRY
          </span>
        </motion.div>
      </div>

      {/* 3D flip-card styling */}
      <style jsx global>{`
        .quarry-service-card {
          appearance: none;
          padding: 0;
          border: 0;
          border-radius: 2px;
          background: transparent;
          color: #ffffff;
          perspective: 1200px;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
        }

        .quarry-service-card:focus {
          outline: none;
        }

        .quarry-service-card:focus-visible {
          outline: 2px solid #174a3c;
          outline-offset: 4px;
        }

        .quarry-service-flipper {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .quarry-service-face {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 24px;
          border: 1px solid rgba(214, 235, 222, 0.18);
          border-radius: 2px;
          text-align: center;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .quarry-service-front {
          transform: rotateY(0deg);
          background: #174a3c;
          color: #ffffff;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
        }

        .quarry-service-icon {
          flex-shrink: 0;
          color: #d5e9dc;
          transition:
            color 450ms ease,
            transform 450ms ease;
        }

        .quarry-service-card:hover .quarry-service-icon,
        .quarry-service-card:focus-visible .quarry-service-icon {
          color: #ffffff;
          transform: scale(1.04);
        }

        .quarry-service-back {
          transform: rotateY(180deg);
          background: #10392f;
          color: #ffffff;
          border-color: rgba(214, 235, 222, 0.23);
        }

        .quarry-service-card.is-flipped .quarry-service-flipper,
        .quarry-service-card:focus-visible .quarry-service-flipper {
          transform: rotateY(180deg);
        }

        @media (hover: hover) and (pointer: fine) {
          .quarry-service-card:hover .quarry-service-flipper {
            transform: rotateY(180deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .quarry-service-flipper,
          .quarry-service-icon {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
