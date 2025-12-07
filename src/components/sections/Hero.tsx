import React from "react"
import { HeroContent } from "../../types/content"
import HeroCard from "../ui/HeroCard"
import { Card } from "../ui/Card"
import { Button } from "../ui/Button"
import hero from "../../assets/image/hero.png";

export const Hero: React.FC<{ data: HeroContent }> = ({ data }) => {
  return (
    <section id="hero" className="relative bg-[#FFE03E]">
      <div className="absolute inset-x-0 bottom-0 h-[184px] bg-[#f2d229] z-0" />
      <div className="max-w-[1280px] mx-auto max-xl:mx-4 py-8 md:py-10">
        <div className="flex max-md:flex-col justify-between relative">
          <div className="flex flex-col justify-between max-md:w-full max-md:items-center max-sm:items-start md:py-7">
            {data.eyebrow && <div className="text-base font-bold tracking-wide text-slate-700 uppercase">{data.eyebrow}</div>}
            <div className="flex flex-col max-md:items-center max-sm:items-start gap-7">
            <h1 className="mt-2 text-3xl md:text-5xl md:max-w-[500px] max-md:text-center max-sm:text-start font-extrabold text-slate-900">
              {data.title}
            </h1>
            {data.subtitle && <p className="mt-3 text-lg text-slate-700">{data.subtitle}</p>}
            </div>
            <div className="aspect-[415/352] w-full max-sm:mx-auto max-w-[415px]">
            <img src={hero} alt="Hero" className="w-full h-full object-contain"  />
            </div>
          </div>
          <div className="relative md:w-[492px] max-sm:w-full">
            <HeroCard form={data.form} />
          </div>
        </div>
      </div>
    </section>
  )
}