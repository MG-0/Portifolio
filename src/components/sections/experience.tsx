"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/language-provider";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

export function Experience() {
  const { language, t } = useLanguage();
  const experience = siteConfig.experiences;

  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <Section
      id="experience"
      title={t.experience.title}
      subtitle={t.experience.subtitle}
    >
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group relative"
          >
            {/* Timeline line */}
            {index !== experience.length - 1 && (
              <div className="absolute left-7 top-24 h-16 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
            )}

            {/* Main card */}
            <div className="relative flex gap-6">
              {/* Timeline dot with icon */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/40 group-hover:border-primary/70 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all flex-shrink-0 z-10"
                >
                  <Briefcase className="text-primary" size={24} />
                </motion.div>
                {index !== experience.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-primary/30 to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2 pb-8">
                <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-card/60 to-card/30 p-6 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-primary font-semibold text-lg mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowRight className="text-primary/60" size={20} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Meta information */}
                  <div className="flex flex-wrap gap-6 mb-4 pb-4 border-b border-border/50">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="text-primary/60" />
                      <span className="font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-primary/60" />
                      <span className="font-medium text-muted-foreground">
                        {language === "ar"
                          ? typeof exp.location === "string"
                            ? exp.location
                            : exp.location.ar
                          : typeof exp.location === "string"
                            ? exp.location
                            : exp.location.en}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {language === "ar"
                      ? typeof exp.description === "string"
                        ? exp.description
                        : exp.description.ar
                      : typeof exp.description === "string"
                        ? exp.description
                        : exp.description.en}
                  </p>

                  {/* Highlight accent */}
                  <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
