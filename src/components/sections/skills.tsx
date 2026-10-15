"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, 
  SiTypescript, SiJavascript, SiMongodb, SiPostgresql, 
  SiRedux, SiTailwindcss, SiDocker, SiKubernetes, 
  SiGraphql, SiPython, SiFlask, SiFramer, 
  SiHtml5, SiPrisma, SiJest, SiRedis, SiSocketdotio
} from "react-icons/si";
import { 
  FaGitAlt, FaCode, FaCubes, FaServer, FaCodeBranch, 
  FaDatabase, FaShieldAlt, FaLock, FaLayerGroup, FaNetworkWired, FaCheckCircle
} from "react-icons/fa";
import { useLanguage } from "@/components/language-provider";
import { Sparkles, Pause } from "lucide-react";

const skillIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  "React.js": { icon: <SiReact />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs />, color: "#FFFFFF" },
  "TypeScript": { icon: <SiTypescript />, color: "#3178C6" },
  "JavaScript": { icon: <SiJavascript />, color: "#F7DF1E" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4" },
  "GSAP": { icon: <FaCode />, color: "#88CE02" },
  "Redux Toolkit": { icon: <SiRedux />, color: "#764ABC" },
  "HTML5 & CSS3": { icon: <SiHtml5 />, color: "#E34F26" },
  "Zustand": { icon: <FaCode />, color: "#E5E7EB" },
  "Framer Motion": { icon: <SiFramer />, color: "#0055FF" },
  "Node.js": { icon: <SiNodedotjs />, color: "#5FA04E" },
  "Express.js": { icon: <SiExpress />, color: "#E5E7EB" },
  "NestJS": { icon: <SiNestjs />, color: "#E0234E" },
  "REST/GraphQL APIs": { icon: <SiGraphql />, color: "#E10098" },
  "WebSockets": { icon: <FaNetworkWired />, color: "#38BDF8" },
  "Socket.io": { icon: <SiSocketdotio />, color: "#E5E7EB" },
  "PostgreSQL": { icon: <SiPostgresql />, color: "#4169E1" },
  "MongoDB": { icon: <SiMongodb />, color: "#47A248" },
  "Prisma": { icon: <SiPrisma />, color: "#2D3748" },
  "TypeORM": { icon: <FaDatabase />, color: "#FE0902" },
  "Clean Architecture": { icon: <FaLayerGroup />, color: "#38BDF8" },
  "Design Patterns": { icon: <FaCubes />, color: "#A855F7" },
  "SOLID Principles": { icon: <FaCode />, color: "#EC4899" },
  "JWT & OAuth": { icon: <FaShieldAlt />, color: "#F59E0B" },
  "RBAC (Role-Based Access)": { icon: <FaLock />, color: "#EAB308" },
  "Git & GitHub": { icon: <FaGitAlt />, color: "#F05032" },
  "Jest & Testing": { icon: <SiJest />, color: "#C21325" },
  "CI/CD Workflows": { icon: <FaServer />, color: "#6366F1" },
  "Redis Caching": { icon: <SiRedis />, color: "#DC382D" },
  "Docker": { icon: <SiDocker />, color: "#2496ED" },
  "Kubernetes": { icon: <SiKubernetes />, color: "#326CE5" },
  "System Design": { icon: <FaNetworkWired />, color: "#10B981" },
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Languages & Frontend": <FaCode className="text-[#61DAFB]" />,
  "Backend & Databases": <FaServer className="text-[#5FA04E]" />,
  "Security & Architecture": <FaShieldAlt className="text-[#EAB308]" />,
  "Tools & Currently Learning": <FaCubes className="text-[#A855F7]" />,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { language, t } = useLanguage();

  const categories = ["All", ...siteConfig.skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === "All"
      ? siteConfig.skillCategories
      : siteConfig.skillCategories.filter((c) => c.title === selectedCategory);

  // Split skills into 2 sets for dual-moving marquees
  const row1Skills = [
    "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", 
    "Node.js", "NestJS", "Express.js", "WebSockets"
  ];
  const row2Skills = [
    "PostgreSQL", "MongoDB", "Prisma", "TypeORM", "GSAP", 
    "Framer Motion", "Docker", "Redis Caching", "Clean Architecture", "Git & GitHub"
  ];

  const duplicatedRow1 = [...row1Skills, ...row1Skills, ...row1Skills];
  const duplicatedRow2 = [...row2Skills, ...row2Skills, ...row2Skills];

  return (
    <Section
      id="skills"
      title={t.skills.title}
      subtitle={t.skills.subtitle}
    >
      {/* Dynamic Animated Sliding Strips (Marquees) */}
      <div className="mb-14 overflow-hidden space-y-4 relative py-2">
        {/* Soft Side Blurs */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-2">
          <Pause size={13} className="text-primary animate-pulse" />
          <span>{language === "ar" ? "أشرطة التقنيات المتحركة (قف بمؤشر الفأرة للإيقاف)" : "Interactive Sliding Tech Ribbons (Hover to pause)"}</span>
        </div>

        {/* Row 1: Sliding Left */}
        <div className="flex animate-marquee gap-4">
          {duplicatedRow1.map((skillName, i) => {
            const meta = skillIcons[skillName];
            return (
              <div
                key={`row1-${skillName}-${i}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-2xl border border-border/50 bg-secondary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-sm shrink-0 group cursor-default"
              >
                <span className="text-lg group-hover:scale-125 transition-transform" style={{ color: meta?.color }}>
                  {meta?.icon || <FaCode />}
                </span>
                <span className="text-xs md:text-sm font-bold text-foreground/90 group-hover:text-primary transition-colors">
                  {skillName}
                </span>
              </div>
            );
          })}
        </div>

        {/* Row 2: Sliding Right (Reverse) */}
        <div className="flex animate-marquee-reverse gap-4">
          {duplicatedRow2.map((skillName, i) => {
            const meta = skillIcons[skillName];
            return (
              <div
                key={`row2-${skillName}-${i}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-2xl border border-border/50 bg-secondary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-sm shrink-0 group cursor-default"
              >
                <span className="text-lg group-hover:scale-125 transition-transform" style={{ color: meta?.color }}>
                  {meta?.icon || <FaCode />}
                </span>
                <span className="text-xs md:text-sm font-bold text-foreground/90 group-hover:text-primary transition-colors">
                  {skillName}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "text-white shadow-lg shadow-primary/25 scale-105"
                  : "text-muted-foreground hover:text-foreground bg-secondary/40 hover:bg-secondary/70 border border-border/40"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              {cat === "All" && language === "ar" ? "كل المهارات" : cat}
            </button>
          );
        })}
      </div>

      {/* Detailed Skill Cards Showcase */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => (
            <motion.div
              layout
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-card/90 via-card/50 to-card/20 backdrop-blur-xl p-7 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Header */}
              <div className="flex items-center justify-between mb-7 pb-4 border-b border-border/40">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-primary/10 text-xl group-hover:scale-115 transition-transform duration-300">
                    {categoryIcons[category.title] || <FaCode className="text-primary" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.skills.length} {language === "ar" ? "تقنيات رئيسية" : "Core Capabilities"}
                    </p>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-secondary/80 text-primary group-hover:scale-110 transition-transform">
                  <Sparkles size={16} />
                </div>
              </div>

              {/* Skills Badges Grid with Proficiency Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const meta = skillIcons[skill.name];
                  const levelBadgeColor =
                    skill.level === "Expert"
                      ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
                      : skill.level === "Advanced"
                      ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
                      : "text-amber-400 bg-amber-500/10 border-amber-500/20";

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex items-center justify-between px-3.5 py-3 rounded-2xl border border-border/50 bg-secondary/30 hover:bg-primary/10 hover:border-primary/40 transition-all duration-200 shadow-sm group/item"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xl flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"
                          style={{ color: meta?.color }}
                        >
                          {meta?.icon || <FaCode />}
                        </span>
                        <span className="text-xs md:text-sm font-semibold text-foreground/90">
                          {skill.name}
                        </span>
                      </div>

                      {skill.level && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${levelBadgeColor} shrink-0`}
                        >
                          {skill.level}
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
