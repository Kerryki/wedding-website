"use client"

import { useLanguage } from "@/contexts/language-context"

export function DressCodeSection() {
  const { t } = useLanguage()
  
  return (
    <section id="dress-code" className="py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-[0.2em] text-center mb-16">
          {t("dresscode.title")}
        </h2>

        {/* Traditional Wedding */}
        <div className="mb-12">
          <h3 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-6">
            {t("dresscode.traditional")}
          </h3>

          <p className="font-serif text-black italic text-center leading-relaxed mb-6">
            {t("dresscode.traditionalP1")}
          </p>

          <p className="font-serif text-black italic text-center leading-relaxed mb-6">
            {t("dresscode.traditionalP2")}
          </p>

          <div className="text-center">
            <p className="font-serif text-black italic mb-2">{t("dresscode.familyColors")}</p>
            <p className="font-serif text-black italic">{t("dresscode.durowaiye")}</p>
            <p className="font-serif text-black italic">{t("dresscode.akpele")}</p>
          </div>
        </div>

        {/* White Wedding */}
        <div>
          <h3 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-6">
            {t("dresscode.white")}
          </h3>

          <p className="font-serif text-black italic text-center leading-relaxed mb-6">
            {t("dresscode.whiteP1")}
          </p>

          <p className="font-serif text-black italic text-center leading-relaxed">
            {t("dresscode.whiteP2")}
          </p>
        </div>
      </div>
    </section>
  )
}
