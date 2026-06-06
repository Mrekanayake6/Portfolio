/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0B0B0F',
        purple: { DEFAULT: '#8B5CF6', light: '#A78BFA', dark: '#7C3AED' },
        blue: { DEFAULT: '#3B82F6', light: '#60A5FA' },
        cyan: { DEFAULT: '#06B6D4', light: '#22D3EE' },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'grad-main': 'linear-gradient(135deg, #8B5CF6, #3B82F6, #06B6D4)',
        'grad-purple-blue': 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
        'grad-blue-cyan': 'linear-gradient(135deg, #3B82F6, #06B6D4)',
        'grad-purple-cyan': 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
      },
      animation: {
        spin_slow: 'spin 4s linear infinite',
        float: 'float 3s ease-in-out infinite',
        pulse_dot: 'pulse 2s infinite',
        blink: 'blink 0.8s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}