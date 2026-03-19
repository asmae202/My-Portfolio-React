import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Projects() {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold">Projets</h2>
      <p className="text-muted-foreground max-w-2xl">
        Une sélection de projets (IA, SIG, web). Chaque carte résume le contexte et les technos.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="hover:shadow-sm transition-shadow">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.summary}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="gap-2 justify-end">
              {p.repo ? (
                <Button asChild variant="outline" size="sm">
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </Button>
              ) : null}
              {p.link ? (
                <Button asChild size="sm">
                  <a href={p.link} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </Button>
              ) : null}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}