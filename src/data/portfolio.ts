import {
  Boxes,
  Cpu,
  Palette,
  Plug,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Bhavin Gunjariya",
  role: "React / React Native Developer",
  location: "Ahmedabad, Gujarat, India",
  email: "bhaving1112@gmail.com",
  phone: "+91 90336 60048",
  roles: [
    "React Developer",
    "React Native Developer",
    "Next.js Engineer",
    "Frontend Team Lead",
    "Mobile App Developer",
  ],
  summary:
    "Results-driven React / React Native developer with 4+ years designing and shipping scalable web and mobile applications — including 2+ years leading cross-functional engineering teams — across healthcare, fintech/NBFC, e-commerce, real estate, event marketplace and social networking domains.",
  summaryLong:
    "I've delivered 15+ production applications spanning role-based platforms, real-time systems and payment integrations, owning end-to-end delivery from client communication and requirements gathering through to production deployment. I love translating complex business requirements into pixel-perfect, high-performance user experiences.",
};

export const stats: { value: string; suffix: string; label: string }[] = [
  { value: "4", suffix: "+", label: "Years of experience" },
  { value: "15", suffix: "+", label: "Production apps shipped" },
  { value: "2", suffix: "+", label: "Years leading teams" },
  { value: "6", suffix: "", label: "Industry domains" },
];

export const highlights: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Sparkles,
    title: "End-to-end ownership",
    description:
      "From client communication and requirements gathering through to production deployment across web and mobile.",
  },
  {
    icon: Boxes,
    title: "Cross-functional leadership",
    description:
      "Led a team of 5 — frontend, backend, UI/UX, QA/QC and CMS — delivering products end to end.",
  },
  {
    icon: Cpu,
    title: "Real-time & payments",
    description:
      "Role-based access, Socket.io real-time features and Razorpay payment gateway integrations at scale.",
  },
  {
    icon: Palette,
    title: "Pixel-perfect UI",
    description:
      "Design-system implementation and accessible, responsive UIs that stay consistent across platforms.",
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Mighty Ventures",
    role: "ReactJS / NextJS / React Native Developer",
    period: "Aug 2024 — Present",
    points: [
      "Led frontend development across healthcare, fintech/NBFC, event marketplace and car-rental products for web and mobile.",
      "Built role-based access control, real-time Socket.io features, Razorpay payment integrations and complex multi-step form workflows with validation.",
      "Established enterprise architecture patterns, design systems and engineering best practices for scalable applications.",
      "Led a cross-functional team of 5 (frontend, backend, UI/UX, QA/QC, CMS) delivering products end to end — from requirements gathering to production.",
    ],
    tags: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Socket.io",
      "Razorpay",
      "Material-UI",
      "Framer Motion",
    ],
  },
  {
    company: "Acquaint SoftTech",
    role: "React Native Developer",
    period: "Nov 2023 — Jun 2024",
    points: [
      "Specialized in React Native cross-platform development, building reusable UI component libraries and design systems.",
      "Mastered advanced animations with React Native Reanimated for smooth, gesture-driven mobile experiences.",
      "Delivered production-ready UI kits across e-commerce fashion, payment management and real estate.",
      "Learned component-library architecture, documentation patterns, npm publishing and native-module integration.",
    ],
    tags: [
      "React Native",
      "Reanimated",
      "Tailwind CSS",
      "TypeScript",
      "Gesture Handler",
    ],
  },
  {
    company: "LNX Cloud Technology",
    role: "ReactJS / React Native Developer",
    period: "Jan 2022 — Nov 2023",
    points: [
      "Led React Native projects across social networking, interactive polling, creative design tools and video sharing.",
      "Built real-time communication systems with WebSockets, AWS DynamoDB and Django backend services.",
      "Developed complex gesture-based interfaces with React Native Gesture Handler for drag-and-drop and intuitive navigation.",
      "Converted Figma design systems into pixel-perfect React Native components with seamless UX.",
    ],
    tags: [
      "React Native",
      "React",
      "Django",
      "AWS DynamoDB",
      "WebSocket",
      "Gesture Handler",
    ],
  },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    icon: Cpu,
    accent: "#6366f1",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux / Redux Toolkit",
      "React Native CLI",
      "Expo",
    ],
  },
  {
    title: "UI & Animation",
    icon: Palette,
    accent: "#a855f7",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Bootstrap",
      "Styled Components",
      "GSAP",
      "Framer Motion",
      "Reanimated",
      "React Native Paper",
      "Lottie",
    ],
  },
  {
    title: "Integrations",
    icon: Plug,
    accent: "#22d3ee",
    skills: [
      "Razorpay",
      "Socket.io",
      "Firebase",
      "REST APIs",
      "Native Modules",
      "React Navigation",
    ],
  },
  {
    title: "Tooling & Deployment",
    icon: Wrench,
    accent: "#34d399",
    skills: [
      "Git",
      "Webpack",
      "VS Code",
      "Android Studio",
      "Xcode",
      "App Store & Play Store",
    ],
  },
  {
    title: "AI Tools & Workflows",
    icon: Sparkles,
    accent: "#fbbf24",
    skills: [
      "Claude (Anthropic)",
      "Claude Code",
      "ChatGPT",
      "Antigravity",
      "Cursor",
      "Gemini / AI Studio",
      "GitHub Copilot",
      "Amazon Q",
      "Figma Make",
      "OpenCode",
    ],
  },
];

// Skill marquee — the technologies scrolling in the hero.
export const marqueeSkills: string[] = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Socket.io",
  "Razorpay",
  "Material UI",
  "Firebase",
  "Reanimated",
  "Node.js",
  "Expo",
];
