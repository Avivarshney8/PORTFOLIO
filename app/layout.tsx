import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arise",
  description:
    "Aalok Kumar Yadav is a driven Computer Science undergraduate passionate about building intelligent web experiences, AI agents, and high-performance graphics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#141414" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
