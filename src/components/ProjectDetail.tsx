import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { type Project } from "../data/projectsData";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const Icon = project.icon;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getStatusConfig = (status: string) => {
    const configs = {
      ongoing: { label: "In Progress", className: "gradient-primary" },
      completed: { label: "Completed", className: "gradient-secondary" },
      published: { label: "Published", className: "gradient-accent" },
    };
    return configs[status as keyof typeof configs] || configs.completed;
  };

  const statusConfig = getStatusConfig(project.status);

  const heroImages: Record<string, string> = {
    "video platform development":
      "https://images.unsplash.com/photo-1726935068680-73cef7e8412b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHBsYXRmb3JtJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYwNTk0MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "payment app interface":
      "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MDU5NDA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "food delivery app":
      "https://images.unsplash.com/photo-1730817403166-36f03bec781a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzYwNTU2MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "modern architecture house":
      "https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob3VzZXxlbnwxfHx8fDE3NjA1MzQ4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "ui design components":
      "https://images.unsplash.com/photo-1562601555-513820e5d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGNvbXBvbmVudHN8ZW58MXx8fHwxNzYwNTk0MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "fashion shopping mobile":
      "https://images.unsplash.com/photo-1758520387491-f370ae7a1122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvcHBpbmclMjBtb2JpbGV8ZW58MXx8fHwxNzYwNTI1MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute top-20 right-10 w-96 h-96 ${project.color} rounded-full blur-3xl opacity-20`}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="outline"
              onClick={onBack}
              className="glass border-white/20 text-white hover:bg-white/10 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 ${project.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary mb-2"
                  >
                    {project.category}
                  </Badge>
                  <Badge
                    className={`${statusConfig.className} text-white border-none ml-2`}
                  >
                    {statusConfig.label}
                  </Badge>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl text-gradient mb-4">
                {project.shortTitle}
              </h1>

              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-xs text-white/60">Duration</div>
                  <div className="text-sm text-white mt-1">
                    {project.duration}
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <Users className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="text-xs text-white/60">Team</div>
                  <div className="text-sm text-white mt-1">
                    {project.team.split(",")[0]}
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <Clock className="w-5 h-5 text-secondary mx-auto mb-2" />
                  <div className="text-xs text-white/60">Role</div>
                  <div className="text-sm text-white mt-1">
                    {project.role.split(" ")[0]}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-3xl p-6 backdrop-blur-xl">
                <ImageWithFallback
                  src={
                    heroImages[project.images.hero] ||
                    heroImages["ui design components"]
                  }
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Detailed Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Zap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl text-gradient">Key Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {project.detailedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full glass border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`w-8 h-8 ${project.color} rounded-lg flex items-center justify-center shrink-0 mt-1`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg text-white mb-2 group-hover:text-gradient transition-all">
                            {feature.title}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Target className="w-6 h-6 text-accent" />
              <h2 className="text-3xl text-gradient-secondary">
                Technology Stack
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.techDetails.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-white mb-2">{tech.name}</h3>
                      <p className="text-white/60 text-sm">{tech.purpose}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Lightbulb className="w-6 h-6 text-secondary" />
              <h2 className="text-3xl text-gradient-accent">
                Challenges & Solutions
              </h2>
            </div>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300">
                    <CardHeader className="relative">
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 ${project.color}`}
                      />
                      <h3 className="text-xl text-white pl-6 group-hover:text-gradient transition-all">
                        {challenge.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="pl-6 pr-6 pb-6">
                      <div className="mb-4">
                        <div className="text-xs text-primary mb-2 uppercase tracking-wide">
                          Challenge
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                      <div>
                        <div className="text-xs text-accent mb-2 uppercase tracking-wide">
                          Solution
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {challenge.solution}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact & Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-3xl text-gradient">Impact & Results</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.impact.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl text-gradient mb-2">
                        {item.value}
                      </div>
                      <div className="text-sm text-white/60">{item.metric}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="glass border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-12">
                <h3 className="text-3xl text-gradient mb-4">
                  Interested in Similar Projects?
                </h3>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
                  Let's collaborate and build something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    onClick={() => {
                      onBack();
                      setTimeout(() => {
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                  >
                    Get In Touch
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/20 text-white hover:bg-white/10"
                    onClick={onBack}
                  >
                    View All Projects
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
