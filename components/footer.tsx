const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#our-story", label: "Our Story" },
  { href: "#travel", label: "Travel" },
  { href: "#rsvp", label: "RSVP" },
]

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Links */}
        <nav className="mb-16">
          {footerLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`block text-center py-4 font-serif italic text-black hover:text-gold transition-colors ${
                index === 0 ? "text-gold" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Logo and Date */}
        <div className="text-center">
          <p className="font-serif text-3xl text-gold italic mb-4">A & A</p>
          <div className="w-16 h-px bg-black/30 mx-auto mb-4" />
          <p className="text-black tracking-[0.1em] text-sm">8.21 - 22.2026</p>
        </div>
      </div>
    </footer>
  )
}
