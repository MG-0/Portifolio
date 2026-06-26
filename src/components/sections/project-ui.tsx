"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2, Star, GitFork } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, 
  SiTypescript, SiJavascript, SiMongodb, SiPostgresql, 
  SiRedux, SiTailwindcss, SiDocker, SiKubernetes, 
  SiGraphql, SiPython, SiFlask, SiFramer, SiBootstrap,
  SiHtml5, SiPrisma, SiSwagger, SiPostman, SiSqlite,
  SiTensorflow, SiReactquery
} from "react-icons/si";
import { FaCode, FaGlobe, FaServer, FaDatabase, FaRobot, FaCubes, FaJava } from "react-icons/fa";

interface Project {
  id?: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  topics?: string[];
  technologies?: string[];
  isGraduationProject?: boolean;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
}

const getTechIcon = (tech: string) => {
  const icons: Record<string, React.ReactNode> = {
    "React.js": <SiReact className="text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="text-foreground" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    "Express.js": <SiExpress className="text-foreground" />,
    "NestJS": <SiNestjs className="text-[#E0234E]" />,
    "TypeScript": <SiTypescript className="text-[#3178C6]" />,
    "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "PostgreSQL": <SiPostgresql className="text-[#4169E1]" />,
    "Redux": <SiRedux className="text-[#764ABC]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    "Docker": <SiDocker className="text-[#2496ED]" />,
    "Kubernetes": <SiKubernetes className="text-[#326CE5]" />,
    "GraphQL": <SiGraphql className="text-[#E10098]" />,
    "Python": <SiPython className="text-[#3776AB]" />,
    "Flask": <SiFlask className="text-foreground" />,
    "React Query": <SiReactquery className="text-[#FF4154]" />,
    "Framer Motion": <SiFramer className="text-[#0055FF]" />,
    "i18n": <FaGlobe className="text-[#26A69A]" />,
    "HTML5": <SiHtml5 className="text-[#E34F26]" />,
    "HTML5 & CSS3": <SiHtml5 className="text-[#E34F26]" />,
    "Bootstrap": <SiBootstrap className="text-[#7952B3]" />,
    "REST APIs": <FaServer className="text-foreground" />,
    "TypeORM": <FaDatabase className="text-[#FE0902]" />,
    "Prisma": <SiPrisma className="text-foreground" />,
    "Mongoose": <SiMongodb className="text-[#880000]" />,
    "JWT": <FaCode className="text-foreground" />,
    "Swagger": <SiSwagger className="text-[#85EA2D]" />,
    "Postman": <SiPostman className="text-[#FF6C37]" />,
    "SQLite": <SiSqlite className="text-[#003B57]" />,
    "SQL": <FaDatabase className="text-foreground" />,
    "Java": <FaJava className="text-[#007396]" />,
    "C#": <FaCode className="text-[#239120]" />,
    "TensorFlow": <SiTensorflow className="text-[#FF6F00]" />,
    "Machine Learning": <FaRobot className="text-foreground" />,
  };
  return icons[tech] || <FaCode className="text-muted-foreground" />;
};

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const displayName = project.name.replace(/-/g, " ");

  return (
    <div
      className={cn(
        "group flex flex-col h-full overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-md cursor-pointer",
        project.isGraduationProject && "border-primary/40 ring-1 ring-primary/20 shadow-sm"
      )}
      onClick={onClick}
    >
      {/* Badge */}
      {project.isGraduationProject && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground shadow-sm">
            Featured AI Project
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1 relative z-10">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all">
          <Code2 className="text-primary" size={24} />
        </div>

        <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2 text-foreground">
          {displayName}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
          {project.description || "A notable project in my portfolio."}
        </p>

        {/* Technologies / Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(project.technologies || project.topics?.slice(0, 4) || []).map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium border border-border/50"
            >
              <span className="text-sm">{getTechIcon(tech)}</span>
              <span>{tech}</span>
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {project.stargazers_count !== undefined && project.stargazers_count > 0 && (
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
            <a
              href={project.html_url}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
            >
              <Github size={18} />
            </a>
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
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
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-[70] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 p-4 md:p-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-10 shadow-xl">
              <button
                onClick={onClose}
                className="absolute right-6 top-6 p-2 rounded-full hover:bg-secondary transition-colors z-20 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>

              <div className="mb-8">
                {project.isGraduationProject && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-4 border border-primary/20">
                    <Star size={14} className="fill-primary" />
                    Featured AI Project
                  </span>
                )}

                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-foreground">
                  {displayName}
                </h2>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {(project.stargazers_count !== undefined || project.language) && (
                  <div className="flex gap-6 mb-8">
                    {project.language && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {project.language}
                        </span>
                      </div>
                    )}
                    {project.stargazers_count !== undefined && project.stargazers_count > 0 && (
                      <div className="flex items-center gap-2">
                        <Star size={16} className="fill-yellow-500 text-yellow-500" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {project.stargazers_count} Stars
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {(project.technologies?.length || project.topics?.length) ? (
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(project.technologies || project.topics || []).map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border"
                      >
                        <span className="text-base">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                <Button size="lg" className="flex-1 rounded-lg font-semibold" asChild>
                  <a href={project.html_url} target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </a>
                </Button>
                {project.homepage && (
                  <Button variant="outline" size="lg" className="flex-1 rounded-lg font-semibold" asChild>
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
    <div className="rounded-xl border border-border bg-card p-6 h-[320px] animate-pulse">
      <div className="w-12 h-12 rounded-lg bg-secondary mb-5" />
      <div className="h-6 bg-secondary rounded w-3/4 mb-3" />
      <div className="h-4 bg-secondary rounded w-full mb-2" />
      <div className="h-4 bg-secondary rounded w-full mb-2" />
      <div className="h-4 bg-secondary rounded w-2/3 mb-6" />
      <div className="flex gap-2 mb-6">
        <div className="h-6 bg-secondary rounded-md w-16" />
        <div className="h-6 bg-secondary rounded-md w-16" />
      </div>
      <div className="h-10 bg-secondary rounded-lg w-full mt-auto" />
    </div>
  );
}
