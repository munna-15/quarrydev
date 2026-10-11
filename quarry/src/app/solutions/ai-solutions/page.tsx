
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import Navbar from "../../../components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    number: "01",
    eyebrow: "AI-POWERED BUSINESS TOOLS",
    title: "Make everyday work more intelligent.",
    description:
      "Bring AI into practical business processes to help your team organise information, handle repetitive tasks, and work more efficiently.",
    image: "/images/service/web-applications.png",
    alt: "AI-powered business application interface",
    features: [
      "AI-powered business applications",
      "Intelligent information processing",
      "AI features tailored to your workflow",
    ],
  },
  {
    number: "02",
    eyebrow: "AI CHATBOTS & ASSISTANTS",
    title: "Give every customer a faster response.",
    description:
      "Create AI assistants that answer common questions, guide customers, and help your business respond consistently across digital channels.",
    image: "/images/quarry/business-first.png",
    alt: "Customer support and AI assistant concept",
    features: [
      "Website AI chat assistants",
      "Knowledge-based customer support",
      "Lead qualification and enquiry handling",
    ],
  },
  {
    number: "03",
    eyebrow: "AI WORKFLOW AUTOMATION",
    title: "Connect AI to the work you already do.",
    description:
      "Combine AI with your existing tools to streamline repetitive tasks, organise incoming information, and trigger useful actions with less manual effort.",
    image: "/images/service/responsive-websites.png",
    alt: "Connected workflow automation concept",
    features: [
      "Automated lead processing and follow-ups",
      "AI-assisted content and data workflows",
      "Integrations with existing business tools",
    ],
  },
  {
    number: "04",
    eyebrow: "AI DATA & INSIGHTS",
    title: "Turn business information into useful insights.",
    description:
      "Build solutions that help teams search documents, summarise information, categorise records, and access relevant business knowledge more easily.",
    image: "/images/service/ecommerce-websites.png",
    alt: "Business data and intelligent insights concept",
    features: [
      "Document search and summarisation",
      "AI-assisted data classification",
      "Business knowledge assistants",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Identify",
    description:
      "We understand your business challenge and identify where AI can provide practical value.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We define the workflow, data requirements, integrations, and appropriate AI approach.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build and test the solution against real use cases, including accuracy and reliability.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We refine the workflow using feedback and monitor how it performs in everyday use.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F2EA] text-[#292C25]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-[60svh] min-h-[420px] max-h-[560px] flex-col justify-end overflow-hidden bg-[#292C25]">
        <Image
          src="/images/service/ai.jpg"
          alt="Digital technology and AI solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-16 lg:pb-12 lg:pt-32"
        >
          <div className="mb-4 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#D4DEC9] sm:mb-5 sm:text-xs">
            <span className="h-px w-7 bg-[#D4DEC9] sm:w-10" />
            AI Solutions & Automation
          </div>

          <h1 className="max-w-4xl text-[clamp(2.25rem,5.2vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em] text-white">
            Less repetitive work.
            <span className="block text-[#D4DEC9]">
              More intelligent growth.
            </span>
          </h1>

          <div className="mt-6 flex flex-col gap-5 border-t border-white/30 pt-5 sm:mt-7 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:pt-6">
            <p className="max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
              Practical AI solutions to automate tasks and improve customer
              experiences.
            </p>

            <a
              href="#ai-services"
              className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-white/60 pb-2 text-sm font-medium text-white transition-colors hover:border-[#D4DEC9] hover:text-[#D4DEC9]"
            >
              Explore solutions
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </motion.div>
    </section>

      {/* Introduction */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20"
        >
          <div>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#78816B]">
              AI with a purpose
            </span>

            <h2 className="max-w-3xl text-[clamp(2.5rem,4.8vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.06em]">
              Not AI for the sake of AI.{" "}
              <span className="text-[#78816B]">
                Solutions that solve real problems.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#62645A] sm:text-lg sm:leading-9">
              The right AI solution should fit your workflow, support your team,
              and deliver a clear purpose. We focus on useful applications—not
              complexity for its own sake.
            </p>

            <div className="mt-7 grid grid-cols-3 border-t border-[#D6D2C7] pt-5">
              {[
                ["01", "Understand"],
                ["02", "Integrate"],
                ["03", "Improve"],
              ].map(([number, label]) => (
                <div key={number}>
                  <span className="block text-xs text-[#78816B]">{number}</span>
                  <span className="mt-2 block text-sm font-medium sm:text-base">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* AI Services */}
      <section
        id="ai-services"
        className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16 lg:pb-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col gap-5 border-t border-[#D6D2C7] pt-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78816B]">
                What we can build
              </span>

              <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.055em]">
                AI that fits your business.
              </h2>
            </div>

            <p className="max-w-sm text-base leading-7 text-[#62645A]">
              From customer-facing assistants to connected internal workflows,
              every solution starts with a business need.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24 lg:space-y-28">
            {services.map((item, index) => {
              const imageOnLeft = index % 2 === 1;

              return (
                <motion.article
                  key={item.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="grid items-center gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20"
                >
                  <div
                    className={`relative min-w-0 ${
                      imageOnLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative mx-auto aspect-[5/4] w-full max-w-[560px] lg:max-w-none">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div
                    className={`min-w-0 ${
                      imageOnLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold tracking-[0.15em] text-[#78816B]">
                        {item.number}
                      </span>

                      <span className="h-px w-8 bg-[#BFC2B5]" />

                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#696A60]">
                        {item.eyebrow}
                      </span>
                    </div>

                    <h3 className="max-w-xl text-[clamp(2rem,3.4vw,3.25rem)] font-medium leading-[1.06] tracking-[-0.055em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-8 text-[#62645A] sm:mt-6 sm:text-lg sm:leading-9">
                      {item.description}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-[#D6D2C7] pt-5 sm:mt-7 sm:pt-6">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-base leading-7 text-[#45483E] sm:text-[17px]"
                        >
                          <Check
                            size={18}
                            strokeWidth={1.7}
                            className="mt-1 shrink-0 text-[#78816B]"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#EAE7DE] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-4xl sm:mb-14"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78816B]">
              A practical approach
            </span>

            <h2 className="mt-4 text-[clamp(2.3rem,4.5vw,4.2rem)] font-medium leading-[1.05] tracking-[-0.06em]">
              From business challenge to working solution.
            </h2>
          </motion.div>

          <div className="grid border-t border-[#CCC9BD] sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <motion.article
                key={item.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="border-b border-[#CCC9BD] py-7 sm:px-5 sm:py-8 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="text-sm font-medium tracking-[0.15em] text-[#78816B]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-medium tracking-[-0.035em] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[#62645A]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
