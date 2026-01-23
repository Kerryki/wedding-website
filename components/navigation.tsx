"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#photo-gallery", label: t("nav.photoGallery") },
    { href: "#our-story", label: t("nav.ourStory") },
    { href: "#gifts", label: t("nav.gifts") },
    { href: "#accommodations", label: t("nav.accommodations") },
    { href: "#travel", label: t("nav.travel") },
    { href: "#rsvp", label: t("nav.rsvp") },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Language Switcher - Left */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-serif tracking-wide transition-colors ${
                  language === "en" ? "text-gold font-semibold" : "text-black/60 hover:text-black"
                }`}
              >
                English
              </button>
              <span className="text-black/30">|</span>
              <button
                onClick={() => setLanguage("fr")}
                className={`text-sm font-serif tracking-wide transition-colors ${
                  language === "fr" ? "text-gold font-semibold" : "text-black/60 hover:text-black"
                }`}
              >
                Français
              </button>
            </div>

            {/* Right Side - Desktop Navigation / Mobile Menu */}
            <div className="flex items-center gap-8 ml-auto">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm tracking-wide text-black hover:text-gold transition-colors font-serif italic"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-black" 
                onClick={() => setIsOpen(true)} 
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-background">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="p-4">
              <button 
                onClick={() => setIsOpen(false)} 
                aria-label="Close menu"
                className="p-2 text-black"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif italic text-lg tracking-wide transition-colors ${
                    index === 0 ? "text-gold border-b border-gold pb-1" : "text-black hover:text-gold"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
