import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vpstrading.ae'),
  title: {
    default: 'VPS Trading | Property Maintenance, Landscaping & Renovation Abu Dhabi',
    template: '%s | VPS Trading',
  },
  description:
    'VPS Trading is Abu Dhabi\u2019s premium property maintenance, landscaping and renovation company. Plumbing, electrical, HVAC, garden design, artificial grass, villa renovations and fit-outs. Everything your property needs, under one trusted roof.',
  keywords: [
    'General Maintenance Abu Dhabi',
    'Property Maintenance Abu Dhabi',
    'Handyman Abu Dhabi',
    'Plumbing Abu Dhabi',
    'Electrical Services Abu Dhabi',
    'HVAC Abu Dhabi',
    'Landscaping Abu Dhabi',
    'Garden Design Abu Dhabi',
    'Planting Services Abu Dhabi',
    'Artificial Grass Abu Dhabi',
    'Renovation Abu Dhabi',
    'Villa Renovation Abu Dhabi',
  ],
  authors: [{ name: 'VPS Trading' }],
  openGraph: {
    title: 'VPS Trading | Premium Property Services in Abu Dhabi',
    description:
      'Property maintenance, landscaping and renovation in Abu Dhabi. Everything your property needs, under one trusted roof.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'VPS Trading',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#141311',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFab />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
