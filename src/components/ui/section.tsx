import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section = ({
  children,
  id,
  className,
  title,
  subtitle,
  ...props
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 px-6 max-w-7xl mx-auto w-full", className)}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-12 md:mb-16 text-center">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};
