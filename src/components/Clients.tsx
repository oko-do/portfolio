"use client";

import { useTranslations } from "next-intl";
import { useRef, useEffect, useCallback } from "react";
import { clients } from "@/lib/portfolio-data";
import { FadeIn } from "./FadeIn";

const BASE_SPEED = 0.3; // px per frame

// Manually shuffled rows — different order per row to hide repeats
const byName = Object.fromEntries(clients.map((c) => [c.name, c]));
const row1 = [byName["Google"], byName["Bacardi"], byName["ADNOC"], byName["Coursera"], byName["Sonifi"], byName["Goethe Institute"], byName["Alcon"], byName["McKesson"]];

interface MarqueeRowProps {
  items: typeof clients;
  direction?: "left" | "right";
  dragVelocityRef: React.RefObject<number>;
}

function MarqueeRow({ items, direction = "left", dragVelocityRef }: MarqueeRowProps) {
  const tripled = [...items, ...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(direction === "left" ? BASE_SPEED : -BASE_SPEED);
  const isDraggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const localDragVelocityRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const rafRef = useRef<number>(0);

  const baseSpeed = direction === "left" ? BASE_SPEED : -BASE_SPEED;

  const animate = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const thirdWidth = track.scrollWidth / 3;

    if (!isDraggingRef.current) {
      if (Math.abs(localDragVelocityRef.current) > 0.1) {
        velocityRef.current = localDragVelocityRef.current;
        localDragVelocityRef.current *= 0.95;
      } else {
        localDragVelocityRef.current = 0;
        velocityRef.current += (baseSpeed - velocityRef.current) * 0.02;
      }
    }

    offsetRef.current += velocityRef.current;

    // Seamless loop
    if (offsetRef.current >= thirdWidth) {
      offsetRef.current -= thirdWidth;
    } else if (offsetRef.current < 0) {
      offsetRef.current += thirdWidth;
    }

    track.style.transform = `translateX(${-offsetRef.current}px)`;
    rafRef.current = requestAnimationFrame(animate);
  }, [baseSpeed]);

  // Start animation immediately on mount
  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastPointerXRef.current = e.clientX;
    lastDragTimeRef.current = Date.now();
    localDragVelocityRef.current = 0;
    velocityRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = lastPointerXRef.current - e.clientX;
    const now = Date.now();
    const dt = now - lastDragTimeRef.current;

    if (dt > 0) {
      localDragVelocityRef.current = (dx / Math.max(dt, 1)) * 16;
    }

    offsetRef.current += dx;
    lastPointerXRef.current = e.clientX;
    lastDragTimeRef.current = now;
  }, []);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  return (
    <div
      className="relative select-none touch-pan-y"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{ cursor: "grab" }}
      >
        {tripled.map((client, i) => (
          <a
            key={`${client.name}-${i}`}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center shrink-0 px-4 md:px-12"
            draggable={false}
            onClick={(e) => {
              if (Math.abs(dragVelocityRef.current) > 0.5 || Math.abs(localDragVelocityRef.current) > 0.5) {
                e.preventDefault();
              }
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.logo}
              alt={client.name}
              draggable={false}
              loading="eager"
              className="h-6 md:h-10 w-auto min-w-[60px] md:min-w-[100px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              style={{ color: "transparent", fontSize: 0 }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const t = useTranslations("Clients");
  const dragVelocityRef = useRef(0);

  return (
    <section
      id="clients"
      className="py-20 border-t border-border overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <FadeIn>
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide mb-10">
            {t("title")}
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col gap-4 md:gap-6">
            <MarqueeRow items={row1} direction="left" dragVelocityRef={dragVelocityRef} />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
