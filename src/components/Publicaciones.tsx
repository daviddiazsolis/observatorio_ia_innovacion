// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { FileText, ExternalLink, FilePlus2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './SectionHeading'

export default function Publicaciones() {
  const { t } = useLanguage()

  return (
    <section id="publicaciones" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading eyebrow="05 · Publicaciones" title={t('publicacionesTitle')} subtitle={t('publicacionesSubtitle')} />

      <div className="grid gap-5 sm:grid-cols-2">
        {/* ILIA reference report */}
        <motion.a
          href="https://indicelatam.cl/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="group flex flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-7 transition-colors hover:border-blue-500/40"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
            <FileText className="h-5 w-5 text-blue-300" />
          </div>
          <h3 className="font-display text-lg font-semibold text-zinc-100 mb-1.5">{t('pubIliaTitle')}</h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">{t('pubIliaDesc')}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 transition-all group-hover:gap-2.5">
            {t('pubIliaCta')} <ExternalLink className="h-3.5 w-3.5" />
          </span>
        </motion.a>

        {/* Own reports (coming soon) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="flex flex-col rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/15 p-7"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <FilePlus2 className="h-5 w-5 text-zinc-400" />
            </div>
            <span className="rounded-full border border-zinc-700 bg-zinc-800/60 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
              {t('pubSoonBadge')}
            </span>
          </div>
          <h3 className="font-display text-lg font-semibold text-zinc-200 mb-1.5">{t('pubSoonTitle')}</h3>
          <p className="text-sm leading-relaxed text-zinc-500">{t('pubSoonDesc')}</p>
        </motion.div>
      </div>
    </section>
  )
}
