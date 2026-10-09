import { Space_Grotesk } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "CodeNiti — Websites, Apps & AI Agents that sell 24/7",
  description:
    "CodeNiti is a software lab shipping websites, platforms and AI agents for businesses in India & Australia. Real systems, real clients, no templates.",
};

export const viewport: Viewport = {
  themeColor: "#ffd02f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${space.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
