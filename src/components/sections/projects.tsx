"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig, ProjectItem } from "@/config/site";
import { ProjectCard, ProjectModal } from "./project-ui";
import { useLanguage } from "@/components/language-provider";
import { Layers } from "lucide-react";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { t, language } = useLanguage();

  const categories = [
    { id: "all", label: t.projects.all },
    { id: "freelance", label: t.projects.freelance },
    { id: "fullstack", label: t.projects.fullstack },
    { id: "realtime", label: t.projects.realtime },
    { id: "frontend", label: t.projects.frontend },
    { id: "backend", label: t.projects.backend },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? siteConfig.projects
      : siteConfig.projects.filter(
          (p) => p.category === activeCategory || (activeCategory === "fullstack" && p.technologies.includes("Node.js") && p.technologies.includes("React.js"))
        );

  return (
    <Section
      id="projects"
      title={t.projects.title}
      subtitle={t.projects.subtitle}
    >
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "text-white shadow-lg shadow-primary/25 scale-105"
                  : "text-muted-foreground hover:text-foreground bg-secondary/40 hover:bg-secondary/70 border border-border/40"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectCategory"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
              className="h-full"
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal Details */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
