"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  caption?: string;
  // Flat props for up to 8 slides (MDX doesn't support array/object props)
  src1: string;
  alt1?: string;
  src2?: string;
  alt2?: string;
  src3?: string;
  alt3?: string;
  src4?: string;
  alt4?: string;
  src5?: string;
  alt5?: string;
  src6?: string;
  alt6?: string;
  src7?: string;
  alt7?: string;
  src8?: string;
  alt8?: string;
}

export function ImageCarousel(props: ImageCarouselProps) {
  const slides: Slide[] = [];

  for (let i = 1; i <= 8; i++) {
    const src = props[`src${i}` as keyof ImageCarouselProps] as
      | string
      | undefined;
    const alt = props[`alt${i}` as keyof ImageCarouselProps] as
      | string
      | undefined;
    if (src) {
      slides.push({ src, alt: alt || "" });
    }
  }

  const [current, setCurrent] = useState(0);

  if (slides.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <figure className="my-8">
      <div className="rounded-lg overflow-hidden border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          className="w-full h-auto"
        />
      </div>

      {/* Controls bar: caption + counter + arrows */}
      {slides.length > 1 && (
        <div className="flex items-center justify-between mt-3 gap-4">
          <div className="text-sm text-muted-foreground min-w-0">
            {slides[current].alt || props.caption || ""}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-muted-foreground/50 tabular-nums">
              {current + 1}/{slides.length}
            </span>
            <button
              onClick={prev}
              className="w-7 h-7 flex items-center justify-center text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-7 h-7 flex items-center justify-center text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Caption for single-slide carousel */}
      {slides.length === 1 && (slides[0].alt || props.caption) && (
        <figcaption className="text-sm text-muted-foreground text-left mt-3">
          {slides[0].alt || props.caption}
        </figcaption>
      )}
    </figure>
  );
}
