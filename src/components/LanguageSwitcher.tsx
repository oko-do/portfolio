"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "ru") => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => switchLocale("ru")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "ru"
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Russian"
      >
        RU
      </button>
    </div>
  );
}
