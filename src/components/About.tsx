"use client";

import { useTranslations, useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { about } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";

export default function About() {
  const t = useTranslations("About");
  const locale = useLocale() as "en" | "ru";

  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-24 py-20 border-t border-border"
    >
      <div className="max-w-4xl">
        <FadeIn>
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-8">
            {t("title")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
            {t("bio")}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-2">
            {about.expertise.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-secondary text-secondary-foreground px-3 py-1.5 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
