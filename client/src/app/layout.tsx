import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NearbyTour",
  description: "Tu lugar para encontrar lugares",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextProvider>
      <html lang="es">
        <head></head>
        <body className={inter.className}>{children}</body>
      </html>
    </ContextProvider>
  );
}
