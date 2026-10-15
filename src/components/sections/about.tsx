"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { 
  GraduationCap, Code2, Rocket, Zap, ShieldCheck, Heart, 
  Terminal, Server, Users, Award, CheckCircle2 
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { siteConfig } from "@/config/site";

export function About() {
  const { language } = useLanguage();

  const highlights = [
    {
      icon: <GraduationCap size={24} className="text-primary" />,
      titleEn: "B.Sc. in Computer Science",
      titleAr: "بكالوريوس علوم الحاسب",
      descEn: "Arab Open University, Egypt (Graduated June 2026). Strong algorithmic foundations & system principles.",
      descAr: "الجامعة العربية المفتوحة بمصر (تخرج يونيو 2026). أساس قوي في الخوارزميات ومبادئ هندسة البرمجيات.",
    },
    {
      icon: <Server size={24} className="text-indigo-400" />,
      titleEn: "Real-Time & Broadcast CG",
      titleAr: "أنظمة البث والـ Real-Time",
      descEn: "Sole engineer on real-time broadcast CG system with WebSocket queues and GSAP overlay integration.",
      descAr: "المهندس الوحيد لنظام جرافيكس البث المباشر مع طوابير WebSocket وتكامل GSAP الاحترافي للبث الحي.",
    },
    {
      icon: <Zap size={24} className="text-amber-400" />,
      titleEn: "Full Stack Mastery",
      titleAr: "احتراف التطوير المتكامل",
      descEn: "Specialized in MERN, Next.js, and NestJS with enterprise clean architecture, DTOs, and REST/GraphQL APIs.",
      descAr: "متخصص في بيئة MERN و Next.js و NestJS مع معمارية نظيفة وأنابيب DTO وواجهات برمجية عالية الكفاءة.",
    },
    {
      icon: <ShieldCheck size={24} className="text-emerald-400" />,
      titleEn: "Clean Architecture & Security",
      titleAr: "معمارية نظيفة وأمان عالي",
      descEn: "Strict adherence to SOLID principles, Design Patterns, RBAC, JWT/OAuth, and zero-compromise security.",
      descAr: "تطبيق صارم لمبادئ SOLID، وأنماط التصميم المعمارية، وحماية الصلاحيات المشددة (RBAC) ومصادقة التوكن.",
    },
    {
      icon: <Users size={24} className="text-pink-400" />,
      titleEn: "Mentorship & Clarity",
      titleAr: "شغف التوجيه ونقل المعرفة",
      descEn: "Passion for mentoring and distilling complex computer science problems into crystal-clear insights.",
      descAr: "شغف كبير بتعليم وتوجيه المطورين وتبسيط أعقد مفاهيم علوم الحاسب إلى أفكار واضحة وسهلة الفهم.",
    },
    {
      icon: <Rocket size={24} className="text-cyan-400" />,
      titleEn: "Rapid Delivery & Freelance",
      titleAr: "تسليم فائق السرعة وأعمال حرة",
      descEn: "Proven ability to ship production platforms within 24h sprints and deliver live luxury commercial platforms.",
      descAr: "قدرة مثبتة على تسليم أنظمة إنتاجية في تحديات 24 ساعة وإنجاز منصات تجارية كبرى مثل Rewaq Decor.",
    },
  ];

  return (
    <Section
      id="about"
      title={language === "ar" ? "عني وعن رحلتي" : "About My Journey"}
      subtitle={
        language === "ar"
          ? "الركائز الهندسية، الرؤية المهنية، والمعايير التي تحكم بناء مشاريعي."
          : "Engineering philosophy, core competencies, and the standards behind my software systems."
      }
    >
      {/* 6 Key Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative rounded-3xl border border-border/60 bg-gradient-to-b from-card/90 via-card/50 to-card/20 backdrop-blur-xl p-7 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 cursor-default flex flex-col"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="w-14 h-14 rounded-2xl bg-secondary/60 flex items-center justify-center mb-5 group-hover:scale-115 group-hover:bg-primary/15 transition-all duration-300 shadow-sm border border-border/40">
              {item.icon}
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors">
              {language === "ar" ? item.titleAr : item.titleEn}
            </h3>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {language === "ar" ? item.descAr : item.descEn}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Narrative & Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-border/60 bg-gradient-to-br from-secondary/40 via-card/70 to-card p-8 sm:p-12 backdrop-blur-xl shadow-xl hover:border-primary/40 transition-all"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-foreground">
            {language === "ar" ? "الفلسفة الهندسية وراء الكود" : "Engineering Philosophy & Mindset"}
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {language === "ar"
              ? "أنا مطور برمجيات متكامل يؤمن بأن الكود البرمجي الممتاز ليس مجرد شحن ميزات سريعة، بل هو تصميم أنظمة مرنة تفهم طبيعة المشكلة المعمارية من جذورها. خبرتي في بناء نظام البث المباشر في شركة TKDS وتطوير منصة رواق للديكور علمتني كيف أتعامل مع الضغط العالي وتحديات التزامن المتوازي (Concurrency) لتقديم منتج فائق السرعة والموثوقية."
              : "I am a full-stack engineer who believes that high-caliber code is not just about shipping features fast, but about constructing resilient systems that address architectural challenges at their core. My experience building the real-time broadcast graphics system at TKDS and delivering high-performance platforms like Rewaq Decor honed my ability to tackle concurrency, zero-downtime reliability, and high-pressure production demands."}
          </p>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {language === "ar"
              ? "تركيزي ينصب حالياً على تعميق استخدام NestJS بمعمارية طبقية نظيفة، وتقنيات التخزين المؤقت المتقدم بـ Redis، وتصميم الأنظمة الموزعة (System Design)، مع مواصلة استكشاف تكامل نماذج الذكاء الاصطناعي مع الواجهات الحديثة."
              : "My active focus centers around advancing clean layered architectures with NestJS, distributed caching strategies via Redis, and scalable System Design patterns, while bridging modern frontend fluidity with production-ready AI services."}
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
