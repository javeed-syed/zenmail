import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Link } from 'lucide-react'
import React from 'react'

function FooterSection() {
  return (
    <>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Mail as a Service. All rights reserved.{" "}
          <Link href="#" className="underline underline-offset-2" prefetch={false}>
            Terms & Conditions
          </Link>
        </p>
        <div className="flex items-center gap-4 ml-auto">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            <TwitterLogoIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            <GitHubLogoIcon className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            <InstagramLogoIcon className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            <LinkedInLogoIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <p className="text-xs text-muted-foreground ml-auto">Built by Syed Javeed</p>
      </footer>
      </>
  )
}

export default FooterSection