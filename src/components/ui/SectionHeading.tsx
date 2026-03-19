import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  description?: string;
  children: ReactNode;
};

export default function SectionHeading({ id, description, children }: SectionHeadingProps) {
  return (
    <header id={id} className="grid gap-3">
      <h2 className="text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 drop-shadow-[0_0_18px_rgba(99,102,241,0.3)]">
        {children}
      </h2>
      {description ? (
        <p className="max-w-3xl text-lg text-muted-foreground">{description}</p>
      ) : null}
      <div className="h-px w-24 rounded-full bg-muted/50" />
    </header>
  );
}
