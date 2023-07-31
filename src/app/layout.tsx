import Footer from "./Footer";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flowmazon",
  description: "Tutorial project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <main className="m-auto  min-w-[300px] max-w-7xl p-4">
          <div>{children}</div>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
