"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2, GitBranch, Star, GitFork } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  id?: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  topics?: string[];
  isGraduationProject?: boolean;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
}

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const displayName = project.name.replace(/-/g, " ");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-2xl border bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 cursor-pointer",
        project.isGraduationProject &&
          "border-primary/50 ring-1 ring-primary/30 shadow-xl shadow-primary/10",
      )}
      onClick={onClick}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Badge */}
      {project.isGraduationProject && (
        <div className="absolute top-4 right-4 z-10">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
          >
            ⭐ Graduation
          </motion.span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1 relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all shadow-md">
          <Code2 className="text-primary font-bold" size={28} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {displayName}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
          {project.description || "A notable project in my portfolio."}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.topics?.slice(0, 3).map((topic, idx) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-semibold border border-primary/20"
            >
              {topic}
            </motion.span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {project.stargazers_count !== undefined &&
              project.stargazers_count > 0 && (
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-500 text-yellow-500" />
                  <span>{project.stargazers_count}</span>
                </div>
              )}
            {project.forks_count !== undefined && project.forks_count > 0 && (
              <div className="flex items-center gap-1">
                <GitFork size={14} />
                <span>{project.forks_count}</span>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <motion.a
              href={project.html_url}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
            >
              <Github size={18} />
            </motion.a>
            {project.homepage && (
              <motion.a
                href={project.homepage}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  const displayName = project.name.replace(/-/g, " ");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-[70] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 p-4 md:p-6"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/95 p-8 shadow-2xl">
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute right-6 top-6 p-2 rounded-full hover:bg-secondary transition-colors z-20"
              >
                <X size={20} />
              </motion.button>

              {/* Content */}
              <div className="mb-8">
                {/* Badge */}
                {project.isGraduationProject && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-4 border border-primary/20"
                  >
                    <Star size={14} className="fill-primary" />
                    Graduation Project
                  </motion.span>
                )}

                {/* Title */}
                <h2 className="text-4xl font-bold mb-4 leading-tight">
                  {displayName}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Stats */}
                {(project.stargazers_count !== undefined ||
                  project.language) && (
                  <div className="flex gap-6 mb-8">
                    {project.language && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {project.language}
                        </span>
                      </div>
                    )}
                    {project.stargazers_count !== undefined &&
                      project.stargazers_count > 0 && (
                        <div className="flex items-center gap-2">
                          <Star
                            size={16}
                            className="fill-yellow-500 text-yellow-500"
                          />
                          <span className="text-sm font-medium text-muted-foreground">
                            {project.stargazers_count} Stars
                          </span>
                        </div>
                      )}
                  </div>
                )}
              </div>

              {/* Technologies */}
              {project.topics && project.topics.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.topics.map((topic, idx) => (
                      <motion.span
                        key={topic}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 rounded-xl font-semibold group"
                  asChild
                >
                  <a href={project.html_url} target="_blank">
                    <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    View on GitHub
                  </a>
                </Button>
                {project.homepage && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 rounded-xl font-semibold group"
                    asChild
                  >
                    <a href={project.homepage} target="_blank">
                      <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 p-6 h-[320px] animate-pulse">
      <div className="w-12 h-12 rounded-xl bg-muted mb-4" />
      <div className="h-6 bg-muted rounded w-3/4 mb-3" />
      <div className="h-4 bg-muted rounded w-full mb-2" />
      <div className="h-4 bg-muted rounded w-full mb-2" />
      <div className="h-4 bg-muted rounded w-2/3 mb-6" />
      <div className="flex gap-2 mb-6">
        <div className="h-5 bg-muted rounded-lg w-16" />
        <div className="h-5 bg-muted rounded-lg w-16" />
        <div className="h-5 bg-muted rounded-lg w-16" />
      </div>
      <div className="h-10 bg-muted rounded-full w-full" />
    </div>
  );
}
