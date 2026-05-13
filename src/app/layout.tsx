import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Mahmoud Gamal's Portfolio - Full Stack Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased selection:bg-indigo-500/30`}>
        <Providers
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
