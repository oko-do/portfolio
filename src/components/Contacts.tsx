"use client";

import { useTranslations, useLocale } from "next-intl";
import { Mail, Send, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";

export default function Contacts() {
  const t = useTranslations("Contacts");
  const locale = useLocale() as "en" | "ru";

  return (
    <section
      id="contact"
      className="px-6 md:px-8 lg:px-12 py-20 border-t border-border"
    >
      <div>
        <div>
          <FadeIn>
            <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-8">
              {t("title")}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-2xl md:text-3xl font-medium mb-8 text-balance">
              {t("cta")}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <a href={`mailto:${about.email}`}>
                <Mail className="h-4 w-4" />
                {t("sendEmail")}
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a
                href={about.cvLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
                {t("downloadCV")}
              </a>
            </Button>

            <div className="md:ml-auto flex items-center gap-4">
              <a
                href={`https://t.me/${about.telegram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Send className="h-4 w-4" />
                {about.telegram}
              </a>

              <a
                href={about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>

              <a
                href={about.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"/>
                </svg>
                Behance
              </a>

              <a
                href="https://spb.hh.ru/resume/efd877f7ff0cadddd90039ed1f4e7451766551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 48 48" fill="currentColor">
                  <path d="M24 48c13.254 0 24-10.746 24-24S37.254 0 24 0 0 10.746 0 24s10.746 24 24 24zm0 0"/>
                  <path d="M35.676 20.46c-.727-.75-1.758-1.16-3.02-1.16-1.562 0-2.765.637-3.46 1.829v-5.91h-3.63v16.203h3.63v-5.695c0-1.329.273-2.18.683-2.68.394-.5.953-.692 1.555-.692.53 0 .953.168 1.246.477.297.316.465.805.465 1.484v7.094h3.632v-7.808c0-1.329-.386-2.407-1.101-3.141zM19.438 19.3c-1.567 0-2.77.637-3.461 1.829v-5.91h-3.63v16.203h3.63v-5.695c0-1.329.273-2.18.68-2.68.398-.5.956-.692 1.554-.692.535 0 .953.168 1.25.477.297.316.465.805.465 1.484v7.094h3.633v-7.808c0-1.329-.387-2.407-1.114-3.153-.715-.75-1.746-1.148-3.008-1.148zm0 0" fill="var(--background)"/>
                </svg>
                hh.ru
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
