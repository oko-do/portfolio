"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      <div className="relative rounded-lg overflow-hidden border border-border">
        {/* Slides */}
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          className="w-full h-auto"
        />

        {/* Navigation arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                  i === current
                    ? "bg-foreground"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Caption: per-slide alt or shared caption */}
      {(slides[current].alt || props.caption) && (
        <figcaption className="text-sm text-muted-foreground text-left mt-3">
          {slides[current].alt || props.caption}
          {slides.length > 1 && (
            <span className="text-muted-foreground/50 ml-2">
              {current + 1}/{slides.length}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
