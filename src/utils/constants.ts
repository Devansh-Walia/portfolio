import { FiLayers, FiCode } from "react-icons/fi";
import { FaChess, FaCode, FaChalkboardTeacher } from "react-icons/fa";
import { GiCricketBat, GiBoxingGlove, GiKimono } from "react-icons/gi";
import { MdOutlineChat } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiAmazon,
  SiFirebase,
  SiSupabase,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiApachekafka,
  SiRedis,
  SiSocketdotio,
  SiSequelize,
  SiDocker,
  SiGraphql,
  SiGithubactions,
  SiMui,
  SiStyledcomponents,
  SiHtml5,
  SiCss3,
  SiSvelte,
  SiCplusplus,
  SiFlask,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const CONTACT_LINKS = {
  twitter: "https://x.com/devansh_walia_",
  linkedin: "https://www.linkedin.com/in/devansh-walia/",
  github: "https://github.com/devansh-walia",
  me: "https://devanshwalia.com",
};
export const EXTERNAL_LINKS = {
  dashgen: "https://dashgen.in",
  calendraw: "https://calendar.devanshwalia.com/",
  xg: "https://x.glue.is",
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
    duration: "08/2024 - Present",
    description:
      "A platform for integrating AI models into chat functionalities. Developed with colleagues, now with 1000+ active users. Built full-stack chat thread and message editing using tree and LinkedList concepts.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "LangChain",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
    url: EXTERNAL_LINKS.dashgen,
    gradient: "from-orange-500/10 to-yellow-500/10",
  },
  {
    title: "XG",
    role: "Team Lead",
    duration: "06/2023 - 03/2025",
    description:
      "Created a powerful workflow automation tool similar to Zapier using queues and LinkedList techniques. Constructed backend for a CRM system and a mail editor.",
    technologies: [
      "Next.js",
      "Nest.js",
      "Redis",
      "BullMQ",
      "React Query",
      "GraphQL",
      "TypeScript",
      "Tailwind CSS",
    ],
    url: EXTERNAL_LINKS.xg,
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    title: "Glue",
    role: "Software Development Engineer",
    duration: "09/2024 - 03/2025",
    description:
      "Built an app to create fan pages with AI-generated videos and rewards to engage customers, aiming to 3x organic traffic on the customer's profile.",
    technologies: [
      "Nest.js",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Redis",
    ],
    url: EXTERNAL_LINKS.glue,
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Glue Labs Website",
    role: "Software Development Engineer",
    duration: "09/2022 - 12/2022",
    description:
      "Created the Glue Labs website with Astro.js, integrating Svelte and TailwindCSS to achieve a 98% SEO score, improving search engine visibility.",
    technologies: ["Astro", "Svelte", "TypeScript", "Tailwind CSS"],
    url: EXTERNAL_LINKS.gluelabs,
    gradient: "from-pink-500/10 to-orange-500/10",
  },
  {
    title: "Calendraw",
    role: "Solo Developer",
    duration: "11/2024 - Present",
    description:
      "Engineered an online calendar tool featuring traditional writing and scribbling capabilities.",
    technologies: ["Svelte Kit", "TypeScript", "CSS"],
    url: EXTERNAL_LINKS.calendraw,
    gradient: "from-yellow-500/10 to-green-500/10",
  },
  {
    title: "MyEduStation",
    role: "Software Development Engineer",
    duration: "09/2023 - 03/2025",
    description:
      "Delivered a full-stack educational platform offering resources for students, teachers, and parents, featuring articles, videos, and downloadable materials. Included 3+ interlinked services.",
    technologies: [
      "Next.js",
      "React Query",
      "Tailwind CSS",
      "Nest.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
    url: "#",
    gradient: "from-green-500/10 to-teal-500/10",
  },
];

