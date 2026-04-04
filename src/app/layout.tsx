import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mlventures.agency"),
  title: "ML Ventures — Data & AI Consultancy",
  description:
    "ML Ventures helps growth-stage companies build AI-powered analytics systems, predictive models, and data infrastructure — without the overhead of a full team.",
  openGraph: {
    title: "ML Ventures — Data & AI Consultancy",
    description: "Turn Your Data Into Decisions That Scale.",
    url: "https://mlventures.agency",
    siteName: "ML Ventures",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
