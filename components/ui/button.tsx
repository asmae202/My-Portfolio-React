import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background hover:opacity-90 shadow-sm shadow-black/10 dark:shadow-black/30",
        outline:
          "border border-[var(--border)] bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
        secondary:
          "bg-black/5 text-foreground hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15",
        gradient:
          "text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 hover:brightness-110 shadow-md shadow-violet-500/20",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-10 px-4",
        lg: "h-12 px-7 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

