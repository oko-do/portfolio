import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Code, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getProjectBySlug,
  getProjectSlugs,
  getAdjacentProjects,
} from "@/lib/content";
import { mdxComponents } from "@/components/mdx/mdx-content";
import { compileMDX } from "next-mdx-remote/rsc";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { NdaModal } from "@/components/NdaModal";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.flatMap((slug) => [
    { slug, locale: "en" },
    { slug, locale: "ru" },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = getProjectBySlug(slug, locale);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.frontmatter.title} | Konstantin Dolgov`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug, locale);
  if (!project) {
    notFound();
  }

  const { prev: prevProject, next: nextProject } = getAdjacentProjects(
    slug,
    locale,
  );

  const t = await getTranslations("CasePage");

  // Compile MDX content with RSC support
  const { content: mdxContent } = await compileMDX({
    source: project.content,
    components: mdxComponents,
  });

  const { frontmatter } = project;

  const isProtected = frontmatter.protected === true;

  const pageContent = (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-24 py-6 border-b border-border">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToProjects")}
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {frontmatter.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-border text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
            {frontmatter.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            {frontmatter.client} &middot; {frontmatter.year}
          </p>

          {frontmatter.award && (
            <Badge className="bg-primary text-primary-foreground mb-8">
              {frontmatter.award}
            </Badge>
          )}
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div
          className={`relative aspect-[16/9] max-w-6xl rounded-xl overflow-hidden border border-border bg-gradient-to-br ${frontmatter.gradient}`}
        >
          {frontmatter.coverImage ? (
            <img
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-foreground/10">
                {frontmatter.client}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              {t("role")}
            </h3>
            <p className="text-foreground">{frontmatter.role}</p>
          </div>

          {frontmatter.team && (
            <div>
              <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                {t("team")}
              </h3>
              <p className="text-foreground">{frontmatter.team}</p>
            </div>
          )}

          <div>
            <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              {t("year")}
            </h3>
            <p className="text-foreground">{frontmatter.year}</p>
          </div>
        </div>

        {(frontmatter.repoUrl || frontmatter.websiteUrl) && (
          <div className="max-w-4xl flex flex-wrap gap-3 mt-8">
            {frontmatter.repoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={frontmatter.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="h-4 w-4" />
                  {t("repository")}
                </a>
              </Button>
            )}
            {frontmatter.websiteUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={frontmatter.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-4 w-4" />
                  {t("website")}
                </a>
              </Button>
            )}
          </div>
        )}
      </section>

      {/* MDX Content */}
      <section className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
        <div className="max-w-4xl">{mdxContent}</div>
      </section>

      {/* Navigation */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-border">
        <div className="max-w-4xl flex flex-col md:flex-row justify-between gap-6">
          {prevProject ? (
            <Link
              href={`/cases/${prevProject.slug}`}
              className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors flex-1"
            >
              <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <p className="text-sm text-muted-foreground">
                  {t("previousProject")}
                </p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {prevProject.frontmatter.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject ? (
            <Link
              href={`/cases/${nextProject.slug}`}
              className="group flex items-center justify-end gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors flex-1 text-right"
            >
              <div>
                <p className="text-sm text-muted-foreground">
                  {t("nextProject")}
                </p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {nextProject.frontmatter.title}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-border bg-card">
        <div className="max-w-4xl text-center mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            {t("getInTouch")}
          </h2>
          <p className="text-muted-foreground mb-8">{t("contactCta")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:kons.dolgov@gmail.com">
                {t("contactButton")}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#projects">{t("viewMoreProjects")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );

  if (isProtected) {
    return (
      <NdaModal
        slug={slug}
        translations={{
          title: t("ndaTitle"),
          description: t("ndaDescription"),
          placeholder: t("ndaPasswordPlaceholder"),
          submit: t("ndaSubmit"),
          error: t("ndaError"),
          back: t("ndaBack"),
        }}
      >
        {pageContent}
      </NdaModal>
    );
  }

  return pageContent;
}
