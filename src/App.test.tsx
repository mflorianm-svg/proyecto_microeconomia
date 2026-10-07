// Feature: microeconomia-landing-page
// Property 1: Responsive layout conforms to breakpoint rules
// For any viewport width [320, 1920], the key layout classes are present.
// Note: jsdom does not compute CSS; this test verifies Tailwind class presence
// as a structural proxy for correct responsive layout behavior.

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { render } from '@testing-library/react';
import App from './App';

describe('App composition and structure', () => {
  it('renders sections in the correct order: Hero → PDF → Video → Members', () => {
    const { container } = render(<App />);
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(4);
    
    // Verify heading text order
    const headings = Array.from(container.querySelectorAll('h1, h2'))
      .map((el) => el.textContent ?? '');
    
    const heroH1Index = headings.findIndex((t) => t.includes('Microeconomía'));
    const pdfH2Index = headings.findIndex((t) => t.includes('Documento del Proyecto'));
    const videoH2Index = headings.findIndex((t) => t.includes('Video Explicativo'));
    const membersH2Index = headings.findIndex((t) => t.includes('Integrantes del Grupo'));
    
    expect(heroH1Index).toBeGreaterThanOrEqual(0);
    expect(pdfH2Index).toBeGreaterThanOrEqual(0);
    expect(videoH2Index).toBeGreaterThanOrEqual(0);
    expect(membersH2Index).toBeGreaterThanOrEqual(0);
    
    expect(heroH1Index).toBeLessThan(pdfH2Index);
    expect(pdfH2Index).toBeLessThan(videoH2Index);
    expect(videoH2Index).toBeLessThan(membersH2Index);
  });

  it('renders hr separators between sections', () => {
    const { container } = render(<App />);
    const separators = container.querySelectorAll('hr');
    expect(separators.length).toBeGreaterThanOrEqual(3);
  });

  it('Property 1: main container has max-w-content class for 1200px centering', () => {
    // For any viewport width, the main container should carry the centering class.
    // This is a structural invariant independent of actual viewport width.
    fc.assert(
      fc.property(fc.integer({ min: 320, max: 1920 }), (_viewportWidth) => {
        const { container } = render(<App />);
        const main = container.querySelector('main');
        expect(main).not.toBeNull();
        expect(main?.className).toContain('max-w-content');
        return true;
      }),
      { numRuns: 100 }
    );
  });

  it('Property 1: MembersSection grid has responsive column classes', () => {
    fc.assert(
      fc.property(fc.integer({ min: 320, max: 1920 }), (_viewportWidth) => {
        const { container } = render(<App />);
        const grid = container.querySelector('ul[role="list"]');
        expect(grid).not.toBeNull();
        expect(grid?.className).toContain('grid-cols-1');
        expect(grid?.className).toContain('md:grid-cols-2');
        return true;
      }),
      { numRuns: 100 }
    );
  });

  it('Property 1: PDFViewer has responsive height classes', () => {
    fc.assert(
      fc.property(fc.integer({ min: 320, max: 1920 }), (_viewportWidth) => {
        const { container } = render(<App />);
        const pdfObject = container.querySelector('object[type="application/pdf"]');
        expect(pdfObject).not.toBeNull();
        expect(pdfObject?.className).toContain('h-[400px]');
        expect(pdfObject?.className).toContain('md:h-[600px]');
        return true;
      }),
      { numRuns: 100 }
    );
  });
});
