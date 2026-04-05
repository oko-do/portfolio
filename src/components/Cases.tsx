import { getLocale, getTranslations } from "next-intl/server";
import { getAllProjects } from "@/lib/content";
import { CasesGrid } from "./CasesGrid";

export default async function Cases() {
  const locale = await getLocale();
  const t = await getTranslations("Cases");
  const projects = getAllProjects(locale);

  const projectData = projects.map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    client: p.frontmatter.client,
    description: p.frontmatter.description,
    tags: p.frontmatter.tags,
    year: p.frontmatter.year,
    gradient: p.frontmatter.gradient,
    award: p.frontmatter.award,
  }));

  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-24 py-20 border-t border-border"
    >
      <div className="max-w-6xl">
        <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-8">
          {t("title")}
        </h2>

        <CasesGrid projects={projectData} />
      </div>
    </section>
  );
}
