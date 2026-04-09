"use client";

import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "./FadeIn";

interface ProjectData {
  slug: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  year: string;
  gradient: string;
  coverImage?: string;
  coverPosition?: string;
  award?: string;
  protected?: boolean;
}

export function CasesGrid({ projects }: { projects: ProjectData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <FadeIn key={project.slug} delay={index * 0.05}>
          <Link href={`/cases/${project.slug}`} className="group block">
            <article className="h-full rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:bg-card/80 overflow-hidden">
              {/* Cover Image */}
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: project.coverPosition || "top" }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-foreground/10">
                      {project.client}
                    </span>
                  </div>
                )}
                {project.protected && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                    <Lock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">NDA</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-border text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.client}
                </p>

                <p className="text-foreground/80 text-sm leading-relaxed flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                  {project.award && (
                    <Badge className="bg-primary/10 text-primary border-0 text-xs">
                      {project.award}
                    </Badge>
                  )}
                </div>
              </div>
            </article>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
