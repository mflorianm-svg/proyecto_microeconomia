import type { ProjectData } from '../../types';

interface HeroSectionProps {
  data: ProjectData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section aria-labelledby="hero-heading" className="px-4 md:px-8 py-12">
      <div className="max-w-8xl mx-auto">
        {/* Accent bar */}
        <span className="block w-16 h-1 bg-harvard-crimson mb-6" />

        <h1
          id="hero-heading"
          className="font-serif text-4xl md:text-5xl text-text-primary font-bold"
        >
          {data.subject}
        </h1>

        <h2 className="font-serif text-2xl md:text-3xl text-text-primary mt-2">
          {data.topic}
        </h2>

        <p className="font-sans text-base text-text-primary mt-4 leading-relaxed">
          {data.description}
        </p>

        <p className="font-sans text-sm text-text-muted mt-4">
          {data.institution} — {data.period}
        </p>
      </div>
    </section>
  );
}
