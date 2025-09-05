import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

// Import your Fustat font properly, making sure it's available
// This is an example - adjust according to your actual font import
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

// Define your metadata
export const metadata: Metadata = {
  title: "Your App Name",
  description: "Description of your application",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
      <Navbar />
      <main>
          {children}
      </main>
      <Footer />
      </body>
      </html>
  );
}