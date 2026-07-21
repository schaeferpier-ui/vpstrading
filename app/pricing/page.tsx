import type { Metadata } from 'next'
import { pricing } from '@/lib/site'
import { PageHero } from '@/components/page-hero'
import { PricingTable } from '@/components/pricing-table'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { LinkButton, WhatsAppButton } from '@/components/actions'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent starting prices for property maintenance and landscaping in Abu Dhabi. HVAC, handyman, artificial grass, garden maintenance and more. Renovation quotes on consultation.',
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Pricing"
        title="Clear prices for everyday property services"
        subtitle="Indicative starting prices for our most requested services. Final quotes are confirmed once we review your photos and details."
        image="/images/gallery-maintenance.png"
        imageAlt="VPS Trading technician at work in Abu Dhabi"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            {pricing.map((group) => (
              <PricingTable key={group.title} group={group} />
            ))}
          </div>

          {/* Renovation consultation */}
          <Reveal className="mt-6">
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-ink p-8 text-ink-foreground lg:flex-row lg:items-center lg:p-10">
              <div className="max-w-xl">
                <h3 className="font-serif text-2xl font-medium tracking-tight">
                  Renovations &amp; Fit-Outs
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">
                  Every renovation is unique. Pricing is prepared individually based on scope,
                  materials and finishes &mdash; book a consultation for a detailed proposal.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  label="Request Renovation Consultation"
                  message="Hello VPS Trading, I'd like to request a renovation consultation."
                />
                <LinkButton
                  href="/contact"
                  variant="outline"
                  className="border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground/10"
                >
                  Enquire online
                </LinkButton>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <p className="text-center text-xs text-muted-foreground">
              All prices are indicative and exclusive of materials unless stated. VAT may apply.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
