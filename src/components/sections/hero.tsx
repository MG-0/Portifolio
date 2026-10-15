"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { FileDown, Mail, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { 
  GithubIcon as Github, 
  LinkedinIcon as Linkedin,
  MediumIcon as Medium,
  WhatsappIcon as Whatsapp
} from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { t, language } = useLanguage();
  const [displayedName, setDisplayedName] = useState("");
  const targetName = siteConfig.name;

  useEffect(() => {
    let index = 0;
    setDisplayedName("");
    const interval = setInterval(() => {
      if (index < targetName.length) {
        setDisplayedName(targetName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 110);

    return () => clearInterval(interval);
  }, [targetName]);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-16 px-6 overflow-hidden bg-grid-pattern">
      {/* Dynamic Animated Ambient Background Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.6, 0.35],
          x: [0, 40, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-28 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-28 w-[450px] h-[450px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [0.9, 1.15, 0.9],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" 
      />

      {/* Floating Callout Pill to Latest Freelance Project */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 z-10"
      >
        <a
          href="https://www.rewaq-decor.com/en"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill text-xs md:text-sm font-semibold hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 shadow-lg shadow-primary/5"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-muted-foreground">{t.hero.freelanceLive}</span>
          <span className="text-foreground group-hover:text-primary font-bold transition-colors">
            Rewaq Decor Luxury Architecture
          </span>
          <ArrowUpRight size={15} className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>

      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-start"
          >
            {/* Greeting & Typewriter Title */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs md:text-sm font-bold tracking-wide uppercase mb-5">
              <Sparkles size={14} className="animate-pulse" />
              <span>{t.hero.hi} {language === "ar" ? "محمود جمال" : "Mahmoud Gamal"}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-400">
                {displayedName}
              </span>
              <span className="animate-pulse text-primary font-light">|</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground/90 mb-4 tracking-tight">
              {t.role}
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="rounded-2xl px-7 py-6 text-base font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all bg-gradient-to-r from-primary via-indigo-600 to-purple-600 text-white border-0" 
                asChild
              >
                <Link href="#projects">
                  {t.hero.viewProjects}
                  <ArrowUpRight className={language === "ar" ? "mr-2 h-5 w-5" : "ml-2 h-5 w-5"} />
                </Link>
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-2xl px-6 py-6 text-base font-bold hover:scale-105 transition-all border-primary/40 bg-card/60 backdrop-blur-md hover:bg-primary/10 hover:border-primary" 
                asChild
              >
                <a href="/cv.pdf" download="Mahmoud_Gamal_Bakheet_CV.pdf">
                  <FileDown className={language === "ar" ? "ml-2 h-5 w-5" : "mr-2 h-5 w-5"} />
                  {t.hero.downloadCv}
                </a>
              </Button>

              <Button 
                variant="secondary" 
                size="lg" 
                className="rounded-2xl px-5 py-6 text-base font-bold hover:scale-105 transition-all border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20" 
                asChild
              >
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Whatsapp size={20} className={language === "ar" ? "ml-2" : "mr-2"} />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Social Links with Dynamic Brand Hover Glows */}
            <div className="flex items-center gap-3.5 text-muted-foreground">
              <Link 
                href={siteConfig.github} 
                target="_blank" 
                className="p-3 rounded-2xl border border-border/60 bg-secondary/40 hover:text-white hover:border-[#2da44f] hover:bg-[#2da44f]/20 hover:scale-115 shadow-sm transition-all duration-300"
                title="GitHub Repositories"
              >
                <Github size={20} />
              </Link>
              <Link 
                href={siteConfig.linkedin} 
                target="_blank" 
                className="p-3 rounded-2xl border border-border/60 bg-secondary/40 hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2]/20 hover:scale-115 shadow-sm transition-all duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </Link>
              <Link 
                href={siteConfig.medium} 
                target="_blank" 
                className="p-3 rounded-2xl border border-border/60 bg-secondary/40 hover:text-white hover:border-[#00AB6C] hover:bg-[#00AB6C]/20 hover:scale-115 shadow-sm transition-all duration-300"
                title="Medium Articles"
              >
                <Medium size={20} />
              </Link>
              <Link 
                href={siteConfig.whatsapp} 
                target="_blank" 
                className="p-3 rounded-2xl border border-border/60 bg-secondary/40 hover:text-white hover:border-[#25D366] hover:bg-[#25D366]/20 hover:scale-115 shadow-sm transition-all duration-300"
                title="WhatsApp Direct"
              >
                <Whatsapp size={20} />
              </Link>
              <Link 
                href={`mailto:${siteConfig.email}`} 
                className="p-3 rounded-2xl border border-border/60 bg-secondary/40 hover:text-white hover:border-[#EA4335] hover:bg-[#EA4335]/20 hover:scale-115 shadow-sm transition-all duration-300"
                title="Email Mahmoud"
              >
                <Mail size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Profile Image Column with Futuristic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.35 }}
            className="relative shrink-0"
          >
            {/* Outer Rotating Conic Halo */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-primary via-indigo-500 to-purple-600 opacity-40 blur-xl animate-pulse" />

            <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[430px] rounded-[36px] p-2 bg-gradient-to-tr from-primary via-purple-500/50 to-indigo-500 shadow-2xl overflow-hidden group">
              <div className="w-full h-full rounded-[30px] overflow-hidden relative border border-white/20">
                <Image
                  src="/me.jpg"
                  alt={siteConfig.fullName}
                  fill
                  className="object-cover object-[50%_15%] group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Subtle Image Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 sm:-left-6 bg-card/90 border border-primary/40 px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-2.5"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold whitespace-nowrap text-foreground">
                {t.hero.available}
              </span>
            </motion.div>

            {/* Floating Experience Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-3 -right-3 sm:-right-6 bg-card/90 border border-primary/40 px-4 py-2 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-2"
            >
              <CheckCircle2 size={16} className="text-primary" />
              <span className="text-xs font-extrabold text-foreground">
                Full Stack Specialist
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Impressive Stats Counter Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-3xl glass-card border border-border/60"
        >
          {siteConfig.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-secondary/30 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-300 text-center"
            >
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500 mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                {language === "ar" ? stat.labelAr : stat.labelEn}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
