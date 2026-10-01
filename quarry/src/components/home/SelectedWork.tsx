
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "Real Estate Experience",
    category: "Digital Experience",
    description:
      "A premium real estate experience designed around property discovery, presentation, and a clearer path from browsing to enquiry.",
    image: "/projects/realestate/01.png",
    link: "https://avenor-real-estate-tau.vercel.app/",
  },

  {
    number: "02",
    title: "LeadPilot",
    category: "AI + Automation",
    description:
      "An AI-powered lead automation system designed to capture, qualify, follow up, and manage business leads with less manual work.",
    image: "/projects/leadpilot/01.png",
  },

  {
    number: "03",
    title: "Maison",
    category: "Web Experience",
    description:
      "A refined digital experience for a premium restaurant, built around atmosphere, storytelling, discovery, and reservations.",
    image: "/projects/maison/01.png",
    link: "https://luxury-restaurant-two.vercel.app/",
  },
];

const backgroundImage =
  "https://images.unsplash.com/photo-1632910110458-435eb54b8d9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function SelectedWork() {
  return (
    <section id="work" className="relative text-white">
      <div className="sticky top-0 z-0 h-screen">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 -mt-[100vh]">
        <header className="mx-auto max-w-[1800px] bg-black px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10">
          <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
            Selected Work
          </span>

          <h2 className="max-w-2xl font-[var(--font-manrope)] text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl">
            A selection of what we build.
          </h2>
        </header>

        <div className="mx-auto max-w-[1800px]">
          {projects.map((project, index) => (
            <div key={project.number}>
              <Project project={project} index={index} />

              {index !== projects.length - 1 && <div className="h-[70vh]" />}
            </div>
          ))}
        </div>

        <div className="h-[10vh] bg-black" />
      </div>
    </section>
  );
}

function Project({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className="relative min-h-[70vh] bg-black">
      <div className="mx-auto grid min-h-[70vh] max-w-[1800px] lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[52vh] overflow-hidden lg:min-h-[90vh]"
        >
          <Image
            src={project.image}
            alt={`${project.title} project`}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex min-h-[28vh] flex-col justify-center px-7 py-10 sm:px-10 lg:min-h-[70vh] lg:px-12 xl:px-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
              {project.number}
            </span>

            <span className="h-px w-7 bg-white/20" />

            <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
              {project.category}
            </span>
          </div>

          <h3 className="font-[var(--font-manrope)] text-4xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-[4rem]">
            {project.title}
          </h3>

          <p className="mt-6 max-w-sm text-sm leading-6 text-white/50">
            {project.description}
          </p>

          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white"
            >
              View project

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 transition-all group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          )}
        </motion.div>
      </div>
    </article>
  );
}

