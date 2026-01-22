"use client"

import Image from "next/image"

export function OurStory() {

  return (
    <section id="our-story" className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-[0.2em] text-center mb-8">
          OUR STORY
        </h2>

        {/* Monogram */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-56">
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
        <h3 className="font-serif text-3xl md:text-4xl text-gold tracking-[0.15em] text-center mb-4">
          ARIELLE AND AYOMIDE
        </h3>

        {/* Date and Location */}
        <p className="text-black tracking-[0.1em] text-sm text-center mb-12">
          AUGUST 21-22, 2026 · MONTREAL, QC, CANADA
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

        {/* Flower Image */}
        <div className="relative aspect-[4/3] w-full max-w-md mx-auto mb-16">
          <Image
            src="/flower/IMG_4200.JPG"
            alt="Flower"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Ayomide's POV */}
        <h4 className="font-serif text-xl text-gold tracking-[0.15em] text-center mb-8">
          AYOMIDE&apos;S POV
        </h4>

        <p className="font-serif text-black italic text-center mb-16">
          write text here
        </p>
      </div>
    </section>
  )
}
