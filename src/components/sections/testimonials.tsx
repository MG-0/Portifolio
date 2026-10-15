"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig, TestimonialItem } from "@/config/site";
import { useLanguage } from "@/components/language-provider";
import { Star, Quote, ChevronLeft, ChevronRight, Pause } from "lucide-react";

export function Testimonials() {
  const { language, t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonials = siteConfig.testimonials;
  const duplicated = [...testimonials, ...testimonials, ...testimonials];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Section
      id="testimonials"
      title={t.testimonials.title}
      subtitle={t.testimonials.subtitle}
    >
      {/* Notice & Manual Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 max-w-6xl mx-auto px-2">
        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground bg-secondary/50 border border-border/50 px-4 py-1.5 rounded-full backdrop-blur-md">
          <Pause size={14} className="text-primary animate-pulse" />
          <span>{t.testimonials.pauseNotice}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2.5 rounded-full border border-border/60 bg-secondary/40 hover:bg-primary/20 hover:border-primary/50 text-foreground transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2.5 rounded-full border border-border/60 bg-secondary/40 hover:bg-primary/20 hover:border-primary/50 text-foreground transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Infinite Moving Marquee Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft Edge Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollRef}
          className="flex animate-marquee gap-6 overflow-x-visible py-2"
        >
          {duplicated.map((item: TestimonialItem, idx: number) => {
            const clientName = item.name[language] || item.name.en;
            const clientRole = item.role[language] || item.role.en;
            const clientCompany = item.company[language] || item.company.en;
            const clientContent = item.content[language] || item.content.en;

            return (
              <div
                key={`${item.id}-${idx}`}
                className="w-[320px] sm:w-[400px] shrink-0 p-6 sm:p-7 rounded-3xl border border-border/60 bg-gradient-to-b from-card/90 via-card/50 to-secondary/20 backdrop-blur-xl shadow-lg hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-amber-400 text-amber-400 filter drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]"
                        />
                      ))}
                    </div>
                    <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Quote size={18} />
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-6 font-normal line-clamp-4">
                    &ldquo;{clientContent}&rdquo;
                  </p>
                </div>

                {/* Client Info Footer */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-border/40 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary/30 shrink-0">
                    {item.avatar}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-foreground text-sm md:text-base truncate group-hover:text-primary transition-colors">
                      {clientName}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">
                      {clientRole} • <span className="text-primary/90 font-medium">{clientCompany}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
