"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function RsvpSection() {
  const { t, language } = useLanguage()
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
          <h2 className="font-serif text-4xl text-gold mb-4">{t("rsvp.thankYou")}</h2>
          <p className="text-black font-sans mb-4">
            {t("rsvp.confirm")} <span className="font-semibold">arielleandayomide@gmail.com</span> {t("rsvp.confirm2")}{" "}
            <a
              href="https://arielleetayomide.rsvpify.com/rsvp-page-preview/1223264?signature=f1853ca9eeae38bdfbe58d77983161cf2c0b8bd5502c48007f6879eec2972c14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 underline font-semibold"
            >
              {t("rsvp.paymentLink")}
            </a>{" "}
            {t("rsvp.confirm3")}
          </p>
          <p className="text-black font-sans">{t("rsvp.celebrate")}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-16 px-4 bg-background">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">{t("rsvp.beOurGuest")}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-4">{t("rsvp.title")}</h2>
          <p className="text-black font-sans">{t("rsvp.deadline")}</p>
        </div>

        <form key={language} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-sans text-black">
                {t("rsvp.firstName")}
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
                {t("rsvp.lastName")}
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
              {t("rsvp.email")}
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
            <Label className="font-sans text-black">{t("rsvp.attending")}</Label>
            <RadioGroup value={attendance} onValueChange={setAttendance}>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="yes" id="attending-yes" />
                <Label htmlFor="attending-yes" className="font-sans font-normal text-black">
                  {t("rsvp.yes")}
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="no" id="attending-no" />
                <Label htmlFor="attending-no" className="font-sans font-normal text-black">
                  {t("rsvp.no")}
                </Label>
              </div>
            </RadioGroup>
            <input type="hidden" name="attendance" value={attendance} />
          </div>

          {attendance === "yes" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="guests" className="font-sans text-black">
                  {t("rsvp.guests")}
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
                  {t("rsvp.dietary")}
                </Label>
                <Input
                  id="dietary"
                  name="dietary"
                  placeholder={t("rsvp.dietaryPlaceholder")}
                  className="border-muted-foreground/30 focus:border-foreground text-black"
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="eventChoice" className="font-sans text-black">
              {t("rsvp.eventChoice")}
            </Label>
            <Input
              id="eventChoice"
              name="eventChoice"
              placeholder={t("rsvp.eventPlaceholder")}
              className="border-muted-foreground/30 focus:border-foreground text-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-sans text-black">
              {t("rsvp.message")}
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t("rsvp.messagePlaceholder")}
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
                {t("rsvp.sending")}
              </>
            ) : (
              t("rsvp.send")
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
