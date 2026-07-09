// SPDX-License-Identifier: Apache-2.0
import { Home, Github, Building2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-12">
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center">
        <p className="font-display text-lg font-semibold text-zinc-100">{t('footerObs')}</p>
        <a href="https://negocios.uchile.cl/" target="_blank" rel="noopener noreferrer"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-300">
          {t('footerAffiliation')}
        </a>
        <p className="text-sm text-zinc-500">
          {t('footerBuiltBy')}{' '}
          <span className="font-medium text-zinc-300">David Díaz</span> · {t('footerRights')}
        </p>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="https://negocios.uchile.cl/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white">
            <Building2 className="h-4 w-4" /> FEN UChile
          </a>
          <a href="https://ml-ai-portal.vercel.app" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white">
            <Home className="h-4 w-4" /> {t('footerPortalCta')}
          </a>
          <a href="https://github.com/daviddiazsolis" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
