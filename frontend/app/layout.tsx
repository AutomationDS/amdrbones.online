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
  title: "amdrbones | Platform Engineering",
  description:
    "Platform Engineering • Linux • Docker • Kubernetes • DevOps",
  metadataBase: new URL("https://amdrbones.online"),
  openGraph: {
    title: "amdrbones | Platform Engineering",
    description:
      "Platform Engineering • Linux • Docker • Kubernetes • DevOps",
    url: "https://amdrbones.online",
    siteName: "amdrbones",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "amdrbones | Platform Engineering",
    description:
      "Platform Engineering • Linux • Docker • Kubernetes • DevOps",
  },
};

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
