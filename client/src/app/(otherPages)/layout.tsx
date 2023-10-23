import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContextProvider from "@/components/UserProfile/UserContext";

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
    <html lang="es">
      <head></head>
      <body className={inter.className}>
        <Navbar />
        <ContextProvider>
          {children}
          <Footer></Footer>
        </ContextProvider>

      </body>
    </html>
  );
}
