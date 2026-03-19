import { education } from "@/data/education";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <div className="grid gap-2">
        <h2 className="text-2xl font-semibold">Formations</h2>
        <p className="text-muted-foreground max-w-2xl">
          Diplômes et apprentissages clés, avec cours et points marquants.
        </p>
      </div>

      <ol className="relative border-s ps-6 grid gap-6">
        {education.map((e) => (
          <li key={`${e.school}-${e.start}`} className="relative">
            <span className="absolute -left-[9px] top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
            <Card className="hover:shadow-sm transition-shadow">
              <CardHeader>
                <CardTitle>
                  {e.degree}
                  {e.field ? ` — ${e.field}` : ""}
                </CardTitle>
                <CardDescription>
                  {e.school}
                  {e.location ? ` • ${e.location}` : ""} • {fmt(e.start)} — {fmt(e.end)}
                  {e.gpa ? ` • GPA ${e.gpa}` : ""}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {e.courses?.length ? (
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Cours (sélection)</div>
                    <div className="flex flex-wrap gap-2">
                      {e.courses.slice(0, 8).map((c) => (
                        <Badge key={c} variant="outline">
                          {c}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}

                {e.highlights?.length ? (
                  <>
                    <Separator />
                    <ul className="grid gap-1.5 text-sm text-muted-foreground">
                      {e.highlights.map((h) => (
                        <li key={h}>• {h}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}