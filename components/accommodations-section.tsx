"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Accommodation {
  name: string
  address: string
  phone: string
  rate: string
  description: string
  website: string
}

const accommodations: Accommodation[] = [
  {
    name: "HÔTEL ALT QUARTIER DIX30",
    address: "6500 BOUL. DE ROME, BROSSARD, QC J4Y 0B6, CANADA",
    phone: "(450) 443-1030",
    rate: "$194",
    description: "If you'd like to stay close to the Durowaiye-Herbert and Akpele residences on the South Shore, we recommend Alt Hotel Quartier DIX30.\n\nLocated in the heart of Quartier DIX30, Alt Hotel is the perfect starting point for shopping, entertainment, and relaxation. With easy access to the REM and less than a 15-minute drive to downtown Montréal, it offers both convenience and flexibility. Spas, restaurants, bars, cafés, and boutiques are all just steps away, making it an ideal choice for a comfortable and enjoyable stay.",
    website: "https://www.germainhotels.com/fr/hotel-alt/quartier-dix30?wwpath=www.theknot.com%2Fus%2Farielle-akpele-and-ayomide-durowaiye-herbert-aug-2026"
  },
  {
    name: "NOVOTEL MONTRÉAL CENTRE",
    address: "1180 RUE DE LA MONTAGNE, MONTREAL, QC H3G 1Z1, CANADA",
    phone: "(514) 861-6000",
    rate: "$280",
    description: "If you plan to stay downtown to explore the city, enjoy local activities, shopping, and entertainment, we recommend Novotel Montréal Centre.\n\nLocated just a 2-minute walk from the shops of Sainte-Catherine Street, this modern 4-star hotel offers comfortable rooms perfect for both leisure and business stays. After exploring Old Montreal, museums, or the city's vibrant neighborhoods, relax in the hotel's welcoming bar or enjoy international cuisine at the on-site restaurant.\n\nNovotel Montréal Centre is ideally located just steps away and also offers easy access to Bell Center, Eaton Center, Old Montreal by foot or Metro. With free basic Wi-Fi and a prime downtown location, it's a great choice for making the most of your stay in Montreal.",
    website: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=1151&merchantid=seo-maps-CA-1151&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps&wwpath=www.theknot.com%2Fus%2Farielle-akpele-and-ayomide-durowaiye-herbert-aug-2026"
  },
  {
    name: "HYATT PLACE MONTREAL AIRPORT",
    address: "690 AV. MICHEL - JASMIN, DORVAL, QC H9P 1C5, CANADA",
    phone: "(514) 307-9000",
    rate: "$203",
    description: "If you're visiting for a shorter stay and prefer to be close to the airport while remaining centrally located between our wedding venues, we recommend Hyatt Place Montréal–Trudeau Airport.\n\nConveniently located at the entrance of Montréal–Trudeau International Airport (YUL), the hotel offers a complimentary 24/7 shuttle service to and from the terminals for a smooth and stress-free arrival. Its location makes it easy to travel between the airport, downtown Montréal, Laval and the Old Port.\n\nGuests can enjoy modern, spacious rooms along with convenient amenities including a 24-hour fitness center, on-site dining, a lively bar, and comfortable shared spaces, perfect for a relaxed and efficient stay in Montréal.",
    website: "https://www.hyatt.com/hyatt-place/en-US/yulza-hyatt-place-montreal-airport?src=corp_lclb_google_seo_yulza&utm_source=google&utm_medium=organic&utm_campaign=lmr&wwpath=www.theknot.com%2Fus%2Farielle-akpele-and-ayomide-durowaiye-herbert-aug-2026"
  },
  {
    name: "AIRBNB",
    address: "MONTREAL",
    phone: "",
    rate: "",
    description: "For those who prefer a more home-like experience, Airbnb offers various options throughout Montreal.",
    website: "https://fr.airbnb.ca/s/Downtown--Ville~Marie--Montr%C3%A9al--QC/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJvSFURkIayUwReGofaz4cufs&acp_id=5a059a91-92a0-4f16-98bb-b25750f6cc69&date_picker_type=calendar&checkin=2026-08-20&checkout=2026-08-23&adults=4&search_type=user_map_move&query=Downtown%2C%20Ville-Marie%2C%20Montr%C3%A9al%2C%20QC&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-02-01&monthly_length=3&monthly_end_date=2026-05-01&search_mode=regular_search&price_filter_input_type=2&price_filter_num_nights=3&channel=EXPLORE&ne_lat=45.55195726082952&ne_lng=-73.45422349328359&sw_lat=45.39680443238859&sw_lng=-73.64185030002503&zoom=12.254885377408232&zoom_level=12.254885377408232&search_by_map=true&wwpath=www.theknot.com%2Fus%2Farielle-akpele-and-ayomide-durowaiye-herbert-aug-2026"
  }
]

function AccommodationItem({ accommodation, isOpen, onToggle }: { accommodation: Accommodation; isOpen: boolean; onToggle: () => void }) {
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
              {accommodation.rate && <span className="text-gold font-semibold">Rate: {accommodation.rate}</span>}
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
              <p><span className="font-semibold text-gold">Address:</span> {accommodation.address}</p>
              {accommodation.phone && (
                <p><span className="font-semibold text-gold">Phone:</span> {accommodation.phone}</p>
              )}
              {accommodation.rate && (
                <p><span className="font-semibold text-gold">Rate:</span> <span className="text-gold">{accommodation.rate}</span></p>
              )}
            </div>
            
            <div className="pt-4 border-t border-black/20">
              <p className="whitespace-pre-line italic">{accommodation.description}</p>
            </div>
            
            <div className="pt-4">
              <a
                href={accommodation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gold hover:text-gold/80 underline font-semibold transition-colors"
              >
                Website →
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

  const toggleAccommodation = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="accommodations" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">Stay</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold">Accommodations</h2>
        </div>

        {/* Accommodations List */}
        <div className="space-y-4">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="bg-background/80 backdrop-blur-sm rounded-lg border border-black/10 shadow-sm overflow-hidden">
              <AccommodationItem
                accommodation={accommodation}
                isOpen={openIndex === index}
                onToggle={() => toggleAccommodation(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
