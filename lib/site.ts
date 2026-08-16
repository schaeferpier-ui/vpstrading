export const WHATSAPP_NUMBER = '971509068092'
export const PHONE_DISPLAY = '+971 50 906 8092'
export const PHONE_TEL = '+971509068092'
export const EMAIL = 'hello@vpstrading.ae'
export const LOCATION = 'Abu Dhabi, UAE'

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WA_MESSAGE =
  'Hello VPS Trading, I would like to enquire about your property services.'

export type Category = {
  slug: string
  eyebrow: string
  title: string
  subtitle: string
  image: string
  theme: string
  accent: string
}

export const categories: Category[] = [
  {
    slug: 'general-maintenance',
    eyebrow: '01',
    title: 'General Maintenance',
    subtitle: 'Plumbing, electrical, HVAC, repairs and property services',
    image: '/images/general-maintenance.png',
    theme: 'Navy blue, steel grey, orange accents',
    accent: 'oklch(0.55 0.14 255)',
  },
  {
    slug: 'landscaping',
    eyebrow: '02',
    title: 'Landscaping',
    subtitle: 'Garden design, planting, irrigation and outdoor spaces',
    image: '/images/landscaping.png',
    theme: 'Forest green, olive, sand',
    accent: 'oklch(0.5 0.1 150)',
  },
  {
    slug: 'renovations',
    eyebrow: '03',
    title: 'Renovations & Fit-Outs',
    subtitle: 'Bathrooms, kitchens, interiors and villa upgrades',
    image: '/images/renovations.png',
    theme: 'Charcoal, beige and gold',
    accent: 'oklch(0.62 0.09 62)',
  },
]

export type ServiceGroup = {
  slug: string
  title: string
  intro: string
  image: string
  services: string[]
}

export const serviceGroups: Record<string, ServiceGroup> = {
  'general-maintenance': {
    slug: 'general-maintenance',
    title: 'General Maintenance',
    intro:
      'Licensed technicians and skilled handymen keeping every system in your property running flawlessly \u2014 from a leaking tap to full HVAC servicing.',
    image: '/images/general-maintenance.png',
    services: [
      'Plumbing',
      'Electrical',
      'HVAC',
      'Painting',
      'Carpentry',
      'Handyman',
      'Gypsum',
      'Waterproofing',
    ],
  },
  landscaping: {
    slug: 'landscaping',
    title: 'Landscaping',
    intro:
      'Garden design, planting and irrigation crafted for the UAE climate. We create and maintain outdoor spaces that stay lush all year round.',
    image: '/images/landscaping.png',
    services: [
      'Garden Design',
      'Planting',
      'Palm Trees',
      'Shrubs',
      'Flowers',
      'Ground Cover',
      'Indoor Plants',
      'Outdoor Plants',
      'Artificial Grass',
      'Natural Grass',
      'Decorative Gravel',
      'Outdoor Lighting',
      'Irrigation',
      'Garden Maintenance',
    ],
  },
  renovations: {
    slug: 'renovations',
    title: 'Renovations & Fit-Outs',
    intro:
      'Complete renovation and fit-out services delivered to German management standards. From single bathrooms to full villa transformations and commercial spaces.',
    image: '/images/renovations.png',
    services: [
      'Bathroom Renovations',
      'Kitchen Renovations',
      'Interior Renovations',
      'Villa Renovations',
      'Commercial Fit-Outs',
      'Flooring',
      'Painting',
      'Gypsum',
      'False Ceilings',
      'Doors',
      'Built-in Furniture',
    ],
  },
}

export type PriceItem = { name: string; price: string }
export type PriceGroup = { title: string; items: PriceItem[] }

export const pricing: PriceGroup[] = [
  {
    title: 'General Maintenance',
    items: [
      { name: 'Inspection', price: 'From AED 99' },
      { name: 'Handyman', price: 'From AED 149' },
      { name: 'Light Installation', price: 'From AED 120' },
      { name: 'Socket Replacement', price: 'From AED 120' },
      { name: 'Tap Repair', price: 'From AED 150' },
      { name: 'HVAC Service', price: 'From AED 180' },
      { name: 'HVAC Coil Cleaning', price: 'From AED 300' },
      { name: 'Duct Cleaning', price: 'From AED 350' },
    ],
  },
  {
    title: 'Landscaping',
    items: [
      { name: 'Artificial Grass', price: 'From AED 95/m\u00b2' },
      { name: 'Natural Grass', price: 'From AED 45/m\u00b2' },
      { name: 'Decorative Gravel', price: 'From AED 60/m\u00b2' },
      { name: 'Garden Maintenance', price: 'From AED 350/month' },
    ],
  },
]

