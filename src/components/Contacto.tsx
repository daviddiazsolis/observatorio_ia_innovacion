// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { Mail, BellRing } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SectionHeading from './SectionHeading'

const EMAIL = 'daviddiazsolis@gmail.com'

export default function Contacto() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading eyebrow="08 · Contacto" title={t('contactoTitle')} subtitle={t('contactoSubtitle')} />

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-7"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10">
            <Mail className="h-5 w-5 text-fuchsia-300" />
          </div>
          <p className="mb-1 text-sm text-zinc-400">{EMAIL}</p>
          <div className="flex-1" />
          <a
            href={`mailto:${EMAIL}?subject=Observatorio%20de%20IA%20%26%20Innovaci%C3%B3n`}
            className="btn-gradient mt-3 self-start"
          >
            <span>
              <Mail className="h-4 w-4" /> {t('contactoEmailCta')}
            </span>
          </a>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="flex flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-7"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <BellRing className="h-5 w-5 text-fuchsia-300" />
          </div>
          <h3 className="font-display text-base font-semibold text-zinc-100 mb-1.5">{t('contactoNewsletterTitle')}</h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">{t('contactoNewsletterDesc')}</p>
          <a
            href={`mailto:${EMAIL}?subject=Suscripci%C3%B3n%20Observatorio%20IA&body=Quiero%20recibir%20novedades%20del%20Observatorio%20de%20IA%20%26%20Innovaci%C3%B3n.`}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
          >
            <BellRing className="h-4 w-4" /> {t('contactoNewsletterCta')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
