"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function OurStory() {
  const { t } = useLanguage()

  return (
    <section id="our-story" className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-[0.2em] text-center mb-8">
          {t("story.title")}
        </h2>

        {/* Monogram */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-56">
            <Image
              src="/logo2/IMG_7246.jpg"
              alt="Monogram"
              fill
              className="object-contain"
              quality={85}
            />
          </div>
        </div>

        {/* Names */}
        <h3 className="font-serif text-3xl md:text-4xl text-gold tracking-[0.15em] text-center mb-4">
          ARIELLE AND AYOMIDE
        </h3>

        {/* Date and Location */}
        <p className="text-black tracking-[0.1em] text-sm text-center mb-12">
          {t("story.dateLocation")}
        </p>

        {/* Arielle's POV */}
        <h4 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-8">
          {t("story.ariellePOV")}
        </h4>

        {/* Story Text */}
        <div className="font-serif text-black italic leading-relaxed space-y-6 mb-16">
          <p>
            {t("story.arielleP1")}
          </p>
          <p>
            {t("story.arielleP2")}
          </p>
          <p>
            {t("story.arielleP3")}
          </p>
          <p>
            {t("story.arielleP4")}
          </p>
          <p>
            {t("story.arielleP5")}
          </p>
          <p>
            {t("story.arielleP6")}
          </p>
        </div>

        {/* Flower Image */}
        <div className="relative aspect-[4/3] w-full max-w-md mx-auto mb-16">
          <Image
            src="/flower/IMG_4200.jpeg"
            alt="Flower"
            fill
            className="object-cover"
            quality={75}
          />
        </div>

        {/* Ayomide's POV */}
        <h4 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-8">
          {t("story.ayomidePOV")}
        </h4>

        {/* Story Text */}
        <div className="font-serif text-black italic leading-relaxed space-y-6 mb-16">
          <p>
            {t("story.ayomideP1")}
          </p>
          <p>
            {t("story.ayomideP2")}
          </p>
          <p>
            {t("story.ayomideP3")}
          </p>
          <p>
            {t("story.ayomideP4")}
          </p>
          <p>
            {t("story.ayomideP5")}
          </p>
          <p>
            {t("story.ayomideP6")}
          </p>
          <p>
            {t("story.ayomideP7")}
          </p>
          <p>
            {t("story.ayomideP8")}
          </p>
          <p>
            {t("story.ayomideP9")}
          </p>
          <p className="text-center">
            {t("story.ayomideP10")}
          </p>
        </div>
      </div>
    </section>
  )
}
