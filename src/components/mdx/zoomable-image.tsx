"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt || ""}
        className={`${className || "w-full h-auto"} cursor-zoom-in`}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt || ""}
            className="max-w-[95vw] max-h-[95vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
