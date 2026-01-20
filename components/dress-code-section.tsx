export function DressCodeSection() {
  return (
    <section id="dress-code" className="py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-[0.2em] text-center mb-16">
          DRESS CODE
        </h2>

        {/* Traditional Wedding */}
        <div className="mb-12">
          <h3 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-6">
            TRADITIONAL WEDDING
          </h3>

          <p className="font-serif text-black italic text-center leading-relaxed mb-6">
            For the traditional ceremony, guests are encouraged to dress to impress, as vibrant colors and elegant, haute couture fabrics are an essential part of African wedding celebrations.
          </p>

          <p className="font-serif text-black italic text-center leading-relaxed mb-6">
            Traditional African attire such as Kente, Asoebi, and other statement prints are highly encouraged. Guests are also welcome to wear traditional clothing from their own culture.
          </p>

          <div className="text-center">
            <p className="font-serif text-black italic mb-2">Family colors:</p>
            <p className="font-serif text-black italic">Durowaiye-Herbert family: Green</p>
            <p className="font-serif text-black italic">Akpele family: Kente with orange, green, yellow, and white</p>
          </div>
        </div>

        {/* White Wedding */}
        <div>
          <h3 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-6">
            WHITE WEDDING
          </h3>

          <p className="font-serif text-black italic text-center leading-relaxed mb-6">
            Guests are kindly requested to wear formal / black-tie attire. Elegant evening wear is encouraged, including tuxedos, suits, formal gowns, and sophisticated cocktail dresses.
          </p>

          <p className="font-serif text-black italic text-center leading-relaxed">
            Please note: The color white is reserved exclusively for the bride and groom. We kindly ask guests to refrain from wearing white or ivory tones.
          </p>
        </div>
      </div>
    </section>
  )
}
