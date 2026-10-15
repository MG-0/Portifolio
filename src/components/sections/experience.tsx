"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/language-provider";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from "lucide-react";

export function Experience() {
  const { language, t } = useLanguage();
  const experiences = siteConfig.experiences;

  return (
    <Section
      id="experience"
      title={t.experience.title}
      subtitle={t.experience.subtitle}
    >
      <div className="relative max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, index) => {
          const locationText = exp.location[language] || exp.location.en;
          const points = exp.points ? (exp.points[language] || exp.points.en) : [];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Connecting Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 rtl:left-auto rtl:right-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent -mb-10 pointer-events-none" />
              )}

              <div className="relative flex items-start gap-6 sm:gap-8">
                {/* Timeline Icon Node */}
                <div className="relative flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-primary to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-primary/25 border-2 border-background group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 z-10">
                    <Briefcase size={22} />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 rounded-3xl border border-border/60 bg-gradient-to-b from-card/90 via-card/50 to-card/20 backdrop-blur-xl p-6 sm:p-8 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-base sm:text-lg font-bold text-primary mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground bg-secondary/50 px-3.5 py-1.5 rounded-full border border-border/50 self-start sm:self-center">
                      <Calendar size={14} className="text-primary" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Location Meta */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-6 pb-4 border-b border-border/40">
                    <MapPin size={14} className="text-primary/80" />
                    <span>{locationText}</span>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-3">
                    {points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" />
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
