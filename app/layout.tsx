import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PaymentProvider } from "@/context/PaymentContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carbon Pay Demo",
  description: "A demo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PaymentProvider>{children}</PaymentProvider>
      </body>
    </html>
  );
}
