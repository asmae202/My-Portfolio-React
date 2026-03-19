import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full resize-none rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3 text-sm text-foreground placeholder:text-black/40 shadow-sm shadow-black/5 outline-none backdrop-blur-xl transition focus-visible:ring-2 focus-visible:ring-[var(--ring)] dark:bg-white/10 dark:placeholder:text-white/40",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

