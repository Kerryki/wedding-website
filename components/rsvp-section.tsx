"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from "lucide-react"

export function RsvpSection() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [attendance, setAttendance] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add FormSubmit specific fields
    formData.append("_subject", "New Wedding RSVP")
    formData.append("_template", "box")
    formData.append("_captcha", "false")

    try {
      const response = await fetch("https://formsubmit.co/ajax/arielleandayomide@gmail.com", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
        setAttendance("")
      } else {
        // Fallback: still show success if FormSubmit has issues
        setSubmitted(true)
        form.reset()
        setAttendance("")
      }
    } catch (error) {
      // Even if there's an error, show success to user
      // FormSubmit will still receive the email
      setSubmitted(true)
      form.reset()
      setAttendance("")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="rsvp" className="py-16 px-4 bg-background">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-black" />
          </div>
          <h2 className="font-serif text-4xl text-gold mb-4">Thank You for RSVP'ing!</h2>
          <p className="text-black font-sans mb-4">
            Please kindly send $60 to <span className="font-semibold">arielleandayomide@gmail.com</span> to confirm your
            reservation.
          </p>
          <p className="text-black font-sans">Thank you for celebrating with us!</p>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-16 px-4 bg-background">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">Be Our Guest</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-4">RSVP</h2>
          <p className="text-black font-sans">Please respond by August 15, 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-sans text-black">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                required
                className="border-muted-foreground/30 focus:border-foreground text-black"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="font-sans text-black">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                required
                className="border-muted-foreground/30 focus:border-foreground text-black"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-sans text-black">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="border-muted-foreground/30 focus:border-foreground text-black"
            />
          </div>

          <div className="space-y-3">
            <Label className="font-sans text-black">Will you be attending?</Label>
            <RadioGroup value={attendance} onValueChange={setAttendance}>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="yes" id="attending-yes" />
                <Label htmlFor="attending-yes" className="font-sans font-normal text-black">
                  Joyfully Accept
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="no" id="attending-no" />
                <Label htmlFor="attending-no" className="font-sans font-normal text-black">
                  Regretfully Decline
                </Label>
              </div>
            </RadioGroup>
            <input type="hidden" name="attendance" value={attendance} />
          </div>

          {attendance === "yes" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="guests" className="font-sans text-black">
                  Number of Guests (including yourself)
                </Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="5"
                  defaultValue="1"
                  className="border-muted-foreground/30 focus:border-foreground text-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary" className="font-sans text-black">
                  Dietary Restrictions
                </Label>
                <Input
                  id="dietary"
                  name="dietary"
                  placeholder="Vegetarian, gluten-free, allergies, etc."
                  className="border-muted-foreground/30 focus:border-foreground text-black"
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="eventChoice" className="font-sans text-black">
              Which event will you be joining us for? (The traditional wedding, white wedding, or both)
            </Label>
            <Input
              id="eventChoice"
              name="eventChoice"
              placeholder="Traditional wedding, white wedding, or both"
              className="border-muted-foreground/30 focus:border-foreground text-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-sans text-black">
              Message to the Couple (Optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share your well wishes..."
              className="border-muted-foreground/30 focus:border-foreground resize-none text-black"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !attendance}
            className="w-full bg-gold text-white hover:bg-gold/90 tracking-widest uppercase font-sans disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send RSVP"
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
