import {
  Award,
  Brain,
  Calendar,
  Code,
  GraduationCap,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";

export function Skills() {
  const technicalSkills = [
    { name: "ReactJs", level: 95, category: "Frontend" },
    { name: "React Native", level: 98, category: "Mobile" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "Redux Toolkit", level: 88, category: "State Management" },
    { name: "React Navigation", level: 92, category: "Navigation" },
    { name: "React Native Reanimated", level: 85, category: "Animation" },
    { name: "Firebase", level: 80, category: "Backend" },
    { name: "REST APIs", level: 90, category: "Integration" },
    { name: "Git", level: 88, category: "Tools" },
    { name: "CI/CD", level: 75, category: "DevOps" },
    { name: "Jest", level: 82, category: "Testing" },
  ];

  const softSkills = [
    { skill: "Problem Solving", level: 95, icon: Brain },
    { skill: "Team Collaboration", level: 90, icon: Users },
    { skill: "Communication", level: 85, icon: Target },
    { skill: "Time Management", level: 88, icon: Calendar },
    { skill: "Adaptability", level: 92, icon: Zap },
    { skill: "Creativity", level: 87, icon: Award },
  ];

  const expertise = [
    {
      category: "Frontend Development",
      skills: [
        "React.js",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Styled Components",
      ],
      description: "Building responsive and performant user interfaces",
      icon: Code,
      color: "gradient-primary",
    },
    {
      category: "Mobile Development",
      skills: [
        "React Native",
        "iOS",
        "Android",
        "React Navigation",
        "Native Modules",
      ],
      description: "Cross-platform mobile app development and deployment",
      icon: Target,
      color: "gradient-secondary",
    },
    {
      category: "State Management",
      skills: ["Redux", "Redux Toolkit", "Context API", "React Query"],
      description: "Efficient application state management and data flow",
      icon: Brain,
      color: "gradient-accent",
    },
    {
      category: "Animation & UI",
      skills: ["React Native Reanimated", "Gesture Handler", "Lottie", "GSAP"],
      description:
        "Creating smooth animations and interactive user experiences",
      icon: Zap,
      color: "gradient-primary",
    },
    {
      category: "Backend Integration",
      skills: [
        "REST APIs",
        "GraphQL",
        "Firebase",
        "WebSocket",
        "Real-time Communication",
      ],
      description: "Seamless integration with backend services and databases",
      icon: Users,
      color: "gradient-secondary",
    },
    {
      category: "Development Tools",
      skills: [
        "Git",
        "Jest",
        "CI/CD",
        "App Store Deployment",
        "Play Store Deployment",
      ],
      description: "Modern development workflow and deployment processes",
      icon: Award,
      color: "gradient-accent",
    },
  ];

  const groupedTechnicalSkills = technicalSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof technicalSkills>);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-96 h-96 gradient-secondary rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-40 left-10 w-80 h-80 gradient-accent rounded-full blur-3xl opacity-10"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
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
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">
              Skills & Expertise
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl text-gradient mb-4">
            Technical Mastery
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical capabilities and
            professional competencies that drive innovation
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Expertise Areas */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl text-white text-center mb-8 flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 gradient-primary rounded-full"
              />
              Areas of Expertise
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full glass border-white/10 hover:border-white/20 transition-all duration-500 group">
                      <CardHeader className="relative">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div
                            className={`w-full h-full ${area.color} rounded-t-lg`}
                          />
                        </div>

                        <div className="relative z-10 flex items-center gap-3 mb-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-10 h-10 ${area.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <h4 className="text-lg text-white group-hover:text-gradient transition-all duration-300">
                            {area.category}
                          </h4>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed">
                          {area.description}
                        </p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-2">
                          {area.skills.map((skill, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.05, y: -1 }}
                              transition={{
                                duration: 0.2,
                                delay: 0.3 + i * 0.05,
                              }}
                              viewport={{ once: true }}
                            >
                              <Badge
                                variant="outline"
                                className="text-xs border-white/20 text-white/70 hover:border-primary hover:text-primary transition-all duration-300"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-5 h-5 text-primary" />
                    <h3 className="text-xl text-white">
                      Technical Proficiency
                    </h3>
                  </div>
                  <p className="text-white/60">
                    Technologies and frameworks I master
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(groupedTechnicalSkills).map(
                    ([category, skills], categoryIndex) => (
                      <div key={category} className="space-y-3">
                        <h4 className="text-sm text-primary font-medium">
                          {category}
                        </h4>
                        <div className="space-y-3">
                          {skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay:
                                  0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                              }}
                              viewport={{ once: true }}
                              className="space-y-2 group"
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-white group-hover:text-gradient transition-all duration-300">
                                  {skill.name}
                                </span>
                                <span className="text-xs text-white/60">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="relative">
                                <div className="w-full bg-white/10 rounded-full h-2">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{
                                      duration: 1.2,
                                      delay:
                                        0.6 +
                                        categoryIndex * 0.1 +
                                        skillIndex * 0.05,
                                      ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}
                                    className="h-full gradient-primary rounded-full relative overflow-hidden"
                                  >
                                    <motion.div
                                      animate={{ x: ["-100%", "100%"] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                      }}
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    />
                                  </motion.div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <h3 className="text-xl text-white">Professional Skills</h3>
                  </div>
                  <p className="text-white/60">
                    Core competencies that drive success
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {softSkills.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.skill}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="space-y-3 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                              <span className="text-sm text-white group-hover:text-gradient transition-all duration-300">
                                {item.skill}
                              </span>
                            </div>
                            <span className="text-xs text-white/60">
                              {item.level}%
                            </span>
                          </div>
                          <div className="relative">
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.level}%` }}
                                transition={{
                                  duration: 1,
                                  delay: 0.5 + index * 0.1,
                                  ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                className="h-full gradient-secondary rounded-full"
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="text-xl text-white">Education</h3>
                  </div>
                  <p className="text-white/60">Academic foundation</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-3 glass-dark rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div>
                        <h4 className="text-white group-hover:text-gradient transition-all duration-300">
                          Bachelor of Computer Applications (BCA)
                        </h4>
                        <p className="text-white/60 text-sm">
                          Geetanjali Group of Colleges
                        </p>
                      </div>
                      <span className="text-white/50 text-sm">2020 - 2023</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-3 glass-dark rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div>
                        <h4 className="text-white group-hover:text-gradient transition-all duration-300">
                          SSC & HSC
                        </h4>
                        <p className="text-white/60 text-sm">
                          Shree S.V. Virani High School
                        </p>
                      </div>
                      <span className="text-white/50 text-sm">2018 - 2020</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="glass border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl text-white mb-4">
                  Continuous Learning
                </h3>
                <p className="text-white/70 mb-6 max-w-3xl mx-auto leading-relaxed">
                  Technology evolves rapidly, and so do I. I'm committed to
                  staying at the forefront of modern development practices,
                  continuously updating my skills, and exploring new
                  technologies to deliver cutting-edge solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "Always Learning",
                    "Problem Solver",
                    "Team Player",
                    "Innovation Focused",
                  ].map((trait, index) => (
                    <motion.div
                      key={trait}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="gradient-primary text-white px-4 py-2 text-sm">
                        {trait}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
