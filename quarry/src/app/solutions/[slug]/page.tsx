
import { notFound } from "next/navigation";
import SolutionHero from "@/components/solutions/SolutionHero";
import SolutionContent from "@/components/solutions/SolutionContent";
import SolutionWork from "@/components/solutions/SolutionWork";
import Footer from "@/components/layout/Footer";

const solutions = {
  web: {
    slug: "web",
    number: "01",
    title: "Web",
    label: "Digital Experiences",
    headline: "Digital experiences that move businesses forward.",
    description:
      "We design and engineer websites and digital experiences that make businesses easier to discover, understand, and engage with.",
    services: [
      "Marketing Websites",
      "Digital Experiences",
      "E-commerce",
      "Conversion-focused Interfaces",
    ],
  },

  software: {
    slug: "software",
    number: "02",
    title: "Software",
    label: "Digital Products & Systems",
    headline: "Software built around the way your business works.",
    description:
      "We build custom software around real workflows, from internal platforms and management systems to complete customer-facing products.",
    services: [
      "Business Platforms",
      "Management Systems",
      "Customer-facing Products",
      "Custom Web Applications",
    ],
  },

  ai: {
    slug: "ai",
    number: "03",
    title: "AI",
    label: "Intelligent Solutions",
    headline: "Practical AI for real business problems.",
    description:
      "We integrate AI where it creates meaningful value, helping businesses reduce repetitive work, improve decisions, and create better experiences.",
    services: [
      "AI Assistants",
      "Lead Intelligence",
      "AI-powered Features",
      "Intelligent Workflows",
    ],
  },

  automation: {
    slug: "automation",
    number: "04",
    title: "Automation",
    label: "Connected Workflows",
    headline: "Less manual work. More connected operations.",
    description:
      "We connect the tools and workflows behind your business so information moves automatically and everyday operations become more efficient.",
    services: [
      "Business Automation",
      "Lead Automation",
      "Workflow Integration",
      "Process Optimization",
    ],
  },
} as const;

type SolutionSlug = keyof typeof solutions;

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({
    slug,
  }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.hasOwn(solutions, slug)) {
    notFound();
  }

  const solution = solutions[slug as SolutionSlug];

  return (
    <main className="bg-[#050505] text-white">
      <SolutionHero solution={solution} />
      <SolutionContent solution={solution} />
      <SolutionWork slug={solution.slug} />
      <Footer />
    </main>
  );
}

