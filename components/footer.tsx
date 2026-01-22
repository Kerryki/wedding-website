import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Logo and Date */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-40">
              <Image
                src="/logo2/IMG_7246.jpg"
                alt="Monogram"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="w-16 h-px bg-black/30 mx-auto mb-4" />
          <p className="text-black tracking-[0.1em] text-sm">08.2021</p>
        </div>
      </div>
    </footer>
  )
}
