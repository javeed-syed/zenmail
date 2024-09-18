import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FilePenIcon, GlobeIcon, MailOpenIcon, SendIcon } from "lucide-react"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import HeaderSection from "@/pages/Sections/HeaderSection"
import FooterSection from "@/pages/Sections/FooterSection"
import HeroSection from "./Sections/HeroSection"
import FlickeringGridRoundedDemo from "@/components/ui/flickering-grid-rounded-demo"
import TextRevealSection from "./Sections/TextRevealSection"
import WaitingListSection from "./WaitingListSection"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] scrollbar">
      <HeaderSection />
      <main className="flex-1">
      <HeroSection />
        <FlickeringGridRoundedDemo />
        <TextRevealSection />
        <WaitingListSection />
      </main>
      <FooterSection />
    </div>
  )
}