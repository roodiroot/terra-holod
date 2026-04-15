"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"
import { HTMLAttributes } from "react"

interface HeroContentProps extends HTMLAttributes<HTMLDivElement> { }

const HeroContent: React.FC<HeroContentProps> = ({ children }) => {
  const desctop = useMediaQuery("(min-width: 500px)")

  if (desctop)
    return <div className="relative w-full h-[596px] bg-sky-300 rounded-[60px] overflow-y-hidden">
      <div className="absolute inset-0 z-10 p-14">
        <h1 className="font-bold text-5xl md:text-6xl text-white max-w-md leading-[90%] lg:text-balance">Универсальные <span className="text-sky-800">сплит-системы</span> <span className="whitespace-nowrap">X-Series</span></h1>
        <p className="mt-4 text-2xl py-2 px-4 bg-white inline-block rounded-full font-medium text-sky-800">Для температур -5…+5 °C</p>
      </div>
      <Image
        width={1216}
        height={596}
        src="/images/hero-x-series/width.jpg"
        alt="beer screenshot"
        className="absolute z-0 w-full h-full object-cover "
      />
    </div>

  return (
    <div className="relative aspect-[1.5/2] w-full bg-sky-300 rounded-[60px] overflow-y-hidden">
      <div className="absolute inset-0 z-10 p-8">
        <h1 className="font-bold text-5xl text-white leading-[90%] lg:text-balance"><span className="text-3xl">Универсальные </span><br /><span className="text-sky-800">сплит-системы</span> <span className="whitespace-nowrap">X-Series</span></h1>
        <p className="mt-4 text-lg py-2 px-4 bg-white inline-block rounded-full font-medium text-sky-800">Для температур +5…−5 °C</p>
      </div>
      <Image
        width={1216}
        height={596}
        src="/images/hero-x-series/heigth.jpg"
        alt="beer screenshot"
        className="absolute w-full h-full object-cover "
      />
    </div>
  )
}

export default HeroContent
