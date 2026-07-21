import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type ShowcaseProps = {
  eyebrow: string
  title: string
  body: string
  image: string
  imageAlt: string
  href?: string
  linkLabel?: string
  reverse?: boolean
  dark?: boolean
}

export function Showcase({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  href,
  linkLabel,
  reverse = false,
  dark = false,
}: ShowcaseProps) {
  return (
    <section className={cn(dark ? 'bg-ink text-ink-foreground' : 'bg-background')}>
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={cn('order-1', reverse ? 'lg:order-2' : 'lg:order-1')}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={image || '/placeholder.svg'}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            delay={1}
            className={cn('order-2', reverse ? 'lg:order-1' : 'lg:order-2')}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {eyebrow}
            </span>
            <h2 className="mt-4 max-w-md font-serif text-3xl font-medium leading-tight text-balance md:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p
              className={cn(
                'mt-5 max-w-md text-base leading-relaxed',
                dark ? 'text-ink-foreground/70' : 'text-muted-foreground',
              )}
            >
              {body}
            </p>
            {href && linkLabel && (
              <Link
                href={href}
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-accent"
              >
                {linkLabel}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
