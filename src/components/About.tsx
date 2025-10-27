import {
  Code2,
  Gamepad2,
  Globe,
  Heart,
  Music,
  Target,
  User,
  Zap,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function About() {
  const interests = [
    { icon: Code2, label: "Emerging Tech", color: "text-blue-400" },
    { icon: Heart, label: "Open Source", color: "text-red-400" },
    { icon: Zap, label: "UI/UX Design", color: "text-yellow-400" },
    { icon: Target, label: "Best Practices", color: "text-green-400" },
    { icon: Music, label: "Music", color: "text-purple-400" },
    { icon: Gamepad2, label: "Gaming", color: "text-pink-400" },
  ];

  const languages = [
    { name: "English", level: "Proficient", percentage: 85 },
    { name: "Hindi", level: "Fluent", percentage: 95 },
    { name: "Gujarati", level: "Native", percentage: 100 },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 gradient-primary rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 gradient-secondary rounded-full blur-3xl opacity-10"
        />
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
            <User className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
          </motion.div>
          <h2 className="text-3xl leading-relaxed md:text-5xl text-gradient mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Passionate about creating innovative solutions and staying current
            with the latest industry trends
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="glass rounded-3xl p-6 backdrop-blur-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGNvZGluZ3xlbnwxfHx8fDE3NTk0ODYyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional Developer"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>

              {/* Floating Achievement Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-gradient">5+</div>
                <div className="text-xs text-white/60">Tech Stacks</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-gradient-secondary">
                  15+
                </div>
                <div className="text-xs text-white/60">Libraries</div>
              </motion.div>
            </motion.div>

            {/* Languages Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-primary" />
                    <h3 className="text-xl text-white">Languages</h3>
                  </div>
                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white">{lang.name}</span>
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary"
                          >
                            {lang.level}
                          </Badge>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.percentage}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.8 + index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="h-full gradient-primary rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Professional Summary */}
            <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl text-white mb-4">
                  Professional Summary
                </h3>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    Seeking a challenging role as a React / React Native
                    Developer where I can leverage my expertise in creating
                    efficient, scalable mobile applications and contribute to
                    innovative projects.
                  </p>
                  <p>
                    Experienced React / React Native Developer with over 2 years
                    of expertise in creating efficient, scalable mobile
                    applications using ReactJs, React Native, JavaScript, and
                    TypeScript. Proven track record in implementing complex
                    animations and integrating various libraries to create
                    smooth, engaging user experiences.
                  </p>
                  <p>
                    Dedicated to writing clean, maintainable code and staying
                    updated with the latest industry trends and best practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Interests & Passion */}
            <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl text-white mb-6">Interests & Passion</h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest) => {
                    const Icon = interest.icon;

                    return (
                      <motion.div
                        key={interest.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.2, delay: -1 }}
                        className="flex items-center gap-3 p-3 glass-dark rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                      >
                        <Icon
                          className={`w-5 h-5 ${interest.color} group-hover:scale-110 transition-transform`}
                        />
                        <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                          {interest.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl text-white mb-4">What Drives Me</h3>
                <div className="space-y-3">
                  {[
                    "Building scalable, performant applications",
                    "Creating seamless user experiences",
                    "Implementing cutting-edge animations",
                    "Contributing to open-source projects",
                    "Continuous learning and skill development",
                    "Collaborating with talented teams",
                  ].map((item, index) => {
                    const childVariants: Variants = {
                      hovered: { scale: 1.5 },
                    };

                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.4,
                            delay: 0.8 + index * 0.1,
                          },
                        }}
                        viewport={{ once: true }}
                        whileHover="hovered"
                        className="flex items-start gap-3 group"
                      >
                        <motion.div
                          variants={childVariants}
                          transition={{ delay: 0 }}
                          className="w-1.5 h-1.5 gradient-primary rounded-full mt-3 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all"
                        />
                        <span className="text-white/70 group-hover:text-white transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
