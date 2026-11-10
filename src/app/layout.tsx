import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Caleb Galdston",
  description:
    "Portfolio of Caleb Galdston, ECE M.S. student at UCSB studying controls and optimization.",
  openGraph: {
    title: "Caleb Galdston",
    description: "ECE @ UCSB · Controls · Optimization · ML",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Caleb Galdston",
    description: "ECE @ UCSB · Controls · Optimization · ML",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
