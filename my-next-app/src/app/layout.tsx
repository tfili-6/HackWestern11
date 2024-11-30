import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Western Marketplace",
  description: "Buy and sell items in your local community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
