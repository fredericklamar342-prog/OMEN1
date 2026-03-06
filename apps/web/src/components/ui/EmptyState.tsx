import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

function EmptyState({
  title,
  description,
  icon,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-[400px] flex-col items-center justify-center p-12 text-center border border-dashed border-border/50 bg-surface/30 backdrop-blur-sm transition-all relative overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-accent/[0.01] pointer-events-none" />
      {icon && <div className="mb-6 text-subtext/40">{icon}</div>}
      <h3 className="text-xl font-bold tracking-tight text-foreground uppercase">{title}</h3>
      {description && (
        <p className="mt-3 text-sm text-subtext/60 max-w-sm mx-auto font-mono text-[11px] uppercase tracking-widest leading-relaxed">
          {description}
        </p>
      )}
      {action && <div className="mt-10">{action}</div>}
    </div>
  );
}

export { EmptyState };
