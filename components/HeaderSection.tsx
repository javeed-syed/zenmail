import { Link, MailOpenIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

function HeaderSection() {
  return (
    <>
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MailOpenIcon className="h-6 w-6" />
          <span className="sr-only">Mail as a Service</span>
        </Link>
        <div className="flex gap-4">
          <Button variant="outline">Sign Up</Button>
          <Button>Login</Button>
        </div>
      </header>
    </>
  )
}

export default HeaderSection