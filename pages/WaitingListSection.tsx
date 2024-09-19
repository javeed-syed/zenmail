import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

function WaitingListSection() {
  const tallyFormUrl = "https://dub.sh/zenmail"

    return (
      <>
      <div>
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 text-center text-primary-foreground">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Revolutionize Your Email Experience
              </h1>
              <p className="max-w-[700px] mx-auto text-lg md:text-xl text-[var(--subtitle)]">
                Elevate your email workflow with our powerful <strong>&lsquo;Mail as a Service platform&lsquo;</strong>. Streamline your
                communication, boost productivity, and take control of your inbox.
                </p>
                <p className="text-[var(--subtitle)]"> Join our waiting list and be the first to know when we launch!</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Link href={tallyFormUrl} prefetch={false} className="w-full min-[400px]:w-auto">
                <Button type="submit" className="w-full min-[400px]:w-auto">
                  Join Now
                </Button>
                  </Link>
              </div>
            </div>
          </div>
        </section>
            </div>
      </>
            
  )
}

export default WaitingListSection;


        // <CardTitle className="text-3xl font-bold">Join Our Waiting List</CardTitle>
        // <CardDescription className="text-xl mt-2">Be the first to know when we launch!</CardDescription>

        // <Button 
        //   size="lg" 
        //   className="text-lg px-8 py-6"
        //   onClick={() => window.open(tallyFormUrl, '_blank')}
        // >
        //   Join the Waiting List
        //   <ChevronRight className="ml-2 h-5 w-5" />
