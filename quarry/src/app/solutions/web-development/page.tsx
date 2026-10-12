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
    eyebrow: "BUSINESS WEBSITES",
    title: "Make your first impression count.",
    description:
      "Give your business a professional digital presence that communicates your value, builds trust, and helps potential customers understand why they should choose you.",
    image: "/images/quarry/business-first.png",
    alt: "Business website design illustration",
    features: [
      "Brand-focused visual design",
      "Clear calls to action",
      "Mobile-friendly pages",
    ],
  },
  {
    number: "02",
    eyebrow: "CUSTOM WEB APPLICATIONS",
    title: "Turn complex ideas into simple experiences.",
    description:
      "Bring your business processes online with custom web applications. From customer portals to interactive platforms, every feature is built around your actual requirements.",
    image: "/images/service/web-applications.png",
    alt: "Custom web application interface illustration",
    features: [
      "Interactive user interfaces",
      "API and third-party integrations",
      "Custom business functionality",
    ],
  },
  {
    number: "03",
    eyebrow: "E-COMMERCE WEBSITES",
    title: "Make shopping feel effortless.",
    description:
      "Create an online store that helps customers discover products, make confident decisions, and move smoothly from browsing to checkout.",
    image: "/images/service/ecommerce-websites.png",
    alt: "E-commerce website illustration",
    features: [
      "Product catalogues and collections",
      "Shopping cart and checkout",
      "Order and payment integrations",
    ],
  },
  {
    number: "04",
    eyebrow: "PERFORMANCE & RESPONSIVE DESIGN",
    title: "Built to work beautifully everywhere.",
    description:
      "A great website should feel fast and intuitive on every screen. We consider performance, accessibility, responsive layouts, and search-friendly structure from the start.",
    image: "/images/service/responsive-websites.png",
    alt: "Responsive website across different devices illustration",
    features: [
      "Responsive desktop and mobile layouts",
      "Performance optimisation",
      "Accessible, SEO-friendly structure",
    ],
  },
];

const principles = [
  {
    number: "01",
    title: "Designed around people",
    description:
      "Clear navigation, readable content, and purposeful interactions help visitors understand your business and find what they need.",
  },
  {
    number: "02",
    title: "Engineered for reliability",
    description:
      "Maintainable code, thoughtful implementation, and testing create a dependable foundation for your digital product.",
  },
  {
    number: "03",
    title: "Ready for real devices",
    description:
      "From large desktop screens to mobile phones, the experience is planned to remain useful, clear, and consistent.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F2EA] text-[#292C25]">
      <Navbar />

      <section className="relative flex h-[30vh] min-h-[240px] items-end overflow-hidden bg-[#17232d]">
        <Image
          src="/images/service/ai.jpg"
          alt="Modern server infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 md:px-12">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/70">
            Quarry / Development
          </p>

          <h1 className="max-w-3xl text-3xl font-medium tracking-tight text-white md:text-5xl">
            Web Development 
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
              A better digital foundation
            </span>

            <h2 className="max-w-3xl text-[clamp(2.5rem,4.8vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.06em]">
              Your website should do more than{" "}
              <span className="text-[#78816B]">look good.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="text-base leading-8 text-[#62645A] sm:text-lg sm:leading-9">
              It should answer questions, guide decisions, and make the next
              step clear. We combine thoughtful design with dependable
              engineering to create digital experiences that serve a real
              business purpose.
            </p>

            <div className="mt-7 grid grid-cols-3 border-t border-[#D6D2C7] pt-5">
              {[
                ["01", "Strategy"],
                ["02", "Design"],
                ["03", "Development"],
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
        id="web-services"
        className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16 lg:pb-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col gap-5 border-t border-[#D6D2C7] pt-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-base leading-7 text-[#62645A]">
              From business websites to custom platforms, every solution starts
              with what you need to achieve.
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

      {/* Principles */}
      <section className="bg-[#f8f6f6] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24 text-black">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-4xl sm:mb-14"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a4747]">
              How we work
            </span>

            <h2 className="mt-4 text-[clamp(2.3rem,4.5vw,4.2rem)] font-medium leading-[1.05] tracking-[-0.06em]">
              Thoughtful design. Dependable engineering.
            </h2>
          </motion.div>

          <div className="grid border-t border-[#000000] md:grid-cols-3">
            {principles.map((item, index) => (
              <motion.article
                key={item.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-b border-[#010101] py-7 sm:py-9 md:border-b-0 md:border-r md:py-9 md:pr-7 md:pl-7 md:first:pl-0 md:last:border-r-0"
              >
                <span className="text-sm font-medium tracking-[0.15em] text-[#000000]">
                  {item.number}
                </span>

                <h3 className="mt-4 max-w-xs text-xl font-medium leading-tight tracking-[-0.035em] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-base leading-7 text-[#62645A]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
