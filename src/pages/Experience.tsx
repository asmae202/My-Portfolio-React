import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function ExperiencePage() {
  return (
    <section className="grid gap-6">
      <div className="grid gap-2">
        <h2 className="text-2xl font-semibold">Parcours</h2>
        <p className="text-muted-foreground max-w-2xl">
          Expériences, projets et responsabilités (format timeline).
        </p>
      </div>

      <ol className="relative border-s ps-6 grid gap-6">
        {experience.map((e) => (
          <li key={`${e.title}-${e.start}`} className="relative">
            <span className="absolute -left-[9px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
            <Card className="hover:shadow-sm transition-shadow">
              <CardHeader>
                <CardTitle>{e.title}</CardTitle>
                <CardDescription>
                  {e.company ? `${e.company}` : ""}{" "}
                  {e.location ? `• ${e.location}` : ""} • {fmt(e.start)} — {fmt(e.end)}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <ul className="grid gap-1.5 text-sm text-muted-foreground">
                  {e.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
                {e.tags?.length ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {e.tags.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}