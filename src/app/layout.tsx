import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import FloatingDock from "@/components/FloatingDock";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OCEAN RESORT | Ultra-Luxury Beachfront Retreat",
  description: "Experience unparalleled luxury at India's most exclusive beachfront retreat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-primary text-pearl overflow-x-hidden selection:bg-gold selection:text-primary-dark">
        <Providers>
          <Preloader />
          <Cursor />
          <Navbar />
          {children}
          <FloatingDock />
        </Providers>
      </body>
    </html>
  );
}
