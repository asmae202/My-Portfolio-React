import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="grid gap-6">
      <div className="grid gap-2">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <p className="text-muted-foreground max-w-2xl">
          Filtre par titre, issuer, tags ou compétences. Clique pour ouvrir les liens quand disponibles.
        </p>
      </div>

      <Card>
        <CardHeader className="gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle>Recherche</CardTitle>
              <CardDescription>{list.length} résultat(s)</CardDescription>
            </div>
            <div className="w-full md:w-80">
              <Input
                placeholder="Ex: AWS, Kubernetes, Networking"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Filtrer les certifications"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["AWS", "Kubernetes", "DevOps", "Cloud"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setQ(t)}
                className="text-left"
              >
                <Badge variant="outline">{t}</Badge>
              </button>
            ))}
            {q ? (
              <button type="button" onClick={() => setQ("")}>
                <Badge variant="secondary">Réinitialiser</Badge>
              </button>
            ) : null}
          </div>
        </CardHeader>
        <CardContent className="pt-0" />
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.length ? (
          list.map((c) => (
            <CertificationCard key={c.title + c.issueDate} c={c} />
          ))
        ) : (
          <div className="md:col-span-2 lg:col-span-3 text-sm text-muted-foreground">
            Aucun résultat. Essaie un autre mot-clé.
          </div>
        )}
      </div>
    </section>
  );
}