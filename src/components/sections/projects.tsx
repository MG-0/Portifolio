"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig, ProjectItem } from "@/config/site";
import { ProjectCard, ProjectModal, FreelanceCard } from "./project-ui";
import { useLanguage } from "@/components/language-provider";
import { Code2, Sparkles } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { t, language } = useLanguage();

  return (
    <Section
      id="projects"
      title={t.projects.title}
      subtitle={t.projects.subtitle}
    >
      {/* 1. Flagship Standalone Freelance Project Showcase */}
      {siteConfig.freelanceProject && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <FreelanceCard
            project={siteConfig.freelanceProject}
            onClick={() => setSelectedProject(siteConfig.freelanceProject)}
          />
        </motion.div>
      )}

      {/* 2. All Other Engineering Projects Unified Header */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="p-2 rounded-xl bg-primary/10 text-primary">
          <Code2 size={20} />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-foreground">
          {t.projects.otherTitle}
        </h3>
      </div>

      {/* 3. Unified Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
        {siteConfig.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
            className="h-full"
          >
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </div>

      {/* Project Modal Inspection */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
