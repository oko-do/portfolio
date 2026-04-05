"use client";

import { useTranslations } from "next-intl";
import { clients } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";

export default function Clients() {
  const t = useTranslations("Clients");

  // Duplicate the list for seamless infinite scroll
  const marqueeItems = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="py-20 border-t border-border overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-24">
        <FadeIn>
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-10">
            {t("title")}
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map((client, i) => (
              <a
                key={`${client.name}-${i}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center shrink-0 px-8 md:px-12"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
