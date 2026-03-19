import { Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

function safeGetStoredTheme(): Theme | null {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

function getSystemTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // ignore (private mode / blocked storage)
  }
}

export default function ThemeToggle() {
  const initial = useMemo<Theme>(() => {
    const stored = safeGetStoredTheme();
    return stored ?? getSystemTheme();
  }, []);

  const [theme, setTheme] = useState<Theme>(initial);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Passer en mode ${isDark ? "clair" : "sombre"}`}
      title={`Mode ${isDark ? "clair" : "sombre"}`}
      className="bg-background/60 hover:bg-muted"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}

