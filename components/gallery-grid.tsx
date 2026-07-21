'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { gallery } from '@/lib/site'
import { cn } from '@/lib/utils'

export function GalleryGrid() {
  return (
    <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[280px] md:grid-cols-4 md:gap-4">
      {gallery.map((item, i) => (
        <motion.figure
          key={item.src}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={cn(
            'group relative overflow-hidden rounded-xl',
            item.span ? 'col-span-2 row-span-1 md:row-span-2' : 'col-span-1 row-span-1',
          )}
        >
          <Image
            src={item.src || '/placeholder.svg'}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <figcaption className="absolute bottom-0 left-0 translate-y-2 p-5 text-sm font-medium tracking-tight text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {item.label}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}
