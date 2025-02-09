import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import MainPanel from "@/app/ui/mainPanel";
import WelcomePanel from "@/app/ui/welcomePanel";
import UtilityPanel from "@/app/ui/utilityPanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proyecto next",
  description: "Proyecto next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex flex-col relative">
              <main className="grid grid-cols-9 grid-rows-6 gap-6 min-h-screen">
                <WelcomePanel />
                <MainPanel>
                  {children}
                </MainPanel>
                <UtilityPanel />
              </main>
            </div>
      </body>
    </html>
  );
}
