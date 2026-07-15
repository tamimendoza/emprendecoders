import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
          50: 'rgb(255 240 243 / <alpha-value>)',
          100: 'rgb(255 214 224 / <alpha-value>)',
          200: 'rgb(255 173 191 / <alpha-value>)',
          300: 'rgb(255 133 158 / <alpha-value>)',
          400: 'rgb(240 96 133 / <alpha-value>)',
          500: 'rgb(232 50 97 / <alpha-value>)',
          600: 'rgb(194 40 80 / <alpha-value>)',
          700: 'rgb(156 30 63 / <alpha-value>)',
          800: 'rgb(117 20 46 / <alpha-value>)',
          900: 'rgb(79 10 30 / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary-rgb) / <alpha-value>)',
          50: 'rgb(240 242 245 / <alpha-value>)',
          100: 'rgb(214 219 227 / <alpha-value>)',
          200: 'rgb(160 170 191 / <alpha-value>)',
          300: 'rgb(107 123 154 / <alpha-value>)',
          400: 'rgb(61 82 117 / <alpha-value>)',
          500: 'rgb(22 36 62 / <alpha-value>)',
          600: 'rgb(18 30 51 / <alpha-value>)',
          700: 'rgb(14 24 40 / <alpha-value>)',
          800: 'rgb(10 18 29 / <alpha-value>)',
          900: 'rgb(6 12 18 / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
          50: 'rgb(255 253 240 / <alpha-value>)',
          100: 'rgb(255 245 204 / <alpha-value>)',
          200: 'rgb(255 235 153 / <alpha-value>)',
          300: 'rgb(254 222 102 / <alpha-value>)',
          400: 'rgb(254 212 51 / <alpha-value>)',
          500: 'rgb(254 204 22 / <alpha-value>)',
          600: 'rgb(212 168 0 / <alpha-value>)',
          700: 'rgb(168 133 0 / <alpha-value>)',
          800: 'rgb(124 98 0 / <alpha-value>)',
          900: 'rgb(80 63 0 / <alpha-value>)',
        },
        navy: {
          DEFAULT: '#16243E',
          50: '#F0F2F5',
          100: '#D6DBE3',
          200: '#A0AABF',
          300: '#6B7B9A',
          400: '#3D5275',
          500: '#16243E',
          600: '#121E33',
          700: '#0E1828',
          800: '#0A121D',
          900: '#060C12',
        },
        dark: {
          DEFAULT: '#0E1A2E',
          2: '#16243E',
          3: '#1E3456',
        },
        light: {
          DEFAULT: '#F8FAFC',
          2: '#F1F5F9',
        },
      },
      textColor: {
        skin: {
          primary: 'var(--color-text)',
          secondary: 'var(--color-text-2)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-bg)',
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          'surface-2': 'var(--color-surface-2)',
          'surface-hover': 'var(--color-surface-hover)',
          muted: 'var(--color-muted)',
        },
      },
      borderColor: {
        skin: {
          DEFAULT: 'var(--color-border)',
          hover: 'var(--color-border-hover)',
          subtle: 'var(--color-border-subtle)',
        },
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(0 0 0 / 0.03), 0 1px 3px 0 rgb(0 0 0 / 0.04)',
        card: '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.03)',
        elevated: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
        glow: '0 4px 24px rgb(var(--color-primary-rgb) / 0.35)',
        'glow-accent': '0 4px 24px rgb(var(--color-accent-rgb) / 0.30)',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
