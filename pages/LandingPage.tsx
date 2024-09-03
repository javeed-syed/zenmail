import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FilePenIcon, GlobeIcon, MailOpenIcon, SendIcon } from "lucide-react"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import HeaderSection from "@/pages/Sections/HeaderSection"
import FooterSection from "@/pages/Sections/FooterSection"
import HeroSection from "./Sections/HeroSection"
import FlickeringGridRoundedDemo from "@/components/ui/flickering-grid-rounded-demo"
import TextRevealSection from "./Sections/TextRevealSection"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] scrollbar">
      <HeaderSection />
      <main className="flex-1">
      <HeroSection />
        <FlickeringGridRoundedDemo />
        <TextRevealSection />
        
        {/* <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary/90">
          <div className="container px-4 md:px-6 text-center text-primary-foreground">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Revolutionize Your Email Experience
              </h1>
              <p className="max-w-[700px] mx-auto text-lg md:text-xl">
                Elevate your email workflow with our powerful 'Mail as a Service' platform. Streamline your
                communication, boost productivity, and take control of your inbox.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit" className="w-full min-[400px]:w-auto">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <FooterSection />
    </div>
  )
}