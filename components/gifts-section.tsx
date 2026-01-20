import { Gift, Home, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GiftsSection() {
  return (
    <section id="gifts" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">Registries</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-6">Gifts</h2>
          <p className="text-black font-sans max-w-2xl mx-auto leading-relaxed">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
            we've registered at the following places.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 border border-muted hover:border-foreground/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-serif text-xl text-black mb-3">Amazon</h3>
            <p className="text-black text-sm font-sans mb-6">A variety of items for our new home together.</p>
            <Button variant="outline" className="tracking-widest uppercase text-xs font-sans bg-transparent text-black">
              View Registry
            </Button>
          </div>

          <div className="text-center p-8 border border-muted hover:border-foreground/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <Home className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-serif text-xl text-black mb-3">Crate & Barrel</h3>
            <p className="text-black text-sm font-sans mb-6">Beautiful home essentials and decor pieces.</p>
            <Button variant="outline" className="tracking-widest uppercase text-xs font-sans bg-transparent text-black">
              View Registry
            </Button>
          </div>

          <div className="text-center p-8 border border-muted hover:border-foreground/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-serif text-xl text-black mb-3">Honeymoon Fund</h3>
            <p className="text-black text-sm font-sans mb-6">Help us create unforgettable memories in Italy.</p>
            <Button variant="outline" className="tracking-widest uppercase text-xs font-sans bg-transparent text-black">
              Contribute
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
