// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { PlayCircle, ArrowRight, BookOpen, BookMarked, Video } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './SectionHeading'

const RESOURCES = [
  { key: 'recurso1', icon: BookOpen },
  { key: 'recurso2', icon: BookMarked },
  { key: 'recurso3', icon: Video },
] as const

export default function Recursos() {
  const { t } = useLanguage()

  return (
    <section id="recursos" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading eyebrow="04 · Formación" title={t('recursosTitle')} subtitle={t('recursosSubtitle')} />

      {/* Featured: playgrounds portal — aurora gradient border */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 rounded-3xl bg-gradient-to-r from-blue-800/70 via-blue-500/70 to-sky-400/70 p-px glow-ring"
      >
        <a
          href="https://ml-ai-portal.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-5 rounded-3xl bg-zinc-950 p-8 sm:flex-row sm:items-center"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10">
            <PlayCircle className="h-7 w-7 text-blue-300" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold text-zinc-100 mb-1.5">{t('recursosPlaygroundTitle')}</h3>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">{t('recursosPlaygroundDesc')}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-blue-300 transition-all group-hover:gap-2.5">
            {t('recursosPlaygroundCta')} <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </motion.div>

      {/* Other resources */}
      <div className="grid gap-5 sm:grid-cols-3">
        {RESOURCES.map(({ key, icon: Icon }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Icon className="h-5 w-5 text-zinc-300" />
            </div>
            <h3 className="font-display text-base font-semibold text-zinc-100 mb-1.5">{t(`${key}Title`)}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{t(`${key}Desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
