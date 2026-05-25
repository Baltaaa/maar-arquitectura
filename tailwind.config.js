/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background:                  '#F5F3EF',
        surface:                     '#EDEBE6',
        'surface-dim':               '#F5F3EF',
        'surface-bright':            '#FFFFFF',
        'surface-container':         '#E8E5DF',
        'surface-container-low':     '#EDEBE6',
        'surface-container-high':    '#E2DED8',
        'surface-container-highest': '#0A0A0A',
        'surface-container-lowest':  '#FAFAF8',
        'on-surface':                '#0A0A0A',
        'on-surface-variant':        '#6B6B6B',

        primary:                     '#FFFFFF',
        'primary-container':         '#0A0A0A',
        'on-primary':                '#FFFFFF',
        'on-primary-container':      '#F5F3EF',

        secondary:                   '#4A4A4A',
        'secondary-container':       '#E2DED8',
        'on-secondary':              '#FFFFFF',
        'on-secondary-container':    '#0A0A0A',

        outline:                     '#B0AAA4',
        'outline-variant':           '#E2DED8',
        'primary-fixed':             '#9A9590',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans:  ['Inter', 'sans-serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-lg':        ['64px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg-mobile': ['42px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'headline-md':       ['24px', { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
        'body-lg':           ['18px', { lineHeight: '1.6' }],
        'body-md':           ['15px', { lineHeight: '1.5' }],
        'label-caps':        ['12px', { lineHeight: '1',    letterSpacing: '0.1em'  }],
        'mono-ui':           ['13px', { lineHeight: '1.4' }],
      },
      spacing: {
        'gutter':           '24px',
        'margin-mobile':    '16px',
        'margin-desktop':   '64px',
        'container-max':    '1200px',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm:      '0.125rem',
        md:      '0.375rem',
        lg:      '0.5rem',
        xl:      '0.75rem',
      },
    },
  },
  plugins: [],
}
