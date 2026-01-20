"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const timelineEvents = [
  {
    date: "JUNE 24, 2023",
    description:
      "I thought we were just going to a restaurant, but it turned out to be the beginning of our adventure together.",
    image: "/images/roses-card.jpg",
  },
  {
    date: "DECEMBER 25, 2023",
    description:
      "Our first Christmas together was magical. Traditions blended, memories were made, and the season felt warmer with him by my side.",
    image: "/images/couple-christmas.jpg",
  },
  {
    date: "FEBRUARY 14, 2024",
    description:
      "Our first Valentine's Day wasn't about grand gestures; it was about us. A day that felt sweet, genuine, and full of love.",
    image: "/images/valentines-roses.jpg",
  },
  {
    date: "SUMMER 2024",
    description:
      "...where I met his entire family. Standing there, surrounded by so much love, I knew our story was bigger than just the two of us. It was about family, roots, and a shared future.",
    image: "/images/couple-tropical.jpg",
  },
  {
    date: "OCTOBER 17, 2025",
    description:
      "Next stop: Dallas, Texas, where I met some of his family for the first time. I was nervous, but they welcomed me with so much love that it felt like I already belonged.",
    image: "/images/passports-travel.jpg",
  },
  {
    date: "JUNE 25, 2025",
    description:
      "He asked me to spend forever with him, and in that moment, everything we had built, the trips, the milestones, the love, came together. I said yes to the man who has always felt like home and like my soulmate.",
    image: "/images/proposal.jpg",
  },
  {
    date: "JANUARY 12, 2026",
    description:
      "Our journey continues, we pray God will see us through even as we continue to rely on him to bless us and our upcoming union.",
    image: "/images/passports.jpg",
  },
]

export function OurStory() {
  const [daysToGo, setDaysToGo] = useState(0)

  useEffect(() => {
    const weddingDate = new Date("2026-08-21")
    const today = new Date()
    const diffTime = weddingDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysToGo(diffDays)
  }, [])

  return (
    <section id="our-story" className="py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-[0.2em] text-center mb-8">
          OUR STORY
        </h2>

        {/* Ornate Crest */}
        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 200 120" className="w-40 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Decorative scrollwork - left */}
            <path d="M40 60 Q20 40 40 20 Q30 35 35 50" stroke="#8b9a6d" strokeWidth="1.5" fill="none"/>
            <path d="M40 60 Q15 60 25 85 Q20 75 30 70" stroke="#8b9a6d" strokeWidth="1.5" fill="none"/>
            <path d="M35 50 Q25 45 30 35" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <circle cx="25" cy="60" r="3" fill="#8b9a6d"/>
            
            {/* Decorative scrollwork - right */}
            <path d="M160 60 Q180 40 160 20 Q170 35 165 50" stroke="#8b9a6d" strokeWidth="1.5" fill="none"/>
            <path d="M160 60 Q185 60 175 85 Q180 75 170 70" stroke="#8b9a6d" strokeWidth="1.5" fill="none"/>
            <path d="M165 50 Q175 45 170 35" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <circle cx="175" cy="60" r="3" fill="#8b9a6d"/>
            
            {/* Center heart/leaves */}
            <path d="M80 55 Q100 30 120 55 Q100 80 80 55" stroke="#8b9a6d" strokeWidth="1.5" fill="none"/>
            <path d="M90 50 Q100 40 110 50" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            <path d="M85 60 Q100 45 115 60" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
            
            {/* Bottom flourish */}
            <path d="M70 85 Q100 100 130 85" stroke="#8b9a6d" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        {/* Names */}
        <h3 className="font-serif text-3xl md:text-4xl text-gold tracking-[0.15em] text-center mb-4">
          ARIELLE AND AYOMIDE
        </h3>

        {/* Date and Location */}
        <p className="text-black tracking-[0.1em] text-sm text-center mb-2">
          AUGUST 21-22, 2026 · MONTREAL, QC, CANADA
        </p>

        {/* Countdown */}
        <p className="text-black tracking-[0.1em] text-sm text-center mb-12">
          {daysToGo} DAYS TO GO!
        </p>

        {/* Arielle's POV */}
        <h4 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-8">
          ARIELLE&apos;S POV
        </h4>

        {/* Story Text */}
        <div className="font-serif text-black italic leading-relaxed space-y-6 mb-16">
          <p>
            It was the end of April, finals season, and I was living in the library. Papers piled up, deadlines closing in. My world felt small and stressful. Then, in the middle of all that chaos, a random guy walked past me. We looked at each other, smiled, and kept going. Nothing dramatic. Just a moment. We were both too shy to say anything, but somehow it stayed with me.
          </p>
          <p>
            A few days later, I logged into Instagram and saw a follow request from him. The same guy. I followed back immediately, forgetting any idea of playing it cool. He messaged me, complimented me and true to myself, I replied with a dry &quot;thank you&quot; to play it cool. That was it. No conversation. No spark on paper, even though I was so happy about his message. Or so I thought.
          </p>
          <p>
            After these 2 interactions, I couldn&apos;t stop thinking about him. School ended, and with it any chance of accidentally running into him again. So I did something completely out of character. I replied to one of his stories about basketball, a topic I knew absolutely nothing about. I just wanted to talk to him. And somehow, that one small decision changed everything.
          </p>
          <p>
            ...city, constant conversations, growing closer without even realizing how deeply it was happening. I fell in love with Ayomide because from the very beginning, I felt seen, considered, and appreciated. Even in disagreement, he always made space for me to speak, to feel, to be understood. Our disagreements never broke us; they built us.
          </p>
          <p>
            I knew he was sent from God when I started seeking a deeper relationship with God myself. Ayomide didn&apos;t just support that journey, he pushed me toward what was best for me, always with love and patience.
          </p>
          <p>
            God didn&apos;t just send me a partner. He sent me my best friend, my safe place, my soulmate. Whether it was asking me to be his girlfriend or proposing to me, Ayomide has always gone above and beyond.
          </p>
        </div>

        {/* Ayomide's POV */}
        <h4 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-8">
          AYOMIDE&apos;S POV
        </h4>

        <p className="font-serif text-black italic text-center mb-16">
          write text here
        </p>

        {/* Dotted line */}
        <div className="flex justify-center py-8">
          <div className="h-16 border-l border-dashed border-black/40" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              {/* Image */}
              <div className="relative aspect-[4/3] w-full mb-6">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={`Our story - ${event.date}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Dotted line */}
              <div className="flex justify-center py-4">
                <div className="h-12 border-l border-dashed border-black/40" />
              </div>

              {/* Date */}
              <p className="font-serif text-gold italic text-center text-lg tracking-wide mb-4">
                {event.date}
              </p>

              {/* Description */}
              <p className="font-serif text-black italic text-center leading-relaxed mb-8">
                {event.description}
              </p>

              {/* Dotted line between events */}
              {index < timelineEvents.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="h-16 border-l border-dashed border-black/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
