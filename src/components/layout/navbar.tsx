"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Menu, X, Languages, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.testimonials, href: "#testimonials" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 py-3 shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo Monogram */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-7 sm:h-8 w-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {/* Dark mode: crisp white logo */}
            <Image
              src="/logo-white.png"
              alt="MG Logo"
              width={54}
              height={32}
              className="hidden dark:block h-7 sm:h-8 w-auto object-contain"
              priority
            />
            {/* Light mode: crisp dark logo */}
            <Image
              src="/logo-transparent.png"
              alt="MG Logo"
              width={54}
              height={32}
              className="block dark:hidden h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-extrabold tracking-tight text-foreground block">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-bold text-primary block uppercase tracking-wider">
              Full Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            </motion.div>
          ))}

          {/* Controls: Language & Theme Toggle */}
          <div className="flex items-center gap-3 pl-4 rtl:pl-0 rtl:pr-4 border-l rtl:border-l-0 rtl:border-r border-border/60">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-xl border border-border/60 hover:bg-secondary/80 hover:border-primary/40 transition-all flex items-center gap-2 text-xs font-bold text-foreground"
              title={language === "en" ? "تبديل إلى العربية" : "Switch to English"}
            >
              <Languages size={15} className="text-primary" />
              <span>{language === "en" ? "العربية" : "EN"}</span>
            </button>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Toggles */}
        <div className="flex items-center space-x-3 md:hidden rtl:space-x-reverse">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-xl border border-border/60 hover:bg-secondary text-xs font-bold flex items-center gap-1.5"
          >
            <Languages size={16} className="text-primary" />
            <span>{language === "en" ? "العربية" : "EN"}</span>
          </button>
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl border border-border/60 hover:bg-secondary"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border/60 px-6 py-8 flex flex-col space-y-5 animate-in slide-in-from-top duration-300 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold text-foreground hover:text-primary transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
