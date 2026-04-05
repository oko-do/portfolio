"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NdaModalProps {
  slug: string;
  translations: {
    title: string;
    description: string;
    placeholder: string;
    submit: string;
    error: string;
  };
  children: React.ReactNode;
}

const NDA_PASSWORD = "okodo";
const STORAGE_KEY = "nda-unlocked";

function getUnlockedSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function setUnlockedSlug(slug: string) {
  const slugs = getUnlockedSlugs();
  if (!slugs.includes(slug)) {
    slugs.push(slug);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  }
}

export function NdaModal({ slug, translations, children }: NdaModalProps) {
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unlocked = getUnlockedSlugs();
    if (unlocked.includes(slug)) {
      setIsLocked(false);
    }
    setIsChecking(false);
  }, [slug]);

  useEffect(() => {
    if (isLocked && !isChecking && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLocked, isChecking]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === NDA_PASSWORD) {
      setUnlockedSlug(slug);
      setIsLocked(false);
      setError(false);
    } else {
      setError(true);
      setPassword("");
      inputRef.current?.focus();
    }
  };

  // While checking sessionStorage, show nothing to prevent flash
  if (isChecking) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-full max-w-md mx-6"
            >
              <form onSubmit={handleSubmit} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border bg-card mb-6">
                  <Lock className="h-7 w-7 text-muted-foreground" />
                </div>

                <h2 className="text-2xl font-medium mb-3">
                  {translations.title}
                </h2>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {translations.description}
                </p>

                <div className="relative mb-4">
                  <input
                    ref={inputRef}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    placeholder={translations.placeholder}
                    className={`w-full h-12 px-4 pr-12 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground outline-none transition-colors ${
                      error
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-primary"
                    }`}
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-sm mb-4"
                    >
                      {translations.error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <Button type="submit" size="lg" className="w-full">
                  {translations.submit}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLocked && children}
    </>
  );
}
