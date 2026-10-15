"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ExternalLink, Code2, Sparkles, CheckCircle2, 
  ArrowUpRight, ShieldCheck, Layers, LayoutDashboard, Server, Globe
} from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { ProjectItem } from "@/config/site";
import { useLanguage } from "@/components/language-provider";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, 
  SiTypescript, SiJavascript, SiMongodb, SiPostgresql, 
  SiTailwindcss, SiPython, SiFlask, SiFramer, 
  SiHtml5, SiLaravel, SiTensorflow
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaNetworkWired } from "react-icons/fa";

const getTechIcon = (tech: string) => {
  const icons: Record<string, { icon: React.ReactNode; color: string }> = {
    "React.js": { icon: <SiReact />, color: "#61DAFB" },
    "Next.js": { icon: <SiNextdotjs />, color: "#FFFFFF" },
    "Next.js (Client Front)": { icon: <SiNextdotjs />, color: "#FFFFFF" },
    "Next.js (Admin Dashboard)": { icon: <LayoutDashboard size={14} />, color: "#38BDF8" },
    "Node.js & Express.js (Backend API)": { icon: <Server size={14} />, color: "#5FA04E" },
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
    "WebSockets": { icon: <FaNetworkWired />, color: "#38BDF8" },
    "Socket.io": { icon: <FaCode />, color: "#E5E7EB" },
    "GSAP": { icon: <FaCode />, color: "#88CE02" },
    "Framer Motion": { icon: <SiFramer />, color: "#0055FF" },
    "Shadcn UI": { icon: <FaCode />, color: "#FFFFFF" },
    "TypeORM": { icon: <FaDatabase />, color: "#FE0902" },
    "Sanctum Auth": { icon: <ShieldCheck size={14} />, color: "#FF2D20" },
    "JWT Auth": { icon: <ShieldCheck size={14} />, color: "#F59E0B" },
    "NodeCG": { icon: <FaServer />, color: "#8B5CF6" },
    "OBS Studio": { icon: <FaCode />, color: "#E5E7EB" },
    "OBS / vMix": { icon: <FaCode />, color: "#E5E7EB" },
    "HTML5": { icon: <SiHtml5 />, color: "#E34F26" },
    "CSS3": { icon: <FaCode />, color: "#264DE4" },
  };

  const item = icons[tech];
  if (item) {
    const isNeutral = item.color === "#FFFFFF" || item.color === "#E5E7EB";
    return (
      <span
        className={isNeutral ? "text-slate-900 dark:text-white" : ""}
        style={isNeutral ? undefined : { color: item.color }}
      >
        {item.icon}
      </span>
    );
  }
  return <FaCode className="text-primary" />;
};

export function FreelanceCard({
  project,
  onClick,
}: {
  project: ProjectItem;
  onClick: () => void;
}) {
  const { language, t } = useLanguage();
  const title = project.title[language] || project.title.en;
  const description = project.description[language] || project.description.en;
  const highlights = project.highlights ? (project.highlights[language] || project.highlights.en) : [];

  return (
    <div
      onClick={onClick}
      className="relative rounded-3xl p-8 sm:p-10 glass-card-floating glass-card-hover border border-primary/40 shadow-2xl shadow-primary/10 cursor-pointer overflow-hidden group mb-14"
    >
      {/* Dynamic Animated Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-primary/25 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Top Banner Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider badge-pill-contrast shadow-sm"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="inline-flex items-center justify-center text-amber-500 dark:text-amber-400"
          >
            <Sparkles size={14} />
          </motion.span>
          <span className="font-black">
            {project.badge ? (project.badge[language] || project.badge.en) : "Freelance Showcase"}
          </span>
        </motion.div>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 dark:border-emerald-500/40 hover:bg-emerald-600 hover:text-white transition-all shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{t.projects.viewLive}: rewaq-decor.com</span>
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Title & Description */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
            {description}
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-secondary/30 border border-border/40 text-xs sm:text-sm font-semibold text-foreground/90"
              >
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Full Architecture Breakdown */}
        <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 flex flex-col justify-between h-full">
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
              <Layers size={16} />
              <span>{language === "ar" ? "المعمارية التقنية للمشروع" : "Core Tech Ecosystem"}</span>
            </h4>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-xl bg-card/80 text-foreground font-bold border border-border/60 shadow-sm"
                >
                  <span>{getTechIcon(tech)}</span>
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/40 gap-3">
            <span className="text-xs font-bold text-purple-900 dark:text-purple-300 bg-purple-500/15 dark:bg-purple-500/20 px-3 py-1.5 rounded-xl border border-purple-500/30">
              {language === "ar" ? "كود تجاري خاص بالعميل" : "Commercial Client Code"}
            </span>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/20 hover:scale-105 transition-all"
              >
                <span>{t.projects.viewLive}</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

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
      className="group relative flex flex-col h-full rounded-3xl glass-card-floating glass-card-hover p-6 sm:p-7 cursor-pointer overflow-hidden justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          {badgeText && (
            <motion.span 
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider badge-pill-contrast shadow-xs"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center text-primary"
              >
                <Sparkles size={11} />
              </motion.span>
              <span className="font-extrabold">{badgeText}</span>
            </motion.span>
          )}

          {project.live && (
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-500/15 dark:bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Live</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Highlights Pills */}
        {highlights.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5">
            {highlights.slice(0, 2).map((item, i) => (
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

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-xl bg-secondary/40 text-foreground font-semibold border border-border/50 group-hover:border-primary/30 transition-colors"
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
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50 gap-3 mt-auto">
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
          <span className="text-[11px] text-muted-foreground font-medium">
            Production Ready
          </span>
        )}

        {project.github && (
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
            className="relative w-full max-w-2xl rounded-3xl glass-card-floating p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden bg-card"
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
                  <span>{language === "ar" ? "أبرز تفاصيل المعمارية" : "Key Architectural Highlights"}</span>
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
