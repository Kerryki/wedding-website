"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

// Engagement Shoot images from public folder
const engagementShootPhotos = [
  { src: "/IMG_4366.jpeg", alt: "Engagement photo 1" },
  { src: "/IMG_4368.jpeg", alt: "Engagement photo 2" },
  { src: "/IMG_4369.jpeg", alt: "Engagement photo 3" },
  { src: "/IMG_4370.jpeg", alt: "Engagement photo 4" },
]

// Proposal photos from public/proposal folder
const proposalPhotos = [
  { src: "/proposal/IMG_7652.jpeg", alt: "Proposal photo 1" },
  { src: "/proposal/IMG_7662.jpeg", alt: "Proposal photo 2" },
  { src: "/proposal/IMG_7663.jpeg", alt: "Proposal photo 3" },
  { src: "/proposal/IMG_7693.jpeg", alt: "Proposal photo 4" },
]

// Traditional shoot photos from public/traditional folder
const traditionalPhotos = [
  { src: "/traditional/IMG_5113.jpeg", alt: "Traditional shoot photo 1" },
  { src: "/traditional/IMG_5114.jpeg", alt: "Traditional shoot photo 2" },
]

// Moments photos from public/moments folder
const momentsPhotos = [
  { src: "/moments/IMG_3690.jpeg", alt: "Moment 1" },
  { src: "/moments/IMG_3860.jpeg", alt: "Moment 2" },
  { src: "/moments/IMG_4273.jpeg", alt: "Moment 3" },
  { src: "/moments/IMG_4621.jpeg", alt: "Moment 4" },
  { src: "/moments/IMG_8788.jpeg", alt: "Moment 5" },
]

function PhotoGrid({ photos }: { photos: Array<{ src: string; alt: string }> }) {
  if (photos.length === 0) {
    return (
      <div className="text-center py-12 text-black/60 font-serif italic">
        Photos coming soon...
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`relative overflow-hidden ${
            index === 1 || index === 4 ? "col-span-2 md:col-span-1" : ""
          } ${index === 2 ? "row-span-2" : ""}`}
        >
          <div className={`relative ${index === 2 ? "aspect-[2/3]" : "aspect-square"} w-full`}>
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
              priority={index === 0}
              quality={75}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export function PhotoGallery() {
  const { t } = useLanguage()
  
  return (
    <section id="photo-gallery" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">{t("gallery.memories")}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold">{t("gallery.title")}</h2>
        </div>

        {/* Engagement Shoot Section */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl md:text-4xl text-gold text-center mb-12 tracking-[0.15em]">
            {t("gallery.engagementShoot")}
          </h3>
          <PhotoGrid photos={engagementShootPhotos} />
        </div>

        {/* Proposal Section */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl md:text-4xl text-gold text-center mb-12 tracking-[0.15em]">
            {t("gallery.proposal")}
          </h3>
          <PhotoGrid photos={proposalPhotos} />
        </div>

        {/* Traditional Shoot Section */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl md:text-4xl text-gold text-center mb-12 tracking-[0.15em]">
            {t("gallery.traditionalShoot")}
          </h3>
          <PhotoGrid photos={traditionalPhotos} />
        </div>

        {/* Moments Section */}
        <div>
          <h3 className="font-serif text-3xl md:text-4xl text-gold text-center mb-12 tracking-[0.15em]">
            {t("gallery.moments")}
          </h3>
          <PhotoGrid photos={momentsPhotos} />
        </div>
      </div>
    </section>
  )
}
