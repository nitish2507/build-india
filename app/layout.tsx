import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { meta } from "@/lib/content";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL(meta.url),
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    url: meta.url
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
