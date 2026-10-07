import type { ProjectData } from '../../types';

interface HeaderSectionProps {
  data: ProjectData;
}

export default function HeaderSection({ data }: HeaderSectionProps) {
  const handleScrollToOverview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('acerca-del-proyecto');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="border-b border-neutral-divider bg-page-bg sticky top-0 z-50">
      <div className="max-w-content mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="block w-3 h-8 bg-harvard-crimson rounded-sm flex-shrink-0" />
            <span className="font-serif text-lg font-semibold text-text-primary leading-tight">
              {data.subject}
            </span>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegación principal">
            <ul className="flex items-center gap-1 md:gap-2 list-none">
              <li>
                <a
                  href="#acerca-del-proyecto"
                  onClick={handleScrollToOverview}
                  className="font-sans text-sm text-text-primary hover:text-harvard-crimson px-3 py-2 rounded transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvard-crimson"
                >
                  Acerca del Proyecto
                </a>
              </li>
              <li>
                <a
                  href={data.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver prototipo de NEXVIA en una nueva pestaña"
                  className="font-sans text-sm font-medium bg-harvard-crimson text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvard-crimson focus-visible:ring-offset-2 whitespace-nowrap"
                >
                  Ver Prototipo →
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
