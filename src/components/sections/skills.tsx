"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, 
  SiTypescript, SiJavascript, SiMongodb, SiPostgresql, 
  SiRedux, SiTailwindcss, SiDocker, SiKubernetes, 
  SiGraphql, SiPython, SiFlask, SiFramer, SiBootstrap,
  SiHtml5, SiPrisma, SiSwagger, SiPostman, SiSqlite,
  SiTensorflow, SiReactquery, SiPhp, SiLaravel, SiJest, SiRedis,
  SiSocketdotio
} from "react-icons/si";
import { 
  FaGitAlt, FaCode, FaCubes, FaServer, FaCodeBranch, 
  FaDatabase, FaGlobe, FaRobot, FaShieldAlt, FaLock, FaLayerGroup, FaNetworkWired, FaJava, FaLaptopCode
} from "react-icons/fa";
import { useLanguage } from "@/components/language-provider";

const skillIcons: Record<string, React.ReactNode> = {
  "React.js": <SiReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-foreground" />,
  "Node.js": <SiNodedotjs className="text-[#5FA04E]" />,
  "Express.js": <SiExpress className="text-foreground" />,
  "NestJS": <SiNestjs className="text-[#E0234E]" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "Java": <FaJava className="text-[#007396]" />,
  "C#": <FaCode className="text-[#239120]" />,
  "Software Engineering": <FaLaptopCode className="text-[#0ea5e9]" />,
  "Data Structures": <FaCubes className="text-[#8b5cf6]" />,
  "Operating Systems": <FaServer className="text-[#f59e0b]" />,
  "OOP": <FaCodeBranch className="text-[#ec4899]" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "PostgreSQL": <SiPostgresql className="text-[#4169E1]" />,
  "Redux": <SiRedux className="text-[#764ABC]" />,
  "GSAP": <FaCode className="text-[#88CE02]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "Docker": <SiDocker className="text-[#2496ED]" />,
  "Kubernetes": <SiKubernetes className="text-[#326CE5]" />,
  "CI/CD": <FaServer className="text-primary" />,
  "GraphQL": <SiGraphql className="text-[#E10098]" />,
  "WebSockets": <FaNetworkWired className="text-[#010101] dark:text-[#38BDF8]" />,
  "Socket.io": <SiSocketdotio className="text-foreground" />,
  "Python": <SiPython className="text-[#3776AB]" />,
  "Flask": <SiFlask className="text-foreground" />,
  "Git & GitHub": <FaGitAlt className="text-[#F05032]" />,
  "Clean Architecture": <FaLayerGroup className="text-[#38BDF8]" />,
  "Design Patterns": <FaCubes className="text-[#A855F7]" />,
  "SOLID": <FaCode className="text-[#EC4899]" />,
  "RBAC": <FaLock className="text-[#EAB308]" />,
  "OAuth": <FaShieldAlt className="text-[#10B981]" />,
  "Laravel Sanctum": <FaShieldAlt className="text-[#FF2D20]" />,
  "System Design": <FaServer className="text-[#6366F1]" />,
  "Zustand": <FaCode className="text-[#443E38]" />,
  "React Query": <SiReactquery className="text-[#FF4154]" />,
  "Shadcn UI": <FaCubes className="text-foreground" />,
  "Framer Motion": <SiFramer className="text-[#0055FF]" />,
  "HTML5 & CSS3": <SiHtml5 className="text-[#E34F26]" />,
  "REST APIs": <FaServer className="text-emerald-500" />,
  "TypeORM": <FaDatabase className="text-[#FE0902]" />,
  "Prisma": <SiPrisma className="text-foreground" />,
  "Mongoose": <SiMongodb className="text-[#880000]" />,
  "JWT": <FaShieldAlt className="text-[#F59E0B]" />,
  "Swagger": <SiSwagger className="text-[#85EA2D]" />,
  "Postman": <SiPostman className="text-[#FF6C37]" />,
  "SQLite": <SiSqlite className="text-[#003B57]" />,
  "SQL": <FaDatabase className="text-[#0284C7]" />,
  "PHP": <SiPhp className="text-[#777BB4]" />,
  "Laravel": <SiLaravel className="text-[#FF2D20]" />,
  "Eloquent ORM": <FaDatabase className="text-[#FF2D20]" />,
  "Sanctum": <FaShieldAlt className="text-[#FF2D20]" />,
  "Jest": <SiJest className="text-[#C21325]" />,
  "Caching (Redis)": <SiRedis className="text-[#DC382D]" />,
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend": <FaCode className="text-[#61DAFB]" />,
  "Backend": <FaServer className="text-[#5FA04E]" />,
  "Databases": <FaDatabase className="text-[#4169E1]" />,
  "Security & Architecture": <FaShieldAlt className="text-[#EAB308]" />,
  "CS Fundamentals": <FaLaptopCode className="text-[#8b5cf6]" />,
  "Tools & DevOps": <FaCubes className="text-[#F05032]" />,
  "Currently Learning": <FaGlobe className="text-[#A855F7]" />,
  "Languages": <FaCodeBranch className="text-[#3178C6]" />,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { language } = useLanguage();

  const categories = ["All", ...siteConfig.skillCategories.map(c => c.title)];

  const filteredCategories = selectedCategory === "All"
    ? siteConfig.skillCategories
    : siteConfig.skillCategories.filter(c => c.title === selectedCategory);

  return (
    <Section
      id="skills"
      title={language === "ar" ? "المهارات والتقنيات" : "Technical Expertise"}
      subtitle={language === "ar" 
        ? "أدواتي وتقنياتي في تطوير وبناء التطبيقات الحديثة والأنظمة المتكاملة"
        : "My complete engineering stack and specialized technical capabilities."}
    >
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                isActive 
                  ? "text-primary-foreground shadow-md shadow-primary/20 scale-105" 
                  : "text-muted-foreground hover:text-foreground bg-secondary/40 hover:bg-secondary/70 border border-border/40"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills Showcase Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => (
            <motion.div
              layout
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-md p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Category Header */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-border/40">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-xl group-hover:scale-110 transition-transform">
                    {categoryIcons[category.title] || <FaCode className="text-primary" />}
                  </div>
                  <h3 className="text-base font-bold tracking-wide">{category.title}</h3>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-secondary/80 text-muted-foreground">
                  {category.skills.length}
                </span>
              </div>

              {/* Skills Badges Grid */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-2xl border border-border/60 bg-secondary/30 hover:bg-primary/10 hover:border-primary/40 transition-all duration-200 shadow-sm cursor-default"
                  >
                    <div className="text-lg flex-shrink-0">
                      {skillIcons[skill.name] || <FaCode className="text-primary" />}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground/90">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

