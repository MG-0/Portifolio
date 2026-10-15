"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Mail, ArrowUp, ExternalLink, Heart } from "lucide-react";
import { 
  GithubIcon as Github, 
  LinkedinIcon as Linkedin, 
  MediumIcon as Medium, 
  WhatsappIcon as Whatsapp 
} from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/60 bg-gradient-to-b from-transparent to-card/60 py-12 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Rights */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start gap-1">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-7 flex items-center justify-center">
              <Image
                src="/logo-white.png"
                alt="MG Logo"
                width={38}
                height={26}
                className="hidden dark:block object-contain"
              />
              <Image
                src="/logo-transparent.png"
                alt="MG Logo"
                width={38}
                height={26}
                className="block dark:hidden object-contain"
              />
            </div>
            <span className="font-extrabold text-foreground text-base">
              {siteConfig.fullName}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            © {currentYear} Mahmoud Gamal. {language === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-5 rtl:space-x-reverse text-muted-foreground">
          <Link
            href={siteConfig.github}
            target="_blank"
            className="p-2.5 rounded-xl border border-border/50 hover:bg-secondary hover:text-foreground transition-all duration-200"
            title="GitHub Repositories"
          >
            <Github size={18} />
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            className="p-2.5 rounded-xl border border-border/50 hover:bg-secondary hover:text-foreground transition-all duration-200"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href={siteConfig.medium}
            target="_blank"
            className="p-2.5 rounded-xl border border-border/50 hover:bg-secondary hover:text-foreground transition-all duration-200"
            title="Medium Blog"
          >
            <Medium size={18} />
          </Link>
          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            className="p-2.5 rounded-xl border border-border/50 hover:bg-secondary hover:text-emerald-500 transition-all duration-200"
            title="WhatsApp Direct"
          >
            <Whatsapp size={18} />
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="p-2.5 rounded-xl border border-border/50 hover:bg-secondary hover:text-foreground transition-all duration-200"
            title="Send Email"
          >
            <Mail size={18} />
          </Link>
        </div>

        {/* Back to Top & Quick Tag */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground hidden sm:block">
            Crafted with Next.js & Tailwind CSS
          </span>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl border border-border/60 bg-secondary/40 hover:bg-primary/20 hover:border-primary/50 text-foreground transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="Scroll to top"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
