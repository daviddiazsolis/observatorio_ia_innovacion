// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { Mail, BellRing } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const EMAIL = 'daviddiazsolis@gmail.com'

export default function Contacto() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t('contactoTitle')}</h2>
        <p className="text-zinc-400 mb-8">{t('contactoSubtitle')}</p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
            <Mail className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-sm text-zinc-400 mb-1">{EMAIL}</p>
          <div className="flex-1" />
          <a
            href={`mailto:${EMAIL}?subject=Observatorio%20de%20IA%20%26%20Innovaci%C3%B3n`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 font-medium text-sm hover:bg-emerald-400 transition-colors self-start mt-2"
          >
            <Mail className="w-4 h-4" /> {t('contactoEmailCta')}
          </a>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
            <BellRing className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-base font-semibold text-zinc-100 mb-1.5">{t('contactoNewsletterTitle')}</h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">{t('contactoNewsletterDesc')}</p>
          <a
            href={`mailto:${EMAIL}?subject=Suscripci%C3%B3n%20Observatorio%20IA&body=Quiero%20recibir%20novedades%20del%20Observatorio%20de%20IA%20%26%20Innovaci%C3%B3n.`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 text-zinc-200 font-medium text-sm hover:border-zinc-500 transition-colors self-start"
          >
            <BellRing className="w-4 h-4" /> {t('contactoNewsletterCta')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
