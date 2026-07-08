// SPDX-License-Identifier: Apache-2.0
import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts'
import { useLanguage } from '../context/LanguageContext'
import { iliaStats, talentRanking, talentRankingYear, iliaMeta } from '../data/ilia'
import SectionHeading from './SectionHeading'

export default function EstadoIA() {
  const { t, language } = useLanguage()

  const chartData = talentRanking.map(r => ({
    name: r.country[language],
    score: r.score,
  }))

  return (
    <section id="estado" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading eyebrow="03 · Datos" title={t('estadoTitle')} subtitle={t('estadoSubtitle')} />

      {/* Stat cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {iliaStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700"
          >
            <span className="font-display text-4xl font-semibold text-aurora">{stat.value}</span>
            <p className="mt-3 text-sm font-medium leading-snug text-zinc-200">
              {stat.label[language]}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{stat.detail[language]}</p>
          </motion.div>
        ))}
      </div>

      {/* Talent ranking chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6"
      >
        <h3 className="font-display text-lg font-semibold text-zinc-100 mb-1">{t('estadoChartTitle')}</h3>
        <p className="text-sm text-zinc-500 mb-6">
          {t('estadoChartNote')} · ILIA {talentRankingYear}
        </p>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 4, right: 16, bottom: 4, left: 0 }}>
              <defs>
                <linearGradient id="barAurora" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f4640" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 13 }} axisLine={{ stroke: '#3f3f46' }} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} width={32} />
              <Tooltip
                cursor={{ fill: '#27272a55' }}
                contentStyle={{
                  background: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '0.5rem',
                  color: '#f4f4f5',
                }}
                formatter={(v: number) => [v.toFixed(2), 'Score']}
              />
              <Bar dataKey="score" radius={[6, 6, 0, 0]} maxBarSize={72}>
                {chartData.map((_, i) => (
                  <Cell key={i} fill={i === 0 ? 'url(#barAurora)' : '#60a5fa66'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Source attribution */}
      <p className="text-xs text-zinc-500 mt-5">
        {t('estadoSourcePrefix')}{' '}
        <span className="text-zinc-400">{iliaMeta.edition} · {iliaMeta.org}</span> ({iliaMeta.countries} {language === 'es' ? 'países' : 'countries'}) —{' '}
        <a
          href={iliaMeta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
        >
          {t('estadoSourceCta')} <ExternalLink className="h-3 w-3" />
        </a>
      </p>
    </section>
  )
}
