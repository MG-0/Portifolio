"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/language-provider";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const { language, t } = useLanguage();
  const testimonial = siteConfig.testimonials[0];

  if (!testimonial) return null;

  const clientName = testimonial.name[language] || testimonial.name.en;
  const clientRole = testimonial.role[language] || testimonial.role.en;
  const clientCompany = testimonial.company[language] || testimonial.company.en;
  const clientContent = testimonial.content[language] || testimonial.content.en;

  return (
    <Section
      id="testimonials"
      title={t.testimonials.title}
      subtitle={t.testimonials.subtitle}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto relative"
      >
        {/* Ambient Halo */}
        <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-primary/20 via-purple-600/20 to-emerald-500/20 blur-2xl pointer-events-none -z-10" />

        <div className="rounded-3xl glass-card-floating p-8 sm:p-12 border border-primary/30 shadow-2xl relative overflow-hidden">
          {/* Top Row: Stars and Quote */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-amber-400 text-amber-400 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                />
              ))}
            </div>

            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Quote size={24} />
            </div>
          </div>

          {/* Testimonial Quote */}
          <p className="text-foreground text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-10 italic">
            &ldquo;{clientContent}&rdquo;
          </p>

          {/* Client Footer Meta */}
          <div className="flex items-center gap-4 pt-6 border-t border-border/40">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-emerald-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/25 shrink-0">
              {testimonial.avatar}
            </div>
            <div>
              <h4 className="font-black text-foreground text-base sm:text-lg">
                {clientName}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                {clientRole} • <span className="text-primary font-bold">{clientCompany}</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
