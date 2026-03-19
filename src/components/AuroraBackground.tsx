import { cn } from "@/lib/utils";

export default function AuroraBackground({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.indigo.500/.28),transparent_60%)] blur-3xl animate-float-slow" />
        <div className="absolute -top-24 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.fuchsia.500/.20),transparent_60%)] blur-3xl animate-drift" />
        <div className="absolute top-32 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.cyan.500/.18),transparent_60%)] blur-3xl animate-drift" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,theme(colors.background),theme(colors.background))]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(theme(colors.foreground)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

