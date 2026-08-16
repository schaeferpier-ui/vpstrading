import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function ServiceCards({ services }: { services: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <Reveal key={service} delay={i % 3}>
          <div className="group flex h-full items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-accent/50">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
              <Check className="size-5" />
            </span>
            <span className="text-base font-medium tracking-tight">{service}</span>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
