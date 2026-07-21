import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import {
  EMAIL,
  LOCATION,
  PHONE_DISPLAY,
  PHONE_TEL,
  DEFAULT_WA_MESSAGE,
  whatsappLink,
} from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/gallery', label: 'Project Gallery' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services/general-maintenance', label: 'General Maintenance' },
  { href: '/services/landscaping', label: 'Landscaping' },
  { href: '/services/renovations', label: 'Renovations & Fit-Outs' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-6">
            <span className="font-serif text-2xl font-semibold tracking-tight">
              VPS <span className="text-accent">Trading</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
              Everything your property needs, under one trusted roof. Premium maintenance,
              landscaping and renovation across Abu Dhabi.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-foreground/80 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-foreground/80 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={whatsappLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-foreground/80 transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 text-ink-foreground/80 transition-colors hover:text-accent"
                >
                  <Phone className="size-4 shrink-0" />
                  Call Now
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-ink-foreground/80 transition-colors hover:text-accent"
                >
                  <Mail className="size-4 shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink-foreground/80">
                <MapPin className="size-4 shrink-0" />
                {LOCATION}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-foreground/10 pt-8 text-xs text-ink-foreground/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} VPS Trading. All rights reserved.</p>
          <p>Property Maintenance &middot; Landscaping &middot; Renovation &middot; Abu Dhabi, UAE</p>
        </div>
      </div>
    </footer>
  )
}
