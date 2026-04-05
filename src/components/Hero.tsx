"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/portfolio-data";
import { useLocale } from "next-intl";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale() as "en" | "ru";

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm tracking-wide uppercase mb-4"
        >
          {about.location[locale]}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 text-balance"
        >
          {about.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-6"
        >
          {about.role[locale]}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 leading-relaxed"
        >
          {about.tagline[locale]}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <Button
            variant="default"
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("viewCases")}
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a
              href={about.cvLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("downloadCV")}
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
