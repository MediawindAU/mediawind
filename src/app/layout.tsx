import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mediawind.co"),
  title: {
    default: "Mediawind – Digital Product Development Studio",
    template: "%s – Mediawind",
  },
  description:
    "We help startups turn ideas into scalable digital products. From MVPs to full-scale apps, Mediawind is your partner in building purposeful, user-friendly, and reliable digital products.",
  openGraph: {
    siteName: "Mediawind",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
