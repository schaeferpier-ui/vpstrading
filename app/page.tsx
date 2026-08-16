import { HomeHero } from '@/components/home-hero'
import { CategoryCards } from '@/components/category-cards'
import { Showcase } from '@/components/showcase'
import { WhyUsSection } from '@/components/why-us-section'
import { HowItWorks } from '@/components/how-it-works'
import { GalleryGrid } from '@/components/gallery-grid'
import { ReviewsSection } from '@/components/reviews-section'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/actions'

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Category cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <CategoryCards />
        </div>
      </section>

      {/* Showcase sections with alternating backgrounds */}
      <Showcase
        eyebrow="Renovations & Fit-Outs"
        title="Interiors finished to the last detail"
        body="From marble kitchens to spa-inspired bathrooms, our fit-out teams deliver high-end interiors that elevate the value and comfort of your home."
        image="/images/gallery-bathroom.png"
        imageAlt="Luxury renovated bathroom with marble and brass fixtures"
        href="/services/renovations"
        linkLabel="Explore renovations"
        dark
      />

      <Showcase
        eyebrow="Landscaping"
        title="Outdoor spaces designed for the UAE climate"
        body="Garden design, planting, irrigation and outdoor lighting that keep your grounds lush, green and effortless throughout every season."
        image="/images/gallery-garden.png"
        imageAlt="Landscaped luxury villa garden at twilight"
        href="/services/landscaping"
        linkLabel="Explore landscaping"
        reverse
      />

      <Showcase
        eyebrow="General Maintenance"
        title="Every system, expertly cared for"
        body="Licensed plumbers, electricians and HVAC specialists keep your property running flawlessly — with tidy work and reliable scheduling."
        image="/images/gallery-maintenance.png"
        imageAlt="Technician performing villa maintenance"
        href="/services/general-maintenance"
        linkLabel="Explore maintenance"
        dark
      />

      <WhyUsSection />

      {/* Gallery preview */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Project Gallery
              </span>
              <h2 className="mt-4 max-w-lg font-serif text-3xl font-medium leading-tight text-balance md:text-4xl lg:text-[2.75rem]">
                A glimpse of our completed work
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <LinkButton href="/gallery" variant="outline">
                View full gallery
              </LinkButton>
            </Reveal>
          </div>
          <div className="mt-12">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <HowItWorks />
      <ReviewsSection />
      <CtaBand />
    </>
  )
}
