import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DressCodeSection } from "@/components/dress-code-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { OurStory } from "@/components/our-story"
import { GiftsSection } from "@/components/gifts-section"
import { AccommodationsSection } from "@/components/accommodations-section"
import { TravelSection } from "@/components/travel-section"
import { RsvpSection } from "@/components/rsvp-section"
import { Footer } from "@/components/footer"

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Navigation />
      <HeroSection />
      <DressCodeSection />
      <PhotoGallery />
      <OurStory />
      <GiftsSection />
      <AccommodationsSection />
      <TravelSection />
      <RsvpSection />
      <Footer />
    </main>
  )
}
