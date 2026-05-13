"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Menu, X, Languages } from "lucide-react";
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
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            MG
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            {siteConfig.name}<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium hover:text-indigo-400 transition-all duration-300 relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-xl hover:bg-secondary transition-colors flex items-center gap-2 text-sm font-bold"
              title={language === "en" ? "العربية" : "English"}
            >
              <Languages size={18} />
              <span className="hidden lg:block">
                {language === "en" ? "العربية" : "English"}
              </span>
            </button>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center space-x-4 md:hidden rtl:space-x-reverse">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-xl hover:bg-secondary transition-colors"
          >
            <Languages size={20} />
          </button>
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b px-6 py-8 flex flex-col space-y-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
