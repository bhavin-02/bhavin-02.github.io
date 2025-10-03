import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Briefcase, Trophy, Rocket, Users, Code, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Mighty Ventures",
      location: "ReactJS / NextJS / React Native Developer",
      period: "Aug 2024 - Present",
      status: "current",
      achievements: [
        "Led the architecture and development of scalable web and mobile applications & web using ReactJS, NextJS, and React Native",
        "Spearheaded the development of responsive, pixel-perfect UI with a strong focus on performance and scalability",
        "Led web design initiatives ensuring consistent design language and user-centric interfaces across platforms"
      ],
      techStack: ["React Native", "TypeScript", "Redux Toolkit", "React Native Reanimated", "Firebase", "Socket.IO", "React Navigation", "Lottie Animations"],
      icon: Rocket,
      color: "gradient-primary"
    },
    {
      title: "React Native Developer",
      company: "Acquaint SoftTech",
      period: "Nov 2023 - Jun 2024",
      achievements: [
        "Specialized in React Native development, focusing on creating seamless cross-platform experiences",
        "Implemented complex animations using React Native Reanimated, enhancing user engagement",
        "Created and integrated custom npm libraries with native code, improving development efficiency",
        "Developed versatile UI kits in React Native, accelerating project timelines and ensuring consistency"
      ],
      projects: [
        {
          name: "PerdiUI – UI components library",
          description: "Cutting-edge user interface toolkit with comprehensive set of customizable components styled by Tailwind CSS",
          techStack: ["React Native", "Tailwind CSS"]
        },
        {
          name: "Fashion App UI",
          description: "Complete shopping application UI with facilities like shopping applications, product pages, and shopping cart",
          techStack: ["React Native", "React Native Reanimated"]
        },
        {
          name: "Payment App UI",
          description: "Payment management application UI for managing all types of payments and expenses",
          techStack: ["React Native", "React Native Reanimated"]
        }
      ],
      icon: Code,
      color: "gradient-secondary"
    },
    {
      title: "React / React Native Developer",
      company: "LNX Cloud Technology",
      period: "Jan 2022 - Nov 2023",
      achievements: [
        "Led React Native projects, ensuring timely delivery and high-quality code",
        "Utilized TypeScript and various React / React Native libraries to build robust applications",
        "Developed feature-rich social media applications with complex user interactions",
        "Optimized app performance by implementing efficient state management techniques"
      ],
      projects: [
        {
          name: "GreenLync – Social Networking App",
          description: "Feature-rich social networking app for cannabis enthusiasts, incorporating real-time messaging and community forums",
          techStack: ["React", "React Native", "AWS DynamoDB", "Redux Toolkit", "WebSocket"]
        },
        {
          name: "Ponder – Interactive Polling Platform",
          description: "Dynamic poll creation and voting platform, enabling users to gather insights and make informed decisions",
          techStack: ["React Native", "AWS PostgreSQL", "Redux Toolkit", "React Native Reanimated"]
        },
        {
          name: "Tiles Album",
          description: "Creative app for designing and sharing custom tile layouts, with cloud storage and social sharing features",
          techStack: ["React Native", "Django", "Redux Toolkit", "React Native Gesture Handler"]
        }
      ],
      icon: Users,
      color: "gradient-accent"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-10 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-10"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
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
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">Professional Journey</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl text-gradient mb-4">
            Experience & Growth
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A journey through my professional growth and key contributions in mobile and web development
          </p>
        </motion.div>

        {/* Hero Image */}
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
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTk0MDc5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Collaboration"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
              
              {/* Floating metrics */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-4 -left-4 glass rounded-2xl p-4 text-center"
              >
                <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-gradient">3</div>
                <div className="text-xs text-white/60">Companies</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 text-center"
              >
                <Target className="w-6 h-6 text-green-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-gradient-secondary">8+</div>
                <div className="text-xs text-white/60">Projects</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-white/10 hover:border-white/20 transition-all duration-500 group overflow-hidden">
                  <CardHeader className="relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className={`w-full h-full ${exp.color} rounded-t-lg`} />
                    </div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-12 h-12 ${exp.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl text-white">{exp.title}</h3>
                            {exp.status === 'current' && (
                              <Badge className="gradient-primary text-white border-none text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          <p className="text-primary font-medium">{exp.company}</p>
                          {exp.location && (
                            <p className="text-white/60 text-sm flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-white/60">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg text-white mb-4 flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-2 h-2 gradient-primary rounded-full"
                        />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group/item"
                          >
                            <motion.div
                              whileHover={{ scale: 1.5, rotate: 90 }}
                              className="w-1.5 h-1.5 gradient-primary rounded-full mt-2.5 group-hover/item:shadow-lg group-hover/item:shadow-primary/50 transition-all"
                            />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    {exp.techStack && (
                      <div>
                        <h4 className="text-lg text-white mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 gradient-secondary rounded-full" />
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Badge 
                                variant="outline" 
                                className="border-white/20 text-white/80 hover:border-primary hover:text-primary transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Projects */}
                    {exp.projects && (
                      <div>
                        <h4 className="text-lg text-white mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 gradient-accent rounded-full" />
                          Notable Projects
                        </h4>
                        <div className="grid gap-4">
                          {exp.projects.map((project, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              whileHover={{ y: -2, scale: 1.01 }}
                              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                              viewport={{ once: true }}
                              className="glass-dark rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group/project"
                            >
                              <h5 className="font-medium text-white mb-2 group-hover/project:text-gradient transition-all">
                                {project.name}
                              </h5>
                              <p className="text-white/60 text-sm mb-3 leading-relaxed">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {project.techStack.map((tech, j) => (
                                  <Badge 
                                    key={j} 
                                    variant="outline" 
                                    className="text-xs border-white/10 text-white/50 group-hover/project:border-primary/30 group-hover/project:text-primary/70 transition-all"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}