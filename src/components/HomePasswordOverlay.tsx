"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HomePasswordOverlayProps {
  translations: {
    title: string;
    description: string;
    placeholder: string;
    submit: string;
    error: string;
    noPassword: string;
  };
  children: React.ReactNode;
}

const HOME_PASSWORD = "okodo1";
const STORAGE_KEY = "home-unlocked";

function isHomeUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function HomePasswordOverlay({
  translations,
  children,
}: HomePasswordOverlayProps) {
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isHomeUnlocked()) {
      setIsLocked(false);
    }
  }, []);

  useEffect(() => {
    if (isLocked && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLocked]);

  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === HOME_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setIsLocked(false);
      setError(false);
    } else {
      setError(true);
      setPassword("");
      inputRef.current?.focus();
    }
  };

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

                <Button
                  type="submit"
                  size="lg"
                  className={`w-full h-12 rounded-lg ${
                    !password
                      ? "bg-transparent border border-border text-muted-foreground hover:bg-transparent hover:text-muted-foreground cursor-not-allowed opacity-100"
                      : ""
                  }`}
                  disabled={!password}
                >
                  {translations.submit}
                </Button>

                <a
                  href="https://t.me/KonstantinDol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {translations.noPassword}
                </a>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
