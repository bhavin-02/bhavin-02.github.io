import {
  ArrowDown,
  Code,
  GithubIcon,
  Linkedin,
  Mail,
  Phone,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { URLS } from "../constants/constants";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const skills = [
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Mobile Apps",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-20 left-20 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="absolute bottom-20 right-20 w-80 h-80 gradient-secondary rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: mousePosition.x * 0.015,
            y: mousePosition.y * 0.015,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 gradient-accent rounded-full blur-3xl opacity-15"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 text-primary"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wider uppercase">
                  Creative Developer
                </span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="text-gradient">Bhavin</span>
                  <br />
                  <span className="text-white">Gunjariya</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl md:text-2xl text-white/80 h-8 flex items-center gap-2"
                >
                  <Code className="w-6 h-6 text-primary" />
                  <span>I build amazing </span>
                  <motion.span
                    key={currentSkill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-gradient font-semibold"
                  >
                    {skills[currentSkill]}
                  </motion.span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-lg text-white/70 leading-relaxed max-w-xl"
                >
                  Passionate React & React Native developer with 2+ years of
                  experience crafting beautiful, performant mobile applications
                  and web experiences that users love.
                </motion.p>
              </div>
            </motion.div>

            {/* Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => window.open("mailto:bhavingj172@gmail.com")}
                className="gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                size="lg"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="glass border-white/20 text-white hover:bg-white/10 hover:shadow-lg transition-all duration-300 group"
                size="lg"
              >
                <ArrowDown className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                View Work
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-4"
            >
              <span className="text-white/50 text-sm">Connect with me:</span>
              <div className="flex gap-3">
                {[
                  {
                    icon: Linkedin,
                    href: URLS.LINKED_IN,
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: GithubIcon,
                    href: URLS.GITHUB,
                    color: "hover:text-gray-300",
                  },
                  {
                    icon: Phone,
                    href: URLS.PHONE_NUMBER,
                    color: "hover:text-green-400",
                  },
                ].map(({ icon: Icon, href, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: -1 }}
                    className={`w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 ${color} transition-all duration-300 hover:shadow-lg`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateX: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="glass rounded-3xl p-6 backdrop-blur-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1624948384140-e48e47087fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb21wdXRlciUyMGNvZGluZ3xlbnwxfHx8fDE3NTk0ODYyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Modern Developer Workspace"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -top-4 -left-4 glass rounded-2xl p-4"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">2+</div>
                    <div className="text-xs text-white/60">Years Exp</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute -bottom-4 -right-4 glass rounded-2xl p-4"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-secondary">
                      10+
                    </div>
                    <div className="text-xs text-white/60">Projects</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Tech Stack Indicators */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute -top-8 right-8 glass rounded-full p-3 z-10"
              >
                <Smartphone className="w-6 h-6 text-primary" />
              </motion.div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 right-0 w-32 h-32 border border-primary/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 left-0 w-24 h-24 border border-accent/20 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <span className="text-white/40 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-gradient-to-b from-primary to-transparent rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
