"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsappIcon as Whatsapp } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/language-provider";

export function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-2xl glass-pill shadow-xl border border-emerald-500/30 text-xs font-bold pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-foreground">
              {language === "ar" ? "تواصل معي مباشرة على واتساب" : "Chat with me on WhatsApp"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#25D366] via-[#22c55e] to-[#128C7E] text-white shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300"
      >
        {/* Soft Ambient Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 blur-md group-hover:bg-[#25D366]/60 transition-all duration-500 -z-10" />
        
        {/* Animated Ping Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <Whatsapp size={28} className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-background shadow-md">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
        </span>
      </motion.a>
    </div>
  );
}
