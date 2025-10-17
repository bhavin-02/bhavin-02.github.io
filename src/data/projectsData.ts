import {
  CreditCard,
  Home,
  type LucideIcon,
  Palette,
  Play,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  period: string;
  description: string;
  fullDescription: string;
  features: string[];
  detailedFeatures: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  techDetails: {
    name: string;
    purpose: string;
  }[];
  category: string;
  icon: LucideIcon;
  color: string;
  status: string;
  challenges: {
    title: string;
    description: string;
    solution: string;
  }[];
  impact: {
    metric: string;
    value: string;
  }[];
  role: string;
  team: string;
  duration: string;
  images: {
    hero: string;
    screenshots: string[];
  };
}

export const projectsData: Project[] = [
  {
    id: "klipzy",
    title: "Klipzy – Video Sharing Platform",
    shortTitle: "Klipzy",
    period: "Jan 2023 - Present",
    description:
      "Creative video sharing platform with advanced editing tools, social features, and real-time collaboration capabilities for content creators.",
    fullDescription:
      "Klipzy is a next-generation video sharing platform designed to empower content creators with professional-grade editing tools and seamless collaboration features. The platform combines the power of social networking with advanced video processing capabilities, enabling users to create, edit, share, and monetize their content all in one place. Built with scalability in mind, Klipzy handles millions of video uploads while maintaining lightning-fast performance and real-time synchronization across devices.",
    features: [
      "Advanced video editing with filters and effects",
      "Real-time collaboration and commenting system",
      "Social sharing with engagement analytics",
      "Cloud storage with seamless synchronization",
    ],
    detailedFeatures: [
      {
        title: "Advanced Video Editing Suite",
        description:
          "Professional-grade editing tools including multi-track timeline, 50+ filters and effects, transitions, audio mixing, and text overlays. Built with React Native Gesture Handler for smooth, intuitive interactions.",
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Multiple users can work on the same project simultaneously with WebRTC-powered real-time synchronization. See changes as they happen with conflict resolution and version control.",
      },
      {
        title: "Intelligent Analytics Dashboard",
        description:
          "Comprehensive engagement metrics including view patterns, audience demographics, watch time analytics, and performance predictions using machine learning algorithms.",
      },
      {
        title: "Cloud-First Architecture",
        description:
          "Automatic cloud backup with intelligent compression, multi-device synchronization, and offline-first design that syncs when connection is restored.",
      },
    ],
    techStack: [
      "React Native",
      "Django",
      "Redux Toolkit",
      "React Native Gesture Handler",
      "WebRTC",
    ],
    techDetails: [
      {
        name: "React Native",
        purpose: "Cross-platform mobile development with native performance",
      },
      {
        name: "Django",
        purpose: "Robust backend API with video processing and user management",
      },
      {
        name: "Redux Toolkit",
        purpose:
          "State management for complex editing operations and real-time updates",
      },
      {
        name: "React Native Gesture Handler",
        purpose: "Smooth video scrubbing and editing gestures",
      },
      {
        name: "WebRTC",
        purpose: "Real-time collaboration and live streaming capabilities",
      },
    ],
    category: "Video Platform",
    icon: Play,
    color: "gradient-primary",
    status: "ongoing",
    challenges: [
      {
        title: "Video Processing Performance",
        description:
          "Processing high-resolution videos on mobile devices was causing performance bottlenecks and draining battery life rapidly.",
        solution:
          "Implemented a hybrid processing approach: lightweight edits are processed on-device, while complex operations are offloaded to cloud workers with intelligent job queuing and progress tracking.",
      },
      {
        title: "Real-Time Synchronization",
        description:
          "Syncing video editing operations across multiple devices in real-time without conflicts proved challenging with large file sizes.",
        solution:
          "Designed an operational transformation (OT) system specifically for video editing, breaking changes into atomic operations that can be efficiently transmitted and merged across devices.",
      },
      {
        title: "Storage Optimization",
        description:
          "Video files were consuming massive amounts of storage space, making it difficult for users with limited device storage.",
        solution:
          "Implemented adaptive quality streaming with intelligent local caching. Only actively edited portions are stored locally in full quality, while the rest uses optimized previews.",
      },
    ],
    impact: [
      { metric: "Active Users", value: "50K+" },
      { metric: "Videos Uploaded", value: "200K+" },
      { metric: "Avg. Session Time", value: "25 min" },
      { metric: "User Retention", value: "78%" },
    ],
    role: "Lead Mobile Developer",
    team: "5 developers, 2 designers, 1 PM",
    duration: "24 months (ongoing)",
    images: {
      hero: "video platform development",
      screenshots: [
        "mobile app interface",
        "video editing software",
        "social media dashboard",
      ],
    },
  },
  {
    id: "ratnaalin",
    title: "Ratnaalin – Payment Management",
    shortTitle: "Ratnaalin",
    period: "Nov 2023 - Dec 2023",
    description:
      "Comprehensive payment management system for handling all types of card transactions, bank accounts, and financial operations with enterprise-grade security.",
    fullDescription:
      "Ratnaalin is a sophisticated payment management platform that simplifies financial operations for individuals and businesses. With support for multiple payment methods, real-time transaction tracking, and advanced security features, Ratnaalin provides a comprehensive solution for managing finances in today's digital economy. The platform is designed with security and compliance at its core, implementing industry-standard encryption and following PCI-DSS guidelines.",
    features: [
      "Multi-card payment processing with secure encryption",
      "Bank account integration and management",
      "Real-time transaction tracking and reporting",
      "Expense categorization and budget management",
    ],
    detailedFeatures: [
      {
        title: "Unified Payment Gateway",
        description:
          "Support for credit cards, debit cards, digital wallets, and bank transfers with seamless switching and automatic routing to the best payment method based on transaction type.",
      },
      {
        title: "Enterprise-Grade Security",
        description:
          "End-to-end encryption, biometric authentication, fraud detection with machine learning, and compliance with international security standards including PCI-DSS.",
      },
      {
        title: "Smart Financial Insights",
        description:
          "AI-powered spending analysis, automated categorization, budget tracking with alerts, and personalized recommendations for financial optimization.",
      },
      {
        title: "Multi-Bank Integration",
        description:
          "Direct integration with major banks for balance checking, transaction history, and fund transfers without leaving the app.",
      },
    ],
    techStack: [
      "React Native",
      "React Native Reanimated",
      "Secure Storage",
      "Payment APIs",
    ],
    techDetails: [
      {
        name: "React Native",
        purpose: "Native mobile experience with cross-platform code sharing",
      },
      {
        name: "React Native Reanimated",
        purpose: "Smooth animations for transaction flows and UI transitions",
      },
      {
        name: "Secure Storage",
        purpose: "Encrypted local storage for sensitive financial data",
      },
      {
        name: "Payment APIs",
        purpose: "Integration with Stripe, PayPal, and banking APIs",
      },
    ],
    category: "FinTech",
    icon: CreditCard,
    color: "gradient-secondary",
    status: "completed",
    challenges: [
      {
        title: "Security Compliance",
        description:
          "Meeting stringent PCI-DSS compliance requirements while maintaining a smooth user experience was challenging.",
        solution:
          "Implemented a zero-knowledge architecture where sensitive card data never touches our servers. Used tokenization and vault services from certified payment processors.",
      },
      {
        title: "Transaction Speed",
        description:
          "Users expected instant transaction confirmations, but payment processing typically involves multiple steps and external services.",
        solution:
          "Created optimistic UI updates with rollback mechanisms, pre-authorized transactions where possible, and implemented a sophisticated caching layer for transaction status.",
      },
      {
        title: "Multi-Currency Support",
        description:
          "Handling real-time currency conversions with accurate exchange rates across different payment providers.",
        solution:
          "Built an exchange rate aggregation service that polls multiple sources and uses the most favorable rate for users, with automatic fallbacks.",
      },
    ],
    impact: [
      { metric: "Transactions Processed", value: "$2M+" },
      { metric: "Average Processing Time", value: "1.2s" },
      { metric: "User Satisfaction", value: "4.8/5" },
      { metric: "Fraud Prevention Rate", value: "99.7%" },
    ],
    role: "Full-Stack Mobile Developer",
    team: "3 developers, 1 designer, 1 security consultant",
    duration: "2 months",
    images: {
      hero: "payment app interface",
      screenshots: [
        "credit card payment",
        "financial dashboard analytics",
        "mobile banking app",
      ],
    },
  },
  {
    id: "glover",
    title: "Glover Customer App UI",
    shortTitle: "Glover",
    period: "Nov 2023 - Dec 2023",
    description:
      "Modern e-commerce ecosystem with 3 integrated platforms: Driver, Vendor, and Customer applications with real-time order management.",
    fullDescription:
      "Glover is a comprehensive e-commerce ecosystem that connects customers, vendors, and delivery drivers in a seamless platform. The system consists of three interconnected applications that work together to provide a complete ordering, fulfillment, and delivery experience. Built with scalability and real-time communication in mind, Glover handles thousands of concurrent orders while maintaining sub-second response times and providing live tracking updates.",
    features: [
      "Multi-platform ecosystem with seamless integration",
      "Real-time order tracking and notifications",
      "Advanced product catalog with search and filtering",
      "Integrated payment gateway and order management",
    ],
    detailedFeatures: [
      {
        title: "Tri-Platform Architecture",
        description:
          "Three specialized apps (Customer, Vendor, Driver) built on shared component library and unified backend, ensuring consistent experience and data synchronization across all platforms.",
      },
      {
        title: "Real-Time Order Flow",
        description:
          "Socket.IO-powered real-time communication for instant order updates, driver location tracking, and status notifications across all three platforms simultaneously.",
      },
      {
        title: "Intelligent Product Discovery",
        description:
          "Advanced search with fuzzy matching, category filtering, price range selection, and personalized recommendations based on order history and preferences.",
      },
      {
        title: "Dynamic Route Optimization",
        description:
          "Smart routing algorithms for drivers that consider traffic, delivery windows, and multiple pickup/dropoff points to minimize delivery time and maximize efficiency.",
      },
    ],
    techStack: [
      "React Native",
      "React Native Reanimated",
      "Socket.IO",
      "Maps API",
    ],
    techDetails: [
      {
        name: "React Native",
        purpose: "Unified codebase for all three mobile applications",
      },
      {
        name: "React Native Reanimated",
        purpose: "Smooth animations for order transitions and map interactions",
      },
      {
        name: "Socket.IO",
        purpose: "Real-time bidirectional communication for live updates",
      },
      {
        name: "Maps API",
        purpose: "Route optimization, location tracking, and geofencing",
      },
    ],
    category: "E-commerce",
    icon: ShoppingBag,
    color: "gradient-accent",
    status: "completed",
    challenges: [
      {
        title: "Platform Synchronization",
        description:
          "Keeping data consistent across three different apps with different user roles and permissions was complex.",
        solution:
          "Implemented event-driven architecture with a central message bus. Each platform subscribes to relevant events and updates its local state accordingly, with conflict resolution based on timestamps.",
      },
      {
        title: "Offline Functionality",
        description:
          "Drivers needed to continue working even in areas with poor connectivity, while customers needed accurate delivery estimates.",
        solution:
          "Built offline-first architecture with local SQLite database. Actions are queued when offline and synced when connection is restored, with smart retry logic.",
      },
      {
        title: "Scalability During Peak Hours",
        description:
          "System experienced slowdowns during lunch and dinner rush hours with 10x normal traffic.",
        solution:
          "Implemented auto-scaling infrastructure, connection pooling, and request batching. Added Redis caching layer for frequently accessed data like restaurant menus.",
      },
    ],
    impact: [
      { metric: "Daily Orders", value: "5,000+" },
      { metric: "Delivery Time", value: "< 30 min" },
      { metric: "Driver Efficiency", value: "+45%" },
      { metric: "Customer Rating", value: "4.7/5" },
    ],
    role: "Mobile Developer",
    team: "4 developers, 2 designers, 1 PM",
    duration: "2 months",
    images: {
      hero: "food delivery app",
      screenshots: [
        "e-commerce mobile interface",
        "delivery tracking map",
        "shopping cart checkout",
      ],
    },
  },
  {
    id: "real-estate",
    title: "Real Estate UI Platform",
    shortTitle: "Real Estate Platform",
    period: "Nov 2023 - Dec 2023",
    description:
      "Comprehensive real estate application for property search, management, and transactions with advanced mapping and virtual tour capabilities.",
    fullDescription:
      "A cutting-edge real estate platform that revolutionizes property discovery and viewing through immersive technology and intelligent search capabilities. The application combines traditional property listings with modern features like AR virtual tours, neighborhood insights, and AI-powered property recommendations. Designed for both property seekers and real estate agents, the platform streamlines the entire property transaction process from discovery to closing.",
    features: [
      "Advanced property search with multiple filters",
      "Interactive property listings with detailed information",
      "Geolocation-based property discovery",
      "Virtual tours and 360° property views",
    ],
    detailedFeatures: [
      {
        title: "AI-Powered Property Matching",
        description:
          "Machine learning algorithm that learns from user behavior and preferences to suggest properties that match specific requirements, considering factors like commute time, schools, and lifestyle preferences.",
      },
      {
        title: "Immersive Virtual Tours",
        description:
          "AR/VR integration allowing users to virtually walk through properties from their mobile device, with detailed room measurements, furniture placement simulation, and renovation visualization.",
      },
      {
        title: "Neighborhood Intelligence",
        description:
          "Comprehensive neighborhood data including crime rates, school ratings, local amenities, transportation options, and future development plans, all visualized on interactive maps.",
      },
      {
        title: "Smart Property Comparison",
        description:
          "Side-by-side comparison of up to 4 properties with detailed analytics, price trends, investment potential scores, and automated report generation.",
      },
    ],
    techStack: [
      "React Native",
      "React Native Reanimated",
      "Maps SDK",
      "AR Kit",
    ],
    techDetails: [
      {
        name: "React Native",
        purpose: "Cross-platform mobile development for iOS and Android",
      },
      {
        name: "React Native Reanimated",
        purpose: "Smooth transitions for gallery views and map interactions",
      },
      {
        name: "Maps SDK",
        purpose:
          "Interactive maps with property markers and neighborhood boundaries",
      },
      {
        name: "AR Kit",
        purpose: "Augmented reality virtual tours and room visualization",
      },
    ],
    category: "Real Estate",
    icon: Home,
    color: "gradient-primary",
    status: "completed",
    challenges: [
      {
        title: "AR Performance on Mid-Range Devices",
        description:
          "Virtual tours were too resource-intensive for devices without dedicated AR processors, limiting the app's accessibility.",
        solution:
          "Created adaptive rendering system that detects device capabilities and adjusts quality accordingly. Offered 360° photo tours as fallback for devices without AR support.",
      },
      {
        title: "Real-Time Property Availability",
        description:
          "Properties were being listed across multiple platforms, leading to outdated availability information and user frustration.",
        solution:
          "Integrated with major MLS systems and property databases to pull real-time availability. Implemented webhook listeners for instant updates when properties are sold or delisted.",
      },
      {
        title: "Map Performance with Large Datasets",
        description:
          "Displaying thousands of property markers on a map caused severe performance degradation and crashes.",
        solution:
          "Implemented marker clustering with dynamic detail levels based on zoom. Only loads visible properties in viewport with lazy loading as user pans.",
      },
    ],
    impact: [
      { metric: "Properties Listed", value: "15,000+" },
      { metric: "Virtual Tours Taken", value: "25K+" },
      { metric: "User Engagement", value: "+120%" },
      { metric: "Time to Decision", value: "-40%" },
    ],
    role: "Senior Mobile Developer",
    team: "3 developers, 2 designers",
    duration: "2 months",
    images: {
      hero: "modern architecture house",
      screenshots: [
        "real estate app interface",
        "property search map",
        "virtual tour 360",
      ],
    },
  },
  {
    id: "perdiui",
    title: "PerdiUI – Component Library",
    shortTitle: "PerdiUI",
    period: "Nov 2023 - Dec 2023",
    description:
      "Cutting-edge React Native UI component library with comprehensive set of customizable components, designed for modern mobile applications.",
    fullDescription:
      "PerdiUI is a production-ready React Native component library that accelerates mobile app development with a comprehensive collection of customizable, accessible components. Built with TypeScript and styled with Tailwind CSS, PerdiUI provides developers with building blocks to create consistent, beautiful mobile applications rapidly. The library emphasizes accessibility, performance, and developer experience with extensive documentation, live examples, and TypeScript support throughout.",
    features: [
      "50+ pre-built customizable components",
      "Tailwind CSS integration for consistent styling",
      "TypeScript support with full type definitions",
      "Comprehensive documentation and examples",
    ],
    detailedFeatures: [
      {
        title: "Comprehensive Component Suite",
        description:
          "Over 50 production-ready components including forms, navigation, data display, feedback, and layout primitives. Each component is built with composition in mind for maximum flexibility.",
      },
      {
        title: "Tailwind-First Styling",
        description:
          "Deep integration with Tailwind CSS for React Native, allowing developers to use familiar utility classes for rapid styling and theme customization.",
      },
      {
        title: "Accessibility Built-In",
        description:
          "Every component follows WCAG 2.1 guidelines with proper ARIA labels, keyboard navigation, screen reader support, and high contrast mode compatibility.",
      },
      {
        title: "Interactive Documentation",
        description:
          "Live playground powered by Storybook where developers can interact with components, modify props in real-time, and copy code snippets directly into their projects.",
      },
    ],
    techStack: ["React Native", "Tailwind CSS", "TypeScript", "Storybook"],
    techDetails: [
      {
        name: "React Native",
        purpose: "Component framework with cross-platform compatibility",
      },
      {
        name: "Tailwind CSS",
        purpose: "Utility-first styling with design system tokens",
      },
      {
        name: "TypeScript",
        purpose: "Type safety and enhanced developer experience",
      },
      {
        name: "Storybook",
        purpose: "Component documentation and interactive playground",
      },
    ],
    category: "UI Library",
    icon: Palette,
    color: "gradient-secondary",
    status: "published",
    challenges: [
      {
        title: "Platform Consistency",
        description:
          "Creating components that look and feel native on both iOS and Android while maintaining a consistent design language.",
        solution:
          "Developed platform-adaptive component variants that automatically adjust visual style and behavior based on the platform, while sharing core logic and API.",
      },
      {
        title: "Bundle Size Optimization",
        description:
          "Including 50+ components threatened to significantly increase app bundle sizes, especially for apps using only a few components.",
        solution:
          "Implemented tree-shaking support with ES modules, allowing bundlers to include only used components. Created separate entry points for individual components.",
      },
      {
        title: "Theming Flexibility",
        description:
          "Supporting dark mode, custom themes, and brand colors without requiring component rewrites.",
        solution:
          "Built comprehensive theming system using Tailwind's configuration with CSS custom properties. Themes can be switched dynamically at runtime without re-render.",
      },
    ],
    impact: [
      { metric: "NPM Downloads", value: "10K+/month" },
      { metric: "GitHub Stars", value: "500+" },
      { metric: "Developer Time Saved", value: "60%" },
      { metric: "Community Contributors", value: "25+" },
    ],
    role: "Creator & Lead Developer",
    team: "Solo project with community contributors",
    duration: "2 months (+ ongoing maintenance)",
    images: {
      hero: "ui design components",
      screenshots: [
        "mobile app ui kit",
        "component library interface",
        "design system documentation",
      ],
    },
  },
  {
    id: "fashion-app",
    title: "Fashion Mobile App",
    shortTitle: "Fashion App",
    period: "Oct 2023 - Nov 2023",
    description:
      "Elegant fashion e-commerce mobile application with advanced product visualization, personalized recommendations, and seamless checkout experience.",
    fullDescription:
      "An innovative fashion e-commerce platform that reimagines online shopping through AI-powered personalization and AR try-on technology. The app combines social features with commerce, allowing users to discover trends, get style advice from influencers, and make purchases without ever leaving the app. With features like virtual fitting rooms and personalized style recommendations, the app bridges the gap between online and in-store shopping experiences.",
    features: [
      "Advanced product catalog with AR try-on",
      "Personalized recommendation engine",
      "Social shopping and sharing features",
      "One-click checkout with multiple payment options",
    ],
    detailedFeatures: [
      {
        title: "AR Virtual Fitting Room",
        description:
          "Cutting-edge augmented reality technology that allows users to virtually try on clothes using their phone's camera. AI-powered body measurement ensures accurate fit recommendations.",
      },
      {
        title: "AI Style Recommendations",
        description:
          "Machine learning algorithm analyzes user preferences, body type, previous purchases, and current trends to suggest items that match personal style and fit well.",
      },
      {
        title: "Social Shopping Experience",
        description:
          "Users can create style boards, share outfits, get feedback from friends, and discover trending looks from fashion influencers, all within the app.",
      },
      {
        title: "Frictionless Checkout",
        description:
          "One-tap purchasing with saved payment methods, address auto-fill, and smart size selection based on previous orders. Guest checkout available for new users.",
      },
    ],
    techStack: [
      "React Native",
      "React Native Reanimated",
      "AR Core",
      "Machine Learning",
    ],
    techDetails: [
      {
        name: "React Native",
        purpose: "Cross-platform mobile app development",
      },
      {
        name: "React Native Reanimated",
        purpose: "Smooth product gallery animations and transitions",
      },
      { name: "AR Core", purpose: "Augmented reality virtual try-on feature" },
      {
        name: "Machine Learning",
        purpose: "Personalized recommendations and body measurement analysis",
      },
    ],
    category: "Fashion",
    icon: Smartphone,
    color: "gradient-accent",
    status: "completed",
    challenges: [
      {
        title: "AR Accuracy Across Device Types",
        description:
          "Different phones have varying AR capabilities, leading to inconsistent virtual try-on experiences and inaccurate fit predictions.",
        solution:
          "Created device-specific calibration profiles and implemented computer vision fallbacks for devices without advanced AR. Added manual measurement input as an alternative.",
      },
      {
        title: "Product Image Quality",
        description:
          "Vendors uploaded images with inconsistent backgrounds, lighting, and angles, making AR overlay difficult and recommendation algorithms less effective.",
        solution:
          "Built automated image processing pipeline that standardizes product photos, removes backgrounds, and generates multiple viewing angles using AI image synthesis.",
      },
      {
        title: "Recommendation Cold Start",
        description:
          "New users had no purchase history, making it difficult to provide personalized recommendations and resulting in generic suggestions.",
        solution:
          "Implemented interactive onboarding quiz to gather style preferences, body measurements, and favorite brands. Combined with trend data to provide immediate personalization.",
      },
    ],
    impact: [
      { metric: "Conversion Rate", value: "+85%" },
      { metric: "Return Rate", value: "-45%" },
      { metric: "Average Order Value", value: "+$32" },
      { metric: "User Engagement", value: "18 min/session" },
    ],
    role: "Mobile Developer",
    team: "5 developers, 3 designers, 1 ML engineer",
    duration: "2 months",
    images: {
      hero: "fashion shopping mobile",
      screenshots: [
        "clothing e-commerce app",
        "fashion photography studio",
        "mobile shopping experience",
      ],
    },
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};
