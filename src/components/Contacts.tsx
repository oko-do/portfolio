"use client";

import { useTranslations, useLocale } from "next-intl";
import { Mail, Send, FileText } from "lucide-react";
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
                <Mail className="h-4 w-4" />
                {t("sendEmail")}
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a
                href={about.cvLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
                {t("downloadCV")}
              </a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={`mailto:${about.email}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              {about.email}
            </a>

            <a
              href={`https://t.me/${about.telegram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Send className="h-4 w-4" />
              {about.telegram}
            </a>

            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
