"use client"

import Image from "next/image"

export function HeroSection() {

  return (
    <section id="home" className="bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[80vh] min-h-[600px]">
        <Image
          src="/top_picture/310276BC-6A7F-4C2C-AD9C-8D7A4503724A.JPG"
          alt="Arielle and Ayomide"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          unoptimized
        />
      </div>

      {/* Gratitude Banner */}
      <div className="bg-gold py-12 px-6">
        <p className="text-white text-center font-serif italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We are so grateful for the love, support, and joy you bring into our lives. As we begin this new chapter together, your presence means the world to us. Thank you for being part of our special day, we can't wait to celebrate with you! God bless you,
        </p>
      </div>

      {/* Monogram and Names */}
      <div className="py-16 px-4 text-center">
        {/* Monogram */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-56 h-64">
            <Image
              src="/logo2/IMG_7246.jpg"
              alt="Monogram"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Names */}
        <h1 className="font-serif text-4xl md:text-5xl text-gold tracking-[0.2em] mb-6">
          ARIELLE AND AYOMIDE
        </h1>

        {/* Date and Location */}
        <p className="text-black tracking-[0.15em] text-sm md:text-base mb-8">
          AUGUST 21-22, 2026 · MONTREAL, QC, CANADA
        </p>

        {/* RSVP Button */}
        <a
          href="#rsvp"
          className="inline-block px-10 py-3 bg-[#5c5a4e] text-white tracking-[0.2em] text-sm hover:bg-[#4a4840] transition-colors duration-300"
        >
          RSVP
        </a>
      </div>

      {/* Traditional Wedding Day */}
      <div className="py-12 px-4 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-gold tracking-[0.1em] mb-2">
          TRADITIONAL WEDDING DAY
        </h2>
        <p className="text-black tracking-[0.1em] text-sm mb-1">
          FRIDAY, AUGUST 21, 2026
        </p>
        <p className="text-black tracking-[0.05em] text-sm mb-6">
          12:00 PM - 2:00 PM
        </p>

        <p className="font-serif text-black italic mb-1">
          Shapla Venue LaSalle - Banquet Hall
        </p>
        <p className="font-serif text-black italic text-sm mb-6">
          2222 Avenue Dollard, Montreal, QC, H8N 1S6, Canada
        </p>

        <p className="font-serif text-black italic text-sm max-w-md mx-auto mb-4">
          Join us for a traditional wedding ceremony combining Ivorian culture with Nigerian culture
        </p>
        <p className="font-serif text-black italic text-sm">
          By invitation only
        </p>
      </div>

      {/* Wedding Day */}
      <div className="py-12 px-4 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-gold tracking-[0.1em] mb-2">
          WEDDING DAY
        </h2>
        <p className="text-black tracking-[0.1em] text-sm mb-1">
          SATURDAY, AUGUST 22, 2026
        </p>
        <p className="text-black tracking-[0.05em] text-sm mb-8">
          1:00 PM - 11:00 PM
        </p>

        {/* Religious Ceremony */}
        <div className="pt-8 mb-8">
          <p className="text-black text-sm mb-2">1:00 PM - 3:30 PM</p>
          <p className="font-serif text-gold tracking-[0.1em] mb-4">RELIGIOUS CEREMONY</p>
          <p className="font-serif text-black italic">Église catholique Saint-Charles</p>
          <p className="font-serif text-black italic text-sm">2111 Rue Centre, Montréal, QC, H3K 1J5, Canada</p>
        </div>

        {/* Reception */}
        <div className="pt-8">
          <p className="text-black text-sm mb-2">5:00 PM - 11:00 PM</p>
          <p className="font-serif text-gold tracking-[0.1em] mb-4">RECEPTION</p>
          <p className="font-serif text-black italic">Palace Convention Centre</p>
          <p className="font-serif text-black italic text-sm">1717 Boulevard le Corbusier, Laval, QC, H7S 2K7, Canada</p>
        </div>
      </div>
    </section>
  )
}
