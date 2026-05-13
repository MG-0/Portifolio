"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Mail, Send, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/language-provider";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { t, language } = useLanguage();

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
          "Accept": "application/json",
          "Content-Type": "application/json"
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
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Info Column */}
        <motion.div
          initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">{t.contact.connect}</h3>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {t.contact.connectDesc}
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div className="text-start">
                <p className="text-sm text-muted-foreground">{t.contact.email}</p>
                <p className="font-semibold">{siteConfig.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div className="text-start">
                <p className="text-sm text-muted-foreground">{t.contact.location}</p>
                <p className="font-semibold">{siteConfig.location[language]}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="outline" size="lg" className="rounded-xl flex-1" asChild>
                <a href={siteConfig.github} target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl flex-1" asChild>
                <a href={siteConfig.linkedin} target="_blank">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, x: language === "ar" ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl border bg-card/50 backdrop-blur-sm"
        >
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <CheckCircle2 size={48} />
              </div>
              <h4 className="text-2xl font-bold">{t.contact.sent}</h4>
              <p className="text-muted-foreground">
                {t.contact.sentDesc}
              </p>
              <Button variant="outline" onClick={() => setStatus("idle")}>
                {t.contact.another}
              </Button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={language === "ar" ? "محمود جمال" : "John Doe"}
                    className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2 text-start">
                <label className="text-sm font-medium">{t.contact.subject}</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder={language === "ar" ? "فرصة عمل" : "Job Opportunity"}
                  className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2 text-start">
                <label className="text-sm font-medium">{t.contact.message}</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={language === "ar" ? "مرحباً، أود التحدث حول..." : "Hi, I'd like to talk about..."}
                  className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">{t.contact.error}</p>
              )}

              <Button 
                size="lg" 
                className="w-full rounded-xl py-6 text-lg font-bold"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className={cn("mr-2 h-5 w-5", language === "ar" && "ml-2 mr-0 scale-x-[-1]")} />
                    {t.contact.send}
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