export type GalleryItem = { src: string; alt: string; label: string; span?: boolean }

export const gallery: GalleryItem[] = [
  { src: '/images/gallery-bathroom.png', alt: 'Luxury renovated bathroom with marble and brass fixtures', label: 'Bathrooms', span: true },
  { src: '/images/gallery-kitchen.png', alt: 'Modern marble kitchen with charcoal cabinetry', label: 'Kitchens' },
  { src: '/images/gallery-garden.png', alt: 'Landscaped luxury villa garden at twilight', label: 'Luxury Gardens' },
  { src: '/images/gallery-lighting.png', alt: 'Outdoor landscape lighting on a villa terrace', label: 'Outdoor Lighting', span: true },
  { src: '/images/gallery-interior.png', alt: 'Modern luxury living room interior', label: 'Interiors' },
  { src: '/images/gallery-maintenance.png', alt: 'Technician performing villa maintenance', label: 'Villa Maintenance' },
  { src: '/images/gallery-grass.png', alt: 'Artificial grass lawn installation in a villa courtyard', label: 'General Maintenance' },
]

export type Review = {
  name: string
  area: string
  text: string
  service: string
}

export const reviews: Review[] = [
  {
    name: 'Fatima Al Mansoori',
    area: 'Yas Island',
    service: 'Villa Renovation',
    text: 'VPS Trading transformed our villa completely. The finish quality on our bathrooms and kitchen is genuinely five-star. Everything ran on schedule, exactly as promised.',
  },
  {
    name: 'James Whitfield',
    area: 'Saadiyat Island',
    service: 'Landscaping',
    text: 'Our garden has never looked better. The team designed the planting for our climate and the irrigation just works. Professional from the first visit to handover.',
  },
  {
    name: 'Aisha Rahman',
    area: 'Al Raha Beach',
    service: 'HVAC & Maintenance',
    text: 'Reliable, tidy and properly licensed technicians. They serviced our AC, fixed two leaks and left the place spotless. This is now our go-to for everything.',
  },
  {
    name: 'Mohammed Al Hashemi',
    area: 'Al Reef',
    service: 'General Maintenance',
    text: 'I sent photos on WhatsApp and had a clear quotation the same day. No surprises, no upselling. The German management standards really show in the workmanship.',
  },
  {
    name: 'Sophie Laurent',
    area: 'Khalifa City',
    service: 'Kitchen Renovation',
    text: 'The marble kitchen they built is the centrepiece of our home now. Their attention to detail and high-end machinery made all the difference.',
  },
  {
    name: 'Omar Siddiqui',
    area: 'Al Reem Island',
    service: 'Artificial Grass',
    text: 'Fast, clean installation of artificial grass and outdoor lighting on our terrace. It looks premium and the pricing was transparent. Highly recommended.',
  },
]

export const whyUs = [
  { title: 'Professional Handymen', desc: 'Skilled, vetted craftsmen for every job, big or small.' },
  { title: 'Licensed Technicians', desc: 'Fully certified plumbers, electricians and HVAC specialists.' },
  { title: 'Professional Equipment', desc: 'The right tools for a clean, precise and lasting result.' },
  { title: 'High-End Machinery', desc: 'Modern machinery for efficient, high-quality delivery.' },
  { title: 'German Management Standards', desc: 'Structured processes, precision and accountability.' },
  { title: 'Reliable Scheduling', desc: 'We arrive when we say we will \u2014 every time.' },
  { title: 'Quality Workmanship', desc: 'Finishes that hold up to the highest expectations.' },
  { title: 'One Trusted Roof', desc: 'Maintenance, landscaping and renovation in one partner.' },
]

export const steps = [
  { n: '01', title: 'Choose a category', desc: 'Maintenance, landscaping or renovation \u2014 tell us what your property needs.' },
  { n: '02', title: 'Select your service', desc: 'Pick the specific service from our full range of offerings.' },
  { n: '03', title: 'Send photos & details', desc: 'Share images and details with us directly through WhatsApp.' },
  { n: '04', title: 'Receive your quotation', desc: 'Get a clear quote and book your appointment at a time that suits you.' },
]
