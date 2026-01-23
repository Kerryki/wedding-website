import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const _cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})
const _lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
})

export const metadata: Metadata = {
  title: "Arielle and Ayomide Wedding | August 21-22, 2026",
  description:
    "Join us to celebrate the wedding of Arielle and Ayomide on August 21-22, 2026 in Montreal, QC, Canada.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
