import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import clsx from "clsx";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yoursite.com"),
  title: {
    default: "Fredrik | Software Engineer",
    template: "%s | Fredrik",
  },
  description:
    "Frontend developer specializing in React, TypeScript, and modern web development.",
  keywords: ["software engineer", "frontend developer", "React", "TypeScript"],
  authors: [{ name: "Fredrik" }],
  creator: "Fredrik",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fredrik Portfolio",
    images: ["/use-my-bio.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(geistSans.variable, "dark")}>
      <body className={`antialiased font-sans`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
