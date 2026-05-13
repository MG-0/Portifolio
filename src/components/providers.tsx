"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { LanguageProvider } from "./language-provider";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <LanguageProvider>
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
    </LanguageProvider>
  );
}
