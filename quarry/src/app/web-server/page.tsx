import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    label: "DEPLOYMENT",
    title: "Cloud Deployment & Hosting",
    description:
      "Deploy websites, web applications, and APIs with reliable cloud infrastructure. We help configure deployments, connect domains, and prepare digital products for production.",
    image: "/images/web-server/cloud-deployment.png",
    imageAlt: "Cloud deployment and hosting illustration",
  },
  {
    number: "02",
    label: "INFRASTRUCTURE",
    title: "Server Management",
    description:
      "Configure application servers, manage deployments, inspect logs, and troubleshoot infrastructure issues to help keep your digital products running smoothly.",
    image: "/images/web-server/server-management.png",
    imageAlt: "Server infrastructure management illustration",
  },
  {
    number: "03",
    label: "SECURITY",
    title: "Application Security",
    description:
      "Strengthen web applications with secure configurations, authentication, access control, and essential security practices designed around your application.",
    image: "/images/web-server/application-security.png",
    imageAlt: "Application security and protection illustration",
  },
  {
    number: "04",
    label: "DATA PROTECTION",
    title: "Backup & Recovery",
    description:
      "Plan database backups and recovery workflows to help protect important business information and support recovery when unexpected issues occur.",
    image: "/images/web-server/backup-recovery.png",
    imageAlt: "Cloud data backup and recovery illustration",
  },
  {
    number: "05",
    label: "CONTINUOUS IMPROVEMENT",
    title: "Maintenance & Optimization",
    description:
      "Keep applications maintainable with bug fixes, dependency updates, performance improvements, and ongoing technical care based on your support requirements.",
    image: "/images/web-server/maintenance.png",
    imageAlt: "Software maintenance and optimization illustration",
  },
];

export default function WebServerPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
        <Navbar/>
      {/* Hero */}
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
            Quarry / Services / Web Server
          </p>

          <h1 className="max-w-3xl text-3xl font-medium tracking-tight text-white md:text-5xl">
            Web Server & Cloud Solutions
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
            Reliable infrastructure for modern digital products.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 md:px-12 md:pb-16 md:pt-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-neutral-500">
            Cloud & Infrastructure
          </p>

          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            The foundation behind
            <br className="hidden md:block" />
            every great digital product.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
            Building a digital product is only the beginning. Deployment,
            security, backups, and ongoing maintenance help keep it reliable as
            your business grows. Quarry helps businesses establish and maintain
            these essential technical foundations.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
        <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-5">
          <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-700">
            Our Services
          </h2>

          <span className="text-sm text-neutral-400">05 Services</span>
        </div>

        <div className="divide-y divide-neutral-200">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="grid gap-6 py-10 md:grid-cols-[64px_1fr_1fr] md:items-center md:gap-10 md:py-14"
            >
              <span className="text-sm tabular-nums text-neutral-400">
                {service.number}
              </span>

              <div
                className={`relative flex aspect-[5/3] w-full items-center justify-center overflow-hidden ${
                  index % 2 === 1 ? "md:order-3" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-contain transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  {service.label}
                </p>

                <h3 className="max-w-lg text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
        <div className="flex flex-col justify-between gap-8 border-t border-neutral-200 pt-10 md:flex-row md:items-center md:pt-12">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-neutral-500">
              Let&apos;s Build Something Reliable
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Need help deploying your next project?
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
              Tell us about your application and infrastructure requirements.
              Let&apos;s find the right solution for your business.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
