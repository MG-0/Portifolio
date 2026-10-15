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
    <section className="relative min-h-[88vh] flex flex-col justify-center items-center pt-32 pb-16 px-6 overflow-hidden">
      {/* Floating Animated Mesh Ambient Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.6, 0.35],
          x: [0, 40, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-28 w-96 h-96 bg-primary/25 rounded-full blur-[130px] pointer-events-none -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.55, 0.25],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-28 w-[450px] h-[450px] bg-indigo-600/25 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-start"
          >
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-primary text-xs md:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
              <Sparkles size={14} className="animate-pulse" />
              <span>{t.hero.hi} {language === "ar" ? "محمود جمال" : "Mahmoud Gamal"}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
                {displayedName}
              </span>
              <span className="animate-pulse text-primary font-light">|</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground/90 mb-5 tracking-tight">
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
                <a href="/cv.pdf" download="Mahmoud_Gamal_CV.pdf">
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

            {/* Social Links */}
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

          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.35 }}
            className="relative shrink-0"
          >
            {/* Outer Rotating Conic Halo */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-primary via-indigo-500 to-purple-600 opacity-35 blur-xl animate-pulse" />

            <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[430px] rounded-[36px] p-2 bg-gradient-to-tr from-primary via-purple-500/50 to-indigo-500 shadow-2xl overflow-hidden group">
              <div className="w-full h-full rounded-[30px] overflow-hidden relative border border-white/20">
                <Image
                  src="/me.jpg"
                  alt={siteConfig.fullName}
                  fill
                  className="object-cover object-[50%_15%] group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
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

            {/* Floating Role Pill */}
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
      </div>
    </section>
  );
}
