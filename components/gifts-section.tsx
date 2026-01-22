"use client"

import Image from "next/image"

export function GiftsSection() {
  return (
    <section id="gifts" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">Blessings</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold">Gifts</h2>
        </div>

        {/* How to Give Section */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-2xl md:text-3xl text-gold mb-8 tracking-[0.15em]">
            💌 How to Give
          </h3>
          
          <div className="font-serif text-black leading-relaxed space-y-6 max-w-2xl mx-auto">
            <p>
              If you feel led to bless us with a gift, we are gratefully accepting contributions via e-transfer or PayPal.
            </p>
            
            <p>
              You can send your gift directly to:
            </p>
            
            <p className="text-gold text-lg font-semibold">
              📧 arielleandayomide@gmail.com
            </p>
            
            <p>
              If you wish to do this in person, we will also have a gift box available on our special day
            </p>
            
            <p className="italic">
              Thank you for sowing into our future with love, generosity, and prayer. Every gift is deeply appreciated and will help us build the life God is calling us to live together.
            </p>
            
            <p className="text-sm italic text-black/70 mt-8">
              "And my God will meet all your needs according to the riches of his glory in Christ Jesus." — Philippians 4:19
            </p>
          </div>
        </div>

        {/* Gift Image */}
        <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto mt-12">
          <Image
            src="/gifts/IMG_4372.JPG"
            alt="Gifts"
            fill
            className="object-cover rounded"
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}
