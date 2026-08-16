import {
  Award,
  BadgeCheck,
  CalendarClock,
  Cog,
  Hammer,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'
import { whyUs } from '@/lib/site'
import { Reveal } from '@/components/reveal'

const icons = [Users, BadgeCheck, Wrench, Cog, Award, CalendarClock, Sparkles, Hammer]

export function WhyUsSection() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Why VPS Trading
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-balance md:text-4xl lg:text-[2.75rem]">
              A single, trusted partner held to German management standards
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/70">
              Licensed technicians, professional equipment and reliable scheduling &mdash; delivered
              with the precision and accountability that set us apart across Abu Dhabi.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16">
          {whyUs.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={item.title} delay={i} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink-foreground/15 text-accent">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-foreground/60">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
