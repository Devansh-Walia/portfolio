import { FiLayers, FiCode } from "react-icons/fi";
import { MdOutlineChat } from "react-icons/md";

export const CONTACT_LINKS = {
  twitter: "https://x.com/devansh_walia_",
  linkedin: "https://www.linkedin.com/in/devansh-walia/",
  github: "https://github.com/devansh-walia",
  me: "https://devanshwalia.com",
};
export const EXTERNAL_LINKS = {
  dashgen: "https://dashgen.in",
  calendraw: "https://calendar.devanshwalia.com/",
  xg: "https://x.glue/is",
  glue: "https://glue.is",
  fifo: "https://fifo.im",
  gluelabs: "https://gluelabs.com",
  mediumProfile: "https://medium.com/@devanshwalia9898",
  mediumRssUrl: "https://medium.com/feed/@devanshwalia9898",
};

export const FEATURED_PROJECTS = [
  {
    title: "XG PLATFORM",
    description: "Workflow Automation System",
    icon: FiCode,
    isDark: true,
  },
  {
    title: "GLUE",
    description: "AI-Powered Fan Pages",
    icon: MdOutlineChat,
    isDark: true,
  },
  {
    title: "DASHGEN",
    description: "AI Integration Platform",
    icon: FiLayers,
    isDark: true,
  },
];

export const PROJECTS = [
  {
    title: "Dashgen",
    role: "Software Development Engineer",
    duration: "01/2024 - Present",
    description:
      "An online tool integrating leading AI models, contributed by building a full-stack chat thread and message editing functionality using tree and LinkedList concepts.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: EXTERNAL_LINKS.dashgen,
    gradient: "from-orange-500/10 to-yellow-500/10",
  },
  {
    title: "Calendraw",
    role: "Solo Developer",
    duration: "12/2023 - Present",
    description:
      "Engineered an online calendar tool featuring traditional writing and scribbling capabilities.",
    technologies: ["TypeScript", "Tailwind CSS", "SVG"],
    url: EXTERNAL_LINKS.calendraw,
    gradient: "from-yellow-500/10 to-green-500/10",
  },
  {
    title: "XG",
    role: "Team Lead",
    duration: "06/2022 - Present",
    description:
      "Developed a flexible workflow system similar to Zapier using queues and LinkedList techniques. Constructed backend for a Customer Relationship Management (CRM) system and a mail editor.",
    technologies: [
      "Next.js",
      "Zustand",
      "TypeScript",
      "Tailwind CSS",
      "React-Email",
      "GraphQL",
    ],
    url: EXTERNAL_LINKS.xg,
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    title: "Glue",
    role: "Software Development Engineer",
    duration: "06/2022 - Present",
    description:
      "Built an app to create fan pages with AI-generated videos and rewards to engage customers, aiming to 3x organic traffic on the customer's profile.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React-Email"],
    url: EXTERNAL_LINKS.glue,
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Glue Labs",
    role: "Software Development Engineer",
    duration: "06/2022 - Present",
    description:
      "Created the GlueLabs website with Astro.js, integrating Svelte and TailwindCSS to achieve a 98% SEO score, improving search engine visibility.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SVG"],
    url: EXTERNAL_LINKS.gluelabs,
    gradient: "from-pink-500/10 to-orange-500/10",
  },
];

export const EXPERIENCES = [
  {
    company: "Glue Labs",
    role: "Software Developer",
    period: "06/2022 - Present",
    responsibilities: [
      "Spearheaded the development of the xG platform, implementing features like multi-template email templates with React Email, DAM, and integrations with Shopify and Instagram.",
      "Established the code architecture for the Glue project from scratch, following best practices to ensure scalability and performance.",
      "Worked with a diverse team of 12+, consistently meeting feature deadlines and enhancing collaborative efficiency.",
      "Engineered an admin dashboard for 3+ products with Next.js and Nest.js, streamlining product management.",
      "Implemented a high-performance company-wide file upload service utilizing AWS S3 and CloudFront, resulting in a 35% reduction in asset load times.",
      "Conducted code reviews to enhance code quality, security, and compliance with industry standards.",
    ],
  },
  {
    company: "Novasie",
    role: "Software Development Intern",
    period: "04/2021 - 06/2022",
    responsibilities: [
      "Revamped user interfaces with React and TailwindCSS, significantly improving application usability.",
      "Authored efficient backend services and RESTful APIs using ExpressJs, ensuring seamless functionality for 2+ services.",
      "Refactored codebases utilizing TypeScript and ESLint to enhance code quality, security, and maintainability.",
      "Integrated Firebase Authentication into a food ordering app, bolstering security and streamlining user management.",
    ],
  },
];
export const PREMIUM_TOOLS = [
  {
    name: "React",
    description: "Core Framework",
    icon: "/images/tools/react.png",
  },
  {
    name: "Next.js",
    description: "Full-Stack Framework",
    icon: "/images/tools/nextjs.png",
  },
  {
    name: "TypeScript",
    description: "Type Safety",
    icon: "/images/tools/typescript.png",
  },
  {
    name: "TailwindCSS",
    description: "Styling Framework",
    icon: "/images/tools/tailwind.png",
  },
  {
    name: "Node.js",
    description: "Backend Runtime",
    icon: "/images/tools/nodejs.png",
  },
  {
    name: "AWS",
    description: "Cloud Services",
    icon: "/images/tools/aws.png",
  },
];

export const STATS = [
  { number: "~3", text: "YEARS OF EXPERIENCE" },
  { number: "+18", text: "PROJECTS COMPLETED" },
  { number: "+28", text: "WORKED LIBRARIES" },
];

export const VOLUNTEER_EXPERIENCES = [
  {
    organization: "Koshish Family",
    role: "Marketing Department Member",
    period: "2023 - Present",
    responsibilities: [
      "Developed and executed marketing strategies to promote organization events and initiatives",
      "Collaborated with team members to organize successful fundraising campaigns",
    ],
    logoSrc: "/images/organizations/koshish-family.png",
  },
  {
    organization: "Koshish Family",
    role: "HOD Website Department",
    period: "2022 - Present",
    responsibilities: [
      "Led the website development team, overseeing all aspects of the organization's online presence",
      "Managed website content updates and ensured information accuracy across all pages",
      "Trained team members on content management systems and web development best practices",
    ],
    logoSrc: "/images/organizations/koshish-family.png",
  },
];
