import { Reveal } from '@/components/reveal'
import { WhatsAppButton, CallButton } from '@/components/actions'

export function CtaBand({
  title = 'Ready to get started?',
  subtitle = 'Send us a message on WhatsApp with photos and details, and receive a clear quotation the same day.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium leading-tight text-balance md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-accent-foreground/85">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton size="lg" />
            <CallButton
              size="lg"
              className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
