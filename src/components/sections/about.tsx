"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GraduationCap, Heart, Code2, Rocket } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <GraduationCap className="text-primary" />,
      title: "Education",
      description: "Computer Science graduate from Arab Open University (Egypt).",
    },
    {
      icon: <Code2 className="text-primary" />,
      title: "Clean Code",
      description: "Focused on writing scalable, maintainable, and readable systems.",
    },
    {
      icon: <Heart className="text-primary" />,
      title: "Passionate",
      description: "Deeply interested in React, Next.js, and Node.js ecosystem.",
    },
    {
      icon: <Rocket className="text-primary" />,
      title: "Learner",
      description: "Continuous learner, always exploring Docker, CI/CD, and System Design.",
    },
  ];

  return (
    <Section id="about" title="About Me" subtitle="A brief overview of who I am and what I focus on.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-3xl border bg-gradient-to-br from-primary/5 to-transparent flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">My Journey & Vision</h3>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            I am a dedicated Full Stack Developer with a strong foundation in Computer Science. 
            My academic journey at Arab Open University has equipped me with fundamental 
            principles, while my passion for technology has driven me to master modern 
            web technologies like Next.js, Node.js, and MongoDB.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I believe in building software that is not just functional, but also highly 
            optimized and user-centric. My goal is to contribute to meaningful projects 
            and continue growing as a professional developer in a dynamic team.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
