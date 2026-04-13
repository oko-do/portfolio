"use client";

import { useTranslations } from "next-intl";
import { tools } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";

export default function Tools() {
  const t = useTranslations("Tools");

  return (
    <section
      id="tools"
      className="px-6 md:px-8 lg:px-12 py-20 border-t border-border"
    >
      <div>
        <FadeIn>
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-8">
            {t("title")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    width={32}
                    height={32}
                    loading="eager"
                    className="w-8 h-8 object-contain brightness-0 invert opacity-70 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
