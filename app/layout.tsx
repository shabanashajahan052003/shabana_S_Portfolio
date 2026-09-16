import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shabana S | Software Developer — React, Next.js, Python",
  description:
    "Portfolio of Shabana S — Software Developer with experience in React, Next.js, TypeScript, Python, and Django. Building modern, responsive, and scalable web applications.",
  keywords: [
    "Shabana",
    "UI Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Shabana S | Software Developer — React, Next.js, Python",
    description:
      "Portfolio of Shabana S — Software Developer building modern, responsive web applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import FramerMotionProvider from "./components/FramerMotionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FramerMotionProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </FramerMotionProvider>
      </body>
    </html>
  );
}
