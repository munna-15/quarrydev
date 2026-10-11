"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Bot, Layers3, RotateCcw, Sparkles } from "lucide-react";

import Navbar from "../layout/Navbar";

const projectTypes = [
  "Web Development",
  "Custom Software",
  "AI Solutions",
  "Automation",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  projectType: "",
  phone: "",
  message: "",
};

const cards = [
  {
    title: "Solution",
    description:
      "We turn complex business requirements into practical digital systems designed around how your business actually works.",
    icon: Sparkles,
  },
  {
    title: "Technologies",
    description:
      "We use the right technologies to create reliable, scalable and maintainable software built for long-term growth.",
    icon: Layers3,
  },
  {
    title: "Capabilities",
    description:
      "Web, software, AI and automation work together to create connected solutions for modern businesses.",
    icon: Bot,
  },
];

const inputClass =
  "h-10 w-full border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-white/60";

const selectClass =
  "h-10 w-full border-b border-white/15 bg-transparent px-0 text-sm outline-none transition-colors focus:border-white/60";

export default function HeroIntro() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setForm({ ...initialForm });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect this handler to your inquiry API before accepting production leads.
    console.info("Project inquiry form is ready for API integration.", {
      ...form,
    });
  };

  const renderInquiryForm = (mobile = false) => (
    <div
      className={`border border-white/15 bg-black/65 p-5 backdrop-blur-xl sm:p-6 ${
        mobile ? "mx-auto w-full max-w-[600px]" : ""
      }`}
    >
      <h2 className="text-xl font-medium tracking-[-0.035em] sm:text-[22px]">
        Have an idea?
      </h2>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          autoComplete="name"
          placeholder="Full Name"
          aria-label="Full Name"
          required
          maxLength={120}
          className={inputClass}
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          autoComplete="email"
          placeholder="Email Address"
          aria-label="Email Address"
          required
          maxLength={254}
          className={inputClass}
        />

        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          aria-label="Project Type"
          required
          className={`${selectClass} ${
            form.projectType ? "text-white" : "text-white/40"
          }`}
        >
          <option value="" disabled hidden className="bg-neutral-950 text-white/60 ">
            Project Type
          </option>

          {projectTypes.map((type) => (
            <option
              key={type}
              value={type}
              className="bg-neutral-950 text-white"
            >
              {type}
            </option>
          ))}
        </select>

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="tel"
          autoComplete="tel"
          placeholder="Phone Number (Optional)"
          aria-label="Phone Number"
          maxLength={40}
          className={inputClass}
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          aria-label="Project details"
          rows={2}
          maxLength={5000}
          className="w-full resize-y border-b border-white/15 bg-transparent px-0 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/40 focus:border-white/60"
        />

        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white"
          >
            <RotateCcw size={13} strokeWidth={1.5} />
            Reset
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 border border-white/30 px-4 py-3 text-xs font-medium transition-colors duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Hero background */}
      <div className="relative min-h-[640px] h-[78svh] max-h-[1000px] w-full overflow-hidden sm:min-h-[680px] lg:h-[85svh]">
        <Image
          src="/images/quarry/main-hero.avif"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />

        {/* Contrast layers for readable content */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-black/10"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"
        />

        {/* Navigation */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Hero content */}
        <div className="relative z-20 mx-auto h-full max-w-[1800px] px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-[10%] left-5 max-w-[650px] sm:bottom-[9%] sm:left-8 lg:bottom-[10%] lg:left-12"
          >
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-white/70 sm:text-xs sm:tracking-[0.3em]">
              Software Engineering · Web · AI · Automation
            </p>

            <h1 className="font-[var(--font-manrope)] text-[clamp(42px,6.2vw,88px)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
              Quarry Creative
              <br />
              Solution
            </h1>

            <p className="mt-5 max-w-[540px] text-sm leading-6 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">
              We design and build digital systems that help ambitious businesses
              work better, move faster and grow.
            </p>
          </motion.div>

          {/* Desktop inquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-8 top-[24%] hidden w-[340px] lg:block xl:right-12 xl:top-[22%] xl:w-[370px]"
          >
            {renderInquiryForm()}
          </motion.div>
        </div>
      </div>

      {/* Mobile inquiry form */}
      <div className="relative z-10 bg-black px-5 py-8 sm:px-8 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {renderInquiryForm(true)}
        </motion.div>
      </div>

      {/* Capabilities */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-[1800px] sm:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex min-h-[165px] flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[180px] sm:px-7 lg:min-h-[195px] lg:px-10 ${
                  index !== cards.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  <Icon
                    size={21}
                    strokeWidth={1.25}
                    aria-hidden="true"
                    className="shrink-0 text-white/55"
                  />

                  <h2 className="text-lg font-medium tracking-[-0.025em] text-white sm:text-xl lg:text-[21px]">
                    {card.title}
                  </h2>
                </div>

                <p className="mx-auto mt-4 max-w-[430px] text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
