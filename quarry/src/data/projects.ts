
export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  services: string[];
  tech: string[];
  images: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Real Estate Experience",
    category: "Digital Platform",
    description:
      "A premium real estate experience designed around property discovery, presentation, and a clearer path from browsing to enquiry.",
    services: [
      "Property Showcase",
      "Property Discovery",
      "Digital Experience",
    ],
    tech: ["Next.js", "TypeScript", "CMS"],
    images: [
      "/projects/realestate/01.png",
      "/projects/realestate/02.png",
      "/projects/realestate/03.png",
      "/projects/realestate/04.png",
    ],
    link: "https://avenor-real-estate-tau.vercel.app/",
  },

  {
    number: "02",
    title: "RestaurantOS",
    category: "Software Engineering",
    description:
      "A full-stack restaurant management and ordering platform built to simplify daily operations, digital ordering, table management, and customer experience.",
    services: [
      "Restaurant Management",
      "QR Ordering",
      "Admin Dashboard",
      "Order Management",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    images: [
      "/projects/restaurantos/01.png",
      "/projects/restaurantos/02.png",
      "/projects/restaurantos/03.png",
      "/projects/restaurantos/04.png",
    ],
    link: "https://restaurant-full-management-system.vercel.app/",
  },

  {
    number: "03",
    title: "LeadPilot",
    category: "AI + Automation",
    description:
      "An AI-powered lead automation system designed to capture, qualify, and follow up with business leads while reducing repetitive manual work.",
    services: [
      "AI Workflow",
      "Lead Management",
      "Business Automation",
    ],
    tech: ["n8n", "AI", "MongoDB"],
    images: [
      "/projects/leadpilot/01.png",
      "/projects/leadpilot/02.png",
      "/projects/leadpilot/03.png",
    ],
  },

  {
    number: "04",
    title: "The Aura",
    category: "E-commerce Experience",
    description:
      "A premium fashion experience created to present products through a clean, refined, and conversion-focused digital environment.",
    services: [
      "E-commerce",
      "Product Experience",
      "Brand Design",
    ],
    tech: ["Next.js", "TypeScript"],
    images: [
      "/projects/aura/01.png",
      "/projects/aura/02.png",
      "/projects/aura/03.png",
    ],
    link: "https://the-aura-clothing-store-theauraofficial.vercel.app/",
  },

  {
    number: "05",
    title: "LeadFlow AI",
    category: "AI + SaaS",
    description:
      "An AI-powered lead response platform designed to help businesses respond faster, organize incoming leads, and turn conversations into opportunities.",
    services: [
      "AI Lead Response",
      "Lead Management",
      "SaaS Platform",
    ],
    tech: ["React", "Node.js", "MongoDB", "AI"],
    images: [
      "/projects/leadflow/01.png",
      "/projects/leadflow/02.png",
      "/projects/leadflow/03.png",
    ],
    link: "https://leadflow-xi-nine.vercel.app/",
  },

  {
    number: "06",
    title: "Maison",
    category: "Digital Experience",
    description:
      "A refined restaurant experience designed around atmosphere, visual storytelling, menu discovery, and a seamless path to reservation.",
    services: [
      "Restaurant Website",
      "Digital Experience",
      "Menu",
      "Reservations",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    images: [
      "/projects/maison/01.png",
      "/projects/maison/02.png",
      "/projects/maison/04.png",
    ],
    link: "https://luxury-restaurant-two.vercel.app/",
  },
];

export const cinematicBackground =
  "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
