// SPDX-License-Identifier: Apache-2.0
import { Home, Github } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-zinc-800 py-10 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-3 text-center">
        <p className="text-zinc-200 font-medium">{t('footerObs')}</p>
        <p className="text-zinc-500 text-sm">{t('footerAffiliation')}</p>
        <p className="text-zinc-500 text-sm">
          {t('footerBuiltBy')}{' '}
          <span className="text-zinc-300 font-medium">David Díaz</span> · {t('footerRights')}
        </p>
        <div className="flex items-center gap-6 text-sm mt-1">
          <a href="https://ml-ai-portal.vercel.app" target="_blank" rel="noopener noreferrer"
            className="text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Home className="w-4 h-4" /> {t('footerPortalCta')}
          </a>
          <a href="https://github.com/daviddiazsolis" target="_blank" rel="noopener noreferrer"
            className="text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
