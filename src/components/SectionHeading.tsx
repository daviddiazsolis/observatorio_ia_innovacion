// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: Props) {
  const centered = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}
    >
      <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
        <span className="eyebrow-line" />
        {eyebrow && (
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-semibold text-zinc-100 leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-zinc-400 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
