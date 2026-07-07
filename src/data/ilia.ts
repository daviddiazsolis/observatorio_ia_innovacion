// SPDX-License-Identifier: Apache-2.0
//
// Datos del estado de la IA en América Latina.
// Fuente: Índice Latinoamericano de Inteligencia Artificial (ILIA), CENIA + CEPAL.
// Edición más reciente: ILIA 2025 (tercera edición, 19 países).
//
// >>> Para actualizar el sitio, edita SOLO este archivo. <<<
// Cada cifra es un objeto con value/label/detail y su año de edición.
// Las etiquetas son bilingües { es, en }.

export interface Bilingual {
  es: string
  en: string
}

export interface Stat {
  value: string
  label: Bilingual
  detail: Bilingual
  /** Edición del ILIA de la que proviene el dato */
  year: number
}

export interface RankingItem {
  country: Bilingual
  score: number
}

export const iliaMeta = {
  edition: 'ILIA 2025',
  org: 'CENIA · CEPAL',
  url: 'https://indicelatam.cl/',
  countries: 19,
}

/** Tarjetas de cifras destacadas (sección "Estado de la IA en LatAm"). */
export const iliaStats: Stat[] = [
  {
    value: '15–20%',
    label: {
      es: 'del mercado global de descargas de IA generativa',
      en: 'of the global generative-AI download market',
    },
    detail: {
      es: 'América Latina es la tercera región del mundo en adopción',
      en: 'Latin America is the world’s third-largest adopting region',
    },
    year: 2025,
  },
  {
    value: '1,28%',
    label: {
      es: 'de la inversión global en IA llega a la región',
      en: 'of global AI investment reaches the region',
    },
    detail: {
      es: 'brecha estructural en financiamiento aún pendiente',
      en: 'a structural financing gap still to close',
    },
    year: 2025,
  },
  {
    value: '13 / 19',
    label: {
      es: 'países sin IA integrada al currículo escolar temprano',
      en: 'countries lack early AI in the school curriculum',
    },
    detail: {
      es: 'la mayor oportunidad para la formación y divulgación',
      en: 'the biggest opportunity for education and outreach',
    },
    year: 2025,
  },
  {
    value: '11 / 19',
    label: {
      es: 'países sin programas doctorales en IA',
      en: 'countries without doctoral AI programs',
    },
    detail: {
      es: 'el talento especializado sigue concentrado',
      en: 'specialized talent remains concentrated',
    },
    year: 2025,
  },
  {
    value: '68%',
    label: {
      es: 'de investigadores activos: Brasil y México',
      en: 'of active researchers are in Brazil and Mexico',
    },
    detail: {
      es: 'el top-5 concentra el 87% de la investigación regional',
      en: 'the top 5 hold 87% of regional research',
    },
    year: 2025,
  },
  {
    value: '9 / 19',
    label: {
      es: 'países con estrategia nacional de IA',
      en: 'countries with a national AI strategy',
    },
    detail: {
      es: 'la gobernanza avanza más lento que la adopción',
      en: 'governance lags behind adoption',
    },
    year: 2025,
  },
]

/**
 * Ranking de Talento Humano (dimensión del ILIA, edición 2024).
 * Usado para el gráfico de barras. Escala 0–100.
 */
export const talentRanking: RankingItem[] = [
  { country: { es: 'Chile', en: 'Chile' }, score: 74.3 },
  { country: { es: 'Uruguay', en: 'Uruguay' }, score: 62.11 },
  { country: { es: 'Costa Rica', en: 'Costa Rica' }, score: 46.99 },
]

export const talentRankingYear = 2024
