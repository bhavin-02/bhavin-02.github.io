import {
  CheckCircle,
  Clock,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Zap,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useState } from "react";
import { URLS } from "../constants/constants";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      const subject = encodeURIComponent(
        `Portfolio Contact from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${URLS.EMAIL}?subject=${subject}&body=${body}`);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: URLS.EMAIL,
      action: () => window.open(`mailto:${URLS.EMAIL}`),
      color: "text-blue-400",
      gradient: "gradient-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: URLS.PHONE_NUMBER,
      action: () => window.open(`tel:${URLS.PHONE_NUMBER.replaceAll(" ", "")}`),
      color: "text-green-400",
      gradient: "gradient-secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Bhavin Gunjariya",
      action: () => window.open(URLS.LINKED_IN, "_blank"),
      color: "text-blue-500",
      gradient: "gradient-accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      action: null,
      color: "text-red-400",
      gradient: "gradient-primary",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      text: "2+ years of proven experience in React Native development",
    },
    {
      icon: CheckCircle,
      text: "Strong focus on clean, maintainable code and best practices",
    },
    {
      icon: MessageCircle,
      text: "Experience with complex animations and user interactions",
    },
    {
      icon: Clock,
      text: "Collaborative approach and excellent communication skills",
    },
    {
      icon: Zap,
      text: "Passionate about staying current with latest technologies",
    },
  ];

  const childVariants: Variants = {
    hovered: { rotate: 15, scale: 1.1 },
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-80 h-80 gradient-accent rounded-full blur-3xl opacity-10"
        />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.02)_25%,transparent_25%),linear-gradient(-45deg,rgba(139,92,246,0.02)_25%,transparent_25%)] bg-[size:60px_60px]" />
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
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">
              Let's Connect
            </span>
          </motion.div>
          <h2 className="text-3xl leading-relaxed md:text-5xl text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology
          </p>
        </motion.div>

        {/* Hero Contact Image */}
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
                src="https://images.unsplash.com/photo-1659353219596-80cd21857b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb250YWN0JTIwY29tbXVuaWNhdGlvbnxlbnwxfHx8fDE3NTk0ODY1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Communication"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            </div>

            {/* Floating contact elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 glass rounded-2xl p-4 text-center"
            >
              <Clock className="w-6 h-6 text-green-400 mx-auto mb-1" />
              <div className="text-sm font-bold text-gradient">24h</div>
              <div className="text-xs text-white/60">Response</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 text-center"
            >
              <MessageCircle className="w-6 h-6 text-blue-400 mx-auto mb-1" />
              <div className="text-sm font-bold text-gradient-secondary">
                100%
              </div>
              <div className="text-xs text-white/60">Available</div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader>
                <h3 className="text-xl text-white mb-2">Let's Connect</h3>
                <p className="text-white/60">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;

                  const parentVariants: Variants = {
                    hovered: { y: -2, scale: 1.02, transition: { delay: -1 } },
                  };

                  const childVariants: Variants = {
                    hovered: {
                      scale: 1.1,
                      rotate: 5,
                      transition: { delay: -1 },
                    },
                  };

                  const secondChildVariants: Variants = {
                    hovered: { x: 5, transition: { delay: -1 } },
                  };

                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3, delay: 0.4 + index * 0.1 },
                      }}
                      variants={parentVariants}
                      whileHover="hovered"
                      viewport={{ once: true }}
                      className={`flex items-center gap-4 p-4 glass-dark rounded-xl ${
                        info.action ? "cursor-pointer hover:bg-white/10" : ""
                      } transition-all duration-300 group`}
                      onClick={info.action || undefined}
                    >
                      <motion.div
                        variants={childVariants}
                        className={`w-12 h-12 ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-white/60 mb-1">
                          {info.label}
                        </p>
                        <p className="text-white font-medium group-hover:text-gradient transition-all duration-300">
                          {info.value}
                        </p>
                      </div>
                      {info.action && (
                        <motion.div
                          variants={secondChildVariants}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <Send className="w-4 h-4 text-primary" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Why Work With Me */}
            <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader>
                <h3 className="text-xl text-white">Why Work With Me?</h3>
                <p className="text-white/60">
                  What makes me the right choice for your project
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;

                    const childVariants: Variants = {
                      hovered: { scale: 1.2, rotate: 10 },
                    };

                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.4,
                            delay: 0.5 + index * 0.1,
                          },
                        }}
                        whileHover="hovered"
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group"
                      >
                        <motion.div
                          variants={childVariants}
                          transition={{ delay: -1 }}
                          className="w-5 h-5 text-primary mt-0.5 group-hover:text-accent transition-all duration-300"
                        >
                          <Icon className="w-full h-full" />
                        </motion.div>
                        <span className="text-white/70 group-hover:text-white transition-colors">
                          {benefit.text}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader>
                <h3 className="text-xl text-white">Send Me a Message</h3>
                <p className="text-white/60">
                  Have a project in mind? Let's discuss how we can work
                  together.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="glass border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary/20 resize-none transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                        />
                      ) : (
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}

                      {/* Button shine effect */}
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </Button>
                  </motion.div>
                </form>

                {/* Quick Contact Options */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <p className="text-white/60 text-sm text-center mb-4">
                    Or reach out directly
                  </p>
                  <div className="flex justify-center gap-3">
                    {[
                      {
                        icon: Mail,
                        action: () => window.open(`mailto:${URLS.EMAIL}`),
                        color: "hover:text-red-400 hover:bg-red-400/10",
                      },
                      {
                        icon: Phone,
                        action: () =>
                          window.open(
                            `tel:${URLS.PHONE_NUMBER.replaceAll(" ", "")}`
                          ),
                        color: "hover:text-green-400 hover:bg-green-400/10",
                      },
                      {
                        icon: Linkedin,
                        action: () => window.open(URLS.LINKED_IN, "_blank"),
                        color: "hover:text-blue-500 hover:bg-blue-500/10",
                      },
                    ].map(({ icon: Icon, action, color }, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ delay: -1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={action}
                        className={`w-12 h-12 glass rounded-xl flex items-center justify-center text-white/60 ${color} transition-all duration-300`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
            </div>

            <CardContent className="p-8 relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="text-4xl mb-2">🚀</div>
              </motion.div>
              <h3 className="text-2xl text-white mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed">
                Whether you need a mobile app, web application, or UI component
                library, I'm here to help bring your ideas to life with clean,
                efficient code and modern design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover="hovered">
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open(
                        `mailto:${URLS.EMAIL}?subject=Project Inquiry`
                      )
                    }
                    className="gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                  >
                    <motion.div variants={childVariants} className="mr-2">
                      <Mail className="w-4 h-4" />
                    </motion.div>
                    Start a Conversation
                  </Button>
                </motion.div>
                <motion.div whileHover="hovered">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open(URLS.LINKED_IN, "_blank")}
                    className="glass border-white/20 text-white hover:bg-white/10 hover:shadow-lg transition-all duration-300 group"
                  >
                    <motion.div variants={childVariants} className="mr-2">
                      <Linkedin className="w-4 h-4" />
                    </motion.div>
                    Connect on LinkedIn
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
