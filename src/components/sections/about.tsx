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
      descEn: "Arab Open University, Egypt (Graduated June 2026). Rigorous academic grounding in Data Structures, Algorithms, OS, and Software Engineering.",
      descAr: "الجامعة العربية المفتوحة بمصر (تخرج يونيو 2026). تأهيل أكاديمي متين في هياكل البيانات، الخوارزميات، نظم التشغيل، وهندسة البرمجيات.",
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
      titleEn: "Full Stack (MERN, Next.js, NestJS, Laravel)",
      titleAr: "التطوير المتكامل (MERN, Next.js, NestJS, Laravel)",
      descEn: "Deep expertise across MERN, Next.js, NestJS, and Laravel building robust layered APIs and fluid frontends.",
      descAr: "خبرة متقدمة في حزمة MERN و Next.js و NestJS و Laravel في بناء واجهات برمجية طبقية وواجهات مستخدم انسيابية.",
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
      titleEn: "Mentorship & Teaching",
      titleAr: "شغف التوجيه ونقل المعرفة",
      descEn: "Passion for mentoring and distilling complex computer science problems into crystal-clear insights.",
      descAr: "شغف كبير بتعليم وتوجيه المطورين وتبسيط أعقد مفاهيم علوم الحاسب إلى أفكار واضحة وسهلة الفهم.",
    },
    {
      icon: <Rocket size={24} className="text-cyan-400" />,
      titleEn: "Full Digital Platform Delivery",
      titleAr: "تسليم منصات رقمية متكاملة",
      descEn: "Delivering complete end-to-end platforms: client frontend, custom admin dashboards, and robust backend APIs.",
      descAr: "بناء وتسليم منصات متكاملة من الصفر: واجهات عملاء تفاعلية، لوحات تحكم للمسؤولين، وواجهات خلفية عالية الكفاءة.",
    },
  ];

  return (
    <Section
      id="about"
      title={language === "ar" ? "عني وعن رحلتي" : "About My Journey"}
      subtitle={
        language === "ar"
          ? "الركائز الهندسية، الرؤية المهنية، والمعايير الأكاديمية التي تحكم بناء مشاريعي."
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
            className="group relative rounded-3xl glass-card-floating glass-card-hover p-7 cursor-default flex flex-col"
          >
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
        className="rounded-3xl glass-card-floating p-8 sm:p-12 shadow-xl"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-foreground">
            {language === "ar" ? "الفلسفة الهندسية وراء الكود" : "Engineering Philosophy & Mindset"}
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {language === "ar"
              ? "أنا مطور برمجيات متكامل يؤمن بأن الكود البرمجي الممتاز ليس مجرد شحن ميزات سريعة، بل هو تصميم أنظمة مرنة تفهم طبيعة المشكلة المعمارية من جذورها. خبرتي في بناء نظام البث المباشر في شركة TKDS وتطوير المنصات المتكاملة علمتني كيف أتعامل مع الضغط العالي وتحديات التزامن المتوازي (Concurrency) لتقديم منتج فائق السرعة والموثوقية."
              : "I am a full-stack engineer who believes that high-caliber code is not just about shipping features fast, but about constructing resilient systems that address architectural challenges at their core. My experience building the real-time broadcast graphics system at TKDS and delivering high-performance platforms honed my ability to tackle concurrency, zero-downtime reliability, and high-pressure production demands."}
          </p>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {language === "ar"
              ? "تشمل حزمتي التقنية MERN و Next.js و NestJS و Laravel، وأركز باستمرار على المعمارية الطبقية النظيفة، ومبادئ SOLID، واستراتيجيات التخزين المؤقت، وتصميم الأنظمة الموزعة."
              : "My active stack spans MERN, Next.js, NestJS, and Laravel, focusing consistently on clean layered architectures, SOLID principles, caching strategies, and scalable system design."}
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
