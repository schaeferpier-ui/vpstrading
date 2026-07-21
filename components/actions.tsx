import { Phone } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DEFAULT_WA_MESSAGE, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

type Size = 'default' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const sizes: Record<Size, string> = {
  default: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
}

export function WhatsAppButton({
  message = DEFAULT_WA_MESSAGE,
  size = 'default',
  className,
  label = 'WhatsApp',
}: {
  message?: string
  size?: Size
  className?: string
  label?: string
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        base,
        sizes[size],
        'bg-[#25D366] text-[#0b3d24] hover:bg-[#1fbb59] hover:-translate-y-0.5',
        className,
      )}
    >
      <WhatsAppIcon className="size-5" />
      {label}
    </a>
  )
}

export function CallButton({
  size = 'default',
  className,
  variant = 'outline',
}: {
  size?: Size
  className?: string
  variant?: 'outline' | 'solid'
}) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className={cn(
        base,
        sizes[size],
        variant === 'outline'
          ? 'border border-border bg-transparent text-foreground hover:bg-secondary hover:-translate-y-0.5'
          : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5',
        className,
      )}
    >
      <Phone className="size-4" />
      {PHONE_DISPLAY}
    </a>
  )
}

export function LinkButton({
  href,
  children,
  size = 'default',
  className,
  variant = 'solid',
}: {
  href: string
  children: React.ReactNode
  size?: Size
  className?: string
  variant?: 'solid' | 'outline' | 'accent'
}) {
  const styles = {
    solid: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-border bg-transparent text-foreground hover:bg-secondary',
    accent: 'bg-accent text-accent-foreground hover:brightness-95',
  }
  return (
    <Link
      href={href}
      className={cn(base, sizes[size], styles[variant], 'hover:-translate-y-0.5', className)}
    >
      {children}
    </Link>
  )
}
