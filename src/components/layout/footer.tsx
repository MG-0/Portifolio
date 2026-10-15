"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Mail, ArrowUp } from "lucide-react";
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
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.testimonials, href: "#testimonials" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-border/60 bg-gradient-to-b from-transparent to-card/70 py-12 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Top: Brand & Navigation Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-border/40">
          {/* Brand with Logo & 2-Word Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-7 flex items-center justify-center">
              <Image
                src="/logo-white.png"
                alt="MG Logo"
                width={44}
                height={26}
                className="hidden dark:block object-contain group-hover:scale-105 transition-transform"
              />
              <Image
                src="/logo-transparent.png"
                alt="MG Logo"
                width={44}
                height={26}
                className="block dark:hidden object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="font-extrabold text-foreground text-lg tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          {/* Navigation Links from Navbar */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-8 text-sm font-semibold text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl border border-border/60 bg-secondary/40 hover:bg-primary/20 hover:border-primary/50 text-foreground transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="Scroll to top"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom: Copyright & Social Links */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-5 text-xs text-muted-foreground">
          <p>
            © {currentYear} {siteConfig.name}. {language === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>

          <div className="flex items-center gap-3 sm:gap-3.5">
            <Link
              href={siteConfig.github}
              target="_blank"
              className="p-2.5 rounded-xl border border-border/50 hover:bg-secondary hover:text-foreground transition-all"
              title="GitHub Repositories"
            >
              <Github size={16} />
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              className="p-2.5 rounded-xl border border-border/50 hover:bg-secondary hover:text-foreground transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href={siteConfig.medium}
              target="_blank"
              className="p-2.5 rounded-xl border border-border/50 hover:bg-secondary hover:text-foreground transition-all"
              title="Medium Blog"
            >
              <Medium size={16} />
            </Link>
            <Link
              href={siteConfig.whatsapp}
              target="_blank"
              className="p-2.5 rounded-xl border border-border/50 hover:bg-secondary hover:text-emerald-500 transition-all"
              title="WhatsApp Direct"
            >
              <Whatsapp size={16} />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="p-2.5 rounded-xl border border-border/50 hover:bg-secondary hover:text-foreground transition-all"
              title="Send Email"
            >
              <Mail size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
