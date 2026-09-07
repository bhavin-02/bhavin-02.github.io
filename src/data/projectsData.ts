import {
  Activity,
  BarChart3,
  Car,
  GraduationCap,
  Landmark,
  LayoutDashboard,
  LayoutGrid,
  Layers,
  type LucideIcon,
  Palette,
  Play,
  ShoppingCart,
  Smartphone,
  Stethoscope,
  Store,
  Users,
} from "lucide-react";

export type Accent =
  | "indigo"
  | "violet"
  | "cyan"
  | "emerald"
  | "amber"
  | "fuchsia";

export type Platform = "Web" | "Mobile" | "Web & Mobile";

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  company: string;
  period: string;
  category: string;
  domain: string;
  platform: Platform;
  tagline: string;
  overview: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  icon: LucideIcon;
  accent: Accent;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "event-bazaar-web",
    title: "Event Bazaar — Event Marketplace Platform",
    shortTitle: "Event Bazaar",
    company: "Mighty Ventures",
    period: "2024 — 2026",
    category: "Marketplace",
    domain: "Event Marketplace",
    platform: "Web",
    tagline:
      "A two-sided event marketplace connecting 1,000+ vendors with event planners.",
    overview:
      "A web event marketplace connecting event planners with 1,000+ vendors across 50+ categories. Built with multi-role dashboards, real-time Socket.io chat, a quote-management system, Razorpay payments, subscriptions, and advanced filtering — plus 'Bazaar Buddy', an AI-powered event-planning assistant.",
    highlights: [
      "Marketplace connecting 1,000+ vendors across 50+ categories",
      "Multi-role dashboards for planners, vendors and admins",
      "Real-time Socket.io chat and quote management",
      "Razorpay payment integration and subscription system",
      "'Bazaar Buddy' — an AI-powered event planning assistant",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Socket.io",
      "Razorpay",
      "Tailwind CSS",
      "Material-UI",
    ],
    metrics: [
      { label: "Vendors", value: "1,000+" },
      { label: "Categories", value: "50+" },
      { label: "User roles", value: "3" },
    ],
    icon: Store,
    accent: "violet",
    featured: true,
  },
  {
    id: "event-bazaar-mobile",
    title: "Event Bazaar — Mobile Application",
    shortTitle: "Event Bazaar App",
    company: "Mighty Ventures",
    period: "2024 — 2026",
    category: "Mobile App",
    domain: "Event Marketplace",
    platform: "Mobile",
    tagline:
      "The cross-platform iOS & Android companion connecting planners and vendors.",
    overview:
      "The cross-platform iOS/Android companion app for Event Bazaar, connecting event planners with vendors. Features real-time Socket.io chat (EB Community), vendor profile management with portfolios, and a lead-tracking dashboard — with smooth Reanimated and Lottie-driven motion.",
    highlights: [
      "Cross-platform iOS & Android companion app",
      "Real-time Socket.io chat (EB Community)",
      "Vendor profile management with portfolios",
      "Lead-tracking dashboard for vendors",
      "Reanimated + Lottie-driven animations",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "Socket.io",
      "Reanimated",
      "Lottie",
    ],
    icon: Smartphone,
    accent: "fuchsia",
    featured: true,
  },
  {
    id: "ratnaafin",
    title: "Ratnaafin — NBFC Financial Platform",
    shortTitle: "Ratnaafin",
    company: "Mighty Ventures",
    period: "2024 — 2025",
    category: "FinTech",
    domain: "Fintech / NBFC",
    platform: "Web",
    tagline:
      "An MSME loan platform with a live EMI calculator and role-based admin.",
    overview:
      "An MSME loan platform for a Non-Banking Financial Company. Features an interactive EMI calculator with real-time calculations and ApexCharts visualizations, a role-based admin dashboard for loan / user / CRM management, and a multi-step loan application flow with document upload.",
    highlights: [
      "Interactive EMI calculator with real-time calculations",
      "ApexCharts visualizations for loan breakdowns",
      "Role-based admin dashboard for loan, user & CRM management",
      "Multi-step loan application with document upload",
      "CKEditor 5 content management for dynamic pages",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material-UI",
      "Swiper.js",
      "ApexCharts",
      "CKEditor 5",
    ],
    metrics: [
      { label: "EMI calc", value: "Real-time" },
      { label: "Admin", value: "Role-based" },
    ],
    icon: Landmark,
    accent: "emerald",
    featured: true,
  },
  {
    id: "asaar-health",
    title: "ASAAR Health — Healthcare Management Platform",
    shortTitle: "ASAAR Health",
    company: "Mighty Ventures",
    period: "2024 — 2025",
    category: "Healthcare",
    domain: "Healthcare",
    platform: "Web",
    tagline:
      "Role-based healthcare platform with multi-clinic booking and PDF intake forms.",
    overview:
      "A healthcare platform with role-based dashboards for patients, doctors and admins. Includes real-time multi-clinic appointment booking, an advanced prescription system, and 9+ specialized medical intake forms with automated PDF generation.",
    highlights: [
      "Role-based dashboards for patients, doctors and admins",
      "Real-time multi-clinic appointment booking",
      "Advanced prescription system",
      "9+ specialized medical intake forms",
      "Automated PDF generation from form data",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React Hook Form",
      "Yup",
      "Tailwind CSS",
      "Material-UI",
      "Ant Design",
    ],
    metrics: [
      { label: "Intake forms", value: "9+" },
      { label: "Dashboards", value: "3 roles" },
    ],
    icon: Stethoscope,
    accent: "cyan",
    featured: true,
  },
  {
    id: "mv-crm",
    title: "Mighty Ventures CRM Dashboard",
    shortTitle: "MV CRM",
    company: "Mighty Ventures",
    period: "2024 — 2026",
    category: "Enterprise",
    domain: "Enterprise / Internal Tools",
    platform: "Web",
    tagline:
      "An internal enterprise CRM with 10+ modular business-operations modules.",
    overview:
      "An internal enterprise CRM featuring sales-pipeline management, project management with task assignment and timesheet tracking, a recruitment hub, and 10+ modular business-operations modules — with real-time updates and animated dashboards.",
    highlights: [
      "Sales pipeline management",
      "Project management with task assignment & timesheets",
      "Recruitment hub",
      "10+ modular business-operations modules",
      "Real-time updates via Socket.io",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Material-UI",
      "Tailwind CSS",
      "Socket.io",
      "ApexCharts",
      "Framer Motion",
    ],
    metrics: [
      { label: "Modules", value: "10+" },
      { label: "Updates", value: "Real-time" },
    ],
    icon: LayoutDashboard,
    accent: "indigo",
    featured: true,
  },
  {
    id: "founders-plus",
    title: "Founders+ — Founder Mentorship Platform",
    shortTitle: "Founders+",
    company: "Mighty Ventures",
    period: "2024 — 2025",
    category: "EdTech",
    domain: "EdTech / Mentorship",
    platform: "Web",
    tagline:
      "Public platform for an 18-month startup mentorship program with a 120+ question diagnostic.",
    overview:
      "The public-facing platform for an 18-month startup mentorship program. Includes a 16-dimension founder diagnostic assessment (120+ questions), an application / cohort intake flow, and a content library (the 1 Cr Insight Series).",
    highlights: [
      "16-dimension founder diagnostic assessment",
      "120+ question adaptive assessment flow",
      "Application & cohort intake flow",
      "Content library — 1 Cr Insight Series",
      "18-month mentorship program site",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    metrics: [
      { label: "Questions", value: "120+" },
      { label: "Dimensions", value: "16" },
      { label: "Program", value: "18 mo" },
    ],
    icon: GraduationCap,
    accent: "amber",
    featured: true,
  },
  {
    id: "gic",
    title: "GIC — Diagnostic Center Management Platform",
    shortTitle: "GIC",
    company: "Mighty Ventures",
    period: "2024 — 2026",
    category: "Healthcare",
    domain: "Healthcare",
    platform: "Web",
    tagline:
      "A healthcare management platform for a diagnostic & radiology center.",
    overview:
      "A healthcare management platform for a diagnostic / radiology center — covering patient records, appointment scheduling, investigation & modality tracking, referral-doctor management, patient billing with payment history, and report-document generation, with role-based dashboards for admin and receptionist users.",
    highlights: [
      "Patient records & appointment scheduling",
      "Investigation and modality tracking",
      "Referral-doctor management",
      "Patient billing with payment history",
      "Report-document generation",
      "Role-based dashboards (admin, receptionist)",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Ant Design",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
    ],
    icon: Activity,
    accent: "cyan",
  },
  {
    id: "ras-web",
    title: "RAS — Car Rental Website",
    shortTitle: "RAS Web",
    company: "Mighty Ventures",
    period: "2024 — 2025",
    category: "Web App",
    domain: "Car Rental",
    platform: "Web",
    tagline:
      "A responsive car-rental web app with role-based access and a vendor portal.",
    overview:
      "A responsive car-rental web application with role-based access control, dynamic multi-parameter car-listing filters, a three-tier booking system, and a dedicated vendor portal.",
    highlights: [
      "Role-based access control",
      "Dynamic multi-parameter listing filters",
      "Three-tier booking system",
      "Dedicated vendor portal",
    ],
    techStack: ["React", "Tailwind CSS"],
    icon: Car,
    accent: "indigo",
  },
  {
    id: "ras-mobile",
    title: "RAS — Car Rental Application",
    shortTitle: "RAS App",
    company: "Mighty Ventures",
    period: "2024 — 2025",
    category: "Mobile App",
    domain: "Car Rental",
    platform: "Mobile",
    tagline:
      "The cross-platform RAS mobile app covering the full booking lifecycle.",
    overview:
      "Extended the RAS platform into a cross-platform mobile app covering the complete booking lifecycle (new / advance / close) with role-based dashboards for admin, vendor and customer users.",
    highlights: [
      "Complete booking lifecycle: new / advance / close",
      "Role-based dashboards (admin, vendor, customer)",
      "Cross-platform iOS & Android",
    ],
    techStack: ["React Native"],
    icon: Car,
    accent: "violet",
  },
  {
    id: "perdilui",
    title: "PerdilUI — React Native UI Component Library",
    shortTitle: "PerdilUI",
    company: "Acquaint SoftTech",
    period: "2023 — 2024",
    category: "UI Library",
    domain: "Developer Tooling",
    platform: "Mobile",
    tagline:
      "A customizable React Native UI toolkit styled with Tailwind CSS.",
    overview:
      "A comprehensive, customizable React Native UI component toolkit styled with Tailwind CSS, built to accelerate rapid mobile-app development with reusable, documented components.",
    highlights: [
      "Comprehensive, customizable component toolkit",
      "Styled with Tailwind CSS for React Native",
      "Built for rapid mobile-app development",
      "Reusable, documented component architecture",
    ],
    techStack: ["React Native", "Tailwind CSS"],
    icon: Palette,
    accent: "fuchsia",
  },
  {
    id: "ui-kit-collection",
    title: "Mobile UI Kit Collection",
    shortTitle: "UI Kits",
    company: "Acquaint SoftTech",
    period: "2023 — 2024",
    category: "UI Kits",
    domain: "E-commerce / Fintech / Real Estate",
    platform: "Mobile",
    tagline:
      "Three production-ready RN UI kits with Reanimated-driven animation.",
    overview:
      "Three production-ready React Native UI kits: a fashion e-commerce app with product galleries and user flows, a payment-management app with multi-card / bank support and transaction tracking, and a real-estate app with property listings and advanced filtering — all featuring smooth Reanimated-driven animations.",
    highlights: [
      "Fashion e-commerce kit with product galleries",
      "Payment-management kit with multi-card / bank support",
      "Real-estate kit with listings & advanced filtering",
      "Smooth Reanimated-driven animations throughout",
    ],
    techStack: ["React Native", "React Native Reanimated"],
    metrics: [{ label: "UI kits", value: "3" }],
    icon: Layers,
    accent: "amber",
  },
  {
    id: "glover",
    title: "Glover — Customer App UI",
    shortTitle: "Glover",
    company: "Acquaint SoftTech",
    period: "2023 — 2024",
    category: "Mobile App",
    domain: "E-commerce",
    platform: "Mobile",
    tagline:
      "The customer app for a three-app marketplace of users, vendors and drivers.",
    overview:
      "The customer-facing interface for a multi-platform shopping ecosystem connecting users with vendors and drivers — covering shopping flows, order tracking and checkout as part of a three-app marketplace solution.",
    highlights: [
      "Customer-facing shopping flows",
      "Order tracking and checkout",
      "Part of a three-app marketplace (users, vendors, drivers)",
      "Reanimated-driven interactions",
    ],
    techStack: ["React Native", "React Native Reanimated"],
    icon: ShoppingCart,
    accent: "emerald",
  },
  {
    id: "greenlync",
    title: "GreenLync — Social Networking App",
    shortTitle: "GreenLync",
    company: "LNX Cloud Technology",
    period: "2022 — 2023",
    category: "Social",
    domain: "Social Networking",
    platform: "Web & Mobile",
    tagline:
      "A feature-rich social network with real-time messaging and community forums.",
    overview:
      "A feature-rich social networking platform with real-time messaging, community forums, user profiles and interactive engagement features for community building — powered by AWS DynamoDB and WebSocket connections.",
    highlights: [
      "Real-time messaging via WebSocket",
      "Community forums",
      "User profiles & interactive engagement",
      "AWS DynamoDB integration",
    ],
    techStack: ["React", "React Native", "AWS DynamoDB", "Redux Toolkit", "WebSocket"],
    icon: Users,
    accent: "emerald",
  },
  {
    id: "ponder",
    title: "Ponder — Social Polling Platform",
    shortTitle: "Ponder",
    company: "LNX Cloud Technology",
    period: "2022 — 2023",
    category: "Social",
    domain: "Social Networking",
    platform: "Mobile",
    tagline: "A social platform centered on polls instead of posts.",
    overview:
      "A social media platform centered on polls instead of posts — users create polling questions with custom options for others to vote on, with full profile management (photo, edit profile), like / share / comment, reporting and blocking functionality.",
    highlights: [
      "Create polls with custom options to vote on",
      "Full profile management (photo, edit profile)",
      "Like / share / comment engagement",
      "Reporting and blocking moderation",
    ],
    techStack: ["React Native", "React Native Reanimated"],
    icon: BarChart3,
    accent: "violet",
  },
  {
    id: "tiles-album",
    title: "Tiles Album — Creative Design App",
    shortTitle: "Tiles Album",
    company: "LNX Cloud Technology",
    period: "2022 — 2023",
    category: "Creative",
    domain: "Creative Tools",
    platform: "Mobile",
    tagline:
      "A drag-and-drop app for creating and sharing custom tile layouts.",
    overview:
      "A creative design app for creating and sharing custom tile layouts, with an intuitive drag-and-drop interface, cloud storage for project management, and social sharing features — built with React Native Gesture Handler and a Django backend.",
    highlights: [
      "Intuitive drag-and-drop tile layout builder",
      "Cloud storage for project management",
      "Social sharing features",
      "Gesture-driven interactions",
    ],
    techStack: ["React Native", "Django", "Redux Toolkit", "Gesture Handler"],
    icon: LayoutGrid,
    accent: "cyan",
  },
  {
    id: "klipzy",
    title: "Klipzy — Video Sharing Platform",
    shortTitle: "Klipzy",
    company: "LNX Cloud Technology",
    period: "2022 — 2023",
    category: "Media",
    domain: "Video Platform",
    platform: "Mobile",
    tagline:
      "A video-sharing app to upload, edit and share content with gesture navigation.",
    overview:
      "A video-sharing application enabling users to upload, edit and share video content, with cloud storage, social-engagement features and gesture-based navigation — built with React Native, a Django backend and Gesture Handler.",
    highlights: [
      "Upload, edit and share video content",
      "Cloud storage for media",
      "Social engagement features",
      "Gesture-based navigation",
    ],
    techStack: ["React Native", "Django", "Redux Toolkit", "Gesture Handler"],
    icon: Play,
    accent: "fuchsia",
  },
];

