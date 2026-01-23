"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function GiftsSection() {
  const { t } = useLanguage()
  return (
    <section id="gifts" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">{t("gifts.blessings")}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold">{t("gifts.title")}</h2>
        </div>

        {/* How to Give Section */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-gold mb-8 tracking-[0.15em]">
            {t("gifts.howToGive")}
          </h3>
          
          <div className="font-serif text-black leading-relaxed space-y-6 max-w-2xl mx-auto">
            <p>
              {t("gifts.description1")}
            </p>
            
            <p>
              {t("gifts.description2")}
            </p>
            
            <p className="text-gold text-lg font-semibold">
              📧 arielleandayomide@gmail.com
            </p>
            
            <p>
              {t("gifts.description3")}
            </p>

            <p className="italic">
              {t("gifts.description4")}
            </p>
            
            <p className="text-sm italic text-black/70 mt-8">
              {t("gifts.verse")}
            </p>
          </div>
        </div>

        {/* Gift Image */}
        <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto mt-12">
          <Image
            src="/gifts/IMG_4372.jpeg"
            alt="Gifts"
            fill
            className="object-cover rounded"
            quality={75}
          />
        </div>
      </div>
    </section>
  )
}
