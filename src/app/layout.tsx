import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  weight: ['400', '500', '600', '700', '800'] 
});

export const metadata: Metadata = {
  title: "Khaled Samim | iOS Developer",
  description: "Portfolio of Khaled Samim, Apple Swift Student Challenge Winner 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans bg-[#1A1A1A] text-white`}>
        {children}
      </body>
    </html>
  );
}
