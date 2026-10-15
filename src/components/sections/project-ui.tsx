"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ExternalLink, Code2, Star, Sparkles, CheckCircle2, 
  ArrowUpRight, ShieldCheck, Layers, Eye
} from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProjectItem } from "@/config/site";
import { useLanguage } from "@/components/language-provider";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, 
  SiTypescript, SiJavascript, SiMongodb, SiPostgresql, 
  SiRedux, SiTailwindcss, SiDocker, SiKubernetes, 
  SiGraphql, SiPython, SiFlask, SiFramer, 
  SiHtml5, SiPrisma, SiJest, SiRedis, SiLaravel, SiTensorflow
} from "react-icons/si";
import { FaCode, FaGlobe, FaServer, FaDatabase, FaLayerGroup, FaNetworkWired } from "react-icons/fa";

const getTechIcon = (tech: string) => {
  const icons: Record<string, { icon: React.ReactNode; color: string }> = {
    "React.js": { icon: <SiReact />, color: "#61DAFB" },
    "Next.js": { icon: <SiNextdotjs />, color: "#FFFFFF" },
    "TypeScript": { icon: <SiTypescript />, color: "#3178C6" },
    "JavaScript": { icon: <SiJavascript />, color: "#F7DF1E" },
    "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4" },
    "Node.js": { icon: <SiNodedotjs />, color: "#5FA04E" },
    "Express.js": { icon: <SiExpress />, color: "#E5E7EB" },
    "NestJS": { icon: <SiNestjs />, color: "#E0234E" },
    "Laravel": { icon: <SiLaravel />, color: "#FF2D20" },
    "PostgreSQL": { icon: <SiPostgresql />, color: "#4169E1" },
    "MongoDB": { icon: <SiMongodb />, color: "#47A248" },
    "Python": { icon: <SiPython />, color: "#3776AB" },
    "Flask": { icon: <SiFlask />, color: "#E5E7EB" },
    "TensorFlow": { icon: <SiTensorflow />, color: "#FF6F00" },
    "Redux Toolkit": { icon: <SiRedux />, color: "#764ABC" },
    "WebSockets": { icon: <FaNetworkWired />, color: "#38BDF8" },
    "Socket.io": { icon: <FaCode />, color: "#E5E7EB" },
    "GSAP": { icon: <FaCode />, color: "#88CE02" },
    "Framer Motion": { icon: <SiFramer />, color: "#0055FF" },
    "TypeORM": { icon: <FaDatabase />, color: "#FE0902" },
    "Prisma": { icon: <SiPrisma />, color: "#2D3748" },
    "Sanctum Auth": { icon: <ShieldCheck size={14} />, color: "#FF2D20" },
    "JWT Auth": { icon: <ShieldCheck size={14} />, color: "#F59E0B" },
    "NodeCG": { icon: <FaServer />, color: "#8B5CF6" },
    "OBS Studio": { icon: <FaCode />, color: "#E5E7EB" },
  };

  const item = icons[tech];
  if (item) {
    return <span style={{ color: item.color }}>{item.icon}</span>;
  }
  return <FaCode className="text-primary" />;
};

