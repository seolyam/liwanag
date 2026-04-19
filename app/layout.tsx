import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope, Outfit } from "next/font/google";
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

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liwanag-outreach.vercel.app"),
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
    url: "https://liwanag-outreach.vercel.app",
    images: [
      {
        url: "/images/logos/Colored Logo.png",
        width: 1536,
        height: 768,
        alt: "Google Developer Groups on Campus - La Salle Bacolod logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Liwanag — Lighting the Path of Young Dreams",
    description:
      "An outreach initiative by GDG on Campus – USLS, inspiring children to believe in their dreams.",
    images: ["/images/logos/Colored Logo.png"],
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
      className={`${plusJakarta.variable} ${manrope.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}
