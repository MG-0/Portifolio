import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} | Full Stack Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Portfolio of Mahmoud Gamal Ahmed Bakheet - Full Stack Developer skilled in MERN, Next.js, and NestJS, building production-grade web applications with clean architecture.",
  keywords: [
    "Mahmoud Gamal",
    "Mahmoud Gamal Ahmed Bakheet",
    "Full Stack Developer",
    "Next.js Developer",
    "NestJS Developer",
    "MERN Stack",
    "React.js",
    "TypeScript",
    "Node.js",
    "Rewaq Decor",
    "Egypt",
    "Broadcast Graphics",
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.github }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.github,
    title: `${siteConfig.fullName} | Full Stack Developer`,
    description:
      "Full Stack Developer skilled in MERN, Next.js, and NestJS, building production-grade web systems and real-time experiences.",
    siteName: siteConfig.fullName,
  },
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
