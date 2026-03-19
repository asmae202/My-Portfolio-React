import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-tight backdrop-blur-md",
  {
    variants: {
      variant: {
        default:
          "border-[var(--border)] bg-black/5 text-foreground dark:bg-white/10",
        violet:
          "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-200",
        cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-200",
        amber:
          "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

