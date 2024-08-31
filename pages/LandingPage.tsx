import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FilePenIcon, GlobeIcon, MailOpenIcon, SendIcon } from "lucide-react"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import HeaderSection from "@/components/HeaderSection"
import FooterSection from "@/components/FooterSection"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeaderSection />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary/90">
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
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              <div className="space-y-4">
                <FilePenIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Email Builder</h3>
                <p className="text-muted-foreground">
                  Easily create and customize professional-looking emails with our drag-and-drop email builder. Elevate
                  your communication with stunning templates and personalization options.
                </p>
              </div>
              <div className="space-y-4">
                <SendIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Bulk Email Sender</h3>
                <p className="text-muted-foreground">
                  Streamline your email campaigns with our powerful bulk email sender. Reach your audience at scale,
                  track engagement, and optimize your messaging for maximum impact.
                </p>
              </div>
              <div className="space-y-4">
                <GlobeIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Your Own Email Domain</h3>
                <p className="text-muted-foreground">
                  Elevate your brand and professional image with a custom email domain. Enjoy the benefits of a
                  personalized email address that reflects your business or personal identity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}