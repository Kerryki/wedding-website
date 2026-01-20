"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [daysToGo, setDaysToGo] = useState(0)

  useEffect(() => {
    const weddingDate = new Date("2026-08-21")
    const today = new Date()
    const diffTime = weddingDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysToGo(diffDays)
  }, [])

  return (
    <section id="home" className="bg-background">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/black-couple-formal-elegant-event.jpg"
          alt="Ariel and Ayo"
          fill
          className="object-cover object-center"
          priority
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
        {/* Ornate Monogram */}
        <div className="mb-8">
          <svg viewBox="0 0 200 220" className="w-48 h-52 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Crown */}
            <path d="M85 35 L100 20 L115 35 M90 35 L100 25 L110 35" stroke="#b8973c" strokeWidth="1.5" fill="none"/>
            <circle cx="100" cy="18" r="3" fill="#b8973c"/>
            <circle cx="85" cy="35" r="2" fill="#b8973c"/>
            <circle cx="115" cy="35" r="2" fill="#b8973c"/>
            
            {/* Ornate frame - top */}
            <ellipse cx="100" cy="110" rx="55" ry="65" stroke="#b8973c" strokeWidth="1.5" fill="none"/>
            
            {/* Decorative scrollwork - left */}
            <path d="M45 110 Q30 80 50 60 Q40 70 45 85" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M45 110 Q25 110 35 140 Q30 130 40 125" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M50 60 Q60 45 55 30" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M35 140 Q25 160 40 175" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M30 90 Q15 90 20 110 Q15 130 30 130" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <circle cx="20" cy="110" r="3" fill="#8b9a6d"/>
            <path d="M40 175 Q50 190 45 205" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            
            {/* Decorative scrollwork - right */}
            <path d="M155 110 Q170 80 150 60 Q160 70 155 85" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M155 110 Q175 110 165 140 Q170 130 160 125" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M150 60 Q140 45 145 30" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M165 140 Q175 160 160 175" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M170 90 Q185 90 180 110 Q185 130 170 130" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <circle cx="180" cy="110" r="3" fill="#8b9a6d"/>
            <path d="M160 175 Q150 190 155 205" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            
            {/* Bottom flourish */}
            <path d="M70 175 Q100 195 130 175" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M80 180 Q100 200 120 180" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M100 190 L100 210" stroke="#8b9a6d" strokeWidth="1"/>
            <path d="M95 205 Q100 215 105 205" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            
            {/* Letters AA */}
            <text x="100" y="120" textAnchor="middle" className="font-serif" fontSize="36" fill="#b8973c" fontStyle="italic">A A</text>
          </svg>
        </div>

        {/* Names */}
        <h1 className="font-serif text-4xl md:text-5xl text-gold tracking-[0.2em] mb-6">
          ARIELLE AND AYOMIDE
        </h1>

        {/* Date and Location */}
        <p className="text-black tracking-[0.15em] text-sm md:text-base mb-2">
          AUGUST 21-22, 2026 · MONTREAL, QC, CANADA
        </p>

        {/* Countdown */}
        <p className="text-black tracking-[0.1em] text-sm mb-8">
          {daysToGo} DAYS TO GO!
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
          11:00 AM - 2:00 PM
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
          2:00 PM - 11:00 PM
        </p>

        {/* Religious Ceremony */}
        <div className="pt-8 mb-8">
          <p className="text-black text-sm mb-2">2:00 PM - 3:30 PM</p>
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
