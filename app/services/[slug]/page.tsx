import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pricing, serviceGroups } from '@/lib/site'
import { PageHero } from '@/components/page-hero'
import { ServiceCards } from '@/components/service-cards'
import { PricingTable } from '@/components/pricing-table'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { LinkButton, WhatsAppButton } from '@/components/actions'

const eyebrowBySlug: Record<string, string> = {
  'general-maintenance': 'General Maintenance Abu Dhabi',
  landscaping: 'Landscaping Abu Dhabi',
  renovations: 'Renovation Abu Dhabi',
}

export function generateStaticParams() {
  return Object.keys(serviceGroups).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const group = serviceGroups[slug]
  if (!group) return {}
  return {
    title: `${group.title} in Abu Dhabi`,
    description: group.intro,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const group = serviceGroups[slug]
  if (!group) notFound()

  const priceGroup = pricing.find((p) => p.title === group.title)
  const isRenovation = slug === 'renovations'

  return (
    <>
      <PageHero
        eyebrow={eyebrowBySlug[slug]}
        title={group.title}
        subtitle={group.intro}
        image={group.image}
        imageAlt={`${group.title} by VPS Trading in Abu Dhabi`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: group.title }]}
      />

      {/* Services grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                What we offer
              </span>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
                Our {group.title.toLowerCase()} services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A complete range of services delivered by licensed professionals. Select what you
                need and send us the details on WhatsApp for a fast quotation.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <ServiceCards services={group.services} />
          </div>
        </div>
      </section>

      {/* Pricing or consultation */}
      {isRenovation ? (
        <section className="bg-secondary">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-24">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Tailored to your project
              </span>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
                Every renovation is unique
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Renovation and fit-out projects are priced individually based on scope, materials
                and finishes. Book a consultation and we&rsquo;ll prepare a detailed proposal.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <WhatsAppButton
                  size="lg"
                  label="Request Renovation Consultation"
                  message="Hello VPS Trading, I'd like to request a renovation consultation."
                />
                <LinkButton href="/contact" variant="outline" size="lg">
                  Enquire online
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </section>
      ) : priceGroup ? (
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Transparent pricing
                </span>
                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
                  Clear starting prices, no surprises
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  Indicative starting prices for our most requested {group.title.toLowerCase()}{' '}
                  services. Final quotes are confirmed after we review your photos and details.
                </p>
              </Reveal>
              <PricingTable group={priceGroup} />
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title={`Book your ${group.title.toLowerCase()} today`}
        subtitle="Message us on WhatsApp with photos and details for a same-day quotation."
      />
    </>
  )
}
