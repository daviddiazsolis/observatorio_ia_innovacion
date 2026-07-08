// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { UserRound, Globe, Github, UsersRound } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './SectionHeading'

export default function Equipo() {
  const { t } = useLanguage()

  return (
    <section id="equipo" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading eyebrow="07 · Equipo" title={t('equipoTitle')} subtitle={t('equipoSubtitle')} />

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Director */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-7"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
              <UserRound className="h-8 w-8 text-blue-300" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-zinc-100">{t('directorName')}</h3>
              <p className="text-sm text-blue-300">{t('directorRole')}</p>
            </div>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-zinc-400">{t('directorBio')}</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="https://daviddiazsolis.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white">
              <Globe className="h-4 w-4" /> Web
            </a>
            <a href="https://github.com/daviddiazsolis" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Join */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="flex flex-col justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/15 p-7"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <UsersRound className="h-5 w-5 text-zinc-400" />
          </div>
          <h3 className="font-display text-lg font-semibold text-zinc-200 mb-1.5">{t('equipoJoinTitle')}</h3>
          <p className="text-sm leading-relaxed text-zinc-500">{t('equipoJoinDesc')}</p>
        </motion.div>
      </div>
    </section>
  )
}
