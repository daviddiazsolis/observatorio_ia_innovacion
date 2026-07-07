// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { FileText, ExternalLink, FilePlus2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Publicaciones() {
  const { t } = useLanguage()

  return (
    <section id="publicaciones" className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t('publicacionesTitle')}</h2>
        <p className="text-zinc-400 mb-8">{t('publicacionesSubtitle')}</p>
      </motion.div>

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
          className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-emerald-500/40 transition-colors flex flex-col"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
            <FileText className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">{t('pubIliaTitle')}</h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">{t('pubIliaDesc')}</p>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium text-sm group-hover:gap-2.5 transition-all">
            {t('pubIliaCta')} <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </motion.a>

        {/* Own reports (coming soon) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/20 p-6 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-800/60 border border-zinc-700 flex items-center justify-center">
              <FilePlus2 className="w-5 h-5 text-zinc-400" />
            </div>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
              {t('pubSoonBadge')}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-zinc-200 mb-1.5">{t('pubSoonTitle')}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">{t('pubSoonDesc')}</p>
        </motion.div>
      </div>
    </section>
  )
}
