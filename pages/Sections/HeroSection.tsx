import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

function HeroSection() {
  return (
        <section id="hero" className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 py-8 my-8">
        <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">Zen Mail is the new way
                <br className="hidden md:block" /> to run campaigns.</h1>

            <p className="mb-8 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
                <br className="hidden md:block" /> Drag-n-Drop Email Editor Powered by <Link href="https://unlayer.com/embed" className="bg-gradient-to-r from-indigo-500 to-violet-700 bg-clip-text text-transparent hover:underline">unlayer</Link>
                <br className="hidden md:block" /> &#38; In-built Code Editor for <Link href="https://react.email/" className="bg-gradient-to-r from-indigo-500 to-violet-700 bg-clip-text text-transparent hover:underline">React email</Link>
            </p>
            <div className='flex flex-col justify-center m-4 gap-4 md:flex-row md:gap-8 mb-12'>
            <Link href="https://github.com/javeed-syed/zenmail">
              <OpenSource />
            </Link>    
            <NewAnnoucment />
            </div>
            <Button>Get Started <ArrowRight size={18} className='ml-2' /> </Button>
        </section>
    )
}

export default HeroSection



export async function NewAnnoucment() {
  return (
    <div className="z-10 flex items-center justify-center cursor-pointer">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent font-[1rem]`,
          )}
        >
          Introducing Zen Mail Editor
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}

export async function OpenSource() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className='flex items-center justify-center gap-2'><GitHubLogoIcon/> Open source</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
