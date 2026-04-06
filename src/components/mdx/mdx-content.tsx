import Image from "next/image";
import { Badge } from "@/components/ui/badge";

// Custom MDX components for rich content
export const mdxComponents = {
  // Enhanced image component
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="my-8">
      <div className="rounded-lg overflow-hidden border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...props}
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

  // Paragraphs
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-foreground/80 leading-relaxed mb-6" {...props} />
  ),

  // Lists
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-inside space-y-2 mb-6 text-foreground/80"
      {...props}
    />
  ),

  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-inside space-y-2 mb-6 text-foreground/80"
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

  // Custom components
  Badge,

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
