import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Liwanag — Lighting the Path of Young Dreams",
  description:
    "Project Liwanag is an outreach initiative by the Google Developer Groups on Campus – USLS, dedicated to inspiring children to believe in their dreams, discover their potential, and move forward with confidence.",
  keywords: [
    "Project Liwanag",
    "GDG on Campus",
    "USLS",
    "outreach",
    "children",
    "community",
    "volunteer",
    "donate",
  ],
  openGraph: {
    title: "Project Liwanag — Lighting the Path of Young Dreams",
    description:
      "An outreach initiative by GDG on Campus – USLS, inspiring children to believe in their dreams.",
    type: "website",
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
      className={`${plusJakarta.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
