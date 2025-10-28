import {
  CarFront,
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
  heroImage: string;
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
  mobileSpecificFeatures?: string[];
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
}

export const projectsData: Project[] = [
  {
    id: "ras",
    heroImage:
      "https://images.unsplash.com/photo-1685091955352-4bb8796aef12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1071",
    title: "RAS – Rent A Self Drive Management System",
    shortTitle: "RAS",
    period: "Aug 2024 - Jan 2025",
    description:
      "Comprehensive car rental management platform with advanced analytics, multi-branch operations, and real-time business intelligence for streamlined fleet management.",
    fullDescription:
      "RAS (Rent A Self Drive) is a sophisticated enterprise-grade car rental management system that revolutionizes fleet operations through intelligent automation and data-driven insights. The platform provides end-to-end management of rental operations, from customer onboarding to vehicle maintenance, with advanced analytics and reporting capabilities. Built with modern web technologies, RAS offers seamless multi-branch management, real-time tracking, and comprehensive business intelligence tools that enable rental businesses to optimize their operations and maximize profitability.",
    features: [
      "Multi-branch rental operations with centralized management",
      "Real-time dashboard with advanced analytics and KPI tracking",
      "Comprehensive booking management with automated workflows",
      "Customer relationship management with detailed profiles",
      "Fleet management with maintenance scheduling and tracking",
      "Financial reporting with revenue and profit analysis",
      "Role-based access control with granular permissions",
      "Advanced reporting system with export capabilities",
    ],
    detailedFeatures: [
      {
        title: "Intelligent Dashboard & Analytics",
        description:
          "Real-time business intelligence with interactive charts showing booking trends, revenue analysis, customer acquisition metrics, payment method distribution, and profit/loss tracking with year-over-year comparisons.",
      },
      {
        title: "Multi-Branch Operations Management",
        description:
          "Centralized control over multiple rental locations with branch-specific analytics, inventory management, staff allocation, and performance tracking with seamless data synchronization.",
      },
      {
        title: "Advanced Booking System",
        description:
          "Comprehensive booking management with advance reservations, real-time availability checking, automated pricing calculations, extension handling, and integrated payment processing.",
      },
      {
        title: "Fleet & Maintenance Management",
        description:
          "Complete vehicle lifecycle management including maintenance scheduling, service tracking, availability optimization, and automated alerts for service requirements and renewals.",
      },
      {
        title: "Customer Management System",
        description:
          "Detailed customer profiles with booking history, payment tracking, feedback management, and automated communication workflows for enhanced customer experience.",
      },
      {
        title: "Financial Management & Reporting",
        description:
          "Comprehensive financial tracking with revenue analysis, expense management, profit calculations, tax reporting, and customizable financial reports with export capabilities.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "Material-UI",
      "ApexCharts",
      "Axios",
    ],
    techDetails: [
      {
        name: "Next.js 14 with App Router",
        purpose:
          "Modern React framework with server-side rendering and optimized performance",
      },
      {
        name: "TypeScript",
        purpose:
          "Type-safe development with enhanced code quality and maintainability",
      },
      {
        name: "Redux Toolkit",
        purpose: "Efficient state management",
      },
      {
        name: "Tailwind CSS + Component Libraries",
        purpose:
          "Responsive design system with pre-built components for rapid development",
      },
      {
        name: "ApexCharts",
        purpose:
          "Interactive data visualization for business analytics and reporting",
      },
      {
        name: "Advanced Authentication",
        purpose:
          "Role-based access control with granular permissions and secure routing",
      },
    ],
    category: "Business Management",
    icon: CarFront,
    color: "gradient-accent",
    status: "active",
    challenges: [
      {
        title: "Complex Multi-Branch Data Management",
        description:
          "Managing real-time data synchronization across multiple branches while maintaining data consistency and performance.",
        solution:
          "Implemented efficient state management with Redux Toolkit and TanStack Query for optimized caching and real-time updates, with branch-specific data filtering and aggregation.",
      },
      {
        title: "Advanced Analytics & Reporting",
        description:
          "Creating comprehensive business intelligence dashboards with complex data visualizations and real-time metrics.",
        solution:
          "Built interactive dashboard using ApexCharts with multiple chart types, real-time data updates, and responsive design. Implemented efficient data processing for year-over-year comparisons and trend analysis.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Implementing granular permission system for different user roles (Admin, Employee, Manager) with secure route protection.",
        solution:
          "Developed custom permission hooks and middleware for route protection, with dynamic UI rendering based on user permissions and secure API access control.",
      },
      {
        title: "Performance Optimization",
        description:
          "Ensuring fast load times and smooth user experience with large datasets and complex UI components.",
        solution:
          "Implemented code splitting, lazy loading, memoization techniques, and optimized bundle size. Used Next.js 14 features for enhanced performance and SEO.",
      },
    ],
    impact: [
      { metric: "Operational Efficiency", value: "85% ↑" },
      { metric: "Data Processing Speed", value: "3x Faster" },
    ],
    role: "Frontend Developer",
    team: "3 developers",
    duration: "5+ months",
  },
  {
    id: "ras-mobile",
    title:
      "RAS – Rent A Self Drive Management System (Mobile App for iOS/Android)",
    shortTitle: "RAS Mobile (iOS/Android)",
    period: "Aug 2024 - Jan 2025",
    description:
      "Enterprise-grade React Native mobile application for car rental management with real-time analytics, offline capabilities, and seamless field operations integration.",
    fullDescription:
      "RAS Mobile is a sophisticated React Native application that brings enterprise car rental management to mobile devices. Built with modern React Native architecture, the app provides field staff and managers with comprehensive tools for managing bookings, customer verification, vehicle inspections, and real-time business analytics. The application features offline-first architecture, advanced camera integration for document verification, and seamless synchronization with the web platform for unified business operations.",
    features: [
      "Real-time dashboard with business analytics and KPI tracking",
      "Comprehensive booking management with on-field capabilities",
      "Advanced customer verification with document scanning",
      "Vehicle inspection and maintenance tracking",
      "Offline-first architecture with data synchronization",
      "Camera integration for photo/video documentation",
      "Multi-branch operations with role-based access",
      "Real-time notifications and status updates",
    ],
    detailedFeatures: [
      {
        title: "Mobile Dashboard & Analytics",
        description:
          "Real-time business intelligence dashboard showing booking trends, active rentals, expected closures, and sales data with percentage comparisons and payment method breakdowns optimized for mobile viewing.",
      },
      {
        title: "Field Booking Management",
        description:
          "Complete booking lifecycle management including new bookings, advance reservations, booking modifications, extensions, and closures with real-time status updates and progress tracking.",
      },
      {
        title: "Customer Verification System",
        description:
          "Advanced customer onboarding with Aadhaar verification, document scanning using device camera, photo capture, and comprehensive customer profile management with booking history.",
      },
      {
        title: "Vehicle Management & Inspection",
        description:
          "Mobile vehicle inspection tools with photo/video documentation, maintenance scheduling, service tracking, and real-time availability updates with GPS integration.",
      },
      {
        title: "Offline-First Architecture",
        description:
          "Robust offline capabilities with local data storage, automatic synchronization when online, and seamless user experience regardless of network connectivity status.",
      },
      {
        title: "Advanced Camera Integration",
        description:
          "Professional camera functionality for document capture, vehicle inspection photos, damage documentation, and video recording with review capabilities and automatic upload.",
      },
    ],
    techStack: [
      "React Native",
      "React",
      "Redux Toolkit",
      "RTK Query",
      "React Navigation 6",
      "TypeScript",
      "React Native Camera",
      "AsyncStorage",
      "Lottie Animations",
      "React Native Reanimated",
    ],
    techDetails: [
      {
        name: "React Native with New Architecture",
        purpose:
          "Latest React Native with Fabric renderer and TurboModules for enhanced performance and native integration",
      },
      {
        name: "Redux Toolkit + RTK Query",
        purpose:
          "Efficient state management with automatic caching, background sync, and optimistic updates for seamless user experience",
      },
      {
        name: "React Navigation 6 with Stack & Tab Navigation",
        purpose:
          "Advanced navigation system with deep linking, authentication flows, and smooth transitions",
      },
      {
        name: "Advanced Camera Integration",
        purpose:
          "Professional camera functionality with document scanning, video recording, and media management capabilities",
      },
      {
        name: "Offline-First Architecture",
        purpose:
          "AsyncStorage with automatic synchronization, network detection, and seamless offline/online transitions",
      },
      {
        name: "Performance Optimizations",
        purpose:
          "Lazy loading, memoization, efficient re-renders, and optimized bundle size for smooth mobile experience",
      },
    ],
    challenges: [
      {
        title: "Offline-First Architecture Implementation",
        description:
          "Building robust offline capabilities while maintaining data consistency and seamless synchronization across multiple data sources.",
        solution:
          "Implemented Redux Toolkit with RTK Query for intelligent caching, AsyncStorage for local persistence, and NetInfo for network state management with automatic retry mechanisms and conflict resolution.",
      },
      {
        title: "Advanced Camera & Media Management",
        description:
          "Integrating professional camera functionality for document scanning, video recording, and media management with cross-platform compatibility.",
        solution:
          "Utilized React Native Camera with custom video recording, image picker integration, and built comprehensive media preview and management system with automatic compression and upload queuing.",
      },
      {
        title: "Complex Navigation & State Management",
        description:
          "Managing complex navigation flows with authentication, role-based routing, and maintaining state across multiple screens and user sessions.",
        solution:
          "Implemented React Navigation 6 with custom authentication flows, Redux Toolkit for global state management, and session persistence with automatic logout and security features.",
      },
      {
        title: "Performance Optimization for Large Datasets",
        description:
          "Ensuring smooth performance when handling large booking lists, customer data, and real-time updates on mobile devices.",
        solution:
          "Implemented FlatList optimizations, lazy loading, memoization techniques, and efficient data pagination with background refresh and intelligent caching strategies.",
      },
    ],
    mobileSpecificFeatures: [
      "Native camera integration for document verification",
      "Offline data synchronization with conflict resolution",
      "Push notifications for booking updates",
      "GPS integration for location-based services",
      "Biometric authentication support",
      "Device storage optimization",
      "Network-aware data loading",
      "Cross-platform compatibility (iOS/Android)",
    ],
    impact: [
      { metric: "Operations Efficiency", value: "90% ↑" },
      { metric: "Mobile Response Time", value: "<2s" },
    ],
    role: "Lead Mobile Developer & Architecture Designer",
    team: "3 developers",
    duration: "5+ months",
    category: "Mobile Application Development",
    heroImage:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    icon: CarFront,
    color: "gradient-accent",
    status: "active",
  },
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
    team: "5 developers",
    duration: "24 months (ongoing)",
    heroImage:
      "https://images.unsplash.com/photo-1623475329493-889804e377f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
  },
  {
    id: "ratnaafin",
    title: "Ratnaafin – NBFC Financial Platform",
    shortTitle: "Ratnaafin",
    period: "Nov 2023 - Dec 2023",
    description:
      "Comprehensive NBFC (Non-Banking Financial Company) web platform for MSME loan services with advanced financial tools, admin management, and seamless user experience.",
    fullDescription:
      "Ratnaafin is a sophisticated financial technology platform designed specifically for MSMEs (Micro, Small & Medium Enterprises) seeking various loan products. The platform serves as a comprehensive digital gateway for businesses to access working capital loans, machinery loans, business loans, and specialized financing solutions. Built with modern web technologies, it features an intuitive user interface, real-time EMI calculations, document management, and a powerful admin dashboard for managing the entire loan lifecycle from application to approval.",
    features: [
      "Multi-product loan application system with 8+ loan types",
      "Interactive EMI calculator with real-time calculations and visual charts",
      "Comprehensive admin dashboard with role-based access control",
      "Document upload and verification system with secure storage",
      "Dynamic content management for blogs, FAQs, and branch locations",
      "Advanced SEO optimization with sitemap generation and meta management",
    ],
    detailedFeatures: [
      {
        title: "Comprehensive Loan Portfolio",
        description:
          "Support for multiple loan products including Working Capital Loan, Machinery Loan, Business Loan, MSME Loan, Loan Against Property, Supply Chain Finance (Sales Invoice Discounting, Purchase Invoice, Dealer Finance, Vendor Finance), Revenue Based Finance, and Solar Loans with dedicated pages and customized application flows.",
      },
      {
        title: "Advanced EMI Calculator",
        description:
          "Interactive loan calculator with dynamic sliders for loan amount (₹5L-₹2Cr), interest rates (10-25%), and tenure (12-72 months). Features real-time calculations, pie chart visualizations, and detailed breakdowns of principal and interest components with instant EMI updates.",
      },
      {
        title: "Robust Admin Management System",
        description:
          "Comprehensive dashboard for managing users, loan applications, blog content, branch locations, job postings, CRM operations, and system configurations. Includes role-based access control, data analytics, and reporting capabilities.",
      },
      {
        title: "Intelligent Application System",
        description:
          "Multi-step loan application process with form validation, document upload functionality, eligibility verification, and automated routing. Includes thank-you pages, email notifications, and application tracking with real-time status updates.",
      },
      {
        title: "Performance-Optimized Architecture",
        description:
          "Built with Next.js 15 App Router, featuring server-side rendering, dynamic imports, image optimization, lazy loading, and service worker implementation. Includes Redux state management, cookie consent, and advanced caching strategies.",
      },
      {
        title: "Content Management & SEO",
        description:
          "Dynamic blog system with CKEditor integration, FAQ management, branch locator with map integration, social media sharing, newsletter subscriptions, and comprehensive SEO optimization with structured data and sitemap generation.",
      },
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Material-UI",
      "Redux Toolkit",
    ],
    techDetails: [
      {
        name: "Next.js 15 & React 19",
        purpose:
          "Modern full-stack framework with App Router, server components, and advanced rendering capabilities",
      },
      {
        name: "TypeScript",
        purpose:
          "Type-safe development with enhanced code quality and developer experience",
      },
      {
        name: "Tailwind CSS & Material-UI",
        purpose:
          "Responsive design system with pre-built components and consistent styling",
      },
      {
        name: "Redux Toolkit & Redux Persist",
        purpose:
          "Centralized state management with data persistence and optimistic updates",
      },
      {
        name: "CKEditor 5 & ApexCharts",
        purpose:
          "Rich text editing for content management and interactive data visualizations",
      },
      {
        name: "Axios & Crypto-js",
        purpose:
          "HTTP client for API communication and encryption for sensitive data handling",
      },
    ],
    category: "FinTech",
    icon: CreditCard,
    color: "gradient-secondary",
    status: "completed",
    challenges: [
      {
        title: "Complex Financial Calculations",
        description:
          "Implementing accurate EMI calculations with multiple variables (loan amount, interest rates, tenure) while ensuring real-time updates and visual representations.",
        solution:
          "Built a sophisticated calculation engine using mathematical formulas for compound interest, integrated with Material-UI sliders for smooth user interaction, and ApexCharts for visual data representation with optimized re-rendering.",
      },
      {
        title: "Multi-Product Architecture",
        description:
          "Managing 8+ different loan products with unique eligibility criteria, documentation requirements, and application flows while maintaining code reusability.",
        solution:
          "Implemented a modular component architecture with shared components for common functionality, dynamic routing with Next.js App Router, and configuration-driven product pages with reusable form components and validation logic.",
      },
      {
        title: "Performance & SEO Optimization",
        description:
          "Ensuring fast load times, optimal SEO performance, and smooth user experience across different devices and network conditions.",
        solution:
          "Leveraged Next.js 15 features including server components, dynamic imports, image optimization, and implemented comprehensive SEO strategy with structured data, sitemap generation, and performance monitoring with Web Vitals tracking.",
      },
    ],
    impact: [
      // { metric: "Loan Products Supported", value: "8+" },
      // { metric: "Page Load Speed", value: "<2s" },
      { metric: "Mobile Responsiveness", value: "100%" },
      { metric: "SEO Performance Score", value: "95+" },
    ],
    role: "Frontend Developer",
    team: "Solo developer",
    duration: "2 months",
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
    team: "4 developers",
    duration: "2 months",
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
    team: "3 developers",
    duration: "2 months",
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
    team: "Solo project",
    duration: "2 months (+ ongoing maintenance)",
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
    team: "5 developers",
    duration: "2 months",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};
