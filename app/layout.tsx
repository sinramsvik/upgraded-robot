import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";
import { PostTransition } from "@/app/transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unfold test",
  description: "Just a playground showcasing some tests for Unfold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='no'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostTransition>{children}</PostTransition>
      </body>
    </html>
  );
}
