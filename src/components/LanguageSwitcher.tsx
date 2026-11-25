"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const languageNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  de: "Deutsch",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      aria-label={t("language")}
      value={locale}
      onChange={(event) => {
        const newLocale = event.target.value as Locale;
        if (newLocale !== locale) {
          router.replace(
            pathname + window.location.search + window.location.hash,
            { locale: newLocale },
          );
        }
      }}
      className="rounded border border-border bg-background px-2 py-1 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-primary"
    >
      {routing.locales.map((language) => (
        <option key={language} value={language}>
          {languageNames[language]}
        </option>
      ))}
    </select>
  );
}
