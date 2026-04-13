"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface PreloadedImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Extra class applied while the image is still loading */
  loadingClass?: string;
}

/**
 * Thin wrapper around <img> that hides the element (opacity-0)
 * until `onLoad` fires, preventing FOUC / broken-icon flashes
 * on cold first-paint.
 */
export function PreloadedImg({
  className = "",
  loadingClass = "opacity-0",
  onLoad,
  ...rest
}: PreloadedImgProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle cached images that may have loaded before React attaches onLoad
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      onLoad?.(e);
    },
    [onLoad],
  );

  // Only inject transition-opacity if the consumer doesn't already have a transition class
  const hasTransition = /\btransition/.test(className);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      {...rest}
      className={`${className} ${hasTransition ? "" : "transition-opacity duration-300"} ${loaded ? "" : loadingClass}`}
      onLoad={handleLoad}
    />
  );
}