export function ProjectCard({
  project,
  onClick,
}: {
  project: ProjectItem;
  onClick: () => void;
}) {
  const { language, t } = useLanguage();
  const title = project.title[language] || project.title.en;
  const description = project.description[language] || project.description.en;
  const badgeText = project.badge ? (project.badge[language] || project.badge.en) : null;
  const highlights = project.highlights ? (project.highlights[language] || project.highlights.en) : [];

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col h-full rounded-3xl border border-border/60 bg-gradient-to-b from-card/90 via-card/50 to-card/20 backdrop-blur-xl transition-all duration-400 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2 cursor-pointer overflow-hidden p-6 sm:p-7"
    >
      {/* Top Ambient Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Header: Project Badge & Category */}
      <div className="flex items-center justify-between gap-3 mb-5">
        {badgeText ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">
            <Sparkles size={12} className="animate-pulse" />
            {badgeText}
          </span>
        ) : (
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            {project.category}
          </span>
        )}

        {/* Live indicator if live link exists */}
        {project.live && (
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Live</span>
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3 className="text-xl sm:text-2xl font-black mb-3 text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
        {description}
      </p>

      {/* Highlights Pills */}
      {highlights.length > 0 && (
        <div className="mb-5 flex flex-wrap gap-1.5">
          {highlights.slice(0, 3).map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground/80 bg-secondary/50 px-2.5 py-1 rounded-lg border border-border/40"
            >
              <CheckCircle2 size={11} className="text-primary shrink-0" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      )}

      {/* Tech Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-xl bg-secondary/40 text-foreground font-medium border border-border/50 group-hover:border-primary/30 transition-colors"
          >
            <span className="text-sm shrink-0">{getTechIcon(tech)}</span>
            <span>{tech}</span>
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="text-xs px-2 py-1 rounded-xl bg-secondary/30 text-muted-foreground font-semibold">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      {/* Action Footer Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto gap-3">
        {/* Live Link Button */}
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm group/btn"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse group-hover/btn:bg-white" />
            <span>{t.projects.viewLive}</span>
            <ExternalLink size={13} />
          </a>
        ) : (
          <span className="text-[11px] text-muted-foreground italic font-medium">
            {project.category === "backend" ? "Backend Core" : "Architecture Ready"}
          </span>
        )}

        {/* GitHub or Private Client Code Indicator */}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-secondary/60 text-foreground hover:bg-primary/20 hover:border-primary/50 border border-border/60 transition-all duration-300 hover:scale-105"
            title="GitHub Repository"
          >
            <Github size={15} />
            <span>{t.projects.viewCode}</span>
          </a>
        ) : (
          <span className="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {language === "ar" ? "مشروع فريلانس خاص" : "Private Client Code"}
          </span>
        )}
      </div>
    </div>
  );
}

export function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { language, t } = useLanguage();

  if (!project) return null;

  const title = project.title[language] || project.title.en;
  const description = project.description[language] || project.description.en;
  const highlights = project.highlights ? (project.highlights[language] || project.highlights.en) : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Top Accent Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-purple-600" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-border/60 bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6">
              {project.badge && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/30 mb-3">
                  {project.badge[language] || project.badge.en}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                {title}
              </h2>
            </div>

            {/* Full Description */}
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              {description}
            </p>

            {/* Architectural Highlights */}
            {highlights.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                  <Layers size={16} className="text-primary" />
                  <span>{language === "ar" ? "أبرز مميزات المعمارية" : "Key Architectural Highlights"}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-2xl bg-secondary/40 border border-border/50 text-xs sm:text-sm font-medium text-foreground"
                    >
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                {language === "ar" ? "الحزمة البرمجية المستخدمة" : "Technologies & Libraries"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/60 text-foreground font-semibold text-xs border border-border/60"
                  >
                    <span>{getTechIcon(tech)}</span>
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Links CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
              {project.live && (
                <Button size="lg" className="rounded-2xl gap-2 font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                    <span>{t.projects.viewLive}</span>
                  </a>
                </Button>
              )}

              {project.github && (
                <Button variant="outline" size="lg" className="rounded-2xl gap-2 font-bold border-primary/40 hover:bg-primary/10" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    <span>{t.projects.viewCode}</span>
                  </a>
                </Button>
              )}

              <Button variant="ghost" size="lg" className="rounded-2xl ml-auto" onClick={onClose}>
                {language === "ar" ? "إغلاق" : "Close"}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="h-[400px] rounded-3xl border border-border/50 bg-card/40 p-7 animate-pulse flex flex-col justify-between">
      <div>
        <div className="w-24 h-6 rounded-full bg-secondary mb-4" />
        <div className="w-3/4 h-8 rounded-xl bg-secondary mb-3" />
        <div className="w-full h-16 rounded-xl bg-secondary mb-4" />
      </div>
      <div className="flex gap-2">
        <div className="w-16 h-6 rounded-lg bg-secondary" />
        <div className="w-16 h-6 rounded-lg bg-secondary" />
      </div>
    </div>
  );
}