export const getProjectById = (id: string): Project | undefined =>
  projectsData.find((project) => project.id === id);

// Warm gold family — subtle variation that stays within the luxury palette.
export const accentMap: Record<
  Accent,
  { from: string; to: string; text: string; glow: string; ring: string }
> = {
  indigo: {
    from: "#c89a48",
    to: "#e3c281",
    text: "#e7cf9c",
    glow: "rgba(212,175,106,0.3)",
    ring: "rgba(212,175,106,0.3)",
  },
  violet: {
    from: "#b8863c",
    to: "#d9b06a",
    text: "#e3c281",
    glow: "rgba(199,154,78,0.3)",
    ring: "rgba(199,154,78,0.3)",
  },
  cyan: {
    from: "#c1a865",
    to: "#ecd9a8",
    text: "#f2e2bd",
    glow: "rgba(231,207,156,0.28)",
    ring: "rgba(231,207,156,0.28)",
  },
  emerald: {
    from: "#b19a52",
    to: "#d8c79a",
    text: "#d8c79a",
    glow: "rgba(203,176,118,0.28)",
    ring: "rgba(203,176,118,0.28)",
  },
  amber: {
    from: "#cba24e",
    to: "#f2dca8",
    text: "#f2dca8",
    glow: "rgba(227,194,129,0.3)",
    ring: "rgba(227,194,129,0.3)",
  },
  fuchsia: {
    from: "#c8925a",
    to: "#e8c39c",
    text: "#e8c39c",
    glow: "rgba(217,168,120,0.3)",
    ring: "rgba(217,168,120,0.3)",
  },
};
