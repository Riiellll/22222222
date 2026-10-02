import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";
import { data } from "./data";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Happy birthday, ${data.name}`,
  description: `A little something I made for you, ${data.name}.`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B0508",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${hand.variable}`}>{children}</body>
    </html>
  );
}
