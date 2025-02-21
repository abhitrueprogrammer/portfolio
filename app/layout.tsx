import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Pant's portfolio",
  description: "A simple portfolio showcase of Abhinav Pant",
  
  openGraph: {
    title: "Abhinav Pant's portfolio",
    description: "A simple portfolio showcase of Abhinav Pant",
    images: [
      {
        url: "og-image.png",
        width: 800,
        height: 600,
        alt: "Abhinav Pant's portfolio",
      },
    ],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
