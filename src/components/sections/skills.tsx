"use client";

import React from "react";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/language-provider";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, 
  SiTypescript, SiJavascript, SiMongodb, SiPostgresql, 
  SiRedux, SiTailwindcss, SiDocker, SiPython, SiFramer, 
  SiHtml5, SiPrisma, SiJest, SiRedis, SiLaravel, SiPhp
} from "react-icons/si";
import { 
  FaGitAlt, FaCode, FaCubes, FaServer, FaDatabase, 
  FaShieldAlt, FaLock, FaLayerGroup, FaNetworkWired, 
  FaJava, FaLaptopCode
} from "react-icons/fa";
import { Pause, Sparkles, Layers, Cpu, Code2, Globe } from "lucide-react";

const skillIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  "React.js": { icon: <SiReact />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs />, color: "#FFFFFF" },
  "TypeScript": { icon: <SiTypescript />, color: "#3178C6" },
  "JavaScript": { icon: <SiJavascript />, color: "#F7DF1E" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4" },
  "GSAP": { icon: <FaCode />, color: "#88CE02" },
  "Shadcn UI": { icon: <FaCubes />, color: "#FFFFFF" },
  "Framer Motion": { icon: <SiFramer />, color: "#0055FF" },
  "Redux Toolkit": { icon: <SiRedux />, color: "#764ABC" },
  "HTML5 & CSS3": { icon: <SiHtml5 />, color: "#E34F26" },
  "Zustand": { icon: <FaCode />, color: "#E5E7EB" },

  "Node.js": { icon: <SiNodedotjs />, color: "#5FA04E" },
  "Express.js": { icon: <SiExpress />, color: "#E5E7EB" },
  "NestJS": { icon: <SiNestjs />, color: "#E0234E" },
  "Laravel": { icon: <SiLaravel />, color: "#FF2D20" },
  "REST APIs": { icon: <FaServer />, color: "#10B981" },
  "GraphQL": { icon: <FaCode />, color: "#E10098" },
  "WebSockets": { icon: <FaNetworkWired />, color: "#38BDF8" },
  "Socket.io": { icon: <FaCode />, color: "#E5E7EB" },
  "PostgreSQL": { icon: <SiPostgresql />, color: "#4169E1" },
  "MongoDB": { icon: <SiMongodb />, color: "#47A248" },
  "Prisma": { icon: <SiPrisma />, color: "#2D3748" },
  "TypeORM": { icon: <FaDatabase />, color: "#FE0902" },

  "Data Structures": { icon: <FaCubes />, color: "#8B5CF6" },
  "Algorithms": { icon: <FaCode />, color: "#EC4899" },
  "Software Engineering": { icon: <FaLaptopCode />, color: "#0EA5E9" },
  "Operating Systems (OS)": { icon: <FaServer />, color: "#F59E0B" },
  "OOP (Object-Oriented)": { icon: <FaLayerGroup />, color: "#10B981" },
  "Database Systems": { icon: <FaDatabase />, color: "#6366F1" },
  "Computer Networks": { icon: <FaNetworkWired />, color: "#06B6D4" },
  "Clean Architecture": { icon: <FaLayerGroup />, color: "#38BDF8" },
  "Design Patterns": { icon: <FaCubes />, color: "#A855F7" },
  "SOLID Principles": { icon: <FaCode />, color: "#EC4899" },

  "PHP": { icon: <SiPhp />, color: "#777BB4" },
  "Java": { icon: <FaJava />, color: "#007396" },
  "C#": { icon: <FaCode />, color: "#239120" },
  "Python": { icon: <SiPython />, color: "#3776AB" },
  "SQL": { icon: <FaDatabase />, color: "#0284C7" },
  "Git & GitHub": { icon: <FaGitAlt />, color: "#F05032" },
  "Docker": { icon: <SiDocker />, color: "#2496ED" },
  "Redis Caching": { icon: <SiRedis />, color: "#DC382D" },
  "JWT & RBAC": { icon: <FaShieldAlt />, color: "#EAB308" },
  "Jest Testing": { icon: <SiJest />, color: "#C21325" },
};

export function Skills() {
  const { language, t } = useLanguage();
  const streams = siteConfig.skillsStreams;

  const streamConfigs = [
    {
      id: "frontend",
      title: t.skills.frontend,
      icon: <Code2 size={18} className="text-cyan-400" />,
      items: [...streams.frontend, ...streams.frontend, ...streams.frontend],
      reverse: false,
    },
    {
      id: "backend",
      title: t.skills.backend,
      icon: <FaServer className="text-emerald-400" />,
      items: [...streams.backend, ...streams.backend, ...streams.backend],
      reverse: true,
    },
    {
      id: "cs",
      title: t.skills.cs,
      icon: <Cpu size={18} className="text-purple-400" />,
      items: [...streams.csFundamentals, ...streams.csFundamentals, ...streams.csFundamentals],
      reverse: false,
    },
    {
      id: "tools",
      title: t.skills.tools,
      icon: <Layers size={18} className="text-pink-400" />,
      items: [...streams.languagesAndTools, ...streams.languagesAndTools, ...streams.languagesAndTools],
      reverse: true,
    },
  ];

  return (
    <Section
      id="skills"
      title={t.skills.title}
      subtitle={t.skills.subtitle}
    >
      {/* Interactive Pause Notice */}
      <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground mb-12">
        <Pause size={14} className="text-primary animate-pulse" />
        <span className="glass-pill px-4 py-1.5 rounded-full shadow-sm">
          {t.skills.pauseNotice}
        </span>
      </div>

      {/* 4 Interactive Infinite Moving Strips */}
      <div className="space-y-8 relative overflow-hidden py-4">
        {/* Soft Edge Blurs */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {streamConfigs.map((stream) => (
          <div key={stream.id} className="space-y-3">
            {/* Stream Category Header */}
            <div className="flex items-center gap-2.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground/80">
              {stream.icon}
              <span>{stream.title}</span>
            </div>

            {/* Marquee Track */}
            <div className={`flex gap-4 ${stream.reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
              {stream.items.map((skill, idx) => {
                const meta = skillIcons[skill.name];
                return (
                  <div
                    key={`${stream.id}-${skill.name}-${idx}`}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card-floating glass-card-hover shrink-0 cursor-default group"
                  >
                    <span
                      className="text-xl group-hover:scale-125 transition-transform duration-300"
                      style={{ color: meta?.color || skill.color }}
                    >
                      {meta?.icon || <FaCode />}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
