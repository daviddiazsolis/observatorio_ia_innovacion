// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { GraduationCap, TrendingUp, Microscope, Building2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const EJES = [
  { key: 'eje1', icon: GraduationCap, featured: true },
  { key: 'eje2', icon: TrendingUp, featured: false },
  { key: 'eje3', icon: Microscope, featured: false },
  { key: 'eje4', icon: Building2, featured: false },
] as const

export default function Ejes() {
  const { t } = useLanguage()

  return (
    <section id="ejes" className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t('ejesTitle')}</h2>
        <p className="text-zinc-400 mb-8">{t('ejesSubtitle')}</p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2">
        {EJES.map(({ key, icon: Icon, featured }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`rounded-2xl border p-6 ${
              featured
                ? 'border-emerald-500/40 bg-emerald-500/5'
                : 'border-zinc-800 bg-zinc-900/40'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  featured
                    ? 'bg-emerald-500/20 border border-emerald-500/30'
                    : 'bg-zinc-800/60 border border-zinc-700'
                }`}
              >
                <Icon className={`w-5 h-5 ${featured ? 'text-emerald-400' : 'text-zinc-300'}`} />
              </div>
              {featured && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {t('eje1Featured')}
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">{t(`${key}Title`)}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{t(`${key}Desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
