"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Accommodation {
  name: string
  address: string
  phone: string
  rate: string
  descriptionKey: string
  website: string
}

function getAccommodations(t: (key: string) => string): Accommodation[] {
  return [
    {
      name: "HÔTEL ALT QUARTIER DIX30",
      address: "6500 BOUL. DE ROME, BROSSARD, QC J4Y 0B6, CANADA",
      phone: "(450) 443-1030",
      rate: "$194",
      descriptionKey: "accommodations.alt1",
      website: "https://www.germainhotels.com/fr/hotel-alt/quartier-dix30?wwpath=www.theknot.com%2Fus%2Farielle-akpele-and-ayomide-durowaiye-herbert-aug-2026"
    },
    {
      name: "NOVOTEL MONTRÉAL CENTRE",
      address: "1180 RUE DE LA MONTAGNE, MONTREAL, QC H3G 1Z1, CANADA",
      phone: "(514) 861-6000",
      rate: "$280",
      descriptionKey: "accommodations.alt2",
      website: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=1151&merchantid=seo-maps-CA-1151&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps&wwpath=www.theknot.com%2Fus%2Farielle-akpele-and-ayomide-durowaiye-herbert-aug-2026"
    },
    {
      name: "HYATT PLACE MONTREAL AIRPORT",
      address: "690 AV. MICHEL - JASMIN, DORVAL, QC H9P 1C5, CANADA",
      phone: "(514) 307-9000",
      rate: "$203",
      descriptionKey: "accommodations.alt3",
      website: "https://www.hyatt.com/hyatt-place/en-US/yulza-hyatt-place-montreal-airport?src=corp_lclb_google_seo_yulza&utm_source=google&utm_medium=organic&utm_campaign=lmr&wwpath=www.theknot.com%2Fus%2Farielle-akpele-and-ayomide-durowaiye-herbert-aug-2026"
    },
    {
      name: "AIRBNB",
      address: "MONTREAL",
      phone: "",
      rate: "",
      descriptionKey: "accommodations.airbnb",
      website: "https://fr.airbnb.ca/s/Downtown--Ville~Marie--Montr%C3%A9al--QC/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJvSFURkIayUwReGofaz4cufs&acp_id=5a059a91-92a0-4f16-98bb-b25750f6cc69&date_picker_type=calendar&checkin=2026-08-20&checkout=2026-08-23&adults=4&search_type=user_map_move&query=Downtown%2C%20Ville-Marie%2C%20Montr%C3%A9al%2C%20QC&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-02-01&monthly_length=3&monthly_end_date=2026-05-01&search_mode=regular_search&price_filter_input_type=2&price_filter_num_nights=3&channel=EXPLORE&ne_lat=45.55195726082952&ne_lng=-73.45422349328359&sw_lat=45.39680443238859&sw_lng=-73.64185030002503&zoom=12.254885377408232&zoom_level=12.254885377408232&search_by_map=true&wwpath=www.theknot.com%2Fus%2Farielle-akpele-and-ayomide-durowaiye-herbert-aug-2026"
    }
  ]
}

function AccommodationItem({ accommodation, isOpen, onToggle, t }: { accommodation: Accommodation; isOpen: boolean; onToggle: () => void; t: (key: string) => string }) {
  return (
    <div className="border-b border-black/20 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 text-left flex items-center justify-between hover:bg-black/5 transition-colors rounded-lg"
      >
        <div className="flex-1">
          <h3 className="font-serif text-xl md:text-2xl text-gold mb-2 tracking-[0.1em]">
            {accommodation.name}
          </h3>
          {!isOpen && (
            <div className="flex flex-wrap gap-4 text-sm text-black/70 font-serif">
              <span>{accommodation.address}</span>
              {accommodation.phone && <span>{accommodation.phone}</span>}
              {accommodation.rate && <span className="text-gold font-semibold">{t("accommodations.rate")}: {accommodation.rate}</span>}
            </div>
          )}
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gold flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gold flex-shrink-0 ml-4" />
        )}
      </button>
      
      {isOpen && (
        <div className="pb-6 px-6">
          <div className="space-y-4 font-serif text-black leading-relaxed">
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold text-gold">{t("accommodations.address")}:</span> {accommodation.address}</p>
              {accommodation.phone && (
                <p><span className="font-semibold text-gold">{t("accommodations.phone")}:</span> {accommodation.phone}</p>
              )}
              {accommodation.rate && (
                <p><span className="font-semibold text-gold">{t("accommodations.rate")}:</span> <span className="text-gold">{accommodation.rate}</span></p>
              )}
            </div>
            
            <div className="pt-4 border-t border-black/20">
              <p className="whitespace-pre-line italic">{t(accommodation.descriptionKey)}</p>
            </div>
            
            <div className="pt-4">
              <a
                href={accommodation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gold hover:text-gold/80 underline font-semibold transition-colors"
              >
                {t("accommodations.website")} →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function AccommodationsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  const toggleAccommodation = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const accommodations = getAccommodations(t)

  return (
    <section id="accommodations" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">{t("accommodations.stay")}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold">{t("accommodations.title")}</h2>
        </div>

        {/* Accommodations List */}
        <div className="space-y-4">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="bg-background/80 backdrop-blur-sm rounded-lg border border-black/10 shadow-sm overflow-hidden">
              <AccommodationItem
                accommodation={accommodation}
                isOpen={openIndex === index}
                onToggle={() => toggleAccommodation(index)}
                t={t}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
