"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="My comprehensive toolbox of technologies and methodologies for building scalable applications."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/30 to-secondary/10 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category header */}
            <div className="relative z-10 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </div>

            {/* Skills grid */}
            <div className="relative z-10 grid grid-cols-1 gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200 cursor-default group/item"
                >
                  <div className="text-lg flex-shrink-0">{skill.icon}</div>
                  <span className="text-sm font-medium text-foreground/80 group-hover/item:text-foreground transition-colors">
                    {skill.name}
                  </span>
                  <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
