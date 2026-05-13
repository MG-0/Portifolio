"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  topics?: string[];
  isGraduationProject?: boolean;
}

export function ProjectCard({ 
  project, 
  onClick 
}: { 
  project: Project; 
  onClick: () => void 
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50",
        project.isGraduationProject && "border-primary/50 ring-1 ring-primary/20 shadow-xl shadow-primary/5"
      )}
      onClick={onClick}
    >
      {project.isGraduationProject && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground">
            Graduation Project
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Code2 className="text-primary" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
          {project.name.replace(/-/g, ' ')}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
          {project.description || "No description available for this project yet."}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.topics?.slice(0, 3).map((topic) => (
            <span key={topic} className="text-[10px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t mt-auto">
          <span className="text-xs font-semibold text-primary group-hover:underline cursor-pointer">
            View Details
          </span>
          <div className="flex gap-3">
            <a href={project.html_url} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            {project.homepage && (
              <a href={project.homepage} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={18} />
              </a>
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
  onClose 
}: { 
  project: Project | null; 
  isOpen: boolean; 
  onClose: () => void 
}) {
  if (!project) return null;

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
            className="fixed left-1/2 top-1/2 z-[70] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-6"
          >
            <div className="relative overflow-hidden rounded-3xl border bg-card p-8 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute right-6 top-6 p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-8">
                {project.isGraduationProject && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-4">
                    Awarded Graduation Project
                  </span>
                )}
                <h2 className="text-3xl font-bold mb-4">{project.name.replace(/-/g, ' ')}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.topics?.map((topic) => (
                    <span key={topic} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border">
                      {topic}
                    </span>
                  ))}
                  {!project.topics?.length && <span className="text-muted-foreground text-sm italic">Not specified</span>}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="flex-1 rounded-xl" asChild>
                  <a href={project.html_url} target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    Source Code
                  </a>
                </Button>
                {project.homepage && (
                  <Button variant="outline" size="lg" className="flex-1 rounded-xl" asChild>
                    <a href={project.homepage} target="_blank">
                      <ExternalLink className="mr-2 h-5 w-5" />
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
    <div className="rounded-2xl border bg-card/50 p-6 h-[300px] animate-pulse">
      <div className="w-12 h-12 rounded-xl bg-muted mb-4" />
      <div className="h-6 bg-muted rounded w-3/4 mb-3" />
      <div className="h-4 bg-muted rounded w-full mb-2" />
      <div className="h-4 bg-muted rounded w-full mb-2" />
      <div className="h-4 bg-muted rounded w-2/3 mb-6" />
      <div className="flex gap-2 mb-6">
        <div className="h-4 bg-muted rounded w-16" />
        <div className="h-4 bg-muted rounded w-16" />
        <div className="h-4 bg-muted rounded w-16" />
      </div>
      <div className="h-10 bg-muted rounded-full w-full" />
    </div>
  );
}
