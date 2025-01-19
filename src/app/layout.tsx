import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { UserIcon } from "@heroicons/react/16/solid";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const newsReader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finage",
  description: "Manage finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} ${newsReader.variable} antialiased px-10`}>
        <main>
          <header className="w-full h-auto py-6 border-slate-800 border-b">
            <div className="flex justify-between items-baseline">
              <div className="flex-none">
                <div className="text-3xl font-[family-name:var(--font-newsreader)]">Finage</div>
              </div>
              <div className="flex-none">
                <div className="w-auto text-sm"><UserIcon width={18} style={{ display: "unset" }} /></div>
              </div>
            </div>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
