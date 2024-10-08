import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenmail",
  description: "Automate your emails",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
          >
            <Toaster />
          {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>

  );
}
