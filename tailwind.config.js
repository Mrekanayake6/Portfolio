/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#05060A',
        dark: {
          950: '#05060A',
          900: '#080910',
          850: '#0D0F1A',
          800: '#131625',
          700: '#1C2136',
        },
        purple: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
          glow: '#A855F7',
        },
        indigo: {
          brand: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
        blue: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          electric: '#2563EB',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          neon: '#00F0FF',
        },
      },
      fontFamily: {
        syne: ['Outfit', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'grad-main': 'linear-gradient(135deg, #A855F7 0%, #6366F1 50%, #06B6D4 100%)',
        'grad-aurora': 'linear-gradient(135deg, #C084FC 0%, #6366F1 45%, #38BDF8 100%)',
        'grad-purple-blue': 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
        'grad-blue-cyan': 'linear-gradient(135deg, #3B82F6, #06B6D4)',
        'grad-purple-cyan': 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
        'grad-dark-card': 'linear-gradient(180deg, rgba(25, 28, 44, 0.45) 0%, rgba(13, 15, 26, 0.55) 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(99, 102, 241, 0.3)',
        'glow-md': '0 0 35px -5px rgba(99, 102, 241, 0.4)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.35)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        spin_slow: 'spin 12s linear infinite',
        float: 'float 4s ease-in-out infinite',
        float_delayed: 'float 4s ease-in-out 2s infinite',
        pulse_dot: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blink: 'blink 0.9s infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
