import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pure Vision Chemicals | Botanical Intelligence & Specialty Actives",
  description: "High-value specialty chemical ingredients sourced from globally renowned partners. Serving Personal Care, Home Care, Pet Care, and Food industries.",
  keywords: ["Pure Vision Chemicals", "PV Chem", "specialty chemical ingredients", "actives", "preservatives", "rheology modifiers", "natural oils", "botanical extracts", "Mumbai chemicals"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Pure Vision Chemicals | Botanical Intelligence & Specialty Actives",
    description: "Sourcing high-value specialty chemical ingredients across India and global markets.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F8F8F3] text-[#1A2E26]">
        <CartProvider>
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}