export const EXPERIENCES = [
  {
    company: "ThoughtWorks",
    role: "UI Developer - Consultant",
    period: "03/2025 - Present",
    responsibilities: [
      "Joined ThoughtWorks as a UI Developer - Consultant, working at the forefront of leveraging technology for meaningful change.",
      "Collaborating with cross-functional teams to deliver cutting-edge projects and innovative solutions.",
      "Applying expertise in modern frontend technologies to create impactful user experiences.",
      "Contributing to ThoughtWorks' mission of pushing the boundaries of innovation in software development.",
    ],
  },
  {
    company: "Glue Labs",
    role: "Software Developer",
    period: "06/2022 - 03/2025",
    responsibilities: [
      "Developed the workflow structure in XG using Linked List and Queues to automate marketing email campaigns. Implemented backend systems and integrated frontend APIs and UI.",
      "Designed a process to gather data from multiple sources, utilize AI for analysis, and feed results into React email templates for seamless communication.",
      "Conducted research and development to optimize the creation of a static website, evaluating frameworks like Remix and Astro. Implemented a solution using Svelte with Astro for its lightweight nature and reduced boilerplate code, achieving a 98% SEO ranking.",
      'Developed initial backend for the Glue platform using NestJS, implementing features like the affiliate program. On the frontend, created the landing page and "create page" functionality, enabling influencers to leverage AI-generated videos and gift coupons for organic traffic growth.',
      "Integrated Glue ID, a common OAuth-compliant authentication platform, into the Glue services, ensuring secure and standardized authentication for various clients.",
      "Established the code architecture for the Glue project from scratch, following best practices ensuring scalability and performance, which improved system reliability and developer productivity.",
      "Engineered a common admin dashboard for all the products at Glue Labs with Next.js and Nest.js, that helped in streamlining product management across departments and boosting operational efficiency.",
      "Implemented a high-performance company-wide file upload service utilizing AWS S3 and CloudFront.",
      "Helped in reviewing code to enhance code quality, security, and compliance with industry standards.",
    ],
  },
  {
    company: "Novasie",
    role: "Software Development Intern",
    period: "04/2021 - 06/2022",
    responsibilities: [
      "Revamped UI for 2+ repositories with React and TailwindCSS, significantly improving usability.",
      "Authored efficient backend services and REST APIs using ExpressJs with testing, ensuring seamless functionality.",
      "Refactored codebases utilizing TypeScript and ESLint by following best practices enhancing code quality, security, and maintainability.",
      "Collaborated with the backend team to integrate Firebase Authentication into a food ordering app, enhancing security and streamlining user management through effective communication for seamless integration.",
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
      "Developed and executed marketing strategies to promote organization events and initiatives.",
      "Collaborated with team members to organize successful fundraising campaigns.",
    ],
    logoSrc: "/images/organizations/koshish-family.png",
  },
  {
    organization: "Koshish Family",
    role: "Website Department HOD",
    period: "2022 - Present",
    responsibilities: [
      "Led the website development team, overseeing all aspects of the organization's online presence.",
      "Managed website content updates and ensured information accuracy across all pages.",
      "Trained team members on content management systems and web development best practices.",
    ],
    logoSrc: "/images/organizations/koshish-family.png",
  },
];

export const HOBBIES = [
  {
    title: "Chess",
    icon: FaChess,
    description:
      "Strategic player with a passion for the game. Check out my Chess.com profile to see my games and rating.",
    link: "https://www.chess.com/member/exactlantern",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Karate",
    icon: GiKimono,
    description:
      "Enthusiast of this martial art that combines discipline, technique, and mental focus.",
    gradient: "from-red-500/10 to-orange-500/10",
  },
  {
    title: "MMA",
    icon: GiBoxingGlove,
    description:
      "Avid follower of mixed martial arts competitions and training techniques.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Cricket",
    icon: GiCricketBat,
    description:
      "Fan of cricket with a deep appreciation for the strategy and skill involved in the sport.",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "LeetCode",
    icon: FaCode,
    description:
      "Try Solving coding problems from time to time to sharpen algorithmic thinking and problem-solving skills.",
    link: "https://leetcode.com/u/dunit99k/",
    gradient: "from-yellow-500/10 to-amber-500/10",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "Python", icon: SiPython, color: "text-blue-500" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      {
        name: "React Native",
        icon: TbBrandReactNative,
        color: "text-cyan-500",
      },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "Redux", icon: SiRedux, color: "text-purple-500" },
      { name: "React Query", icon: SiReact, color: "text-red-400" },
      { name: "Zustand", icon: SiReact, color: "text-blue-400" },
      { name: "Material UI", icon: SiMui, color: "text-blue-500" },
      {
        name: "Styled Components",
        icon: SiStyledcomponents,
        color: "text-pink-500",
      },
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "Svelte", icon: SiSvelte, color: "text-orange-600" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Nest.js", icon: SiNestjs, color: "text-red-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
      { name: "Kafka", icon: SiApachekafka, color: "text-black" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-white" },
      { name: "Sequelize ORM", icon: SiSequelize, color: "text-blue-500" },
      { name: "TypeORM", icon: SiTypescript, color: "text-orange-500" },
      { name: "Flask", icon: SiFlask, color: "text-gray-300" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-400" },
      { name: "AWS", icon: SiAmazon, color: "text-yellow-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      { name: "Git", icon: SiGit, color: "text-orange-500" },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Rethinking Asynchronous Programming by Kyle Simpson",
    issuer: "Pluralsight",
    issueDate: "2022",
    icon: FaChalkboardTeacher,
    iconColor: "text-blue-400",
    credentialId: null,
  },
  {
    title: "Advanced JavaScript by Kyle Simpson",
    issuer: "Pluralsight",
    issueDate: "2022",
    icon: FaChalkboardTeacher,
    iconColor: "text-blue-400",
    credentialId: null,
  },
  {
    title: "Python for Everybody by University of Michigan",
    issuer: "Coursera",
    issueDate: "2021",
    icon: HiAcademicCap,
    iconColor: "text-blue-500",
    credentialId: null,
  },
];
