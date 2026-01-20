import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the dress code?",
    answer:
      "We kindly request formal attire. Gentlemen are encouraged to wear suits or tuxedos, and ladies are welcome in floor-length gowns or elegant cocktail dresses. Please avoid white to let the bride shine!",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Due to venue capacity, we can only accommodate those guests formally invited. Please refer to your invitation for details about your plus one.",
  },
  {
    question: "Will the ceremony and reception be held at the same location?",
    answer:
      "Yes! Both the ceremony and reception will take place at The Grand Estate. The ceremony will be held in the garden, followed by cocktail hour on the terrace and dinner in the grand ballroom.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Complimentary valet parking will be provided for all guests. Simply pull up to the main entrance and the valet team will take care of your vehicle.",
  },
  {
    question: "Will there be vegetarian or allergy-friendly options?",
    answer:
      "Please indicate any dietary restrictions when you RSVP, and our catering team will ensure there are delicious options for you.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We kindly ask for an unplugged ceremony so everyone can be fully present. Our professional photographers will capture every moment, and we'll share the photos with you after the wedding!",
  },
]

export function QASection() {
  return (
    <section id="qa" className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-sans">Have Questions?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gold">Q & A</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-muted">
              <AccordionTrigger className="font-sans text-left hover:no-underline hover:text-black/80 text-black">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-black font-sans leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
