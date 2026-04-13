"use client";

import { useTranslations, useLocale } from "next-intl";
import { about } from "@/lib/portfolio-data";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale() as "en" | "ru";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {currentYear} {about.name[locale]}. {t("location")}
        </p>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${about.email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href={about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={about.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Behance
          </a>
          <a
            href="https://spb.hh.ru/resume/efd877f7ff0cadddd90039ed1f4e7451766551"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            hh.ru
          </a>
          <a
            href={`https://t.me/${about.telegram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Telegram
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}
