"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { experience } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";
/* eslint-disable @next/next/no-img-element */

export default function Experience() {
  const t = useTranslations("Experience");
  const locale = useLocale() as "en" | "ru";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="experience"
      className="px-6 md:px-8 lg:px-12 py-20 border-t border-border"
    >
      <div>
        <FadeIn>
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-8">
            {t("title")}
          </h2>
        </FadeIn>

        <div>
        <div className="space-y-0">
          {experience.map((job, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={`${job.company}-${index}`} delay={index * 0.05}>
                <div className="border-b border-border">
                  {/* Collapsed row — clickable header */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full text-left py-4 flex items-center justify-between gap-4 group cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                      {!isOpen && (
                        <span className="text-foreground font-medium">
                          {job.company}
                        </span>
                      )}
                      <span className="text-muted-foreground">
                        {job.roles[0].role[locale]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-foreground text-sm whitespace-nowrap">
                        {job.roles[0].period[locale]}
                      </span>
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted-foreground shrink-0"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 flex flex-col gap-3">
                          {/* Logo */}
                          {job.logo && (
                            <img
                              src={job.logo}
                              alt={`${job.company} logo`}
                              className="h-6 w-auto object-contain self-start"
                            />
                          )}

                          {/* Description + tasks */}
                          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 md:gap-8">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {job.description[locale]}
                            </p>

                            <div>
                              <ul className="space-y-2">
                                {job.tasks[locale].map((task, i) => (
                                  <li
                                    key={i}
                                    className="text-foreground text-sm leading-relaxed flex items-baseline gap-2"
                                  >
                                    <span className="text-muted-foreground shrink-0 text-[8px] relative top-[-1px]">●</span>
                                    <span>{task}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
