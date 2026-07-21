import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { GalleryGrid } from '@/components/gallery-grid'
import { HowItWorks } from '@/components/how-it-works'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Project Gallery',
  description:
    'Explore completed VPS Trading projects across Abu Dhabi — luxury bathrooms, marble kitchens, landscaped gardens, outdoor lighting and villa maintenance.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="A portfolio built on premium finishes"
        subtitle="Completed bathrooms, kitchens, gardens, outdoor lighting and villa maintenance from across Abu Dhabi's finest communities."
        image="/images/gallery-interior.png"
        imageAlt="Luxury interior completed by VPS Trading"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <GalleryGrid />
        </div>
      </section>

      <HowItWorks />
      <CtaBand />
    </>
  )
}
