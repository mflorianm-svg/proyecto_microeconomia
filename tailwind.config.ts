import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'harvard-crimson': '#A41034',
        'page-bg': '#f5f4f1',
        'text-primary': '#1a1a1a',
        'text-muted': '#6b7280',
        'neutral-divider': '#e5e7eb',
        'body-bg': '#FFFFFF',
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'Inter', 'sans-serif'],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
