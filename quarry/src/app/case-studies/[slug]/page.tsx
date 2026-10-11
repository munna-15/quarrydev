"use client";

import { use, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import Navbar from "../../../components/layout/Navbar";
import CustomerSupport from "@/components/case-studies/CustomerSupport";
import Footer from "@/components/layout/Footer";

type Feature = {
  title: string;
  description: string;
};

type Project = {
  title: string;
  category: string;
  introduction: string;
  industry: string;
  type: string;
  engagement: string;
  duration: string;
  staff: string;
  platforms: string;
  challenges: string[];
  solution: string[];
  features: Feature[];
  specialFeatures: string;
  results: string;
  technologies: string[];
};

type QuoteForm = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

const projects: Record<string, Project> = {
  "medical-practice-billing": {
    title: "Medical Practice & Billing Software",
    category: "Healthcare",
    introduction:
      "A healthcare management solution that helps clinics organize patient records, appointments, clinical workflows, and billing from one place.",
    industry: "Healthcare",
    type: "Web Application",
    engagement: "To Be Confirmed",
    duration: "To Be Confirmed",
    staff: "Project-dependent",
    platforms: "Desktop, Tablet & Mobile",
    challenges: [
      "Patient details, appointment information, clinical notes, and billing records can become scattered across separate tools or paper-based processes.",
      "Reception teams need a clearer way to register patients, coordinate schedules, and prepare for daily appointments.",
      "Doctors and administrative staff need access to relevant information without repeatedly asking patients for the same details.",
    ],
    solution: [
      "Clinic staff can create and maintain patient profiles, organize visit history, and find important information from a centralized workspace.",
      "Reception teams can schedule appointments, coordinate check-ins, and keep daily calendars organized.",
      "Doctors can review available patient information and record consultation notes according to the clinic's workflow.",
      "Administrative staff can prepare invoices and organize billing records alongside appointment information.",
    ],
    features: [
      {
        title: "Patient Records",
        description:
          "Create patient profiles, maintain contact and intake information, and keep visit records organized for authorized staff.",
      },
      {
        title: "Appointments & Scheduling",
        description:
          "Arrange appointments, review schedules, manage check-ins, and coordinate patient flow across the clinic.",
      },
      {
        title: "Clinical Workflow",
        description:
          "Give medical teams a structured place to review relevant patient details and record consultation notes.",
      },
      {
        title: "Billing Administration",
        description:
          "Organize invoices and billing information so front-office staff can follow payment-related tasks more clearly.",
      },
    ],
    specialFeatures:
      "Role-based access, configurable forms, document handling, and integrations can be tailored to the clinic's confirmed workflow. Medical data access and storage should be configured around applicable privacy and security requirements.",
    results:
      "The intended outcome is a more coordinated clinic workflow, less repeated data entry, and easier access to patient, appointment, and billing information. Specific performance claims should be added only after results are measured.",
    technologies: [
      "Patient Management",
      "Appointment Scheduling",
      "Billing Workflow",
      "Document Management",
      "Access Control",
      "Third-Party Integrations",
    ],
  },

  "ecommerce-platform": {
    title: "E-commerce Platform for Small Businesses",
    category: "Business",
    introduction:
      "An online selling solution that helps business owners manage product catalogs, stock, customer orders, and day-to-day store operations.",
    industry: "Retail & E-commerce",
    type: "Web Application",
    engagement: "To Be Confirmed",
    duration: "To Be Confirmed",
    staff: "Project-dependent",
    platforms: "Desktop, Tablet & Mobile",
    challenges: [
      "Product details, prices, and stock quantities can be difficult to keep consistent when managed manually.",
      "Store owners need a reliable way to review new orders, update their progress, and keep customer information organized.",
      "As a store grows, handling product updates and order administration across separate tools can consume valuable time.",
    ],
    solution: [
      "Store owners can add, edit, categorize, and maintain product listings from a central product-management area.",
      "Authorized staff can review incoming orders, update order statuses, and keep order details accessible throughout fulfillment.",
      "The storefront can present products clearly so customers can browse categories, view product details, and move through a consistent shopping journey.",
      "Business owners can manage core store information from a responsive interface designed for desktop and mobile use.",
    ],
    features: [
      {
        title: "Product & Catalog Management",
        description:
          "Add or edit product names, descriptions, images, prices, categories, and other catalog information.",
      },
      {
        title: "Inventory Management",
        description:
          "Maintain stock quantities and review inventory information to help reduce avoidable manual tracking.",
      },
      {
        title: "Order Management",
        description:
          "Review order details, organize order processing, and update statuses as orders move through the store's workflow.",
      },
      {
        title: "Customer Shopping Experience",
        description:
          "Give shoppers a responsive storefront with product discovery, category browsing, and clear product information.",
      },
      {
        title: "Store Administration",
        description:
          "Manage key store settings and business information from one organized administrative interface.",
      },
    ],
    specialFeatures:
      "Depending on the agreed scope, the platform can be extended with stock alerts, discount rules, payment gateways, delivery integrations, customer accounts, and sales reports. These should be presented as available features only when they are included in the actual implementation.",
    results:
      "The solution is intended to make catalog updates and order handling easier to manage, reduce dependence on scattered records, and provide customers with a clearer online shopping experience. Measured sales or efficiency improvements should be added only when verified.",
    technologies: [
      "E-commerce",
      "Product Catalog",
      "Inventory Workflow",
      "Order Management",
      "Responsive Interface",
      "Payment & Delivery Integrations",
    ],
  },

  "education-software": {
    title: "Education Management Software",
    category: "Education",
    introduction:
      "A digital management platform for educational organizations to organize student information, academic activities, communication, and administration.",
    industry: "Education",
    type: "Web Application",
    engagement: "To Be Confirmed",
    duration: "To Be Confirmed",
    staff: "Project-dependent",
    platforms: "Desktop, Tablet & Mobile",
    challenges: [
      "Student records, attendance, class schedules, and academic information can be spread across separate files and manual processes.",
      "Teachers and administrators need a consistent way to maintain student information and coordinate academic activities.",
      "Students and guardians may need clearer access to relevant notices, schedules, and learning information.",
    ],
    solution: [
      "Administrators can maintain student profiles and organize academic information in a central system.",
      "Academic teams can arrange class schedules, record attendance, and keep essential classroom information structured.",
      "Authorized users can access relevant academic updates and learning resources through interfaces suited to their roles.",
      "School or institute staff can organize routine administrative tasks and communication more consistently.",
    ],
    features: [
      {
        title: "Student Information",
        description:
          "Maintain student profiles, enrollment details, class assignments, and related academic records.",
      },
      {
        title: "Attendance & Scheduling",
        description:
          "Record attendance and organize class timetables so staff can review academic activity more easily.",
      },
      {
        title: "Academic Records",
        description:
          "Structure grades, results, and academic progress information according to the institution's requirements.",
      },
      {
        title: "Notices & Communication",
        description:
          "Publish notices and share relevant updates with the appropriate student, teacher, or guardian groups.",
      },
    ],
    specialFeatures:
      "The platform can be configured around institution-specific roles, academic terms, grading rules, reports, and communication workflows. Parent portals, online payments, or integrations should be listed only if they are part of the confirmed scope.",
    results:
      "The intended benefit is a more organized administrative process and easier access to academic information for authorized users. Any claimed reduction in workload or improvement in outcomes should be supported by measured project data.",
    technologies: [
      "Student Management",
      "Attendance Tracking",
      "Academic Records",
      "Role-Based Access",
      "Reporting",
      "Responsive Interface",
    ],
  },

  "cloud-platform-security": {
    title: "Security for Cloud-Based Platforms",
    category: "Security",
    introduction:
      "A security-focused platform approach for helping teams organize user access, review application activity, and manage cloud security workflows.",
    industry: "Technology",
    type: "Cloud / Web Application",
    engagement: "To Be Confirmed",
    duration: "To Be Confirmed",
    staff: "Project-dependent",
    platforms: "Cloud & Web",
    challenges: [
      "As cloud applications grow, teams may find it difficult to keep user permissions and access policies consistent.",
      "Security-relevant events and configuration details can be spread across multiple services and dashboards.",
      "Teams need a repeatable process for reviewing risks and following up on identified issues.",
    ],
    solution: [
      "Administrators can organize user roles and permission policies according to the platform's access requirements.",
      "Security teams can bring selected activity and configuration information into a more structured review workflow.",
      "Teams can document identified concerns, assign follow-up actions, and track their status where these capabilities are implemented.",
    ],
    features: [
      {
        title: "Access & Permissions",
        description:
          "Define and review user roles and permissions to support least-privilege access practices.",
      },
      {
        title: "Activity Visibility",
        description:
          "Organize relevant logs, events, or security information to make review and investigation workflows clearer.",
      },
      {
        title: "Risk Review",
        description:
          "Record security concerns, prioritize follow-up work, and maintain a clearer view of remediation status.",
      },
      {
        title: "Security Administration",
        description:
          "Keep security policies and operational procedures organized for authorized team members.",
      },
    ],
    specialFeatures:
      "Depending on the actual architecture, the solution may include audit trails, alerts, identity-provider integrations, backup procedures, and security reporting. No security certification or protection guarantee should be claimed without independent evidence.",
    results:
      "The goal is to improve security visibility and make access reviews and follow-up tasks more systematic. Security effectiveness must be evaluated through implementation details, testing, and ongoing monitoring.",
    technologies: [
      "Cloud Platforms",
      "Identity & Access Management",
      "Audit Logging",
      "Security Monitoring",
      "API Integration",
      "Risk Management",
    ],
  },

  "elearning-platform": {
    title: "E-Learning Platform Development",
    category: "Education",
    introduction:
      "An online learning experience that helps learners discover courses, access educational content, and follow their learning activities.",
    industry: "Education & Training",
    type: "Web Application",
    engagement: "To Be Confirmed",
    duration: "To Be Confirmed",
    staff: "Project-dependent",
    platforms: "Desktop, Tablet & Mobile",
    challenges: [
      "Learners need a straightforward way to discover relevant courses and find the materials for each lesson.",
      "Course content can become difficult to maintain when lessons, resources, and learner records are stored separately.",
      "Educators and administrators need visibility into course organization and learner progress where tracking is required.",
    ],
    solution: [
      "Learners can browse available courses and access organized lessons and learning resources.",
      "Course administrators can structure course content into modules or lessons and update learning materials.",
      "Where included in the implementation, learners can resume their learning and review their course progress.",
      "Educators can maintain course information and organize learning activities through an administrative workflow.",
    ],
    features: [
      {
        title: "Course & Lesson Management",
        description:
          "Create course structures, organize lessons, and maintain the learning resources associated with each course.",
      },
      {
        title: "Learner Access",
        description:
          "Provide a consistent interface for discovering courses and accessing permitted learning materials.",
      },
      {
        title: "Progress Tracking",
        description:
          "Track completed lessons or course progress when progress-tracking functionality is included.",
      },
      {
        title: "Learning Administration",
        description:
          "Manage course details and educational content through a structured administrative interface.",
      },
    ],
    specialFeatures:
      "Possible extensions include quizzes, certificates, instructor dashboards, course discussions, subscriptions, and live-class integrations. The final case study should identify which of these were actually implemented rather than implying every option is available.",
    results:
      "The intended result is a more accessible and organized learning experience for learners and a clearer way for administrators to maintain course content. Engagement and completion-rate claims should be based on actual analytics.",
    technologies: [
      "Learning Management",
      "Course Administration",
      "Content Delivery",
      "Progress Tracking",
      "Responsive Interface",
      "Third-Party Integrations",
    ],
  },

  "restaurant-review-rating": {
    title: "Restaurant Review & Rating System",
    category: "Food & Hospitality",
    introduction:
      "A restaurant discovery and feedback platform that helps visitors explore dining options, compare details, and share their experiences.",
    industry: "Food & Hospitality",
    type: "Web Application",
    engagement: "To Be Confirmed",
    duration: "To Be Confirmed",
    staff: "Project-dependent",
    platforms: "Desktop, Tablet & Mobile",
    challenges: [
      "Restaurant information may be scattered across multiple sources, making it harder for diners to compare options.",
      "Visitors need a clear way to find restaurant details such as location, cuisine, opening hours, and available services.",
      "Restaurant feedback needs to be presented in a consistent way and moderated according to the platform's rules.",
    ],
    solution: [
      "Visitors can browse restaurant profiles and review key information to help them choose where to eat.",
      "The platform can present ratings and customer reviews alongside relevant restaurant details.",
      "Administrators can maintain restaurant information and manage feedback according to the implemented moderation workflow.",
    ],
    features: [
      {
        title: "Restaurant Discovery",
        description:
          "Organize restaurant listings by details such as cuisine, location, and categories to support browsing.",
      },
      {
        title: "Reviews & Ratings",
        description:
          "Display customer feedback and rating information in a consistent format, based on the platform's rating rules.",
      },
      {
        title: "Restaurant Profiles",
        description:
          "Maintain restaurant descriptions, contact information, location, opening hours, and other supported details.",
      },
      {
        title: "Review Administration",
        description:
          "Give authorized administrators a way to review reported or inappropriate content if moderation tools are implemented.",
      },
    ],
    specialFeatures:
      "Potential additions include verified reviews, review reporting, search filters, map integration, owner-managed profiles, and reservation links. These should be described as live features only if they are confirmed in the actual product.",
    results:
      "The platform is intended to make restaurant information easier to explore and customer feedback easier to understand. Claims about increased visits or engagement should be based on verified usage data.",
    technologies: [
      "Restaurant Discovery",
      "Review Management",
      "Rating System",
      "Search & Filtering",
      "Responsive Interface",
      "Maps / External Integrations",
    ],
  },

  "ai-solutions": {
    title: "AI-Powered Business Solutions",
    category: "Artificial Intelligence",
    introduction:
      "AI-assisted tools that help businesses handle selected communication, information-processing, and repetitive operational tasks.",
    industry: "Business & Technology",
    type: "AI Application",
    engagement: "To Be Confirmed",
    duration: "To Be Confirmed",
    staff: "Project-dependent",
    platforms: "Web & Cloud",
    challenges: [
      "Teams can spend significant time answering repetitive questions and sorting incoming information.",
      "Important requests may need to be categorized or routed before the right person can respond.",
      "Businesses want to introduce AI into existing processes without losing control over sensitive actions or customer communication.",
    ],
    solution: [
      "An AI assistant can help draft or suggest responses to supported customer questions using approved business information.",
      "Incoming requests can be classified and routed to the appropriate workflow when the required integrations are available.",
      "Staff can review AI-generated suggestions and handle cases that require human judgment.",
      "AI capabilities can be connected to selected business tools through defined APIs and workflow rules.",
    ],
    features: [
      {
        title: "AI-Assisted Responses",
        description:
          "Generate suggested replies for supported questions using the information and instructions configured for the solution.",
      },
      {
        title: "Information Processing",
        description:
          "Summarize or categorize supported incoming text to help teams review requests more efficiently.",
      },
      {
        title: "Business Integrations",
        description:
          "Connect the AI workflow to selected forms, CRMs, communication channels, or internal tools when supported.",
      },
      {
        title: "Human Review & Controls",
        description:
          "Set review steps and boundaries for sensitive actions so automation remains appropriate to the business process.",
      },
    ],
    specialFeatures:
      "The behavior of an AI solution depends on its model, instructions, connected data, integrations, and safeguards. Human escalation, logging, and approval steps can be designed according to the risk and needs of the use case.",
    results:
      "The objective is to reduce repetitive handling and help teams process supported requests more consistently. Accuracy, response-time, and productivity claims should be made only after testing against real tasks.",
    technologies: [
      "Artificial Intelligence",
      "Large Language Models",
      "Prompt & Knowledge Design",
      "API Integration",
      "Workflow Automation",
      "Human-in-the-Loop Review",
    ],
  },

  "workflow-automation": {
    title: "Intelligent Workflow Automation",
    category: "Automation",
    introduction:
      "A workflow automation solution that connects business tools and moves routine tasks through consistent, clearly defined steps.",
    industry: "Business Operations",
    type: "Automation System",
    engagement: "To Be Confirmed",
    duration: "To Be Confirmed",
    staff: "Project-dependent",
    platforms: "Web & Cloud",
    challenges: [
      "Staff may need to copy information manually between forms, spreadsheets, email, and customer-management tools.",
      "Follow-ups and internal notifications can be missed when they depend on someone remembering each next step.",
      "Teams need to understand whether an automated process succeeded and what to do when a step fails.",
    ],
    solution: [
      "A workflow can capture incoming information from a supported form, webhook, or connected application.",
      "Defined rules can validate, classify, and route that information to the next step in the process.",
      "The system can create or update records and send notifications through connected services.",
      "Where monitoring is configured, staff can review workflow runs and investigate failed steps.",
    ],
    features: [
      {
        title: "Automated Data Intake",
        description:
          "Capture incoming leads, requests, or records from supported forms and connected applications.",
      },
      {
        title: "Rules & Task Routing",
        description:
          "Apply defined conditions to send each item to the relevant workflow or responsible team.",
      },
      {
        title: "Notifications & Follow-Ups",
        description:
          "Trigger emails or internal notifications based on agreed rules and timing conditions.",
      },
      {
        title: "System Integrations",
        description:
          "Move supported information between connected tools through APIs, webhooks, and service integrations.",
      },
      {
        title: "Execution Monitoring",
        description:
          "Review run status and errors when logging and monitoring are included in the workflow.",
      },
    ],
    specialFeatures:
      "Depending on the use case, workflows can include scheduled jobs, retry rules, duplicate checks, error notifications, approval steps, and CRM or database updates. The final scope should document the actual triggers, conditions, and connected services.",
    results:
      "The intended benefit is fewer repetitive manual steps and a more consistent process for moving work between systems. Time savings and error reductions should be reported only after measuring the workflow in operation.",
    technologies: [
      "Workflow Automation",
      "Webhooks",
      "API Integration",
      "Scheduled Jobs",
      "CRM & Database Integration",
      "Error Handling & Monitoring",
    ],
  },
};

const emptyForm: QuoteForm = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

function SectionStars() {
  return (
    <div
      className="mt-3 flex items-center gap-1 text-[#eab25e]"
      aria-label="Five stars"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={22}
          strokeWidth={1.5}
          fill="currentColor"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects[slug];

  const [form, setForm] = useState<QuoteForm>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof QuoteForm, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!project) return;

    const subject = encodeURIComponent(`Project Inquiry: ${project.title}`);

    const body = encodeURIComponent(
      [
        `Project: ${project.title}`,
        "",
        `Full Name: ${form.fullName}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:quarrysoftware@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-[#f5f5f2] text-[#292c25]">
        <Navbar />

        <section className="mx-auto flex min-h-[65vh] max-w-7xl flex-col justify-center px-5 pt-28 sm:px-8 lg:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-neutral-500">
            Quarry / Case Studies
          </p>

          <h1 className="max-w-2xl text-4xl font-medium tracking-tight sm:text-6xl">
            This case study is not available yet.
          </h1>

          <Link
            href="/case-studies"
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm transition-colors hover:text-neutral-500"
          >
            <ArrowLeft size={16} />
            Back to case studies
          </Link>
        </section>

        <CustomerSupport />
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#292c25]">
      <Navbar />

      {/* Hero Section */}
      <header className="relative flex min-h-[30vh] items-end overflow-hidden border-b border-black/10 bg-[#292c25]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/service/ai.jpg')",
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-8 pt-28 sm:px-8 lg:px-12">
          <Link
            href="/case-studies"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            All case studies
          </Link>

          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-white/70">
            Quarry / {project.category}
          </p>

          <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14 lg:px-12 lg:py-16">
        <article className="min-w-0">
          {/* Business Challenges */}
          <section className="border-b border-black/10 pb-10 lg:pb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
              01 / Business Challenges
            </p>

            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Challenges your business needs to solve.
            </h2>

            <SectionStars />

            <div className="mt-7 space-y-5">
              {project.challenges.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-3xl text-base leading-8 text-neutral-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Our Solution */}
          <section className="border-b border-black/10 py-10 lg:py-14">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
              02 / Our Solution
            </p>

            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              What you can do with the solution.
            </h2>

            <SectionStars />

            <ul className="mt-7 space-y-4">
              {project.solution.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.6}
                    className="mt-1 shrink-0 text-[#a27d46]"
                    aria-hidden="true"
                  />

                  <p className="max-w-3xl text-base leading-8 text-neutral-600">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Features */}
          <section className="border-b border-black/10 py-10 lg:py-14">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
              03 / Features
            </p>

            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Tools for everyday work.
            </h2>

            <SectionStars />

            <div className="mt-8 divide-y divide-black/10">
              {project.features.map((feature, index) => (
                <div key={feature.title} className="py-6 first:pt-0">
                  <p className="mb-3 text-xs text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-xl font-medium">{feature.title}</h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Special Features */}
          <section className="border-b border-black/10 py-10 lg:py-14">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
              04 / Special Features
            </p>

            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Built around your workflow.
            </h2>

            <SectionStars />

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600">
              {project.specialFeatures}
            </p>
          </section>

          {/* Results */}
          <section className="border-b border-black/10 py-10 lg:py-14">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
              05 / Results
            </p>

            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Practical outcomes for your team.
            </h2>

            <SectionStars />

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600">
              {project.results}
            </p>
          </section>

          {/* Technology Service */}
          <section className="py-10 lg:py-14">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
              06 / Technology Service
            </p>

            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Technologies & capabilities.
            </h2>

            <SectionStars />

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-black/15 px-4 py-2 text-sm text-neutral-600"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          {/* Project Information */}
          <section className="border border-black/10 bg-white/60 p-6 sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Project Overview
            </p>

            <h2 className="mt-3 text-2xl font-medium tracking-tight">
              Information
            </h2>

            <div className="mt-6 divide-y divide-black/10">
              {[
                ["Industry", project.industry],
                ["Type", project.type],
                ["Engagement model", project.engagement],
                ["Duration", project.duration],
                ["Team", project.staff],
                ["Platforms", project.platforms],
              ].map(([label, value]) => (
                <div key={label} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-xs text-neutral-500">{label}</p>

                  <p className="mt-1 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Request a Quote */}
          <section
            id="request-quote"
            className="mt-5 border border-black/10 bg-white/60 p-6 sm:p-7"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Contact Us
            </p>

            <h2 className="mt-3 text-2xl font-medium tracking-tight">
              Request a Quote
            </h2>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Tell us about your project. Our team can discuss the next steps
              with you.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-xs text-neutral-600"
                >
                  Full Name *
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  required
                  value={form.fullName}
                  onChange={(event) =>
                    updateField("fullName", event.target.value)
                  }
                  className="w-full rounded-none border border-black/15 bg-transparent px-3 py-3 text-sm outline-none transition-colors focus:border-[#292c25]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs text-neutral-600"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded-none border border-black/15 bg-transparent px-3 py-3 text-sm outline-none transition-colors focus:border-[#292c25]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs text-neutral-600"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="w-full rounded-none border border-black/15 bg-transparent px-3 py-3 text-sm outline-none transition-colors focus:border-[#292c25]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs text-neutral-600"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  className="w-full resize-y rounded-none border border-black/15 bg-transparent px-3 py-3 text-sm outline-none transition-colors focus:border-[#292c25]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-between bg-[#292c25] px-5 py-4 text-sm text-white transition-colors hover:bg-neutral-700"
              >
                Send Request
                <ArrowUpRight size={17} />
              </button>

              {submitted && (
                <p
                  role="status"
                  className="flex items-start gap-2 text-xs leading-5 text-neutral-600"
                >
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                  Your email application should open with the inquiry details.
                  Send the email there to complete your request.
                </p>
              )}
            </form>
          </section>
        </aside>
      </section>

      {/* Bottom Section Before Footer */}
      <CustomerSupport />
      <Footer />
    </main>
  );
}
