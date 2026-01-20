import Image from "next/image"

const photos = [
  { src: "/black-couple-engagement-outdoor-romantic.jpg", alt: "Engagement photo 1" },
  { src: "/black-couple-laughing-candid-moment.jpg", alt: "Candid moment" },
  { src: "/black-couple-sunset-romantic.jpg", alt: "Sunset photo" },
  { src: "/black-couple-coffee-date.jpg", alt: "Coffee date" },
  { src: "/black-couple-traveling-adventure.jpg", alt: "Adventure together" },
  { src: "/black-couple-formal-elegant-event.jpg", alt: "Formal event" },
]

export function PhotosSection() {
  return (
    <section id="photos" className="py-24 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">Memories</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold">Our Photos</h2>
        </div>

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
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
