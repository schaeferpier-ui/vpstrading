'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/lib/site'

export function CategoryCards() {
  return (
    <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Link
            href={`/services/${cat.slug}`}
            className="group relative flex h-[460px] flex-col justify-end overflow-hidden rounded-2xl md:h-[560px]"
          >
            <Image
              src={cat.image || '/placeholder.svg'}
              alt={cat.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-opacity duration-500 group-hover:from-black/90" />
            <span
              className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              style={{ backgroundColor: cat.accent }}
            />

            <div className="relative p-7 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                {cat.eyebrow}
              </span>
              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl font-medium leading-tight text-white md:text-3xl">
                  {cat.title}
                </h3>
                <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                {cat.subtitle}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
