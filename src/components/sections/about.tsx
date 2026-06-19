"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { GraduationCap, Heart, Code2, Rocket, Zap, Target } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { language } = useLanguage();

  const features = [
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      titleEn: "Education",
      titleAr: "التعليم",
      descriptionEn:
        "Computer Science graduate from Arab Open University (Egypt) in 2026.",
      descriptionAr: "خريج علوم حاسب من الجامعة العربية المفتوحة (مصر) 2026.",
    },
    {
      icon: <Code2 className="text-primary" size={24} />,
      titleEn: "Full Stack",
      titleAr: "متكامل",
      descriptionEn:
        "Proficient in MERN stack, Next.js, and NestJS for complete web solutions.",
      descriptionAr:
        "خبرة في مجموعة MERN و Next.js و NestJS للحصول على حلول ويب كاملة.",
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      titleEn: "AI Integration",
      titleAr: "تكامل الذكاء الاصطناعي",
      descriptionEn:
        "Experienced integrating AI models into production applications with TensorFlow.",
      descriptionAr:
        "خبرة في تكامل نماذج الذكاء الاصطناعي في التطبيقات باستخدام TensorFlow.",
    },
    {
      icon: <Rocket className="text-primary" size={24} />,
      titleEn: "DevOps & Tools",
      titleAr: "أدوات التطوير",
      descriptionEn:
        "Learning Docker, Kubernetes, CI/CD, and system design principles.",
      descriptionAr: "تعلم Docker و Kubernetes و CI/CD وفن تصميم الأنظمة.",
    },
    {
      icon: <Heart className="text-primary" size={24} />,
      titleEn: "Quality Focused",
      titleAr: "التركيز على الجودة",
      descriptionEn:
        "Passionate about clean code, design patterns, and best practices.",
      descriptionAr: "شغوف بكود نظيف وأنماط التصميم وأفضل الممارسات.",
    },
    {
      icon: <Target className="text-primary" size={24} />,
      titleEn: "Growth Mindset",
      titleAr: "عقلية النمو",
      descriptionEn:
        "Continuous learner, always exploring new technologies and challenges.",
      descriptionAr: "متعلم مستمر، يستكشف باستمرار تقنيات وتحديات جديدة.",
    },
  ];

  return (
    <Section
      id="about"
      title={language === "ar" ? "عني" : "About Me"}
      subtitle={
        language === "ar"
          ? "نظرة عامة على من أكون والمجالات التي أركز عليها."
          : "A brief overview of who I am and what I focus on."
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-card/60 to-card/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {language === "ar" ? feature.titleAr : feature.titleEn}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {language === "ar"
                ? feature.descriptionAr
                : feature.descriptionEn}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-8 md:p-12 rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {language === "ar" ? "رحلتي والرؤية" : "My Journey & Vision"}
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground text-base leading-relaxed">
              {language === "ar"
                ? "أنا مطور متكامل مخصص مع أساس قوي في علوم الحاسب. زودتني رحلتي الأكاديمية بمبادئ أساسية قوية، بينما دفعتني شغفتي بالتكنولوجيا لإتقان تقنيات الويب الحديثة مثل Next.js و Node.js و MongoDB."
                : "I am a dedicated Junior Full Stack Developer with a strong foundation in Computer Science. My academic journey at Arab Open University has equipped me with fundamental principles, while my passion for technology has driven me to master modern web technologies like Next.js, Node.js, and MongoDB."}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              {language === "ar"
                ? "أؤمن ببناء برامج لا تكون وظيفية فقط، بل محسّنة للغاية وموجهة نحو المستخدم. هدفي هو المساهمة في مشاريع ذات معنى والاستمرار في النمو كمطور محترف في فريق ديناميكي."
                : "I believe in building software that is not just functional, but also highly optimized and user-centric. My goal is to contribute to meaningful projects and continue growing as a professional developer in a dynamic team."}
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
