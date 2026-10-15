"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section = ({
  children,
  id,
  className,
  title,
  subtitle,
  ...props
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto w-full relative", className)}
      {...props}
    >
      {(title || subtitle) && (
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mb-14 md:mb-20 text-center relative z-10"
        >
          {/* Subtle Ambient Header Glow */}
          <div className="absolute left-1/2 -top-10 -translate-x-1/2 w-72 h-20 bg-primary/20 blur-3xl pointer-events-none -z-10" />

          {title && (
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-slate-900 dark:from-indigo-300 dark:via-purple-200 dark:to-cyan-300">
                  {title}
                </span>
              </h2>
              {/* Animated Underline */}
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-indigo-500 to-pink-500 mb-4 opacity-80" />
            </div>
          )}

          {subtitle && (
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
};
