'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { WhatsAppButton } from '@/components/actions'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services/general-maintenance', label: 'Maintenance' },
  { href: '/services/landscaping', label: 'Landscaping' },
  { href: '/services/renovations', label: 'Renovations' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 lg:px-8">
        <Link href="/" className="flex flex-col leading-none" aria-label="VPS Trading home">
          <span className="font-serif text-xl font-semibold tracking-tight md:text-2xl">
            VPS <span className="text-accent">Trading</span>
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Abu Dhabi
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium tracking-tight transition-colors',
                  active ? 'text-accent' : 'text-foreground/70 hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4" aria-label="Mobile">
            {nav.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'border-b border-border/60 py-3 text-base font-medium',
                    active ? 'text-accent' : 'text-foreground/80',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="pt-4">
              <WhatsAppButton className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
