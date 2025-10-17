import { Calendar, ExternalLink, Smartphone } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { projectsData } from "../data/projectsData";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

interface ProjectsProps {
  onProjectClick?: (projectId: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  // const projects = [
  //   {
  //     title: "Klipzy – Video Sharing Platform",
  //     period: "Jan 2023 - Present",
  //     description:
  //       "Creative video sharing platform with advanced editing tools, social features, and real-time collaboration capabilities for content creators.",
  //     features: [
  //       "Advanced video editing with filters and effects",
  //       "Real-time collaboration and commenting system",
  //       "Social sharing with engagement analytics",
  //       "Cloud storage with seamless synchronization",
  //     ],
  //     techStack: [
  //       "React Native",
  //       "Django",
  //       "Redux Toolkit",
  //       "React Native Gesture Handler",
  //       "WebRTC",
  //     ],
  //     category: "Video Platform",
  //     icon: Play,
  //     color: "gradient-primary",
  //     status: "ongoing",
  //   },
  //   {
  //     title: "Ratnaalin – Payment Management",
  //     period: "Nov 2023 - Dec 2023",
  //     description:
  //       "Comprehensive payment management system for handling all types of card transactions, bank accounts, and financial operations with enterprise-grade security.",
  //     features: [
  //       "Multi-card payment processing with secure encryption",
  //       "Bank account integration and management",
  //       "Real-time transaction tracking and reporting",
  //       "Expense categorization and budget management",
  //     ],
  //     techStack: [
  //       "React Native",
  //       "React Native Reanimated",
  //       "Secure Storage",
  //       "Payment APIs",
  //     ],
  //     category: "FinTech",
  //     icon: CreditCard,
  //     color: "gradient-secondary",
  //     status: "completed",
  //   },
  //   {
  //     title: "Glover Customer App UI",
  //     period: "Nov 2023 - Dec 2023",
  //     description:
  //       "Modern e-commerce ecosystem with 3 integrated platforms: Driver, Vendor, and Customer applications with real-time order management.",
  //     features: [
  //       "Multi-platform ecosystem with seamless integration",
  //       "Real-time order tracking and notifications",
  //       "Advanced product catalog with search and filtering",
  //       "Integrated payment gateway and order management",
  //     ],
  //     techStack: [
  //       "React Native",
  //       "React Native Reanimated",
  //       "Socket.IO",
  //       "Maps API",
  //     ],
  //     category: "E-commerce",
  //     icon: ShoppingBag,
  //     color: "gradient-accent",
  //     status: "completed",
  //   },
  //   {
  //     title: "Real Estate UI Platform",
  //     period: "Nov 2023 - Dec 2023",
  //     description:
  //       "Comprehensive real estate application for property search, management, and transactions with advanced mapping and virtual tour capabilities.",
  //     features: [
  //       "Advanced property search with multiple filters",
  //       "Interactive property listings with detailed information",
  //       "Geolocation-based property discovery",
  //       "Virtual tours and 360° property views",
  //     ],
  //     techStack: [
  //       "React Native",
  //       "React Native Reanimated",
  //       "Maps SDK",
  //       "AR Kit",
  //     ],
  //     category: "Real Estate",
  //     icon: Home,
  //     color: "gradient-primary",
  //     status: "completed",
  //   },
  //   {
  //     title: "PerdiUI – Component Library",
  //     period: "Nov 2023 - Dec 2023",
  //     description:
  //       "Cutting-edge React Native UI component library with comprehensive set of customizable components, designed for modern mobile applications.",
  //     features: [
  //       "50+ pre-built customizable components",
  //       "Tailwind CSS integration for consistent styling",
  //       "TypeScript support with full type definitions",
  //       "Comprehensive documentation and examples",
  //     ],
  //     techStack: ["React Native", "Tailwind CSS", "TypeScript", "Storybook"],
  //     category: "UI Library",
  //     icon: Palette,
  //     color: "gradient-secondary",
  //     status: "published",
  //   },
  //   {
  //     title: "Fashion Mobile App",
  //     period: "Oct 2023 - Nov 2023",
  //     description:
  //       "Elegant fashion e-commerce mobile application with advanced product visualization, personalized recommendations, and seamless checkout experience.",
  //     features: [
  //       "Advanced product catalog with AR try-on",
  //       "Personalized recommendation engine",
  //       "Social shopping and sharing features",
  //       "One-click checkout with multiple payment options",
  //     ],
  //     techStack: [
  //       "React Native",
  //       "React Native Reanimated",
  //       "AR Core",
  //       "Machine Learning",
  //     ],
  //     category: "Fashion",
  //     icon: Smartphone,
  //     color: "gradient-accent",
  //     status: "completed",
  //   },
  // ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      ongoing: { label: "In Progress", className: "gradient-primary" },
      completed: { label: "Completed", className: "gradient-secondary" },
      published: { label: "Published", className: "gradient-accent" },
    };
    return (
      statusConfig[status as keyof typeof statusConfig] ||
      statusConfig.completed
    );
  };

  const childVariants: Variants = {
    hovered: { scale: 1.5, transition: { delay: -1 } },
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-10"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary mb-4"
          >
            <Smartphone className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">
              Featured Work
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl text-gradient mb-4">
            Project Showcase
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A collection of my recent work demonstrating expertise in mobile
            development, UI/UX design, and innovative solutions
          </p>
        </motion.div>

        {/* Hero Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-6 backdrop-blur-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644794472051-36d154dfe487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmUlMjBjb2Rpbmd8ZW58MXx8fHwxNzU5NDg2MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mobile App Development"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            </div>

            {/* Floating project stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 glass rounded-2xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-gradient">6+</div>
              <div className="text-xs text-white/60">Projects</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-gradient-secondary">
                10+
              </div>
              <div className="text-xs text-white/60">Tech Stacks</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            const statusBadge = getStatusBadge(project.status);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass border-white/10 hover:border-white/20 transition-all duration-500 group overflow-hidden">
                  <CardHeader className="relative">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className={`w-full h-full ${project.color} rounded-t-lg`}
                      />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ delay: 0 }}
                            className={`w-10 h-10 ${project.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <div>
                            <Badge
                              variant="outline"
                              className="border-primary/30 text-primary text-xs mb-2"
                            >
                              {project.category}
                            </Badge>
                            <Badge
                              className={`${statusBadge.className} text-white border-none text-xs ml-2`}
                            >
                              {statusBadge.label}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl text-white mb-2 group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-1 text-white/50 text-sm mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 space-y-6">
                    <p className="text-white/70 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-sm text-white mb-3 flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-1.5 h-1.5 gradient-primary rounded-full"
                        />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover="hovered"
                            className="flex items-start gap-2 text-sm text-white/60 hover:text-white/80 transition-colors group/item"
                          >
                            <motion.div
                              variants={childVariants}
                              transition={{ delay: 0 }}
                              className="w-1 h-1 gradient-secondary rounded-full mt-2 group-hover/item:shadow-sm group-hover/item:shadow-primary/50 transition-all"
                            />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm text-white mb-3 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 gradient-accent rounded-full" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -1 }}
                            transition={{ duration: 0.2, delay: 0 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs border-white/20 text-white/60 hover:border-primary hover:text-primary transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 glass border-white/20 text-white hover:bg-white/10 hover:shadow-lg transition-all duration-300 group/btn"
                        onClick={() => onProjectClick?.(project.id)}
                      >
                        <ExternalLink className="w-3 h-3 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl text-white mb-4">
                Interested in My Work?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                These projects represent just a glimpse of what I can create.
                Let's discuss your next project and build something amazing
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <motion.div whileHover={{ rotate: 15 }} className="mr-2">
                    💼
                  </motion.div>
                  Let's Work Together
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass border-white/20 text-white hover:bg-white/10 hover:shadow-lg transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "mailto:bhavingj172@gmail.com?subject=Project Inquiry"
                    )
                  }
                >
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
