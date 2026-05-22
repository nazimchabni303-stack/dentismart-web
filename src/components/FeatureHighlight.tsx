import React from "react";
import { cn } from "../lib/utils";

interface FeatureHighlightProps {
  icon?: React.ReactNode;
  title: string;
  features: React.ReactNode[];
  footer?: React.ReactNode;
  className?: string;
}

// Pas de Framer Motion ici — plus d'animations whileInView qui causaient des jank
const FeatureHighlight = React.forwardRef<HTMLDivElement, FeatureHighlightProps>(
  ({ className, icon, title, features, footer }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex max-w-lg flex-col items-start space-y-4 p-8 text-left",
          className
        )}
      >
        {icon && <div>{icon}</div>}

        <h2 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white transition-colors duration-700">
          {title}
        </h2>

        <div className="flex flex-col space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="text-2xl text-muted-foreground">
              {feature}
            </div>
          ))}
        </div>

        {footer && <div>{footer}</div>}
      </div>
    );
  }
);

FeatureHighlight.displayName = "FeatureHighlight";

export { FeatureHighlight };
