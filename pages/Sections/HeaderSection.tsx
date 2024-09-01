'use client'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import React from 'react'
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
      <header className="fixed left-0 top-0 z-50 w-full animate-fade-in border-b backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className={`${isMobile ? 'mx-0' : 'mx-16'}`}>
          <div className="flex h-[3.5rem] items-center justify-between px-10">
            <a className="text-md flex items-center" href="/">Zen Mail</a>
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
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderSection

function AuthButtons() {
  return (<div className="ml-auto flex h-full items-center gap-4">
    <Link href="/signin" prefetch={false}>
      <button className="text-sm disabled:pointer-events-none h-9 px-4 py-2 rounded-md font-medium transition-colors">Log in</button>
    </Link>
    <Link href="/signup" prefetch={false}>
      <button className="rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 text-sm" >Sign up</button>
    </Link>
  </div>
  )
}