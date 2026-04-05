"use client";

import { useTranslations } from "next-intl";
import { clients } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";

export default function Clients() {
  const t = useTranslations("Clients");

  return (
    <section
      id="clients"
      className="px-6 md:px-12 lg:px-24 py-20 border-t border-border"
    >
      <div className="max-w-4xl">
        <FadeIn>
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-8">
            {t("title")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-8 md:gap-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg md:text-xl font-medium"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-5 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
                {client.name}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
