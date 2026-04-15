import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import AnalyticsTracker from "@/components/AnalyticsTracker";
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
      <head>
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('D7FS5CJC77U4SGAC8TOG');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-text`}
      >
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
