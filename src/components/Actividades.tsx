// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { Calendar, Presentation, Wrench, Mic } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const ACTIVITIES = [
  { key: 'act1', icon: Presentation },
  { key: 'act2', icon: Wrench },
  { key: 'act3', icon: Mic },
] as const

export default function Actividades() {
  const { t } = useLanguage()

  return (
    <section id="actividades" className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t('actividadesTitle')}</h2>
        <p className="text-zinc-400 mb-8">{t('actividadesSubtitle')}</p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-3">
        {ACTIVITIES.map(({ key, icon: Icon }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                {t(`${key}Type`)}
              </span>
            </div>
            <h3 className="text-base font-semibold text-zinc-100 mb-1.5">{t(`${key}Title`)}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">{t(`${key}Desc`)}</p>
            <p className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
              <Calendar className="w-3.5 h-3.5" /> {t(`${key}Date`)}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-zinc-500 mt-6">{t('actSoon')}</p>
    </section>
  )
}
