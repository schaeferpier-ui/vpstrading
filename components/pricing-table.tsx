import type { PriceGroup } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { WhatsAppButton } from '@/components/actions'

export function PricingTable({ group }: { group: PriceGroup }) {
  return (
    <Reveal className="rounded-2xl border border-border bg-card p-7 lg:p-9">
      <h3 className="font-serif text-2xl font-medium tracking-tight">{group.title}</h3>
      <ul className="mt-6 divide-y divide-border">
        {group.items.map((item) => (
          <li key={item.name} className="flex items-baseline justify-between gap-4 py-4">
            <span className="text-base font-medium tracking-tight">{item.name}</span>
            <span className="shrink-0 text-sm font-semibold text-accent">{item.price}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7">
        <WhatsAppButton
          className="w-full"
          label="Book on WhatsApp"
          message={`Hello VPS Trading, I'd like to book a ${group.title} service.`}
        />
      </div>
    </Reveal>
  )
}
