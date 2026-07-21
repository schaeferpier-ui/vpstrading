import { Quote, Star } from 'lucide-react'
import { reviews } from '@/lib/site'
import { Reveal } from '@/components/reveal'

export function ReviewsSection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Reviews
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-balance md:text-4xl lg:text-[2.75rem]">
              Trusted across Abu Dhabi&rsquo;s finest communities
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i % 3}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <Quote className="size-7 text-accent/40" />
                <div className="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold tracking-tight">{r.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {r.area} &middot; {r.service}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
