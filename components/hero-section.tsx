"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[80vh] min-h-[600px]">
        <Image
          src="/top_picture/310276BC-6A7F-4C2C-AD9C-8D7A4503724A.JPG"
          alt="Arielle and Ayomide"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={80}
        />
      </div>

      {/* Gratitude Banner */}
      <div className="bg-gold py-12 px-6">
        <p className="text-white text-center font-serif italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {t("hero.gratitude")}
        </p>
      </div>

      {/* Monogram and Names */}
      <div className="py-16 px-4 text-center">
        {/* Monogram */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-56 h-64">
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
        <h1 className="font-serif text-4xl md:text-5xl text-gold tracking-[0.2em] mb-6">
          ARIELLE AND AYOMIDE
        </h1>

        {/* Date and Location */}
        <p className="text-black tracking-[0.15em] text-sm md:text-base mb-8">
          {t("hero.dateLocation")}
        </p>

        {/* RSVP Button */}
        <a
          href="#rsvp"
          className="inline-block px-10 py-3 bg-[#5c5a4e] text-white tracking-[0.2em] text-sm hover:bg-[#4a4840] transition-colors duration-300"
        >
          {t("hero.rsvp")}
        </a>
      </div>

      {/* Traditional Wedding Day */}
      <div className="py-12 px-4 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-gold tracking-[0.1em] mb-2">
          {t("hero.traditionalWedding")}
        </h2>
        <p className="text-black tracking-[0.1em] text-sm mb-1">
          {t("hero.friday")}
        </p>
        <p className="text-black tracking-[0.05em] text-sm mb-6">
          {t("hero.traditionalTime")}
        </p>

        <p className="font-serif text-black italic mb-1">
          {t("hero.traditionalVenue")}
        </p>
        <p className="font-serif text-black italic text-sm mb-6">
          {t("hero.traditionalAddress")}
        </p>

        <p className="font-serif text-black italic text-sm max-w-md mx-auto mb-4">
          {t("hero.traditionalDescription")}
        </p>
        <p className="font-serif text-black italic text-sm">
          {t("hero.byInvitation")}
        </p>
      </div>

      {/* Wedding Day */}
      <div className="py-12 px-4 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-gold tracking-[0.1em] mb-2">
          {t("hero.weddingDay")}
        </h2>
        <p className="text-black tracking-[0.1em] text-sm mb-1">
          {t("hero.saturday")}
        </p>
        <p className="text-black tracking-[0.05em] text-sm mb-8">
          {t("hero.weddingTime")}
        </p>

        {/* Religious Ceremony */}
        <div className="pt-8 mb-8">
          <p className="text-black text-sm mb-2">{t("hero.religiousTime")}</p>
          <p className="font-serif text-gold tracking-[0.1em] mb-4">{t("hero.religiousCeremony")}</p>
          <p className="font-serif text-black italic">{t("hero.religiousVenue")}</p>
          <p className="font-serif text-black italic text-sm">{t("hero.religiousAddress")}</p>
        </div>

        {/* Reception */}
        <div className="pt-8">
          <p className="text-black text-sm mb-2">{t("hero.receptionTime")}</p>
          <p className="font-serif text-gold tracking-[0.1em] mb-4">{t("hero.reception")}</p>
          <p className="font-serif text-black italic">{t("hero.receptionVenue")}</p>
          <p className="font-serif text-black italic text-sm">{t("hero.receptionAddress")}</p>
        </div>
      </div>
    </section>
  )
}
