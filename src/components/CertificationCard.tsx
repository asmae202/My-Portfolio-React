import type { Certification } from "@/data/certifications";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <Card
      className={isExpired ? "opacity-80" : ""}
      aria-label={`Certification ${c.title}`}
    >
      <CardHeader className="gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="grid gap-1">
            <CardTitle className="leading-snug">{c.title}</CardTitle>
            <CardDescription>
              {c.issuer} • {mmYYYY(c.issueDate)}
              {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
              {c.credentialId ? ` • ID ${c.credentialId}` : ""}
            </CardDescription>
          </div>
          {c.image ? (
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              width={96}
              height={96}
              loading="lazy"
              className="size-20 md:size-24 object-contain rounded-xl ring-1 ring-foreground/10 bg-muted/20 p-2"
            />
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {c.tags?.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
          {isExpired ? <Badge variant="secondary">Expirée</Badge> : null}
          {c.status === "revoked" ? <Badge variant="destructive">Révoquée</Badge> : null}
        </div>
      </CardHeader>

      <CardContent className="grid gap-3">
        {c.skills?.length ? (
          <div className="grid gap-2">
            <div className="text-sm font-medium">Compétences</div>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <Badge key={s} variant="secondary">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="justify-end gap-2">
        {c.credentialUrl ? (
          <Button asChild size="sm">
            <a
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir le certificat ${c.title}`}
            >
              Vérifier
            </a>
          </Button>
        ) : (
          <Button size="sm" variant="outline" disabled>
            Lien indisponible
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}