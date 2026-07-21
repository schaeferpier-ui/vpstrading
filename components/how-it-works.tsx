import { steps } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { WhatsAppButton } from '@/components/actions'

export function HowItWorks() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              How it works
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-balance md:text-4xl lg:text-[2.75rem]">
              From enquiry to booking in four simple steps
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i} className="bg-card">
              <div className="flex h-full flex-col p-8">
                <span className="font-serif text-5xl font-semibold text-accent/25">{step.n}</span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <WhatsAppButton
            size="lg"
            label="Start on WhatsApp"
            message="Hello VPS Trading, I'd like to get a quotation. Here are some photos and details of what I need."
          />
        </Reveal>
      </div>
    </section>
  )
}
