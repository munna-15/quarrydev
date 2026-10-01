"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

const services = ["Website", "Software", "AI", "Automation", "Something else"];

const budgets = [
  "Under $1k",
  "$1k — $5k",
  "$5k — $10k",
  "$10k+",
  "Under ৳1L",
  "৳1L — ৳5L",
  "৳5L — ৳10L",
  "৳10L+",
  "Not sure yet",
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ContactForm() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;

    setError("");
    setSuccess(false);

    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !service || !budget || !message) {
      setError("Please complete all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          service,
          budget,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      }

      setSuccess(true);
      setService("");
      setBudget("");
      form.reset();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="project-brief" className="bg-[#f7f8fa] text-[#111827]">
      {" "}
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        {" "}
        <div className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            {" "}
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9ca3af]">
              Project brief{" "}
            </span>
            ```
            <h2 className="mt-7 max-w-md font-[var(--font-manrope)] text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.07em]">
              Let’s talk
              <br />
              <span className="text-[#9ca3af]">about the work.</span>
            </h2>
            <div className="mt-14 max-w-sm border-t border-[#dfe1e5] pt-6">
              <p className="text-sm leading-7 text-[#6b7280]">
                Give us enough context to understand where you are and what
                needs to happen next. There’s no need to have everything figured
                out.
              </p>
            </div>
            <div className="mt-10">
              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#9ca3af]">
                Prefer email?
              </span>

              <a
                href="mailto:quarrysoftware@gmail.com"
                className="group mt-3 flex w-fit items-center gap-2 text-sm text-[#111827]"
              >
                quarrysoftware@gmail.com
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-t border-[#111827]"
          >
            <div className="grid gap-6 border-b border-[#dfe1e5] py-9 sm:grid-cols-[60px_1fr]">
              <span className="text-[9px] font-medium tracking-[0.2em] text-[#9ca3af]">
                01
              </span>

              <div>
                <label
                  htmlFor="name"
                  className="block font-[var(--font-manrope)] text-xl font-medium tracking-[-0.04em]"
                >
                  What’s your name?
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-5 w-full border-0 border-b border-[#dfe1e5] bg-transparent px-0 pb-3 text-base outline-none transition-colors placeholder:text-[#b0b4ba] focus:border-[#111827]"
                />
              </div>
            </div>

            <div className="grid gap-6 border-b border-[#dfe1e5] py-9 sm:grid-cols-[60px_1fr]">
              <span className="text-[9px] font-medium tracking-[0.2em] text-[#9ca3af]">
                02
              </span>

              <div>
                <label
                  htmlFor="email"
                  className="block font-[var(--font-manrope)] text-xl font-medium tracking-[-0.04em]"
                >
                  Where can we reach you?
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="mt-5 w-full border-0 border-b border-[#dfe1e5] bg-transparent px-0 pb-3 text-base outline-none transition-colors placeholder:text-[#b0b4ba] focus:border-[#111827]"
                />
              </div>
            </div>

            <div className="grid gap-6 border-b border-[#dfe1e5] py-9 sm:grid-cols-[60px_1fr]">
              <span className="text-[9px] font-medium tracking-[0.2em] text-[#9ca3af]">
                03
              </span>

              <div>
                <span className="block font-[var(--font-manrope)] text-xl font-medium tracking-[-0.04em]">
                  What are you looking to build?
                </span>

                <div className="mt-6 flex flex-wrap gap-x-2 gap-y-3">
                  {services.map((item) => {
                    const active = service === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setService(item);
                          setError("");
                        }}
                        className={`rounded-full border px-4 py-2.5 text-xs transition-all duration-300 ${
                          active
                            ? "border-[#111827] bg-[#111827] text-white"
                            : "border-[#d5d8dd] text-[#6b7280] hover:border-[#111827] hover:text-[#111827]"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid gap-6 border-b border-[#dfe1e5] py-9 sm:grid-cols-[60px_1fr]">
              <span className="text-[9px] font-medium tracking-[0.2em] text-[#9ca3af]">
                04
              </span>

              <div>
                <label
                  htmlFor="message"
                  className="block font-[var(--font-manrope)] text-xl font-medium tracking-[-0.04em]"
                >
                  What’s the project about?
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="A few words about the business, product, problem, or idea..."
                  className="mt-5 w-full resize-none border-0 border-b border-[#dfe1e5] bg-transparent px-0 pb-3 text-base leading-7 outline-none transition-colors placeholder:text-[#b0b4ba] focus:border-[#111827]"
                />
              </div>
            </div>

            <div className="grid gap-6 border-b border-[#dfe1e5] py-9 sm:grid-cols-[60px_1fr]">
              <span className="text-[9px] font-medium tracking-[0.2em] text-[#9ca3af]">
                05
              </span>

              <div>
                <span className="block font-[var(--font-manrope)] text-xl font-medium tracking-[-0.04em]">
                  Do you have a project range in mind?
                </span>

                <div className="mt-6 flex flex-wrap gap-x-2 gap-y-3">
                  {budgets.map((item) => {
                    const active = budget === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setBudget(item);
                          setError("");
                        }}
                        className={`rounded-full border px-4 py-2.5 text-xs transition-all duration-300 ${
                          active
                            ? "border-[#111827] bg-[#111827] text-white"
                            : "border-[#d5d8dd] text-[#6b7280] hover:border-[#111827] hover:text-[#111827]"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {(error || success) && (
              <div
                aria-live="polite"
                className={`mt-6 flex items-center gap-3 text-sm ${
                  error ? "text-red-600" : "text-[#374151]"
                }`}
              >
                {success && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111827] text-white">
                    <Check size={13} />
                  </span>
                )}

                {error || "Your project inquiry has been received."}
              </div>
            )}

            <div className="flex flex-col gap-6 pt-9 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs leading-6 text-[#9ca3af]">
                We usually respond within 1–2 business days.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="group flex h-14 w-full items-center justify-between rounded-full bg-[#111827] px-6 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:px-7 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[190px]"
              >
                {loading ? "Sending..." : success ? "Sent" : "Send brief"}

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-[#111827]">
                  {loading ? (
                    <Loader2
                      size={14}
                      strokeWidth={1.7}
                      className="animate-spin"
                    />
                  ) : (
                    <ArrowUpRight size={14} strokeWidth={1.7} />
                  )}
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
