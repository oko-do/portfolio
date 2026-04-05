import fs from "fs";
import path from "path";
import matter from "gray-matter";
import "server-only";

export interface ProjectFrontmatter {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  coverImage: string;
  gradient: string;
  team?: string;
  award?: string;
  published: boolean;
  order: number;
}

export interface ProjectContent {
  frontmatter: ProjectFrontmatter;
  content: string;
  slug: string;
}

function getContentDirectory(locale: string) {
  return path.join(process.cwd(), "content/projects", locale);
}

/**
 * Get all project slugs for static generation
 */
export function getProjectSlugs(): string[] {
  const dir = getContentDirectory("en");
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}

/**
 * Get a single project by slug in a specific locale
 */
export function getProjectBySlug(
  slug: string,
  locale: string = "en",
): ProjectContent | null {
  const filePath = path.join(getContentDirectory(locale), `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    // Fallback to English
    const fallbackPath = path.join(getContentDirectory("en"), `${slug}.mdx`);
    if (!fs.existsSync(fallbackPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fallbackPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      frontmatter: data as ProjectFrontmatter,
      content,
      slug,
    };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as ProjectFrontmatter,
    content,
    slug,
  };
}

/**
 * Get all projects sorted by order in a specific locale
 */
export function getAllProjects(locale: string = "en"): ProjectContent[] {
  const slugs = getProjectSlugs();

  const projects = slugs
    .map((slug) => getProjectBySlug(slug, locale))
    .filter(
      (project): project is ProjectContent =>
        project !== null && project.frontmatter.published,
    )
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);

  return projects;
}

/**
 * Get adjacent projects for navigation
 */
export function getAdjacentProjects(
  currentSlug: string,
  locale: string = "en",
): {
  prev: ProjectContent | null;
  next: ProjectContent | null;
} {
  const projects = getAllProjects(locale);
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev:
      currentIndex > 0
        ? projects[currentIndex - 1]
        : projects[projects.length - 1],
    next:
      currentIndex < projects.length - 1
        ? projects[currentIndex + 1]
        : projects[0],
  };
}
