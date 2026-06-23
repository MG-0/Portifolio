"use client";

import React, { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { ProjectCard, ProjectModal, ProjectSkeleton } from "./project-ui";
import { useLanguage } from "@/components/language-provider";

export function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=100`,
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          // Filter projects by featured list and graduation project
          const filtered = data.filter((repo: any) => {
            const repoName = repo.name.replace(/-/g, "-");
            const isFeatured = siteConfig.featuredProjects.some(
              (proj) => proj.toLowerCase() === repoName.toLowerCase(),
            );
            const isGraduation =
              repo.topics?.includes("graduation") ||
              repo.name.toLowerCase().includes("tumor") ||
              repo.name.toLowerCase().includes("graduation");
            return isFeatured || isGraduation;
          });

          // Sort to show graduation project first
          const processed = filtered.map((repo: any) => ({
            ...repo,
            isGraduationProject:
              repo.topics?.includes("graduation") ||
              repo.name.toLowerCase().includes("tumor") ||
              repo.name.toLowerCase().includes("graduation"),
          }));

          processed.sort(
            (a, b) =>
              (b.isGraduationProject ? 1 : 0) - (a.isGraduationProject ? 1 : 0),
          );

          setProjects(processed);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <Section
      id="projects"
      title={t.projects.title}
      subtitle={t.projects.subtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => <ProjectSkeleton key={i} />)
        ) : projects.length > 0 ? (
          projects.map((project) => {
            const manualDesc = (siteConfig as any).projectDescriptions?.[
              language
            ]?.[project.name];
            const displayProject = {
              ...project,
              description:
                typeof manualDesc === "object"
                  ? manualDesc.description
                  : manualDesc || project.description,
              technologies: typeof manualDesc === "object" ? manualDesc.technologies : project.topics,
            };

            return (
              <ProjectCard
                key={project.id}
                project={displayProject}
                onClick={() => setSelectedProject(displayProject)}
              />
            );
          })
        ) : (
          <div className="col-span-full text-center py-20 bg-secondary/20 rounded-3xl border border-dashed">
            <p className="text-muted-foreground">{t.projects.noProjects}</p>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
