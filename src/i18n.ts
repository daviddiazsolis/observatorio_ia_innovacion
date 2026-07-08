// SPDX-License-Identifier: Apache-2.0
export type Language = 'en' | 'es'
type TranslationMap = Record<string, string>

export const translations: Record<Language, TranslationMap> = {
  es: {
    // ── Widget de idioma / tema ──────────────────────────────
    langEn: 'EN',
    langEs: 'ES',

    // ── Navegación (sticky) ──────────────────────────────────
    navMision: 'Misión',
    navEjes: 'Ejes',
    navEstado: 'Estado de la IA',
    navRecursos: 'Recursos',
    navPublicaciones: 'Publicaciones',
    navActividades: 'Actividades',
    navEquipo: 'Equipo',
    navContacto: 'Contacto',

    // ── Hero ─────────────────────────────────────────────────
    heroBadge: 'FEN · Facultad de Economía y Negocios',
    heroTitle: 'Observatorio de IA & Innovación',
    heroTitleA: 'Observatorio de',
    heroTitleB: 'IA & Innovación',
    heroSubtitle: 'Comprender, formar y divulgar el impacto de la inteligencia artificial.',
    heroDesc:
      'Un espacio académico dedicado a monitorear el avance de la inteligencia artificial y la innovación, y a traducirlo en formación y divulgación para la comunidad universitaria, el sector público y la sociedad.',
    heroCta1: 'Explorar recursos',
    heroCta2: 'Ver cifras',

    // ── Misión ───────────────────────────────────────────────
    misionTitle: 'Misión & Propósito',
    misionSubtitle: 'Por qué existe el Observatorio y a quién sirve.',
    misionBody:
      'La inteligencia artificial avanza más rápido que la capacidad de las instituciones para comprenderla y adoptarla con criterio. El Observatorio nace para cerrar esa brecha: observar con rigor, formar con evidencia y divulgar con claridad. Ponemos el conocimiento sobre IA e innovación al alcance de estudiantes, docentes, organizaciones y ciudadanía.',
    misionValue1Title: 'Rigor',
    misionValue1Desc: 'Analizamos la evidencia y los datos antes de opinar, con fuentes trazables y verificables.',
    misionValue2Title: 'Formación',
    misionValue2Desc: 'Convertimos el conocimiento técnico en recursos didácticos accesibles para todo nivel.',
    misionValue3Title: 'Impacto',
    misionValue3Desc: 'Conectamos la investigación con decisiones reales en la universidad, la empresa y la política pública.',

    // ── Ejes de trabajo ──────────────────────────────────────
    ejesTitle: 'Ejes de trabajo',
    ejesSubtitle: 'Cuatro líneas de acción, con la formación y la divulgación en el centro.',
    eje1Title: 'Formación & divulgación',
    eje1Desc:
      'Nuestro eje central: cursos, talleres, micro-sitios interactivos y material abierto para aprender IA con las manos.',
    eje1Featured: 'Eje central',
    eje2Title: 'Monitoreo de tendencias',
    eje2Desc: 'Seguimiento del avance de la IA, la adopción y la innovación en Chile y América Latina.',
    eje3Title: 'Investigación aplicada',
    eje3Desc: 'Estudios y reportes propios que analizan casos, datos e impactos de la IA en negocios y sociedad.',
    eje4Title: 'Vínculo con la industria',
    eje4Desc: 'Puente entre la academia, las empresas y la política pública para una adopción responsable.',

    // ── Estado de la IA ──────────────────────────────────────
    estadoTitle: 'El estado de la IA en América Latina',
    estadoSubtitle: 'Cifras seleccionadas del Índice Latinoamericano de Inteligencia Artificial.',
    estadoChartTitle: 'Talento humano: países líderes',
    estadoChartNote: 'Dimensión Talento Humano del ILIA (escala 0–100).',
    estadoSourcePrefix: 'Fuente:',
    estadoSourceCta: 'ver el índice completo',
    estadoEditionLabel: 'Edición',

    // ── Recursos formativos ──────────────────────────────────
    recursosTitle: 'Recursos formativos',
    recursosSubtitle: 'Material abierto para aprender IA y ciencia de datos con las manos.',
    recursosPlaygroundTitle: 'Playgrounds interactivos de ML',
    recursosPlaygroundDesc:
      'Una colección de micro-sitios interactivos para explorar técnicas de machine learning —PCA, clustering, reglas de asociación, autoencoders y más— directamente en el navegador.',
    recursosPlaygroundCta: 'Ir al portal de aprendizaje',
    recurso1Title: 'Guías & lecturas',
    recurso1Desc: 'Artículos y guías curadas para entender conceptos clave de IA e innovación. (Próximamente)',
    recurso2Title: 'Glosario de IA',
    recurso2Desc: 'Definiciones claras de los términos que aparecen en los reportes y en las noticias. (Próximamente)',
    recurso3Title: 'Charlas & seminarios',
    recurso3Desc: 'Grabaciones y materiales de las actividades del Observatorio. (Próximamente)',

    // ── Publicaciones ────────────────────────────────────────
    publicacionesTitle: 'Publicaciones & Reportes',
    publicacionesSubtitle: 'Informes de referencia y publicaciones propias del Observatorio.',
    pubIliaTitle: 'Índice Latinoamericano de IA (ILIA) 2025',
    pubIliaDesc:
      'Tercera edición del índice de CENIA y CEPAL que mide preparación, adopción y gobernanza de la IA en 19 países de la región.',
    pubIliaCta: 'Leer el informe',
    pubSoonTitle: 'Reportes propios',
    pubSoonDesc:
      'Próximamente publicaremos análisis y briefs elaborados por el Observatorio sobre IA, innovación y su impacto en la región.',
    pubSoonBadge: 'Próximamente',

    // ── Actividades ──────────────────────────────────────────
    actividadesTitle: 'Actividades & Eventos',
    actividadesSubtitle: 'Seminarios, charlas y talleres abiertos a la comunidad.',
    act1Type: 'Seminario',
    act1Title: 'IA generativa en la educación superior',
    act1Desc: 'Un recorrido por oportunidades, riesgos y buenas prácticas de la IA generativa en la docencia.',
    act1Date: 'Por anunciar',
    act2Type: 'Taller',
    act2Title: 'Introducción práctica al machine learning',
    act2Desc: 'Sesión hands-on usando los playgrounds interactivos del Observatorio.',
    act2Date: 'Por anunciar',
    act3Type: 'Charla',
    act3Title: 'Adopción de IA en América Latina: qué dice el ILIA',
    act3Desc: 'Lectura de las principales cifras del índice y su lectura para Chile.',
    act3Date: 'Por anunciar',
    actSoon: 'Agenda en construcción — escríbenos para proponer o recibir invitaciones.',

    // ── Equipo ───────────────────────────────────────────────
    equipoTitle: 'Equipo',
    equipoSubtitle: 'Quiénes impulsan el Observatorio.',
    directorName: 'David Díaz',
    directorRole: 'Director del Observatorio',
    directorBio:
      'Profesor universitario en Machine Learning, IA, Business Intelligence y Analytics. Crea recursos educativos interactivos para acercar la IA a estudiantes y profesionales.',
    equipoJoinTitle: '¿Quieres colaborar?',
    equipoJoinDesc:
      'El Observatorio está abierto a docentes, investigadores y estudiantes que quieran sumar. Escríbenos.',

    // ── Contacto ─────────────────────────────────────────────
    contactoTitle: 'Contacto',
    contactoSubtitle: 'Conversemos sobre IA, innovación y formación.',
    contactoEmailCta: 'Escribir un correo',
    contactoNewsletterTitle: 'Recibe novedades',
    contactoNewsletterDesc:
      'Suscríbete para enterarte de nuevos recursos, reportes y actividades del Observatorio.',
    contactoNewsletterCta: 'Suscribirme',

    // ── Footer ───────────────────────────────────────────────
    footerObs: 'Observatorio de IA & Innovación',
    footerAffiliation: 'Facultad de Economía y Negocios',
    footerPortalCta: 'Portal de aprendizaje',
    footerRights: 'Recursos educativos de libre acceso.',
    footerBuiltBy: 'Dirigido por',
  },

  en: {
    // ── Language / theme widget ──────────────────────────────
    langEn: 'EN',
    langEs: 'ES',

    // ── Navigation (sticky) ──────────────────────────────────
    navMision: 'Mission',
    navEjes: 'Focus',
    navEstado: 'State of AI',
    navRecursos: 'Resources',
    navPublicaciones: 'Publications',
    navActividades: 'Activities',
    navEquipo: 'Team',
    navContacto: 'Contact',

    // ── Hero ─────────────────────────────────────────────────
    heroBadge: 'FEN · School of Economics & Business',
    heroTitle: 'AI & Innovation Observatory',
    heroTitleA: 'AI & Innovation',
    heroTitleB: 'Observatory',
    heroSubtitle: 'Understanding, teaching and communicating the impact of artificial intelligence.',
    heroDesc:
      'An academic space devoted to monitoring the advance of artificial intelligence and innovation, and turning it into education and outreach for the university community, the public sector and society.',
    heroCta1: 'Explore resources',
    heroCta2: 'See the figures',

    // ── Mission ──────────────────────────────────────────────
    misionTitle: 'Mission & Purpose',
    misionSubtitle: 'Why the Observatory exists and who it serves.',
    misionBody:
      'Artificial intelligence is advancing faster than institutions can understand and adopt it wisely. The Observatory was created to close that gap: to observe rigorously, teach with evidence and communicate clearly. We bring knowledge about AI and innovation within reach of students, faculty, organizations and citizens.',
    misionValue1Title: 'Rigor',
    misionValue1Desc: 'We analyze the evidence and the data before forming opinions, with traceable, verifiable sources.',
    misionValue2Title: 'Education',
    misionValue2Desc: 'We turn technical knowledge into accessible learning resources for every level.',
    misionValue3Title: 'Impact',
    misionValue3Desc: 'We connect research to real decisions in the university, business and public policy.',

    // ── Focus areas ──────────────────────────────────────────
    ejesTitle: 'Focus areas',
    ejesSubtitle: 'Four lines of work, with education and outreach at the core.',
    eje1Title: 'Education & outreach',
    eje1Desc:
      'Our core focus: courses, workshops, interactive micro-sites and open material to learn AI hands-on.',
    eje1Featured: 'Core focus',
    eje2Title: 'Trend monitoring',
    eje2Desc: 'Tracking the advance of AI, adoption and innovation in Chile and Latin America.',
    eje3Title: 'Applied research',
    eje3Desc: 'In-house studies and reports analyzing cases, data and the impact of AI on business and society.',
    eje4Title: 'Industry ties',
    eje4Desc: 'A bridge between academia, companies and public policy for responsible adoption.',

    // ── State of AI ──────────────────────────────────────────
    estadoTitle: 'The state of AI in Latin America',
    estadoSubtitle: 'Selected figures from the Latin American Artificial Intelligence Index.',
    estadoChartTitle: 'Human talent: leading countries',
    estadoChartNote: 'ILIA Human Talent dimension (0–100 scale).',
    estadoSourcePrefix: 'Source:',
    estadoSourceCta: 'view the full index',
    estadoEditionLabel: 'Edition',

    // ── Learning resources ───────────────────────────────────
    recursosTitle: 'Learning resources',
    recursosSubtitle: 'Open material to learn AI and data science hands-on.',
    recursosPlaygroundTitle: 'Interactive ML playgrounds',
    recursosPlaygroundDesc:
      'A collection of interactive micro-sites to explore machine-learning techniques —PCA, clustering, association rules, autoencoders and more— right in the browser.',
    recursosPlaygroundCta: 'Go to the learning hub',
    recurso1Title: 'Guides & readings',
    recurso1Desc: 'Curated articles and guides to understand key AI and innovation concepts. (Coming soon)',
    recurso2Title: 'AI glossary',
    recurso2Desc: 'Clear definitions of the terms that appear in reports and in the news. (Coming soon)',
    recurso3Title: 'Talks & seminars',
    recurso3Desc: 'Recordings and materials from the Observatory’s activities. (Coming soon)',

    // ── Publications ─────────────────────────────────────────
    publicacionesTitle: 'Publications & Reports',
    publicacionesSubtitle: 'Reference reports and the Observatory’s own publications.',
    pubIliaTitle: 'Latin American AI Index (ILIA) 2025',
    pubIliaDesc:
      'Third edition of the CENIA and ECLAC index measuring AI readiness, adoption and governance across 19 countries in the region.',
    pubIliaCta: 'Read the report',
    pubSoonTitle: 'In-house reports',
    pubSoonDesc:
      'We will soon publish analyses and briefs by the Observatory on AI, innovation and their impact on the region.',
    pubSoonBadge: 'Coming soon',

    // ── Activities ───────────────────────────────────────────
    actividadesTitle: 'Activities & Events',
    actividadesSubtitle: 'Seminars, talks and workshops open to the community.',
    act1Type: 'Seminar',
    act1Title: 'Generative AI in higher education',
    act1Desc: 'A tour of the opportunities, risks and good practices of generative AI in teaching.',
    act1Date: 'To be announced',
    act2Type: 'Workshop',
    act2Title: 'Hands-on introduction to machine learning',
    act2Desc: 'A hands-on session using the Observatory’s interactive playgrounds.',
    act2Date: 'To be announced',
    act3Type: 'Talk',
    act3Title: 'AI adoption in Latin America: what the ILIA says',
    act3Desc: 'A reading of the index’s main figures and what they mean for Chile.',
    act3Date: 'To be announced',
    actSoon: 'Agenda in the making — write to us to propose events or receive invitations.',

    // ── Team ─────────────────────────────────────────────────
    equipoTitle: 'Team',
    equipoSubtitle: 'The people behind the Observatory.',
    directorName: 'David Díaz',
    directorRole: 'Director of the Observatory',
    directorBio:
      'University professor in Machine Learning, AI, Business Intelligence and Analytics. Builds interactive educational resources to bring AI closer to students and professionals.',
    equipoJoinTitle: 'Want to collaborate?',
    equipoJoinDesc:
      'The Observatory is open to faculty, researchers and students who want to join. Write to us.',

    // ── Contact ──────────────────────────────────────────────
    contactoTitle: 'Contact',
    contactoSubtitle: 'Let’s talk about AI, innovation and education.',
    contactoEmailCta: 'Send an email',
    contactoNewsletterTitle: 'Get updates',
    contactoNewsletterDesc:
      'Subscribe to hear about new resources, reports and activities from the Observatory.',
    contactoNewsletterCta: 'Subscribe',

    // ── Footer ───────────────────────────────────────────────
    footerObs: 'AI & Innovation Observatory',
    footerAffiliation: 'School of Economics & Business',
    footerPortalCta: 'Learning hub',
    footerRights: 'Open-access educational resources.',
    footerBuiltBy: 'Directed by',
  },
}
