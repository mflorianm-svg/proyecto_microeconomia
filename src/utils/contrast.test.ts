import { describe, it, expect } from 'vitest';
import { contrastRatio } from './contrast';

describe('WCAG 2.1 AA contrast ratios', () => {
  const pairs: Array<[string, string, number, string]> = [
    ['#1a1b1b', '#FFFFFF', 4.5, 'text-primary on white'],
    ['#A41034', '#FFFFFF', 4.5, 'harvard-crimson on white'],
    ['#6b7280', '#FFFFFF', 4.5, 'text-muted on white'],
    ['#FFFFFF', '#A41034', 4.5, 'white on harvard-crimson button'],
  ];

  it.each(pairs)('contrastRatio(%s, %s) >= %d (%s)', (c1, c2, threshold) => {
    expect(contrastRatio(c1, c2)).toBeGreaterThanOrEqual(threshold);
  });
});
