import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata, Viewport } from 'next';
import { MAIN_URL } from '@/lib/contant';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "lU - Web Interface Designer",
  description: "My personal website, where I share my thoughts and projects.",
  metadataBase: new URL(MAIN_URL),
};

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable}  tracking-tight antialiased`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
