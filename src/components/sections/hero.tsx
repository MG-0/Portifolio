"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { FileDown, Mail } from "lucide-react";
import { 
  GithubIcon as Github, 
  LinkedinIcon as Linkedin,
  FacebookIcon as Facebook,
  InstagramIcon as Instagram,
  YoutubeIcon as Youtube
} from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-5xl mx-auto z-10">
        <div className="flex flex-col items-center text-center gap-12">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-primary via-primary/20 to-indigo-600 shadow-2xl">
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
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-2 -right-4 bg-background border border-primary/20 px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              {t.hero.hi} <span className="text-primary">{siteConfig.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
              {t.role}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 rtl:space-x-reverse">
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 w-full sm:w-auto" asChild>
                <Link href="#projects">{t.hero.viewProjects}</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto" asChild>
                <a href="/cv.pdf" download="Mahmoud_Gamal_CV.pdf">
                  <FileDown className={language === "ar" ? "ml-2 h-5 w-5" : "mr-2 h-5 w-5"} />
                  {t.hero.downloadCv}
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="rounded-full w-full sm:w-auto" asChild>
                <Link href="#contact">{t.hero.contactMe}</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 rtl:space-x-reverse text-muted-foreground">
              <Link href={siteConfig.github} target="_blank" className="hover:text-primary transition-colors">
                <Github size={24} />
              </Link>
              <Link href={siteConfig.linkedin} target="_blank" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href={siteConfig.facebook} target="_blank" className="hover:text-blue-600 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href={siteConfig.instagram} target="_blank" className="hover:text-pink-600 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href={siteConfig.youtube} target="_blank" className="hover:text-red-600 transition-colors">
                <Youtube size={24} />
              </Link>
              <Link href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                <Mail size={24} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
