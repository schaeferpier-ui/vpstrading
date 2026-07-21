'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
}

export function HomeHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/images/hero-villa.png"
        alt="Luxury villa in Abu Dhabi at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 lg:px-8">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70"
        >
          VPS Trading &middot; Abu Dhabi, UAE
        </motion.p>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-4xl font-serif text-[2.75rem] font-medium leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl"
        >
          What can we help you with?
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
        >
          Everything your property needs, under one trusted roof &mdash; premium maintenance,
          landscaping and renovation across Abu Dhabi.
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-10 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white/60"
        >
          <span>Choose a category</span>
          <ChevronDown className="size-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
