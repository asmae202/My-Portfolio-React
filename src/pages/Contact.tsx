import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { profile } from "@/data/profile";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const to = profile.email ?? "";
    const subject = `Contact portfolio — ${name || "Nouveau message"}`;
    const body = [`Nom: ${name}`, `Email: ${email}`, "", message].join("\n");
    return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, email, message]);

  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Me contacter." />
      </Helmet>

      <div className="grid gap-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-muted-foreground max-w-2xl">
          Envoie-moi un message. Le bouton ouvre ton client mail avec le contenu pré-rempli.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Message</CardTitle>
            <CardDescription>Réponse rapide si tu ajoutes ton email.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <div className="grid gap-1.5">
              <label className="text-sm" htmlFor="name">Nom</label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ton nom" />
            </div>
            <div className="grid gap-1.5">
              <label className="text-sm" htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-sm" htmlFor="message">Message</label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Décris ta demande (projet, collaboration, stage, etc.)"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-end">
              {profile.email ? (
                <Button asChild>
                  <a href={mailto}>Envoyer</a>
                </Button>
              ) : (
                <Button disabled>Ajoute ton email dans `src/data/profile.ts`</Button>
              )}
              {profile.email ? (
                <Button asChild variant="outline">
                  <a href={`mailto:${profile.email}`}>Copier/ouvrir email</a>
                </Button>
              ) : null}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liens</CardTitle>
            <CardDescription>Tu peux aussi me joindre ici.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm">
            {profile.email ? (
              <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            ) : (
              <div className="text-muted-foreground">Email non renseigné</div>
            )}
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
            {profile.links?.website ? (
              <a className="underline underline-offset-4" href={profile.links.website} target="_blank" rel="noreferrer">
                Site
              </a>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
