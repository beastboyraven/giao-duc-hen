/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0F8B8D',
          tealDark: '#0A6F71',
          tealLight: '#7FCFD0',
          coral: '#FF6B6B',
          coralDark: '#E85555',
          sky: '#EAF8FF',
          green: '#DFF5E3',
          greenDeep: '#34A853',
          cream: '#FFF8EF',
          ink: '#1F2937',
          warning: '#F59E0B',
          danger: '#DC2626'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'Be Vietnam Pro',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ]
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(15, 139, 141, 0.18)',
        card: '0 8px 24px -10px rgba(31, 41, 55, 0.18)',
        cardHover: '0 18px 40px -12px rgba(15, 139, 141, 0.28)'
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
        floatY: 'floatY 4s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite'
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(180deg, #EAF8FF 0%, #FFFFFF 60%, #FFF8EF 100%)',
        'hero-soft': 'radial-gradient(80% 80% at 50% 0%, #DFF5E3 0%, #EAF8FF 50%, #FFFFFF 100%)'
      }
    }
  },
  plugins: []
}
