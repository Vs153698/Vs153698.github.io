import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Singh Bhadouria — Full-Stack Developer & AI Agent Builder",
  description:
    "I build web platforms, business systems and AI agents for founders — from Kota, India, for clients everywhere.",
  openGraph: {
    title: "Vaibhav Singh Bhadouria — Developer & AI Agent Builder",
    description:
      "Web platforms, CRM systems, booking flows and autonomous agents that pay for themselves.",
    url: "https://vs153698.github.io",
    siteName: "vaibhav.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@vs153698",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
