interface SectionBlock {
  title: string;
  content: string;
}

const sections: SectionBlock[] = [
  {
    title: 'El Problema',
    content:
      'Los usuarios del transporte público urbano de Guatemala viven con la incertidumbre de no saber cuándo pasará un bus, si ya pasó o cuánto tiempo deberán esperar. Esto genera desorganización, pérdida de tiempo y toma de decisiones basadas en suposiciones en lugar de información confiable.',
  },
  {
    title: 'La Solución',
    content:
      'NEXVIA es una plataforma web y móvil que centraliza información en tiempo real sobre rutas, horarios, tarifas, estaciones y ubicación de unidades. Elimina la incertidumbre del usuario y mejora la organización del tiempo y la eficiencia del sistema de transporte.',
  },
  {
    title: 'Propuesta de Valor',
    content:
      'A diferencia de métodos tradicionales, NEXVIA no solo informa: organiza y optimiza. Los usuarios anticipan su entorno y toman decisiones informadas; los operadores gestionan rutas con mayor eficiencia y menor saturación.',
  },
  {
    title: 'Modelo de Negocio',
    content:
      'Monetización mediante publicidad digital de negocios locales, suscripciones premium sin anuncios para usuarios finales, y acceso de pago para conductores y empresas de transporte. El punto de equilibrio se proyecta antes del segundo año de operaciones.',
  },
  {
    title: 'Análisis FODA — Resumen',
    content:
      'Fortalezas: innovación tecnológica, accesibilidad digital y conocimiento local del sistema de transporte guatemalteco. Oportunidades: crecimiento de smartphones, ciudades inteligentes y ausencia de competidores directos especializados. Debilidades: dependencia de datos generados por usuarios e inversión inicial elevada. Amenazas: competidores con mayor capital y resistencia al cambio tecnológico.',
  },
  {
    title: 'Visión a Largo Plazo',
    content:
      'Ser la plataforma líder de movilidad urbana en Guatemala, expandiendo funcionalidades hacia pagos digitales unificados, monitoreo escolar y empresarial, análisis de datos urbanos y cobertura de múltiples medios de transporte en todo el país.',
  },
];

const highlights = [
  { label: 'Empresa', value: 'NEXVIA' },
  { label: 'Sector', value: 'Movilidad Urbana' },
  { label: 'Mercado Objetivo', value: 'Adultos 20–50 años, Guatemala' },
  { label: 'Inversión Inicial', value: 'Q 50,000.00' },
  { label: 'Meta Año 1', value: '2,000,000 usuarios activos' },
  { label: 'Punto de Equilibrio', value: 'Mes 24 de operaciones' },
];

export default function ProjectOverview() {
  return (
    <section
      id="acerca-del-proyecto"
      aria-labelledby="overview-heading"
      className="px-4 md:px-8 py-12"
    >
      {/* Section heading */}
      <div className="mb-8">
        <span className="block w-16 h-1 bg-harvard-crimson mb-4" />
        <h2
          id="overview-heading"
          className="font-serif text-2xl md:text-3xl text-text-primary font-semibold"
        >
          Acerca del Proyecto
        </h2>
        <p className="font-sans text-base text-text-muted mt-2">
          Síntesis ejecutiva — Plan de Negocios NEXVIA
        </p>
      </div>

      {/* Highlights grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="border-t-4 border-harvard-crimson bg-white p-4 shadow-sm rounded-b"
          >
            <p className="font-sans text-xs text-text-muted uppercase tracking-wide mb-1">
              {item.label}
            </p>
            <p className="font-sans font-semibold text-text-primary text-sm leading-snug">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Content sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-serif text-lg font-semibold text-text-primary mb-2">
              {section.title}
            </h3>
            <p className="font-sans text-base text-text-primary leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Slogan callout */}
      <div className="mt-10 border-l-4 border-harvard-crimson pl-6 py-2">
        <p className="font-serif text-xl italic text-text-primary">
          "Tu tiempo y destino son nuestro compromiso"
        </p>
        <p className="font-sans text-sm text-text-muted mt-1">— Slogan NEXVIA</p>
      </div>
    </section>
  );
}
