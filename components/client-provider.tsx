import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster/>
        {children}
      </ThemeProvider>
  )
}

export default ClientProviders