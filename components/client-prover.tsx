'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "react-hot-toast"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster position="top-right"/>
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}

export default ClientProviders