import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";

import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains-mono",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");
  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: { en: "en_US", ru: "ru_RU", de: "de_DE" }[locale],
      title,
      description,
      siteName: "Konstantin Dolgov Portfolio",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration="manual";document.addEventListener("contextmenu",function(e){if(e.target.tagName==="IMG")e.preventDefault()})`,
          }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <ScrollToTop />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
