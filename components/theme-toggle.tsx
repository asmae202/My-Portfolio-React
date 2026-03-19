"use client";

import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      onClick={toggle}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="rounded-full"
    >
      {theme === "dark" ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </Button>
  );
}

