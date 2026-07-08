// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { Microscope, GraduationCap, Rocket } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './SectionHeading'

const VALUES = [
  { key: 'misionValue1', icon: Microscope },
  { key: 'misionValue2', icon: GraduationCap },
  { key: 'misionValue3', icon: Rocket },
] as const

export default function Mision() {
  const { t } = useLanguage()

  return (
    <section id="mision" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading eyebrow="01 · Misión" title={t('misionTitle')} subtitle={t('misionSubtitle')} />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-zinc-300 mb-14"
      >
        {t('misionBody')}
      </motion.p>

      <div className="grid gap-5 sm:grid-cols-3">
        {VALUES.map(({ key, icon: Icon }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Icon className="h-5 w-5 text-fuchsia-300" />
            </div>
            <h3 className="font-display text-lg font-semibold text-zinc-100 mb-1.5">{t(`${key}Title`)}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{t(`${key}Desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
