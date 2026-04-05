"use client";

import { useTranslations, useLocale } from "next-intl";
import { Mail, Send, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";

export default function Contacts() {
  const t = useTranslations("Contacts");
  const locale = useLocale() as "en" | "ru";

  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-24 py-20 border-t border-border"
    >
      <div className="max-w-4xl">
        <FadeIn>
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-8">
            {t("title")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-2xl md:text-3xl font-medium mb-8 text-balance">
            {t("cta")}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" asChild>
              <a href={`mailto:${about.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {t("sendEmail")}
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a
                href={about.cvLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                {t("downloadCV")}
              </a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span className="text-muted-foreground w-24">
                {t("email")}
              </span>
              <a
                href={`mailto:${about.email}`}
                className="text-foreground hover:text-primary transition-colors"
              >
                {about.email}
              </a>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span className="text-muted-foreground w-24">
                {t("telegram")}
              </span>
              <a
                href={`https://t.me/${about.telegram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                {about.telegram}
                <Send className="h-3 w-3" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span className="text-muted-foreground w-24">
                {t("linkedin")}
              </span>
              <a
                href={about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                Konstantin Dolgov
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
