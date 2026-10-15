"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, 
  SiTypescript, SiJavascript, SiMongodb, SiPostgresql, 
  SiTailwindcss, SiDocker, SiRedis, SiPrisma, SiFramer
} from "react-icons/si";
import { FaCode, FaNetworkWired } from "react-icons/fa";

const techIcons: Record<string, React.ReactNode> = {
  "React.js": <SiReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "Node.js": <SiNodedotjs className="text-[#5FA04E]" />,
  "NestJS": <SiNestjs className="text-[#E0234E]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "PostgreSQL": <SiPostgresql className="text-[#4169E1]" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "WebSockets": <FaNetworkWired className="text-[#38BDF8]" />,
  "Socket.io": <FaCode className="text-white" />,
  "GSAP": <FaCode className="text-[#88CE02]" />,
  "Framer Motion": <SiFramer className="text-[#0055FF]" />,
  "Docker": <SiDocker className="text-[#2496ED]" />,
  "Redis": <SiRedis className="text-[#DC382D]" />,
  "Prisma": <SiPrisma className="text-white" />,
  "TypeORM": <FaCode className="text-[#FE0902]" />,
};

export function MarqueeBanner() {
  const items = [...siteConfig.marqueeSkills, ...siteConfig.marqueeSkills];

  return (
    <div className="w-full py-8 overflow-hidden relative border-y border-border/40 bg-gradient-to-r from-background via-card/40 to-background backdrop-blur-sm">
      {/* Subtle Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee gap-8 items-center cursor-default">
        {items.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-border/50 bg-secondary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-sm shrink-0 group"
          >
            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
              {techIcons[skill.name] || <FaCode style={{ color: skill.color }} />}
            </span>
            <span className="text-sm font-semibold tracking-wide text-foreground/90 group-hover:text-primary transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
