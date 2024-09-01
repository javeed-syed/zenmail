'use client'
import Link from 'next/link'
import { MailOpenIcon, MenuIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../../components/ui/button'
import { useMediaQuery } from 'react-responsive'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

function HeaderSection() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
          <MailOpenIcon className="h-6 w-6" />
          <h1 className="font-semibold text-lg"><span className='text-violet-700'>Zen</span>mail</h1>
        </Link>
        {isMobile ? <>
          <Drawer>
            <DrawerTrigger><MenuIcon /></DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className='flex justify-between align-top'>
                <DrawerTitle className='mx-auto'>Welcome to Zenmail</DrawerTitle>
              </DrawerHeader>
              <DrawerFooter>
                <AuthButtons />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </> : <>
          <div className="flex gap-4">
            <AuthButtons />
          </div>
        </>}
      </header>
    </>
  )
}

export default HeaderSection

function AuthButtons() {
  return (<>
    <Button variant="outline">Sign Up</Button>
    <Button>Login</Button>
  </>)
}