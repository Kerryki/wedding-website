import Image from "next/image"

const bridesmaids = [
  { name: "Emily Chen", role: "Maid of Honor", image: "/woman-portrait-elegant-bridesmaid.jpg" },
  { name: "Jessica Miller", role: "Bridesmaid", image: "/woman-smiling-portrait-bridesmaid.jpg" },
  { name: "Amanda Taylor", role: "Bridesmaid", image: "/woman-portrait-friendly-bridesmaid.jpg" },
]

const groomsmen = [
  { name: "Michael Roberts", role: "Best Man", image: "/man-portrait-suit-groomsman.jpg" },
  { name: "David Kim", role: "Groomsman", image: "/man-smiling-portrait-groomsman.jpg" },
  { name: "Chris Anderson", role: "Groomsman", image: "/man-portrait-friendly-groomsman.jpg" },
]

export function WeddingPartySection() {
  return (
    <section id="wedding-party" className="py-24 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">The Ones We Love</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold">Wedding Party</h2>
        </div>

        <div className="mb-16">
          <h3 className="font-serif text-2xl text-black text-center mb-10">Bridesmaids</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {bridesmaids.map((person) => (
              <div key={person.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                </div>
                <h4 className="font-serif text-xl text-black">{person.name}</h4>
                <p className="text-black text-sm font-sans">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-black text-center mb-10">Groomsmen</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {groomsmen.map((person) => (
              <div key={person.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                </div>
                <h4 className="font-serif text-xl text-black">{person.name}</h4>
                <p className="text-black text-sm font-sans">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
