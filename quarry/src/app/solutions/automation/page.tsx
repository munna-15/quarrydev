"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Navbar from "../../../components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    number: "01",
    eyebrow: "BUSINESS WORKFLOW AUTOMATION",
    title: "Make repetitive work run automatically.",
    description:
      "Connect everyday business tasks into organised workflows. Reduce manual data entry, repeated actions, and unnecessary handoffs so your team can focus on more valuable work.",
    image: "/images/service/web-applications.png",
    alt: "Business workflow application",
    features: [
      "Automated task routing",
      "Form and data processing",
      "Scheduled workflows and notifications",
    ],
  },
  {
    number: "02",
    eyebrow: "LEAD & CUSTOMER AUTOMATION",
    title: "Keep every enquiry moving forward.",
    description:
      "Organise incoming leads, automate follow-up reminders, and connect customer information across your tools to help your team respond more consistently.",
    image: "/images/quarry/business-first.png",
    alt: "Customer and lead management system",
    features: [
      "Lead capture and organisation",
      "Automated follow-up workflows",
      "Customer communication triggers",
    ],
  },
  {
    number: "03",
    eyebrow: "APP & API INTEGRATION",
    title: "Make your business tools work together.",
    description:
      "Connect the applications you already use so information can move between systems without constant manual copying or disconnected records.",
    image: "/images/service/responsive-websites.png",
    alt: "Connected business applications",
    features: [
      "Third-party API integrations",
      "Cross-platform data synchronisation",
      "Connected business processes",
    ],
  },
  {
    number: "04",
    eyebrow: "AI-POWERED AUTOMATION",
    title: "Add intelligence to your workflows.",
    description:
      "Combine automation with AI to classify enquiries, summarise documents, extract useful information, and support more flexible business processes.",
    image: "/images/service/ecommerce-websites.png",
    alt: "Intelligent workflow and data processing",
    features: [
      "AI-assisted information processing",
      "Automated document handling",
      "Human review for important decisions",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Map the workflow",
    description:
      "We identify repetitive tasks, bottlenecks, and the systems involved in your current process.",
  },
  {
    number: "02",
    title: "Design the flow",
    description:
      "We define triggers, actions, integrations, and error-handling rules before implementation.",
  },
  {
    number: "03",
    title: "Build & test",
    description:
      "We test the workflow with realistic scenarios to help ensure information moves correctly.",
  },
  {
    number: "04",
    title: "Monitor & refine",
    description:
      "We review results, handle edge cases, and improve the workflow as your business evolves.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AutomationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F2EA] text-[#292C25]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-[30vh] min-h-[240px] items-end overflow-hidden bg-[#17232d]">
              <Image
                src="/images/service/automation.jpg"
                alt="Modern server infrastructure"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
      
              <div className="absolute inset-0 bg-black/50" />
      
              <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 md:px-12">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/70 font-bold">
                  Quarry / Development
                </p>
      
                <h1 className="max-w-3xl text-3xl font-medium tracking-tight text-white md:text-5xl">
                  Automation
                </h1>
      
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
                  Reliable infrastructure for modern digital products.
                </p>
              </div>
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
              Automation with purpose
            </span>

            <h2 className="max-w-3xl text-[clamp(2.5rem,4.8vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.06em]">
              Your team should not have to do everything{" "}
              <span className="text-[#78816B]">by hand.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#62645A] sm:text-lg sm:leading-9">
              Repetitive processes take time and can create avoidable errors. We
              help identify what can be connected, simplified, and automated
              while keeping people involved where judgement matters.
            </p>

            <div className="mt-7 grid grid-cols-3 border-t border-[#D6D2C7] pt-5">
              {[
                ["01", "Connect"],
                ["02", "Automate"],
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

      {/* Services */}
      <section
        id="automation-services"
        className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16 lg:pb-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col gap-5 border-t border-[#D6D2C7] pt-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78816B]">
                What we automate
              </span>

              <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.055em]">
                Workflows that work smarter.
              </h2>
            </div>

            <p className="max-w-sm text-base leading-7 text-[#62645A]">
              Practical automation designed around your actual business
              processes and tools.
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
              Our approach
            </span>

            <h2 className="mt-4 text-[clamp(2.3rem,4.5vw,4.2rem)] font-medium leading-[1.05] tracking-[-0.06em]">
              Simple to plan. Reliable in practice.
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
