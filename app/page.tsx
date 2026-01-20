import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { DressCodeSection } from "@/components/dress-code-section"
import { OurStory } from "@/components/our-story"
import { TravelSection } from "@/components/travel-section"
import { RsvpSection } from "@/components/rsvp-section"
import { Footer } from "@/components/footer"

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <DressCodeSection />
      <TravelSection />
      <OurStory />
      <RsvpSection />
      <Footer />
    </main>
  )
}
