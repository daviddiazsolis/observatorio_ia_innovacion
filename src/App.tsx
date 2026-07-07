// SPDX-License-Identifier: Apache-2.0
import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { useLanguage } from './context/LanguageContext'
import TranslationWidget from './components/TranslationWidget'
import Hero from './components/Hero'
import Mision from './components/Mision'
import Ejes from './components/Ejes'
import EstadoIA from './components/EstadoIA'
import Recursos from './components/Recursos'
import Publicaciones from './components/Publicaciones'
import Actividades from './components/Actividades'
import Equipo from './components/Equipo'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const SECTIONS = [
  { id: 'mision',         navKey: 'navMision' },
  { id: 'ejes',           navKey: 'navEjes' },
  { id: 'estado',         navKey: 'navEstado' },
  { id: 'recursos',       navKey: 'navRecursos' },
  { id: 'publicaciones',  navKey: 'navPublicaciones' },
  { id: 'actividades',    navKey: 'navActividades' },
  { id: 'equipo',         navKey: 'navEquipo' },
  { id: 'contacto',       navKey: 'navContacto' },
] as const

function SectionNav() {
  const { t } = useLanguage()
  const [active, setActive] = useState('mision')

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <nav className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto py-2 no-scrollbar">
        {SECTIONS.map(({ id, navKey }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              active === id
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-zinc-500 hover:text-zinc-200'
            }`}
          >
            {t(navKey)}
          </a>
        ))}
      </div>
    </nav>
  )
}

function AppContent() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <TranslationWidget />
      <Hero />
      <SectionNav />
      <Mision />
      <Ejes />
      <EstadoIA />
      <Recursos />
      <Publicaciones />
      <Actividades />
      <Equipo />
      <Contacto />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
