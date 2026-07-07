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

export default function EstadoIA() {
  const { t, language } = useLanguage()

  const chartData = talentRanking.map(r => ({
    name: r.country[language],
    score: r.score,
  }))

  return (
    <section id="estado" className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t('estadoTitle')}</h2>
        <p className="text-zinc-400 mb-8">{t('estadoSubtitle')}</p>
      </motion.div>

      {/* Stat cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {iliaStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-emerald-400">{stat.value}</span>
            </div>
            <p className="text-sm text-zinc-200 font-medium leading-snug mb-1.5">
              {stat.label[language]}
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed">{stat.detail[language]}</p>
          </motion.div>
        ))}
      </div>

      {/* Talent ranking chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
      >
        <h3 className="text-lg font-semibold text-zinc-100 mb-1">{t('estadoChartTitle')}</h3>
        <p className="text-sm text-zinc-500 mb-6">
          {t('estadoChartNote')} · ILIA {talentRankingYear}
        </p>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 4, right: 16, bottom: 4, left: 0 }}>
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
                  <Cell key={i} fill={i === 0 ? '#10b981' : '#10b98188'} />
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
          className="text-emerald-500 hover:text-emerald-400 inline-flex items-center gap-1"
        >
          {t('estadoSourceCta')} <ExternalLink className="w-3 h-3" />
        </a>
      </p>
    </section>
  )
}
