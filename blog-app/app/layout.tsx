import NavBar from "@/components/shared/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomBar from "@/components/shared/BottomBar";
import { Providers } from "./providers";
import { Button } from '@nextui-org/button'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClownCoding Blog",
  description: "Next.js 13 Blog Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="container max-w-2xl mx-auto px-4">
            <NavBar />
            <div>{children}</div>
          </div>
          <Button>Click me</Button>
          <BottomBar />
        </Providers>
      </body>
    </html>
  );
}
