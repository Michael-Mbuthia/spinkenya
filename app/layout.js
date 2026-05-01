import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spin Kenya",
  description: "Table Tennis platform",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
