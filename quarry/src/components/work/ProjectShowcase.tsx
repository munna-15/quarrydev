"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectShowcase({ project }: Props) {
  const isFourImages = project.images.length === 4;

  return (
    <article className="relative bg-[#050505] text-white">
      {" "}
      <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {" "}
        <div className="grid gap-14 lg:grid-cols-[1.45fr_0.55fr] lg:items-start lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {isFourImages ? (
              <FourImageLayout images={project.images} title={project.title} />
            ) : (
              <ThreeImageLayout images={project.images} title={project.title} />
            )}
          </motion.div>

          <ProjectDetails project={project} />
        </div>
      </div>
    </article>
  );
}

function FourImageLayout({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="space-y-4">
      {" "}
      <div className="grid grid-cols-2 gap-4">
        {" "}
        <Screenshot
          src={images[0]}
          title={title}
          className="aspect-[16/10]"
          priority
        />
        <Screenshot src={images[1]} title={title} className="aspect-[16/10]" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Screenshot src={images[2]} title={title} className="aspect-[16/10]" />

        <Screenshot src={images[3]} title={title} className="aspect-[16/10]" />
      </div>
    </div>
  );
}

function ThreeImageLayout({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="space-y-4">
      {" "}
      <Screenshot src={images[0]} title={title} className="aspect-[16/8.5]" />
      <div className="grid grid-cols-2 gap-5">
        <Screenshot src={images[1]} title={title} className="aspect-[16/10]" />

        <Screenshot src={images[2]} title={title} className="aspect-[16/10]" />
      </div>
    </div>
  );
}

function Screenshot({
  src,
  title,
  className,
  priority = false,
}: {
  src: string;
  title: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-white/[0.07] bg-[#0d0d0d] ${className}`}
    >
      <Image
        src={src}
        alt={`${title} project screenshot`}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-contain"
      />{" "}
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  const isExternalLink =
    project.link?.startsWith("http://") || project.link?.startsWith("https://");

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="lg:sticky lg:top-28"
    >
      {" "}
      <div className="mb-7 flex items-center gap-3">
        {" "}
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
          {project.number}{" "}
        </span>
        <span className="h-px w-7 bg-white/15" />
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
          {project.category}
        </span>
      </div>
      <h2 className="max-w-lg font-[var(--font-manrope)] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
        {project.title}
      </h2>
      <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
        {project.description}
      </p>
      <div className="mt-9 border-t border-white/10 pt-6">
        <span className="mb-4 block text-[9px] uppercase tracking-[0.22em] text-white/30">
          Scope
        </span>

        <div className="space-y-2.5">
          {project.services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-white/45"
            >
              <span className="h-px w-4 bg-white/20" />
              {service}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6">
        <span className="mb-4 block text-[9px] uppercase tracking-[0.22em] text-white/30">
          Technologies
        </span>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="text-[10px] uppercase tracking-[0.14em] text-white/40"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
      {project.link && project.link !== "#" && (
        <Link
          href={project.link}
          target={isExternalLink ? "_blank" : undefined}
          rel={isExternalLink ? "noopener noreferrer" : undefined}
          className="group mt-10 flex w-fit items-center gap-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
        >
          View project
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      )}
    </motion.div>
  );
}
