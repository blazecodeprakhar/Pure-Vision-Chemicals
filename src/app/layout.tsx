import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pure Vision Chemicals | Where Vision Meets Science",
  description: "Specialty chemical ingredients supplier based in Mumbai, India. Sourcing high-value ingredients for Personal Care, Home Care, Pet Care, and Food industries.",
  keywords: ["Pure Vision Chemicals", "PV Chem", "specialty chemicals India", "chemical ingredients Mumbai", "personal care raw materials", "home care chemicals", "actives", "natural oils supplier"],
  openGraph: {
    title: "Pure Vision Chemicals | Where Vision Meets Science",
    description: "High-value specialty chemicals and performance ingredients sourced from globally renowned manufacturing partners.",
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
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-700">
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

