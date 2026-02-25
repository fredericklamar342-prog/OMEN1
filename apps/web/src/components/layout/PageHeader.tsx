import * as React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-12 border-b border-border mb-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold tracking-tight text-foreground m-0">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-subtext max-w-2xl">{description}</p>
        )}
      </div>
      {action && <div className="flex items-center gap-4">{action}</div>}
    </div>
  );
}
