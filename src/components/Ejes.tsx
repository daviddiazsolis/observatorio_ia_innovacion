// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { GraduationCap, TrendingUp, Microscope, Building2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './SectionHeading'

const EJES = [
  { key: 'eje1', icon: GraduationCap, featured: true },
  { key: 'eje2', icon: TrendingUp, featured: false },
  { key: 'eje3', icon: Microscope, featured: false },
  { key: 'eje4', icon: Building2, featured: false },
] as const

export default function Ejes() {
  const { t } = useLanguage()

  return (
    <section id="ejes" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading eyebrow="02 · Ejes" title={t('ejesTitle')} subtitle={t('ejesSubtitle')} />

      <div className="grid gap-5 sm:grid-cols-2">
        {EJES.map(({ key, icon: Icon, featured }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`rounded-2xl border p-7 transition-colors ${
              featured
                ? 'border-fuchsia-500/30 bg-fuchsia-500/[0.04] glow-ring'
                : 'border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700'
            }`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                  featured
                    ? 'border-fuchsia-500/30 bg-fuchsia-500/10'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <Icon className={`h-5 w-5 ${featured ? 'text-fuchsia-300' : 'text-zinc-300'}`} />
              </div>
              {featured && (
                <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-2.5 py-0.5 text-xs font-medium text-fuchsia-200">
                  {t('eje1Featured')}
                </span>
              )}
            </div>
            <h3 className="font-display text-xl font-semibold text-zinc-100 mb-1.5">{t(`${key}Title`)}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{t(`${key}Desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
