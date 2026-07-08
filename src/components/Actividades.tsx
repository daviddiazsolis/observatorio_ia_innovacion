// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { Calendar, Presentation, Wrench, Mic } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './SectionHeading'

const ACTIVITIES = [
  { key: 'act1', icon: Presentation },
  { key: 'act2', icon: Wrench },
  { key: 'act3', icon: Mic },
] as const

export default function Actividades() {
  const { t } = useLanguage()

  return (
    <section id="actividades" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading eyebrow="06 · Agenda" title={t('actividadesTitle')} subtitle={t('actividadesSubtitle')} />

      <div className="grid gap-5 sm:grid-cols-3">
        {ACTIVITIES.map(({ key, icon: Icon }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Icon className="h-5 w-5 text-fuchsia-300" />
              </div>
              <span className="rounded-full border border-zinc-700 bg-zinc-800/60 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
                {t(`${key}Type`)}
              </span>
            </div>
            <h3 className="font-display text-base font-semibold text-zinc-100 mb-1.5">{t(`${key}Title`)}</h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">{t(`${key}Desc`)}</p>
            <p className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
              <Calendar className="h-3.5 w-3.5" /> {t(`${key}Date`)}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-sm text-zinc-500">{t('actSoon')}</p>
    </section>
  )
}
