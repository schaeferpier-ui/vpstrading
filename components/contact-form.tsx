'use client'

import { Paperclip } from 'lucide-react'
import { useState } from 'react'
import { whatsappLink } from '@/lib/site'
import { WhatsAppButton, CallButton } from '@/components/actions'

const serviceOptions = [
  'General Maintenance',
  'Plumbing',
  'Electrical',
  'HVAC',
  'Landscaping',
  'Artificial Grass',
  'Garden Maintenance',
  'Bathroom Renovation',
  'Kitchen Renovation',
  'Villa Renovation',
  'Commercial Fit-Out',
  'Other',
]

const inputClass =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors'

export function ContactForm() {
  const [fileCount, setFileCount] = useState(0)

  function buildMessage(form: HTMLFormElement) {
    const data = new FormData(form)
    const get = (k: string) => (data.get(k) as string)?.trim() || '—'
    return [
      'New enquiry for VPS Trading',
      '',
      `Name: ${get('name')}`,
      `Phone: ${get('phone')}`,
      `Email: ${get('email')}`,
      `Location: ${get('location')}`,
      `Service Required: ${get('service')}`,
      `Preferred Date: ${get('date')}`,
      '',
      `Details: ${get('details')}`,
    ].join('\n')
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const message = buildMessage(e.currentTarget)
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+971 50 000 0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="location" className="mb-2 block text-sm font-medium">
            Location
          </label>
          <input
            id="location"
            name="location"
            placeholder="e.g. Yas Island, Abu Dhabi"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium">
            Service Required
          </label>
          <select id="service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-medium">
            Preferred Date
          </label>
          <input id="date" name="date" type="date" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="details" className="mb-2 block text-sm font-medium">
          Additional Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Tell us more about what your property needs..."
          className={inputClass}
        />
      </div>

      <div>
        <span className="mb-2 block text-sm font-medium">Upload Photos</span>
        <label
          htmlFor="photos"
          className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border bg-background px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-accent"
        >
          <Paperclip className="size-4" />
          {fileCount > 0
            ? `${fileCount} file${fileCount > 1 ? 's' : ''} selected`
            : 'Attach photos of the area or issue'}
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => setFileCount(e.target.files?.length ?? 0)}
          />
        </label>
        <p className="mt-2 text-xs text-muted-foreground">
          Photos help us quote faster. You can also send them directly in the WhatsApp chat that
          opens.
        </p>
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
        >
          Request Quote
        </button>
        <WhatsAppButton className="h-12" />
        <CallButton className="h-12" />
      </div>
    </form>
  )
}
