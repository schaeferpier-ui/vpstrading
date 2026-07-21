import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  crumbs = [],
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  image: string
  imageAlt: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden">
      <Image
        src={image || '/placeholder.svg'}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/80" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-28 lg:px-8 lg:pb-20">
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-white/60"
          >
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/85">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="size-3.5" />}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.05] text-white text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
