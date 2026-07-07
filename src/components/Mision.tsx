// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { Microscope, GraduationCap, Rocket } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const VALUES = [
  { key: 'misionValue1', icon: Microscope },
  { key: 'misionValue2', icon: GraduationCap },
  { key: 'misionValue3', icon: Rocket },
] as const

export default function Mision() {
  const { t } = useLanguage()

  return (
    <section id="mision" className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t('misionTitle')}</h2>
        <p className="text-zinc-400 mb-8">{t('misionSubtitle')}</p>
        <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl mb-12">{t('misionBody')}</p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-3">
        {VALUES.map(({ key, icon: Icon }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">{t(`${key}Title`)}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{t(`${key}Desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
