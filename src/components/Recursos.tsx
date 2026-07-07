// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { PlayCircle, ArrowRight, BookOpen, BookMarked, Video } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const RESOURCES = [
  { key: 'recurso1', icon: BookOpen },
  { key: 'recurso2', icon: BookMarked },
  { key: 'recurso3', icon: Video },
] as const

export default function Recursos() {
  const { t } = useLanguage()

  return (
    <section id="recursos" className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t('recursosTitle')}</h2>
        <p className="text-zinc-400 mb-8">{t('recursosSubtitle')}</p>
      </motion.div>

      {/* Featured: playgrounds portal */}
      <motion.a
        href="https://ml-ai-portal.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group block rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-7 mb-6 hover:border-emerald-500/60 transition-colors"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="w-14 h-14 shrink-0 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
            <PlayCircle className="w-7 h-7 text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-zinc-100 mb-1.5">{t('recursosPlaygroundTitle')}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">{t('recursosPlaygroundDesc')}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium text-sm whitespace-nowrap group-hover:gap-2.5 transition-all">
            {t('recursosPlaygroundCta')} <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </motion.a>

      {/* Other resources */}
      <div className="grid gap-5 sm:grid-cols-3">
        {RESOURCES.map(({ key, icon: Icon }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-800/60 border border-zinc-700 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-zinc-300" />
            </div>
            <h3 className="text-base font-semibold text-zinc-100 mb-1.5">{t(`${key}Title`)}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{t(`${key}Desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
