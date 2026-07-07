// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { UserRound, Globe, Github, UsersRound } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Equipo() {
  const { t } = useLanguage()

  return (
    <section id="equipo" className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t('equipoTitle')}</h2>
        <p className="text-zinc-400 mb-8">{t('equipoSubtitle')}</p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Director */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <UserRound className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-100">{t('directorName')}</h3>
              <p className="text-sm text-emerald-400">{t('directorRole')}</p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed mb-4">{t('directorBio')}</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="https://daviddiazsolis.com" target="_blank" rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <Globe className="w-4 h-4" /> Web
            </a>
            <a href="https://github.com/daviddiazsolis" target="_blank" rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Join */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/20 p-6 flex flex-col justify-center"
        >
          <div className="w-10 h-10 rounded-lg bg-zinc-800/60 border border-zinc-700 flex items-center justify-center mb-4">
            <UsersRound className="w-5 h-5 text-zinc-400" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-200 mb-1.5">{t('equipoJoinTitle')}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">{t('equipoJoinDesc')}</p>
        </motion.div>
      </div>
    </section>
  )
}
