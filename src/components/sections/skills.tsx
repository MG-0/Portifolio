"use client";

import { motion } from "framer-motion";
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

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend": <FaCode />,
  "Backend": <FaServer />,
  "Databases": <FaDatabase />,
  "Tools & DevOps": <FaCubes />,
  "Languages": <FaGlobe />,
  "AI & ML": <FaRobot />,
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="My comprehensive toolbox of technologies and methodologies for building scalable applications."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/30 to-secondary/10 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Category header */}
            <div className="relative z-10 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl text-primary">{categoryIcons[category.title] || <FaCode />}</div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </div>

            {/* Skills grid */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.03 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/15 hover:border-primary/40 transition-all duration-200 cursor-default shadow-sm"
                >
                  <div className="text-base flex-shrink-0 group-hover:scale-110 transition-transform">
                    {skillIcons[skill.name] || <FaCode className="text-primary" />}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
