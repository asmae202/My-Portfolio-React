import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import { profile } from "@/data/profile";
import AuroraBackground from "@/components/AuroraBackground";

export default function RootLayout() {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground theme">
      <Header />

      <AuroraBackground className="min-h-[calc(100vh-120px)]">
        <main className="mx-auto max-w-6xl px-4 py-10">
          <Outlet />
        </main>
      </AuroraBackground>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-muted-foreground">
            © {new Date().getFullYear()} • {profile.name}
            {profile.location ? ` • ${profile.location}` : ""}
          </div>
          <div className="flex flex-wrap gap-3">
            {profile.email ? (
              <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                Email
              </a>
            ) : null}
            {profile.links?.github ? (
              <a className="underline underline-offset-4" href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : null}
            {profile.links?.linkedin ? (
              <a className="underline underline-offset-4" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </footer>
    </div>
  );
}