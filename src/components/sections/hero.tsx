"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { FileDown, Mail } from "lucide-react";
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
    }, 120);

    return () => clearInterval(interval);
  }, [targetName]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Dynamic Animated Ambient Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/25 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" 
      />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 md:right-24 hidden lg:block w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-md shadow-lg p-2.5"
      >
        <div className="w-full h-full rounded-lg bg-primary/30 animate-pulse" />
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/3 left-10 md:left-24 hidden lg:block w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md shadow-lg p-3"
      >
        <div className="w-full h-full rounded-full bg-indigo-500/30 animate-pulse" />
      </motion.div>

      <div className="max-w-5xl mx-auto z-10">
        <div className="flex flex-col items-center text-center gap-12">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-primary via-indigo-500/40 to-indigo-600 shadow-2xl hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background relative">
                <Image
                  src="/me.png"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-[50%_20%]"
                  priority
                />
              </div>
            </div>
            
            {/* Floating Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-2 -right-4 bg-background/90 border border-primary/30 px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping absolute" />
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                <span className="text-xs font-bold whitespace-nowrap">{t.hero.available}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Typewriter Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              {t.hero.hi}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-indigo-500 dark:from-indigo-400 dark:via-primary dark:to-indigo-300 pb-1 inline-inline-block">
                {displayedName}
                <span className="animate-pulse text-primary font-normal">|</span>
              </span>
            </h1>

            <h2 className="text-xl md:text-3xl font-semibold text-muted-foreground mb-8">
              {t.role}
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10 rtl:space-x-reverse">
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all w-full sm:w-auto" asChild>
                <Link href="#projects">{t.hero.viewProjects}</Link>
              </Button>

              <Button variant="outline" size="lg" className="rounded-full hover:scale-105 transition-all border-primary/30 w-full sm:w-auto" asChild>
                <a href="/cv.pdf" download="Mahmoud_Gamal_CV.pdf">
                  <FileDown className={language === "ar" ? "ml-2 h-5 w-5" : "mr-2 h-5 w-5"} />
                  {t.hero.downloadCv}
                </a>
              </Button>

              <Button variant="secondary" size="lg" className="rounded-full hover:scale-105 transition-all w-full sm:w-auto border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20" asChild>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Whatsapp size={20} className={language === "ar" ? "ml-2" : "mr-2"} />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Social Links Icons with Individual Brand Hover Colors */}
            <div className="flex flex-wrap items-center justify-center gap-5 rtl:space-x-reverse text-muted-foreground">
              <Link 
                href={siteConfig.github} 
                target="_blank" 
                className="p-3 rounded-full border border-border/60 bg-secondary/40 hover:text-[#2da44f] dark:hover:text-[#3fb950] hover:border-[#2da44f]/50 hover:bg-[#2da44f]/10 hover:scale-110 shadow-sm transition-all duration-300"
                title="GitHub"
              >
                <Github size={22} />
              </Link>
              <Link 
                href={siteConfig.linkedin} 
                target="_blank" 
                className="p-3 rounded-full border border-border/60 bg-secondary/40 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:scale-110 shadow-sm transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </Link>
              <Link 
                href={siteConfig.medium} 
                target="_blank" 
                className="p-3 rounded-full border border-border/60 bg-secondary/40 hover:text-[#00AB6C] hover:border-[#00AB6C]/50 hover:bg-[#00AB6C]/10 hover:scale-110 shadow-sm transition-all duration-300"
                title="Medium"
              >
                <Medium size={22} />
              </Link>
              <Link 
                href={siteConfig.whatsapp} 
                target="_blank" 
                className="p-3 rounded-full border border-border/60 bg-secondary/40 hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:scale-110 shadow-sm transition-all duration-300"
                title="WhatsApp"
              >
                <Whatsapp size={22} />
              </Link>
              <Link 
                href={`mailto:${siteConfig.email}`} 
                className="p-3 rounded-full border border-border/60 bg-secondary/40 hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:bg-[#EA4335]/10 hover:scale-110 shadow-sm transition-all duration-300"
                title="Email"
              >
                <Mail size={22} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

