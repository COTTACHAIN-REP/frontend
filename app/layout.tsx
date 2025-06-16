import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cottachain",
  description: "COTTACHAIN is the future of online reputation secure, verifiable, and truly yours. Your trust score follows you across DeFi, DAOS, e-commerce and social media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assests/images/nav.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
         
      >

        <Navbar />
        {children}
        <Footer />
      
      </body>
    </html>
  );
}
