// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { ArrowRight, BarChart3, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative isolate overflow-hidden bg-[#0a0a0c] px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* ── Aurora background ─────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* navy blob, upper-left */}
        <div className="absolute -top-40 -left-24 h-[38rem] w-[38rem] rounded-full bg-blue-800/30 blur-[120px]" />
        {/* azure blob, upper-right */}
        <div className="absolute -top-40 -right-24 h-[38rem] w-[38rem] rounded-full bg-sky-600/20 blur-[120px]" />
        {/* royal-blue center glow */}
        <div className="absolute top-0 left-1/2 h-[26rem] w-[48rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
        {/* faint dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge — links to the FEN Departamento de Administración */}
          <a
            href="https://negocios.uchile.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            {t('heroBadge')}
            <ArrowUpRight className="h-4 w-4 text-white/60 transition-colors group-hover:text-white/90" />
          </a>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
            {t('heroTitleA')} <span className="text-aurora">{t('heroTitleB')}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {t('heroDesc')}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('recursos')}
              className="btn-gradient"
            >
              <span>
                {t('heroCta1')} <ArrowRight className="h-4 w-4" />
              </span>
            </button>
            <button
              onClick={() => scrollTo('estado')}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-medium text-white/90 transition-colors hover:border-white/30 hover:text-white"
            >
              <BarChart3 className="h-4 w-4" /> {t('heroCta2')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
