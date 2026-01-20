export function TimelineSection() {
  return (
    <section id="timeline" className="py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-[0.2em] text-center mb-16">
          TIMELINE
        </h2>

        {/* August 21 - Traditional Wedding */}
        <div className="mb-16">
          <h3 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-8">
            AUGUST 21 - TRADITIONAL WEDDING
          </h3>

          <div className="space-y-8">
            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">11:00 AM :</span> Arrival at Shapla Venue LaSalle & Dowry Presentation
            </p>

            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">12:00 PM :</span> Refreshments & Light Eats
            </p>

            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">12:30 PM :</span> Continuation of Traditional Wedding Rites
            </p>

            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">2:30 PM :</span> Conclusion of Traditional Ceremony
            </p>
          </div>
        </div>

        {/* August 22 - White Wedding */}
        <div className="mb-16">
          <h3 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-8">
            AUGUST 22 - WHITE WEDDING
          </h3>

          <div className="space-y-8">
            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">1:45 PM :</span> Arrival at St. Charles Parish
            </p>

            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">2:00 PM :</span> Religious Ceremony Begins
            </p>

            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">3:30 PM :</span> End of Religious Ceremony
            </p>

            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">5:00 PM :</span> Cocktail Hour at Palace Convention Center
            </p>

            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">6:00 PM :</span> Reception Begins
            </p>

            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">11:00 PM :</span> End of Reception
            </p>

            <p className="font-serif text-black italic">
              <span className="text-gold not-italic">11:00PM - 2:00AM :</span> Afterparty
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
