import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bride View — Find Your Dream Wedding Dress with AI",
  description:
    "Stop scrolling endlessly. Bride View uses AI to generate personalized wedding dress designs based on your unique style, body, and vision. 2 rounds. 16 dresses. Your perfect look.",
  keywords: [
    "wedding dress",
    "AI wedding",
    "bridal",
    "dream dress",
    "wedding planning",
    "bride",
    "dress design",
    "AI fashion",
  ],
  openGraph: {
    title: "Bride View — Find Your Dream Wedding Dress with AI",
    description:
      "Stop scrolling endlessly. AI-generated wedding dress designs personalized to you.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bride View — Find Your Dream Wedding Dress with AI",
    description:
      "Stop scrolling endlessly. AI-generated wedding dress designs personalized to you.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-text`}
      >
        {children}
      </body>
    </html>
  );
}
