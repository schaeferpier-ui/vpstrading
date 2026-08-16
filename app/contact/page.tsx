import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import {
  EMAIL,
  LOCATION,
  PHONE_DISPLAY,
  PHONE_TEL,
  DEFAULT_WA_MESSAGE,
  whatsappLink,
} from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & Request a Quote',
  description:
    'Request a quote from VPS Trading in Abu Dhabi. Send your details and photos via WhatsApp, call us, or complete our enquiry form for property maintenance, landscaping and renovation.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Request your quote"
        subtitle="Tell us what your property needs. Send photos and details and receive a clear quotation the same day."
        image="/images/hero-villa.png"
        imageAlt="Luxury villa in Abu Dhabi"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            {/* Info */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Contact
              </span>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
                We reply fast &mdash; usually within the hour
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                WhatsApp is the quickest way to reach us. Attach photos of the area or issue and
                we&rsquo;ll get straight back to you with a quote.
              </p>

              <ul className="mt-10 space-y-5">
                <li>
                  <a
                    href={whatsappLink(DEFAULT_WA_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C4A]">
                      <WhatsAppIcon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        WhatsApp
                      </span>
                      <span className="text-sm font-semibold">{PHONE_DISPLAY}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                      <Phone className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        Call
                      </span>
                      <span className="text-sm font-semibold">{PHONE_DISPLAY}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                      <Mail className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        Email
                      </span>
                      <span className="text-sm font-semibold">{EMAIL}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                    <MapPin className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Location
                    </span>
                    <span className="text-sm font-semibold">{LOCATION}</span>
                  </span>
                </li>
                <li className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                    <Clock className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Hours
                    </span>
                    <span className="text-sm font-semibold">Sat &ndash; Thu, 8am &ndash; 8pm</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-9">
              <h3 className="font-serif text-2xl font-medium tracking-tight">Enquiry form</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete the form and we&rsquo;ll open WhatsApp with your details ready to send.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
