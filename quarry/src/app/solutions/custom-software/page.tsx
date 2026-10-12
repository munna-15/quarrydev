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
    eyebrow: "CUSTOM BUSINESS SOFTWARE",
    title: "Software built around your business.",
    description:
      "Replace disconnected tools and manual processes with software designed around the way your business actually operates. Get the features you need without unnecessary complexity.",
    image: "/images/service/software-01.png",
    alt: "Custom business software interface illustration",
    features: [
      "Business-specific functionality",
      "Centralised data and operations",
      "Scalable system architecture",
    ],
  },
  {
    number: "02",
    eyebrow: "BUSINESS MANAGEMENT SYSTEMS",
    title: "Bring your operations together.",
    description:
      "Manage everyday activities through a connected system. Keep records organised, make information easier to access, and give your team a clearer view of business operations.",
    image: "/images/quarry/business-first.png",
    alt: "Business management system illustration",
    features: [
      "Centralised management dashboards",
      "Role-based access and permissions",
      "Operational reports and records",
    ],
  },
  {
    number: "03",
    eyebrow: "WORKFLOW AUTOMATION",
    title: "Spend less time on repetitive work.",
    description:
      "Connect routine tasks, notifications, data processing, and follow-ups into more consistent workflows. Reduce unnecessary manual work and help your team focus on higher-value tasks.",
    image: "/images/service/responsive-websites.png",
    alt: "Connected digital workflow illustration",
    features: [
      "Automated business workflows",
      "Third-party application integrations",
      "Event-based notifications and tasks",
    ],
  },
  {
    number: "04",
    eyebrow: "DASHBOARDS & INTEGRATIONS",
    title: "Make your business data work together.",
    description:
      "Connect the tools your team already uses and bring important information into one practical interface. Build a clearer picture of activity, progress, and performance.",
    image: "/images/service/automation.png",
    alt: "Data dashboard and integration illustration",
    features: [
      "Custom reporting dashboards",
      "API integrations",
      "Structured data management",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your current process, business challenges, users, and the outcome you want to achieve.",
  },
  {
    number: "02",
    title: "Plan & build",
    description:
      "We define the essential features, design the experience, and develop the system around your requirements.",
  },
  {
    number: "03",
    title: "Test & refine",
    description:
      "We test key workflows, address issues, and refine the system before it is ready for everyday use.",
  },
  {
    number: "04",
    title: "Launch & improve",
    description:
      "We help prepare the solution for use and identify practical improvements as your needs evolve.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CustomSoftwarePage() {
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
            Custom Software
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
              Built for your workflow
            </span>

            <h2 className="max-w-3xl text-[clamp(2.5rem,4.8vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.06em]">
              Your business is unique.{" "}
              <span className="text-[#78816B]">Your software can be too.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#62645A] sm:text-lg sm:leading-9">
              Off-the-shelf tools do not always fit every operation. We work
              with you to identify what needs to improve and build a solution
              around your processes, your team, and your goals.
            </p>

            <div className="mt-7 grid grid-cols-3 border-t border-[#D6D2C7] pt-5">
              {[
                ["01", "Discover"],
                ["02", "Develop"],
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
        id="software-services"
        className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16 lg:pb-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col gap-5 border-t border-[#D6D2C7] pt-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78816B]">
                What we build
              </span>

              <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.055em]">
                Practical tools for complex work.
              </h2>
            </div>

            <p className="max-w-sm text-base leading-7 text-[#62645A]">
              Every system starts with a real problem and a clear reason to
              build something better.
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
                  {/* Transparent PNG illustration */}
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

                  {/* Service content */}
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

      {/* Development process */}
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
              From idea to implementation
            </span>

            <h2 className="mt-4 text-[clamp(2.3rem,4.5vw,4.2rem)] font-medium leading-[1.05] tracking-[-0.06em]">
              A clear process. A solution built around you.
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

      {/* Contact */}
      <Footer />
    </main>
  );
}
