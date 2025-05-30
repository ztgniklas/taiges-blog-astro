/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            h1: {
              color: '#fff',
              fontSize: '2.25rem',
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              color: '#fff',
              fontSize: '1.875rem',
              fontWeight: '700',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            h3: {
              color: '#fff',
              fontSize: '1.5rem',
              fontWeight: '700',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h4: {
              color: '#fff',
              fontSize: '1.25rem',
              fontWeight: '700',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
            },
            h5: {
              color: '#fff',
              fontSize: '1.125rem',
              fontWeight: '700',
              marginTop: '1rem',
              marginBottom: '0.5rem',
            },
            h6: {
              color: '#fff',
              fontSize: '1rem',
              fontWeight: '700',
              marginTop: '0.75rem',
              marginBottom: '0.5rem',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            a: {
              color: '#f472b6',
              '&:hover': {
                color: '#f9a8d4',
              },
            },
            strong: {
              color: '#fff',
              fontWeight: '600',
            },
            code: {
              color: '#fff',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            pre: {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
            },
            blockquote: {
              borderLeftColor: 'rgba(236, 72, 153, 0.5)',
              color: '#fff',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 