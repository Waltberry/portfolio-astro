
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        // Calm palette
        bg: 'hsl(220 15% 97%)',
        card: 'hsl(220 20% 99%)',
        ink: 'hsl(220 25% 15%)',
        subink: 'hsl(222 10% 40%)',
        accent: 'hsl(200 90% 40%)',
        accentMuted: 'hsl(200 70% 92%)'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Inter', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: ['class', '[data-theme="dark"]'],
};
