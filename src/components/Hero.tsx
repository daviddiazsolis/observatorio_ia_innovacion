// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { Sparkles, ArrowRight, BarChart3 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative py-24 px-6 overflow-hidden border-b border-zinc-800/50">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a22_1px,transparent_1px),linear-gradient(to_bottom,#27272a22_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      {/* Emerald glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {t('heroBadge')}
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-zinc-100 mb-5 leading-tight max-w-4xl">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-emerald-400 font-medium mb-4 max-w-3xl">{t('heroSubtitle')}</p>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed mb-10">{t('heroDesc')}</p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('recursos')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-medium hover:bg-emerald-400 transition-colors"
            >
              {t('heroCta1')} <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('estado')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-200 font-medium hover:border-zinc-500 hover:text-zinc-100 transition-colors"
            >
              <BarChart3 className="w-4 h-4" /> {t('heroCta2')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
