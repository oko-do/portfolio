"use client";

import { useTranslations } from "next-intl";
import { useRef, useEffect, useCallback } from "react";
import { clients } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";

const BASE_SPEED = 0.5; // px per frame

export default function Clients() {
  const t = useTranslations("Clients");

  // Triple the list for seamless wrapping
  const marqueeItems = [...clients, ...clients, ...clients];

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(BASE_SPEED);
  const isDraggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const dragVelocityRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 3;

    if (!isDraggingRef.current) {
      // Apply drag velocity with friction (deceleration / easing out)
      if (Math.abs(dragVelocityRef.current) > 0.1) {
        velocityRef.current = dragVelocityRef.current;
        dragVelocityRef.current *= 0.95; // friction
      } else {
        // Ease back to base speed
        dragVelocityRef.current = 0;
        velocityRef.current += (BASE_SPEED - velocityRef.current) * 0.02;
      }
    }

    offsetRef.current += velocityRef.current;

    // Seamless loop
    if (offsetRef.current >= halfWidth) {
      offsetRef.current -= halfWidth;
    } else if (offsetRef.current < 0) {
      offsetRef.current += halfWidth;
    }

    track.style.transform = `translateX(${-offsetRef.current}px)`;
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastPointerXRef.current = e.clientX;
    lastDragTimeRef.current = Date.now();
    dragVelocityRef.current = 0;
    velocityRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = lastPointerXRef.current - e.clientX;
    const now = Date.now();
    const dt = now - lastDragTimeRef.current;

    if (dt > 0) {
      dragVelocityRef.current = dx / Math.max(dt, 1) * 16; // normalize to ~60fps
    }

    offsetRef.current += dx;
    lastPointerXRef.current = e.clientX;
    lastDragTimeRef.current = now;
  }, []);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  return (
    <section
      id="clients"
      className="py-20 border-t border-border overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-24">
        <FadeIn>
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-10">
            {t("title")}
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <div
          className="relative select-none touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ cursor: "grab" }}
          >
            {marqueeItems.map((client, i) => (
              <a
                key={`${client.name}-${i}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center shrink-0 px-8 md:px-12"
                draggable={false}
                onClick={(e) => {
                  // Prevent link navigation if user was dragging
                  if (Math.abs(dragVelocityRef.current) > 0.5) {
                    e.preventDefault();
                  }
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  draggable={false}
                  className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
