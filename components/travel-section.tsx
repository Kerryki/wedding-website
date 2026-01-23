"use client"

import { useLanguage } from "@/contexts/language-context"

export function TravelSection() {
  const { t } = useLanguage()
  
  return (
    <section id="travel" className="py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-[0.2em] text-center mb-16">
          {t("travel.title")}
        </h2>

        <p className="font-serif text-black italic text-center leading-relaxed">
          {t("travel.description")}
        </p>
      </div>
    </section>
  )
}
