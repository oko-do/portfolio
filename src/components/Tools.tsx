"use client";

import { useTranslations } from "next-intl";
import { tools } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";

function ToolIcon({ name }: { name: string }) {
  const iconMap: Record<string, string> = {
    Figma: "Fi",
    Photoshop: "Ps",
    Illustrator: "Ai",
    "After Effects": "Ae",
    ProtoPie: "Pp",
    Framer: "Fr",
    Miro: "Mi",
    FigJam: "Fj",
    Notion: "No",
    "Cinema 4D": "C4",
    Cursor: "Cu",
    Claude: "Cl",
  };

  return (
    <span className="text-xs font-mono text-primary font-medium">
      {iconMap[name] || name.slice(0, 2)}
    </span>
  );
}

export default function Tools() {
  const t = useTranslations("Tools");

  return (
    <section
      id="tools"
      className="px-6 md:px-12 lg:px-24 py-20 border-t border-border"
    >
      <div className="max-w-4xl">
        <FadeIn>
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-8">
            {t("title")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <ToolIcon name={tool.name} />
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
