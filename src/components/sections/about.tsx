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
          <div
            key={index}
            className="group p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {language === "ar" ? feature.titleAr : feature.titleEn}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {language === "ar"
                ? feature.descriptionAr
                : feature.descriptionEn}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 md:p-12 rounded-3xl border border-border/50 bg-secondary/30 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            {language === "ar" ? "رحلتي والرؤية" : "My Journey & Vision"}
          </h3>
          <div className="space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              {language === "ar"
                ? "مطور متكامل مخلص ذو أساس قوي في علوم الحاسب ودافع حقيقي لفهم كيفية عمل الأشياء من الداخل، وليس مجرد كيفية استخدامها. تشمل تقنياتي الأساسية نظام MERN و Next.js و NestJS، إلى جانب تعمق متزايد في Laravel و PHP — أحب البحث عن \"السبب\" وراء معمارية إطارات العمل، وليس مجرد شحن الميزات بها."
                : "A dedicated Full Stack Developer with a strong foundation in Computer Science and a genuine drive to understand how things really work, not just how to use them. My core stack spans the MERN ecosystem, Next.js, and NestJS, alongside a growing depth in Laravel and PHP — I like digging into the \"why\" behind a framework's architecture, not just shipping features with it."}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              {language === "ar"
                ? "كما أنني أتوسع باستمرار في مجالات جديدة: Spring Boot، استراتيجيات التخزين المؤقت (Caching)، ومفاهيم متقدمة أخرى، ودائماً ما أتطلع لبناء صورة أكثر اكتمالاً حول كيفية تصميم وتطوير التطبيقات الحديثة."
                : "I'm also continuously expanding into new territory: Spring Boot, caching strategies, and other advanced full-stack concepts, always looking to build a more complete picture of how modern applications are designed and scaled."}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              {language === "ar"
                ? "بعيداً عن الكود، لدي شغف قوي بالتوجيه والتدريس، وأستمتع بتبسيط الأفكار التقنية المعقدة إلى رؤى واضحة وسهلة الفهم للآخرين."
                : "Beyond code, I have a strong passion for mentoring and teaching, and I enjoy breaking down complex technical ideas into clear, digestible insights for others."}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
