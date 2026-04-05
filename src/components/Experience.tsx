"use client";

import { useTranslations, useLocale } from "next-intl";
import { experience } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";

export default function Experience() {
  const t = useTranslations("Experience");
  const locale = useLocale() as "en" | "ru";

  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-24 py-20 border-t border-border"
    >
      <div className="max-w-4xl">
        <FadeIn>
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-8">
            {t("title")}
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {experience.map((job, index) => (
            <FadeIn key={`${job.company}-${index}`} delay={index * 0.05}>
              <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-border group">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="text-foreground font-medium">
                    {job.company}
                  </span>
                  <span className="text-muted-foreground">
                    {job.role[locale]}
                  </span>
                </div>

                <span className="text-muted-foreground text-sm mt-1 md:mt-0">
                  {job.period[locale]}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
