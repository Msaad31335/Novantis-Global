/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlack: '#000000',
        bgDark: '#050507',
        bgCardDark: '#0A0A0C',
        cyanAccent: '#00E5FF',
        cyanGlow: '#00F0FF',
        primaryCyan: '#38BDF8',
      },
      fontFamily: {
        heading: ["'Instrument Serif'", "Georgia", "serif"],
        body: ["'Barlow'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'orbit-spin': 'orbit-spin 38s linear infinite',
        'counter-spin': 'counter-spin 38s linear infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'orbit-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'counter-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
