"use client";

import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Briefcase, BookOpen, Award } from "lucide-react";

const items = [
  {
    type: "course",
    title: "Full-Stack Web Development",
    provider: "Maximilian Schwarzmüller",
    description: "Deep dive into React, Node.js, and modern web architectures.",
    date: "2023 - Present",
    icon: <BookOpen className="text-primary" />,
  },
  {
    type: "course",
    title: "Advanced JavaScript & React",
    provider: "Jonas Schmedtmann",
    description: "Mastering complex JavaScript patterns and high-performance React applications.",
    date: "2023",
    icon: <Award className="text-primary" />,
  },
  {
    type: "learning",
    title: "Continuous Learning",
    provider: "Self-Directed",
    description: "Actively mastering Docker, CI/CD, NestJS, and advanced System Design principles.",
    date: "Ongoing",
    icon: <Briefcase className="text-primary" />,
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Learning Journey" subtitle="My professional growth and educational background.">
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col md:flex-row items-center",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block" />

              <div className="w-full md:w-1/2 p-4">
                <div className={cn(
                  "p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all",
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                )}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                      <p className="text-sm text-primary font-medium">{item.provider}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {item.date}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
