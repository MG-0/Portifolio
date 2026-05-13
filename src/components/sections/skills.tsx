"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "CI/CD", "Vercel"],
  },
  {
    title: "Fundamentals",
    skills: ["OOP", "Data Structures", "System Design", "Clean Code"],
  },
];

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="My toolbox of technologies and methodologies.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-primary rounded-full mr-3" />
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                  className="px-4 py-2 rounded-lg border bg-secondary/50 text-secondary-foreground text-sm font-medium hover:border-primary/30 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
