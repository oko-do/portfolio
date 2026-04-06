import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { routing } from "@/i18n/routing";
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Script id="scroll-restoration" strategy="beforeInteractive">
            {`history.scrollRestoration = "manual"`}
          </Script>
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
