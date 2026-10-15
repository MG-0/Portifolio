"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  Mail, Send, MapPin, Loader2, CheckCircle2, Copy, Check, 
  Phone, ArrowUpRight, MessageSquare, Sparkles 
} from "lucide-react";
import { 
  GithubIcon as Github, 
  LinkedinIcon as Linkedin, 
  MediumIcon as Medium, 
  WhatsappIcon as Whatsapp 
} from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/language-provider";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { t, language } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      if (!siteConfig.formspreeId || siteConfig.formspreeId === "your_form_id") {
        console.warn("Formspree ID not configured. Please update src/config/site.ts");
        setStatus("error");
        return;
      }

      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      title={t.contact.title}
      subtitle={t.contact.subtitle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
        {/* Info Column */}
        <motion.div
          initial={{ opacity: 0, x: language === "ar" ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              <span>{t.contact.connect}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black mb-4 text-foreground">
              {language === "ar" ? "جاهز لتحويل فكرتك إلى واقع تقني" : "Ready to Build Your Next Milestone"}
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
              {t.contact.connectDesc}
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* WhatsApp Card */}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/15 hover:border-emerald-500/50 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Whatsapp size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      WhatsApp Direct
                    </p>
                    <p className="font-extrabold text-foreground text-sm sm:text-base">
                      {siteConfig.phone}
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Email Card with Copy button */}
              <div className="flex items-center justify-between p-4 rounded-2xl border border-border/60 bg-secondary/30 hover:bg-secondary/60 transition-all duration-300">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 flex-1 overflow-hidden group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-muted-foreground font-semibold">
                      {t.contact.email}
                    </p>
                    <p className="font-extrabold text-foreground text-sm sm:text-base truncate group-hover:text-primary transition-colors">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl border border-border/60 hover:bg-primary/15 hover:border-primary/40 text-muted-foreground hover:text-primary transition-all duration-200 ml-2 shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check size={18} className="text-emerald-500" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/60 bg-secondary/20">
                <div className="w-12 h-12 rounded-xl bg-secondary/80 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">
                    {t.contact.location}
                  </p>
                  <p className="font-extrabold text-foreground text-sm sm:text-base">
                    {siteConfig.location[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons Strip */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-xl gap-2 font-bold hover:bg-primary/10 border-border/60" asChild>
              <a href={siteConfig.github} target="_blank">
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl gap-2 font-bold hover:bg-primary/10 border-border/60" asChild>
              <a href={siteConfig.linkedin} target="_blank">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl gap-2 font-bold hover:bg-primary/10 border-border/60" asChild>
              <a href={siteConfig.medium} target="_blank">
                <Medium size={16} />
                <span>Medium</span>
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div
          initial={{ opacity: 0, x: language === "ar" ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border/60 bg-gradient-to-b from-card/90 via-card/50 to-card/20 backdrop-blur-xl p-6 sm:p-8 shadow-xl"
        >
          {status === "success" ? (
            <div className="text-center py-12 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-5 animate-bounce">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-black text-foreground mb-2">
                {t.contact.sent}
              </h4>
              <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
                {t.contact.sentDesc}
              </p>
              <Button
                variant="outline"
                className="rounded-xl font-bold"
                onClick={() => setStatus("idle")}
              >
                {t.contact.another}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3.5 rounded-2xl border border-border/60 bg-secondary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  className="w-full px-4 py-3.5 rounded-2xl border border-border/60 bg-secondary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Full Stack Engineering Project"
                  className="w-full px-4 py-3.5 rounded-2xl border border-border/60 bg-secondary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t.contact.message}
                  className="w-full px-4 py-3.5 rounded-2xl border border-border/60 bg-secondary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <div className="p-3.5 rounded-2xl bg-destructive/10 border border-destructive/30 text-destructive text-xs font-bold">
                  {t.contact.error}
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-6 rounded-2xl font-black text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all bg-gradient-to-r from-primary via-indigo-600 to-purple-600 text-white border-0"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    <span>{t.contact.sending}</span>
                  </>
                ) : (
                  <>
                    <span>{t.contact.send}</span>
                    <Send className={language === "ar" ? "mr-2 h-4 w-4" : "ml-2 h-4 w-4"} />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
