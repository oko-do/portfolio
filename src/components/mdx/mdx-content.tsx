import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { ImageCarousel } from "@/components/mdx/image-carousel";
import { ZoomableImage } from "@/components/mdx/zoomable-image";
import { TokenPipeline } from "@/components/mdx/token-pipeline";
import { ProcessFlow } from "@/components/mdx/process-flow";

// Custom MDX components for rich content
export const mdxComponents = {
  // Enhanced image component with zoom on click
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="my-8">
      <div className="rounded-lg overflow-hidden border border-border">
        <ZoomableImage
          src={String(props.src || "")}
          alt={props.alt || ""}
          className="w-full h-auto"
        />
      </div>
      {props.alt && (
        <figcaption className="text-sm text-muted-foreground text-left mt-3">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),

  // Headings with proper styling
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-semibold text-foreground mt-12 mb-4"
      {...props}
    />
  ),

  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-medium text-foreground mt-8 mb-3"
      {...props}
    />
  ),

  // Paragraphs — unwrap if only child is an image (avoid <p><figure> hydration error)
  p: ({ children, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) => {
    const childArray = React.Children.toArray(children);
    // MDX wraps ![](img) in <p>. Our img override renders <figure>,
    // but <figure> inside <p> is invalid HTML. Detect and unwrap.
    if (childArray.length === 1 && React.isValidElement(childArray[0])) {
      const child = childArray[0] as React.ReactElement<Record<string, unknown>>;
      if (child.props?.src && typeof child.props.src === "string") {
        return <>{children}</>;
      }
    }
    return <p className="text-foreground/80 leading-relaxed mb-6" {...rest}>{children}</p>;
  },

  // Lists
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-outside pl-5 space-y-2 mb-6 text-foreground/80"
      {...props}
    />
  ),

  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-outside pl-5 space-y-2 mb-6 text-foreground/80"
      {...props}
    />
  ),

  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),

  // Blockquotes
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-primary pl-6 py-2 my-8 italic text-foreground/70"
      {...props}
    />
  ),

  // Code blocks
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-card border border-border rounded-lg p-4 overflow-x-auto my-6 text-sm"
      {...props}
    />
  ),

  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-card px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),

  // Horizontal rule
  hr: () => <hr className="border-border my-12" />,

  // Strong/bold text
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),

  // Links
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-primary hover:underline" {...props} />
  ),

  // Image grid — 2 columns, supports 2 or 4 images (1 or 2 rows)
  ImageGrid: ({
    src1,
    alt1,
    src2,
    alt2,
    src3,
    alt3,
    src4,
    alt4,
  }: {
    src1: string;
    alt1?: string;
    src2: string;
    alt2?: string;
    src3?: string;
    alt3?: string;
    src4?: string;
    alt4?: string;
  }) => {
    const items = [
      { src: src1, alt: alt1 },
      { src: src2, alt: alt2 },
      ...(src3 ? [{ src: src3, alt: alt3 }] : []),
      ...(src4 ? [{ src: src4, alt: alt4 }] : []),
    ];
    return (
      <div className="grid grid-cols-2 gap-4 my-8">
        {items.map((item, i) => (
          <figure key={i}>
            <div className="rounded-lg overflow-hidden border border-border">
              <ZoomableImage src={item.src} alt={item.alt || ""} className="w-full h-auto" />
            </div>
            {item.alt && (
              <figcaption className="text-sm text-muted-foreground text-left mt-3">
                {item.alt}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  },

  // Custom components
  Badge,
  ImageCarousel,
  TokenPipeline,
  ProcessFlow,

  // Callout component
  Callout: ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning" | "success";
  }) => {
    const styles = {
      info: "bg-primary/10 border-primary/30 text-primary",
      warning: "bg-yellow-500/10 border-yellow-500/30 text-yellow-500",
      success: "bg-green-500/10 border-green-500/30 text-green-500",
    };

    return (
      <div className={`border rounded-lg p-4 my-6 ${styles[type]}`}>
        {children}
      </div>
    );
  },

  // Metrics display
  Metrics: ({
    items,
  }: {
    items: { value: string; label: string }[];
  }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8 p-6 bg-card rounded-lg border border-border">
      {items.map((item, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl font-bold text-primary mb-1">
            {item.value}
          </div>
          <div className="text-sm text-muted-foreground">{item.label}</div>
        </div>
      ))}
    </div>
  ),
};
