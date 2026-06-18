import type { Metadata } from "next";
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
  title: "Shabana | UI Developer & Full-Stack Engineer",
  description:
    "Portfolio of Shabana — UI Developer Intern at Valoriz Digital, Computer Science student at TKM Institute of Technology. Building modern, responsive web applications.",
  keywords: [
    "Shabana",
    "UI Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Shabana | UI Developer & Full-Stack Engineer",
    description:
      "Portfolio of Shabana — UI Developer Intern at Valoriz Digital.",
    type: "website",
  },
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
