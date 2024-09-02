import ClientProviders from "@/components/client-prover";
import LandingPage from "@/pages/LandingPage";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[var(--background)]">
      <ClientProviders >
      <LandingPage />
      </ClientProviders>
    </main>
  );
}
