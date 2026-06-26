"use client";

import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, 
  SiTypescript, SiJavascript, SiMongodb, SiPostgresql, 
  SiRedux, SiTailwindcss, SiDocker, SiKubernetes, 
  SiGraphql, SiPython, SiFlask, SiFramer, SiBootstrap,
  SiHtml5, SiPrisma, SiSwagger, SiPostman, SiSqlite,
  SiTensorflow, SiReactquery
} from "react-icons/si";
import { FaGitAlt, FaCode, FaCubes, FaServer, FaCodeBranch, FaDatabase, FaGlobe, FaRobot, FaJava } from "react-icons/fa";

const skillIcons: Record<string, React.ReactNode> = {
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
  "CI/CD": <FaServer className="text-primary" />,
  "GraphQL": <SiGraphql className="text-[#E10098]" />,
  "React Native": <SiReact className="text-[#61DAFB]" />,
  "Python": <SiPython className="text-[#3776AB]" />,
  "Flask": <SiFlask className="text-foreground" />,
  "Git & GitHub": <FaGitAlt className="text-[#F05032]" />,
  "Clean Code": <FaCode className="text-primary" />,
  "Design Patterns": <FaCubes className="text-primary" />,
  "System Design": <FaServer className="text-primary" />,
  "OOP": <FaCodeBranch className="text-primary" />,
  "Data Structures": <FaCubes className="text-primary" />,
  "Zustand": <FaCode className="text-[#443E38]" />,
  "React Query": <SiReactquery className="text-[#FF4154]" />,
  "Shadcn UI": <FaCubes className="text-foreground" />,
  "Framer Motion": <SiFramer className="text-[#0055FF]" />,
  "React Hook Form": <FaCode className="text-[#EC5990]" />,
  "Zod": <FaCode className="text-[#3E67B1]" />,
  "i18n": <FaGlobe className="text-[#26A69A]" />,
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

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Expertise"
      subtitle="The core technologies and concepts I use to build robust applications."
    >
      <div className="flex flex-col gap-12">
        {siteConfig.skillCategories.map((category, catIndex) => {
          const isCore = category.title === "Core Stack";
          return (
            <div
              key={catIndex}
              className="flex flex-col gap-6"
            >
              <h3 className={`font-bold text-foreground ${isCore ? "text-2xl" : "text-xl text-muted-foreground"}`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex items-center gap-2 md:gap-3 rounded-xl border bg-card hover:bg-secondary hover:border-primary/40 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default ${
                      isCore ? "px-4 md:px-5 py-2 md:py-3" : "px-3 md:px-4 py-1.5 md:py-2 opacity-90 hover:opacity-100"
                    }`}
                  >
                    <div className={`${isCore ? "text-xl md:text-2xl" : "text-lg md:text-xl"} group-hover:scale-110 transition-transform duration-300`}>
                      {skillIcons[skill.name] || <FaCode className="text-primary" />}
                    </div>
                    <span className={`font-semibold text-foreground/90 hover:text-foreground transition-colors ${
                      isCore ? "text-sm md:text-base" : "text-xs md:text-sm"
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
