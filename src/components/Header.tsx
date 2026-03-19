import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Wrench,
  Code2,
  GraduationCap,
  Mail,
  ExternalLink,
} from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", Icon: Home },
  { href: "#about", label: "A propos", Icon: User },
  { href: "#skills", label: "Skills", Icon: Wrench },
  { href: "#education", label: "Education", Icon: GraduationCap },
  { href: "#projects", label: "Projets", Icon: Code2 },
  { href: "#cv", label: "CV", Icon: ExternalLink },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur bg-background/60 supports-[backdrop-filter]:bg-background/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight">
          {profile.name}
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-lg text-sm transition-colors",
                activeSection === link.href
                  ? "bg-muted text-foreground font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              onClick={closeMenu}
            >
              <link.Icon className="mr-2 inline h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            variant="outline"
            className="shrink-0 bg-background/60 hover:bg-muted"
          >
            <a href="#contact">Contact</a>
          </Button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background/60 p-2 text-sm transition hover:bg-muted md:hidden"
            aria-label="Afficher le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="md:hidden border-t border-border bg-background/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm flex items-center gap-2",
                  activeSection === link.href
                    ? "bg-muted text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={closeMenu}
              >
                <link.Icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
